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
                                                    <div class="text">La información contenida o adjunta en este correo electrónico es confidencial y privada, propiedad de IBS CONSULTORES, S.C. y el destinatario. Esta dirigida exclusivamente al destinatario.</div>
                                                    <div class="text">La modificación, retransmisión, difusión, copia u otro uso de esta información por cualquier medio, por personas distintas al destinatario está estrictamente prohibido y puede ser ilegal. Si lo ha recibido por error,por favor notifique al emisor e inmediatamente bórrelo de forma permanente y destruya cualquier copia impresa.</div>
                                                    <div class="text">This message and/or document enclosed is intended only for the use of the individual or entity to which it is addressed an may contain information that is privileged,confidential and exempt from disclosure under applicable law.</div>
                                                    <div class="text">If the reader of this message is not the intended recipient, you are hereby notified that any dissemination, distribution, or copying of this message and/or document enclosed is strictly prohibited. If you received this communication in error, please notify the sender inmmediately, permanently delete it and destroy any copues of it that werep</div>
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
                                                        <div class="text"> <i class="fal fa-download"></i> <a href="/doc/aviso.pdf" target="_blank">Descargar</a></div>
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
        data () {
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