<template>
    <div class="tipos-seguros-section section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-header text-center section-space--mb_60">
                        <h2 class="section-title">SEGUROS</h2>
                        <p class="section-subtitle">
                            Contamos con seguros diseñados específicamente para cada circunstancia que nos presente en la vida
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tipos-seguros-carousel">
                        <swiper :options="swiperOption">
                            <div class="swiper-slide" v-for="seguro in segurosData" :key="seguro.id">
                                <div class="seguro-card" @click="openModal(seguro)">
                                    <div class="seguro-icon-wrapper">
                                        <i :class="seguro.icon"></i>
                                    </div>
                                    <h4 class="seguro-name">{{ seguro.name }}</h4>
                                </div>
                            </div>
                        </swiper>
                        <div class="swiper-pagination swiper-pagination-tipos"></div>
                        <div class="swiper-button-prev swiper-button-prev-tipos"></div>
                        <div class="swiper-button-next swiper-button-next-tipos"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <InsuranceModal 
            :show="showModal" 
            :seguroData="selectedSeguro"
            @close="closeModal"
        />
    </div>
</template>

<script>
import caseStudiesData from '../../data/caseStidies.json';
import InsuranceModal from '@/components/InsuranceModal';

export default {
    name: 'TiposSegurosSection',
    components: {
        InsuranceModal
    },
    data() {
        return {
            showModal: false,
            selectedSeguro: {},
            swiperOption: {
                loop: true,
                speed: 600,
                spaceBetween: 24,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false
                },
                navigation: {
                    nextEl: '.swiper-button-next-tipos',
                    prevEl: '.swiper-button-prev-tipos'
                },
                pagination: {
                    el: '.swiper-pagination-tipos',
                    type: 'bullets',
                    clickable: true
                },
                breakpoints: {
                    1200: { slidesPerView: 4 },
                    992: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    320: { slidesPerView: 1 }
                }
            },
            segurosData: [
                { 
                    id: 1, 
                    name: 'Vida', 
                    icon: 'fas fa-heart',
                    mapKey: 'Vida'
                },
                { 
                    id: 2, 
                    name: 'Gastos Médicos', 
                    icon: 'fas fa-heartbeat',
                    mapKey: 'Gastos Médicos'
                },
                { 
                    id: 3, 
                    name: 'Flotillas', 
                    icon: 'fas fa-car',
                    mapKey: 'Colectivos'
                },
                { 
                    id: 4, 
                    name: 'Accidentes', 
                    icon: 'fas fa-user-injured',
                    mapKey: null
                },
                { 
                    id: 5, 
                    name: 'Empresarial', 
                    icon: 'fas fa-briefcase',
                    mapKey: 'Empresarial'
                },
                { 
                    id: 6, 
                    name: 'Ciberseguridad para empresas', 
                    icon: 'fas fa-shield-alt',
                    mapKey: null
                },
                { 
                    id: 7, 
                    name: 'Retiro', 
                    icon: 'fas fa-piggy-bank',
                    mapKey: null
                }
            ],
            productsData: caseStudiesData.projects
        }
    },
    methods: {
        openModal(seguro) {
            // Buscar el producto correspondiente en el JSON
            let productData = null;
            
            if (seguro.mapKey) {
                productData = this.productsData.find(p => p.heading === seguro.mapKey);
            }
            
            // Si no se encuentra, usar datos genéricos
            if (!productData) {
                productData = this.getGenericDescription(seguro);
            }
            
            this.selectedSeguro = {
                ...productData,
                name: seguro.name
            };
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.selectedSeguro = {};
        },
        getGenericDescription(seguro) {
            const genericDescriptions = {
                'Accidentes': {
                    heading: 'Accidentes',
                    desc: 'Los seguros de accidentes te protegen ante cualquier eventualidad que pueda afectar tu integridad física, proporcionándote tranquilidad y seguridad financiera.',
                    acordDesc: 'Este producto está diseñado para protegerte económicamente en caso de sufrir un accidente que te impida trabajar o realizar tus actividades normales.',
                    acord1: 'Protección económica ante incapacidad temporal o permanente.',
                    acord2: 'Cobertura de gastos médicos por accidente.',
                    acord3: 'Indemnización por muerte accidental.',
                    acord4: 'Asistencia médica inmediata.',
                    acord5: 'Tranquilidad financiera para ti y tu familia.'
                },
                'Ciberseguridad para empresas': {
                    heading: 'Ciberseguridad para empresas',
                    desc: 'Los seguros de ciberseguridad protegen a tu empresa ante amenazas digitales, pérdida de datos y ataques cibernéticos que puedan comprometer tu información y operaciones.',
                    acordDesc: 'Este producto está diseñado para proteger a tu empresa de los riesgos cibernéticos que pueden afectar tu negocio, incluyendo robo de información, ataques de malware, y violaciones de datos.',
                    acord1: 'Protección contra ataques cibernéticos.',
                    acord2: 'Cobertura por pérdida de datos.',
                    acord3: 'Asistencia técnica especializada.',
                    acord4: 'Protección de la reputación de tu empresa.',
                    acord5: 'Tranquilidad en el entorno digital.'
                },
                'Retiro': {
                    heading: 'Retiro',
                    desc: 'Los seguros de retiro te permiten planificar tu futuro financiero, asegurando que tengas los recursos necesarios para disfrutar de tu jubilación con tranquilidad.',
                    acordDesc: 'Este producto está diseñado para ayudarte a construir un patrimonio que te permita mantener tu nivel de vida durante tu retiro, ofreciendo diferentes esquemas de ahorro y protección.',
                    acord1: 'Ahorro sistemático para tu retiro.',
                    acord2: 'Protección financiera a largo plazo.',
                    acord3: 'Diversificación de inversiones.',
                    acord4: 'Beneficios fiscales.',
                    acord5: 'Tranquilidad financiera para tu futuro.'
                }
            };
            
            return genericDescriptions[seguro.name] || {
                heading: seguro.name,
                desc: 'Información detallada sobre este producto de seguro disponible.',
                acordDesc: 'Este producto está diseñado para brindarte la protección que necesitas.'
            };
        }
    }
};
</script>

<style scoped lang="scss">
.tipos-seguros-section {
    background: #ffffff;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        height: 300px;
        background: linear-gradient(135deg, rgba(0, 47, 166, 0.1) 0%, rgba(8, 106, 216, 0.05) 100%);
        border-radius: 0 0 100% 0;
        z-index: 0;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 300px;
        height: 300px;
        background: linear-gradient(135deg, rgba(8, 106, 216, 0.05) 0%, rgba(0, 47, 166, 0.1) 100%);
        border-radius: 100% 0 0 0;
        z-index: 0;
    }
}

.section-header {
    position: relative;
    z-index: 1;
}

.section-title {
    font-size: 42px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 15px;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 2px;

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
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;

    @media (max-width: 575px) {
        font-size: 16px;
    }
}

.tipos-seguros-carousel {
    position: relative;
    padding: 0 50px 50px;

    @media (max-width: 767px) {
        padding: 0 40px 45px;
    }
}

.tipos-seguros-carousel ::v-deep .swiper-slide {
    height: auto;
    padding: 5px;
}

.tipos-seguros-carousel ::v-deep .swiper-button-prev-tipos,
.tipos-seguros-carousel ::v-deep .swiper-button-next-tipos {
    color: #086AD8;
}

.tipos-seguros-carousel ::v-deep .swiper-pagination-tipos .swiper-pagination-bullet-active {
    background: #086AD8;
}

.seguro-card {
    background: #F8F9FA;
    border-radius: 20px;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid transparent;
    position: relative;
    z-index: 1;
    cursor: pointer;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        border-color: #086AD8;
        background: #ffffff;
    }

    @media (max-width: 575px) {
        padding: 30px 20px;
    }
}

.seguro-icon-wrapper {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    box-shadow: 0 8px 25px rgba(8, 106, 216, 0.3);
    transition: all 0.3s ease;

    i {
        font-size: 42px;
        color: #ffffff;
    }

    .seguro-card:hover & {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 12px 35px rgba(8, 106, 216, 0.4);
    }

    @media (max-width: 575px) {
        width: 80px;
        height: 80px;
        margin-bottom: 20px;

        i {
            font-size: 36px;
        }
    }
}

.seguro-name {
    font-size: 20px;
    font-weight: 700;
    color: #002FA6;
    margin: 0;
    line-height: 1.4;

    @media (max-width: 575px) {
        font-size: 18px;
    }
}
</style>