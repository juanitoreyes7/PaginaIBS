/**
 * Consulta pólizas en Firestore por empresa (nombreEmpresa y/o RFC empresa)
 * y extrae filas de asegurados con campos flexibles.
 */

import { normalizarTextoEmpresa } from '~/lib/imgEmpresa';

const COLECCIONES = [
    { collection: 'PolizaGM', tipo: 'GMM', ramo: 'gmm' },
    { collection: 'PolizaVida', tipo: 'Vida', ramo: 'vida' },
    { collection: 'PolizaFuneraria', tipo: 'Funeraria', ramo: 'funeraria' },
    { collection: 'PolizaAccidentes', tipo: 'Accidentes', ramo: 'accidentes' },
    { collection: 'PolizaAutos', tipo: 'Auto', ramo: 'auto' },
    { collection: 'PolizaHogar', tipo: 'Hogar', ramo: 'hogar' }
];

/** Variantes de RFC para coincidir con Firestore (con/sin guiones, mayúsculas). */
export function variantesRfc(rfc) {
    const s = String(rfc || '').trim();
    if (!s) return [];
    const sinGuion = s.replace(/-/g, '').toUpperCase();
    return [...new Set([s, s.toUpperCase(), s.toLowerCase(), sinGuion])].filter(Boolean);
}

export function pickNombreDesdeItem(a) {
    if (a == null) return '';
    if (typeof a === 'string') return a.trim();
    if (typeof a === 'object') {
        return String(
            a.nombre
            || a.Nombre
            || a.nombreCompleto
            || a.nombreAsegurado
            || a.nomAsegurado
            || a.nombre_completo
            || (typeof a.datosAsegurado === 'string' ? a.datosAsegurado : '')
            || ''
        ).trim();
    }
    return '';
}

export function pickRfcDesdeItem(a) {
    if (!a || typeof a !== 'object') return '';
    const r = a.rfc || a.RFC || a.rfcAsegurado || '';
    return String(r).replace(/\s/g, '').trim();
}

function pickNombreTitularPoliza(d) {
    if (!d || typeof d !== 'object') return '';
    return String(
        d.nombre
        || d.Nombre
        || d.nombreAsegurado
        || d.nombreTitular
        || d.nomTitular
        || ''
    ).trim();
}

function pickRfcTitularPoliza(d) {
    if (!d || typeof d !== 'object') return '';
    const r = d.rfc || d.RFC || d.rfcTitular || d.rfcAseguradoTitular || '';
    return String(r).replace(/\s/g, '').trim();
}

/**
 * Normaliza dataAsegurados: array, objeto único legacy o mapa de objetos (como en PolizaGM / GMM Colectivo).
 * @param {*} raw
 * @returns {Array}
 */
/**
 * Si la clave del mapa parece RFC mexicano y el valor no trae rfc, se asigna desde la clave.
 */
function rfcDesdeClaveMapaAsegurados(key) {
    const limpio = String(key || '').replace(/[^A-Za-z0-9Ññ&]/g, '').toUpperCase();
    if (limpio.length < 10 || limpio.length > 13) return '';
    if (/^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{0,3}$/.test(limpio)) return limpio;
    return '';
}

export function normalizarListaAsegurados(raw) {
    if (raw == null) return [];
    if (Array.isArray(raw) && raw.length > 0) return raw;
    if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
        if (raw.nombre || raw.datosAsegurado || raw.Nombre) return [raw];
        const nested = [];
        for (const [mapKey, item] of Object.entries(raw)) {
            if (!item || typeof item !== 'object' || Array.isArray(item)) continue;
            const rfcKey = rfcDesdeClaveMapaAsegurados(mapKey);
            const tieneRfc = Boolean(
                item.rfc || item.RFC || item.rfcAsegurado
            );
            if (rfcKey && !tieneRfc) {
                nested.push({ ...item, rfc: rfcKey });
            } else {
                nested.push(item);
            }
        }
        return nested.length > 0 ? nested : [];
    }
    return [];
}

function obtenerRawAsegurados(d) {
    if (!d || typeof d !== 'object') return null;
    const keys = [
        'dataAsegurados',
        'DataAsegurados',
        'DATA_ASEGURADOS',
        'asegurados',
        'listaAsegurados',
        'Asegurados',
        'integrantes'
    ];
    for (const k of keys) {
        if (d[k] != null) return d[k];
    }
    return null;
}

/** Campos útiles de la póliza (sin referencias circulares) para el modal de detalle. */
function pickCamposPolizaRaiz(d) {
    if (!d || typeof d !== 'object') return {};
    const pick = (k) => (d[k] !== undefined ? d[k] : undefined);
    const out = {
        numPolizaGM: pick('numPolizaGM'),
        numPolizaVida: pick('numPolizaVida'),
        numPolizaFuneraria: pick('numPolizaFuneraria'),
        numPolizaAccidente: pick('numPolizaAccidente'),
        numPoliza: pick('numPoliza'),
        numPolizaHogar: pick('numPolizaHogar'),
        documento: pick('documento'),
        vDesde: pick('vDesde'),
        vHasta: pick('vHasta'),
        polizaDesde: pick('polizaDesde'),
        polizaHasta: pick('polizaHasta'),
        ciaNombre: pick('ciaNombre'),
        nombreEmpresa: pick('nombreEmpresa'),
        rfc: pick('rfc'),
        idDocto: pick('idDocto'),
        _firestoreId: pick('_firestoreId'),
        _collection: pick('_collection'),
        _origen: pick('_origen')
    };
    return Object.fromEntries(Object.entries(out).filter(([, v]) => v !== undefined));
}

/**
 * Extrae filas { nombre, rfc, tipo, poliza } desde un objeto de póliza (Firestore o API).
 * Soporta dataAsegurados como array, objeto único o mapa; datosAsegurado string en raíz (legacy).
 * @param {Object} d - datos de la póliza
 * @param {string} tipo - etiqueta de ramo (GMM, Vida, …)
 * @param {Object} polizaRef - referencia que se guarda en cada fila (típicamente el mismo d)
 */
export function extraerAseguradosDePolizaData(d, tipo, polizaRef) {
    const poliza = polizaRef || d;
    const rows = [];

    const rfcPoliza =
        d.rfc != null && String(d.rfc).trim() !== '' ? String(d.rfc).trim() : '—';
    const legacyNombre =
        typeof d.datosAsegurado === 'string' && d.datosAsegurado.trim()
            ? d.datosAsegurado.trim()
            : '';

    const rawA = obtenerRawAsegurados(d);
    const lista = normalizarListaAsegurados(rawA);

    if (lista.length) {
        lista.forEach((a) => {
            const datosAsegurado =
                pickNombreDesdeItem(a)
                || (typeof a?.datosAsegurado === 'string' ? a.datosAsegurado.trim() : '')
                || legacyNombre
                || '—';
            const rfcFila =
                pickRfcDesdeItem(a) || (rfcPoliza !== '—' ? rfcPoliza : '');
            /** Copia superficial para el modal «Ver detalle» (integrante / fila en Firestore). */
            const detalleIntegrante =
                a && typeof a === 'object' && !Array.isArray(a) ? { ...a } : null;
            rows.push({
                nombre: String(datosAsegurado),
                rfc: rfcFila && rfcFila !== '' ? rfcFila : '—',
                tipo,
                poliza,
                origen: 'poliza',
                detalleIntegrante
            });
        });
        return rows;
    }

    if (legacyNombre) {
        rows.push({
            nombre: legacyNombre,
            rfc: rfcPoliza !== '—' ? rfcPoliza : '—',
            tipo,
            poliza,
            origen: 'poliza',
            detalleIntegrante: { datosAsegurado: legacyNombre, rfcTitular: rfcPoliza }
        });
        return rows;
    }

    const nombreTit = pickNombreTitularPoliza(d);
    const rfcTit = pickRfcTitularPoliza(d);
    if (nombreTit && rfcTit) {
        rows.push({
            nombre: nombreTit,
            rfc: rfcTit,
            tipo,
            poliza,
            origen: 'poliza',
            detalleIntegrante: {
                titular: true,
                nombreTitular: nombreTit,
                rfcTitular: rfcTit,
                polizaRaiz: pickCamposPolizaRaiz(d)
            }
        });
        return rows;
    }

    if (tipo === 'GMM') {
        rows.push({
            nombre: '—',
            rfc: rfcPoliza !== '—' ? rfcPoliza : '—',
            tipo,
            poliza,
            origen: 'poliza',
            detalleIntegrante: { nota: 'Sin lista de integrantes en dataAsegurados', polizaRaiz: pickCamposPolizaRaiz(d) }
        });
    }

    return rows;
}

/**
 * @param {import('firebase/firestore').Firestore} db
 * @param {string} nombreEmpresa
 */
export async function fetchDocumentosPorNombreEmpresa(db, nombreEmpresa) {
    const raw = String(nombreEmpresa || '').trim();
    if (!raw) return [];

    const variants = [...new Set([raw, raw.toUpperCase(), raw.toLowerCase()])];
    const out = [];
    const seenIds = new Set();

    for (const { collection, tipo, ramo } of COLECCIONES) {
        let matched = false;

        for (const v of variants) {
            try {
                const snap = await db.collection(collection).where('nombreEmpresa', '==', v).get();
                if (!snap.empty) {
                    snap.docs.forEach((doc) => {
                        const key = `${collection}/${doc.id}`;
                        if (seenIds.has(key)) return;
                        seenIds.add(key);
                        out.push({
                            id: doc.id,
                            collection,
                            tipo,
                            ramo,
                            data: doc.data()
                        });
                    });
                    matched = true;
                    break;
                }
            } catch (e) {
                console.warn(`[${collection}] query nombreEmpresa`, e);
            }
        }

        if (matched) continue;

        try {
            const snap = await db.collection(collection).limit(500).get();
            const target = normalizarTextoEmpresa(raw);
            snap.docs.forEach((doc) => {
                const d = doc.data();
                const ne = d.nombreEmpresa != null ? String(d.nombreEmpresa) : '';
                if (!ne || normalizarTextoEmpresa(ne) !== target) return;
                const key = `${collection}/${doc.id}`;
                if (seenIds.has(key)) return;
                seenIds.add(key);
                out.push({
                    id: doc.id,
                    collection,
                    tipo,
                    ramo,
                    data: d
                });
            });
        } catch (e) {
            console.warn(`[${collection}] scan nombreEmpresa`, e);
        }
    }

    return out;
}

/**
 * Pólizas donde el campo `rfc` coincide con el RFC de la empresa (colectivo).
 * @param {import('firebase/firestore').Firestore} db
 * @param {string} rfcEmpresa
 */
export async function fetchDocumentosPorRfcEmpresa(db, rfcEmpresa) {
    const raw = String(rfcEmpresa || '').trim();
    if (!raw) return [];

    const variants = variantesRfc(raw);
    const out = [];
    const seenIds = new Set();

    for (const { collection, tipo, ramo } of COLECCIONES) {
        let matched = false;
        for (const v of variants) {
            try {
                const snap = await db.collection(collection).where('rfc', '==', v).get();
                if (!snap.empty) {
                    snap.docs.forEach((doc) => {
                        const key = `${collection}/${doc.id}`;
                        if (seenIds.has(key)) return;
                        seenIds.add(key);
                        out.push({
                            id: doc.id,
                            collection,
                            tipo,
                            ramo,
                            data: doc.data()
                        });
                    });
                    matched = true;
                    break;
                }
            } catch (e) {
                console.warn(`[${collection}] query rfc empresa`, e);
            }
        }
        if (matched) continue;

        try {
            const snap = await db.collection(collection).limit(500).get();
            const targets = new Set(variants.map((x) => String(x).replace(/-/g, '').toUpperCase()));
            snap.docs.forEach((doc) => {
                const d = doc.data();
                const r = d.rfc != null ? String(d.rfc).replace(/-/g, '').toUpperCase() : '';
                if (!r || !targets.has(r)) return;
                const key = `${collection}/${doc.id}`;
                if (seenIds.has(key)) return;
                seenIds.add(key);
                out.push({
                    id: doc.id,
                    collection,
                    tipo,
                    ramo,
                    data: d
                });
            });
        } catch (e) {
            console.warn(`[${collection}] scan rfc`, e);
        }
    }

    return out;
}

function mergeDocumentosPorId(a, b) {
    const seen = new Set();
    const out = [];
    for (const d of [...a, ...b]) {
        const k = `${d.collection}/${d.id}`;
        if (seen.has(k)) continue;
        seen.add(k);
        out.push(d);
    }
    return out;
}

/**
 * Pólizas donde el campo anidado `ImgEmpresa.nombreEmpresa` coincide con el nombre comercial
 * o con el id del documento en ImgEmpresa (todas las colecciones de pólizas).
 * @param {import('firebase/firestore').Firestore} db
 * @param {{ nombreEmpresa?: string, imgEmpresaDocId?: string|null }} opts
 */
export async function fetchPolizasPorImgEmpresaAnidado(db, { nombreEmpresa, imgEmpresaDocId }) {
    const nombreRaw = String(nombreEmpresa || '').trim();
    const imgIdRaw = String(imgEmpresaDocId || '').trim();
    const criterios = [nombreRaw, imgIdRaw].filter((v) => v !== '');
    const unicos = [...new Set(criterios.map((s) => String(s).trim()))];
    if (!unicos.length) return [];

    const out = [];
    const seenIds = new Set();
    const targetNombre = nombreRaw ? normalizarTextoEmpresa(nombreRaw) : '';
    const targetIds = new Set(
        [imgIdRaw, imgIdRaw.toUpperCase(), imgIdRaw.toLowerCase()].filter(Boolean)
    );

    for (const { collection, tipo, ramo } of COLECCIONES) {
        let matched = false;
        for (const valor of unicos) {
            const variants = [...new Set([valor, valor.toUpperCase(), valor.toLowerCase()])];
            for (const v of variants) {
                try {
                    const snap = await db
                        .collection(collection)
                        .where('ImgEmpresa.nombreEmpresa', '==', v)
                        .get();
                    snap.docs.forEach((doc) => {
                        const key = `${collection}/${doc.id}`;
                        if (seenIds.has(key)) return;
                        seenIds.add(key);
                        out.push({
                            id: doc.id,
                            collection,
                            tipo,
                            ramo,
                            data: doc.data()
                        });
                    });
                    if (!snap.empty) matched = true;
                } catch (e) {
                    console.warn(`[${collection}] query ImgEmpresa.nombreEmpresa`, e);
                }
            }
        }

        if (matched) continue;

        try {
            const snap = await db.collection(collection).limit(500).get();
            snap.docs.forEach((doc) => {
                const d = doc.data() || {};
                const nested = d.ImgEmpresa && typeof d.ImgEmpresa === 'object' ? d.ImgEmpresa : null;
                if (!nested) return;

                const nestedNombre = nested.nombreEmpresa != null
                    ? normalizarTextoEmpresa(String(nested.nombreEmpresa))
                    : '';
                const nestedId = nested.id != null ? String(nested.id).trim() : '';

                const coincideNombre = targetNombre && nestedNombre && nestedNombre === targetNombre;
                const coincideId = nestedId && targetIds.has(nestedId);
                if (!coincideNombre && !coincideId) return;

                const key = `${collection}/${doc.id}`;
                if (seenIds.has(key)) return;
                seenIds.add(key);
                out.push({
                    id: doc.id,
                    collection,
                    tipo,
                    ramo,
                    data: d
                });
            });
        } catch (e) {
            console.warn(`[${collection}] scan ImgEmpresa.nombreEmpresa`, e);
        }
    }

    return out;
}

/**
 * Une consultas por nombre de empresa, RFC de empresa y campo anidado ImgEmpresa en todas las colecciones.
 * @param {{ nombre?: string, rfc?: string, imgEmpresaDocId?: string|null }} opts
 */
export async function fetchTodosDocumentosEmpresa(db, { nombre, rfc, imgEmpresaDocId }) {
    const [porNombre, porRfc, porNested] = await Promise.all([
        fetchDocumentosPorNombreEmpresa(db, nombre),
        fetchDocumentosPorRfcEmpresa(db, rfc),
        fetchPolizasPorImgEmpresaAnidado(db, { nombreEmpresa: nombre, imgEmpresaDocId })
    ]);
    return mergeDocumentosPorId(mergeDocumentosPorId(porNombre, porRfc), porNested);
}

function claveUnicaAsegurado(nombre, rfc, tipo) {
    const n = normalizarTextoEmpresa(String(nombre || ''));
    const r = String(rfc || '')
        .replace(/\s/g, '')
        .toUpperCase();
    return `${n}|${r}|${tipo}`;
}

/**
 * @param {Array<{ id: string, collection: string, tipo: string, ramo: string, data: Object }>} documentos
 */
export function extraerFilasAseguradosDesdeDocumentos(documentos) {
    const rows = [];
    const seen = new Set();

    for (const item of documentos) {
        const d = item.data;
        const tipo = item.tipo;
        const poliza = {
            ...d,
            _firestoreId: item.id,
            _collection: item.collection,
            _origen: 'empresaQuery'
        };

        const extraidas = extraerAseguradosDePolizaData(d, tipo, poliza);
        for (const row of extraidas) {
            row.origen = 'nombreEmpresa';
            const ck = claveUnicaAsegurado(row.nombre, row.rfc, row.tipo);
            if (seen.has(ck)) continue;
            seen.add(ck);
            rows.push(row);
        }
    }

    return rows;
}

/**
 * Combina listas evitando duplicados estrictos (nombre+rfc+tipo).
 */
export function fusionarFilasAsegurados(base, extra) {
    const seen = new Set();
    const out = [];

    for (const row of base) {
        const ck = claveUnicaAsegurado(row.nombre, row.rfc, row.tipo);
        if (seen.has(ck)) continue;
        seen.add(ck);
        out.push(row);
    }
    for (const row of extra) {
        const ck = claveUnicaAsegurado(row.nombre, row.rfc, row.tipo);
        if (seen.has(ck)) continue;
        seen.add(ck);
        out.push(row);
    }
    return out;
}

/**
 * Una fila por persona (RFC físico). Si no hay RFC válido, se mantiene la fila.
 */
export function dedupeAseguradosPorPersona(rows) {
    const porRfc = new Map();
    const sinClave = [];

    for (const row of rows) {
        const r = String(row.rfc || '')
            .replace(/\s/g, '')
            .toUpperCase();
        if (r && r !== '—' && r.length >= 10) {
            if (!porRfc.has(r)) porRfc.set(r, row);
            continue;
        }
        sinClave.push(row);
    }

    return [...porRfc.values(), ...sinClave];
}
