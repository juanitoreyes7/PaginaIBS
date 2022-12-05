<template>
    <div class="processing-hero bg-cover" :style="{ backgroundImage: `url(${data.heroProcessing.bgImg})` }">
        <div class="container">
            <div class="row align-items-center">
                <!--baseline-->
                <CoolLightBox 
                    :items="items" 
                    :index="index"
                    @close="index = null">
                </CoolLightBox>
                <div class="col-lg-8 col-md-7">
                    <div class="processing-hero-text wow move-up">
                        <h6>{{ data.heroProcessing.subTitle }}</h6>
                        <h1 class="font-weight--reguler mb-15" v-html="data.heroProcessing.title">{{ data.heroProcessing.title }}</h1>
                        <p>{{ data.heroProcessing.desc }}</p>
                        <div class="hero-button mt-30">
                            <n-link to="/about" class="btn btn--secondary">Free Sample</n-link>
                            <div class="hero-popup-video video-popup">
                                <a href="javascript:void(0)" @click="index = imageIndex" v-for="(image, imageIndex) in items" :key="imageIndex" class="video-link">
                                    <div class="video-content">
                                        <div class="video-play">
                                            <span class="video-play-icon">
                                                <i class="fa fa-play"></i>
                                            </span>
                                        </div>
                                        <div class="video-text">{{ data.heroProcessing.videoText }}</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-5">
                    <div class="processing-hero-images-wrap wow move-up">
                        <div class="processing-hero-images">
                            <img class="img-fluid" :src="data.heroProcessing.image" alt="hero image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/hero.json';
    import CoolLightBox from 'vue-cool-lightbox';
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';

    import AppointmentForm from '@/components/AppointmentForm';
    export default {
        components: {
            AppointmentForm,
            CoolLightBox
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