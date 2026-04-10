<template>
    <div>
        <div class="contact-us-section-wrapper section-space--pt_100 section-space--pb_70">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="contact-directory-header text-center">
                            <h2 class="contact-directory-header__title">
                                Directorio de <span class="text-color-primary">contacto</span>
                            </h2>
                            <p class="contact-directory-header__text">
                                Escríbenos por WhatsApp según el tema que necesites. Te respondemos en minutos.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Atención general -->
                <div class="contact-directory-block">
                    <h3 class="contact-directory-block__title">Atención general</h3>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-3">
                            <a
                                href="tel:+528007770911"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="contact-btn contact-btn--primary"
                            >
                                <span class="contact-btn__icon"><i class="fas fa-building"></i></span>
                                <span class="contact-btn__label">Oficina</span>
                                <span class="contact-btn__sublabel">Atención general e información</span>
                                <span class="contact-btn__wa"><i class="fa fa-phone"></i> Llamar</span>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-3">
                            <a
                                href="https://wa.link/h7nusu"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="contact-btn"
                            >
                                <span class="contact-btn__icon"><i class="fas fa-file-invoice-dollar"></i></span>
                                <span class="contact-btn__label">Cobranza</span>
                                <span class="contact-btn__sublabel">Atención en cobranza</span>
                                <span class="contact-btn__wa"><i class="fab fa-whatsapp"></i> WhatsApp</span>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-3">
                            <a
                                href="https://wa.link/ax5ck8"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="contact-btn"
                            >
                                <span class="contact-btn__icon"><i class="fas fa-user"></i></span>
                                <span class="contact-btn__label">Recursos Humanos</span>
                                <span class="contact-btn__sublabel">Información de recursos humanos</span>
                                <span class="contact-btn__wa"><i class="fab fa-whatsapp"></i> WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Seguros y cotización -->
                <div class="contact-directory-block">
                    <h3 class="contact-directory-block__title">Seguros y cotización</h3>
                    <div class="row">
                        <div
                            v-for="(item, index) in segurosItems"
                            :key="'seg-' + index"
                            class="col-lg-4 col-md-6 mb-3"
                        >
                            <a
                                :href="item.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="contact-btn"
                            >
                                <span class="contact-btn__icon"><i class="fab fa-whatsapp"></i></span>
                                <span class="contact-btn__label">{{ item.label }}</span>
                                <span class="contact-btn__sublabel">{{ item.description }}</span>
                                <span class="contact-btn__wa"><i class="fab fa-whatsapp"></i> WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Siniestros -->
                <div class="contact-directory-block">
                    <h3 class="contact-directory-block__title">Siniestros</h3>
                    <div class="row">
                        <div
                            v-for="(item, index) in siniestrosItems"
                            :key="'sin-' + index"
                            class="col-lg-4 col-md-6 mb-3"
                        >
                            <a
                                :href="item.url"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="contact-btn contact-btn--siniestros"
                            >
                                <span class="contact-btn__icon"><i class="fas fa-exclamation-triangle"></i></span>
                                <span class="contact-btn__label">{{ item.label }}</span>
                                <span class="contact-btn__sublabel">{{ item.description }}</span>
                                <span class="contact-btn__wa"><i class="fab fa-whatsapp"></i> WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactUsFour',
    data() {
        return {
            segurosItems: [
                {
                    label: 'Gastos Médicos',
                    url: 'https://wa.link/yb3aua',
                    email: 'proyectos1@ibsconsultores.com',
                    description: 'Cotización y consultas'
                },
                {
                    label: 'Autos Individual',
                    url: 'https://wa.link/ebe60y',
                    email: 'emision3@ibsconsultores.com',
                    description: 'Seguro de auto particular'
                },
                {
                    label: 'Hogar y Empresarial',
                    url: 'https://wa.link/pbxy5l',
                    email: 'ejecutivodecuenta@ibsconsultores.com',
                    description: 'Hogar y pymes'
                },
                {
                    label: 'Descuento por Nómina',
                    url: 'https://wa.link/z389eo',
                    email: 'seguros@ibsconsultores.com',
                    description: 'Consultas descuento por nómina'
                }
            ],
            siniestrosItems: [
                {
                    label: 'Siniestros Autos y Empresarial',
                    url: 'https://wa.link/afl3t5',
                    email: 'siniestros@ibsconsultores.com',
                    description: 'Reporte y seguimiento'
                },
                {
                    label: 'Siniestros Gastos Médicos y Vida',
                    url: 'https://wa.link/02lu5x',
                    email: 'gastosmedicos@ibsconsultores.com',
                    description: 'Reporte y seguimiento'
                }
            ]
        };
    }
};
</script>

<style scoped lang="scss">
.contact-us-section-wrapper {
    background: linear-gradient(180deg, #f8fafc 0%, #e8f4fd 100%);
}

.contact-directory-header {
    margin-bottom: 40px;

    @media (max-width: 575px) {
        margin-bottom: 32px;
    }
}

.contact-directory-header__badge {
    display: inline-block;
    padding: 8px 18px;
    background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 50px;
    margin-bottom: 16px;
}

.contact-directory-header__title {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.3;
    margin-bottom: 12px;

    @media (max-width: 575px) {
        font-size: 24px;
    }
}

.contact-directory-header__text {
    font-size: 17px;
    color: #555;
    line-height: 1.6;
    margin: 0;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
}

.contact-directory-block {
    margin-bottom: 36px;

    &:last-of-type {
        margin-bottom: 0;
    }

    @media (max-width: 575px) {
        margin-bottom: 28px;
    }
}

.contact-directory-block__title {
    font-size: 14px;
    font-weight: 700;
    color: #086AD8;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 16px;
    padding-bottom: 8px;
    border-bottom: 2px solid rgba(8, 106, 216, 0.2);
}

.contact-btn {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    min-height: 140px;
    padding: 20px 20px 18px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 47, 166, 0.06);
    border: 1px solid rgba(8, 106, 216, 0.12);
    text-decoration: none;
    transition: all 0.25s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 32px rgba(0, 47, 166, 0.12);
        border-color: rgba(8, 106, 216, 0.25);

        .contact-btn__wa {
            color: #128C7E;
        }
    }

    &--primary .contact-btn__icon {
        background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
    }

    &--siniestros .contact-btn__icon {
        background: linear-gradient(135deg, #e65100 0%, #bf360c 100%);
    }
}

.contact-btn__icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    border-radius: 12px;
    color: #fff;
    font-size: 20px;
    margin-bottom: 12px;
}

.contact-btn__label {
    font-size: 16px;
    font-weight: 700;
    color: #002FA6;
    line-height: 1.3;
    margin-bottom: 4px;
}

.contact-btn__sublabel {
    font-size: 13px;
    color: #666;
    line-height: 1.4;
    margin-bottom: auto;
    flex: 1;
}

.contact-btn__wa {
    font-size: 13px;
    font-weight: 600;
    color: #086AD8;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 10px;
    transition: color 0.2s ease;

    i {
        font-size: 16px;
    }
}
</style>
