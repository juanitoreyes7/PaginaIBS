<template>
    <section class="home-carousel">
        <div class="home-carousel__inner">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                class="home-carousel__slide"
                :class="getSlideClass(index)"
            >
                <img
                    :src="slide.src"
                    :srcset="`${slide.src} 2400w`"
                    :alt="slide.alt || `Slide ${index + 1}`"
                    class="home-carousel__img"
                >
                <div class="home-carousel__overlay"></div>
            </div>

            <button
                type="button"
                class="home-carousel__control home-carousel__control--prev"
                @click="prevSlide"
                aria-label="Anterior"
            >
                <i class="fas fa-chevron-left"></i>
            </button>
            <button
                type="button"
                class="home-carousel__control home-carousel__control--next"
                @click="nextSlide"
                aria-label="Siguiente"
            >
                <i class="fas fa-chevron-right"></i>
            </button>

            <div class="home-carousel__dots">
                <button
                    v-for="(slide, index) in slides"
                    :key="`dot-${index}`"
                    type="button"
                    class="home-carousel__dot"
                    :class="{ 'home-carousel__dot--active': index === currentIndex }"
                    @click="goToSlide(index)"
                    :aria-label="`Ir al slide ${index + 1}`"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeCarousel',
    data() {
        return {
            currentIndex: 0,
            prevIndex: 0,
            direction: 'next',
            autoPlayId: null,
            // Imágenes 2400×840 px en static/images/carusel -> /images/carusel/*
            slides: [
                { src: '/images/carusel/1.png', alt: 'Banner 1' },
                { src: '/images/carusel/2.png', alt: 'Banner 2' },
                { src: '/images/carusel/3.png', alt: 'Banner 3' }
            ]
        };
    },
    mounted() {
        this.startAutoPlay();
    },
    beforeDestroy() {
        this.stopAutoPlay();
    },
    methods: {
        nextSlide() {
            if (this.slides.length <= 1) return;
            this.prevIndex = this.currentIndex;
            this.direction = 'next';
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            this.restartAutoPlay();
        },
        prevSlide() {
            if (this.slides.length <= 1) return;
            this.prevIndex = this.currentIndex;
            this.direction = 'prev';
            this.currentIndex =
                (this.currentIndex - 1 + this.slides.length) % this.slides.length;
            this.restartAutoPlay();
        },
        goToSlide(index) {
            if (index === this.currentIndex || this.slides.length <= 1) return;
            this.prevIndex = this.currentIndex;
            this.direction = index > this.currentIndex ? 'next' : 'prev';
            this.currentIndex = index;
            this.restartAutoPlay();
        },
        startAutoPlay() {
            if (this.autoPlayId || this.slides.length <= 1) return;
            this.autoPlayId = setInterval(() => {
                this.prevIndex = this.currentIndex;
                this.direction = 'next';
                this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            }, 6000);
        },
        stopAutoPlay() {
            if (this.autoPlayId) {
                clearInterval(this.autoPlayId);
                this.autoPlayId = null;
            }
        },
        restartAutoPlay() {
            this.stopAutoPlay();
            this.startAutoPlay();
        },
        getSlideClass(index) {
            if (index === this.currentIndex) {
                return 'home-carousel__slide--active';
            }
            if (index === this.prevIndex) {
                return this.direction === 'next'
                    ? 'home-carousel__slide--left'
                    : 'home-carousel__slide--right';
            }
            return this.direction === 'next'
                ? 'home-carousel__slide--right'
                : 'home-carousel__slide--left';
        }
    }
};
</script>

<style scoped lang="scss">
.home-carousel {
    position: relative;
    overflow: hidden;
    background: #020617;
}

.home-carousel__inner {
    position: relative;
    width: 100%;
    overflow: hidden;
}

/* Proporción exacta del banner: 2400×840 px → 840/2400 = 35% */
.home-carousel__inner::before {
    content: '';
    display: block;
    padding-top: 35%;
}

.home-carousel__slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 0.6s ease, transform 0.6s ease;
    backface-visibility: hidden;
}

/* Imagen a resolución completa (2400×840): el navegador escala sin perder nitidez */
.home-carousel__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
}

.home-carousel__slide--active {
    opacity: 1;
    transform: translateX(0);
}

.home-carousel__slide--left {
    transform: translateX(-100%);
}

.home-carousel__slide--right {
    transform: translateX(100%);
}

.home-carousel__overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
        90deg,
        rgba(15, 23, 42, 0.25) 0%,
        rgba(15, 23, 42, 0.08) 35%,
        rgba(15, 23, 42, 0) 100%
    );
}

.home-carousel__control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: none;
    background: rgba(15, 23, 42, 0.6);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    z-index: 2;

    &:hover {
        background: rgba(15, 23, 42, 0.85);
        transform: translateY(-50%) scale(1.05);
    }
}

.home-carousel__control--prev {
    left: 18px;
}

.home-carousel__control--next {
    right: 18px;
}

.home-carousel__dots {
    position: absolute;
    left: 50%;
    bottom: 16px;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 2;
}

.home-carousel__dot {
    width: 9px;
    height: 9px;
    border-radius: 999px;
    border: none;
    background: rgba(148, 163, 184, 0.7);
    cursor: pointer;
    padding: 0;
    transition: width 0.2s, background 0.2s;
}

.home-carousel__dot--active {
    width: 22px;
    background: #ffffff;
}
</style>

