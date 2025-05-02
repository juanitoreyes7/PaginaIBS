<template>
    <div class="main-container">

        <HeaderAppointment />

        <Breadcrumbs :items="breadcrumbNavigation" breadcrumbTitle="" />
        <br></br>
        <div class="feature-icon-wrapper section-space--pb_70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrap text-center section-space--mb_20">
                            <h3 class="heading">Políticas de Privacidad</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="feature-list__three">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="content-header">
                                                    <h5 class="heading">
                                                        Términos y condiciones
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <div class="text" style="text-align: justify;">
                                                        La información contenida o adjunta en este correo electrónico es
                                                        confidencial y privada, propiedad de IBS CONSULTORES, S.C. y del
                                                        destinatario. Está dirigida exclusivamente a la persona a quien va
                                                        destinada.
                                                    </div>
                                                    <p></p>
                                                    <div class="text" style="text-align: justify;">
                                                        La modificación, retransmisión, difusión, copia o cualquier otro uso
                                                        de esta información por personas distintas al destinatario está
                                                        estrictamente prohibido y puede ser ilegal. Si usted ha recibido
                                                        este mensaje por error, por favor notifique inmediatamente al
                                                        remitente, elimínelo de forma permanente y destruya cualquier copia
                                                        impresa.
                                                    </div>
                                                    <p></p>
                                                    <div class="text" style="text-align: justify;">
                                                        Contamos con una aplicación móvil oficial de IBS Consultores, en la
                                                        cual los usuarios pueden consultar información importante
                                                        relacionada con sus pólizas. Al utilizar esta aplicación, se
                                                        solicitará cierta información personal que será tratada conforme a
                                                        nuestra política de privacidad. El usuario podrá eliminar su cuenta
                                                        en cualquier momento accediendo a la sección Perfil > Eliminar
                                                        cuenta, y sus datos serán eliminados de forma permanente.
                                                    </div>
                                                    <p></p>
                                                    <div class="text" style="text-align: justify;">
                                                        This email and/or any documents attached are intended solely for the
                                                        use of the individual or entity to whom they are addressed and may
                                                        contain confidential, privileged, or legally protected information.
                                                    </div>
                                                    <p></p>
                                                    <div class="text" style="text-align: justify;">
                                                        If you are not the intended recipient, you are hereby notified that
                                                        any review, dissemination, distribution, or copying of this
                                                        communication is strictly prohibited. If you have received this
                                                        message in error, please notify the sender immediately, permanently
                                                        delete it, and destroy any printed copies.
                                                    </div>
                                                    <p></p>
                                                    <div class="text" style="text-align: justify;">
                                                        We offer an official mobile application from IBS Consultores where
                                                        users can access important information related to their insurance
                                                        policies. By using the app, certain personal information will be
                                                        requested and handled in accordance with our privacy policy. Users
                                                        may delete their account at any time by navigating to Profile >
                                                        Delete Account, and all personal data will be permanently removed.
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="feature-list__three">
                            <div class="row">
                                <div class="col-lg-4">
                                </div>
                                <div class="col-lg-4">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="section-title-wrap text-center section-space--mb_20">
                                                    <h5 class="heading">
                                                        Aviso de Privacidad
                                                    </h5>
                                                </div>
                                                <div class="section-title-wrap text-center section-space--mb_20">
                                                    <div class="content">
                                                        <div class="text"> <i class="fal fa-download"></i> <a
                                                                href="/doc/aviso.pdf" target="_blank">Descargar</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
import Header from '@/components/HeaderAppointment';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    components: {
        Header,
        Breadcrumbs,
        Footer,
        OffCanvasMobileMenu
    },
    head() {
        return {
            title: 'Descargables'
        }
    },
    data() {
        return {
            breadcrumbNavigation: [
                {
                    text: 'Home',
                    to: "/"
                },
                {
                    text: 'descargables',
                    active: true
                }
            ]
        }
    },
};
</script>