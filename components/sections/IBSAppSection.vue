<template>
    <section id="ibsapp" class="ibsapp-section section-space--ptb_100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <div class="ibsapp-content wow move-up">
                        <h2 class="ibsapp-title">
                            Conoce <span class="highlight">IBSApp</span>
                        </h2>
                        <p class="ibsapp-lead">
                            Lleva todos tus póliza de seguros, Beneficios y trámites de IBS Consultores en la palma de tu mano,
                            con una experiencia simple, segura y disponible 24/7.
                        </p>
                        <ul class="ibsapp-features">
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
                        <div class="ibsapp-cta">
                            <p class="ibsapp-cta-text">Ya disponible para descarga.</p>
                            <div class="ibsapp-store-badges">
                                <a
                                    href="https://apps.apple.com/mx/app/ibs-consultores/id1582085062"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="store-badge-link"
                                >
                                    <img
                                        src="/images/icons/apple-store.jpg"
                                        alt="Descargar IBSApp en App Store"
                                        class="store-badge-image"
                                    >
                                </a>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.juanreyes.cincotenedores&hl=es_MX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="store-badge-link"
                                >
                                    <img
                                        src="/images/icons/google-play.jpg"
                                        alt="Descargar IBSApp en Google Play"
                                        class="store-badge-image"
                                    >
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="ibsapp-image-wrap wow move-up">
                        <img
                            class="ibsapp-hero-image"
                            src="/images/app/iby.png"
                            alt="IBSApp - Tu panel de seguros IBS"
                        >
                    </div>
                </div>
            </div>

            <!-- Secciones de pantallas de la app -->
            <div class="row ibsapp-screens-row section-space--pt_60">
                <div class="col-12 text-center mb-4">
                    <h3 class="ibsapp-screens-title">Así se ve <span class="highlight">IBSApp</span></h3>
                    <p class="ibsapp-screens-subtitle">
                        Mira el video y conoce la experiencia completa de la aplicación.
                    </p>
                </div>
                <div class="col-12 mb-5">
                    <div class="ibsapp-video-wrap">
                        <div class="ibsapp-video-inner">
                            <iframe
                                src="https://www.youtube.com/embed/86TSiayd2hI"
                                title="IBSApp - Video"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                                class="ibsapp-video-iframe"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <p class="ibsapp-screens-subtitle text-center mb-3">Algunas pantallas de la aplicación</p>
                    <div class="ibsapp-carousel">
                        <button
                            type="button"
                            class="ibsapp-carousel-arrow ibsapp-carousel-arrow--prev"
                            @click="prevScreen"
                        >
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="ibsapp-carousel-track">
                            <div
                                v-for="(screen, index) in appScreens"
                                :key="screen.id"
                                class="ibsapp-screen-card"
                                :class="{ 'ibsapp-screen-card--active': index === activeScreenIndex }"
                                @click="openModal(index)"
                            >
                                <img
                                    class="ibsapp-screen-image"
                                    :src="screen.src"
                                    :alt="screen.alt"
                                >
                                <p class="ibsapp-screen-caption">{{ screen.caption }}</p>
                            </div>
                        </div>
                        <button
                            type="button"
                            class="ibsapp-carousel-arrow ibsapp-carousel-arrow--next"
                            @click="nextScreen"
                        >
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Modal de pantallas IBSApp -->
            <div v-if="showModal" class="ibsapp-modal" @click.self="closeModal">
                <div class="ibsapp-modal-dialog">
                    <button type="button" class="ibsapp-modal-close" @click="closeModal">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="ibsapp-modal-body">
                        <button
                            type="button"
                            class="ibsapp-modal-arrow ibsapp-modal-arrow--prev"
                            @click.stop="prevScreen"
                        >
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="ibsapp-modal-image-wrap">
                            <img
                                v-if="appScreens[activeScreenIndex]"
                                :src="appScreens[activeScreenIndex].src"
                                :alt="appScreens[activeScreenIndex].alt"
                                class="ibsapp-modal-image"
                            >
                            <p v-if="appScreens[activeScreenIndex]" class="ibsapp-modal-caption">
                                {{ appScreens[activeScreenIndex].caption }}
                            </p>
                        </div>
                        <button
                            type="button"
                            class="ibsapp-modal-arrow ibsapp-modal-arrow--next"
                            @click.stop="nextScreen"
                        >
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'IBSAppSection',
    data() {
        return {
            activeScreenIndex: 0,
            showModal: false,
            appScreens: [
                {
                    id: 1,
                    src: '/images/app/1.png',
                    alt: 'Pantalla 1 de IBSApp',
                    caption: 'Inicio y resumen de tu cuenta'
                },
                {
                    id: 2,
                    src: '/images/app/2.png',
                    alt: 'Pantalla 2 de IBSApp',
                    caption: 'Beneficios que tenemos para ti'
                },
                {
                    id: 3,
                    src: '/images/app/3.png',
                    alt: 'Pantalla 3 de IBSApp',
                    caption: 'Detalle de póliza y documentos'
                },
                {
                    id: 4,
                    src: '/images/app/4.png',
                    alt: 'Pantalla 4 de IBSApp',
                    caption: 'Contacto rápido con tu ejecutivo'
                },
                {
                    id: 5,
                    src: '/images/app/5.png',
                    alt: 'Pantalla 5 de IBSApp',
                    caption: 'Centro de descargas y formatos'
                }
            ]
        };
    },
    methods: {
        setActiveScreen(index) {
            this.activeScreenIndex = index;
        },
        openModal(index) {
            this.activeScreenIndex = index;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        nextScreen() {
            this.activeScreenIndex = (this.activeScreenIndex + 1) % this.appScreens.length;
        },
        prevScreen() {
            this.activeScreenIndex =
                (this.activeScreenIndex - 1 + this.appScreens.length) % this.appScreens.length;
        }
    }
};
</script>

<style scoped lang="scss">
.ibsapp-section {
    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.ibsapp-content {
    max-width: 540px;
}

.ibsapp-title {
    font-size: 32px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 16px;

    .highlight {
        color: #086AD8;
    }

    @media (max-width: 575px) {
        font-size: 26px;
    }
}

.ibsapp-lead {
    font-size: 16px;
    color: #555;
    line-height: 1.7;
    margin-bottom: 20px;
}

.ibsapp-screens-row {
    margin-top: 40px;
}

.ibsapp-screens-title {
    font-size: 24px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 8px;
}

.ibsapp-screens-subtitle {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
}

/* Contenedor responsive 16:9 para YouTube */
.ibsapp-video-wrap {
    max-width: 720px;
    margin: 0 auto;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(0, 47, 166, 0.15);
}

.ibsapp-video-inner {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    background: #000;
}

.ibsapp-video-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.ibsapp-carousel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.ibsapp-carousel-track {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding: 4px 4px 10px;
    scroll-behavior: smooth;
}

.ibsapp-screen-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 12px 12px 14px;
    box-shadow: 0 8px 24px rgba(0, 47, 166, 0.12);
    width: 150px;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    border: 1px solid transparent;
}

.ibsapp-screen-card--active {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 14px 32px rgba(0, 47, 166, 0.18);
    border-color: rgba(8, 106, 216, 0.45);
}

.ibsapp-screen-image {
    width: 100%;
    height: auto;
    border-radius: 16px;
    display: block;
    margin-bottom: 8px;
}

.ibsapp-screen-caption {
    font-size: 12px;
    color: #555;
    text-align: center;
    margin: 0;
}

.ibsapp-carousel-arrow {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: none;
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 47, 166, 0.18);
    color: #086AD8;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
}

.ibsapp-carousel-arrow:hover {
    background: #f0f5ff;
    transform: translateY(-1px);
}

.ibsapp-features {
    list-style: none;
    padding: 0;
    margin: 0 0 24px;

    li {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-size: 14px;
        color: #444;
        line-height: 1.6;
        margin-bottom: 10px;

        i {
            color: #22c55e;
            margin-top: 3px;
        }
    }
}

.ibsapp-cta-text {
    font-size: 14px;
    font-weight: 600;
    color: #086AD8;
    margin-bottom: 10px;
}

.ibsapp-store-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.store-badge-link {
    display: inline-block;
}

.store-badge-image {
    height: 38px;
    width: auto;
    display: block;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.25);
}

.ibsapp-image-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.ibsapp-hero-image {
    max-width: 100%;
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
}

.ibsapp-modal {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
}

.ibsapp-modal-dialog {
    background: #ffffff;
    border-radius: 24px;
    max-width: 720px;
    width: 100%;
    position: relative;
    box-shadow: 0 20px 60px rgba(15, 23, 42, 0.45);
}

.ibsapp-modal-close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background: #f3f4f6;
    color: #111827;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.ibsapp-modal-body {
    display: flex;
    align-items: center;
    padding: 32px 40px 28px;
    gap: 16px;
}

.ibsapp-modal-image-wrap {
    flex: 1;
    text-align: center;
}

.ibsapp-modal-image {
    max-width: 260px;
    width: 100%;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 18px 40px rgba(0, 47, 166, 0.26);
    margin-bottom: 12px;
}

.ibsapp-modal-caption {
    font-size: 14px;
    color: #374151;
    margin: 0;
}

.ibsapp-modal-arrow {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: #f3f4f6;
    color: #111827;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.ibsapp-modal-arrow:hover {
    background: #e5e7eb;
}

@media (max-width: 991px) {
    .ibsapp-hero-image {
        max-width: 100%;
        width: 100%;
    }
}
</style>

