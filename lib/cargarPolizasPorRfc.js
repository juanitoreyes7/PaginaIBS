/**
 * Carga pólizas locales (Firestore) + SICAS para un RFC dado.
 * Misma lógica que en pages/portafolio-polizas.vue
 */

const BASE_SICAS = 'https://api-sicas-616002718679.us-central1.run.app/api';

function mapSicasAutoToUI(p) {
    const concepto = (p.concepto || '').toString();
    const modelo = extraerModeloDesdeConcepto(concepto);
    return {
        descripcionAuto: concepto || `Póliza ${p.documento || ''}`.trim(),
        modelo: modelo || '',
        numPoliza: p.documento || '',
        concepto: concepto || '',
        idDocto: p.id,
        ciaNombre: p.ciaNombre,
        subRamo: p.subRamo,
        IDSRamo: p.IDSRamo,
        rfc: p.rfc,
        polizaDesde: p.polizaDesde,
        polizaHasta: p.polizaHasta,
        status: p.status,
        formaPago: p.formaPago,
        primaTotal: p.primaTotal,
        _origen: 'sicas',
        _rawSicas: p
    };
}

function mapSicasGmmToUI(p) {
    return {
        numPolizaGM: p.documento || '',
        idDocto: p.id,
        nombre: p.nombre,
        ciaNombre: p.ciaNombre,
        subRamo: p.subRamo,
        IDSRamo: p.IDSRamo,
        rfc: p.rfc,
        polizaDesde: p.polizaDesde,
        polizaHasta: p.polizaHasta,
        status: p.status,
        formaPago: p.formaPago,
        primaTotal: p.primaTotal,
        coaseguro: p.coaseguro,
        deducible: p.deducible,
        _origen: 'sicas',
        _rawSicas: p
    };
}

function mapSicasVidaToUI(p) {
    return {
        numPolizaVida: p.documento || '',
        certificadoVida: '',
        idDocto: p.id,
        nombre: p.nombre,
        ciaNombre: p.ciaNombre,
        subRamo: p.subRamo,
        IDSRamo: p.IDSRamo,
        rfc: p.rfc,
        polizaDesde: p.polizaDesde,
        polizaHasta: p.polizaHasta,
        status: p.status,
        formaPago: p.formaPago,
        primaTotal: p.primaTotal,
        _origen: 'sicas',
        _rawSicas: p
    };
}

function mapSicasHogarToUI(p) {
    return {
        numPolizaHogar: p.documento || '',
        idDocto: p.id,
        nombre: p.nombre,
        ciaNombre: p.ciaNombre,
        subRamo: p.subRamo,
        IDSRamo: p.IDSRamo,
        rfc: p.rfc,
        polizaDesde: p.polizaDesde,
        polizaHasta: p.polizaHasta,
        status: p.status,
        formaPago: p.formaPago,
        primaTotal: p.primaTotal,
        descripcionHogar: p.concepto || '',
        _origen: 'sicas',
        _rawSicas: p
    };
}

function extraerModeloDesdeConcepto(concepto) {
    const m = concepto.match(/\b(19\d{2}|20\d{2})\b/);
    return m ? m[1] : '';
}

function ordenarPorOrigen(arr) {
    return [...arr].sort((a, b) => {
        const oa = a._origen === 'sicas' ? 0 : 1;
        const ob = b._origen === 'sicas' ? 0 : 1;
        return oa - ob;
    });
}

/**
 * Prioridad para fusionar: conservar dataAsegurados de Firestore aunque SICAS vaya primero en el listado.
 */
function prioridadFusionGmm(p) {
    let s = 0;
    if (p.dataAsegurados != null) s += 20;
    if (Array.isArray(p.asegurados) && p.asegurados.length) s += 15;
    if (p._origen === 'local' || p._origen === 'empresaNombre') s += 5;
    if (p.file_url) s += 2;
    if (p.idDocto) s += 1;
    return s;
}

/**
 * Une filas GMM que representan la misma póliza (SICAS + Firestore / nombreEmpresa) para que
 * `dataAsegurados` del documento local no se pierda cuando la entrada SICAS queda como primera.
 */
export function fusionarPolizasGMMLista(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    const clave = (p) => {
        const n = String(p.numPolizaGM || p.documento || '').trim().toUpperCase().replace(/\s+/g, ' ');
        if (n) return n;
        const c = String(p.certificadoGM || p.certificado || '').trim().toUpperCase().replace(/\s+/g, ' ');
        return c || null;
    };

    const grupos = new Map();
    const sinClave = [];

    for (const p of arr) {
        const k = clave(p);
        if (!k) {
            sinClave.push(p);
            continue;
        }
        if (!grupos.has(k)) grupos.set(k, []);
        grupos.get(k).push(p);
    }

    const out = [...sinClave];
    for (const [, grupo] of grupos) {
        if (grupo.length === 1) {
            out.push(grupo[0]);
            continue;
        }
        const ordenado = [...grupo].sort((a, b) => prioridadFusionGmm(b) - prioridadFusionGmm(a));
        const base = { ...ordenado[0] };
        for (let i = 1; i < ordenado.length; i++) {
            const p = ordenado[i];
            Object.assign(base, p);
            if (p.dataAsegurados != null) base.dataAsegurados = p.dataAsegurados;
            if (p.asegurados != null) base.asegurados = p.asegurados;
            if (p.listaAsegurados != null) base.listaAsegurados = p.listaAsegurados;
            if (p.integrantes != null) base.integrantes = p.integrantes;
            base.idDocto = base.idDocto || p.idDocto;
            base.file_url = base.file_url || p.file_url;
            base.ciaNombre = base.ciaNombre || p.ciaNombre;
            base.numPolizaGM = base.numPolizaGM || p.numPolizaGM;
            base.certificadoGM = base.certificadoGM || p.certificadoGM;
            base.vDesde = base.vDesde || p.vDesde;
            base.vHasta = base.vHasta || p.vHasta;
            base.polizaDesde = base.polizaDesde || p.polizaDesde;
            base.polizaHasta = base.polizaHasta || p.polizaHasta;
        }
        const loc = grupo.some((g) => g._origen === 'local' || g._origen === 'empresaNombre');
        const sic = grupo.some((g) => g._origen === 'sicas');
        base._origen = loc && sic ? 'fusion' : base._origen;
        out.push(base);
    }
    return ordenarPorOrigen(out);
}

function filtrarVigentesHogar(arr) {
    if (!Array.isArray(arr)) return [];
    const hoy = new Date();

    const parseFecha = (valor) => {
        if (!valor) return null;
        if (valor instanceof Date) return valor;
        const str = String(valor).trim();
        if (/^\d{4}-\d{2}-\d{2}/.test(str)) {
            const d = new Date(str);
            return Number.isNaN(d.getTime()) ? null : d;
        }
        const m = str.match(/^(\d{2})[\/-](\d{2})[\/-](\d{4})$/);
        if (m) {
            const [, dd, mm, yyyy] = m;
            const d = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
            return Number.isNaN(d.getTime()) ? null : d;
        }
        const d = new Date(str);
        return Number.isNaN(d.getTime()) ? null : d;
    };

    return arr.filter((p) => {
        const status = (p.status || p.estatus || '').toString().toLowerCase().trim();
        if (status && status !== 'vigente' && status !== 'activa') {
            return false;
        }
        const fin = p.vHasta || p.polizaHasta;
        if (!fin) return true;
        const fechaFin = parseFecha(fin);
        if (!fechaFin) return true;
        return fechaFin >= hoy;
    });
}

async function fetchPolizasSicas(rfc) {
    const out = {
        auto: [],
        gmm: [],
        vida: [],
        hogar: []
    };
    try {
        const resp = await fetch(`${BASE_SICAS}/polizas?rfc=${encodeURIComponent(rfc)}`);
        if (!resp.ok) return out;

        let data = await resp.json();
        if (!data || data.success === false) {
            data = null;
        }

        if (data) {
            out.auto = Array.isArray(data.autos) ? data.autos : [];
            out.gmm = Array.isArray(data.gmm) ? data.gmm : [];
            out.vida = Array.isArray(data.vida) ? data.vida : [];
            out.hogar = Array.isArray(data.hogar) ? data.hogar : [];
        }

        if (!out.gmm.length) {
            const gmmResp = await fetch(`${BASE_SICAS}/polizas/gmm?rfc=${encodeURIComponent(rfc)}`);
            if (gmmResp.ok) {
                const gmmData = await gmmResp.json();
                if (gmmData && gmmData.success !== false && Array.isArray(gmmData.gmm)) {
                    out.gmm = gmmData.gmm;
                }
            }
        }
    } catch (e) {
        console.warn('SICAS fetch', e);
    }
    return out;
}

/**
 * @param {Object} opts
 * @param {import('firebase/firestore').Firestore} opts.db
 * @param {string} opts.rfc
 */
export async function cargarPolizasPorRfc({ db, rfc }) {
    const polizas = {
        auto: [],
        gastosMedicos: [],
        vida: [],
        funerarias: [],
        accidentes: [],
        hogar: []
    };

    const promises = [];

    promises.push(
        db.collection('PolizaAutos').where('rfc', '==', rfc).get().then((snap) => {
            polizas.auto.push(...snap.docs.map((doc) => ({ ...doc.data(), _origen: 'local' })));
        })
    );

    promises.push(
        db.collection('PolizaGM').where('rfc', '==', rfc).get().then((snap) => {
            polizas.gastosMedicos.push(...snap.docs.map((doc) => ({ ...doc.data(), _origen: 'local' })));
        })
    );

    promises.push(
        db.collection('PolizaVida').where('rfc', '==', rfc).get().then((snap) => {
            polizas.vida.push(...snap.docs.map((doc) => ({ ...doc.data(), _origen: 'local' })));
        })
    );

    promises.push(
        db.collection('PolizaFuneraria').where('rfc', '==', rfc).get().then((snap) => {
            polizas.funerarias.push(...snap.docs.map((doc) => ({ ...doc.data(), _origen: 'local' })));
        })
    );

    promises.push(
        db.collection('PolizaAccidentes').where('rfc', '==', rfc).get().then((snap) => {
            polizas.accidentes.push(...snap.docs.map((doc) => ({ ...doc.data(), _origen: 'local' })));
        })
    );

    promises.push(
        db.collection('PolizaHogar').where('rfc', '==', rfc).get().then((snap) => {
            polizas.hogar.push(...snap.docs.map((doc) => ({ ...doc.data(), _origen: 'local' })));
        })
    );

    promises.push(
        fetchPolizasSicas(rfc).then((sicas) => {
            polizas.auto.push(...sicas.auto.map(mapSicasAutoToUI));
            polizas.gastosMedicos.push(...sicas.gmm.map(mapSicasGmmToUI));
            polizas.vida.push(...sicas.vida.map(mapSicasVidaToUI));
            polizas.hogar.push(...sicas.hogar.map(mapSicasHogarToUI));
        })
    );

    await Promise.all(promises);

    polizas.hogar = filtrarVigentesHogar(polizas.hogar);
    polizas.auto = ordenarPorOrigen(polizas.auto);
    polizas.gastosMedicos = fusionarPolizasGMMLista(ordenarPorOrigen(polizas.gastosMedicos));
    polizas.vida = ordenarPorOrigen(polizas.vida);
    polizas.hogar = ordenarPorOrigen(polizas.hogar);

    return polizas;
}
