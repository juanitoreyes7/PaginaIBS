<template>
    <div class="resolutions-hero-space position-relative bg-cover" :style="{ backgroundImage: `url(${data.heroResolution.bgImg})` }">
        <div class="container">
            <div class="row">
                <CoolLightBox 
                    :items="items" 
                    :index="index"
                    @close="index = null">
                </CoolLightBox>
                <div class="col-lg-12 col-md-12 ml-auto mr-auto">
                    <div class="service-hero-wrap wow move-up">
                        <div class="service-hero-text text-center">
                            <h3 class="text-white">{{ data.heroResolution.subTitle }}</h3>
                            <h1 class="font-weight--reguler text-white mb-30">{{ data.heroResolution.title }}</h1>
                            <p class="text-white">{{ data.heroResolution.desc }}</p>

                            <div class="hero-button-group section-space--mt_50">
                                <n-link to="/contact" class="ht-btn ht-btn-md">Free consultation</n-link>
                                <button @click="index = imageIndex" v-for="(image, imageIndex) in items" :key="imageIndex" class="ht-btn ht-btn-md btn--white">
                                    <span class="btn-icon mr-2"><i class="fa fa-play"></i></span> 
                                    How we work
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vc_row-separator center_curve_alt bottom">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
            </svg>
        </div>
    </div>
</template>

<script>
    import data from '../data/hero.json';

    import CoolLightBox from 'vue-cool-lightbox'
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

    export default {
        components: {
            CoolLightBox,
        },
        data () {
            return {
                data,
                items: [
                    {
                        src: "https://www.youtube.com/watch?v=4RPqGXQFQ_s",
                        autoplay: true
                    },
                ],
                index: null
            }
        }
    };
</script>