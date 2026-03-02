<template>
    <div class="companias-seguros-section section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-header text-center section-space--mb_60">
                        <h2 class="section-title">COMPAÑÍAS DE SEGUROS</h2>
                        <p class="section-subtitle">
                            Fortalecemos nuestra relación con grandes empresas aseguradoras para brindarles una amplia variedad de seguros
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="companias-carousel">
                        <swiper :options="swiperOption">
                            <div class="swiper-slide" v-for="(compania, index) in companiasData" :key="compania.name + '-' + index">
                                <div class="compania-card">
                                    <div class="compania-logo-wrapper">
                                        <img 
                                            v-if="compania.logo"
                                            :src="compania.logo" 
                                            :alt="compania.name"
                                            class="compania-logo"
                                            @error="handleImageError"
                                        >
                                        <div v-else class="compania-placeholder">
                                            {{ compania.name.charAt(0) }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper>
                        <div class="swiper-pagination swiper-pagination-companias"></div>
                        <div class="swiper-button-prev swiper-button-prev-companias"></div>
                        <div class="swiper-button-next swiper-button-next-companias"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cobranzaDirectory from '@/data/cobranzaDirectory.json';

export default {
    name: 'CompañiasSegurosSection',
    data() {
        return {
            swiperOption: {
                loop: true,
                speed: 600,
                spaceBetween: 24,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                navigation: {
                    nextEl: '.swiper-button-next-companias',
                    prevEl: '.swiper-button-prev-companias'
                },
                pagination: {
                    el: '.swiper-pagination-companias',
                    type: 'bullets',
                    clickable: true
                },
                breakpoints: {
                    1200: { slidesPerView: 5 },
                    992: { slidesPerView: 4 },
                    768: { slidesPerView: 3 },
                    576: { slidesPerView: 2 },
                    320: { slidesPerView: 1 }
                }
            },
            companiasData: cobranzaDirectory.companies.map((c, i) => ({
                id: i + 1,
                name: c.name,
                logo: c.logo || null
            }))
        }
    },
    methods: {
        handleImageError(event) {
            event.target.style.display = 'none';
            const parent = event.target.parentElement;
            if (parent && !parent.querySelector('.compania-placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'compania-placeholder';
                const companyName = event.target.alt;
                placeholder.textContent = companyName.charAt(0);
                parent.appendChild(placeholder);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.companias-seguros-section {
    background: linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 100%);
}

.section-header {
    margin-bottom: 50px;
}

.section-title {
    font-size: 42px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 15px;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media (max-width: 991px) {
        font-size: 32px;
    }

    @media (max-width: 575px) {
        font-size: 28px;
    }
}

.section-subtitle {
    font-size: 18px;
    color: #666666;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;

    @media (max-width: 575px) {
        font-size: 16px;
    }
}

.companias-carousel {
    position: relative;
    padding: 0 50px 50px;

    @media (max-width: 767px) {
        padding: 0 40px 45px;
    }
}

.companias-carousel ::v-deep .swiper-slide {
    height: auto;
    padding: 5px;
}

.companias-carousel ::v-deep .swiper-button-prev-companias,
.companias-carousel ::v-deep .swiper-button-next-companias {
    color: #086AD8;
}

.companias-carousel ::v-deep .swiper-pagination-companias .swiper-pagination-bullet-active {
    background: #086AD8;
}

.compania-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 30px 20px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid transparent;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border-color: #086AD8;
    }

    @media (max-width: 575px) {
        padding: 25px 15px;
    }
}

.compania-logo-wrapper {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    padding: 10px;
}

.compania-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(0%);
    transition: all 0.3s ease;
}

.compania-card:hover .compania-logo {
    filter: grayscale(0%);
    transform: scale(1.05);
}

.compania-placeholder {
    width: 100px;
    height: 100px;
    border-radius: 12px;
    background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 36px;
    font-weight: 700;
    box-shadow: 0 4px 15px rgba(8, 106, 216, 0.3);
}

.compania-name {
    font-size: 16px;
    font-weight: 600;
    color: #333333;
    margin: 0;
    line-height: 1.4;
    min-height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 575px) {
        font-size: 14px;
        min-height: 40px;
    }
}
</style>