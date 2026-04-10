<template>
    <div class="main-container">
        <HeaderAppointment />

        <!-- Hero / encabezado -->
        <section class="agent-hero section-space--ptb_80">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <h1 class="agent-hero__title">
                            Únete como agente de seguros a <span class="agent-hero__brand">IBS Consultores</span>
                        </h1>
                        <p class="agent-hero__subtitle">
                            Forma parte de un despacho líder en consultoría de seguros y fianzas, con el respaldo de más de dos décadas de experiencia y un equipo especializado en el cuidado de las personas y las empresas.
                        </p>
                        <h2 class="agent-hero__benefits-title">
                            Beneficios de ser agente en IBS Consultores
                        </h2>
                        <ul class="agent-benefits__list agent-benefits__list--hero">
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Acompañamiento y capacitación continua en productos de seguros y fianzas.
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Acceso a una amplia gama de compañías aseguradoras y soluciones integrales.
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Herramientas digitales para administrar y dar seguimiento a tu cartera de clientes.
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Atractivos esquemas de comisiones y crecimiento profesional.
                            </li>
                            <li>
                                <i class="fas fa-check-circle"></i>
                                Respaldo de un equipo multidisciplinario con más de 25 años de experiencia.
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-5">
                        <div class="agent-hero__video-wrapper">
                            <div class="agent-hero__video-inner">
                                <iframe
                                    src="https://www.youtube.com/embed/m4YZDj7jYmo"
                                    title="Video Únete como agente IBS Consultores"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    loading="lazy"
                                />
                            </div>
                            <p class="agent-hero__video-caption">Conoce más sobre la experiencia de ser parte de IBS Consultores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Beneficios y formulario en la misma sección -->
        <section class="agent-join section-space--ptb_80">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="agent-form__card">
                            <h2 class="agent-section-title text-center">
                                Deja tus datos y envíanos tu información
                            </h2>
                            <p class="agent-section-lead text-center">
                                Completa el siguiente formulario y nuestro equipo de IBS Consultores se pondrá en contacto contigo
                                para platicar más sobre la oportunidad de integrarte como agente.
                            </p>
                            <form ref="agentForm" @submit.prevent="handleSubmit" enctype="multipart/form-data">
                                <input type="hidden" name="to_email" value="rh@ibsconsultores.com">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="nombreCompleto">Nombre completo</label>
                                            <input
                                                id="nombreCompleto"
                                                name="nombre_completo"
                                                v-model="form.nombreCompleto"
                                                type="text"
                                                class="form-control"
                                                placeholder="Escribe tu nombre completo"
                                                required
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="telefono">Número de teléfono</label>
                                            <input
                                                id="telefono"
                                                name="telefono"
                                                v-model="form.telefono"
                                                type="tel"
                                                class="form-control"
                                                placeholder="Ej. 614 000 0000"
                                                required
                                            >
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="ciudad">Ciudad</label>
                                            <input
                                                id="ciudad"
                                                name="ciudad"
                                                v-model="form.ciudad"
                                                type="text"
                                                class="form-control"
                                                placeholder="Ciudad donde resides"
                                                required
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="estado">Estado</label>
                                            <input
                                                id="estado"
                                                name="estado"
                                                v-model="form.estado"
                                                type="text"
                                                class="form-control"
                                                placeholder="Estado"
                                                required
                                            >
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="correo">Correo electrónico</label>
                                            <input
                                                id="correo"
                                                name="correo"
                                                v-model="form.correo"
                                                type="email"
                                                class="form-control"
                                                placeholder="tucorreo@ejemplo.com"
                                                required
                                            >
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="mensaje">Cuéntanos brevemente sobre tu experiencia</label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        v-model="form.mensaje"
                                        class="form-control"
                                        rows="4"
                                        placeholder="Comparte brevemente tu experiencia en seguros u otros sectores."
                                    />
                                </div>

                                <div class="text-center">
                                    <button
                                        type="submit"
                                        class="ht-btn ht-btn-md agent-form__submit-btn"
                                        :disabled="submitting"
                                    >
                                        <span v-if="!submitting">Enviar información</span>
                                        <span v-else>Enviando...</span>
                                    </button>
                                    <p v-if="successMessage" class="agent-form__success">
                                        {{ successMessage }}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Información adicional sobre IBS Consultores -->
        <section class="agent-about section-space--ptb_80">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="agent-section-title text-center">
                            ¿Quiénes somos en IBS Consultores?
                        </h2>
                        <p class="agent-section-lead text-center">
                            Somos un despacho integrado por profesionistas dedicados a la asesoría y consultoría en seguros y fianzas,
                            así como a la administración de riesgos, con presencia en diversos sectores y empresas de diferentes tamaños.
                        </p>
                        <div class="agent-about__content">
                            <p>
                                Desde 1998 trabajamos de la mano de nuestros clientes para diseñar soluciones a la medida, con un enfoque integral
                                en la protección patrimonial, empresarial y familiar. Nuestro compromiso se basa en la cercanía, el servicio
                                personalizado y el acompañamiento en todo momento, especialmente cuando más se necesita.
                            </p>
                            <p>
                                Como parte de IBS Consultores, tendrás el respaldo de un equipo multidisciplinario, procesos consolidados y una
                                reputación en el mercado que te permitirá ofrecer soluciones sólidas y de alto valor agregado a tus clientes.
                            </p>
                        </div>
                    </div>
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

export default {
    name: 'AgenteIBS',
    components: {
        HeaderAppointment,
        Footer,
        OffCanvasMobileMenu
    },
    data() {
        return {
            submitting: false,
            successMessage: '',
            form: {
                nombreCompleto: '',
                telefono: '',
                ciudad: '',
                estado: '',
                correo: '',
                mensaje: ''
            }
        };
    },
    head() {
        return {
            title: 'Únete como agente - IBS Consultores',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Conoce los beneficios de ser agente de seguros en IBS Consultores y envíanos tu información para formar parte de nuestro equipo.'
                }
            ]
        };
    },
    methods: {
        async handleSubmit() {
            this.submitting = true;
            this.successMessage = '';

            try {
                const { default: emailjs } = await import('@emailjs/browser');
                const serviceId = this.$config.emailjsServiceId;
                const templateId = this.$config.emailjsTemplateId;
                const publicKey = this.$config.emailjsPublicKey;

                if (!serviceId || !templateId || !publicKey) {
                    throw new Error('Falta configuración de EmailJS.');
                }

                await emailjs.sendForm(serviceId, templateId, this.$refs.agentForm, publicKey);

                this.successMessage = '¡Gracias! Hemos recibido tu información. Pronto nos pondremos en contacto contigo.';
                this.resetForm();
            } catch (e) {
                alert('Ocurrió un error al enviar la información. Por favor intenta nuevamente.');
            } finally {
                this.submitting = false;
            }
        },
        resetForm() {
            this.form = {
                nombreCompleto: '',
                telefono: '',
                ciudad: '',
                estado: '',
                correo: '',
                mensaje: ''
            };
        }
    }
};
</script>

<style scoped lang="scss">
.agent-hero {
    background: #ffffff;
    padding-top: 70px;
}

.agent-hero .row {
    padding-left: 36px;
    padding-right: 36px;
}

.agent-hero .container,
.agent-join .container,
.agent-about .container {
    max-width: 1320px;
    padding-left: 24px;
    padding-right: 24px;
}

.agent-hero__title {
    font-size: 32px;
    font-weight: 700;
    color: #002fa6;
    margin-bottom: 16px;
}

.agent-hero__brand {
    color: #086ad8;
}

.agent-hero__subtitle {
    font-size: 16px;
    color: #4b5563;
    max-width: 680px;
    margin-bottom: 18px;
}

.agent-hero__benefits-title {
    font-size: 22px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 14px;
}

.agent-hero__video-wrapper {
    max-width: 360px;
    margin: 0 auto;
}

.agent-hero__video-inner {
    position: relative;
    width: 100%;
    padding-top: 177.77%;
    overflow: hidden;
    border-radius: 18px;
    box-shadow: 0 12px 35px rgba(0, 47, 166, 0.25);

    iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
}

.agent-hero__video-caption {
    margin-top: 10px;
    font-size: 13px;
    color: #4b5563;
    text-align: center;
}

.agent-section-title {
    font-size: 26px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 16px;
}

.agent-section-lead {
    font-size: 15px;
    color: #4b5563;
    margin-bottom: 20px;
}

.agent-benefits__list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-size: 14px;
        color: #374151;
        margin-bottom: 10px;

        i {
            color: #16a34a;
            margin-top: 3px;
        }
    }
}

.agent-benefits__list--hero {
    max-width: 760px;
}

.agent-join {
    background: #ffffff;
}

.agent-form__card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 20px;
    padding: 34px 34px;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
    border-top: 4px solid #002fa6;
}

.agent-form__card .form-control {
    border-radius: 10px;
    border-color: #d1d5db;
    min-height: 44px;
}

.agent-form__card textarea.form-control {
    min-height: 110px;
}

.agent-form__card .form-control:focus {
    border-color: #086ad8;
    box-shadow: 0 0 0 0.2rem rgba(8, 106, 216, 0.15);
}

.agent-form__submit-btn {
    min-width: 200px;
    margin-top: 10px;
}

.agent-form__success {
    margin-top: 12px;
    color: #059669;
    font-size: 14px;
}

.agent-about {
    background: #ffffff;
}

.agent-about__content {
    margin-top: 16px;
    font-size: 15px;
    color: #374151;

    p + p {
        margin-top: 10px;
    }
}

@media (max-width: 991px) {
    .agent-hero {
        padding-top: 35px;
    }

    .agent-hero .row {
        padding-left: 0;
        padding-right: 0;
    }

    .agent-hero__title {
        font-size: 26px;
    }

    .agent-hero__subtitle {
        font-size: 15px;
    }

    .agent-hero__benefits-title {
        font-size: 20px;
    }

    .agent-hero__video-wrapper {
        margin-top: 24px;
    }

    .agent-form__card {
        padding: 24px 18px;
    }

    .agent-benefits__content {
        padding: 24px 20px;
    }
}

@media (max-width: 1200px) {
    .agent-hero .container,
    .agent-join .container,
    .agent-about .container {
        max-width: 1140px;
        padding-left: 18px;
        padding-right: 18px;
    }
}
</style>

