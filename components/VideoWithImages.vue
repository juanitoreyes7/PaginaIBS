<template>
    <div class="rv-video-section">
        <div class="ht-banner-01 ">
            <img class="img-fluid border-radus-5 animation_images one wow fadeInDown" src="/images/banners/home-processing-video-intro-slider-slide-01-image-02.png" alt="image">
        </div>
        <div class="ht-banner-02">
            <img class="img-fluid border-radus-5 animation_images two wow fadeInDown" src="/images/banners/home-processing-video-intro-slider-slide-01-image-03.png" alt="image">
        </div>

        <CoolLightBox 
            :items="items" 
            :index="index"
            @close="index = null">
        </CoolLightBox>
        <div class="main-video-box video-popup">
            <a href="javascript:void(0)" @click="index = imageIndex" v-for="(image, imageIndex) in items" :key="imageIndex" class="video-link mt-30">
                <div class="single-popup-wrap">
                    <img class="img-fluid border-radus-5" src="/images/banners/home-processing-video-intro-slider-slide-01-image-01.png" alt="">
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

        <div class="ht-banner-03">
            <img class="img-fluid border-radus-5 animation_images three wow fadeInDown" src="/images/banners/home-processing-video-intro-slider-slide-01-image-04.png" alt="image">
        </div>

        <div class="ht-banner-04">
            <img class="img-fluid border-radus-5 animation_images four wow fadeInDown" src="/images/banners/home-processing-video-intro-slider-slide-01-image-05.png" alt="image">
        </div>
    </div>
</template>


<script>
    import CoolLightBox from 'vue-cool-lightbox'
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

    export default {
        components: {
            CoolLightBox,
        },

        data() {
            return {
                items: [
                    {
                        src: "https://www.youtube.com/watch?v=4RPqGXQFQ_s",
                        autoplay: true
                    },
                ],
                index: null
            }
        },
    };
</script>