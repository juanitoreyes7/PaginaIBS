/**
 * Redirige al inicio si el usuario ya está autenticado.
 * Usar en páginas de login y registro.
 */
export default function ({ app, route, redirect }) {
    if (!process.client || !app.$auth) {
        return;
    }
    return new Promise((resolve) => {
        const unsubscribe = app.$auth.onAuthStateChanged((user) => {
            unsubscribe();
            if (user) {
                redirect('/');
            }
            resolve();
        });
    });
}
