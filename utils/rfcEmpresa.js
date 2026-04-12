/**
 * RFC persona moral (empresa) en México: 12 caracteres sin guiones.
 * Persona física suele ser 13 caracteres.
 */
export function normalizarRfc(rfc) {
    if (rfc == null || rfc === '') return '';
    return String(rfc)
        .replace(/-/g, '')
        .toUpperCase()
        .trim();
}

export function esRfcEmpresa(rfc) {
    return normalizarRfc(rfc).length === 12;
}
