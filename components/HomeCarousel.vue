<template>
    <section class="home-carousel">
        <div class="home-carousel__inner">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                class="home-carousel__slide"
                :class="getSlideClass(index)"
                :style="{ backgroundImage: `url(${slide.src})` }"
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
            // Imágenes servidas desde static/images/carusel -> /images/carusel/*
            slides: [
                { src: '/images/carusel/1.png' },
                { src: '/images/carusel/2.png' },
                { src: '/images/carusel/3.png' }
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
    height: 60vh;
    min-height: 320px;
    max-height: 520px;
}

.home-carousel__slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    opacity: 0;
    transform: translateX(100%);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

@media (max-width: 992px) {
    .home-carousel__inner {
        height: 50vh;
        min-height: 260px;
    }
}

@media (max-width: 576px) {
    .home-carousel__inner {
        height: 45vh;
        min-height: 220px;
    }
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

