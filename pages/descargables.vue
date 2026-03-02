<template>
    <div class="main-container">
        <HeaderAppointment />

        <Breadcrumbs2
            :items="breadcrumbNavigation"
            breadcrumbTitle="Descargables"
            subtitle="IBS Consultores tu mejor Agente de Seguros y de Fianzas"
            :hero-size="true"
            bg-image="/images/bg/DESCARGABLES.png"
        />

        <div class="descargables-section section-space--ptb_100">
            <div class="container">
                <!-- Header Section -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-header text-center section-space--mb_60">
                            <h2 class="section-title">Documentos por Compañía</h2>
                            <p class="section-subtitle">
                                Selecciona el documento que deseas descargar y da clic para obtenerlo
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Documents Grid -->
                <div class="row">
                    <!-- AXA - Portal principal -->
                    <div class="col-lg-6 col-md-6 mb-30">
                        <div class="document-card document-card--portal">
                            <div class="document-card-header">
                                <div class="document-logo-wrapper">
                                    <img 
                                        v-if="logoExists('axa')"
                                        src="/images/brand/axa.png" 
                                        alt="AXA"
                                        class="document-logo"
                                        @error="handleImageError"
                                    >
                                    <div v-else class="logo-placeholder">
                                        <span>AXA</span>
                                    </div>
                                </div>
                                <div class="document-card-header__text">
                                    <h3 class="document-title">AXA</h3>
                                    <span class="document-card-header__badge">Portal de descargas</span>
                                </div>
                            </div>
                            <div class="document-card-body">
                                <p class="document-card-desc">Accede al portal de AXA para descargar formatos, informes médicos y solicitudes de Gastos Médicos.</p>
                                <a 
                                    href="https://axa.mx/seguro-gastos-medicos/flexplus" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="document-portal-btn"
                                >
                                    <i class="fas fa-external-link-alt"></i>
                                    <span>Ir a AXA Formatos y Solicitudes</span>
                                </a>
                                <h4 class="documentos-interes-title">Documentos de interés</h4>
                                <ul class="documentos-interes-list">
                                    <li class="documentos-interes-item documentos-interes-item--link">
                                        <i class="fas fa-arrow-right"></i>
                                        <span>Condiciones Generales</span>
                                    </li>
                                    <li class="documentos-interes-item" v-for="(doc, index) in axaDocumentosInteres" :key="index">
                                        <i class="fas fa-download"></i>
                                        <span>{{ doc }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- METLIFE - Portal principal -->
                    <div class="col-lg-6 col-md-6 mb-30">
                        <div class="document-card document-card--portal">
                            <div class="document-card-header">
                                <div class="document-logo-wrapper">
                                    <img 
                                        v-if="logoExists('metlife')"
                                        src="/images/brand/metlife.png" 
                                        alt="METLIFE"
                                        class="document-logo"
                                        @error="handleImageError"
                                    >
                                    <div v-else class="logo-placeholder">
                                        <span>METLIFE</span>
                                    </div>
                                </div>
                                <div class="document-card-header__text">
                                    <h3 class="document-title">METLIFE</h3>
                                    <span class="document-card-header__badge">Portal de trámites</span>
                                </div>
                            </div>
                            <div class="document-card-body">
                                <p class="document-card-desc">Accede al portal de MetLife para realizar trámites de Gastos Médicos: reembolsos, cirugía programada, directorio médico y más.</p>
                                <a 
                                    href="https://www.metlife.com.mx/tramites-y-servicios/tramites-de-seguros-de-gastos-medicos/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="document-portal-btn"
                                >
                                    <i class="fas fa-external-link-alt"></i>
                                    <span>Ir a MetLife Formatos y Solicitudes</span>
                                </a>
                                <h4 class="documentos-interes-title">Trámites, solicitudes y herramientas</h4>
                                <ul class="documentos-interes-list">
                                    <li class="documentos-interes-item" v-for="(tramite, index) in metlifeTramites" :key="index">
                                        <i class="fas fa-file-alt"></i>
                                        <span>{{ tramite }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- GNP - Portal principal -->
                    <div class="col-lg-6 col-md-6 mb-30">
                        <div class="document-card document-card--portal">
                            <div class="document-card-header">
                                <div class="document-logo-wrapper">
                                    <img 
                                        v-if="logoExists('gnp')"
                                        src="/images/brand/gnp.png" 
                                        alt="GNP"
                                        class="document-logo"
                                        @error="handleImageError"
                                    >
                                    <div v-else class="logo-placeholder">
                                        <span>GNP</span>
                                    </div>
                                </div>
                                <div class="document-card-header__text">
                                    <h3 class="document-title">GNP</h3>
                                    <span class="document-card-header__badge">Portal de formatos</span>
                                </div>
                            </div>
                            <div class="document-card-body">
                                <p class="document-card-desc">Accede al portal de GNP para descargar formatos de trámites: reembolsos, información bancaria, avisos de accidente, informes médicos y más.</p>
                                <a 
                                    href="https://www.gnp.com.mx/formatos-para-tramites-soy-cliente-gnp" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="document-portal-btn"
                                >
                                    <i class="fas fa-external-link-alt"></i>
                                    <span>Ir a GNP Formatos y Solicitudes</span>
                                </a>
                                <h4 class="documentos-interes-title">Formatos disponibles</h4>
                                <ul class="documentos-interes-list">
                                    <li class="documentos-interes-item" v-for="(doc, index) in gnpFormatos" :key="index">
                                        <i class="fas fa-file-pdf"></i>
                                        <span>{{ doc }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- ATLAS - Portal principal -->
                    <div class="col-lg-6 col-md-6 mb-30">
                        <div class="document-card document-card--portal">
                            <div class="document-card-header">
                                <div class="document-logo-wrapper">
                                    <img 
                                        v-if="logoExists('atlas')"
                                        src="/images/brand/atlas.png" 
                                        alt="ATLAS"
                                        class="document-logo"
                                        @error="handleImageError"
                                    >
                                    <div v-else class="logo-placeholder">
                                        <span>ATLAS</span>
                                    </div>
                                </div>
                                <div class="document-card-header__text">
                                    <h3 class="document-title">Seguros Atlas</h3>
                                    <span class="document-card-header__badge">Portal de descargas</span>
                                </div>
                            </div>
                            <div class="document-card-body">
                                <p class="document-card-desc">Accede al portal de Atlas para descargar formatos y solicitudes de Gastos Médicos Mayores, Accidentes Personales, Autos, Vida y más.</p>
                                <a 
                                    href="https://www.segurosatlas.com.mx/descargas.html" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class="document-portal-btn"
                                >
                                    <i class="fas fa-external-link-alt"></i>
                                    <span>Ir a Atlas Formatos y Solicitudes</span>
                                </a>
                                <h4 class="documentos-interes-title">Gastos Médicos Mayores</h4>
                                <ul class="documentos-interes-list">
                                    <li class="documentos-interes-item documentos-interes-item--subtitle">
                                        <span>Colectivo</span>
                                    </li>
                                    <li class="documentos-interes-item" v-for="(doc, index) in atlasFormatosColectivo" :key="'c-' + index">
                                        <i class="fas fa-file-pdf"></i>
                                        <span>{{ doc }}</span>
                                    </li>
                                    <li class="documentos-interes-item documentos-interes-item--subtitle">
                                        <span>Individual</span>
                                    </li>
                                    <li class="documentos-interes-item" v-for="(doc, index) in atlasFormatosIndividual" :key="'i-' + index">
                                        <i class="fas fa-file-pdf"></i>
                                        <span>{{ doc }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <TerminosCondicionesButton />

        <Footer />

        <OffCanvasMobileMenu />
    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Breadcrumbs2 from '@/components/Breadcrumbs2';
import TerminosCondicionesButton from '@/components/sections/TerminosCondicionesButton';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    name: 'Descargables',
    components: {
        HeaderAppointment,
        Breadcrumbs2,
        TerminosCondicionesButton,
        Footer,
        OffCanvasMobileMenu
    },
    head() {
        return {
            title: 'Descargables - IBS Consultores'
        }
    },
    data() {
        return {
            breadcrumbNavigation: [
                {
                    text: 'Home',
                    to: "/"
                },
                {
                    text: 'Descargables',
                    active: true
                }
            ],
            axaDocumentosInteres: [
                'Guía de usuario',
                'Tabulador Flex Plus',
                'Tabulador No Flex',
                'Programación de cirugía',
                'Solicitud de reembolso',
                'Solicitud Flex Plus',
                'Solicitud Pago Directo',
                'Coberturas proveedor dental Centauro para Gastos Médicos Individual',
                'Guía de usuario: Plan básico Centauro',
                'Guía de usuario: Plan integral Centauro',
                '¿Cómo usar tu Seguro Dental?',
                'Nuevo proveedor dental Centauro preguntas frecuentes'
            ],
            metlifeTramites: [
                'Reembolso',
                'Cirugía Programada',
                'Directorio Médico',
                'Ingreso Hospitalario (Pago Directo)',
                'Programa Case Management',
                'Tabulador médico',
                'Indemnización: diagnóstico o tratamiento',
                'Renta diaria por hospitalización',
                'Descuentos'
            ],
            gnpFormatos: [
                'Formato Reembolso de accidente y/o enfermedad',
                'Formato único de información bancaria',
                'Cargo a tarjeta de crédito',
                'Ayuda para parto o cesárea',
                'Formato para Traumatología, Ortopedia, Neurocirugía, Cardiología y Cirugía Vascular',
                'Aviso de accidente y/o enfermedad',
                'Cuestionario para la aplicación del beneficio de Cláusula Familiar o Protección Familiar',
                'Aviso de Accidente AP',
                'Consentimiento AP',
                'Declaración de fallecimiento AP',
                'Informe Médico AP',
                'Formato Único de Identificación de Cliente',
                'Guía Segunda y/o Tercera Opinión Médica',
                'Directorio para solicitar 2da y 3ra opinión médica',
                'Solicitud Segunda y/o Tercera opinión médica'
            ],
            atlasFormatosColectivo: [
                'Carta Remesa para el Pago de Reclamaciones (Enero 2022)',
                'Cuestionario Médico (Junio 2018)',
                'Exámen Médico (Marzo 2015)',
                'Formato de Aviso de Accidente o Enfermedad (Enero 2022)',
                'Informe Médico (Enero 2022)',
                'Informe Médico Inglés (Enero 2018)'
            ],
            atlasFormatosIndividual: [
                'Carta Remesa para el Pago de Reclamaciones (Enero 2022)',
                'Exámen Médico (Marzo 2015)',
                'Informe Médico (Enero 2022)',
                'Informe Médico Inglés (Enero 2018)'
            ],
        }
    },
    methods: {
        handleImageError(event) {
            event.target.style.display = 'none';
            const parent = event.target.parentElement;
            if (parent && !parent.querySelector('.logo-placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'logo-placeholder';
                const companyName = event.target.alt || 'Logo';
                placeholder.innerHTML = `<span>${companyName}</span>`;
                parent.appendChild(placeholder);
            }
        },
        logoExists(company) {
            const availableLogos = ['axa', 'metlife', 'gnp', 'atlas'];
            return availableLogos.includes(company.toLowerCase());
        }
    }
};
</script>

<style scoped lang="scss">
.descargables-section {
    background: linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 100%);
    padding: 80px 0;
    min-height: 70vh;

    @media (max-width: 991px) {
        padding: 60px 0;
    }

    @media (max-width: 575px) {
        padding: 40px 0;
    }
}

.section-header {
    margin-bottom: 50px;
}

.section-title {
    font-size: 42px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 15px;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 991px) {
        font-size: 32px;
    }

    @media (max-width: 575px) {
        font-size: 28px;
    }
}

.section-subtitle {
    font-size: 18px;
    color: #666666;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;

    @media (max-width: 575px) {
        font-size: 16px;
    }
}

.document-card {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 2px solid transparent;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        border-color: #086AD8;
    }
}

.document-card-header {
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    padding: 30px 25px;
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
        animation: rotate 20s linear infinite;
    }

    @media (max-width: 575px) {
        padding: 25px 20px;
        gap: 15px;
    }
}

.document-logo-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    padding: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    @media (max-width: 575px) {
        width: 70px;
        height: 70px;
        padding: 8px;
    }
}

.document-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
    transition: transform 0.3s ease;

    .document-card:hover & {
        transform: scale(1.05);
    }
}

.logo-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #086AD8;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    padding: 5px;

    span {
        display: block;
    }

    @media (max-width: 575px) {
        font-size: 16px;
    }
}

.document-card-header__text {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.document-title {
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    @media (max-width: 575px) {
        font-size: 20px;
    }
}

.document-card-header__badge {
    font-size: 12px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.document-card-desc {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
    margin: 0 0 20px;
}

.document-portal-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    padding: 18px 24px;
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    color: #fff !important;
    font-size: 16px;
    font-weight: 700;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(8, 106, 216, 0.35);
    margin-bottom: 24px;

    i { font-size: 18px; }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 28px rgba(8, 106, 216, 0.45);
        color: #fff !important;
    }
}

.documentos-interes-title {
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0 0 16px;
}

.documentos-interes-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid #e8eef5;
}

.documentos-interes-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 0;
    font-size: 14px;
    color: #333;
    line-height: 1.4;
    border-bottom: 1px solid #e8eef5;

    i {
        color: #086AD8;
        font-size: 14px;
        flex-shrink: 0;
    }

    &:last-child {
        border-bottom: none;
    }
}

.documentos-interes-item--link i {
    font-size: 12px;
}

.documentos-interes-item--subtitle {
    font-weight: 700;
    color: #002FA6;
    padding-top: 16px;
    padding-bottom: 8px;

    &:first-of-type { padding-top: 0; }

    i { display: none; }
}

.document-card-body {
    padding: 25px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 575px) {
        padding: 20px;
        gap: 10px;
    }
}

.document-item {
    margin-bottom: 0;
}

.document-link {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 18px;
    background: #F8F9FA;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(8, 106, 216, 0.1), transparent);
        transition: left 0.5s ease;
    }

    &:hover {
        background: linear-gradient(135deg, #E3F2FD 0%, #F8F9FA 100%);
        border-color: #086AD8;
        transform: translateX(5px);
        box-shadow: 0 4px 15px rgba(8, 106, 216, 0.2);

        &::before {
            left: 100%;
        }

        .document-link-icon {
            background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
            color: #ffffff;
            transform: scale(1.1);
        }

        .document-link-text {
            color: #002FA6;
            font-weight: 600;
        }

        .document-link-arrow {
            transform: translateX(5px);
            color: #086AD8;
        }
    }

    @media (max-width: 575px) {
        padding: 12px 15px;
        gap: 12px;
    }
}

.document-link-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #E8E8E8;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #086AD8;
    font-size: 16px;
    flex-shrink: 0;
    transition: all 0.3s ease;

    @media (max-width: 575px) {
        width: 35px;
        height: 35px;
        font-size: 14px;
    }
}

.document-link-text {
    flex: 1;
    font-size: 15px;
    color: #333333;
    line-height: 1.5;
    transition: all 0.3s ease;

    @media (max-width: 575px) {
        font-size: 14px;
    }
}

.document-link-arrow {
    font-size: 18px;
    color: #999999;
    transition: all 0.3s ease;
    flex-shrink: 0;

    @media (max-width: 575px) {
        font-size: 16px;
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

// Responsive adjustments
@media (max-width: 991px) {
    .document-card {
        margin-bottom: 30px;
    }
}

@media (max-width: 767px) {
    .document-card-header {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }

    .document-logo-wrapper {
        margin: 0 auto;
    }
}
</style>
