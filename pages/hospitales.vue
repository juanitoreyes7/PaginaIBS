<template>
    <div class="main-container">

        <HeaderAppointment />

        <Breadcrumbs :items="breadcrumbNavigation" breadcrumbTitle="Hospitales y Médicos" />
        <br></br>
        <div class="feature-icon-wrapper section-space--pb_70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrap text-center section-space--mb_20">
                            <h3 class="heading">Selecciona la aseguradora en el cual quieres consultar la información
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="feature-list__three">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="content-header">
                                                    <h5 class="heading">
                                                        ATLAS
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <a href="https://www.segurosatlas.com.mx/OficinasAtencion.html"
                                                        target="_blank" class="ht-btn ht-btn-md">
                                                        Entrar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="content-header">
                                                    <h5 class="heading">
                                                        AXA
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <a href="https://axa.mx/servicios/buscador-de-servicios" target="_blank"
                                                        class="ht-btn ht-btn-md ht-btn--outline">
                                                        Entrar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="content-header">
                                                    <h5 class="heading">
                                                        METLIFE
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <a href="https://www.metlife.com.mx/servicios/directorio-medico/"
                                                        target="_blank" class="ht-btn ht-btn-md">
                                                        Entrar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="content-header">
                                                    <h5 class="heading">
                                                        GNP
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <div class="text"><i class="fal fa-download"></i><a
                                                            href="/doc/gnp/avisoaccidentes.pdf" target="_blank"> Aviso de
                                                            accidentes o enfermedad.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i> <a
                                                            href="/doc/gnp/informemedico.pdf" target="_blank">Informe
                                                            médico.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i><a
                                                            href="/doc/gnp/reembolso.pdf" target="_blank"> Solicitud de
                                                            reembolso.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i><a
                                                            href="/doc/gnp/informacionbancaria.pdf" target="_blank"> Formato
                                                            unico de información bancaria.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i> <a
                                                            href="/doc/gnp/parto.pdf" target="_blank">Notificacion de ayuda
                                                            para parto o cesarea.</a></div>
                                                    <div class="text"> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="content-header">
                                                    <h5 class="heading">
                                                        ATLAS
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <a href="https://www.segurosatlas.com.mx/OficinasAtencion.html"
                                                        target="_blank" class="ht-btn ht-btn-md">
                                                        Talk to a consultant
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="grid-item animate">
                                        <div class="ht-box-icon style-03">
                                            <div class="icon-box-wrap">
                                                <div class="content-header">
                                                    <h5 class="heading">
                                                        ZURICH
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <n-link to="/contact" class="ht-btn ht-btn-md ht-btn--outline">
                                                        Contact us now
                                                    </n-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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