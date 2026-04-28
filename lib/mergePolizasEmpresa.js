import { fusionarPolizasGMMLista } from './cargarPolizasPorRfc';

/**
 * Incorpora documentos encontrados por nombre/RFC empresa (y consultas anidadas)
 * al objeto de pólizas de `cargarPolizasPorRfc`, para que aparezcan en el portal
 * aunque el campo `rfc` de la póliza sea el del asegurado y no el RFC moral.
 *
 * @param {Object} polizasCompletas - resultado de cargarPolizasPorRfc
 * @param {Array<{ id: string, collection: string, data: Object }>} documentos
 */
export function mergeDocumentosEmpresaEnPolizas(polizasCompletas, documentos) {
    const out = {
        auto: [...(polizasCompletas.auto || [])],
        gastosMedicos: [...(polizasCompletas.gastosMedicos || [])],
        vida: [...(polizasCompletas.vida || [])],
        funerarias: [...(polizasCompletas.funerarias || [])],
        accidentes: [...(polizasCompletas.accidentes || [])],
        hogar: [...(polizasCompletas.hogar || [])]
    };

    const keyOf = (col, id) => `${col}/${id}`;
    const existingKeys = new Set();

    for (const arr of Object.values(out)) {
        for (const p of arr) {
            if (p._firestoreId && p._collection) {
                existingKeys.add(keyOf(p._collection, p._firestoreId));
            }
        }
    }

    for (const item of documentos) {
        const k = keyOf(item.collection, item.id);
        if (existingKeys.has(k)) continue;
        existingKeys.add(k);

        const row = {
            ...item.data,
            _firestoreId: item.id,
            _collection: item.collection,
            _origen: 'empresaNombre'
        };

        switch (item.collection) {
            case 'PolizaAutos':
                out.auto.push(row);
                break;
            case 'PolizaGM':
                out.gastosMedicos.push(row);
                break;
            case 'PolizaVida':
                out.vida.push(row);
                break;
            case 'PolizaFuneraria':
                out.funerarias.push(row);
                break;
            case 'PolizaAccidentes':
                out.accidentes.push(row);
                break;
            case 'PolizaHogar':
                out.hogar.push(row);
                break;
            default:
                break;
        }
    }

    out.gastosMedicos = fusionarPolizasGMMLista(out.gastosMedicos);

    return out;
}
