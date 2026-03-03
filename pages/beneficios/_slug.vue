<template>
    <div class="main-container beneficio-page">
        <HeaderAppointment />
        <section class="beneficio-section section-space--ptb_80" :class="sectionClass">
            <div class="container">
                <nuxt-link to="/portal" class="beneficio-page__back">
                    <i class="fas fa-arrow-left"></i>
                    Volver al portal
                </nuxt-link>

                <!-- Vista especial para Christus Muguerza -->
                <div v-if="isChristus" class="beneficio-christus-card">
                    <div class="beneficio-christus__image-wrap">
                        <img
                            src="/images/bg/foto.jpg"
                            alt="Christus Muguerza - Beneficios"
                            class="beneficio-christus__image"
                        >
                    </div>
                    <div class="beneficio-christus__buttons beneficio-christus__buttons--row">
                        <a
                            href="https://www.christusmuguerza.com.mx/activa-socio-christus?pin=8356&flgphone=Y"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="beneficio-christus__btn"
                        >
                            <span>Solicitar membresía</span>
                            <i class="far fa-hand-pointer beneficio-christus__icon"></i>
                        </a>
                        <a
                            href="https://info.christus.mx/beneficios-socio-christus"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="beneficio-christus__btn"
                        >
                            <span>Nuestros beneficios</span>
                            <i class="far fa-hand-pointer beneficio-christus__icon"></i>
                        </a>
                        <a
                            href="https://christusmuguerza.com.mx/tienda?s=directorio+medico"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="beneficio-christus__btn"
                        >
                            <span>Directorio médico</span>
                            <i class="far fa-hand-pointer beneficio-christus__icon"></i>
                        </a>
                    </div>
                </div>

                <!-- Vista especial para Sierra Alta (mismo estilo que Christus) -->
                <div v-else-if="isSierraAlta" class="beneficio-sierra-card">
                    <div class="beneficio-sierra__image-wrap">
                        <img
                            src="/images/bg/foto.jpg"
                            alt="Sierra Alta - Beneficios"
                            class="beneficio-sierra__image"
                        >
                    </div>
                    <div class="beneficio-sierra__buttons beneficio-sierra__buttons--row">
                        <a
                            href="https://www.sierraaltamedicalcity.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="beneficio-sierra__btn beneficio-sierra__btn--icon"
                        >
                            <i class="fas fa-globe beneficio-sierra__icon"></i>
                        </a>
                        <a
                            href="https://drive.google.com/drive/folders/1TT0ByiHkX1hV2JtBigTBkuPSTrz2C7iH?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="beneficio-sierra__btn beneficio-sierra__btn--text"
                        >
                            <span>Ver información</span>
                        </a>
                    </div>
                </div>

                <!-- Vista especial para Hospital Ángeles Chihuahua (mismo estilo que Christus) -->
                <div v-else-if="isHospitalAngeles" class="beneficio-angeles-card">
                    <div class="beneficio-angeles__image-wrap">
                        <img
                            src="/images/bg/foto.jpg"
                            alt="Hospital Ángeles Chihuahua - Beneficios"
                            class="beneficio-angeles__image"
                        >
                    </div>
                    <div class="beneficio-angeles__buttons beneficio-angeles__buttons--row">
                        <a
                            href="https://angeleschihuahua.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="beneficio-angeles__btn beneficio-angeles__btn--icon"
                        >
                            <i class="fas fa-globe beneficio-angeles__icon"></i>
                        </a>
                        <a
                            href="https://drive.google.com/drive/folders/1mcEEoOsY1D9uv5mNmTShfHml_BXAFLOO?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="beneficio-angeles__btn beneficio-angeles__btn--text"
                        >
                            <span>Ver información</span>
                        </a>
                    </div>
                </div>

                <!-- Vista especial para Laboratorio Médico de Chopo (mismo estilo que Sierra/Ángeles) -->
                <div v-else-if="isChopo" class="beneficio-chopo-card">
                    <div class="beneficio-chopo__image-wrap">
                        <img
                            src="/images/bg/foto.jpg"
                            alt="Laboratorio Médico de Chopo - Beneficios"
                            class="beneficio-chopo__image"
                        >
                    </div>
                    <p class="beneficio-chopo__convenio">
                        Número de convenio: <strong>109655</strong>
                    </p>
                    <div class="beneficio-chopo__buttons beneficio-chopo__buttons--row">
                        <a
                            href="https://www.chopo.com.mx/programa-vida-sana"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="beneficio-chopo__btn beneficio-chopo__btn--icon"
                        >
                            <i class="fas fa-globe beneficio-chopo__icon"></i>
                        </a>
                        <a
                            href="https://drive.google.com/drive/folders/1bnA7XctjFropv_lErZ6e7x8gX97oAQk7?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="beneficio-chopo__btn beneficio-chopo__btn--text"
                        >
                            <span>Ver información</span>
                        </a>
                    </div>
                </div>

                <!-- Vista especial para Star Médica (mismo estilo que Sierra/Ángeles) -->
                <div v-else-if="isStarMedica" class="beneficio-star-card">
                    <div class="beneficio-star__image-wrap">
                        <img
                            src="/images/bg/foto.jpg"
                            alt="Star Médica - Beneficios"
                            class="beneficio-star__image"
                        >
                    </div>
                    <div class="beneficio-star__buttons beneficio-star__buttons--row">
                        <a
                            href="https://www.starmedica.com/s/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="beneficio-star__btn beneficio-star__btn--icon"
                        >
                            <i class="fas fa-globe beneficio-star__icon"></i>
                        </a>
                        <a
                            href="https://drive.google.com/drive/folders/1DOXcF_hK3VgB3BUbdeywSGU3S36GuQqI?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="beneficio-star__btn beneficio-star__btn--text"
                        >
                            <span>Ver información</span>
                        </a>
                    </div>
                </div>

                <!-- Vista genérica para otros beneficios -->
                <div v-else class="beneficio-page__card">
                    <h1 class="beneficio-page__title">{{ titulo }}</h1>
                    <p class="beneficio-page__lead">
                        Contenido de esta página en construcción. Aquí podrás ver los beneficios y convenios con {{ titulo }}.
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

const NOMBRES = {
    'christus-muguerza': 'Christus Muguerza',
    'hospital-angeles-chihuahua': 'Hospital Ángeles Chihuahua',
    'laboratorio-chopo': 'Laboratorio Médico de Chopo',
    'sierra-alta': 'Sierra Alta',
    'star-medica': 'Star Médica'
};

export default {
    name: 'BeneficioSlug',
    components: {
        HeaderAppointment,
        Footer,
        OffCanvasMobileMenu
    },
    computed: {
        slug() {
            return this.$route.params.slug || '';
        },
        titulo() {
            return NOMBRES[this.slug] || this.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        },
        isChristus() {
            return this.slug === 'christus-muguerza';
        },
        isSierraAlta() {
            return this.slug === 'sierra-alta';
        },
        isHospitalAngeles() {
            return this.slug === 'hospital-angeles-chihuahua';
        },
        isChopo() {
            return this.slug === 'laboratorio-chopo';
        },
        isStarMedica() {
            return this.slug === 'star-medica';
        },
        sectionClass() {
            if (this.isChristus) return 'beneficio-section--christus';
            if (this.isSierraAlta) return 'beneficio-section--sierra';
            if (this.isHospitalAngeles) return 'beneficio-section--angeles';
            if (this.isChopo) return 'beneficio-section--chopo';
            if (this.isStarMedica) return 'beneficio-section--star';
            return '';
        }
    },
    head() {
        return {
            title: `${this.titulo} - Beneficios - IBS Consultores`
        };
    }
};
</script>

<style lang="scss" scoped>
.beneficio-section--christus {
    background: linear-gradient(180deg, #f6f0ff 0%, #ffffff 55%);
}

.beneficio-section--sierra {
    background: linear-gradient(180deg, #ebfdfc 0%, #ffffff 55%);
}

.beneficio-section--angeles {
    background: linear-gradient(180deg, #edf3ff 0%, #ffffff 55%);
}

.beneficio-section--chopo {
    background: linear-gradient(180deg, #e3f0ff 0%, #ffffff 55%);
}

.beneficio-section--star {
    background: linear-gradient(180deg, #f3f4f5 0%, #ffffff 55%);
}

.beneficio-page__back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #002FA6;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 24px;
    font-size: 14px;

    &:hover {
        color: #086AD8;
    }
}

.beneficio-page__card {
    background: #fff;
    border-radius: 16px;
    padding: 40px;
    box-shadow: 0 4px 24px rgba(0, 47, 166, 0.08);
    max-width: 640px;
}

.beneficio-page__title {
    font-size: 28px;
    font-weight: 700;
    color: #1e293b;
    margin: 0 0 16px;
}

.beneficio-page__lead {
    font-size: 16px;
    color: #64748b;
    line-height: 1.6;
    margin: 0;
}

.beneficio-christus-card {
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    padding: 0 0 32px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.beneficio-christus__image-wrap {
    margin-bottom: 24px;
    line-height: 0;
}

.beneficio-christus__image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    max-height: 320px;
}

.beneficio-christus__buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 24px;

    &--row {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 12px;
        justify-content: center;
    }
}

.beneficio-christus__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 20px;
    border-radius: 10px;
    background: #582c83;
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 14px rgba(88, 44, 131, 0.35);
    transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
    flex: 1;
    min-width: 180px;

    span {
        text-transform: uppercase;
        letter-spacing: 0.3px;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(88, 44, 131, 0.45);
        opacity: 0.96;
        color: #ffffff;
    }
}

.beneficio-christus__icon {
    font-size: 16px;
}

@media (max-width: 767px) {
    .beneficio-christus__buttons--row {
        flex-direction: column;
    }

    .beneficio-christus__btn {
        min-width: 100%;
    }
}

/* Sierra Alta: mismo estilo que Christus, color teal #009da2 */
.beneficio-sierra-card {
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    padding: 0 0 32px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.beneficio-sierra__image-wrap {
    margin-bottom: 24px;
    line-height: 0;
}

.beneficio-sierra__image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    max-height: 320px;
}

.beneficio-sierra__buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    padding: 0 24px;
    align-items: stretch;

    &--row {
        justify-content: center;
    }
}

.beneficio-sierra__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 20px;
    border-radius: 10px;
    background: #ffffff;
    color: #009da2;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 14px rgba(0, 157, 162, 0.35);
    border: 1px solid rgba(0, 157, 162, 0.25);
    transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 157, 162, 0.45);
        opacity: 0.95;
        color: #009da2;
    }

    &--icon {
        flex: 1;
        min-width: 56px;
        max-width: 80px;
    }

    &--text {
        flex: 3;
        min-width: 180px;
    }
}

.beneficio-sierra__icon {
    font-size: 20px;
}

@media (max-width: 767px) {
    .beneficio-sierra__buttons--row {
        flex-direction: row;
    }

    .beneficio-sierra__btn--icon {
        max-width: none;
        flex: 1;
    }

    .beneficio-sierra__btn--text {
        flex: 2;
        min-width: 0;
    }
}

/* Hospital Ángeles Chihuahua: mismo estilo, color azul #0038a8 */
.beneficio-angeles-card {
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    padding: 0 0 32px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.beneficio-angeles__image-wrap {
    margin-bottom: 24px;
    line-height: 0;
}

.beneficio-angeles__image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    max-height: 320px;
}

.beneficio-angeles__buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    padding: 0 24px;
    align-items: stretch;

    &--row {
        justify-content: center;
    }
}

.beneficio-angeles__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 20px;
    border-radius: 10px;
    background: #ffffff;
    color: #0038a8;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 14px rgba(0, 56, 168, 0.35);
    border: 1px solid rgba(0, 56, 168, 0.25);
    transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 56, 168, 0.45);
        opacity: 0.95;
        color: #0038a8;
    }

    &--icon {
        flex: 1;
        min-width: 56px;
        max-width: 80px;
    }

    &--text {
        flex: 3;
        min-width: 180px;
    }
}

.beneficio-angeles__icon {
    font-size: 20px;
}

@media (max-width: 767px) {
    .beneficio-angeles__btn--icon {
        max-width: none;
        flex: 1;
    }

    .beneficio-angeles__btn--text {
        flex: 2;
        min-width: 0;
    }
}

/* Laboratorio Médico de Chopo: color azul #0661fb */
.beneficio-chopo-card {
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    padding: 0 0 32px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.beneficio-chopo__image-wrap {
    margin-bottom: 16px;
    line-height: 0;
}

.beneficio-chopo__image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    max-height: 320px;
}

.beneficio-chopo__convenio {
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 16px;
}

.beneficio-chopo__buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    padding: 0 24px;
    align-items: stretch;

    &--row {
        justify-content: center;
    }
}

.beneficio-chopo__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 20px;
    border-radius: 10px;
    background: #ffffff;
    color: #0661fb;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 14px rgba(6, 97, 251, 0.35);
    border: 1px solid rgba(6, 97, 251, 0.25);
    transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(6, 97, 251, 0.45);
        opacity: 0.95;
        color: #0661fb;
    }

    &--icon {
        flex: 1;
        min-width: 56px;
        max-width: 80px;
    }

    &--text {
        flex: 3;
        min-width: 180px;
    }
}

.beneficio-chopo__icon {
    font-size: 20px;
}

@media (max-width: 767px) {
    .beneficio-chopo__btn--icon {
        max-width: none;
        flex: 1;
    }

    .beneficio-chopo__btn--text {
        flex: 2;
        min-width: 0;
    }
}

/* Star Médica: color gris institucional #acadad */
.beneficio-star-card {
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    padding: 0 0 32px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.beneficio-star__image-wrap {
    margin-bottom: 24px;
    line-height: 0;
}

.beneficio-star__image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    max-height: 320px;
}

.beneficio-star__buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    padding: 0 24px;
    align-items: stretch;

    &--row {
        justify-content: center;
    }
}

.beneficio-star__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 20px;
    border-radius: 10px;
    background: #ffffff;
    color: #626667;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 14px rgba(172, 173, 173, 0.45);
    border: 1px solid rgba(172, 173, 173, 0.4);
    transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(172, 173, 173, 0.7);
        opacity: 0.95;
        color: #626667;
    }

    &--icon {
        flex: 1;
        min-width: 56px;
        max-width: 80px;
    }

    &--text {
        flex: 3;
        min-width: 180px;
    }
}

.beneficio-star__icon {
    font-size: 20px;
}

@media (max-width: 767px) {
    .beneficio-star__btn--icon {
        max-width: none;
        flex: 1;
    }

    .beneficio-star__btn--text {
        flex: 2;
        min-width: 0;
    }
}
</style>
