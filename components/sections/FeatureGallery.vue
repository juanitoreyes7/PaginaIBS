<template>
    <div class="feature-images-wrapper position-relative">
        <div class="service-slider__container">
            <div class="service-slider__wrapper feature-images__three">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" v-for="service in data.services.slice(32, 37)" :key="service.id">
                        <FeatureItemTwo :service="service" />
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data/service.json';

    import FeatureItemTwo from '@/components/FeatureItemTwo';
    export default {
        components: {
            FeatureItemTwo,
        },
        data () {
            return {
                data,
                swiperOption: {
                    loop: true,
                    speed: 1000,
                    autoplay: true,
                    spaceBetween : 0,
                    breakpoints: {
                        1200:{
                            slidesPerView : 4
                        },
                        992:{
                            slidesPerView : 3
                        },
                        576:{
                            slidesPerView : 2
                        }
                    }
                }
            }
        },
    };
</script>