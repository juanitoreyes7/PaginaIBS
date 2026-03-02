<template>
    <div class="main-container poliza-accidente-page">
        <HeaderAppointment />

        <section class="poliza-accidente section-space--ptb_80">
            <div class="container">
                <nuxt-link to="/portafolio-polizas" class="poliza-accidente__back">
                    <i class="fas fa-arrow-left"></i>
                    Volver al portafolio
                </nuxt-link>

                <div v-if="!accidente" class="poliza-accidente__empty">
                    <p>No se encontró la póliza. <nuxt-link to="/portafolio-polizas">Ver portafolio</nuxt-link></p>
                </div>

                <template v-else>
                    <!-- Banner tipo app -->
                    <div class="poliza-accidente__banner">
                        <div class="poliza-accidente__banner-inner">
                            <h1 class="poliza-accidente__banner-title">Póliza de Accidentes</h1>
                            <a href="tel:8007770911" class="poliza-accidente__banner-contact">
                                <i class="fas fa-phone-alt"></i>
                                Contáctanos 800 777 09 11
                            </a>
                        </div>
                    </div>

                    <!-- Cards: izquierda oscura, derecha blanca -->
                    <div class="poliza-accidente__grid">
                        <div class="poliza-accidente__card poliza-accidente__card--dark">
                            <div class="poliza-accidente__field">
                                <span class="poliza-accidente__label">Compañía</span>
                                <span class="poliza-accidente__value">{{ accidente.compania && accidente.compania.nombreCompania ? accidente.compania.nombreCompania : '—' }}</span>
                            </div>
                            <template v-if="accidente.numPolizaAccidente">
                                <div class="poliza-accidente__field">
                                    <span class="poliza-accidente__label">Estatus</span>
                                    <span class="poliza-accidente__value">{{ accidente.estatus || '—' }}</span>
                                </div>
                                <div class="poliza-accidente__field">
                                    <span class="poliza-accidente__label">Suma asegurada</span>
                                    <span class="poliza-accidente__value">{{ accidente.sumaAccidente || '—' }}</span>
                                </div>
                            </template>
                        </div>
                        <div class="poliza-accidente__card poliza-accidente__card--light">
                            <template v-if="accidente.numPolizaAccidente">
                                <div class="poliza-accidente__field">
                                    <span class="poliza-accidente__label">Número de póliza</span>
                                    <span class="poliza-accidente__value poliza-accidente__value--dark">{{ accidente.numPolizaAccidente || '—' }}</span>
                                </div>
                            </template>
                            <div class="poliza-accidente__field">
                                <span class="poliza-accidente__label">Vigencia</span>
                                <span class="poliza-accidente__value poliza-accidente__value--dark">{{ accidente.vDesde || '—' }} al {{ accidente.vHasta || '—' }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Tres botones en un solo renglón -->
                    <div class="poliza-accidente__row poliza-accidente__row--three">
                        <button
                            type="button"
                            class="poliza-accidente__btn poliza-accidente__btn--primary"
                            @click="abrirCondiciones"
                        >
                            Condiciones generales
                        </button>
                        <a
                            v-if="accidente.file_url"
                            :href="accidente.file_url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="poliza-accidente__btn poliza-accidente__btn--download"
                        >
                            <i class="fas fa-download"></i>
                            Descargar PDF
                        </a>
                        <a
                            :href="linkWhatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="poliza-accidente__btn poliza-accidente__btn--whatsapp"
                        >
                            <i class="fab fa-whatsapp"></i>
                            Asesoría de IBS Consultores
                        </a>
                    </div>

                    <p class="poliza-accidente__hint">Para más información descarga el documento.</p>
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

const STORAGE_KEY = 'polizaAccidenteDetalle';
const WHATSAPP_LINK = 'https://wa.me/526141966101?text=Hola';

export default {
    name: 'PolizaAccidenteDetalle',
    components: {
        HeaderAppointment,
        Footer,
        OffCanvasMobileMenu
    },
    data() {
        return {
            accidente: null,
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
            title: 'Póliza de Accidentes - IBS Consultores'
        };
    },
    mounted() {
        if (process.client) {
            try {
                const stored = sessionStorage.getItem(STORAGE_KEY);
                if (stored) {
                    this.accidente = JSON.parse(stored);
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
            if (!this.accidente || !this.accidente.compania || !this.accidente.compania.nombreCompania || !this.$db) {
                return;
            }
            try {
                const snap = await this.$db.collection('ImgCompania')
                    .where('nombreCompania', '==', this.accidente.compania.nombreCompania)
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
.poliza-accidente-page {
    background: #f8fafc;
}

.poliza-accidente__back {
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

.poliza-accidente__empty {
    text-align: center;
    padding: 48px 24px;
    background: #fff;
    border-radius: 12px;
    a {
        color: #086AD8;
        font-weight: 600;
    }
}

.poliza-accidente__banner {
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    border-radius: 16px;
    padding: 28px 24px;
    margin-bottom: 24px;
    color: #fff;
}

.poliza-accidente__banner-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.poliza-accidente__banner-title {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.poliza-accidente__banner-contact {
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

.poliza-accidente__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
}

.poliza-accidente__card {
    border-radius: 12px;
    padding: 24px 20px;
    box-shadow: 0 4px 16px rgba(4, 40, 90, 0.15);

    &--dark {
        background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
        color: #fff;
    }

    &--light {
        background: #fff;
        color: #04285A;
    }
}

.poliza-accidente__field {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.poliza-accidente__label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 4px;
    opacity: 0.9;
}

.poliza-accidente__value {
    font-size: 14px;
    font-weight: 600;

    &--dark {
        color: #04285A;
    }
}

.poliza-accidente__card--dark .poliza-accidente__value {
    color: #fff;
}

.poliza-accidente__row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 16px;
}

.poliza-accidente__row--three {
    display: flex;
    gap: 12px;
    align-items: stretch;
    flex-wrap: wrap;
}

.poliza-accidente__row--three .poliza-accidente__btn {
    flex: 1;
    min-width: 0;
    min-height: 52px;
}

@media (max-width: 767px) {
    .poliza-accidente__row--three {
        flex-direction: column;
    }
    .poliza-accidente__row--three .poliza-accidente__btn {
        width: 100%;
    }
}

.poliza-accidente__btn {
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

.poliza-accidente__hint {
    font-size: 12px;
    color: #04285A;
    margin: 16px 0 0 0;
    text-align: center;
}
</style>

