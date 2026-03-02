<template>
    <div class="formacion-experiencia-section section-space--ptb_80">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="formacion-experiencia-card">
                        <h2 class="section-title">Formación y experiencia</h2>
                        <p class="section-intro">
                            Nuestro equipo cuenta con formación en instituciones como IPADE, Harvard Business School, ITESM y certificaciones CRM Internacional, además de experiencia como asesores en CNSF, consejeros en aseguradoras líderes y docencia en el ITESM.
                        </p>
                        <div class="summary-grid">
                            <div class="summary-block">
                                <h3>Formación destacada</h3>
                                <ul>
                                    <li>IPADE – Alta dirección y continuidad</li>
                                    <li>Harvard Business School – Crecimiento e innovación</li>
                                    <li>CRM Internacional – Certified Risk Manager</li>
                                    <li>ITESM – Ingeniería y Maestría en Finanzas</li>
                                </ul>
                            </div>
                            <div class="summary-block">
                                <h3>Experiencia clave</h3>
                                <ul>
                                    <li>Asesor externo en CNSF (2004-actualidad)</li>
                                    <li>Consejero nacional en aseguradoras (MetLife, Afirme, Zurich, HIR)</li>
                                    <li>Certified Risk Manager (CRM Internacional)</li>
                                    <li>Miembro MDRT</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormacionExperienciaSection'
};
</script>

<style scoped lang="scss">
.formacion-experiencia-section {
    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.formacion-experiencia-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 48px 40px;
    box-shadow: 0 4px 24px rgba(0, 47, 166, 0.08);
    border: 1px solid rgba(8, 106, 216, 0.1);

    @media (max-width: 767px) {
        padding: 32px 24px;
    }
}

.section-title {
    font-size: 28px;
    font-weight: 700;
    color: #002FA6;
    margin: 0 0 20px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: 575px) {
        font-size: 22px;
    }
}

.section-intro {
    font-size: 16px;
    color: #555;
    line-height: 1.65;
    margin: 0 0 32px;
    text-align: center;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 575px) {
        font-size: 15px;
        margin-bottom: 28px;
    }
}

.summary-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px 40px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 24px;
    }
}

.summary-block {
    h3 {
        font-size: 16px;
        font-weight: 700;
        color: #086AD8;
        margin: 0 0 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            font-size: 14px;
            color: #444;
            line-height: 1.6;
            padding: 6px 0;
            padding-left: 18px;
            position: relative;

            &::before {
                content: '•';
                position: absolute;
                left: 0;
                color: #086AD8;
                font-weight: 700;
            }
        }
    }
}
</style>
