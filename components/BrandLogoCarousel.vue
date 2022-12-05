<template>
    <div class="brand-logo-slider-area section-space--ptb_60">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="brand-logo-slider__container-area">
                            <div class="brand-logo-slider__container">
                                <div class="brand-logo-slider__one">
                                    <swiper :options="swiperOption">
                                        <div class="swiper-slide brand-logo brand-logo--slider" v-for="logo in data.logoList" :key="logo.id">
                                            <n-link to="/">
                                                <div class="brand-logo__image">
                                                    <img :src="logo.image" class="img-fluid" alt="logo">
                                                </div>
                                                <div class="brand-logo__image-hover">
                                                    <img :src="logo.hoverImage" class="img-fluid" alt="logo">
                                                </div>
                                            </n-link>
                                        </div>
                                    </swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import data from '../data/brandLogo.json';
    export default {
        data () {
            return {
                data,
                swiperOption: {
                    slidesPerView : 6,
                    loop: true,
                    speed: 1000,
                    spaceBetween : 30,
                    autoplay: {
                        delay: 3000,
                    },

                    breakpoints: {
                        1499:{
                            slidesPerView : 6
                        },

                        991:{
                            slidesPerView : 4
                        },

                        767:{
                            slidesPerView : 3

                        },

                        320:{
                            slidesPerView : 2
                        }
                    }
                },
            }
        }
    };
</script>