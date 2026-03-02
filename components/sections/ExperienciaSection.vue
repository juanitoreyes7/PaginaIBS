<template>
    <div class="experiencia-section section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-header text-center section-space--mb_60">
                        <h2 class="section-title">EXPERIENCIA</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="experiencia-content">
                        <div class="experiencia-item" v-for="(item, index) in experienciaData" :key="index">
                            <h3 class="organization-name">{{ item.organization }}</h3>
                            <ul class="roles-list">
                                <li v-for="(role, rIndex) in item.roles" :key="rIndex">
                                    <span class="role-name">{{ role.name }}</span>
                                    <span class="role-period">{{ role.period }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienciaSection',
    data() {
        return {
            experienciaData: [
                {
                    organization: 'COMISIÓN NACIONAL DE SEGUROS Y FIANZAS',
                    roles: [
                        { name: 'ASESOR EXTERNO EN SEGUROS', period: '2004-ACTUALIDAD' }
                    ]
                },
                {
                    organization: 'CONSEJERO NACIONAL',
                    roles: [
                        { name: 'METLIFE', period: '2011' },
                        { name: 'SEGUROS AFIRME', period: '2018-2019-2020' },
                        { name: 'ZURICH', period: '2022-2024' },
                        { name: 'HIR', period: '2024' }
                    ]
                },
                {
                    organization: 'CRM INTERNACIONAL',
                    roles: [
                        { name: 'CERTIFIED RISK MANAGER', period: '2009-2023' }
                    ]
                },
                {
                    organization: 'ITESM CAMPUS CHIHUAHUA',
                    roles: [
                        { name: 'CATEDRÁTICO', period: '1994-2004' }
                    ]
                },
                {
                    organization: 'SEGUROS COMERCIAL AMÉRICA',
                    roles: [
                        { name: 'GERENTE TÉCNICO VIDA', period: '1997-1998' }
                    ]
                },
                {
                    organization: 'CANACO, EVM EJECUTIVOS DE VENTAS Y MERCADOTECNIA DE CHIHUAHUA Y COPARMEX',
                    roles: [
                        { name: 'CONSEJERO Y SOCIO', period: '' }
                    ]
                },
                {
                    organization: 'MDRT (MIEMBRO DE LA MESA DEL MILLÓN DE DOLARES)',
                    roles: [
                        { name: 'MIEMBRO', period: '2022' }
                    ]
                }
            ]
        }
    }
};
</script>

<style scoped lang="scss">
.experiencia-section {
    background: linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 100%);
    position: relative;
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

.experiencia-content {
    position: relative;
    z-index: 1;
}

.experiencia-item {
    margin-bottom: 35px;
    padding: 30px;
    background: #ffffff;
    border-radius: 16px;
    border-left: 4px solid #086AD8;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        transform: translateY(-5px);
    }

    @media (max-width: 575px) {
        padding: 20px;
        margin-bottom: 25px;
    }
}

.organization-name {
    font-size: 20px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 20px;
    line-height: 1.3;

    @media (max-width: 575px) {
        font-size: 18px;
    }
}

.roles-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid rgba(0, 47, 166, 0.1);

        &:last-child {
            border-bottom: none;
        }

        @media (max-width: 575px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
        }
    }
}

.role-name {
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    flex: 1;

    @media (max-width: 575px) {
        font-size: 15px;
    }
}

.role-period {
    font-size: 15px;
    color: #086AD8;
    font-weight: 600;
    white-space: nowrap;
    margin-left: 20px;

    @media (max-width: 575px) {
        margin-left: 0;
        font-size: 14px;
    }
}
</style>