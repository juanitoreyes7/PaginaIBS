<template>
    <div id="main-wrapper" class="main-wrapper">
        <Breadcrumbs2 :items="breadcrumbNavigation" breadcrumbTitle="Crear cuenta" />

        <section class="account-page-area section-gap-equal">
            <div class="container position-relative">
                <div class="row g-5 justify-content-center">
                    <div class="col-lg-5">
                        <div class="login-form-box">
                            <h3 class="title">Registrarse</h3>
                            <p>¿Ya tienes cuenta? <nuxt-link to="/login">Iniciar sesión</nuxt-link></p>

                            <div v-if="mensajeError" class="alert alert-danger" role="alert">
                                {{ mensajeError }}
                            </div>
                            <div v-if="mensajeExito" class="alert alert-success" role="alert">
                                {{ mensajeExito }}
                            </div>

                            <form @submit.prevent="registrarse">
                                <div class="form-group">
                                    <label for="reg-email">Email *</label>
                                    <input
                                        id="reg-email"
                                        v-model="email"
                                        type="email"
                                        class="form-control"
                                        placeholder="correo@ejemplo.com"
                                        required
                                        :disabled="cargando"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="reg-password">Contraseña *</label>
                                    <input
                                        id="reg-password"
                                        v-model="password"
                                        type="password"
                                        class="form-control"
                                        placeholder="Mínimo 6 caracteres"
                                        required
                                        minlength="6"
                                        :disabled="cargando"
                                    >
                                </div>
                                <div class="form-group">
                                    <label for="reg-password-confirm">Confirmar contraseña *</label>
                                    <input
                                        id="reg-password-confirm"
                                        v-model="passwordConfirm"
                                        type="password"
                                        class="form-control"
                                        placeholder="Repite tu contraseña"
                                        required
                                        :disabled="cargando"
                                    >
                                </div>
                                <div class="form-group">
                                    <button
                                        type="submit"
                                        class="edu-btn btn-medium"
                                        :disabled="cargando"
                                    >
                                        <span v-if="cargando">Creando cuenta...</span>
                                        <span v-else>Registrarse <i class="icon-4"></i></span>
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
    name: 'RegistroPage',
    middleware: 'guest',
    components: {
        Breadcrumbs2,
        Footer
    },
    data() {
        return {
            email: '',
            password: '',
            passwordConfirm: '',
            cargando: false,
            mensajeError: '',
            mensajeExito: '',
            breadcrumbNavigation: [
                { text: 'Inicio', to: '/' },
                { text: 'Registro', to: '' }
            ]
        };
    },
    head() {
        return {
            title: 'Registrarse - IBS Consultores'
        };
    },
    methods: {
        async registrarse() {
            this.mensajeError = '';
            this.mensajeExito = '';
            if (this.password !== this.passwordConfirm) {
                this.mensajeError = 'Las contraseñas no coinciden.';
                return;
            }
            if (this.password.length < 6) {
                this.mensajeError = 'La contraseña debe tener al menos 6 caracteres.';
                return;
            }
            this.cargando = true;
            try {
                await this.$auth.createUserWithEmailAndPassword(this.email, this.password);
                this.mensajeExito = 'Cuenta creada. Redirigiendo...';
                this.$router.push('/portal');
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    this.mensajeError = 'Ya existe una cuenta con este correo.';
                } else if (error.code === 'auth/invalid-email') {
                    this.mensajeError = 'El correo no es válido.';
                } else if (error.code === 'auth/weak-password') {
                    this.mensajeError = 'La contraseña es muy débil. Usa al menos 6 caracteres.';
                } else {
                    this.mensajeError = error.message || 'Error al crear la cuenta.';
                }
            } finally {
                this.cargando = false;
            }
        }
    }
};
</script>
