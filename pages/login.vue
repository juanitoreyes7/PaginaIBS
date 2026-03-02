<template>
    <div id="main-wrapper" class="main-wrapper">
        <Breadcrumbs2 :items="breadcrumbNavigation" breadcrumbTitle="Iniciar sesión" />

        <section class="account-page-area section-gap-equal login-page">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10">
                        <div class="login-form-box">
                            <h3 class="title">Iniciar sesión</h3>
                            <p class="login-form-box__subtitle">
                                Accede a tu portal para consultar tus pólizas, beneficios y más.
                                <br>
                                <span>¿Aún no tienes cuenta?</span>
                                <nuxt-link to="/registro">Regístrate aquí</nuxt-link>
                            </p>

                            <div v-if="mensajeError" class="alert alert-danger" role="alert">
                                {{ mensajeError }}
                            </div>

                            <form @submit.prevent="iniciarSesion">
                                <div class="form-group login-form-box__field">
                                    <label for="current-log-email">Email *</label>
                                    <div class="login-form-box__input-wrap">
                                        <i class="far fa-envelope login-form-box__icon"></i>
                                        <input
                                            id="current-log-email"
                                            v-model="email"
                                            type="email"
                                            class="form-control login-form-box__input"
                                            placeholder="correo@ejemplo.com"
                                            required
                                            :disabled="cargando"
                                        >
                                    </div>
                                </div>
                                <div class="form-group login-form-box__field">
                                    <label for="current-log-password">Contraseña *</label>
                                    <div class="login-form-box__input-wrap">
                                        <i class="fas fa-lock login-form-box__icon"></i>
                                        <input
                                            id="current-log-password"
                                            v-model="password"
                                            :type="mostrarPassword ? 'text' : 'password'"
                                            class="form-control login-form-box__input"
                                            placeholder="Contraseña"
                                            required
                                            :disabled="cargando"
                                        >
                                        <button
                                            type="button"
                                            class="login-form-box__toggle"
                                            :aria-label="mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
                                            @click="mostrarPassword = !mostrarPassword"
                                        >
                                            <i :class="mostrarPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <a href="#" class="password-reset" @click.prevent="recuperarContrasena">¿Olvidaste tu contraseña?</a>
                                </div>
                                <div class="form-group">
                                    <button
                                        type="submit"
                                        class="edu-btn btn-medium"
                                        :disabled="cargando"
                                    >
                                        <span v-if="cargando">Entrando...</span>
                                        <span v-else>Iniciar sesión <i class="icon-4"></i></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script>
import Breadcrumbs2 from '@/components/Breadcrumbs2';
import Footer from '@/components/Footer';

export default {
    name: 'LoginPage',
    middleware: 'guest',
    components: {
        Breadcrumbs2,
        Footer
    },
    data() {
        return {
            email: '',
            password: '',
            cargando: false,
            mensajeError: '',
            mostrarPassword: false,
            breadcrumbNavigation: [
                { text: 'Inicio', to: '/' },
                { text: 'Iniciar sesión', to: '' }
            ]
        };
    },
    head() {
        return {
            title: 'Iniciar sesión - IBS Consultores'
        };
    },
    methods: {
        async iniciarSesion() {
            this.mensajeError = '';
            this.cargando = true;
            try {
                await this.$auth.signInWithEmailAndPassword(this.email, this.password);
                this.$router.push('/portal');
            } catch (error) {
                if (error.code === 'auth/user-not-found') {
                    this.mensajeError = 'No existe una cuenta con este correo.';
                } else if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                    this.mensajeError = 'Contraseña incorrecta.';
                } else if (error.code === 'auth/invalid-email') {
                    this.mensajeError = 'El correo no es válido.';
                } else if (error.code === 'auth/too-many-requests') {
                    this.mensajeError = 'Demasiados intentos. Intenta más tarde.';
                } else {
                    this.mensajeError = error.message || 'Error al iniciar sesión.';
                }
            } finally {
                this.cargando = false;
            }
        },
        recuperarContrasena() {
            if (!this.email) {
                this.mensajeError = 'Escribe tu correo y vuelve a intentar.';
                return;
            }
            this.$auth.sendPasswordResetEmail(this.email)
                .then(() => {
                    this.mensajeError = '';
                    alert('Revisa tu correo para restablecer tu contraseña.');
                })
                .catch((err) => {
                    this.mensajeError = err.message || 'No se pudo enviar el correo.';
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.login-page {
    background: linear-gradient(180deg, #f1f5f9 0%, #ffffff 40%, #e0edff 100%);
}

.login-form-box {
    background: #ffffff;
    border-radius: 24px;
    box-shadow: 0 18px 50px rgba(15, 23, 42, 0.15);
    padding: 40px 36px 32px;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top right, rgba(8, 106, 216, 0.18), transparent 55%);
        pointer-events: none;
    }

    .title {
        position: relative;
        z-index: 1;
        font-size: 26px;
        font-weight: 800;
        color: #0f172a;
        margin-bottom: 8px;
    }
}

.login-form-box__subtitle {
    position: relative;
    z-index: 1;
    font-size: 14px;
    color: #64748b;
    margin-bottom: 28px;
    line-height: 1.6;

    span {
        font-weight: 600;
        color: #0f172a;
    }

    a {
        margin-left: 4px;
        color: #086AD8;
        font-weight: 600;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
}

.login-form-box__field {
    position: relative;
    z-index: 1;
    margin-bottom: 18px;

    label {
        font-size: 13px;
        font-weight: 600;
        color: #475569;
        margin-bottom: 6px;
    }
}

.login-form-box__input-wrap {
    position: relative;
    display: flex;
    align-items: center;
}

.login-form-box__icon {
    position: absolute;
    left: 14px;
    font-size: 15px;
    color: #94a3b8;
    z-index: 2;
}

.login-form-box__input {
    padding-left: 40px;
    padding-right: 42px;
    height: 46px;
    border-radius: 999px;
    border: 1px solid #d0d8e5;
    font-size: 14px;
    color: #0f172a;
    box-shadow: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

    &::placeholder {
        color: #9ca3af;
    }

    &:focus {
        outline: none;
        border-color: #086AD8;
        box-shadow: 0 0 0 1px rgba(8, 106, 216, 0.25);
        background-color: #f8fafc;
    }

    &:disabled {
        background-color: #e5e7eb;
        cursor: not-allowed;
    }
}

.login-form-box__toggle {
    position: absolute;
    right: 12px;
    background: transparent;
    border: none;
    padding: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    cursor: pointer;
    border-radius: 999px;
    transition: background-color 0.15s ease, color 0.15s ease;

    i {
        font-size: 16px;
    }

    &:hover {
        background-color: rgba(148, 163, 184, 0.15);
        color: #64748b;
    }
}

.password-reset {
    position: relative;
    z-index: 1;
    font-size: 13px;
    color: #086AD8;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}

.edu-btn {
    position: relative;
    z-index: 1;
    width: 100%;
    justify-content: center;
    border-radius: 999px;
    border: none;
    background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
    box-shadow: 0 18px 35px rgba(8, 106, 216, 0.4);
    font-weight: 700;
    color: #ffffff !important;
    letter-spacing: 0.03em;

    &:disabled {
        opacity: 0.75;
        cursor: wait;
        box-shadow: none;
    }
}

@media (max-width: 575px) {
    .login-form-box {
        padding: 28px 20px 24px;
        border-radius: 20px;
    }
}
</style>
