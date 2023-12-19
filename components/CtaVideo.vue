<template>
    <div class="infotechno-video-wrapper infotechno-video-ptb infotechno-video-bg"
        :style="{ backgroundImage: `url('/images/bg/ejemplo.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-10 col-11 ml-auto">
                    <div class="video-content-wrap">
                        <div class="vieeo-content-inner">
                            <h2 class="heading">Descubre 25 años de éxitos en Seguros y Fianzas. <br> ¡Celebra con nosotros!
                            </h2>
                            <div class="viewo-text-wrap">
                                <div class="video-popup infotech-video-box">
                                    <CoolLightBox :items="items" :index="index" @close="index = null">
                                    </CoolLightBox>
                                    <a href="javascript:void(0)" @click="index = imageIndex"
                                        v-for="(image, imageIndex) in items" :key="imageIndex"
                                        class="single-popup-wrap video-link">
                                        <div class="video-content">
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
                                            <div class="video-text">
                                                Haz clic para ver nuestro video.<br>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                    src: "https://youtu.be/jeTPliYrpcE",
                    autoplay: true
                },
            ],
            index: null
        }
    },
};
</script>