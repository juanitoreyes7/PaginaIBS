<template>
    <div class="main-container poliza-auto-page">
        <HeaderAppointment />

        <section class="poliza-auto section-space--ptb_80">
            <div class="container">
                <nuxt-link to="/portafolio-polizas" class="poliza-auto__back">
                    <i class="fas fa-arrow-left"></i>
                    Volver al portafolio
                </nuxt-link>

                <div v-if="!auto" class="poliza-auto__empty">
                    <p>No se encontró la póliza. <nuxt-link to="/portafolio-polizas">Ver portafolio</nuxt-link></p>
                </div>

                <template v-else>
                    <div class="poliza-auto__banner">
                        <h1 class="poliza-auto__banner-title">Póliza de Auto</h1>
                        <p class="poliza-auto__banner-sub">{{ auto.descripcionAuto }} {{ auto.modelo || '' }}</p>
                    </div>

                    <div class="poliza-auto__grid">
                        <div class="poliza-auto__card poliza-auto__card--dark">
                            <div class="poliza-auto__field">
                                <span class="poliza-auto__label">Compañía</span>
                                <span class="poliza-auto__value">{{ auto.compania && auto.compania.nombreCompania ? auto.compania.nombreCompania : '—' }}</span>
                            </div>
                            <div class="poliza-auto__field">
                                <span class="poliza-auto__label">Estado</span>
                                <span class="poliza-auto__value">{{ (auto.estatus || '').toUpperCase() }}</span>
                            </div>
                            <div class="poliza-auto__field">
                                <span class="poliza-auto__label">Cobertura</span>
                                <span class="poliza-auto__value">{{ auto.cobertura || '—' }}</span>
                            </div>
                            <div class="poliza-auto__field">
                                <span class="poliza-auto__label">Forma de pago</span>
                                <span class="poliza-auto__value">{{ auto.formaPago || '—' }}</span>
                            </div>
                        </div>

                        <div class="poliza-auto__card poliza-auto__card--light">
                            <div class="poliza-auto__field">
                                <span class="poliza-auto__label">Descripción del vehículo</span>
                                <span class="poliza-auto__value poliza-auto__value--dark">{{ auto.descripcionAuto }} {{ auto.modelo || '' }}</span>
                            </div>
                            <div class="poliza-auto__field">
                                <span class="poliza-auto__label">NS</span>
                                <span class="poliza-auto__value poliza-auto__value--dark">{{ auto.numSerie || '—' }}</span>
                            </div>
                            <div class="poliza-auto__field">
                                <span class="poliza-auto__label">Número de póliza</span>
                                <span class="poliza-auto__value poliza-auto__value--dark">{{ auto.numPoliza || '—' }}</span>
                            </div>
                            <div class="poliza-auto__field">
                                <span class="poliza-auto__label">Vigencia</span>
                                <span class="poliza-auto__value poliza-auto__value--dark">{{ auto.vDesde || '—' }} al {{ auto.vHasta || '—' }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="poliza-auto__row poliza-auto__row--three">
                        <button
                            type="button"
                            class="poliza-auto__btn poliza-auto__btn--primary"
                            @click="abrirCondiciones"
                        >
                            Condiciones generales
                        </button>
                        <a
                            v-if="auto.file_url"
                            :href="auto.file_url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="poliza-auto__btn poliza-auto__btn--download"
                        >
                            <i class="fas fa-download"></i>
                            Descargar PDF
                        </a>
                        <button
                            type="button"
                            class="poliza-auto__btn poliza-auto__btn--siniestro"
                            @click="abrirModalSiniestro"
                        >
                            Siniestro
                        </button>
                    </div>
                    <p class="poliza-auto__hint">Para más información descarga el documento.</p>
                </template>
            </div>
        </section>

        <!-- Modal Siniestro y Asistencia Vial -->
        <div v-if="showModalSiniestro" class="siniestro-modal" @click.self="cerrarModalSiniestro">
            <div class="siniestro-modal__box">
                <button type="button" class="siniestro-modal__close" aria-label="Cerrar" @click="cerrarModalSiniestro">
                    <i class="fas fa-times"></i>
                </button>
                <div class="siniestro-modal__banner">
                    <h2 class="siniestro-modal__banner-title">Siniestro y asistencia vial</h2>
                    <a href="tel:8007770911" class="siniestro-modal__banner-contact">
                        <i class="fas fa-phone-alt"></i>
                        Contáctanos 800 777 09 11
                    </a>
                </div>
                <div class="siniestro-modal__body">
                    <h3 class="siniestro-modal__subtitle">¿Qué hacer en caso de un siniestro?</h3>
                    <div class="siniestro-modal__card">
                        <div class="siniestro-modal__step">
                            <span class="siniestro-modal__step-num">1.</span>
                            <strong> Conserva la calma</strong>
                        </div>
                        <p class="siniestro-modal__step-text">
                            No abandones tu vehículo hasta que llegue el ajustador, alguna autoridad te lo solicite o si estás en zona de riesgo.
                        </p>
                        <div class="siniestro-modal__step">
                            <span class="siniestro-modal__step-num">2.</span>
                            <strong> Ten en cuenta estos datos</strong>
                        </div>
                        <p class="siniestro-modal__step-text">
                            • Número de póliza: {{ auto ? auto.numPoliza : '' }}
                        </p>
                        <p class="siniestro-modal__step-text">
                            • Ubicación exacta del percance
                        </p>
                        <div class="siniestro-modal__step">
                            <span class="siniestro-modal__step-num">3.</span>
                            <strong> Reporta el siniestro a:</strong>
                            <span v-if="auto && auto.compania && auto.compania.nombreCompania"> {{ auto.compania.nombreCompania }}</span>
                        </div>
                        <p class="siniestro-modal__step-text">
                            Al reportar el siniestro se te asignará un número de reporte es importante anotarlo.
                        </p>
                    </div>
                    <a
                        :href="telReportarSiniestro"
                        class="siniestro-modal__btn siniestro-modal__btn--reportar"
                    >
                        Reportar un siniestro
                    </a>
                    <a
                        :href="linkWhatsappAsesoria"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="siniestro-modal__btn siniestro-modal__btn--asesoria"
                    >
                        Asesoría de IBS Consultores
                    </a>
                    <p class="siniestro-modal__aviso">
                        Al iniciar la llamada IBS recibirá una notificación de tu reporte para estar al tanto de la situación.
                    </p>
                </div>
            </div>
        </div>

        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

const STORAGE_KEY = 'polizaAutoDetalle';
const WHATSAPP_ASESORIA = 'https://wa.me/526141966101?text=Hola';

export default {
    name: 'PolizaAutoDetalle',
    components: {
        HeaderAppointment,
        Footer,
        OffCanvasMobileMenu
    },
    data() {
        return {
            auto: null,
            linkCondiciones: '',
            showModalSiniestro: false
        };
    },
    computed: {
        linkWhatsappAsesoria() {
            return WHATSAPP_ASESORIA;
        },
        telReportarSiniestro() {
            const num = this.auto && this.auto.compania && this.auto.compania.numTelefonoAuto
                ? String(this.auto.compania.numTelefonoAuto).trim()
                : '800 777 09 11';
            const digits = num.replace(/\D/g, '');
            const tel = digits.length === 10
                ? `+52${digits}`
                : digits.length === 12 && digits.startsWith('52')
                    ? `+${digits}`
                    : digits.length > 0
                        ? `+${digits}`
                        : '+528007770911';
            return `tel:${tel}`;
        }
    },
    head() {
        return {
            title: 'Póliza de Auto - IBS Consultores'
        };
    },
    mounted() {
        if (process.client) {
            try {
                const stored = sessionStorage.getItem(STORAGE_KEY);
                if (stored) {
                    this.auto = JSON.parse(stored);
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
            if (!this.auto || !this.auto.compania || !this.auto.compania.nombreCompania || !this.$db) {
                return;
            }
            try {
                const snap = await this.$db.collection('ImgCompania')
                    .where('nombreCompania', '==', this.auto.compania.nombreCompania)
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
        },
        abrirModalSiniestro() {
            this.showModalSiniestro = true;
        },
        cerrarModalSiniestro() {
            this.showModalSiniestro = false;
        },
    }
};
</script>

<style lang="scss" scoped>
.poliza-auto-page {
    background: #f8fafc;
}

.poliza-auto__back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #04285A;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 24px;
    transition: opacity 0.2s;
    &:hover {
        opacity: 0.85;
        color: #04285A;
    }
}

.poliza-auto__empty {
    text-align: center;
    padding: 48px 24px;
    background: #fff;
    border-radius: 12px;
    a {
        color: #086AD8;
        font-weight: 600;
    }
}

.poliza-auto__banner {
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    border-radius: 16px;
    padding: 28px 24px;
    margin-bottom: 24px;
    color: #fff;
}

.poliza-auto__banner-title {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #fff;
}

.poliza-auto__banner-sub {
    font-size: 16px;
    margin: 0;
    opacity: 0.95;
}

.poliza-auto__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 24px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
}

.poliza-auto__card {
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

.poliza-auto__field {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.poliza-auto__label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 4px;
    opacity: 0.9;
}

.poliza-auto__value {
    font-size: 14px;
    font-weight: 600;

    &--dark {
        color: #04285A;
    }
}

.poliza-auto__card--dark .poliza-auto__value {
    color: #fff;
}

.poliza-auto__btn {
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

    &--siniestro {
        background: #EAB104;
        color: #fff;
        &:hover {
            opacity: 0.92;
            color: #fff;
        }
    }
}

.poliza-auto__row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

/* Tres botones en la misma fila, mismos tamaños */
.poliza-auto__row--three {
    display: flex;
    gap: 12px;
    align-items: stretch;
    flex-wrap: wrap;
}

.poliza-auto__row--three .poliza-auto__btn {
    flex: 1;
    min-width: 0;
    min-height: 52px;
}

@media (max-width: 767px) {
    .poliza-auto__row--three {
        flex-direction: column;
    }
    .poliza-auto__row--three .poliza-auto__btn {
        width: 100%;
    }
}

.poliza-auto__hint {
    font-size: 12px;
    color: #04285A;
    margin: 0;
}

/* Modal Siniestro */
.siniestro-modal {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
    overflow-y: auto;
}

.siniestro-modal__box {
    position: relative;
    width: 100%;
    max-width: 520px;
    max-height: 90vh;
    overflow-y: auto;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.siniestro-modal__close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.06);
    color: #334155;
    cursor: pointer;
    z-index: 2;
    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }
}

.siniestro-modal__banner {
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    padding: 24px 20px;
    border-radius: 16px 16px 0 0;
    color: #fff;
}

.siniestro-modal__banner-title {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #fff;
}

.siniestro-modal__banner-contact {
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

.siniestro-modal__body {
    padding: 24px 20px 28px;
}

.siniestro-modal__subtitle {
    font-size: 18px;
    font-weight: 700;
    color: #04285A;
    margin: 0 0 16px 0;
    text-align: center;
}

.siniestro-modal__card {
    background: #f8fafc;
    border-radius: 12px;
    padding: 20px 16px;
    margin-bottom: 20px;
    border: 1px solid #e2e8f0;
}

.siniestro-modal__step {
    font-size: 14px;
    color: #04285A;
    margin-bottom: 8px;
}

.siniestro-modal__step-num {
    font-weight: 700;
}

.siniestro-modal__step-text {
    font-size: 12px;
    color: #04285A;
    line-height: 1.5;
    margin: 0 0 8px 20px;
    &:last-of-type {
        margin-bottom: 12px;
    }
}

.siniestro-modal__btn {
    display: block;
    width: 100%;
    padding: 14px 20px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
    transition: opacity 0.2s;

    &--reportar {
        background: #dc2626;
        color: #fff;
        &:hover {
            opacity: 0.9;
        }
    }

    &--asesoria {
        background: #25d366;
        color: #fff;
        &:hover {
            opacity: 0.9;
            color: #fff;
        }
    }
}

.siniestro-modal__aviso {
    font-size: 10px;
    color: #04285A;
    text-align: center;
    line-height: 1.5;
    margin: 16px 0 0 0;
}
</style>
