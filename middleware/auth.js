/**
 * Redirige a /login si el usuario no está autenticado.
 * Las rutas /login y /registro son públicas.
 */
const rutasPublicas = ['/', '/login', '/registro', '/register'];

export default function ({ route, redirect, app }) {
    if (rutasPublicas.includes(route.path)) {
        return;
    }
    // Solo en el cliente podemos leer el estado de Firebase Auth
    if (process.client && app.$auth) {
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
}
