
<template>
    <div id="main-wrapper" class="main-wrapper">

        <Breadcrumbs2 :items="breadcrumbNavigation" breadcrumbTitle="Bienvenido" />


        <section class="account-page-area section-gap-equal">
            <div class="container position-relative">
                <div class="row g-5 justify-content-center">
                    <div class="col-lg-5">
                        <div class="login-form-box">
                            <h3 class="title">Iniciar sesión</h3>
                            <p>¿Aún no tienes cuenta? <a href="/acount/signin">Registrarse</a></p>
                            <form>
                                <div class="form-group">
                                    <label for="current-log-email">email*</label>
                                    <input type="email" name="current-log-email" id="current-log-email" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <label for="current-log-password">Contraseña*</label>
                                    <input type="password" name="current-log-password" id="current-log-password" placeholder="Contraseña">
                                    <span class="password-show"><i class="icon-76"></i></span>
                                </div>
                                <div class="form-group chekbox-area">
                                    <div class="edu-form-check">
                                        <input type="checkbox" id="remember-me">
                                        <label for="remember-me">Recordarme</label>
                                    </div>
                                    <a href="#" class="password-reset">¿Olvidaste tu contraseña?</a>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="edu-btn btn-medium">Iniciar Sesión <i class="icon-4"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ul class="shape-group">
                    <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                    <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                    <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                </ul>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script>
    import Breadcrumbs2 from '@/components/Breadcrumbs2';
    import Footer from '@/components/Footer';

    export default {
        components: {
            Breadcrumbs2, 
            Footer
        },
        head() {
            return {
                title: 'Terms & Condition'
            }
        }
    }
</script>
