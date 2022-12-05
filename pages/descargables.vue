<template>
    <div class="main-container">

        <HeaderAppointment />

        <Breadcrumbs :items="breadcrumbNavigation" breadcrumbTitle="Descargables" />
<br></br>
        <div class="feature-icon-wrapper section-space--pb_70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-wrap text-center section-space--mb_20">
                            <h3 class="heading">Selecciona el documento que deseas descargar y da clic</h3>
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
                                                        Terminos y condiciones
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <div class="text"> <i class="fal fa-download"></i> <a href="/doc/aviso.pdf" target="_blank">Aviso de privacidad </a></div>
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
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/axa/reembolso.pdf" target="_blank">Formato de reembolso.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/axa/informemedico.pdf" target="_blank">Informe médico AI346.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/axa/programacion.pdf" target="_blank">Solicitud programación de servicios médicos.</a></div>
                                                    <div class="text"></div>   
                                                    <div class="text"></div>   
                                                    <div class="text"></div>   

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
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/metlife/reembolso.pdf" target="_blank">Solicitud de reembolso.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/metlife/informemedico.pdf" target="_blank">Informe médico.</a></div>       
                                                    <div class="text"> </div>   
                                                    <div class="text"> </div>   
                                                    <div class="text"> </div>   
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
                                                        GNP
                                                    </h5>
                                                </div>
                                                <div class="content">
                                                    <div class="text"><i class="fal fa-download"></i><a href="/doc/gnp/avisoaccidentes.pdf" target="_blank"> Aviso de accidentes o enfermedad.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/gnp/informemedico.pdf" target="_blank">Informe médico.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i><a href="/doc/gnp/reembolso.pdf" target="_blank"> Solicitud de reembolso.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i><a href="/doc/gnp/informacionbancaria.pdf" target="_blank"> Formato unico de información bancaria.</a></div>                
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/gnp/parto.pdf" target="_blank">Notificacion de ayuda para parto o cesarea.</a></div>  
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
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/atlas/remesa.pdf" target="_blank">Carta remesa.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/atlas/aviso.pdf" target="_blank">Altas aviso de ACCIFF285.</a></div> 
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/atlas/transferencia.pdf" target="_blank">Formato de transferencia bancaria.</a></div>   
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/atlas/informemedico.pdf" target="_blank">Altas de informe médico.</a></div>   
                                                    <div class="text"></div>   
                                                    <div class="text"></div>                                                  
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
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/zurich/fisicas.pdf" target="_blank">Articulo 492 personas fisicas.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i><a href="/doc/zurich/morales.pdf" target="_blank"> Articulo 492 personas morales.</a></div>   
                                                    <div class="text"><i class="fal fa-download"></i><a href="/doc/zurich/aviso.pdf" target="_blank"> Formato aviso ACC y ENF.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i> <a href="/doc/zurich/transferencia.pdf" target="_blank">Formato de transferencia.</a></div>  
                                                    <div class="text"><i class="fal fa-download"></i><a href="/doc/zurich/informemedico.pdf" target="_blank"> Informe médico.</a></div>
                                                    <div class="text"><i class="fal fa-download"></i><a href="/doc/zurich/reembolso.pdf" target="_blank">Reclamacion de reembolso.</a></div>                                               
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