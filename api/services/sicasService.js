// api/services/sicasService.js

const axios = require('axios');
const https = require('https');
const { parseStringPromise } = require('xml2js');
require('dotenv').config();

const WS_URL = process.env.SICAS_URL;
const USERNAME = process.env.SICAS_USER;
const PASSWORD = process.env.SICAS_PASS;

// ✅ Evita error: unable to verify the first certificate (certs internos/autofirmados)
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

// ✅ Axios instance para SICAS (no repetir httpsAgent/timeout)
const sicasAxios = axios.create({
  httpsAgent,
  timeout: 30000,
  headers: {
    'Content-Type': 'text/xml;charset=UTF-8',
    'SOAPAction': 'http://tempuri.org/ProcesarWS'
  }
});

// -----------------------------------------------------------------------------
// Helpers SOAP/XML
// -----------------------------------------------------------------------------
async function extraerCdataDeSoap(soapXmlResponse) {
  const result = await parseStringPromise(soapXmlResponse);
  const cdata =
    result?.['soap:Envelope']?.['soap:Body']?.[0]?.['ProcesarWSResponse']?.[0]?.['ProcesarWSResult']?.[0];

  return cdata || '';
}

async function parsearCdata(cdata) {
  if (!cdata) return null;

  // Manejar posibles errores en formato JSON dentro del CDATA
  if (typeof cdata === 'string' && cdata.trim().startsWith('{')) {
    try {
      JSON.parse(cdata);
      return { ERROR: true };
    } catch (_) {
      return { ERROR: true };
    }
  }

  try {
    const parsed = await parseStringPromise(cdata);
    return parsed;
  } catch (_) {
    return { ERROR: true };
  }
}

// -----------------------------------------------------------------------------
// Funciones principales
// -----------------------------------------------------------------------------
async function consultarPolizasOptimizado(rfc, ramo = null) {
  if (!rfc) return [];

  const rfcFormateado = convertirRFCaFormatoSICAS(rfc);

  let condiciones = 'Estatus;0;1;0;Vigente;0;VDatDocumentos.Status';
  condiciones += `!Cliente;0;1;*${rfcFormateado}*;*${rfcFormateado}*;0;VCatClientes.RFC`;

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

  const { data } = await sicasAxios.post(WS_URL, xml);
  const cdata = await extraerCdataDeSoap(data);
  const parsed = await parsearCdata(cdata);

  if (!parsed || parsed.ERROR) return [];

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
}

async function consultarPolizasVigentes({ ramo = null, rfc = null } = {}) {
  let condiciones = 'Estatus;0;1;0;Vigente;0;VDatDocumentos.Status';

  if (rfc) {
    const rfSinGuiones = String(rfc).replace(/-/g, '').toUpperCase();
    condiciones += `!Cliente;0;1;*${rfSinGuiones}*;*${rfSinGuiones}*;0;VCatClientes.RFC`;
  }

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
        <tem:ItemForPage>20000</tem:ItemForPage>
        <tem:InfoSort>VDatDocumentos.IDDocto</tem:InfoSort>
        <tem:ConditionsAdd>${condiciones}</tem:ConditionsAdd>
      </tem:oDataWS>
    </tem:ProcesarWS>
  </soapenv:Body>
</soapenv:Envelope>`;

  const { data } = await sicasAxios.post(WS_URL, xml);
  const cdata = await extraerCdataDeSoap(data);
  const parsed = await parsearCdata(cdata);

  if (!parsed || parsed.ERROR) return [];

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

  const { data } = await sicasAxios.post(WS_URL, xml);
  const cdata = await extraerCdataDeSoap(data);
  const parsed = await parsearCdata(cdata);

  if (!parsed || parsed.ERROR) return [];

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

  const { data } = await sicasAxios.post(WS_URL, xml);
  const cdata = await extraerCdataDeSoap(data);
  const parsed = await parsearCdata(cdata);

  if (!parsed || parsed.ERROR) return [];

  const archivos = parsed.CDigital?.Datos || [];
  const archivosPDF = archivos.filter(a => a.FileExt?.[0] === 'pdf');

  return archivosPDF.map(a => ({
    nombre: a.NameShow?.[0],
    url: a.PathWWW?.[0]
  }));
}

// -----------------------------------------------------------------------------
// RFC helpers
// -----------------------------------------------------------------------------
function normalizarRFCSicas(rfcSicas) {
  if (!rfcSicas) return '';
  const sinGuiones = rfcSicas.replace(/-/g, '');
  return sinGuiones.substring(0, 10).toUpperCase();
}

function convertirRFCaFormatoSICAS(rfc) {
  if (!rfc) return '';
  const limpio = String(rfc).replace(/-/g, '');
  if (limpio.length < 10) return limpio;
  const letras = limpio.substring(0, 4);
  const numeros = limpio.substring(4, 10);
  return `${letras}-${numeros}`;
}

async function getPolizasFiltradasPorRFC(rfcApp) {
  if (!rfcApp) return [];

  const todasLasPolizas = await consultarPolizasVigentes();
  if (!todasLasPolizas.length) return [];

  const filtradas = todasLasPolizas.filter(p => {
    if (!p.rfc) return false;

    const rfcAppFormatoSICAS = convertirRFCaFormatoSICAS(rfcApp);
    const coincideFormato = String(p.rfc).startsWith(rfcAppFormatoSICAS);

    const rfcSicasNormalizado = normalizarRFCSicas(p.rfc);
    const rfcAppNormalizado = String(rfcApp).toUpperCase();

    const coincideNormalizado = rfcSicasNormalizado === rfcAppNormalizado;
    const coincideParcial = rfcSicasNormalizado.substring(0, 8) === rfcAppNormalizado.substring(0, 8);

    return coincideFormato || coincideNormalizado || coincideParcial;
  });

  return filtradas;
}

// -----------------------------------------------------------------------------
// Mantengo tus exports (aunque algunas funciones en tu código original
// referencian helpers no incluidos aquí como transformarRFCParaSICAS).
// Si usas esas funciones, te ayudo a corregirlas también.
// -----------------------------------------------------------------------------
function transformarRFCParaPrefijo(rfcBase) {
  if (!rfcBase || rfcBase.length < 10) return '';
  const letras = rfcBase.substring(0, 4);
  const numeros = rfcBase.substring(4, 10);
  return `${letras}-${numeros}-`;
}

// Si tu proyecto realmente usa estas funciones avanzadas, hay que revisar
// los helpers faltantes (transformarRFCParaSICAS, etc.). Por ahora las dejo
// exportadas SOLO si existen en tu proyecto; si no, quítalas del export.

module.exports = {
  consultarPolizasPorRFC,
  obtenerLinkDescarga,
  consultarPolizasVigentes,
  getPolizasFiltradasPorRFC,
  transformarRFCParaPrefijo,
  consultarPolizasOptimizado
};