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
                                :key="'auto-' + (poliza.numPoliza || idx)"
                                class="portafolio-card portafolio-card--clickable"
                                @click="verPolizaAuto(poliza)"
                            >
                                <div class="portafolio-card__icon portafolio-card__icon--auto">
                                    <i class="fas fa-car-side"></i>
                                </div>
                                <div class="portafolio-card__texto">
                                    {{ poliza.descripcionAuto }} {{ poliza.modelo || '' }}
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
                                :key="'gmm-' + (poliza.numPolizaGM || idx)"
                                class="portafolio-card portafolio-card--clickable"
                                @click="verPolizaGmm(poliza)"
                            >
                                <div class="portafolio-card__icon portafolio-card__icon--gmm">
                                    <i class="fas fa-file-medical"></i>
                                </div>
                                <div class="portafolio-card__texto">
                                    {{ poliza.numPolizaGM }}
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
                                :key="'vida-' + (poliza.numPolizaVida || idx)"
                                class="portafolio-card portafolio-card--clickable"
                                @click="verPolizaVida(poliza)"
                            >
                                <div class="portafolio-card__icon portafolio-card__icon--vida">
                                    <i class="fas fa-heartbeat"></i>
                                </div>
                                <div class="portafolio-card__texto">
                                    {{ poliza.numPolizaVida === 'AXA_KERALTY_SMTC' ? poliza.certificadoVida : poliza.numPolizaVida }}
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
    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    name: 'PortafolioPolizas',
    components: {
        HeaderAppointment,
        Footer,
        OffCanvasMobileMenu
    },
    data() {
        return {
            polizas: {
                auto: [],
                gastosMedicos: [],
                vida: [],
                funerarias: [],
                accidentes: []
            },
            isLoading: true,
            error: null,
            refreshing: false
        };
    },
    computed: {
        tienePolizas() {
            const p = this.polizas;
            return p.auto.length + p.gastosMedicos.length + p.vida.length +
                p.funerarias.length + p.accidentes.length > 0;
        }
    },
    head() {
        return {
            title: 'Portafolio de pólizas - IBS Consultores'
        };
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
            if (!this.refreshing) {
                this.isLoading = true;
            }
            try {
                const db = this.$db;
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
                const promises = [];
                // Pólizas almacenadas en IBS (Firebase)
                promises.push(
                    db.collection('PolizaAutos').where('rfc', '==', rfc).get()
                        .then((snap) => {
                            this.polizas.auto = snap.docs.map(doc => doc.data());
                        })
                );
                promises.push(
                    db.collection('PolizaGM').where('rfc', '==', rfc).get()
                        .then((snap) => {
                            this.polizas.gastosMedicos = snap.docs.map(doc => doc.data());
                        })
                );
                promises.push(
                    db.collection('PolizaVida').where('rfc', '==', rfc).get()
                        .then((snap) => {
                            this.polizas.vida = snap.docs.map(doc => doc.data());
                        })
                );
                promises.push(
                    db.collection('PolizaFuneraria').where('rfc', '==', rfc).get()
                        .then((snap) => {
                            this.polizas.funerarias = snap.docs.map(doc => doc.data());
                        })
                );
                promises.push(
                    db.collection('PolizaAccidentes').where('rfc', '==', rfc).get()
                        .then((snap) => {
                            this.polizas.accidentes = snap.docs.map(doc => doc.data());
                        })
                );
                await Promise.all(promises);

                // Pólizas en otros sistemas (vía API externa)
                await this.fetchExternalPolizas(rfc);
            } catch (err) {
                console.error('Error fetching data:', err);
                this.error = 'No se pudieron cargar las pólizas. Intenta de nuevo más tarde.';
                this.limpiarPolizas();
            } finally {
                this.isLoading = false;
                this.refreshing = false;
            }
        },
        async fetchExternalPolizas(rfc) {
            // Si no existe cliente HTTP configurado, simplemente salimos.
            if (!this.$axios) return;
            try {
                // Ajusta la URL y los parámetros a tu API real.
                const respuesta = await this.$axios.$get('/api/polizas-externas', {
                    params: { rfc }
                });

                if (!respuesta || typeof respuesta !== 'object') return;

                const tipos = ['auto', 'gastosMedicos', 'vida', 'funerarias', 'accidentes'];

                tipos.forEach((tipo) => {
                    if (Array.isArray(respuesta[tipo]) && respuesta[tipo].length) {
                        // Concatenamos las pólizas externas con las de IBS.
                        this.polizas[tipo] = [
                            ...this.polizas[tipo],
                            // Opcional: marcamos origen para poder diferenciar en el futuro.
                            ...respuesta[tipo].map((p) => ({
                                ...p,
                                _origen: p._origen || 'externo'
                            }))
                        ];
                    }
                });
            } catch (e) {
                // Si falla la API externa, no rompemos la vista; solo registramos el error.
                // eslint-disable-next-line no-console
                console.error('Error al cargar pólizas externas', e);
            }
        },
        limpiarPolizas() {
            this.polizas.auto = [];
            this.polizas.gastosMedicos = [];
            this.polizas.vida = [];
            this.polizas.funerarias = [];
            this.polizas.accidentes = [];
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
</style>
