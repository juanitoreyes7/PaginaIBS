<template>
    <div class="main-container">
        <HeaderAppointment />

        <section class="portal-hero">
            <HomeCarousel />

            <div class="portal-hero__welcome">
                <div class="portal-welcome__card">
                    <div class="portal-welcome__icon-wrap">
                        <i class="fas fa-hand-wave portal-welcome__icon"></i>
                    </div>
                    <h1 class="portal-welcome__title">
                        Bienvenido a <span class="portal-welcome__brand">IBS Consultores</span>
                    </h1>
                    <p class="portal-welcome__subtitle">
                        Tu panel de seguros y fianzas. Aquí puedes navegar por los servicios, descargables y más.
                    </p>

                    <div class="portal-benefits">
                        <h2 class="portal-benefits__title">
                            Conoce nuestros beneficios en hospitales y clínicas
                        </h2>
                        <p class="portal-benefits__subtitle">
                            Accede a convenios y descuentos exclusivos con nuestros socios.
                        </p>
                        <div class="portal-benefits__list">
                            <nuxt-link
                                v-for="item in beneficios"
                                :key="item.slug"
                                :to="item.to"
                                class="portal-benefits__btn"
                                :class="{ 'portal-benefits__btn--light': item.light }"
                                :style="{ backgroundColor: item.color }"
                            >
                                <span>{{ item.name }}</span>
                                <i class="fas fa-chevron-right portal-benefits__arrow"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sección IBSApp resumida dentro del portal -->
        <section id="portal-ibsapp" class="portal-app section-space--ptb_80">
            <div class="container">
                <div class="portal-app__grid">
                    <div class="portal-app__content">
                        <h2 class="portal-app__title">
                            Conoce <span class="portal-app__highlight">IBSApp</span>
                        </h2>
                        <p class="portal-app__lead">
                            Lleva todos tus póliza de seguros, beneficios y trámites de IBS Consultores en la palma de tu mano,
                            con una experiencia simple, segura y disponible 24/7.
                        </p>
                        <ul class="portal-app__features">
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Consulta de pólizas, vigencias y coberturas en un solo lugar.
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Acceso rápido a teléfonos de emergencia, siniestros y WhatsApp de tu ejecutivo.
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Descarga de documentos y formatos importantes cuando los necesites.
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Recordatorios de pagos y renovaciones para que no se te pase nada.
                            </li>
                        </ul>
                        <div class="portal-app__stores">
                            <p class="portal-app__stores-text">Ya disponible para descarga.</p>
                            <div class="portal-app__store-badges">
                                <a
                                    href="https://apps.apple.com/mx/app/ibs-consultores/id1582085062"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="portal-app__store-link"
                                >
                                    <img
                                        src="/images/icons/apple-store.jpg"
                                        alt="Descargar IBSApp en App Store"
                                        class="portal-app__store-img"
                                    >
                                </a>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.juanreyes.cincotenedores&hl=es_MX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="portal-app__store-link"
                                >
                                    <img
                                        src="/images/icons/google-play.jpg"
                                        alt="Descargar IBSApp en Google Play"
                                        class="portal-app__store-img"
                                    >
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="portal-app__video">
                        <div class="portal-app__video-inner">
                            <iframe
                                src="https://www.youtube.com/embed/86TSiayd2hI"
                                title="IBSApp - Video"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                                class="portal-app__iframe"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
import HomeCarousel from '@/components/HomeCarousel';

const BENEFICIOS = [
    { name: 'Christus Muguerza', slug: 'christus-muguerza', color: '#5A2D8E', to: '/beneficios/christus-muguerza', light: false },
    { name: 'Hospital Ángeles Chihuahua', slug: 'hospital-angeles-chihuahua', color: '#0A49BB', to: '/beneficios/hospital-angeles-chihuahua', light: false },
    { name: 'Laboratorio Médico de Chopo', slug: 'laboratorio-chopo', color: '#2070FF', to: '/beneficios/laboratorio-chopo', light: false },
    { name: 'Sierra Alta', slug: 'sierra-alta', color: '#00A69C', to: '/beneficios/sierra-alta', light: false },
    { name: 'Star Médica', slug: 'star-medica', color: '#B0B0B0', to: '/beneficios/star-medica', light: true }
];

export default {
    name: 'PortalWelcome',
    components: {
        HeaderAppointment,
        Footer,
        OffCanvasMobileMenu,
        HomeCarousel
    },
    data() {
        return {
            beneficios: BENEFICIOS
        };
    },
    head() {
        return {
            title: 'Bienvenido - IBS Consultores'
        };
    },
    methods: {
        scrollToIBSApp() {
            const el = document.getElementById('portal-ibsapp');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.portal-hero {
    background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
}

.portal-hero__welcome {
    max-width: 1200px;
    margin: 32px auto 0;
    padding: 0 24px 60px;
}

.portal-welcome__card {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 40px 40px;
    background: #ffffff;
    border-radius: 24px;
    box-shadow: 0 4px 24px rgba(0, 47, 166, 0.08);
    text-align: center;
}

.portal-welcome__icon-wrap {
    width: 72px;
    height: 72px;
    margin: 0 auto 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
    border-radius: 50%;
    box-shadow: 0 8px 24px rgba(8, 106, 216, 0.35);
}

.portal-welcome__icon {
    font-size: 32px;
    color: #ffffff;
}

.portal-welcome__title {
    font-size: 26px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 12px;
    line-height: 1.3;

    @media (min-width: 768px) {
        font-size: 30px;
    }
}

.portal-welcome__brand {
    color: #002FA6;
}

.portal-welcome__subtitle {
    font-size: 16px;
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 32px;
}

.portal-welcome__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
}

.portal-welcome__btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 24px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.25s ease;

    &--primary {
        background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
        color: #ffffff;
        border: none;

        &:hover {
            opacity: 0.92;
            transform: translateY(-1px);
            box-shadow: 0 8px 20px rgba(8, 106, 216, 0.35);
        }
    }

    &--outline {
        background: transparent;
        color: #002FA6;
        border: 2px solid #086AD8;

        &:hover {
            background: rgba(8, 106, 216, 0.08);
            border-color: #002FA6;
        }
    }
}

.portal-benefits {
    margin-top: 40px;
    padding-top: 32px;
    border-top: 1px solid #e2e8f0;
    text-align: center;
}

.portal-benefits__title {
    font-size: 18px;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 8px;
    line-height: 1.35;

    @media (min-width: 768px) {
        font-size: 20px;
    }
}

.portal-benefits__subtitle {
    font-size: 14px;
    color: #64748b;
    margin: 0 0 24px;
    line-height: 1.5;
}

.portal-benefits__list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, auto);
    grid-auto-flow: column;
    column-gap: 16px;
    row-gap: 12px;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
}

.portal-benefits__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px 20px;
    border-radius: 16px;
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

    span {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    }

    .portal-benefits__arrow {
        font-size: 12px;
        opacity: 0.9;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
        color: #ffffff;
    }

    &--light {
        color: #1e293b;

        span {
            text-shadow: none;
        }

        &:hover {
            color: #1e293b;
        }
    }
}

.portal-app {
    background: #ffffff;
}

.portal-app__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.1fr);
    gap: 40px;
    align-items: center;

    @media (max-width: 991px) {
        grid-template-columns: 1fr;
    }
}

.portal-app__title {
    font-size: 32px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 16px;

    .portal-app__highlight {
        color: #086AD8;
    }

    @media (max-width: 575px) {
        font-size: 26px;
    }
}

.portal-app__lead {
    font-size: 16px;
    color: #64748b;
    line-height: 1.7;
    margin-bottom: 20px;
}

.portal-app__features {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;

    li {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        font-size: 14px;
        color: #0f172a;
        margin-bottom: 10px;

        i {
            color: #16a34a;
            margin-top: 2px;
        }
    }
}

.portal-app__stores-text {
    font-size: 14px;
    color: #475569;
    margin-bottom: 8px;
}

.portal-app__store-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.portal-app__store-img {
    height: 42px;
    width: auto;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(15, 23, 42, 0.15);
}

.portal-app__video-inner {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.25);
    background: #020617;
}

.portal-app__iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
}
</style>
