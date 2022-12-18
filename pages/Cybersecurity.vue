<template>
    <div class="main-container">

        <HeaderCybersecurity />

        <HeroCybersecurity />

        <BrandLogoCarousel />

        <div class="feature-large-images-wrapper section-space--ptb_100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- section-title-wrap Start -->
                        <div class="section-title-wrap text-center section-space--mb_60">
                            <h3 class="heading">
                                Realizamos todo tipo de Seguros y Fianzas <span class="text-color-primary"><br>que promete lo mejor para tu bienestar.</span>
                            </h3>
                        </div>
                        <!-- section-title-wrap Start -->
                    </div>
                </div>

                <div class="cybersecurity-about-box section-space--pb_100">
                    <div class="row">
                        <div class="col-lg-4 offset-lg-1">
                            <div class="modern-number-01">
                                <h2 class="heading mr-5">
                                    <span class="mark-text">25</span> Años de experiencia en Seguros y Fianzas
                                </h2>
                                <h6 class="heading mt-30">Conozca más sobre nuestros casos de éxito</h6>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1">
                            <div class="cybersecurity-about-text">
                                <div class="text">Tenemos como prioridad la protección de la salud, la vida y activos de nuestros clientes, lo cual nos ha llevado a ganar reconocimiento y valor agregado en el ramo.</div>
                                <div class="button-text">
                                    <n-link to="/about" class="btn-text">
                                        Discover now
                                        <span class="button-icon ml-1">
                                            <i class="far fa-long-arrow-right"></i>
                                        </span>
                                    </n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-lg-12">
                        <!-- section-title-wrap Start -->
                        <div class="section-title-wrap text-center section-space--mb_60">
                            <h3 class="heading">
                                <span class="text-color-primary"><br>Cotiza con nosotros</span>
                            </h3>
                        </div>
                        <!-- section-title-wrap Start -->
                    </div>
                            <div class="col-lg-4 col-md-6 wow move-up">
                                <!-- ht-box-icon Start -->
                                <n-link to="" class="ht-large-box-images style-03">
                                    <div class="large-image-box">
                                        <div class="box-image">
                                            <div class="default-image">
                                                <img class="img-fluid" src="/images/box-image/blog-01-480x298.jpg" alt="images">
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="heading">Quality Assurance System</h5>
                                            <div class="text">At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.
                                            </div>
                                            <div class="box-images-arrow">
                                                <span class="button-text">Discover now</span>
                                                <i class="far fa-long-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </n-link>
                                <!-- ht-box-icon End -->
                            </div>
                            <div class="col-lg-4 col-md-6 wow move-up">
                                <!-- ht-box-icon Start -->
                                <n-link to="" class="ht-large-box-images style-03">
                                    <div class="large-image-box">
                                        <div class="box-image">
                                            <div class="default-image">
                                                <img class="img-fluid" src="/images/box-image/mitech-home-infotechno-box-large-image-03-480x298.jpg" alt="images">
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="heading">Highly Professional Staffs</h5>
                                            <div class="text">Having obtained the official & formal training in IT technology and technical fields, our staffs know best.
                                            </div>
                                            <div class="box-images-arrow">
                                                <span class="button-text">Discover now</span>
                                                <i class="far fa-long-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </n-link>
                                <!-- ht-box-icon End -->
                            </div>
                            <div class="col-lg-4 col-md-6 wow move-up">
                                <!-- ht-box-icon Start -->
                                <n-link to="" class="ht-large-box-images style-03">
                                    <div class="large-image-box">
                                        <div class="box-image">
                                            <div class="default-image">
                                                <img class="img-fluid" src="/images/box-image/mitech-home-infotechno-box-large-image-02-480x298.jpg" alt="images">
                                            </div>
                                        </div>
                                        <div class="content">
                                            <h5 class="heading">Info Security Management</h5>
                                            <div class="text">At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.
                                            </div>
                                            <div class="box-images-arrow">
                                                <span class="button-text">Discover now</span>
                                                <i class="far fa-long-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </n-link>
                                <!-- ht-box-icon End -->
                            </div>
                        </div>
                        <div class="section-under-heading text-center section-space--mt_20">
                            Challenges are just opportunities in disguise 
                            <n-link to="/contact">Take the challenge!</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <TestimonialTwo class="pb-0 bg-white" />

        <ContactUsFour />

        <ContactUsThree />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderCybersecurity from '@/components/HeaderCybersecurity';
    import HeroCybersecurity from '@/components/HeroCybersecurity';
    import TestimonialTwo from '@/components/sections/TestimonialTwo';
    import BrandLogoCarousel from '@/components/BrandLogoCarousel';
    import ContactUsFour from '@/components/sections/ContactUsFour';
    import ContactUsThree from '@/components/sections/ContactUsThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            HeaderCybersecurity,
            HeroCybersecurity,
            ContactUsFour,
            ContactUsThree,
            BrandLogoCarousel,
            TestimonialTwo,
            Footer,
            OffCanvasMobileMenu
        },
        head() {
            return {
                title: ''
            }
        }
    };
</script>