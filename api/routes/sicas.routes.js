// api/routes/sicas.routes.js
const express = require('express');
const router = express.Router();
const axios = require('axios'); // Para consumir el gateway de IA
const multer = require('multer');
const nodemailer = require('nodemailer');
const { consultarPolizasOptimizado, transformarRFCParaPrefijo, obtenerLinkDescarga, consultarPolizasPorRFC, getPolizasFiltradasPorRFC } = require('../services/sicasService.js');
// api/routes/sicas.routes.js
const https = require('https'); // Asegúrate que esta línea exista
const http = require('http');   // Asegúrate que esta línea exista
const { URL } = require('url'); // Asegúrate que esta línea exista

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 } // 8MB
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
      pass: smtpPass
    }
  });
};

router.post('/agente', upload.single('cv'), async (req, res) => {
  try {
    const {
      nombreCompleto = '',
      telefono = '',
      ciudad = '',
      estado = '',
      correo = '',
      mensaje = ''
    } = req.body || {};

    if (!nombreCompleto || !telefono || !ciudad || !estado || !correo) {
      return res.status(400).json({
        success: false,
        message: 'Faltan campos obligatorios del formulario.'
      });
    }

    const transporter = createTransporter();
    if (!transporter) {
      return res.status(500).json({
        success: false,
        message: 'El servidor de correo no está configurado.'
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
      <p><strong>Experiencia:</strong> ${mensaje || 'No proporcionada'}</p>
    `;

    const attachments = req.file
      ? [
          {
            filename: req.file.originalname,
            content: req.file.buffer,
            contentType: req.file.mimetype
          }
        ]
      : [];

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `Nuevo registro de agente - ${nombreCompleto}`,
      replyTo: correo,
      html,
      attachments
    });

    return res.json({
      success: true,
      message: 'Solicitud enviada correctamente.'
    });
  } catch (error) {
    console.error('Error en /api/agente:', error);
    return res.status(500).json({
      success: false,
      message: 'No se pudo enviar el formulario.'
    });
  }
});


router.get('/polizas', async (req, res) => {
  const { rfc } = req.query;

  console.log('\n==============================');
  console.log('[GET] /api/polizas');
  console.log('query.rfc:', rfc);
  console.log('==============================\n');

  try {
    if (!rfc) {
      return res.status(400).json({ success: false, message: 'Falta rfc' });
    }

    console.log('[1] entrando al try');
    console.log('[2] consultando SICAS...');

    // ✅ Aquí ya usamos tu service real
    const polizas = await consultarPolizasOptimizado(rfc);

    console.log('[3] SICAS OK. total:', polizas.length);

    // ✅ Clasificación por IDSRamo (ajusta números si en tu SICAS son distintos)
    const autos = [];
    const gmm = [];
    const vida = [];

    for (const p of polizas) {
      const id = String(p.IDSRamo || '').trim();

      // ⚠️ AJUSTA ESTOS IDS A LOS TUYOS
      // Normalmente SICAS usa IDs de ramo distintos por instalación.
      // Deja logs para ver qué IDs te llegan.
      if (id === '1' || /auto/i.test(p.ramo || '') || /auto/i.test(p.subRamo || '')) {
        autos.push(p);
      } else if (id === '2' || /gastos|m[eé]dicos/i.test(p.ramo || '') || /gmm/i.test(p.subRamo || '')) {
        gmm.push(p);
      } else if (id === '3' || /vida/i.test(p.ramo || '') || /vida/i.test(p.subRamo || '')) {
        vida.push(p);
      }
    }

    // ✅ si quieres ver qué IDS trae SICAS:
    const idsEncontrados = [...new Set(polizas.map(x => String(x.IDSRamo || '').trim()))];
    console.log('IDSRamo encontrados:', idsEncontrados);

    return res.json({
      success: true,
      autos,
      gmm,
      vida
    });

  } catch (err) {
    console.error('🔥 ERROR REAL en /api/polizas');
    console.error('message:', err?.message);
    console.error('stack:', err?.stack);
    console.error('axios status:', err?.response?.status);
    console.error('axios data:', err?.response?.data);

    return res.status(500).json({
      success: false,
      message: 'Error interno al consultar pólizas',
      debug: {
        message: err?.message,
        status: err?.response?.status,
        data: err?.response?.data
      }
    });
  }
});


router.get('/polizas/vigentes', async (req, res) => {
  const { rfc } = req.query;
  if (!rfc) return res.status(400).json({ error: 'RFC requerido' });

  try {
    const resultado = await consultarPolizasPorRFC(rfc);
    res.json({ success: true, polizas: resultado });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error interno al consultar pólizas' });
  }
});

router.get("/api/polizas/pdf/:id", async (req, res) => {
  const id = req.params.id;

  try {
    // Simulación (asegúrate que esta función devuelva la URL correctamente)
    const archivos = await obtenerLinkDescarga(id);
    if (!archivos || !archivos.length || !archivos[0] || !archivos[0].url) {
      // Asegúrate de que archivos[0] y archivos[0].url existan
      return res.status(404).json({ success: false, message: "PDF no encontrado o URL inválida" });
    }

    const archivo = archivos[0];
    const pdfUrl = archivo.url;
    // Usar un nombre de archivo por defecto si no viene en el objeto
    const pdfFileName = archivo.nombre || `poliza_${id}.pdf`;


    const parsedUrl = new URL(pdfUrl);
    // Determinar si usar http o https basado en el protocolo de la URL
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    const pdfRequest = protocol.get(pdfUrl, (pdfResponse) => {
      // Manejar respuestas no exitosas desde la URL del PDF
      if (pdfResponse.statusCode < 200 || pdfResponse.statusCode >= 300) {
        // Consumir la respuesta para liberar memoria aunque no la usemos
        pdfResponse.resume();
        // Evitar enviar detalles internos al cliente
        return res.status(502).json({ success: false, message: "No se pudo obtener el PDF desde la fuente externa." });
      }

      // Establecer las cabeceras para la descarga del archivo
      res.setHeader('Content-Type', 'application/pdf');
      // Asegurarse que el nombre de archivo esté correctamente formateado para la cabecera
      res.setHeader('Content-Disposition', `attachment; filename="${pdfFileName.replace(/"/g, '\\"')}"`); // Escapar comillas en el nombre

      // Transmitir (pipe) el contenido del PDF directamente a la respuesta del cliente
      pdfResponse.pipe(res);
    });

    // Manejar errores durante la conexión a la URL del PDF
    pdfRequest.on('error', (error) => {
      // Verificar si ya se enviaron las cabeceras antes de intentar enviar una respuesta de error JSON
      if (!res.headersSent) {
        res.status(500).json({ success: false, message: "Error interno al intentar descargar el PDF." });
      } else {
        // Si las cabeceras ya se enviaron (pipe iniciado), solo se puede terminar la conexión
        res.end();
      }
    });

  } catch (error) {
    if (!res.headersSent) {
      res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
  }
});


router.get('/polizas/autos', async (req, res) => {
  const { rfc } = req.query;
  if (!rfc) return res.status(400).json({ error: 'RFC requerido' });

  try {
    // Consulta optimizada específica para autos
    const autos = await consultarPolizasOptimizado(rfc, 'Automoviles');
    res.json({ success: true, autos });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error interno' });
  }
});

router.get('/polizas/gmm', async (req, res) => {
  const { rfc } = req.query;
  if (!rfc) return res.status(400).json({ error: 'RFC requerido' });

  try {
    // Consulta optimizada específica para GMM
    const gmm = await consultarPolizasOptimizado(rfc, 'Gastos Medicos');
    res.json({ success: true, gmm });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error interno' });
  }
});

router.get('/vida', async (req, res) => {
  try {
    const polizas = await sicasService.consultarPolizasVigentes({ ramo: 'VIDA' });
    res.json(polizas);
  } catch (error) {
    res.status(500).json({ 
      error: 'Error al consultar pólizas de vida',
      message: error.message 
    });
  }
});

router.get('/hogar', async (req, res) => {
  try {
    const polizas = await sicasService.consultarPolizasVigentes({ ramo: 'HOGAR' });
    res.json(polizas);
  } catch (error) {
    res.status(500).json({ 
      error: 'Error al consultar pólizas de hogar',
      message: error.message 
    });
  }
});

// ===============================
// Chat asistente IA (via gateway)
// ===============================

router.post('/chat-ia', async (req, res) => {
  try {
    const body = req.body || {};
    const mensaje = typeof body.mensaje === 'string' ? body.mensaje.trim() : '';

    if (!mensaje) {
      return res.status(400).json({
        success: false,
        mensaje: 'El mensaje es obligatorio.'
      });
    }

    const gatewayUrl = process.env.AI_GATEWAY_URL;
    const apiKey = process.env.AI_GATEWAY_API_KEY;

    if (!gatewayUrl || !apiKey) {
      console.error('Faltan AI_GATEWAY_URL o AI_GATEWAY_API_KEY en variables de entorno');
      return res.status(500).json({
        success: false,
        mensaje: 'El asistente no está configurado correctamente. Falta la configuración de IA en el servidor.'
      });
    }

    // Prompt base enfocado a pólizas IBS
    const mensajes = [
      {
        role: 'system',
        content:
          'Eres un asistente virtual de IBS Consultores. Ayudas al usuario a entender su portafolio de pólizas (auto, GMM, vida, hogar, etc.), explicando en lenguaje claro y en español.'
      },
      {
        role: 'user',
        content: mensaje
      }
    ];

    // IMPORTANTE:
    // - gatewayUrl debe ser el URL que te da Vercel AI Gateway.
    // - Ajusta la ruta/modelo según la configuración de tu gateway.
    // Nos aseguramos de no duplicar la barra al construir la URL
    const baseUrl = gatewayUrl.replace(/\/$/, '');

    const aiResponse = await axios.post(
      `${baseUrl}/chat/completions`,
      {
        // Ejemplo usando modelo de OpenAI a través de Vercel AI Gateway
        // Ajusta el nombre del modelo si usas otro.
        model: 'openai/gpt-4.1-mini',
        messages: mensajes,
        stream: false
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        timeout: 15000
      }
    );

    const contenido =
      aiResponse?.data?.choices?.[0]?.message?.content ||
      'He procesado tu mensaje, pero no pude generar una respuesta detallada. Intenta reformular tu pregunta.';

    return res.json({
      success: true,
      respuesta: contenido
    });
  } catch (error) {
    console.error('Error en /api/chat-ia:', error);
    return res.status(500).json({
      success: false,
      mensaje: 'Error interno al procesar el chat.'
    });
  }
});

module.exports = router;
