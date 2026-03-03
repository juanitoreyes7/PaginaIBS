<template>
    <div class="main-container">
        <HeaderAppointment />

        <div class="case-study-detail" v-if="project">
            <!-- Hero -->
            <section class="case-study-hero">
                <div class="case-study-hero__bg" :style="{ backgroundImage: `url('${project.imageBanner || project.image}')` }"></div>
                <div class="container">
                    <div class="case-study-hero__content">
                        <h1 class="case-study-hero__title">{{ project.heading }}</h1>
                        <p class="case-study-hero__lead">{{ project.acordDesc }}</p>
                    </div>
                </div>
            </section>

            <!-- Contenido: beneficios + video -->
            <section class="case-study-content section-space--pt_80 section-space--pb_100">
                <div class="container">
                    <div class="row align-items-start">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <div class="benefits-card">
                                <h2 class="benefits-card__title">Beneficios al contratarlo</h2>
                                <ul class="benefits-list">
                                    <li class="benefits-list__item">{{ project.acord1 }}</li>
                                    <li class="benefits-list__item">{{ project.acord2 }}</li>
                                    <li class="benefits-list__item">{{ project.acord3 }}</li>
                                    <li class="benefits-list__item">{{ project.acord4 }}</li>
                                    <li class="benefits-list__item">{{ project.acord5 }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="video-card">
                                <a :href="project.youtube" class="video-card__link" target="_blank" rel="noopener noreferrer">
                                    <div class="video-card__thumb" :style="{ backgroundImage: `url('${project.imageVideo || project.image}')` }"></div>
                                    <div class="video-card__play">
                                        <i class="fas fa-play"></i>
                                    </div>
                                    <span class="video-card__label">Ver video informativo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaOne />

            <Footer />

            <OffCanvasMobileMenu />
        </div>

        <!-- No encontrado -->
        <div v-else class="case-study-not-found">
            <div class="container text-center section-space--ptb_100">
                <h2>Producto no encontrado</h2>
                <n-link to="/case-studies" class="btn btn--primary">Ver todos los seguros</n-link>
            </div>
        </div>
    </div>
</template>

<script>
import caseStudiesData from '../../data/caseStidies.json';
import HeaderAppointment from '@/components/HeaderAppointment';
import CtaOne from '@/components/CtaOne';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    components: {
        HeaderAppointment,
        CtaOne,
        Footer,
        OffCanvasMobileMenu
    },
    data() {
        return {
            projects: caseStudiesData.projects || []
        };
    },
    computed: {
        project() {
            const id = this.$route.params.id;
            return this.projects.find(p => String(p.id) === String(id)) || null;
        }
    },
    head() {
        if (!this.project) return { title: 'Seguro | IBS Consultores' };
        return {
            title: `${this.project.heading} | IBS Consultores`,
            meta: [
                { hid: 'description', name: 'description', content: (this.project.acordDesc || '').slice(0, 160) }
            ]
        };
    }
};
</script>

<style scoped lang="scss">
.case-study-detail {
    padding-top: 0;
}

/* Hero */
.case-study-hero {
    position: relative;
    min-height: 420px;
    display: flex;
    align-items: center;
    padding: 100px 0 60px;
    overflow: hidden;
}

/* Sin overlay ni difuminado: solo la imagen de fondo */
.case-study-hero::before,
.case-study-hero::after,
.case-study-hero__bg::before,
.case-study-hero__bg::after {
    display: none !important;
}

.case-study-hero__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    background-color: transparent;
}

.case-study-hero__content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 720px;
    margin: 0 auto;
}

.case-study-hero__title {
    font-size: 38px;
    font-weight: 700;
    color: #002FA6;
    margin: 0 0 16px;
    line-height: 1.2;
}

.case-study-hero__lead {
    font-size: 18px;
    color: #086AD8;
    line-height: 1.6;
    margin: 0;
}

@media (max-width: 767px) {
    .case-study-hero { min-height: 360px; padding: 80px 0 50px; }
    .case-study-hero__title { font-size: 28px; }
    .case-study-hero__lead { font-size: 16px; }
}

/* Benefits card & accordion */
.benefits-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 47, 166, 0.08);
    border: 1px solid rgba(8, 106, 216, 0.1);
    padding: 32px 28px;
}

.benefits-card__title {
    font-size: 22px;
    font-weight: 700;
    color: #002FA6;
    margin: 0 0 24px;
    padding-bottom: 16px;
    border-bottom: 2px solid #E3F2FD;
}

.benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.benefits-list__item {
    position: relative;
    padding: 14px 0 14px 36px;
    font-size: 15px;
    color: #333;
    line-height: 1.5;
    border-bottom: 1px solid #e8eef5;

    &:last-child { border-bottom: none; }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background: #086AD8;
        border-radius: 50%;
    }
}

/* Video card */
.video-card {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 47, 166, 0.12);
    border: 1px solid rgba(8, 106, 216, 0.1);
}

.video-card__link {
    display: block;
    position: relative;
    padding-bottom: 56.25%;
    background: #0a1628;
}

.video-card__thumb {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.4s;
}

.video-card__link:hover .video-card__thumb {
    transform: scale(1.03);
}

.video-card__play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 72px;
    height: 72px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #086AD8;
    font-size: 26px;
    padding-left: 6px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
    transition: transform 0.25s, background 0.25s;
}

.video-card__link:hover .video-card__play {
    transform: translate(-50%, -50%) scale(1.08);
    background: #fff;
}

.video-card__label {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px 20px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: #fff;
    font-size: 14px;
    font-weight: 500;
}

.case-study-not-found h2 {
    color: #333;
    margin-bottom: 20px;
}
</style>
