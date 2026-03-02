<template>
    <div class="main-container poliza-vida-page">
        <HeaderAppointment />

        <section class="poliza-vida section-space--ptb_80">
            <div class="container">
                <nuxt-link to="/portafolio-polizas" class="poliza-vida__back">
                    <i class="fas fa-arrow-left"></i>
                    Volver al portafolio
                </nuxt-link>

                <div v-if="!vida" class="poliza-vida__empty">
                    <p>No se encontró la póliza. <nuxt-link to="/portafolio-polizas">Ver portafolio</nuxt-link></p>
                </div>

                <template v-else>
                    <!-- Banner tipo app -->
                    <div class="poliza-vida__banner">
                        <div class="poliza-vida__banner-inner">
                            <h1 class="poliza-vida__banner-title">Póliza de Vida</h1>
                            <a href="tel:8007770911" class="poliza-vida__banner-contact">
                                <i class="fas fa-phone-alt"></i>
                                Contáctanos 800 777 09 11
                            </a>
                        </div>
                    </div>

                    <!-- Cards: izquierda oscura, derecha blanca -->
                    <div class="poliza-vida__grid">
                        <div class="poliza-vida__card poliza-vida__card--dark">
                            <div class="poliza-vida__field">
                                <span class="poliza-vida__label">Compañía</span>
                                <span class="poliza-vida__value">{{ vida.compania && vida.compania.nombreCompania ? vida.compania.nombreCompania : '—' }}</span>
                            </div>
                            <template v-if="vida.numPolizaVida !== 'AXA_KERALTY_SMTC'">
                                <div class="poliza-vida__field">
                                    <span class="poliza-vida__label">Estatus</span>
                                    <span class="poliza-vida__value">{{ vida.estatus || '—' }}</span>
                                </div>
                                <div class="poliza-vida__field">
                                    <span class="poliza-vida__label">Suma asegurada</span>
                                    <span class="poliza-vida__value">{{ vida.sumaVida || '—' }}</span>
                                </div>
                            </template>
                        </div>
                        <div class="poliza-vida__card poliza-vida__card--light">
                            <template v-if="vida.numPolizaVida !== 'AXA_KERALTY_SMTC'">
                                <div class="poliza-vida__field">
                                    <span class="poliza-vida__label">Número de póliza</span>
                                    <span class="poliza-vida__value poliza-vida__value--dark">{{ vida.numPolizaVida || '—' }}</span>
                                </div>
                            </template>
                            <div class="poliza-vida__field">
                                <span class="poliza-vida__label">Vigencia</span>
                                <span class="poliza-vida__value poliza-vida__value--dark">{{ vida.vDesde || '—' }} al {{ vida.vHasta || '—' }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Tres botones en un solo renglón -->
                    <div class="poliza-vida__row poliza-vida__row--three">
                        <button
                            type="button"
                            class="poliza-vida__btn poliza-vida__btn--primary"
                            @click="abrirCondiciones"
                        >
                            Condiciones generales
                        </button>
                        <a
                            v-if="vida.file_url"
                            :href="vida.file_url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="poliza-vida__btn poliza-vida__btn--download"
                        >
                            <i class="fas fa-download"></i>
                            Descargar PDF
                        </a>
                        <a
                            :href="linkWhatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="poliza-vida__btn poliza-vida__btn--whatsapp"
                        >
                            <i class="fab fa-whatsapp"></i>
                            Asesoría de IBS Consultores
                        </a>
                    </div>

                    <p class="poliza-vida__hint">Para más información descarga el documento.</p>
                </template>
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

const STORAGE_KEY = 'polizaVidaDetalle';
const WHATSAPP_LINK = 'https://wa.me/526141966101?text=Hola';

export default {
    name: 'PolizaVidaDetalle',
    components: {
        HeaderAppointment,
        Footer,
        OffCanvasMobileMenu
    },
    data() {
        return {
            vida: null,
            linkCondiciones: ''
        };
    },
    computed: {
        linkWhatsapp() {
            return WHATSAPP_LINK;
        }
    },
    head() {
        return {
            title: 'Póliza de Vida - IBS Consultores'
        };
    },
    mounted() {
        if (process.client) {
            try {
                const stored = sessionStorage.getItem(STORAGE_KEY);
                if (stored) {
                    this.vida = JSON.parse(stored);
                    sessionStorage.removeItem(STORAGE_KEY);
                    this.cargarLinkCondiciones();
                }
            } catch (e) {
                console.error(e);
            }
        }
    },
    methods: {
        async cargarLinkCondiciones() {
            if (!this.vida || !this.vida.compania || !this.vida.compania.nombreCompania || !this.$db) {
                return;
            }
            try {
                const snap = await this.$db.collection('ImgCompania')
                    .where('nombreCompania', '==', this.vida.compania.nombreCompania)
                    .get();
                if (!snap.empty) {
                    this.linkCondiciones = snap.docs[0].data().linkCondiciones || '';
                }
            } catch (err) {
                console.error('Error al cargar link condiciones:', err);
            }
        },
        abrirCondiciones() {
            if (this.linkCondiciones) {
                window.open(this.linkCondiciones, '_blank', 'noopener,noreferrer');
            } else {
                alert('El enlace no está disponible.');
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.poliza-vida-page {
    background: #f8fafc;
}

.poliza-vida__back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #04285A;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 24px;
    padding: 12px 20px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 12px rgba(4, 40, 90, 0.15);
    transition: opacity 0.2s;
    &:hover {
        opacity: 0.85;
        color: #04285A;
    }
}

.poliza-vida__empty {
    text-align: center;
    padding: 48px 24px;
    background: #fff;
    border-radius: 12px;
    a {
        color: #086AD8;
        font-weight: 600;
    }
}

/* Banner tipo app */
.poliza-vida__banner {
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    border-radius: 16px;
    padding: 28px 24px;
    margin-bottom: 24px;
    color: #fff;
}

.poliza-vida__banner-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.poliza-vida__banner-title {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.poliza-vida__banner-contact {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.95);
    text-decoration: none;
    &:hover {
        color: #fff;
    }
}

.poliza-vida__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
}

.poliza-vida__card {
    border-radius: 12px;
    padding: 24px 20px;
    box-shadow: 0 4px 16px rgba(4, 40, 90, 0.15);

    &--dark {
        background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);;
        color: #fff;
    }

    &--light {
        background: #fff;
        color: #04285A;
    }
}

.poliza-vida__field {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.poliza-vida__label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 4px;
    opacity: 0.9;
}

.poliza-vida__value {
    font-size: 14px;
    font-weight: 600;

    &--dark {
        color: #04285A;
    }
}

.poliza-vida__card--dark .poliza-vida__value {
    color: #fff;
}

.poliza-vida__row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 16px;
}

/* Tres botones en un solo renglón, mismos tamaños */
.poliza-vida__row--three {
    display: flex;
    gap: 12px;
    align-items: stretch;
    flex-wrap: wrap;
}

.poliza-vida__row--three .poliza-vida__btn {
    flex: 1;
    min-width: 0;
    min-height: 52px;
}

@media (max-width: 767px) {
    .poliza-vida__row--three {
        flex-direction: column;
    }
    .poliza-vida__row--three .poliza-vida__btn {
        width: 100%;
    }
}

.poliza-vida__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 20px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    box-sizing: border-box;

    &--primary {
        background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
        color: #fff;
        &:hover {
            opacity: 0.92;
        }
    }

    &--download {
        background: #fff;
        color: #04285A;
        border: 2px solid #04285A;
        &:hover {
            background: #f1f5f9;
            color: #04285A;
        }
    }

    &--whatsapp {
        background: #25d366;
        color: #fff;
        &:hover {
            opacity: 0.92;
            color: #fff;
        }
    }
}

.poliza-vida__hint {
    font-size: 12px;
    color: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    margin: 16px 0 0 0;
    text-align: center;
}
</style>
