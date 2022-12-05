<template>
    <div class="main-container">

        <HeaderAppointment />

        <div class="case-studies-details-wrapper">
            <div class="about-banner-wrap vision-space bg-cover" :style="{ backgroundImage: `url('/images/bg/Vida.png')` }">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 ml-auto mr-auto">
                            <div class="about-banner-content text-center">
                                <div class="banner-logo-img mb-20">
                                    <img src="/images/icons/logoIBS.png" alt="image">
                                </div>
                                <h1 class="mb-15 text-BLACK" >{{ data.heading }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               
                           
            <div class="vision-overview section-space--pt_100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="portfolio-details-content">
                                <div class="text ">
                                    <p><h6>{{ data.acordDesc }}</h6></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="accordion-wrapper section-space--pb_100">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-6 pr-5">
                            <div class="faq-two-wrapper section-space--mt_40">
                                <div id="accordion-two">
                                <h5>Beneficios al contratarlo:</h5>
                                <p></p>
            <b-card no-body>
                <b-card-header header-tag="header">
                    <h5 class="mb-0 font-weight--bold">
                        <b-button block v-b-toggle.accordion-one class="btn-link" >
                            {{ data.acord1 }}
                        </b-button>
                    </h5>
                </b-card-header>
                <b-collapse id="accordion-one" accordion="my-accordion">
                    <b-card-body>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body>
                <b-card-header header-tag="header">
                    <h5 class="mb-0 font-weight--bold">
                        <b-button block v-b-toggle.accordion-two class="btn-link" >
                            {{ data.acord2 }}
        
                        </b-button>
                    </h5>
                </b-card-header>
                <b-collapse id="accordion-two" accordion="my-accordion">
                    <b-card-body>
                        <b-card-text>
                            {{ data.subAcord2}}
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body>
                <b-card-header header-tag="header">
                    <h5 class="mb-0 font-weight--bold">
                        <b-button block v-b-toggle.accordion-three class="btn-link" >
                            {{ data.acord3 }}
                
                        </b-button>
                    </h5>
                </b-card-header>
                <b-collapse id="accordion-three" accordion="my-accordion">
                    <b-card-body>
                        <b-card-text>
                            {{ data.subAcord3}}
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body>
                <b-card-header header-tag="header">
                    <h5 class="mb-0 font-weight--bold">
                        <b-button block v-b-toggle.accordion-four class="btn-link" >
                            {{ data.acord4 }}
    
                        </b-button>
                    </h5>
                </b-card-header>
                <b-collapse id="accordion-four" accordion="my-accordion">
                    <b-card-body>
                        <b-card-text>
                            {{ data.subAcord4}}
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body>
                <b-card-header header-tag="header">
                    <h5 class="mb-0 font-weight--bold">
                        <b-button block v-b-toggle.accordion-four class="btn-link" >
                            {{ data.acord5 }}
        
                        </b-button>
                    </h5>
                </b-card-header>
                <b-collapse id="accordion-four" accordion="my-accordion">
                    <b-card-body>
                        <b-card-text>
                            {{ data.subAcord5}}
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="video-interview section-space--mt_40 video-popup">
                                    <a :href="data.youtube" class="video-link mt-30" target="_blank">
                                        <div class="single-popup-wrap">
                                            <img class="img-fluid border-radus-5" :src="data.imageVideo" alt="">
                                            <div class="ht-popup-video video-button">
                                                <div class="video-mark">
                                                    <div class="wave-pulse wave-pulse-1"></div>
                                                    <div class="wave-pulse wave-pulse-2"></div>
                                                </div>
                                                <div class="video-button__two">
                                                    <div class="video-play">
                                                        <span class="video-play-icon"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TestimonialTwo />

            <CtaOne />

            <Footer />

            <OffCanvasMobileMenu />

        </div>
</template>

<script>
    import data from '../../data/caseStidies.json';

    import HeaderAppointment from '@/components/HeaderAppointment';
    import TestimonialTwo from '@/components/sections/TestimonialTwo';
    import AccordionTwo from '@/components/AccordionTwo';
    import CtaOne from '@/components/CtaOne';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            HeaderAppointment,
            TestimonialTwo,
            AccordionTwo,
            CtaOne,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                data,
                id: this.$route.params.id,
            }
        },
        mounted () {
            this.data = data.projects.find(project => project.id == this.$route.params.id);
        },
    };
</script>