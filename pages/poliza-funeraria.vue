<template>
  <div class="main-container poliza-funeraria-page">
    <HeaderAppointment />

    <section class="poliza-funeraria section-space--ptb_80">
      <div class="container">
        <nuxt-link to="/portafolio-polizas" class="poliza-funeraria__back">
          <i class="fas fa-arrow-left"></i>
          Volver al portafolio
        </nuxt-link>

        <div v-if="!fun" class="poliza-funeraria__empty">
          <p>
            No se encontró la póliza.
            <nuxt-link to="/portafolio-polizas">Ver portafolio</nuxt-link>
          </p>
        </div>

        <div v-else>
          <!-- Banner -->
          <div class="poliza-funeraria__banner">
            <div class="poliza-funeraria__banner-inner">
              <h1 class="poliza-funeraria__banner-title">Póliza de Gastos Funerarios</h1>
              <a href="tel:8007770911" class="poliza-funeraria__banner-contact">
                <i class="fas fa-phone-alt"></i>
                Contáctanos 800 777 09 11
              </a>
            </div>
          </div>

          <!-- Cards principales -->
          <div class="poliza-funeraria__grid">
            <div class="poliza-funeraria__card poliza-funeraria__card--dark">
              <div class="poliza-funeraria__field">
                <span class="poliza-funeraria__label">Compañía</span>
                <span class="poliza-funeraria__value">
                  {{ fun.compania && fun.compania.nombreCompania ? fun.compania.nombreCompania : '—' }}
                </span>
              </div>
              <div class="poliza-funeraria__field">
                <span class="poliza-funeraria__label">Estado</span>
                <span class="poliza-funeraria__value">
                  {{ (fun.estatus || '').toString().toUpperCase() || '—' }}
                </span>
              </div>
              <div
                v-if="fun.sumaFuneraria"
                class="poliza-funeraria__field"
              >
                <span class="poliza-funeraria__label">Suma asegurada</span>
                <span class="poliza-funeraria__value">
                  {{ fun.sumaFuneraria }}
                </span>
              </div>
            </div>

            <div class="poliza-funeraria__card poliza-funeraria__card--light">
              <div class="poliza-funeraria__field">
                <span class="poliza-funeraria__label">No. Póliza</span>
                <span class="poliza-funeraria__value poliza-funeraria__value--dark">
                  {{ fun.numPolizaFuneraria || '—' }}
                </span>
              </div>
              <div class="poliza-funeraria__field">
                <span class="poliza-funeraria__label">Vigencia</span>
                <span class="poliza-funeraria__value poliza-funeraria__value--dark">
                  {{ fun.vDesde || '—' }} al {{ fun.vHasta || '—' }}
                </span>
              </div>
            </div>
          </div>

          <!-- Acciones -->
          <div class="poliza-funeraria__row-three">
            <button
              type="button"
              class="poliza-funeraria__btn poliza-funeraria__btn--primary"
              @click="abrirCondiciones"
            >
              Condiciones generales
            </button>
            <a
              v-if="pdfUrl"
              :href="pdfUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="poliza-funeraria__btn poliza-funeraria__btn--download"
            >
              <i class="fas fa-download"></i>
              Descargar PDF
            </a>
            <a
              :href="linkWhatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="poliza-funeraria__btn poliza-funeraria__btn--whatsapp"
            >
              <i class="fab fa-whatsapp"></i>
              Asesoría IBS
            </a>
          </div>

          <p class="poliza-funeraria__hint">
            Para más información descarga el documento.
          </p>
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

const STORAGE_KEY = 'polizaFunerariaDetalle';

export default {
  name: 'PolizaFuneraria',
  components: {
    HeaderAppointment,
    Footer,
    OffCanvasMobileMenu
  },
  data() {
    return {
      fun: null,
      linkCondiciones: ''
    };
  },
  computed: {
    linkWhatsapp() {
      if (!this.fun || !this.fun.WPibs) {
        return 'https://wa.me/526141966101?text=Hola%2C%20necesito%20ayuda%20con%20mi%20p%C3%B3liza%20funeraria.';
      }
      const num = String(this.fun.WPibs).replace(/\D/g, '');
      const phone = num.length === 10 ? `52${num}` : num;
      return `https://wa.me/${phone}?text=Hola%2C%20necesito%20ayuda%20con%20mi%20p%C3%B3liza%20funeraria.`;
    },
    pdfUrl() {
      if (!this.fun) return '';
      return this.fun.file_url || '';
    }
  },
  head() {
    return {
      title: 'Póliza Funeraria - IBS Consultores'
    };
  },
  mounted() {
    if (process.client) {
      try {
        const stored = sessionStorage.getItem(STORAGE_KEY);
        if (stored) {
          this.fun = JSON.parse(stored);
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
      const nombreCompania = this.fun && this.fun.compania && this.fun.compania.nombreCompania;
      if (!this.fun || !nombreCompania || !this.$db) return;
      try {
        const snap = await this.$db.collection('ImgCompania')
          .where('nombreCompania', '==', nombreCompania)
          .get();
        if (!snap.empty) {
          this.linkCondiciones = snap.docs[0].data().linkCondiciones || '';
        }
      } catch (err) {
        console.error('Error al cargar link condiciones funeraria:', err);
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
.poliza-funeraria-page {
  background: #f8fafc;
}

.poliza-funeraria__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #04285A;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 24px;
  &:hover {
    opacity: 0.85;
    color: #04285A;
  }
}

.poliza-funeraria__empty {
  text-align: center;
  padding: 48px 24px;
  background: #fff;
  border-radius: 12px;
  a {
    color: #086AD8;
    font-weight: 600;
  }
}

.poliza-funeraria__banner {
  background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
  border-radius: 16px;
  padding: 28px 24px;
  margin-bottom: 24px;
  color: #fff;
}

.poliza-funeraria__banner-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.poliza-funeraria__banner-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #fff;
}

.poliza-funeraria__banner-contact {
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

.poliza-funeraria__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.poliza-funeraria__card {
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

.poliza-funeraria__field {
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
}

.poliza-funeraria__label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 4px;
}

.poliza-funeraria__value {
  font-size: 14px;
  font-weight: 600;
  &--dark {
    color: #04285A;
  }
}

.poliza-funeraria__card--dark .poliza-funeraria__value {
  color: #fff;
}

.poliza-funeraria__btn {
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
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    color: #fff;
  }
  &--download {
    background: #fff;
    color: #04285A;
    border: 2px solid #04285A;
  }
  &--whatsapp {
    background: #25d366;
    color: #fff;
  }
}

.poliza-funeraria__row-three {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: stretch;
}

.poliza-funeraria__row-three .poliza-funeraria__btn {
  flex: 1;
  min-height: 52px;
}

.poliza-funeraria__hint {
  font-size: 12px;
  color: #04285A;
  margin: 0;
}
</style>

<template>
    <div class="main-container poliza-funeraria-page">
        <HeaderAppointment />

        <section class="poliza-funeraria section-space--ptb_80">
            <div class="container">
                <nuxt-link to="/portafolio-polizas" class="poliza-funeraria__back">
                    <i class="fas fa-arrow-left"></i>
                    Volver al portafolio
                </nuxt-link>

                <div v-if="!funeraria" class="poliza-funeraria__empty">
                    <p>No se encontró la póliza. <nuxt-link to="/portafolio-polizas">Ver portafolio</nuxt-link></p>
                </div>

                <template v-else>
                    <!-- Banner tipo app -->
                    <div class="poliza-funeraria__banner">
                        <div class="poliza-funeraria__banner-inner">
                            <h1 class="poliza-funeraria__banner-title">Póliza de Gastos Funerarios</h1>
                            <a href="tel:8007770911" class="poliza-funeraria__banner-contact">
                                <i class="fas fa-phone-alt"></i>
                                Contáctanos 800 777 09 11
                            </a>
                        </div>
                    </div>

                    <!-- Cards: izquierda oscura, derecha blanca -->
                    <div class="poliza-funeraria__grid">
                        <div class="poliza-funeraria__card poliza-funeraria__card--dark">
                            <div class="poliza-funeraria__field">
                                <span class="poliza-funeraria__label">Compañía</span>
                                <span class="poliza-funeraria__value">{{ funeraria.compania && funeraria.compania.nombreCompania ? funeraria.compania.nombreCompania : '—' }}</span>
                            </div>
                            <template v-if="funeraria.numPolizaFuneraria">
                                <div class="poliza-funeraria__field">
                                    <span class="poliza-funeraria__label">Estatus</span>
                                    <span class="poliza-funeraria__value">{{ funeraria.estatus || '—' }}</span>
                                </div>
                                <div class="poliza-funeraria__field">
                                    <span class="poliza-funeraria__label">Suma asegurada</span>
                                    <span class="poliza-funeraria__value">{{ funeraria.sumaFuneraria || '—' }}</span>
                                </div>
                            </template>
                        </div>
                        <div class="poliza-funeraria__card poliza-funeraria__card--light">
                            <template v-if="funeraria.numPolizaFuneraria">
                                <div class="poliza-funeraria__field">
                                    <span class="poliza-funeraria__label">Número de póliza</span>
                                    <span class="poliza-funeraria__value poliza-funeraria__value--dark">{{ funeraria.numPolizaFuneraria || '—' }}</span>
                                </div>
                            </template>
                            <div class="poliza-funeraria__field">
                                <span class="poliza-funeraria__label">Vigencia</span>
                                <span class="poliza-funeraria__value poliza-funeraria__value--dark">{{ funeraria.vDesde || '—' }} al {{ funeraria.vHasta || '—' }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Tres botones en un solo renglón -->
                    <div class="poliza-funeraria__row poliza-funeraria__row--three">
                        <button
                            type="button"
                            class="poliza-funeraria__btn poliza-funeraria__btn--primary"
                            @click="abrirCondiciones"
                        >
                            Condiciones generales
                        </button>
                        <a
                            v-if="funeraria.file_url"
                            :href="funeraria.file_url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="poliza-funeraria__btn poliza-funeraria__btn--download"
                        >
                            <i class="fas fa-download"></i>
                            Descargar PDF
                        </a>
                        <a
                            :href="linkWhatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="poliza-funeraria__btn poliza-funeraria__btn--whatsapp"
                        >
                            <i class="fab fa-whatsapp"></i>
                            Asesoría de IBS Consultores
                        </a>
                    </div>

                    <p class="poliza-funeraria__hint">Para más información descarga el documento.</p>
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

const STORAGE_KEY = 'polizaFunerariaDetalle';
const WHATSAPP_LINK = 'https://wa.me/526141966101?text=Hola';

export default {
    name: 'PolizaFunerariaDetalle',
    components: {
        HeaderAppointment,
        Footer,
        OffCanvasMobileMenu
    },
    data() {
        return {
            funeraria: null,
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
            title: 'Póliza de Gastos Funerarios - IBS Consultores'
        };
    },
    mounted() {
        if (process.client) {
            try {
                const stored = sessionStorage.getItem(STORAGE_KEY);
                if (stored) {
                    this.funeraria = JSON.parse(stored);
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
            if (!this.funeraria || !this.funeraria.compania || !this.funeraria.compania.nombreCompania || !this.$db) {
                return;
            }
            try {
                const snap = await this.$db.collection('ImgCompania')
                    .where('nombreCompania', '==', this.funeraria.compania.nombreCompania)
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
.poliza-funeraria-page {
    background: #f8fafc;
}

.poliza-funeraria__back {
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

.poliza-funeraria__empty {
    text-align: center;
    padding: 48px 24px;
    background: #fff;
    border-radius: 12px;
    a {
        color: #086AD8;
        font-weight: 600;
    }
}

.poliza-funeraria__banner {
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    border-radius: 16px;
    padding: 28px 24px;
    margin-bottom: 24px;
    color: #fff;
}

.poliza-funeraria__banner-inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.poliza-funeraria__banner-title {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.poliza-funeraria__banner-contact {
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

.poliza-funeraria__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
}

.poliza-funeraria__card {
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

.poliza-funeraria__field {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.poliza-funeraria__label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 4px;
    opacity: 0.9;
}

.poliza-funeraria__value {
    font-size: 14px;
    font-weight: 600;

    &--dark {
        color: #04285A;
    }
}

.poliza-funeraria__card--dark .poliza-funeraria__value {
    color: #fff;
}

.poliza-funeraria__row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 16px;
}

.poliza-funeraria__row--three {
    display: flex;
    gap: 12px;
    align-items: stretch;
    flex-wrap: wrap;
}

.poliza-funeraria__row--three .poliza-funeraria__btn {
    flex: 1;
    min-width: 0;
    min-height: 52px;
}

@media (max-width: 767px) {
    .poliza-funeraria__row--three {
        flex-direction: column;
    }
    .poliza-funeraria__row--three .poliza-funeraria__btn {
        width: 100%;
    }
}

.poliza-funeraria__btn {
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

.poliza-funeraria__hint {
    font-size: 12px;
    color: #04285A;
    margin: 16px 0 0 0;
    text-align: center;
}
</style>
