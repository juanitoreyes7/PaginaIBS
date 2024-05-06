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
                                                        ZURICH
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <a href="https://www.zurich.com.mx/HospitalNetworkWeb/views/supplier/supplierNetwork.xhtml"
                                                        target="_blank" class="ht-btn ht-btn-md ht-btn--outline">
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
                                                    <a href="https://www.gnp.com.mx/directorio-proveedores-medicos"
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
                                                        SURA
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <a href="https://www.segurossura.com.mx/red-medica/" target="_blank"
                                                        class="ht-btn ht-btn-md ht-btn--outline">
                                                        Entrar
                                                    </a>
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
            title: 'Hospitales y Médicos'
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