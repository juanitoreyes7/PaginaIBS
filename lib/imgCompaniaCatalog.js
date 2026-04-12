/**
 * Catálogo ImgCompania: id de documento → nombre visible.
 * @param {import('firebase/firestore').Firestore} db
 * @returns {Promise<Map<string, string>>}
 */
export async function fetchCatalogoCompaniasMap(db) {
    const m = new Map();
    if (!db) return m;
    try {
        const snap = await db.collection('ImgCompania').get();
        snap.docs.forEach((d) => {
            const data = d.data() || {};
            m.set(d.id, (data.nombreCompania || d.id).toString());
        });
    } catch (e) {
        console.warn('[ImgCompania] fetchCatalogoCompaniasMap', e);
    }
    return m;
}
