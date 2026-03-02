// api/services/sicasService.js

const axios = require('axios');
const { parseStringPromise } = require('xml2js');
require('dotenv').config();

const WS_URL = process.env.SICAS_URL;
const USERNAME = process.env.SICAS_USER;
const PASSWORD = process.env.SICAS_PASS;


async function consultarPolizasOptimizado(rfc, ramo = null) {
  if (!rfc) {
    return [];
  }

  // Convertir el RFC al formato con guiones que usa SICAS
  const rfcFormateado = convertirRFCaFormatoSICAS(rfc);
  
  // Construir la condición base: Pólizas vigentes
  let condiciones = 'Estatus;0;1;0;Vigente;0;VDatDocumentos.Status';
  
  // Agregar filtro de RFC con asteriscos para búsqueda por patrón
  // Esto permite encontrar el RFC incluso si tiene homoclave
  condiciones += `!Cliente;0;1;*${rfcFormateado}*;*${rfcFormateado}*;0;VCatClientes.RFC`;
  
  // Si se especificó un ramo, agregarlo al filtro
  if (ramo) {
    condiciones += `!Ramo;0;1;*${ramo}*;*${ramo}*;0;VCatSRamos.RamosNombre`;
  }
  

  const xml = `
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
    <soapenv:Header/>
    <soapenv:Body>
      <tem:ProcesarWS>
        <tem:oDataWS>
          <tem:Credentials>
            <tem:UserName>${USERNAME}</tem:UserName>
            <tem:Password>${PASSWORD}</tem:Password>
          </tem:Credentials>
          <tem:TypeFormat>XML</tem:TypeFormat>
          <tem:KeyProcess>REPORT</tem:KeyProcess>
          <tem:KeyCode>H03400</tem:KeyCode>
          <tem:Page>1</tem:Page>
          <tem:ItemForPage>50</tem:ItemForPage>
          <tem:InfoSort>VDatDocumentos.IDDocto</tem:InfoSort>
          <tem:ConditionsAdd>${condiciones}</tem:ConditionsAdd>
        </tem:oDataWS>
      </tem:ProcesarWS>
    </soapenv:Body>
  </soapenv:Envelope>`;

  try {
    
    const { data } = await axios.post(WS_URL, xml, {
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': 'http://tempuri.org/ProcesarWS'
      },
      timeout: 30000 // 30 segundos de timeout
    });

    const result = await parseStringPromise(data);
    const cdata = result['soap:Envelope']['soap:Body'][0]['ProcesarWSResponse'][0]['ProcesarWSResult'][0];
    
    // Manejar posibles errores en formato JSON
    if (cdata.startsWith('{')) {
      try {
        const errorJson = JSON.parse(cdata);
        return [];
      } catch (parseError) {
        return [];
      }
    }
    
    const parsed = await parseStringPromise(cdata);
    
    // Manejar errores en formato XML
    if (parsed.ERROR) {
      return [];
    }
    
    const documentos = parsed.DATAINFO?.TableInfo || [];
    
    // Mapear los resultados al formato esperado
    return documentos.map((d) => ({
      id: d.IDDocto?.[0],
      documento: d.Documento?.[0],
      nombre: d.NombreCompleto?.[0],
      rfc: d.RFC?.[0],
      polizaDesde: d.FDesde?.[0],
      polizaHasta: d.FHasta?.[0],
      status: d.Status_TXT?.[0],
      formaPago: d.FPago?.[0],
      primaTotal: d.PrimaTotal?.[0],
      concepto: d.Concepto?.[0],
      ciaNombre: d.CiaNombre?.[0],
      subRamo: d.SRamoNombre?.[0],
      IDSRamo: d.IDSRamo?.[0],
      Mdeducibles: d.Mdeducibles?.[0]
    }));
    
  } catch (error) {
    throw error;
  }
}


async function consultarPolizasVigentes({ ramo = null, rfc = null } = {}) {
let condiciones = 'Estatus;0;1;0;Vigente;0;VDatDocumentos.Status';
if (rfc) {
  const rf = convertirRFCaFormatoSICAS(rfc);
// Quita todos los guiones del RFC, conserva homoclave:
const rfSinGuiones = rfc.replace(/-/g, '').toUpperCase();

// Aplica filtro con comodines alrededor
condiciones += `!Cliente;0;1;*${rfSinGuiones}*;*${rfSinGuiones}*;0;VCatClientes.RFC`;
}
  
  const xml = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
  <soapenv:Header/>
  <soapenv:Body>
    <tem:ProcesarWS>
      <tem:oDataWS>
        <tem:Credentials>
          <tem:UserName>${USERNAME}</tem:UserName>
          <tem:Password>${PASSWORD}</tem:Password>
        </tem:Credentials>
        <tem:TypeFormat>XML</tem:TypeFormat>
        <tem:KeyProcess>REPORT</tem:KeyProcess>
        <tem:KeyCode>H03400</tem:KeyCode>
        <tem:Page>1</tem:Page>
        <tem:ItemForPage>20000</tem:ItemForPage>
        <tem:InfoSort>VDatDocumentos.IDDocto</tem:InfoSort>
        <tem:ConditionsAdd>${condiciones}</tem:ConditionsAdd>
      </tem:oDataWS>
    </tem:ProcesarWS>
  </soapenv:Body>
</soapenv:Envelope>`;
// justo antes de axios.post
const { data } = await axios.post(WS_URL, xml, { /* … */ });

  try {
    const { data } = await axios.post(WS_URL, xml, {
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'SOAPAction': 'http://tempuri.org/ProcesarWS'
      }
    });

    const result = await parseStringPromise(data);
    const cdata = result['soap:Envelope']['soap:Body'][0]['ProcesarWSResponse'][0]['ProcesarWSResult'][0];
    const parsed = await parseStringPromise(cdata);

    if (parsed.ERROR) {
      return [];
    }

    const documentos = parsed.DATAINFO?.TableInfo || [];
    return documentos.map((d) => ({
      id: d.IDDocto?.[0],
      documento: d.Documento?.[0],
      nombre: d.NombreCompleto?.[0],
      rfc: d.RFC?.[0],
      polizaDesde: d.FDesde?.[0],
      polizaHasta: d.FHasta?.[0],
      status: d.Status_TXT?.[0],
      formaPago: d.FPago?.[0],
      primaTotal: d.PrimaTotal?.[0],
      concepto: d.Concepto?.[0],
      ciaNombre: d.CiaNombre?.[0],
      subRamo: d.SRamoNombre?.[0],
      IDSRamo: d.IDSRamo?.[0],
      Mdeducibles: d.Mdeducibles?.[0]
    }));
  } catch (error) {
    throw error;
  }
}

async function consultarPolizasPorRFC(rfc) {
  let condiciones = 'Estatus;0;1;0;Vigente;0;VDatDocumentos.Status';

  if (rfc) {
    condiciones += `!RFC;0;1;${rfc};${rfc};0;VCatClientes.RFC`;
  }

  const xml = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
  <soapenv:Header/>
  <soapenv:Body>
    <tem:ProcesarWS>
      <tem:oDataWS>
        <tem:Credentials>
          <tem:UserName>${USERNAME}</tem:UserName>
          <tem:Password>${PASSWORD}</tem:Password>
        </tem:Credentials>
        <tem:TypeFormat>XML</tem:TypeFormat>
        <tem:KeyProcess>REPORT</tem:KeyProcess>
        <tem:KeyCode>H03400</tem:KeyCode>
        <tem:Page>1</tem:Page>
        <tem:ItemForPage>20000</tem:ItemForPage>
        <tem:InfoSort>VDatDocumentos.IDDocto</tem:InfoSort>
        <tem:ConditionsAdd>${condiciones}</tem:ConditionsAdd>
      </tem:oDataWS>
    </tem:ProcesarWS>
  </soapenv:Body>
</soapenv:Envelope>`;

  const { data } = await axios.post(WS_URL, xml, {
    headers: {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://tempuri.org/ProcesarWS'
    }
  });

  const result = await parseStringPromise(data);
  const cdata = result['soap:Envelope']['soap:Body'][0]['ProcesarWSResponse'][0]['ProcesarWSResult'][0];
  const parsed = await parseStringPromise(cdata);

  const documentos = parsed.DATAINFO?.TableInfo || [];

  return documentos.map((d) => ({
    id: d.IDDocto?.[0],
    tipoDocto: d.TipoDocto_TXT?.[0],
    numeroPoliza: d.Documento?.[0],
    status: d.Status_TXT?.[0],
    asegurado: d.NombreCompleto?.[0],
    rfc: d.RFC?.[0],
    ramo: d.RamosNombre?.[0],
    subRamo: d.SRamoNombre?.[0],
    compania: d.CiaNombre?.[0],
    concepto: d.Concepto?.[0],
    formaPago: d.FPago?.[0],
    primaTotal: d.PrimaTotal?.[0],
    polizaDesde: d.FDesde?.[0],
    polizaHasta: d.FHasta?.[0],
    IDSRamo: d.IDSRamo?.[0],
  }));
}

async function obtenerLinkDescarga(idDocto) {
  const xml = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
  <soapenv:Header/>
  <soapenv:Body>
    <tem:ProcesarWS>
      <tem:oDataWS>
        <tem:Credentials>
          <tem:UserName>${USERNAME}</tem:UserName>
          <tem:Password>${PASSWORD}</tem:Password>
        </tem:Credentials>
        <tem:TypeFormat>XML</tem:TypeFormat>
        <tem:KeyProcess>CDIGITAL</tem:KeyProcess>
        <tem:TProc>Read_Data</tem:TProc>
        <tem:TipoEntidad>0</tem:TipoEntidad>
        <tem:ActionCDigital>GETFiles</tem:ActionCDigital>
        <tem:TypeDestinoCDigital>DOCUMENT</tem:TypeDestinoCDigital>
        <tem:IDValuePK>${idDocto}</tem:IDValuePK>
      </tem:oDataWS>
    </tem:ProcesarWS>
  </soapenv:Body>
</soapenv:Envelope>`;

  const { data } = await axios.post(WS_URL, xml, {
    headers: {
      'Content-Type': 'text/xml;charset=UTF-8',
      'SOAPAction': 'http://tempuri.org/ProcesarWS'
    }
  });

  const result = await parseStringPromise(data);
  const cdata = result['soap:Envelope']['soap:Body'][0]['ProcesarWSResponse'][0]['ProcesarWSResult'][0];
  const parsed = await parseStringPromise(cdata);

  const archivos = parsed.CDigital?.Datos || [];
  const archivosPDF = archivos.filter(a => a.FileExt?.[0] === 'pdf');

  return archivosPDF.map(a => ({
    nombre: a.NameShow?.[0],
    url: a.PathWWW?.[0]
  }));
}

function normalizarRFCSicas(rfcSicas) {
  if (!rfcSicas) return '';
  
  const sinGuiones = rfcSicas.replace(/-/g, '');
  return sinGuiones.substring(0, 10).toUpperCase();
}

function convertirRFCaFormatoSICAS(rfc) {
  if (!rfc) return '';
  // Quita todos los guiones existentes
  const limpio = rfc.replace(/-/g, '');
  // Toma las 4 letras y los 6 dígitos siguientes
  if (limpio.length < 10) return limpio;
  const letras = limpio.substring(0, 4);
  const numeros = limpio.substring(4, 10);
  return `${letras}-${numeros}`;  // Ejemplo: "REGD-730929"
}


async function getPolizasFiltradasPorRFC(rfcApp) {

  if (!rfcApp) {
    return [];
  }
  
  const rfcFormatoSICAS = convertirRFCaFormatoSICAS(rfcApp);
  
  const todasLasPolizas = await consultarPolizasVigentes();
  if (todasLasPolizas.length > 0) {
    
    const filtradas = todasLasPolizas.filter(p => {
      if (!p.rfc) return false;
      
      const rfcAppFormatoSICAS = convertirRFCaFormatoSICAS(rfcApp);
      const coincideFormato = p.rfc.startsWith(rfcAppFormatoSICAS);
      
      const rfcSicasNormalizado = normalizarRFCSicas(p.rfc);
      const rfcAppNormalizado = rfcApp.toUpperCase();
      const coincideNormalizado = rfcSicasNormalizado === rfcAppNormalizado;
      
      const coincideParcial = rfcSicasNormalizado.substring(0, 8) === rfcAppNormalizado.substring(0, 8);
      
      const coincide = coincideFormato || coincideNormalizado || coincideParcial;
      
      if (coincide) {
      }
      
      return coincide;
    });
        
    if (filtradas.length > 0) {
      filtradas.forEach((p, idx) => {
      });
    }
        return filtradas;
  }
  return [];
}

async function consultarPolizasPorRamoYRFC(ramoId, rfc) {
  // Construye la condición combinada: Vigente Y Ramo específico Y RFC específico
  let condiciones = 'Estatus;0;1;0;Vigente;0;VDatDocumentos.Status'; // Filtro base: Vigente
  condiciones += `!Ramo;0;1;${ramoId};${ramoId};0;VDatDocumentos.Ramo`; // Filtro por Ramo
  condiciones += `!RFC;0;1;${rfc};${rfc};0;VCatClientes.RFC`; // Filtro por RFC

  const pageSize = 100; // O el tamaño que consideres adecuado
  let currentPage = 1;
  let documentsInRamo = [];
  let hasMoreData = true;

  while (hasMoreData) {
    const xml = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
  <soapenv:Header/>
  <soapenv:Body>
    <tem:ProcesarWS>
      <tem:oDataWS>
        <tem:Credentials>
          <tem:UserName>${USERNAME}</tem:UserName>
          <tem:Password>${PASSWORD}</tem:Password>
        </tem:Credentials>
        <tem:TypeFormat>XML</tem:TypeFormat>
        <tem:KeyProcess>REPORT</tem:KeyProcess>
        <tem:KeyCode>H03400</tem:KeyCode>
        <tem:Page>${currentPage}</tem:Page>
        <tem:ItemForPage>${pageSize}</tem:ItemForPage>
        <tem:InfoSort>VDatDocumentos.IDDocto</tem:InfoSort>
        <tem:ConditionsAdd>${condiciones}</tem:ConditionsAdd>
      </tem:oDataWS>
    </tem:ProcesarWS>
  </soapenv:Body>
</soapenv:Envelope>`;


    try {
     

      const { data } = await axios.post(WS_URL, xml, {
        headers: {
          'Content-Type': 'text/xml;charset=UTF-8',
          'SOAPAction': 'http://tempuri.org/ProcesarWS'
        },
        timeout: 30000 // Añadir un timeout por si SICAS tarda demasiado en una consulta
      });

      const result = await parseStringPromise(data);
      const cdata = result['soap:Envelope']['soap:Body'][0]['ProcesarWSResponse'][0]['ProcesarWSResult'][0];
      const parsed = await parseStringPromise(cdata);

      if (parsed.ERROR) {
        // Si SICAS devuelve un error específico para esta consulta, lo registramos pero continuamos (podría no haber pólizas en este ramo)
        // Dependiendo del error, podrías querer lanzar una excepción o simplemente devolver vacío.
        // Por ahora, asumimos que un error aquí significa "no encontrado" o un problema menor y devolvemos lo acumulado.
        hasMoreData = false; // Salir del bucle para este ramo
        // return []; // O podrías devolver vacío si el error es definitivo para este ramo
      } else {
        const documentos = parsed.DATAINFO?.TableInfo || [];

        documentsInRamo = documentsInRamo.concat(documentos.map((d) => ({
          id: d.IDDocto?.[0],
          documento: d.Documento?.[0],
          nombre: d.NombreCompleto?.[0],
          rfc: d.RFC?.[0],
          polizaDesde: d.FDesde?.[0],
          polizaHasta: d.FHasta?.[0],
          status: d.Status_TXT?.[0],
          formaPago: d.FPago?.[0],
          primaTotal: d.PrimaTotal?.[0],
          concepto: d.Concepto?.[0],
          ciaNombre: d.CiaNombre?.[0],
          subRamo: d.SRamoNombre?.[0],
          IDSRamo: d.IDSRamo?.[0], // Asegúrate de que este campo viene en la respuesta SOAP
          Mdeducibles: d.Mdeducibles?.[0]
        })));

        if (documentos.length < pageSize) {
          hasMoreData = false; // No hay más páginas para este ramo
        } else {
          currentPage++;
        }
      }
    } catch (error) {
      // Si hay un error de red o timeout, lanzamos la excepción para que Promise.all falle
      throw new Error(`Error consultando SICAS para Ramo ${ramoId}: ${error.message}`);
    }
  }
  return documentsInRamo;
}


async function consultarPolizasPorRFCConPaginacion(rfcBase) { // Renombrado a rfcBase para claridad
  // *** Transforma el RFC antes de usarlo en la condición ***
  const rfcParaFiltro = transformarRFCParaSICAS(rfcBase);

  // Condición: Vigente Y RFC (transformado)
  let condiciones = 'Estatus;0;1;0;Vigente;0;VDatDocumentos.Status';
  // *** Usa el RFC transformado en la condición ***
  // El '1' usualmente significa 'igual a'. Si SICAS interpreta 'COAL-791005-' como un prefijo aquí, funcionará.
  condiciones += `!RFC;0;1;${rfcParaFiltro};${rfcParaFiltro};0;VCatClientes.RFC`;


  const pageSize = 200;
  let currentPage = 1;
  let allDocuments = [];
  let hasMoreData = true;

  while (hasMoreData) {
    const xml = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
      <soapenv:Header/>
      <soapenv:Body>
        <tem:ProcesarWS>
          <tem:oDataWS>
            <tem:Credentials>
              <tem:UserName>${USERNAME}</tem:UserName>
              <tem:Password>${PASSWORD}</tem:Password>
            </tem:Credentials>
            <tem:TypeFormat>XML</tem:TypeFormat>
            <tem:KeyProcess>REPORT</tem:KeyProcess>
            <tem:KeyCode>H03400</tem:KeyCode>
            <tem:Page>${currentPage}</tem:Page>
            <tem:ItemForPage>${pageSize}</tem:ItemForPage>
            <tem:InfoSort>VDatDocumentos.IDDocto</tem:InfoSort>
            <tem:ConditionsAdd>${condiciones}</tem:ConditionsAdd>
          </tem:oDataWS>
        </tem:ProcesarWS>
      </soapenv:Body>
    </soapenv:Envelope>`;

    try {
      const { data } = await axios.post(WS_URL, xml, {
        headers: {
          'Content-Type': 'text/xml;charset=UTF-8',
          'SOAPAction': 'http://tempuri.org/ProcesarWS'
        },
        timeout: 45000
      });

      // Quitamos el log de RAW response por ahora para limpiar la salida

      const result = await parseStringPromise(data);
      const cdata = result['soap:Envelope']['soap:Body'][0]['ProcesarWSResponse'][0]['ProcesarWSResult'][0];

      if (cdata.startsWith('{')) {
         try {
            const errorJson = JSON.parse(cdata);
            hasMoreData = false;
         } catch (parseError) {
            hasMoreData = false;
         }
      } else {
        const parsed = await parseStringPromise(cdata);

        if (parsed.ERROR) {
          hasMoreData = false;
        } else {
          const documentos = parsed.DATAINFO?.TableInfo || [];

          allDocuments = allDocuments.concat(documentos.map((d) => ({
            id: d.IDDocto?.[0],
            documento: d.Documento?.[0],
            nombre: d.NombreCompleto?.[0],
            // IMPORTANTE: Guardamos el RFC que devuelve SICAS (con guiones/homoclave)
            rfc: d.RFC?.[0],
            polizaDesde: d.FDesde?.[0],
            polizaHasta: d.FHasta?.[0],
            status: d.Status_TXT?.[0],
            formaPago: d.FPago?.[0],
            primaTotal: d.PrimaTotal?.[0],
            concepto: d.Concepto?.[0],
            ciaNombre: d.CiaNombre?.[0],
            subRamo: d.SRamoNombre?.[0],
            IDSRamo: d.IDSRamo?.[0],
            Mdeducibles: d.Mdeducibles?.[0]
          })));

          if (documentos.length < pageSize) {
            hasMoreData = false;
          } else {
            currentPage++;
          }
        }
      }
    } catch (error) {
      throw new Error(`Error consultando SICAS para RFC ${rfcBase}: ${error.message}`);
    }
  }
  return allDocuments;
}

async function consultarTodasLasPolizasVigentes() {
  // Condición: Solo Vigente
  let condiciones = 'Estatus;0;1;0;Vigente;0;VDatDocumentos.Status'; // Filtro base: Vigente
  // IMPORTANTE: Sin filtro RFC aquí

  const pageSize = 1000; // Ajusta según sea necesario. Puede ser más grande.
  let currentPage = 1;
  let allDocuments = [];
  let hasMoreData = true;

  while (hasMoreData) {
    const xml = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
      <soapenv:Header/>
      <soapenv:Body>
        <tem:ProcesarWS>
          <tem:oDataWS>
            <tem:Credentials>
              <tem:UserName>${USERNAME}</tem:UserName>
              <tem:Password>${PASSWORD}</tem:Password>
            </tem:Credentials>
            <tem:TypeFormat>XML</tem:TypeFormat>
            <tem:KeyProcess>REPORT</tem:KeyProcess>
            <tem:KeyCode>H03400</tem:KeyCode>
            <tem:Page>${currentPage}</tem:Page>
            <tem:ItemForPage>${pageSize}</tem:ItemForPage>
            <tem:InfoSort>VDatDocumentos.IDDocto</tem:InfoSort>
            <tem:ConditionsAdd>${condiciones}</tem:ConditionsAdd>
          </tem:oDataWS>
        </tem:ProcesarWS>
      </soapenv:Body>
    </soapenv:Envelope>`;

    try {
      const { data } = await axios.post(WS_URL, xml, {
        headers: {
          'Content-Type': 'text/xml;charset=UTF-8',
          'SOAPAction': 'http://tempuri.org/ProcesarWS'
        },
        timeout: 60000 // Aumentamos timeout por si trae muchos datos
      });


      const result = await parseStringPromise(data);
      const cdata = result['soap:Envelope']['soap:Body'][0]['ProcesarWSResponse'][0]['ProcesarWSResult'][0];

      if (cdata.startsWith('{')) {
         try {
            const errorJson = JSON.parse(cdata);
            hasMoreData = false;
         } catch (parseError) {
            hasMoreData = false;
         }
      } else {
        const parsed = await parseStringPromise(cdata);

        if (parsed.ERROR) {
          hasMoreData = false;
        } else {
          const documentos = parsed.DATAINFO?.TableInfo || [];

          allDocuments = allDocuments.concat(documentos.map((d) => ({
            id: d.IDDocto?.[0],
            documento: d.Documento?.[0],
            nombre: d.NombreCompleto?.[0],
            rfc: d.RFC?.[0], // Guardamos el RFC completo de SICAS
            polizaDesde: d.FDesde?.[0],
            polizaHasta: d.FHasta?.[0],
            status: d.Status_TXT?.[0],
            formaPago: d.FPago?.[0],
            primaTotal: d.PrimaTotal?.[0],
            concepto: d.Concepto?.[0],
            ciaNombre: d.CiaNombre?.[0],
            subRamo: d.SRamoNombre?.[0],
            IDSRamo: d.IDSRamo?.[0],
            Mdeducibles: d.Mdeducibles?.[0]
          })));

          if (documentos.length < pageSize) {
            hasMoreData = false;
          } else {
            currentPage++;
          }
        }
      }
    } catch (error) {
      throw new Error(`Error consultando SICAS (Todas Vigentes): ${error.message}`);
    }
  }
  return allDocuments;
}

// Función auxiliar para transformar el RFC base al prefijo con guiones
function transformarRFCParaPrefijo(rfcBase) {
  if (!rfcBase || rfcBase.length < 10) return '';
  const letras = rfcBase.substring(0, 4);
  const numeros = rfcBase.substring(4, 10);
  return `${letras}-${numeros}-`;
}

module.exports = {
  consultarPolizasPorRFC,
  obtenerLinkDescarga,
  consultarPolizasVigentes,
  getPolizasFiltradasPorRFC,
  consultarPolizasPorRamoYRFC,
  consultarPolizasPorRFCConPaginacion,
  consultarTodasLasPolizasVigentes,
  transformarRFCParaPrefijo,
  consultarPolizasOptimizado
};