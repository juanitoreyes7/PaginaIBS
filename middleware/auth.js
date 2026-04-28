/**
 * Redirige a /login si el usuario no está autenticado.
 * Las rutas /login y /registro son públicas.
 */
const rutasPublicas = ['/', '/login', '/registro', '/register'];

export default function ({ route, redirect, app }) {
    if (rutasPublicas.includes(route.path)) {
        return;
    }
    // Generación estática / SSR: Firebase solo existe en el cliente; no bloquear aquí.
    if (!process.client) {
        return;
    }
    // Solo en el cliente validamos sesión
    if (!app.$auth) {
        return;
    }
    return new Promise((resolve) => {
        const unsubscribe = app.$auth.onAuthStateChanged((user) => {
            unsubscribe();
            if (!user) {
                redirect('/login');
            }
            resolve();
        });
    });
}
