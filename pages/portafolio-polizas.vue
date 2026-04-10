<template>
    <div class="main-container">
      <HeaderAppointment />
  
      <!-- Banner tipo app: Portafolio de pólizas -->
      <section class="portafolio-banner">
        <div class="container">
          <div class="portafolio-banner__inner">
            <div class="portafolio-banner__logo">
              <img src="/images/logo/logoIBS.png" alt="IBS Consultores" class="portafolio-banner__logo-img">
            </div>
            <div class="portafolio-banner__center">
              <h1 class="portafolio-banner__title">Portafolio de pólizas</h1>
              <a href="tel:8007770911" class="portafolio-banner__contact">
                <i class="fas fa-phone-alt"></i>
                Contáctanos 800 777 09 11
              </a>
            </div>
            <div class="portafolio-banner__actions">
              <button
                type="button"
                class="portafolio-banner__btn-refresh"
                :disabled="isLoading"
                @click="onRefresh"
                title="Actualizar"
              >
                <i class="fas fa-sync-alt" :class="{ 'fa-spin': refreshing }"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Listado de pólizas por tipo -->
      <section class="portafolio-content section-space--ptb_80">
        <div class="container">
          <!-- Cargando -->
          <div v-if="isLoading && !refreshing" class="portafolio-loading">
            <i class="fas fa-spinner fa-spin portafolio-loading__icon"></i>
            <p class="portafolio-loading__text">Cargando pólizas...</p>
          </div>
  
          <!-- Error -->
          <div v-else-if="error" class="portafolio-error">
            <i class="fas fa-exclamation-circle portafolio-error__icon"></i>
            <p class="portafolio-error__texto">{{ error }}</p>
            <button type="button" class="portafolio-empty__btn" @click="fetchData">
              Reintentar
            </button>
          </div>
  
          <!-- Contenido: pólizas -->
          <template v-else-if="!isLoading && !error">
            <!-- Pólizas de Auto -->
            <div v-if="polizas.auto.length" class="portafolio-seccion">
              <h2 class="portafolio-seccion__titulo">Pólizas de Auto</h2>
              <div class="portafolio-cards">
                <div
                  v-for="(poliza, idx) in polizas.auto"
                  :key="'auto-' + (poliza.numPoliza || poliza.documento || idx)"
                  class="portafolio-card portafolio-card--clickable"
                  @click="verPolizaAuto(poliza)"
                >
                  <div class="portafolio-card__icon portafolio-card__icon--auto">
                    <i class="fas fa-car-side"></i>
                  </div>
                  <div class="portafolio-card__texto">
                    {{ poliza.descripcionAuto }} {{ poliza.modelo || '' }}
                    <span v-if="poliza._origen === 'sicas'" class="badge-sicas">SICAS</span>
                  </div>
                  <i class="fas fa-chevron-right portafolio-card__arrow"></i>
                </div>
              </div>
            </div>
  
            <!-- Gastos Médicos Mayores -->
            <div v-if="polizas.gastosMedicos.length" class="portafolio-seccion">
              <h2 class="portafolio-seccion__titulo">Pólizas de Gastos Médicos Mayores</h2>
              <div class="portafolio-cards">
                <div
                  v-for="(poliza, idx) in polizas.gastosMedicos"
                  :key="'gmm-' + (poliza.numPolizaGM || poliza.documento || idx)"
                  class="portafolio-card portafolio-card--clickable"
                  @click="verPolizaGmm(poliza)"
                >
                  <div class="portafolio-card__icon portafolio-card__icon--gmm">
                    <i class="fas fa-file-medical"></i>
                  </div>
                  <div class="portafolio-card__texto">
                    {{ poliza.numPolizaGM || poliza.documento }}
                    <span v-if="poliza._origen === 'sicas'" class="badge-sicas">SICAS</span>
                  </div>
                  <i class="fas fa-chevron-right portafolio-card__arrow"></i>
                </div>
              </div>
            </div>
  
            <!-- Pólizas de Vida -->
            <div v-if="polizas.vida.length" class="portafolio-seccion">
              <h2 class="portafolio-seccion__titulo">Pólizas de Vida</h2>
              <div class="portafolio-cards">
                <div
                  v-for="(poliza, idx) in polizas.vida"
                  :key="'vida-' + (poliza.numPolizaVida || poliza.documento || idx)"
                  class="portafolio-card portafolio-card--clickable"
                  @click="verPolizaVida(poliza)"
                >
                  <div class="portafolio-card__icon portafolio-card__icon--vida">
                    <i class="fas fa-heartbeat"></i>
                  </div>
                  <div class="portafolio-card__texto">
                    {{ (poliza.numPolizaVida === 'AXA_KERALTY_SMTC') ? poliza.certificadoVida : (poliza.numPolizaVida || poliza.documento) }}
                    <span v-if="poliza._origen === 'sicas'" class="badge-sicas">SICAS</span>
                  </div>
                  <i class="fas fa-chevron-right portafolio-card__arrow"></i>
                </div>
              </div>
            </div>
  
            <!-- Pólizas Funerarias -->
            <div v-if="polizas.funerarias.length" class="portafolio-seccion">
              <h2 class="portafolio-seccion__titulo">Pólizas Funerarias</h2>
              <div class="portafolio-cards">
                <div
                  v-for="(poliza, idx) in polizas.funerarias"
                  :key="'fun-' + (poliza.numPolizaFuneraria || idx)"
                  class="portafolio-card portafolio-card--clickable"
                  @click="verPolizaFuneraria(poliza)"
                >
                  <div class="portafolio-card__icon portafolio-card__icon--funeraria">
                    <i class="fas fa-heart"></i>
                  </div>
                  <div class="portafolio-card__texto">
                    {{ poliza.numPolizaFuneraria }}
                  </div>
                  <i class="fas fa-chevron-right portafolio-card__arrow"></i>
                </div>
              </div>
            </div>
  
            <!-- Pólizas de Hogar -->
            <div v-if="polizas.hogar && polizas.hogar.length" class="portafolio-seccion">
              <h2 class="portafolio-seccion__titulo">Pólizas de Hogar</h2>
              <div class="portafolio-cards">
                <div
                  v-for="(poliza, idx) in polizas.hogar"
                  :key="'hogar-' + (poliza.numPolizaHogar || poliza.documento || idx)"
                  class="portafolio-card portafolio-card--clickable"
                  @click="verPolizaHogar(poliza)"
                >
                  <div class="portafolio-card__icon portafolio-card__icon--hogar">
                    <i class="fas fa-home"></i>
                  </div>
                  <div class="portafolio-card__texto">
                    {{ poliza.descripcionHogar || poliza.numPolizaHogar || poliza.documento }}
                    <span v-if="poliza._origen === 'sicas'" class="badge-sicas">SICAS</span>
                  </div>
                  <i class="fas fa-chevron-right portafolio-card__arrow"></i>
                </div>
              </div>
            </div>

            <!-- Pólizas de Accidentes -->
            <div v-if="polizas.accidentes.length" class="portafolio-seccion">
              <h2 class="portafolio-seccion__titulo">Pólizas de accidentes</h2>
              <div class="portafolio-cards">
                <div
                  v-for="(poliza, idx) in polizas.accidentes"
                  :key="'acc-' + (poliza.numPolizaAccidente || idx)"
                  class="portafolio-card portafolio-card--clickable"
                  @click="verPolizaAccidente(poliza)"
                >
                  <div class="portafolio-card__icon portafolio-card__icon--accidentes">
                    <i class="fas fa-user-injured"></i>
                  </div>
                  <div class="portafolio-card__texto">
                    {{ poliza.numPolizaAccidente }}
                  </div>
                  <i class="fas fa-chevron-right portafolio-card__arrow"></i>
                </div>
              </div>
            </div>
  
            <!-- Sin pólizas -->
            <div v-if="!tienePolizas" class="portafolio-empty">
              <i class="fas fa-folder-open portafolio-empty__icon"></i>
              <p class="portafolio-empty__texto">
                No se encontraron pólizas de grupo vigentes para tu RFC. Si crees que esto es un error, por favor consulta a tu agente.
              </p>
              <nuxt-link to="/case-studies" class="portafolio-empty__btn">Ver planes disponibles</nuxt-link>
            </div>
          </template>
        </div>
      </section>
  
      <Footer />
      <OffCanvasMobileMenu />

      <!-- Widget de chat IA -->
      <transition name="chat-fade">
        <div v-if="showChat" class="chat-widget">
          <div class="chat-widget__header">
            <span class="chat-widget__title">IBY tu asistente virtual de IBS Consultores</span>
            <button
              type="button"
              class="chat-widget__close"
              @click="toggleChat"
            >
              ×
            </button>
          </div>

          <div class="chat-widget__body">
            <div
              v-for="(msg, index) in chatMessages"
              :key="index"
              class="chat-widget__message"
              :class="msg.from === 'user' ? 'chat-widget__message--user' : 'chat-widget__message--bot'"
            >
              {{ msg.text }}
            </div>
          </div>

          <div class="chat-widget__footer">
            <input
              v-model="chatInput"
              type="text"
              class="chat-widget__input"
              placeholder="Escribe tu pregunta sobre tus pólizas..."
              @keyup.enter.prevent="sendChatMessage"
            />
            <button
              type="button"
              class="chat-widget__send"
              :disabled="!chatInput.trim() || chatLoading"
              @click="sendChatMessage"
            >
              <span v-if="!chatLoading">Enviar</span>
              <span v-else>...</span>
            </button>
          </div>
        </div>
      </transition>

      <button
        type="button"
        class="chat-widget__toggle"
        @click="toggleChat"
      >
        <i class="fas fa-comments"></i>
      </button>
    </div>
  </template>
  
  <script>
  import HeaderAppointment from '@/components/HeaderAppointment';
  import Footer from '@/components/Footer';
  import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
  
  export default {
    name: 'PortafolioPolizas',
    components: { HeaderAppointment, Footer, OffCanvasMobileMenu },
  
    data() {
      return {
        polizas: {
          auto: [],
          gastosMedicos: [],
          vida: [],
          funerarias: [],
          accidentes: [],
          hogar: []
        },
        isLoading: true,
        error: null,
        refreshing: false,
        showChat: false,
        chatMessages: [
          {
            from: 'bot',
            text: 'Hola, soy IBY tu asistente virtual de IBS Consultores tu mejor agente de seguros y fianzas. ¿En qué puedo ayudarte?'
          }
        ],
        chatInput: '',
        chatLoading: false
      };
    },
  
    computed: {
      tienePolizas() {
        const p = this.polizas;
        return (
          p.auto.length +
          p.gastosMedicos.length +
          p.vida.length +
          p.funerarias.length +
          p.accidentes.length +
          (p.hogar ? p.hogar.length : 0)
        ) > 0;
      }
    },
  
    head() {
      return { title: 'Portafolio de pólizas - IBS Consultores' };
    },
  
    mounted() {
      if (!this.$auth) {
        this.isLoading = false;
        this.error = 'No se pudo conectar al servicio.';
        return;
      }
  
      const user = this.$auth.getCurrentUser && this.$auth.getCurrentUser();
      if (user) {
        this.fetchData();
      } else {
        const unsubscribe = this.$auth.onAuthStateChanged((u) => {
          unsubscribe && unsubscribe();
          if (u) this.fetchData();
          else {
            this.isLoading = false;
            this.error = 'Usuario no autenticado.';
          }
        });
      }
    },
  
    methods: {
      async fetchData() {
        if (!this.$db || !this.$auth) {
          this.error = 'No se pudo conectar al servicio.';
          this.isLoading = false;
          this.refreshing = false;
          return;
        }
  
        const user = this.$auth.getCurrentUser && this.$auth.getCurrentUser();
        if (!user || !user.email) {
          this.error = 'Usuario no autenticado.';
          this.isLoading = false;
          this.refreshing = false;
          return;
        }
  
        this.error = null;
        if (!this.refreshing) this.isLoading = true;
  
        try {
          const db = this.$db;
  
          // 1) Obtener RFC del usuario
          const userSnapshot = await db.collection('Usuarios')
            .where('email', '==', user.email)
            .get();
  
          if (userSnapshot.empty) {
            this.error = 'No se encontraron datos de usuario.';
            this.limpiarPolizas();
            return;
          }
  
          const userData = userSnapshot.docs[0].data();
          const rfc = userData.rfc;
  
          if (!rfc) {
            this.error = 'RFC no encontrado para el usuario.';
            this.limpiarPolizas();
            return;
          }
  
          // 2) Cargar Firestore (local) + SICAS (externo) en paralelo
          const promises = [];
  
          // --- Local ---
          promises.push(
            db.collection('PolizaAutos').where('rfc', '==', rfc).get().then((snap) => {
              const locales = snap.docs.map(doc => ({ ...doc.data(), _origen: 'local' }));
              this.polizas.auto = [...this.polizas.auto, ...locales];
            })
          );
  
          promises.push(
            db.collection('PolizaGM').where('rfc', '==', rfc).get().then((snap) => {
              const locales = snap.docs.map(doc => ({ ...doc.data(), _origen: 'local' }));
              this.polizas.gastosMedicos = [...this.polizas.gastosMedicos, ...locales];
            })
          );
  
          promises.push(
            db.collection('PolizaVida').where('rfc', '==', rfc).get().then((snap) => {
              const locales = snap.docs.map(doc => ({ ...doc.data(), _origen: 'local' }));
              this.polizas.vida = [...this.polizas.vida, ...locales];
            })
          );
  
          promises.push(
            db.collection('PolizaFuneraria').where('rfc', '==', rfc).get().then((snap) => {
              const locales = snap.docs.map(doc => ({ ...doc.data(), _origen: 'local' }));
              this.polizas.funerarias = [...this.polizas.funerarias, ...locales];
            })
          );
  
          promises.push(
            db.collection('PolizaAccidentes').where('rfc', '==', rfc).get().then((snap) => {
              const locales = snap.docs.map(doc => ({ ...doc.data(), _origen: 'local' }));
              this.polizas.accidentes = [...this.polizas.accidentes, ...locales];
            })
          );

          // Hogar (si existe colección en Firebase)
          promises.push(
            db.collection('PolizaHogar').where('rfc', '==', rfc).get().then((snap) => {
              const locales = snap.docs.map(doc => ({ ...doc.data(), _origen: 'local' }));
              this.polizas.hogar = [...this.polizas.hogar, ...locales];
            })
          );
  
          // --- SICAS ---
          promises.push(this.fetchPolizasSicas(rfc));
  
          await Promise.all(promises);
  
          // Filtrar solo pólizas vigentes de hogar (SICAS + locales)
          this.polizas.hogar = this.filtrarVigentesHogar(this.polizas.hogar);

          // Si quieres SICAS primero en el listado:
          this.polizas.auto = this.ordenarPorOrigen(this.polizas.auto);
          this.polizas.gastosMedicos = this.ordenarPorOrigen(this.polizas.gastosMedicos);
          this.polizas.vida = this.ordenarPorOrigen(this.polizas.vida);
          this.polizas.hogar = this.ordenarPorOrigen(this.polizas.hogar);
  
        } catch (err) {
          console.error('Error fetching data:', err);
          this.error = 'No se pudieron cargar las pólizas. Intenta de nuevo más tarde.';
          this.limpiarPolizas();
        } finally {
          this.isLoading = false;
          this.refreshing = false;
        }
      },
  
      // =========================
      // SICAS: consulta /api/polizas
      // =========================
      async fetchPolizasSicas(rfc) {
        try {
          // Base SICAS: usamos SIEMPRE el Cloud Run directo para evitar problemas de proxy/local
          const baseSicas = 'https://api-sicas-616002718679.us-central1.run.app/api';

          const resp = await fetch(
            `${baseSicas}/polizas?rfc=${encodeURIComponent(rfc)}`
          );
  
          if (!resp.ok) {
            console.warn('SICAS: error HTTP', resp.status);
            return;
          }
  
          let data = await resp.json();
          if (!data || data.success === false) {
            console.warn('SICAS: success false', data);
            data = null;
          }

          let autos = [];
          let gmm = [];
          let vida = [];
          let hogar = [];
  
          if (data) {
            autos = Array.isArray(data.autos) ? data.autos : [];
            gmm = Array.isArray(data.gmm) ? data.gmm : [];
            vida = Array.isArray(data.vida) ? data.vida : [];
            hogar = Array.isArray(data.hogar) ? data.hogar : [];
          }

          // Si no llegaron GMM en la respuesta agrupada, probamos la ruta específica /polizas/gmm
          if (!gmm.length) {
            const gmmResp = await fetch(
              `${baseSicas}/polizas/gmm?rfc=${encodeURIComponent(rfc)}`
            );
            if (gmmResp.ok) {
              const gmmData = await gmmResp.json();
              if (gmmData && gmmData.success !== false && Array.isArray(gmmData.gmm)) {
                gmm = gmmData.gmm;
              }
            }
          }

          // Logs de depuración para verificar que sí llegan GMM
          console.log('SICAS autos recibidos:', autos.length);
          console.log('SICAS gmm recibidos:', gmm.length);
          console.log('SICAS vida recibidos:', vida.length);
          console.log('SICAS hogar recibidos:', hogar.length);
  
          // Mapear a formato UI local
          const mappedAutos = autos.map(this.mapSicasAutoToUI);
          const mappedGmm = gmm.map(this.mapSicasGmmToUI);
          const mappedVida = vida.map(this.mapSicasVidaToUI);
          const mappedHogar = hogar.map(this.mapSicasHogarToUI);
  
          // Merge con lo local
          if (mappedAutos.length) this.polizas.auto = [...this.polizas.auto, ...mappedAutos];
          if (mappedGmm.length) this.polizas.gastosMedicos = [...this.polizas.gastosMedicos, ...mappedGmm];
          if (mappedVida.length) this.polizas.vida = [...this.polizas.vida, ...mappedVida];
          if (mappedHogar.length) this.polizas.hogar = [...this.polizas.hogar, ...mappedHogar];

          console.log('polizas.gastosMedicos después de SICAS:', this.polizas.gastosMedicos.length);
  
        } catch (e) {
          console.error('Error al consultar SICAS', e);
        }
      },
  
      // =========================
      // MAPPERS (SICAS -> formato esperado por tu UI)
      // =========================
      mapSicasAutoToUI(p) {
        const concepto = (p.concepto || '').toString();
        const modelo = this.extraerModeloDesdeConcepto(concepto);
  
        return {
          // lo que tu UI ya usa:
          descripcionAuto: concepto || `Póliza ${p.documento || ''}`.trim(),
          modelo: modelo || '',
          numPoliza: p.documento || '',
          concepto: concepto || '',
  
          // extras por si lo ocupas en detalle
          idDocto: p.id,
          ciaNombre: p.ciaNombre,
          subRamo: p.subRamo,
          IDSRamo: p.IDSRamo,
          rfc: p.rfc,
          polizaDesde: p.polizaDesde,
          polizaHasta: p.polizaHasta,
          status: p.status,
          formaPago: p.formaPago,
          primaTotal: p.primaTotal,
  
          _origen: 'sicas',
          _rawSicas: p
        };
      },
  
      mapSicasGmmToUI(p) {
        return {
          numPolizaGM: p.documento || '',
          idDocto: p.id,
          nombre: p.nombre,
          ciaNombre: p.ciaNombre,
          subRamo: p.subRamo,
          IDSRamo: p.IDSRamo,
          rfc: p.rfc,
          polizaDesde: p.polizaDesde,
          polizaHasta: p.polizaHasta,
          status: p.status,
          formaPago: p.formaPago,
          primaTotal: p.primaTotal,
          coaseguro: p.coaseguro,
          deducible: p.deducible,
  
          _origen: 'sicas',
          _rawSicas: p
        };
      },
  
      mapSicasVidaToUI(p) {
        return {
          numPolizaVida: p.documento || '',
          certificadoVida: '',
          idDocto: p.id,
          nombre: p.nombre,
          ciaNombre: p.ciaNombre,
          subRamo: p.subRamo,
          IDSRamo: p.IDSRamo,
          rfc: p.rfc,
          polizaDesde: p.polizaDesde,
          polizaHasta: p.polizaHasta,
          status: p.status,
          formaPago: p.formaPago,
          primaTotal: p.primaTotal,
  
          _origen: 'sicas',
          _rawSicas: p
        };
      },

      mapSicasHogarToUI(p) {
        return {
          numPolizaHogar: p.documento || '',
          idDocto: p.id,
          nombre: p.nombre,
          ciaNombre: p.ciaNombre,
          subRamo: p.subRamo,
          IDSRamo: p.IDSRamo,
          rfc: p.rfc,
          polizaDesde: p.polizaDesde,
          polizaHasta: p.polizaHasta,
          status: p.status,
          formaPago: p.formaPago,
          primaTotal: p.primaTotal,
          descripcionHogar: p.concepto || '',
  
          _origen: 'sicas',
          _rawSicas: p
        };
      },
  
      extraerModeloDesdeConcepto(concepto) {
        const m = concepto.match(/\b(19\d{2}|20\d{2})\b/);
        return m ? m[1] : '';
      },
  
      ordenarPorOrigen(arr) {
        // SICAS primero:
        return [...arr].sort((a, b) => {
          const oa = a._origen === 'sicas' ? 0 : 1;
          const ob = b._origen === 'sicas' ? 0 : 1;
          return oa - ob;
        });
      },

      filtrarVigentesHogar(arr) {
        if (!Array.isArray(arr)) return [];
        const hoy = new Date();

        const parseFecha = (valor) => {
          if (!valor) return null;
          if (valor instanceof Date) return valor;

          const str = String(valor).trim();

          // ISO o similar -> dejar que Date lo interprete
          if (/^\d{4}-\d{2}-\d{2}/.test(str)) {
            const d = new Date(str);
            return Number.isNaN(d.getTime()) ? null : d;
          }

          // Formato dd-mm-yyyy o dd/mm/yyyy (típico de Firebase local)
          const m = str.match(/^(\d{2})[\/-](\d{2})[\/-](\d{4})$/);
          if (m) {
            const [_, dd, mm, yyyy] = m;
            const d = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
            return Number.isNaN(d.getTime()) ? null : d;
          }

          // Último intento genérico
          const d = new Date(str);
          return Number.isNaN(d.getTime()) ? null : d;
        };

        return arr.filter((p) => {
          const status = (p.status || p.estatus || '').toString().toLowerCase().trim();

          // Si el estado existe y NO es vigente/activa, la descartamos
          if (status && status !== 'vigente' && status !== 'activa') {
            return false;
          }

          const fin = p.vHasta || p.polizaHasta;
          if (!fin) return true;

          const fechaFin = parseFecha(fin);
          if (!fechaFin) return true; // Si no se puede parsear, no la descartamos

          // Solo consideramos vigentes las que terminan HOY o después
          return fechaFin >= hoy;
        });
      },
  
      limpiarPolizas() {
        this.polizas.auto = [];
        this.polizas.gastosMedicos = [];
        this.polizas.vida = [];
        this.polizas.funerarias = [];
        this.polizas.accidentes = [];
        this.polizas.hogar = [];
      },
  
      onRefresh() {
        this.refreshing = true;
        this.fetchData();
      },
  
      verPolizaAuto(poliza) {
        if (process.client) {
          try {
            sessionStorage.setItem('polizaAutoDetalle', JSON.stringify(poliza));
            this.$router.push('/poliza-auto');
          } catch (e) {
            console.error(e);
          }
        }
      },
  
      verPolizaGmm(poliza) {
        if (process.client) {
          try {
            sessionStorage.setItem('polizaGMMDetalle', JSON.stringify(poliza));
            this.$router.push('/poliza-gmm');
          } catch (e) {
            console.error(e);
          }
        }
      },
  
      verPolizaVida(poliza) {
        if (process.client) {
          try {
            sessionStorage.setItem('polizaVidaDetalle', JSON.stringify(poliza));
            this.$router.push('/poliza-vida');
          } catch (e) {
            console.error(e);
          }
        }
      },

      verPolizaHogar(poliza) {
        if (process.client) {
          try {
            sessionStorage.setItem('polizaHogarDetalle', JSON.stringify(poliza));
            this.$router.push('/poliza-hogar');
          } catch (e) {
            console.error(e);
          }
        }
      },

      verPolizaFuneraria(poliza) {
        if (process.client) {
          try {
            sessionStorage.setItem('polizaFunerariaDetalle', JSON.stringify(poliza));
            this.$router.push('/poliza-funeraria');
          } catch (e) {
            console.error(e);
          }
        }
      },

      verPolizaAccidente(poliza) {
        if (process.client) {
          try {
            sessionStorage.setItem('polizaAccidenteDetalle', JSON.stringify(poliza));
            this.$router.push('/poliza-accidente');
          } catch (e) {
            console.error(e);
          }
        }
      },

      toggleChat() {
        this.showChat = !this.showChat;
      },

      async sendChatMessage() {
        const texto = this.chatInput.trim();
        if (!texto || this.chatLoading) return;

        const userMessage = { from: 'user', text: texto };
        this.chatMessages.push(userMessage);
        this.chatInput = '';
        this.chatLoading = true;

        try {
          const response = await this.$axios.$post('/api/chat-ia', {
            mensaje: texto
          });

          const respuesta =
            response && (response.respuesta || response.message || response.mensaje)
              ? (response.respuesta || response.message || response.mensaje)
              : 'He recibido tu mensaje. En este momento el asistente está en modo de prueba.';

          this.chatMessages.push({
            from: 'bot',
            text: respuesta
          });
        } catch (error) {
          console.error('Error en el chat IA:', error);
          this.chatMessages.push({
            from: 'bot',
            text: 'Hubo un problema al contactar al asistente. Intenta de nuevo más tarde.'
          });
        } finally {
          this.chatLoading = false;
        }
      }
    }
  };
  </script>
<style lang="scss" scoped>
.portafolio-banner {
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    padding: 32px 0;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20v20h20V20H20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
        opacity: 0.6;
    }
}

.portafolio-banner__inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
}

.portafolio-banner__logo-img {
    height: 56px;
    width: auto;
    filter: brightness(0) invert(1);
}

.portafolio-banner__center {
    flex: 1;
    min-width: 200px;
}

.portafolio-banner__title {
    font-size: 22px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 8px 0;

    @media (min-width: 768px) {
        font-size: 28px;
    }
}

.portafolio-banner__contact {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.95);
    font-size: 14px;
    text-decoration: none;

    i {
        font-size: 14px;
    }
    &:hover {
        color: #ffffff;
    }
}

.portafolio-banner__actions {
    display: flex;
    align-items: center;
    gap: 8px;
}

.portafolio-banner__btn-refresh {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s;
    &:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.35);
    }
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
}

.portafolio-loading,
.portafolio-error {
    text-align: center;
    padding: 48px 24px;
}

.portafolio-loading__icon,
.portafolio-error__icon {
    font-size: 48px;
    color: #086AD8;
    margin-bottom: 16px;
}

.portafolio-error__icon {
    color: #dc3545;
}

.portafolio-loading__text,
.portafolio-error__texto {
    font-size: 16px;
    color: #334155;
    margin-bottom: 16px;
}

.portafolio-error__texto {
    color: #64748b;
}

.portafolio-seccion {
    margin-bottom: 32px;
}

.portafolio-seccion__titulo {
    font-size: 18px;
    font-weight: 700;
    color: #04285A;
    margin-bottom: 16px;
}

.portafolio-cards {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.portafolio-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 47, 166, 0.08);
    border: 1px solid #e2e8f0;

    &--clickable {
        cursor: pointer;
        transition: box-shadow 0.2s, border-color 0.2s;
        &:hover {
            box-shadow: 0 4px 16px rgba(0, 47, 166, 0.12);
            border-color: #086AD8;
        }
    }
}

.portafolio-card__arrow {
    margin-left: auto;
    font-size: 14px;
    color: #94a3b8;
}

.portafolio-card__icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 22px;
    color: #002FA6;

    &--auto {
        background: rgba(8, 106, 216, 0.12);
    }
    &--gmm {
        background: rgba(34, 197, 94, 0.12);
        color: #15803d;
    }
    &--vida {
        background: rgba(139, 92, 246, 0.12);
        color: #6d28d9;
    }
    &--funeraria {
        background: rgba(148, 163, 184, 0.2);
        color: #475569;
    }
    &--accidentes {
        background: rgba(249, 115, 22, 0.12);
        color: #c2410c;
    }
}

.portafolio-card__texto {
    font-size: 15px;
    color: #04285A;
    font-weight: 500;
    line-height: 1.4;
    word-break: break-word;
}

.portafolio-empty {
    text-align: center;
    padding: 48px 24px;
    background: #f8fafc;
    border-radius: 16px;
    border: 1px dashed #cbd5e1;
}

.portafolio-empty__icon {
    font-size: 48px;
    color: #94a3b8;
    margin-bottom: 16px;
}

.portafolio-empty__texto {
    font-size: 16px;
    color: #64748b;
    margin-bottom: 20px;
}

.portafolio-empty__btn {
    display: inline-block;
    padding: 12px 24px;
    background: #086AD8;
    color: #ffffff;
    border-radius: 10px;
    font-weight: 600;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
        opacity: 0.9;
        color: #ffffff;
    }
}

/* =======================
   Widget de chat IA fijo
   ======================= */

.chat-widget__toggle {
    position: fixed;
    left: 20px;
    bottom: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: none;
    background: #086AD8;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.35);
    cursor: pointer;
    z-index: 9999;
    font-size: 22px;

    &:hover {
        background: #0552aa;
    }
}

.chat-widget {
    position: fixed;
    left: 20px;
    bottom: 90px;
    width: 320px;
    max-height: 420px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.55);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 9999;
    border: 1px solid rgba(148, 163, 184, 0.5);
}

.chat-widget__header {
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    color: #ffffff;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.chat-widget__title {
    font-size: 14px;
    font-weight: 600;
}

.chat-widget__close {
    border: none;
    background: transparent;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    padding: 0 4px;
}

.chat-widget__body {
    padding: 10px 12px;
    flex: 1;
    overflow-y: auto;
    background: #f8fafc;
}

.chat-widget__message {
    max-width: 90%;
    padding: 8px 10px;
    border-radius: 12px;
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 6px;
}

.chat-widget__message--bot {
    background: #e2e8f0;
    color: #0f172a;
    align-self: flex-start;
}

.chat-widget__message--user {
    background: #086AD8;
    color: #ffffff;
    align-self: flex-end;
    margin-left: auto;
}

.chat-widget__footer {
    padding: 8px;
    display: flex;
    gap: 6px;
    border-top: 1px solid #e2e8f0;
    background: #ffffff;
}

.chat-widget__input {
    flex: 1;
    border-radius: 999px;
    border: 1px solid #cbd5e1;
    padding: 6px 10px;
    font-size: 13px;
    outline: none;

    &:focus {
        border-color: #086AD8;
        box-shadow: 0 0 0 1px rgba(8, 106, 216, 0.15);
    }
}

.chat-widget__send {
    border-radius: 999px;
    border: none;
    background: #086AD8;
    color: #ffffff;
    padding: 6px 12px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
}

.chat-fade-enter-active,
.chat-fade-leave-active {
    transition: opacity 0.15s ease, transform 0.15s ease;
}

.chat-fade-enter,
.chat-fade-leave-to {
    opacity: 0;
    transform: translateY(12px);
}
</style>
