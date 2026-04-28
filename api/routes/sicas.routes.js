// api/routes/sicas.routes.js
const express = require("express");
const router = express.Router();
const axios = require("axios"); // Para consumir el gateway de IA
const multer = require("multer");
const nodemailer = require("nodemailer");
const ExcelJS = require("exceljs");
const {
  consultarPolizasOptimizado,
  transformarRFCParaPrefijo,
  obtenerLinkDescarga,
  consultarPolizasPorRFC,
  getPolizasFiltradasPorRFC,
} = require("../services/sicasService.js");
// api/routes/sicas.routes.js
const https = require("https"); // Asegúrate que esta línea exista
const http = require("http"); // Asegúrate que esta línea exista
const { URL } = require("url"); // Asegúrate que esta línea exista

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 }, // 8MB
});

const createTransporter = () => {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
};

router.post("/agente", upload.single("cv"), async (req, res) => {
  try {
    const {
      nombreCompleto = "",
      telefono = "",
      ciudad = "",
      estado = "",
      correo = "",
      mensaje = "",
    } = req.body || {};

    if (!nombreCompleto || !telefono || !ciudad || !estado || !correo) {
      return res.status(400).json({
        success: false,
        message: "Faltan campos obligatorios del formulario.",
      });
    }

    const transporter = createTransporter();
    if (!transporter) {
      return res.status(500).json({
        success: false,
        message: "El servidor de correo no está configurado.",
      });
    }

    const toEmail = process.env.AGENTE_FORM_TO || process.env.SMTP_USER;
    const fromEmail = process.env.AGENTE_FORM_FROM || process.env.SMTP_USER;

    const html = `
      <h2>Nueva solicitud para unirse como agente</h2>
      <p><strong>Nombre completo:</strong> ${nombreCompleto}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Ciudad:</strong> ${ciudad}</p>
      <p><strong>Estado:</strong> ${estado}</p>
      <p><strong>Correo electrónico:</strong> ${correo}</p>
      <p><strong>Experiencia:</strong> ${mensaje || "No proporcionada"}</p>
    `;

    const attachments = req.file
      ? [
          {
            filename: req.file.originalname,
            content: req.file.buffer,
            contentType: req.file.mimetype,
          },
        ]
      : [];

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `Nuevo registro de agente - ${nombreCompleto}`,
      replyTo: correo,
      html,
      attachments,
    });

    return res.json({
      success: true,
      message: "Solicitud enviada correctamente.",
    });
  } catch (error) {
    console.error("Error en /api/agente:", error);
    return res.status(500).json({
      success: false,
      message: "No se pudo enviar el formulario.",
    });
  }
});

router.post("/endosos/notificar", async (req, res) => {
  try {
    const {
      folio = "",
      empresaNombre = "",
      empresaRfc = "",
      emailSolicitante = "",
      registros = [],
    } = req.body || {};

    if (
      !folio ||
      !empresaNombre ||
      !Array.isArray(registros) ||
      !registros.length
    ) {
      return res.status(400).json({
        success: false,
        message: "Faltan datos obligatorios para enviar la notificación.",
      });
    }

    const normalizarCompania = (s) =>
      String(s || "")
        .trim()
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ");
    const COMPANIA_ATLAS = "SEGUROS ATLAS SA";
    const registrosAtlas = registros.filter(
      (r) => normalizarCompania(r.compania || r.ciaNombre) === COMPANIA_ATLAS,
    );

    const transporter = createTransporter();
    if (!transporter) {
      return res.status(500).json({
        success: false,
        message: "El servidor de correo no está configurado.",
      });
    }

    const fromEmail = process.env.ENDOSOS_FORM_FROM || process.env.SMTP_USER;
    const workbook = new ExcelJS.Workbook();

    const parentescoCodigo = (p) => {
      const n = Number(p);
      if (n === 1) return "T";
      if (n === 2) return "C";
      if (n === 3) return "H";
      return "";
    };
    const tipoCodigo = (m) => {
      const x = String(m || "").toLowerCase();
      if (x.includes("alta")) return "A";
      if (x.includes("baja")) return "B";
      if (x.includes("corre")) return "CD";
      return "";
    };
    const sexoCodigo = (s) => {
      const x = String(s || "").toLowerCase();
      if (x.startsWith("m")) return "M";
      if (x.startsWith("f")) return "F";
      return "";
    };

    // Hoja 1: seguimiento completo (todos los ramos / compañías)
    const wsAll = workbook.addWorksheet("Seguimiento portal");
    wsAll.columns = [
      { header: "FOLIO", key: "folio", width: 18 },
      { header: "RAMO", key: "ramo", width: 14 },
      { header: "POLIZA", key: "poliza", width: 18 },
      { header: "COMPANIA", key: "compania", width: 28 },
      { header: "MOVIMIENTO", key: "movimiento", width: 22 },
      { header: "CERTIFICADO", key: "certificado", width: 14 },
      { header: "PARENTESCO", key: "parentesco", width: 12 },
      { header: "NOMBRE", key: "nombre", width: 36 },
      { header: "SEXO", key: "sexo", width: 10 },
      { header: "FECHA NAC.", key: "fechaNacimiento", width: 14 },
      { header: "FECHA ALTA", key: "fechaAlta", width: 14 },
      { header: "FECHA ANTIG.", key: "fechaAntiguedad", width: 14 },
      { header: "RFC EMPRESA", key: "empresaRfc", width: 16 },
      { header: "EMPRESA", key: "empresaNombre", width: 32 },
      { header: "CAPTURISTA", key: "capturadorEmail", width: 28 },
    ];

    wsAll.mergeCells("A1:O1");
    wsAll.getCell("A1").value = "ENDOSOS — PORTAL EMPRESARIAL IBS";
    wsAll.getCell("A1").font = { bold: true, size: 14 };
    wsAll.getCell("A1").alignment = { horizontal: "center" };

    wsAll.mergeCells("A2:O2");
    wsAll.getCell(
      "A2",
    ).value = `Folio: ${folio}  |  Empresa: ${empresaNombre}  |  RFC: ${
      empresaRfc || "—"
    }`;
    wsAll.getCell("A2").font = { bold: true };

    wsAll.addRow([]);
    const headerAll = wsAll.addRow(wsAll.columns.map((c) => c.header));
    headerAll.font = { bold: true };
    headerAll.eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFE2E8F0" },
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    registros.forEach((r) => {
      const row = wsAll.addRow({
        folio,
        ramo: r.ramoEndoso || r.ramo || "—",
        poliza: r.poliza || "",
        compania: r.compania || "",
        movimiento: r.tipoMovimiento || "",
        certificado: r.certificado || "",
        parentesco:
          r.parentescoLabel != null
            ? r.parentescoLabel
            : parentescoCodigo(r.parentesco),
        nombre: r.nombreCompleto || "",
        sexo: r.sexo || "",
        fechaNacimiento: r.fechaNacimiento || "",
        fechaAlta: r.fechaAlta || "",
        fechaAntiguedad: r.fechaAntiguedad || "",
        empresaRfc: r.empresaRfc || empresaRfc || "",
        empresaNombre: r.empresaNombre || empresaNombre || "",
        capturadorEmail: r.capturadorEmail || emailSolicitante || "",
      });
      row.eachCell((cell) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    // Hoja 2 (opcional): formato movimientos personas — solo filas ATLAS GMM
    if (registrosAtlas.length) {
      const ws = workbook.addWorksheet("Formato Atlas GMM");
      ws.columns = [
        { header: "SECCION", key: "seccion", width: 12 },
        { header: "No. CERT", key: "certificado", width: 14 },
        { header: "NOMBRE", key: "nombre", width: 34 },
        { header: "TIPO MOV.", key: "movimiento", width: 14 },
        { header: "PARENT.", key: "parentesco", width: 10 },
        { header: "SEXO", key: "sexo", width: 10 },
        { header: "FECHA DE NACIMIENTO", key: "fechaNacimiento", width: 20 },
        { header: "FECHA DE MOVIMIENTO", key: "fechaMovimiento", width: 20 },
        { header: "DICE", key: "dice", width: 16 },
        { header: "DEBE DECIR", key: "debeDecir", width: 16 },
        { header: "OBSERVACIONES", key: "obs", width: 24 },
      ];

      ws.mergeCells("A1:K1");
      ws.getCell("A1").value =
        "REPORTE DE MOVIMIENTOS - SEGURO DE PERSONAS (ATLAS)";
      ws.getCell("A1").font = { bold: true, size: 14 };
      ws.getCell("A1").alignment = { horizontal: "center" };

      ws.mergeCells("A2:D2");
      ws.getCell("A2").value = `EMPRESA: ${empresaNombre}`;
      ws.getCell("A2").font = { bold: true };

      ws.mergeCells("E2:G2");
      ws.getCell("E2").value = `RFC: ${empresaRfc || "—"}`;
      ws.getCell("E2").font = { bold: true };

      ws.mergeCells("H2:K2");
      ws.getCell("H2").value = `FOLIO: ${folio}`;
      ws.getCell("H2").font = { bold: true };

      ws.addRow([]);
      const headerRow = ws.addRow(ws.columns.map((c) => c.header));
      headerRow.font = { bold: true };
      headerRow.alignment = { horizontal: "center" };
      headerRow.eachCell((cell) => {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFE2E8F0" },
        };
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });

      registrosAtlas.forEach((r) => {
        const row = ws.addRow({
          seccion: "GMM",
          certificado: r.certificado || "",
          nombre: r.nombreCompleto || "",
          movimiento: tipoCodigo(r.tipoMovimiento),
          parentesco: parentescoCodigo(r.parentesco),
          sexo: sexoCodigo(r.sexo),
          fechaNacimiento: r.fechaNacimiento || "",
          fechaMovimiento: r.fechaAlta || "",
          dice: "",
          debeDecir: "",
          obs: `Poliza: ${r.poliza || ""}`,
        });
        row.eachCell((cell) => {
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
        });
      });
    }

    const excelBuffer = await workbook.xlsx.writeBuffer();
    const solicitante = String(
      emailSolicitante || registros?.[0]?.capturadorEmail || "",
    )
      .trim()
      .toLowerCase();
    const emailValido = (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());
    const destinatariosEmision = Array.from(
      new Set(
        ["emision2@ibsconsultores.com", process.env.ENDOSOS_FORM_TO]
          .filter((x) => x && emailValido(x))
          .map((x) => String(x).trim().toLowerCase()),
      ),
    );
    const total = registros.length;
    const htmlEmision = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
        <h2>Nuevo endoso registrado en portal</h2>
        <p>Se adjunta Excel de seguimiento con <strong>${total}</strong> movimiento(s).</p>
        <p><strong>Folio:</strong> ${folio}</p>
        <p><strong>Empresa:</strong> ${empresaNombre}</p>
        <p><strong>RFC:</strong> ${empresaRfc || "—"}</p>
        <p><strong>Solicitante:</strong> ${
          solicitante || "No proporcionado"
        }</p>
        ${
          registrosAtlas.length
            ? `<p>Incluye hoja adicional con formato personas para <strong>SEGUROS ATLAS SA</strong> (${registrosAtlas.length} fila(s)).</p>`
            : ""
        }
      </div>
    `;

    await transporter.sendMail({
      from: fromEmail,
      to: destinatariosEmision.join(","),
      subject: `Endosos portal — Folio ${folio} (${total} reg.)`,
      html: htmlEmision,
      attachments: [
        {
          filename: `Endosos_seguimiento_${folio}.xlsx`,
          content: Buffer.from(excelBuffer),
          contentType:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      ],
    });

    if (solicitante && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(solicitante)) {
      const listaHtml = registros
        .map(
          (r, i) =>
            `<li>${i + 1}. ${String(r.tipoMovimiento || "—")} — ${String(
              r.nombreCompleto || "—",
            )} — Póliza ${String(r.poliza || "—")}</li>`,
        )
        .join("");
      await transporter.sendMail({
        from: fromEmail,
        to: solicitante,
        subject: `Confirmación de solicitud de endosos — Folio ${folio}`,
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
            <h2>Tu solicitud fue enviada</h2>
            <p>Hola,</p>
            <p>Registramos tu solicitud de endoso(s) con el siguiente folio:</p>
            <p style="font-size:18px;font-weight:bold;color:#002FA6;">${folio}</p>
            <p>Empresa: <strong>${empresaNombre}</strong></p>
            <p>Puedes consultar el estado como <strong>pendiente</strong> en el portal empresarial (sección Endosos).</p>
            <p>Movimientos capturados:</p>
            <ul>${listaHtml}</ul>
            <p style="color:#64748b;font-size:13px;">No es necesario contestar este correo ya que se genera automaticamente por el sistema, cualquier duda puedes escribirnos en el siguiente correo: <a href="mailto:emision2@ibsconsultores.com">emision2@ibsconsultores.com</a></p>
          </div>
        `,
      });
    }

    return res.json({
      success: true,
      message:
        "Notificación enviada a emisión y confirmación al capturador (si hubo correo).",
    });
  } catch (error) {
    console.error("Error en /api/endosos/notificar:", error);
    return res.status(500).json({
      success: false,
      message: "No se pudo enviar la notificación de correo.",
    });
  }
});

router.get("/polizas", async (req, res) => {
  const { rfc } = req.query;

  console.log("\n==============================");
  console.log("[GET] /api/polizas");
  console.log("query.rfc:", rfc);
  console.log("==============================\n");

  try {
    if (!rfc) {
      return res.status(400).json({ success: false, message: "Falta rfc" });
    }

    console.log("[1] entrando al try");
    console.log("[2] consultando SICAS...");

    // ✅ Aquí ya usamos tu service real
    const polizas = await consultarPolizasOptimizado(rfc);

    console.log("[3] SICAS OK. total:", polizas.length);

    // ✅ Clasificación por IDSRamo (ajusta números si en tu SICAS son distintos)
    const autos = [];
    const gmm = [];
    const vida = [];

    for (const p of polizas) {
      const id = String(p.IDSRamo || "").trim();

      // ⚠️ AJUSTA ESTOS IDS A LOS TUYOS
      // Normalmente SICAS usa IDs de ramo distintos por instalación.
      // Deja logs para ver qué IDs te llegan.
      if (
        id === "1" ||
        /auto/i.test(p.ramo || "") ||
        /auto/i.test(p.subRamo || "")
      ) {
        autos.push(p);
      } else if (
        id === "2" ||
        /gastos|m[eé]dicos/i.test(p.ramo || "") ||
        /gmm/i.test(p.subRamo || "")
      ) {
        gmm.push(p);
      } else if (
        id === "3" ||
        /vida/i.test(p.ramo || "") ||
        /vida/i.test(p.subRamo || "")
      ) {
        vida.push(p);
      }
    }

    // ✅ si quieres ver qué IDS trae SICAS:
    const idsEncontrados = [
      ...new Set(polizas.map((x) => String(x.IDSRamo || "").trim())),
    ];
    console.log("IDSRamo encontrados:", idsEncontrados);

    return res.json({
      success: true,
      autos,
      gmm,
      vida,
    });
  } catch (err) {
    console.error("🔥 ERROR REAL en /api/polizas");
    console.error("message:", err?.message);
    console.error("stack:", err?.stack);
    console.error("axios status:", err?.response?.status);
    console.error("axios data:", err?.response?.data);

    return res.status(500).json({
      success: false,
      message: "Error interno al consultar pólizas",
      debug: {
        message: err?.message,
        status: err?.response?.status,
        data: err?.response?.data,
      },
    });
  }
});

router.get("/polizas/vigentes", async (req, res) => {
  const { rfc } = req.query;
  if (!rfc) return res.status(400).json({ error: "RFC requerido" });

  try {
    const resultado = await consultarPolizasPorRFC(rfc);
    res.json({ success: true, polizas: resultado });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno al consultar pólizas" });
  }
});

router.get("/api/polizas/pdf/:id", async (req, res) => {
  const id = req.params.id;

  try {
    // Simulación (asegúrate que esta función devuelva la URL correctamente)
    const archivos = await obtenerLinkDescarga(id);
    if (!archivos || !archivos.length || !archivos[0] || !archivos[0].url) {
      // Asegúrate de que archivos[0] y archivos[0].url existan
      return res
        .status(404)
        .json({ success: false, message: "PDF no encontrado o URL inválida" });
    }

    const archivo = archivos[0];
    const pdfUrl = archivo.url;
    // Usar un nombre de archivo por defecto si no viene en el objeto
    const pdfFileName = archivo.nombre || `poliza_${id}.pdf`;

    const parsedUrl = new URL(pdfUrl);
    // Determinar si usar http o https basado en el protocolo de la URL
    const protocol = parsedUrl.protocol === "https:" ? https : http;

    const pdfRequest = protocol.get(pdfUrl, (pdfResponse) => {
      // Manejar respuestas no exitosas desde la URL del PDF
      if (pdfResponse.statusCode < 200 || pdfResponse.statusCode >= 300) {
        // Consumir la respuesta para liberar memoria aunque no la usemos
        pdfResponse.resume();
        // Evitar enviar detalles internos al cliente
        return res
          .status(502)
          .json({
            success: false,
            message: "No se pudo obtener el PDF desde la fuente externa.",
          });
      }

      // Establecer las cabeceras para la descarga del archivo
      res.setHeader("Content-Type", "application/pdf");
      // Asegurarse que el nombre de archivo esté correctamente formateado para la cabecera
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${pdfFileName.replace(/"/g, '\\"')}"`,
      ); // Escapar comillas en el nombre

      // Transmitir (pipe) el contenido del PDF directamente a la respuesta del cliente
      pdfResponse.pipe(res);
    });

    // Manejar errores durante la conexión a la URL del PDF
    pdfRequest.on("error", (error) => {
      // Verificar si ya se enviaron las cabeceras antes de intentar enviar una respuesta de error JSON
      if (!res.headersSent) {
        res
          .status(500)
          .json({
            success: false,
            message: "Error interno al intentar descargar el PDF.",
          });
      } else {
        // Si las cabeceras ya se enviaron (pipe iniciado), solo se puede terminar la conexión
        res.end();
      }
    });
  } catch (error) {
    if (!res.headersSent) {
      res
        .status(500)
        .json({ success: false, message: "Error interno del servidor." });
    }
  }
});

router.get("/polizas/autos", async (req, res) => {
  const { rfc } = req.query;
  if (!rfc) return res.status(400).json({ error: "RFC requerido" });

  try {
    // Consulta optimizada específica para autos
    const autos = await consultarPolizasOptimizado(rfc, "Automoviles");
    res.json({ success: true, autos });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error interno" });
  }
});

router.get("/polizas/gmm", async (req, res) => {
  const { rfc } = req.query;
  if (!rfc) return res.status(400).json({ error: "RFC requerido" });

  try {
    // Consulta optimizada específica para GMM
    const gmm = await consultarPolizasOptimizado(rfc, "Gastos Medicos");
    res.json({ success: true, gmm });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error interno" });
  }
});

router.get("/vida", async (req, res) => {
  try {
    const polizas = await sicasService.consultarPolizasVigentes({
      ramo: "VIDA",
    });
    res.json(polizas);
  } catch (error) {
    res.status(500).json({
      error: "Error al consultar pólizas de vida",
      message: error.message,
    });
  }
});

router.get("/hogar", async (req, res) => {
  try {
    const polizas = await sicasService.consultarPolizasVigentes({
      ramo: "HOGAR",
    });
    res.json(polizas);
  } catch (error) {
    res.status(500).json({
      error: "Error al consultar pólizas de hogar",
      message: error.message,
    });
  }
});

// ===============================
// Chat asistente IA (via gateway)
// ===============================

router.post("/chat-ia", async (req, res) => {
  try {
    const body = req.body || {};
    const mensaje = typeof body.mensaje === "string" ? body.mensaje.trim() : "";

    if (!mensaje) {
      return res.status(400).json({
        success: false,
        mensaje: "El mensaje es obligatorio.",
      });
    }

    const gatewayUrl = process.env.AI_GATEWAY_URL;
    const apiKey = process.env.AI_GATEWAY_API_KEY;

    if (!gatewayUrl || !apiKey) {
      console.error(
        "Faltan AI_GATEWAY_URL o AI_GATEWAY_API_KEY en variables de entorno",
      );
      return res.status(500).json({
        success: false,
        mensaje:
          "El asistente no está configurado correctamente. Falta la configuración de IA en el servidor.",
      });
    }

    // Prompt base enfocado a pólizas IBS
    const mensajes = [
      {
        role: "system",
        content:
          "Eres un asistente virtual de IBS Consultores. Ayudas al usuario a entender su portafolio de pólizas (auto, GMM, vida, hogar, etc.), explicando en lenguaje claro y en español.",
      },
      {
        role: "user",
        content: mensaje,
      },
    ];

    // IMPORTANTE:
    // - gatewayUrl debe ser el URL que te da Vercel AI Gateway.
    // - Ajusta la ruta/modelo según la configuración de tu gateway.
    // Nos aseguramos de no duplicar la barra al construir la URL
    const baseUrl = gatewayUrl.replace(/\/$/, "");

    const aiResponse = await axios.post(
      `${baseUrl}/chat/completions`,
      {
        // Ejemplo usando modelo de OpenAI a través de Vercel AI Gateway
        // Ajusta el nombre del modelo si usas otro.
        model: "openai/gpt-4.1-mini",
        messages: mensajes,
        stream: false,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        timeout: 15000,
      },
    );

    const contenido =
      aiResponse?.data?.choices?.[0]?.message?.content ||
      "He procesado tu mensaje, pero no pude generar una respuesta detallada. Intenta reformular tu pregunta.";

    return res.json({
      success: true,
      respuesta: contenido,
    });
  } catch (error) {
    console.error("Error en /api/chat-ia:", error);
    return res.status(500).json({
      success: false,
      mensaje: "Error interno al procesar el chat.",
    });
  }
});

module.exports = router;
