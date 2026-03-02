<template>
    <div class="main-container poliza-gmm-page">
        <HeaderAppointment />

        <section class="poliza-gmm section-space--ptb_80">
            <div class="container">
                <nuxt-link to="/portafolio-polizas" class="poliza-gmm__back">
                    <i class="fas fa-arrow-left"></i>
                    Volver al portafolio
                </nuxt-link>

                <div v-if="!gm" class="poliza-gmm__empty">
                    <p>No se encontró la póliza. <nuxt-link to="/portafolio-polizas">Ver portafolio</nuxt-link></p>
                </div>

                <template v-else>
                    <!-- Banner -->
                    <div class="poliza-gmm__banner">
                        <p v-for="(item, idx) in asegurados" :key="idx" class="poliza-gmm__banner-title">
                            {{ item.nombre }}
                        </p>
                    </div>

                    <!-- Asegurados -->
                    <div v-if="asegurados.length" class="poliza-gmm__asegurados">
                        <p v-for="(item, idx) in asegurados" :key="idx" class="poliza-gmm__asegurado-nombre">
                            Detalle de póliza GMM

                        </p>
                    </div>

                    <!-- Cards: Compañía/Estatus | Nº Póliza/Vigencia -->
                    <div class="poliza-gmm__grid">
                        <div class="poliza-gmm__card poliza-gmm__card--dark">
                            <div class="poliza-gmm__field">
                                <span class="poliza-gmm__label">Número de póliza</span>
                                <span class="poliza-gmm__value poliza-gmm__value--dark">{{ gm.numPolizaGM || '—' }} </span>
                            </div>
                            <div class="poliza-gmm__field">
                                <span class="poliza-gmm__label">Compañía</span>
                                <span class="poliza-gmm__value">{{ gm.compania && gm.compania.nombreCompania ? gm.compania.nombreCompania : '—' }}</span>
                            </div>
                            <div class="poliza-gmm__field">
                                <span class="poliza-gmm__label">Vigencia</span>
                                <span class="poliza-gmm__value poliza-gmm__value--dark">{{ gm.vDesde || '—' }} al {{ gm.vHasta || '—' }}</span>
                            </div>
                        </div>
                        <div class="poliza-gmm__card poliza-gmm__card--light">
                            <div class="poliza-gmm__field">
                                <span class="poliza-gmm__label">Suma asegurada</span>
                                <span class="poliza-gmm__value">{{ gm.sumaGM || '' }}</span>
                            </div>
                           
                            <div class="poliza-gmm__field">
                                <span class="poliza-gmm__label">Coaseguro </span>
                                <span class="poliza-gmm__value poliza-gmm__value--dark">{{ gm.coaseguro || '—' }}</span>
                            </div>
                            <div class="poliza-gmm__field">
                                <span class="poliza-gmm__label">Deducible </span>
                                <span class="poliza-gmm__value poliza-gmm__value--dark">{{ gm.deducible || '—' }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Programar una cirugía -->
                    <div class="poliza-gmm__detalle-card poliza-gmm__card--light">
                        <div class="poliza-gmm__cirugia-row">
                            <div class="poliza-gmm__cirugia-text">
                                <h3 class="poliza-gmm__subtitle">Programar una cirugía</h3>
                                <p class="poliza-gmm__doc-intro">Estos documentos son necesarios para realizar este trámite:</p>
                                <ul class="poliza-gmm__doc-list">
                                    <li>- Solicitud de reclamación de Gastos Médicos Mayores, llena y firmada por el titular de la póliza.</li>
                                    <li>- Informe médico firmado por cada médico tratante. Incluir la fecha y lugar de la cirugía.</li>
                                    <li>- Identificación oficial (original y copia).</li>
                                </ul>
                            </div>
                            <div class="poliza-gmm__cirugia-btns">
                                <a
                                    :href="linkWhatsapp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="poliza-gmm__btn poliza-gmm__btn--whatsapp"
                                >
                                    <i class="fab fa-whatsapp"></i>
                                    Contactar por WhatsApp
                                </a>
                                
                            </div>
                        </div>
                    </div>

                    <!-- Botones: WhatsApp, Siniestro, Descargables, Hospitales -->
                    <div class="poliza-gmm__row-two">
                        <a
                            href="https://ibsconsultores.com/descargables/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="poliza-gmm__btn poliza-gmm__btn--sec"
                        >
                            Descargables
                        </a>
                        <a
                            href="https://www.ibsconsultores.com/hospitales/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="poliza-gmm__btn poliza-gmm__btn--sec"
                        >
                            Médicos y Hospitales
                        </a>
                    </div>
                    <div class="poliza-gmm__row-two">
                        <button
                            type="button"
                            class="poliza-gmm__btn poliza-gmm__btn--primary"
                            @click="abrirCondiciones"
                        >
                            Condiciones generales
                        </button>
                        <a
                             v-if="gm.file_url"
                            :href="gm.file_url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="poliza-gmm__btn poliza-gmm__btn--download"
                        >
                        Descargar PDF
                        </a>
                    </div>
                    <p class="poliza-gmm__hint">Para más información descarga el documento.</p>
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

const STORAGE_KEY = 'polizaGMMDetalle';

export default {
    name: 'PolizaGMM',
    components: {
        HeaderAppointment,
        Footer,
        OffCanvasMobileMenu
    },
    data() {
        return {
            gm: null,
            linkCondiciones: ''
        };
    },
    computed: {
        asegurados() {
            return Array.isArray(this.gm && this.gm.dataAsegurados) ? this.gm.dataAsegurados : [];
        },
        linkWhatsapp() {
            if (!this.gm || !this.gm.WPibs) {
                return 'https://wa.me/526141966101?text=Hola%2C%20necesito%20ayuda%20con%20mi%20p%C3%B3liza.';
            }
            const num = String(this.gm.WPibs).replace(/\D/g, '');
            const phone = num.length === 10 ? `52${num}` : num;
            return `https://wa.me/${phone}?text=Hola%2C%20necesito%20ayuda%20con%20mi%20p%C3%B3liza.`;
        },
        telSiniestro() {
            const num = this.gm && this.gm.compania && this.gm.compania.numTelefonoGM
                ? String(this.gm.compania.numTelefonoGM).replace(/\D/g, '')
                : '8007770911';
            const tel = num.length === 10 ? `52${num}` : num.length === 12 && num.startsWith('52') ? num : `52${num}`;
            return `tel:+${tel}`;
        }
    },
    head() {
        return {
            title: 'Póliza Gastos Médicos Mayores - IBS Consultores'
        };
    },
    mounted() {
        if (process.client) {
            try {
                const stored = sessionStorage.getItem(STORAGE_KEY);
                if (stored) {
                    this.gm = JSON.parse(stored);
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
            if (!this.gm || !this.gm.compania || !this.gm.compania.nombreCompania || !this.$db) return;
            try {
                const snap = await this.$db.collection('ImgCompania')
                    .where('nombreCompania', '==', this.gm.compania.nombreCompania)
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
.poliza-gmm-page {
    background: #f8fafc;
}

.poliza-gmm__back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #04285A;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 24px;
    &:hover { opacity: 0.85; color: #04285A; }
}

.poliza-gmm__empty {
    text-align: center;
    padding: 48px 24px;
    background: #fff;
    border-radius: 12px;
    a { color: #086AD8; font-weight: 600; }
}

.poliza-gmm__banner {
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    border-radius: 16px;
    padding: 28px 24px;
    margin-bottom: 24px;
    color: #fff;
}

.poliza-gmm__banner-title {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 8px 0;
    color: #fff;
}

.poliza-gmm__banner-contact {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.95);
    text-decoration: none;
    &:hover { color: #fff; }
}

.poliza-gmm__asegurados {
    margin-bottom: 20px;
    text-align: center;
}

.poliza-gmm__asegurado-nombre {
    font-size: 16px;
    font-weight: 700;
    color: #04285A;
    margin: 0 0 8px 0;
}

.poliza-gmm__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 24px;
    @media (max-width: 767px) { grid-template-columns: 1fr; }
}

.poliza-gmm__card {
    border-radius: 12px;
    padding: 24px 20px;
    box-shadow: 0 4px 16px rgba(4, 40, 90, 0.15);
    &--dark {
        background:  linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
        color: #fff;
    }
    &--light {
        background: #fff;
        color: #04285A;
    }
}

.poliza-gmm__detalle-card {
    margin-bottom: 24px;
    border-radius: 12px;
    padding: 24px 20px;
    box-shadow: 0 4px 16px rgba(4, 40, 90, 0.15);
}

.poliza-gmm__cirugia-card {
    border-left: 4px solid #25d366;
    padding-left: 28px;
    background: linear-gradient(to right, rgba(37, 211, 102, 0.04) 0%, transparent 120px);
}

.poliza-gmm__field {
    margin-bottom: 16px;
    &:last-child { margin-bottom: 0; }
}

.poliza-gmm__label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 4px;
}

.poliza-gmm__value {
    font-size: 14px;
    font-weight: 600;
    &--dark { color: #04285A; }
    &--small {
        font-size: 12px;
        font-weight: 500;
        line-height: 1.5;
        display: block;
        margin-top: 4px;
    }
}

.poliza-gmm__card--dark .poliza-gmm__value { color: #fff; }

.poliza-gmm__cirugia-row {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    align-items: flex-start;
    justify-content: space-between;
}

.poliza-gmm__cirugia-text {
    flex: 1;
    min-width: 260px;
}

.poliza-gmm__cirugia-btns {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
    flex-shrink: 0;
}

.poliza-gmm__cirugia-btns .poliza-gmm__btn--whatsapp,
.poliza-gmm__cirugia-btns .poliza-gmm__btn--siniestro {
    width: 260px;
    min-width: 260px;
    margin-bottom: 0;
    box-sizing: border-box;
}

/* Botón WhatsApp en sección cirugía: diseño destacado */
.poliza-gmm__cirugia-btns .poliza-gmm__btn--whatsapp {
    background: #25d366;
    box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4);
    padding: 16px 24px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 12px;
    transition: transform 0.2s, box-shadow 0.2s;
}
.poliza-gmm__cirugia-btns .poliza-gmm__btn--whatsapp:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
    opacity: 1;
    color: #fff;
}
.poliza-gmm__cirugia-btns .poliza-gmm__btn--whatsapp .fab {
    font-size: 1.35em;
}

@media (max-width: 640px) {
    .poliza-gmm__cirugia-row {
        flex-direction: column;
    }
    .poliza-gmm__cirugia-btns {
        align-items: stretch;
        width: 100%;
    }
    .poliza-gmm__cirugia-btns .poliza-gmm__btn--whatsapp,
    .poliza-gmm__cirugia-btns .poliza-gmm__btn--siniestro {
        width: 100%;
        min-width: 0;
    }
}

.poliza-gmm__subtitle {
    font-size: 16px;
    font-weight: 700;
    color: #04285A;
    margin: 0 0 12px 0;
    text-align: left;
}

.poliza-gmm__doc-intro {
    font-size: 13px;
    font-weight: 600;
    color: #04285A;
    margin-bottom: 12px;
}

.poliza-gmm__doc-list {
    margin: 0;
    padding-left: 20px;
    font-size: 12px;
    color: #04285A;
    line-height: 1.6;
}

.poliza-gmm__actions { margin-bottom: 20px; }

.poliza-gmm__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 24px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    &--primary {
        background:  linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
        color: #fff;
        width: 100%;
        max-width: 320px;
        &:hover { opacity: 0.92; }
    }
    &--download {
        background: #fff;
        color: #04285A;
        border: 2px solid #04285A;
        width: 100%;
        max-width: 320px;
        &:hover { background: #f1f5f9; color: #04285A; }
    }
    &--whatsapp {
        display: block;
        width: 100%;
        max-width: 320px;
        margin-bottom: 10px;
        background: #25d366;
        color: #fff;
        &:hover { opacity: 0.9; color: #fff; }
    }
    &--siniestro {
        display: block;
        width: 100%;
        max-width: 320px;
        margin-bottom: 16px;
        background: #dc2626;
        color: #fff;
        &:hover { opacity: 0.9; color: #fff; }
    }
    &--sec {
        flex: 1;
        background:  linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
        color: #fff;
        margin: 0 6px;
        &:hover { opacity: 0.92; color: #fff; }
    }
}

.poliza-gmm__row {
    margin-bottom: 24px;
}

.poliza-gmm__row-two {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    align-items: stretch;
}

/* Condiciones generales y Descargar PDF: mismo tamaño que Descargables/Médicos y Hospitales */
.poliza-gmm__row-two .poliza-gmm__btn--primary,
.poliza-gmm__row-two .poliza-gmm__btn--download {
    flex: 1;
    width: auto;
    max-width: none;
    min-height: 52px;
}

.poliza-gmm__hint {
    font-size: 12px;
    color: #04285A;
    margin: 0;
}
</style>
