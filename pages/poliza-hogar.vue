<template>
  <div class="main-container poliza-hogar-page">
    <HeaderAppointment />

    <section class="poliza-hogar section-space--ptb_80">
      <div class="container">
        <nuxt-link to="/portafolio-polizas" class="poliza-hogar__back">
          <i class="fas fa-arrow-left"></i>
          Volver al portafolio
        </nuxt-link>

        <div v-if="!hogar" class="poliza-hogar__empty">
          <p>
            No se encontró la póliza.
            <nuxt-link to="/portafolio-polizas">Ver portafolio</nuxt-link>
          </p>
        </div>

        <div v-else>
          <!-- Banner -->
          <div class="poliza-hogar__banner">
            <div class="poliza-hogar__banner-inner">
              <h1 class="poliza-hogar__banner-title">Póliza de Hogar</h1>
              <a href="tel:8007770911" class="poliza-hogar__banner-contact">
                <i class="fas fa-phone-alt"></i>
                Contáctanos 800 777 09 11
              </a>
            </div>
          </div>

          <!-- Nombre / dirección principal -->
          <div class="poliza-hogar__asegurados">
            <p class="poliza-hogar__asegurado-nombre">
              {{ hogar.descripcionHogar || hogar.concepto || 'Dirección' }}
            </p>
          </div>

          <!-- Cards principales -->
          <div class="poliza-hogar__grid">
            <div class="poliza-hogar__card poliza-hogar__card--dark">
              <div class="poliza-hogar__field">
                <span class="poliza-hogar__label">Compañía</span>
                <span class="poliza-hogar__value">
                  {{ hogar.compania && hogar.compania.nombreCompania ? hogar.compania.nombreCompania : (hogar.ciaNombre || '—') }}
                </span>
              </div>
              <div class="poliza-hogar__field">
                <span class="poliza-hogar__label">Estado</span>
                <span class="poliza-hogar__value">
                  {{ (hogar.status || hogar.estatus || '').toString().toUpperCase() || '—' }}
                </span>
              </div>
            </div>

            <div class="poliza-hogar__card poliza-hogar__card--light">
              <div class="poliza-hogar__field">
                <span class="poliza-hogar__label">No. Póliza</span>
                <span class="poliza-hogar__value poliza-hogar__value--dark">
                  {{ hogar.numPolizaHogar || hogar.numPoliza || hogar.documento || '—' }}
                </span>
              </div>
              <div class="poliza-hogar__field">
                <span class="poliza-hogar__label">Vigencia</span>
                <span class="poliza-hogar__value poliza-hogar__value--dark">
                  {{ hogar.vDesde || formatDate(hogar.polizaDesde) }} al
                  {{ hogar.vHasta || formatDate(hogar.polizaHasta) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Acciones -->
          <div class="poliza-hogar__row-three">
            <button
              type="button"
              class="poliza-hogar__btn poliza-hogar__btn--primary"
              @click="abrirCondiciones"
            >
              Condiciones generales
            </button>
            <a
              v-if="pdfUrl"
              :href="pdfUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="poliza-hogar__btn poliza-hogar__btn--download"
            >
              <i class="fas fa-download"></i>
              Descargar PDF
            </a>
            <a
              :href="linkWhatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="poliza-hogar__btn poliza-hogar__btn--whatsapp"
            >
              <i class="fab fa-whatsapp"></i>
              Asesoría IBS
            </a>
          </div>

          <p class="poliza-hogar__hint">
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

const STORAGE_KEY = 'polizaHogarDetalle';

export default {
  name: 'PolizaHogar',
  components: {
    HeaderAppointment,
    Footer,
    OffCanvasMobileMenu
  },
  data() {
    return {
      hogar: null,
      linkCondiciones: ''
    };
  },
  computed: {
    esExterna() {
      return this.hogar && (this.hogar._origen === 'sicas' || this.hogar.ciaNombre);
    },
    linkWhatsapp() {
      if (!this.hogar || !this.hogar.WPibs) {
        return 'https://wa.me/526141966101?text=Hola%2C%20necesito%20ayuda%20con%20mi%20p%C3%B3liza%20de%20hogar.';
      }
      const num = String(this.hogar.WPibs).replace(/\D/g, '');
      const phone = num.length === 10 ? `52${num}` : num;
      return `https://wa.me/${phone}?text=Hola%2C%20necesito%20ayuda%20con%20mi%20p%C3%B3liza%20de%20hogar.`;
    },
    pdfUrl() {
      if (!this.hogar) return '';
      if (this.hogar.file_url) return this.hogar.file_url;
      if (this.hogar.idDocto) {
        return `https://api-sicas-616002718679.us-central1.run.app/api/api/polizas/pdf/${this.hogar.idDocto}`;
      }
      return '';
    }
  },
  head() {
    return {
      title: 'Póliza de Hogar - IBS Consultores'
    };
  },
  mounted() {
    if (process.client) {
      try {
        const stored = sessionStorage.getItem(STORAGE_KEY);
        if (stored) {
          this.hogar = JSON.parse(stored);
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
      const nombreCompania = this.hogar && (
        this.hogar.compania && this.hogar.compania.nombreCompania
          ? this.hogar.compania.nombreCompania
          : this.hogar.ciaNombre
      );
      if (!this.hogar || !nombreCompania || !this.$db) return;
      try {
        const snap = await this.$db.collection('ImgCompania')
          .where('nombreCompania', '==', nombreCompania)
          .get();
        if (!snap.empty) {
          this.linkCondiciones = snap.docs[0].data().linkCondiciones || '';
        }
      } catch (err) {
        console.error('Error al cargar link condiciones hogar:', err);
      }
    },
    abrirCondiciones() {
      if (this.linkCondiciones) {
        window.open(this.linkCondiciones, '_blank', 'noopener,noreferrer');
      } else {
        alert('El enlace no está disponible.');
      }
    },
    formatDate(date) {
      if (!date) return '—';
      try {
        return new Date(date).toLocaleDateString('es-MX');
      } catch (e) {
        return date;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.poliza-hogar-page {
  background: #f8fafc;
}

.poliza-hogar__back {
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

.poliza-hogar__empty {
  text-align: center;
  padding: 48px 24px;
  background: #fff;
  border-radius: 12px;
  a {
    color: #086AD8;
    font-weight: 600;
  }
}

.poliza-hogar__banner {
  background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
  border-radius: 16px;
  padding: 28px 24px;
  margin-bottom: 24px;
  color: #fff;
}

.poliza-hogar__banner-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.poliza-hogar__banner-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #fff;
}

.poliza-hogar__banner-contact {
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

.poliza-hogar__asegurados {
  margin-bottom: 20px;
  text-align: center;
}

.poliza-hogar__asegurado-nombre {
  font-size: 16px;
  font-weight: 700;
  color: #04285A;
  margin: 0 0 8px 0;
}

.poliza-hogar__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.poliza-hogar__card {
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

.poliza-hogar__field {
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
}

.poliza-hogar__label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 4px;
}

.poliza-hogar__value {
  font-size: 14px;
  font-weight: 600;
  &--dark {
    color: #04285A;
  }
}

.poliza-hogar__card--dark .poliza-hogar__value {
  color: #fff;
}

.poliza-hogar__btn {
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
    width: 100%;
    max-width: 320px;
    &:hover {
      opacity: 0.92;
    }
  }
  &--download {
    background: #fff;
    color: #04285A;
    border: 2px solid #04285A;
    width: 100%;
    max-width: 320px;
    &:hover {
      background: #f1f5f9;
      color: #04285A;
    }
  }
  &--whatsapp {
    display: inline-flex;
    background: #25d366;
    color: #fff;
    &:hover {
      opacity: 0.9;
      color: #fff;
    }
  }
}

.poliza-hogar__row {
  margin-bottom: 24px;
}

.poliza-hogar__row-two {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: stretch;
}

.poliza-hogar__row-two .poliza-hogar__btn--primary,
.poliza-hogar__row-two .poliza-hogar__btn--download {
  flex: 1;
  width: auto;
  max-width: none;
  min-height: 52px;
}

.poliza-hogar__row-three {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: stretch;
}

.poliza-hogar__row-three .poliza-hogar__btn--primary,
.poliza-hogar__row-three .poliza-hogar__btn--download,
.poliza-hogar__row-three .poliza-hogar__btn--whatsapp {
  flex: 1;
  width: auto;
  max-width: none;
  min-height: 52px;
}

.poliza-hogar__hint {
  font-size: 12px;
  color: #04285A;
  margin: 0;
}
</style>

