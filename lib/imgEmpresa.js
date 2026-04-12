/**
 * Colección Firestore `ImgEmpresa`: configura qué ramos / pólizas están dados de alta
 * para una empresa identificada por `nombreEmpresa` (debe alinearse con `Usuarios.nombre`).
 *
 * Los documentos pueden incluir mapas anidados por ramo, p. ej.:
 * `polizaAccidentes`, `polizaFuneraria`, `polizaGM`, `polizaVida`, `polizaAuto`, `polizaHogar`
 * con campos tipo: `compania`, `file_url`, `numPoliza*`, `vDesde`, `vHasta`.
 */

const RAMO_KEYS = ['gmm', 'vida', 'funeraria', 'accidentes', 'auto', 'hogar'];

/** Convierte Timestamp de Firestore / Date / string a valor usable en la UI. */
export function aplanarFechaCampo(val) {
    if (val == null || val === '') return val;
    if (typeof val.toDate === 'function') return val.toDate();
    if (val && typeof val.seconds === 'number') {
        return new Date(val.seconds * 1000);
    }
    if (val instanceof Date) return val;
    return val;
}

/**
 * Determina si un mapa de póliza anidado tiene al menos un dato útil (no todo null).
 * @param {Object|null|undefined} m
 */
export function mapaPolizaTieneDatos(m) {
    if (!m || typeof m !== 'object') return false;
    for (const v of Object.values(m)) {
        if (v == null || v === '') continue;
        if (typeof v === 'object') {
            if (typeof v.toDate === 'function') return true;
            if (v.seconds != null) return true;
            if (v instanceof Date) return true;
            continue;
        }
        return true;
    }
    return false;
}

function mapAnidadoAGmm(raw) {
    const r = raw || {};
    return {
        numPolizaGM: r.numPolizaGM || r.numPolizaGMM || r.documento || '',
        ciaNombre: r.compania != null ? String(r.compania) : '',
        file_url: r.file_url || '',
        polizaDesde: aplanarFechaCampo(r.vDesde),
        polizaHasta: aplanarFechaCampo(r.vHasta),
        vDesde: aplanarFechaCampo(r.vDesde),
        vHasta: aplanarFechaCampo(r.vHasta),
        nombre: r.nombre || '',
        _origen: 'imgEmpresa'
    };
}

function mapAnidadoAVida(raw) {
    const r = raw || {};
    return {
        numPolizaVida: r.numPolizaVida || r.documento || '',
        ciaNombre: r.compania != null ? String(r.compania) : '',
        file_url: r.file_url || '',
        polizaDesde: aplanarFechaCampo(r.vDesde),
        polizaHasta: aplanarFechaCampo(r.vHasta),
        vDesde: aplanarFechaCampo(r.vDesde),
        vHasta: aplanarFechaCampo(r.vHasta),
        nombre: r.nombre || '',
        _origen: 'imgEmpresa'
    };
}

function mapAnidadoAFuneraria(raw) {
    const r = raw || {};
    return {
        numPolizaFuneraria: r.numPolizaFuneraria || r.documento || '',
        ciaNombre: r.compania != null ? String(r.compania) : '',
        file_url: r.file_url || '',
        polizaDesde: aplanarFechaCampo(r.vDesde),
        polizaHasta: aplanarFechaCampo(r.vHasta),
        vDesde: aplanarFechaCampo(r.vDesde),
        vHasta: aplanarFechaCampo(r.vHasta),
        nombre: r.nombre || '',
        _origen: 'imgEmpresa'
    };
}

function mapAnidadoAAccidentes(raw) {
    const r = raw || {};
    return {
        numPolizaAccidente: r.numPolizaAccidente || r.documento || '',
        ciaNombre: r.compania != null ? String(r.compania) : '',
        file_url: r.file_url || '',
        polizaDesde: aplanarFechaCampo(r.vDesde),
        polizaHasta: aplanarFechaCampo(r.vHasta),
        vDesde: aplanarFechaCampo(r.vDesde),
        vHasta: aplanarFechaCampo(r.vHasta),
        nombre: r.nombre || '',
        _origen: 'imgEmpresa'
    };
}

function mapAnidadoAAuto(raw) {
    const r = raw || {};
    return {
        numPoliza: r.numPoliza || r.documento || '',
        descripcionAuto: r.descripcionAuto || r.concepto || '',
        ciaNombre: r.compania != null ? String(r.compania) : '',
        file_url: r.file_url || '',
        polizaDesde: aplanarFechaCampo(r.vDesde),
        polizaHasta: aplanarFechaCampo(r.vHasta),
        vDesde: aplanarFechaCampo(r.vDesde),
        vHasta: aplanarFechaCampo(r.vHasta),
        _origen: 'imgEmpresa'
    };
}

function mapAnidadoAHogar(raw) {
    const r = raw || {};
    return {
        numPolizaHogar: r.numPolizaHogar || r.documento || '',
        descripcionHogar: r.descripcionHogar || '',
        ciaNombre: r.compania != null ? String(r.compania) : '',
        file_url: r.file_url || '',
        polizaDesde: aplanarFechaCampo(r.vDesde),
        polizaHasta: aplanarFechaCampo(r.vHasta),
        vDesde: aplanarFechaCampo(r.vDesde),
        vHasta: aplanarFechaCampo(r.vHasta),
        nombre: r.nombre || '',
        _origen: 'imgEmpresa'
    };
}

/**
 * Lee los mapas anidados del documento ImgEmpresa y devuelve el mismo shape que `cargarPolizasPorRfc`
 * (solo ramos con datos en el documento).
 * @param {Object|null} data
 * @returns {Object|null} null si no hay mapas con datos; si no, objeto con arrays por ramo
 */
export function extraerPolizasDesdeMapasAnidadosImgEmpresa(data) {
    if (!data || typeof data !== 'object') return null;

    /** @type {Record<string, Array<{ field: string, map: Function }>>} */
    const definiciones = {
        gastosMedicos: [
            { field: 'polizaGM', map: mapAnidadoAGmm },
            { field: 'polizaGMM', map: mapAnidadoAGmm },
            { field: 'polizaGastosMedicos', map: mapAnidadoAGmm }
        ],
        vida: [{ field: 'polizaVida', map: mapAnidadoAVida }],
        funerarias: [{ field: 'polizaFuneraria', map: mapAnidadoAFuneraria }],
        accidentes: [{ field: 'polizaAccidentes', map: mapAnidadoAAccidentes }],
        auto: [
            { field: 'polizaAuto', map: mapAnidadoAAuto },
            { field: 'polizaAutos', map: mapAnidadoAAuto }
        ],
        hogar: [{ field: 'polizaHogar', map: mapAnidadoAHogar }]
    };

    const out = {
        gastosMedicos: [],
        vida: [],
        funerarias: [],
        accidentes: [],
        auto: [],
        hogar: []
    };

    let alguno = false;

    for (const ramo of Object.keys(definiciones)) {
        for (const { field, map } of definiciones[ramo]) {
            const rawMap = data[field];
            if (!mapaPolizaTieneDatos(rawMap)) continue;
            out[ramo].push(map(rawMap));
            alguno = true;
            break;
        }
    }

    return alguno ? out : null;
}

/**
 * Sustituye en `merged` los ramos para los que exista dato en mapas anidados ImgEmpresa
 * (los mapas del documento tienen prioridad sobre RFC/SICAS).
 */
export function aplicarPolizasAnidadasImgEmpresa(merged, data) {
    const extraidas = extraerPolizasDesdeMapasAnidadosImgEmpresa(data);
    if (!extraidas) return merged;

    const out = { ...merged };
    if (extraidas.gastosMedicos.length) out.gastosMedicos = extraidas.gastosMedicos;
    if (extraidas.vida.length) out.vida = extraidas.vida;
    if (extraidas.funerarias.length) out.funerarias = extraidas.funerarias;
    if (extraidas.accidentes.length) out.accidentes = extraidas.accidentes;
    if (extraidas.auto.length) out.auto = extraidas.auto;
    if (extraidas.hogar.length) out.hogar = extraidas.hogar;
    return out;
}

/** Normaliza texto para comparar nombres de empresa sin acentos ni mayúsculas. */
export function normalizarTextoEmpresa(s) {
    if (s == null || s === '') return '';
    return String(s)
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Convierte una etiqueta humana o de Firebase al key interno del portal.
 * @param {string} raw
 * @returns {string|null}
 */
export function normalizarRamoKey(raw) {
    if (raw == null || raw === '') return null;
    const x = String(raw).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if (['gmm', 'gm', 'gastos medicos', 'gastosmedicos', 'gastos_medicos', 'gmm colectivo'].includes(x)) {
        return 'gmm';
    }
    if (['vida', 'seguro de vida'].includes(x)) return 'vida';
    if (['funeraria', 'funerario', 'funerarios'].includes(x)) return 'funeraria';
    if (['accidentes', 'accidente', 'accidentes personales'].includes(x)) return 'accidentes';
    if (['auto', 'autos', 'automovil', 'automoviles', 'automóvil'].includes(x)) return 'auto';
    if (['hogar', 'daños', 'danos'].includes(x)) return 'hogar';
    return null;
}

/**
 * Interpreta el documento `ImgEmpresa` y devuelve un Set de keys de ramo permitidos,
 * o `null` si no hay criterio explícito (se muestran todos los datos cargados por RFC).
 *
 * Campos soportados:
 * - Arrays: `ramos`, `ramosActivos`, `ramosRegistrados`, `polizasActivas`
 * - Booleanos: `gmm`, `GMM`, `vida`, `Vida`, `funeraria`, `accidentes`, `auto`, `hogar`, etc.
 *
 * @param {Object|null} data
 * @returns {Set<string>|null}
 */
export function parseRamosDesdeImgEmpresa(data) {
    if (!data || typeof data !== 'object') return null;

    const set = new Set();

    for (const field of ['ramos', 'ramosActivos', 'ramosRegistrados', 'polizasActivas', 'ramosDadosDeAlta']) {
        if (Array.isArray(data[field])) {
            for (const item of data[field]) {
                const k = normalizarRamoKey(item);
                if (k) set.add(k);
            }
        }
    }

    const boolFields = [
        ['gmm', ['gmm', 'GMM', 'gastosMedicos', 'GastosMedicos', 'GastosMedicosMayores', 'polizaGMM', 'polizaGM']],
        ['vida', ['vida', 'Vida', 'polizaVida']],
        ['funeraria', ['funeraria', 'Funeraria', 'polizaFuneraria']],
        ['accidentes', ['accidentes', 'Accidentes', 'polizaAccidentes']],
        ['auto', ['auto', 'Auto', 'autos', 'polizaAuto', 'PolizaAutos']],
        ['hogar', ['hogar', 'Hogar', 'polizaHogar']]
    ];

    for (const [key, names] of boolFields) {
        for (const n of names) {
            if (data[n] === true) set.add(key);
        }
    }

    const desdeMapas = extraerPolizasDesdeMapasAnidadosImgEmpresa(data);
    if (desdeMapas) {
        if (desdeMapas.gastosMedicos.length) set.add('gmm');
        if (desdeMapas.vida.length) set.add('vida');
        if (desdeMapas.funerarias.length) set.add('funeraria');
        if (desdeMapas.accidentes.length) set.add('accidentes');
        if (desdeMapas.auto.length) set.add('auto');
        if (desdeMapas.hogar.length) set.add('hogar');
    }

    if (set.size) return set;
    return null;
}

/**
 * Si el documento lista números de póliza por ramo, filtra cada arreglo.
 * Ej.: `numerosGMM: ['123','456']` o `polizasGMM: [...]`
 *
 * @param {Object} polizas - mismo shape que cargarPolizasPorRfc
 * @param {Object} data - datos ImgEmpresa
 */
export function filtrarPolizasPorNumerosOpcional(polizas, data) {
    if (!data || typeof data !== 'object') return polizas;

    const pickNums = (keys) => {
        for (const k of keys) {
            const v = data[k];
            if (Array.isArray(v) && v.length) {
                return new Set(v.map((x) => String(x).trim()));
            }
        }
        return null;
    };

    const norm = (p, getters) => {
        for (const g of getters) {
            const v = g(p);
            if (v != null && v !== '') return String(v).trim();
        }
        return '';
    };

    const out = { ...polizas };

    const numsGmm = pickNums(['numerosGMM', 'numerosPolizaGMM', 'polizasGMM', 'numPolizaGMM']);
    if (numsGmm && numsGmm.size) {
        out.gastosMedicos = polizas.gastosMedicos.filter((p) =>
            numsGmm.has(norm(p, [(x) => x.numPolizaGM, (x) => x.documento])));
    }

    const numsVida = pickNums(['numerosVida', 'polizasVida', 'numPolizaVida']);
    if (numsVida && numsVida.size) {
        out.vida = polizas.vida.filter((p) =>
            numsVida.has(norm(p, [(x) => x.numPolizaVida, (x) => x.documento])));
    }

    const numsFun = pickNums(['numerosFuneraria', 'polizasFuneraria']);
    if (numsFun && numsFun.size) {
        out.funerarias = polizas.funerarias.filter((p) =>
            numsFun.has(norm(p, [(x) => x.numPolizaFuneraria, (x) => x.documento])));
    }

    const numsAcc = pickNums(['numerosAccidentes', 'polizasAccidentes']);
    if (numsAcc && numsAcc.size) {
        out.accidentes = polizas.accidentes.filter((p) =>
            numsAcc.has(norm(p, [(x) => x.numPolizaAccidente, (x) => x.documento])));
    }

    const numsAuto = pickNums(['numerosAuto', 'polizasAuto']);
    if (numsAuto && numsAuto.size) {
        out.auto = polizas.auto.filter((p) =>
            numsAuto.has(norm(p, [(x) => x.numPoliza, (x) => x.documento])));
    }

    const numsHogar = pickNums(['numerosHogar', 'polizasHogar']);
    if (numsHogar && numsHogar.size) {
        out.hogar = (polizas.hogar || []).filter((p) =>
            numsHogar.has(norm(p, [(x) => x.numPolizaHogar, (x) => x.documento])));
    }

    return out;
}

/**
 * Deja solo los ramos indicados en `ramosPermitidos`. Si `ramosPermitidos` es null, no filtra por ramo.
 * @param {Object} polizas
 * @param {Set<string>|null} ramosPermitidos
 */
export function filtrarPolizasPorRamos(polizas, ramosPermitidos) {
    if (!ramosPermitidos || ramosPermitidos.size === 0) return polizas;

    const out = { ...polizas };
    if (!ramosPermitidos.has('gmm')) out.gastosMedicos = [];
    if (!ramosPermitidos.has('vida')) out.vida = [];
    if (!ramosPermitidos.has('funeraria')) out.funerarias = [];
    if (!ramosPermitidos.has('accidentes')) out.accidentes = [];
    if (!ramosPermitidos.has('auto')) out.auto = [];
    if (!ramosPermitidos.has('hogar')) out.hogar = [];
    return out;
}

/**
 * Busca un documento en `ImgEmpresa` cuyo `nombreEmpresa` coincida con el del usuario.
 * Intenta coincidencia exacta y variantes de mayúsculas; si falla, compara nombres normalizados (máx. 200 docs).
 *
 * @param {import('firebase/firestore').Firestore} db
 * @param {string} nombreEmpresa - típicamente `Usuarios.nombre`
 * @returns {Promise<{ data: Object|null, id: string|null }>}
 */
export async function fetchImgEmpresaPorNombre(db, nombreEmpresa) {
    const raw = String(nombreEmpresa || '').trim();
    if (!raw) return { data: null, id: null };

    const variants = [...new Set([raw, raw.toUpperCase(), raw.toLowerCase()])];

    for (const v of variants) {
        const snap = await db.collection('ImgEmpresa').where('nombreEmpresa', '==', v).limit(3).get();
        if (!snap.empty) {
            const doc = snap.docs[0];
            return { data: doc.data(), id: doc.id };
        }
    }

    try {
        const snap = await db.collection('ImgEmpresa').limit(200).get();
        const target = normalizarTextoEmpresa(raw);
        for (const doc of snap.docs) {
            const d = doc.data();
            const ne = d && d.nombreEmpresa != null ? String(d.nombreEmpresa) : '';
            if (ne && normalizarTextoEmpresa(ne) === target) {
                return { data: d, id: doc.id };
            }
        }
    } catch (e) {
        console.warn('ImgEmpresa: no se pudo leer colección para coincidencia flexible', e);
    }

    return { data: null, id: null };
}

/**
 * Aplica reglas ImgEmpresa sobre el resultado de `cargarPolizasPorRfc`.
 * @returns {{ polizas: Object, ramosPermitidos: Set<string>|null, imgEmpresa: Object|null, imgEmpresaId: string|null }}
 */
export async function aplicarReglasImgEmpresa(db, nombreEmpresa, polizasCompletas) {
    const { data, id } = await fetchImgEmpresaPorNombre(db, nombreEmpresa);

    if (!data) {
        return {
            polizas: polizasCompletas,
            ramosPermitidos: null,
            imgEmpresa: null,
            imgEmpresaId: null
        };
    }

    const ramos = parseRamosDesdeImgEmpresa(data);
    let merged = { ...polizasCompletas };

    merged = filtrarPolizasPorNumerosOpcional(merged, data);

    if (ramos && ramos.size) {
        merged = filtrarPolizasPorRamos(merged, ramos);
    }

    // Mapas anidados en el documento (p. ej. polizaAccidentes) sustituyen las pólizas cargadas por RFC.
    merged = aplicarPolizasAnidadasImgEmpresa(merged, data);

    return {
        polizas: merged,
        ramosPermitidos: ramos,
        imgEmpresa: data,
        imgEmpresaId: id
    };
}

export { RAMO_KEYS };
