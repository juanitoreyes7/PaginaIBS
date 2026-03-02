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
                    <div class="newsletter-modern section-space--mt_40">
                        <div class="newsletter-modern-content">
                            <span class="newsletter-icon"><i class="fas fa-envelope"></i></span>
                            <span class="newsletter-title">Suscríbete a nuestro boletín</span>
                            <a href="http://eepurl.com/h9mhRj" target="_blank" rel="noopener noreferrer" class="newsletter-btn-small">
                                Suscribirse
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
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

<style scoped lang="scss">
.newsletter-modern {
    background: rgba(8, 106, 216, 0.08);
    border: 1px solid rgba(8, 106, 216, 0.2);
    border-radius: 12px;
    padding: 16px 24px;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
}

.newsletter-modern-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px 20px;
}

.newsletter-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: rgba(8, 106, 216, 0.15);
    border-radius: 50%;
    font-size: 14px;
    color: #086AD8;
}

.newsletter-title {
    font-size: 14px;
    font-weight: 600;
    color: #555;
}

.newsletter-btn-small {
    padding: 8px 18px;
    background: #086AD8;
    color: #fff !important;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;

    &:hover {
        background: #002FA6;
        color: #fff !important;
    }

    i {
        font-size: 11px;
    }
}
</style>