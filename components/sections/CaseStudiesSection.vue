<template>
    <div class="projects-wrapper projectinfotechno-bg section-space--ptb_100"
        :style="{ backgroundImage: `url('/images/patterns/mitech-home-infotechno-case-study-section-bg.png')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <SectionTitle class="text-center section-space--mb_40" :title="data.sectionTitle"
                        :subTitle="data.sectionSubTitle" />
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="projects-wrap">
                        <swiper :options="swiperOption">
                            <div class="swiper-slide" v-for="project in data.projects" :key="project.id">
                                <CaseStudiesItem :project="project" />
                            </div>
                        </swiper>
                        <div class="swiper-pagination swiper-pagination-project mt_20"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                    <div class="section-under-heading text-center section-space--mt_40">
                        {{ data.underHeading }}
                        <a href="http://eepurl.com/h9mhRj" Target="_blank">¡Aqui!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '@/components/SectionTitle';
import CaseStudiesItem from '@/components/CaseStudiesItem';

import data from '../../data/caseStidies.json';
export default {
    components: {
        SectionTitle,
        CaseStudiesItem
    },
    data() {
        return {
            data,
            swiperOption: {
                loop: true,
                speed: 900,
                autoplay: 1000,
                spaceBetween: 20,
                autoplay: {
                    delay: 2000, // en milisegundos
                },
                speed: 1000,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: '.swiper-pagination-project',
                    type: 'bullets',
                    clickable: true
                },
                // Responsive breakpoints
                breakpoints: {
                    1200: {
                        slidesPerView: 3
                    },

                    768: {
                        slidesPerView: 2
                    },

                    575: {
                        slidesPerView: 1
                    }
                }
            },
        }
    }
};
</script>