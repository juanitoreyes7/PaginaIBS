<template>
    <div class="cta-image-area_one section-space--ptb_80 cta-bg-image_two" :style="{ backgroundImage: `url('/images/patterns/mitech-home-appointment-call-to-action-bg-image.png')` }">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="cta-content md-text-center">
                        <h3 class="heading text-center section-space--mb_40" v-html="data.ctaOne.title">{{ data.ctaOne.title }}</h3>
                    </div>
                </div>
                <div class="col-xl-12 col-lg-4"> 
                    <div class="cta-button-group--two text-center">
                        <a href="https://ibs_w.segupoliza.com/#/quotes/new" target="_blank" class="btn btn--white btn-one">
                            <span class="btn-icon mr-2">
                                <i class="far fa-car"></i>
                            </span> 
                            Autos
                        </a>
                        <a href="/cotgmm" target="_blank" class="btn btn--white btn-one">
                            <span class="btn-icon mr-2">
                                <i class="far fa-hospital"></i>
                            </span> 
                            GMM
                        </a>
                      <!--  <a href="https://ibsvida.segupoliza.com/#!/inicio" target="_blank" class="btn btn--white btn-one">
                            <span class="btn-icon mr-2">
                                <i class="far fa-heart"></i>
                            </span> 
                            Vida
                        </a>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/cta.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>