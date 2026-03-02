<template>
    <div class="formacion-section section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-header text-center section-space--mb_60">
                        <h2 class="section-title">FORMACIÓN</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="formacion-content">
                        <div class="formacion-item" v-for="(item, index) in formacionData" :key="index">
                            <h3 class="institution-name">{{ item.institution }}</h3>
                            <ul class="programs-list">
                                <li v-for="(program, pIndex) in item.programs" :key="pIndex">
                                    <span class="program-name">{{ program.name }}</span>
                                    <span class="program-year">{{ program.year }}</span>
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
    name: 'FormacionSection',
    data() {
        return {
            formacionData: [
                {
                    institution: 'INSTITUTO PANAMERICANO DE ALTA DIRECCIÓN DE EMPRESA',
                    programs: [
                        { name: 'D1', year: '2009-2010' },
                        { name: 'CONTINUIDAD', year: '2011-2020' },
                        { name: 'DIRECCIÓN POR SERVICIOS', year: '2015' },
                        { name: 'EMPRESA Y FAMILIA', year: '2015' },
                        { name: 'AD2', year: '2021-2024' }
                    ]
                },
                {
                    institution: 'HARVARD BUSINESS SCHOOL',
                    programs: [
                        { name: 'ESSENTIAL TOOLS TO DRIVE GROWTH AND INNOVATION PROGRAM', year: '2022' }
                    ]
                },
                {
                    institution: 'CRM INTERNACIONAL',
                    programs: [
                        { name: 'CERTIFIED RISK MANAGER', year: '2009-2023' }
                    ]
                },
                {
                    institution: 'INSTITUTO MEXICANO EDUCATIVO DE SEGUROS Y FIANZAS',
                    programs: [
                        { name: 'LIFE UNDERWRITER TRAINING COUNCIL', year: '' },
                        { name: 'FELLOW', year: '2004' }
                    ]
                },
                {
                    institution: 'INSTITUTO TECNOLÓGICO DE ESTUDIOS SUPERIORES DE MONTERREY',
                    programs: [
                        { name: 'ING. INDUSTRIAL Y SISTEMAS', year: '1993' },
                        { name: 'MÁSTER EN FINANZAS POR ITESM', year: '1996' }
                    ]
                }
            ]
        }
    }
};
</script>

<style scoped lang="scss">
.formacion-section {
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

.formacion-content {
    position: relative;
    z-index: 1;
}

.formacion-item {
    margin-bottom: 40px;
    padding: 30px;
    background: #F8F9FA;
    border-radius: 16px;
    border-left: 4px solid #086AD8;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
    }

    @media (max-width: 575px) {
        padding: 20px;
        margin-bottom: 30px;
    }
}

.institution-name {
    font-size: 20px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 20px;
    line-height: 1.3;

    @media (max-width: 575px) {
        font-size: 18px;
    }
}

.programs-list {
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

.program-name {
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    flex: 1;

    @media (max-width: 575px) {
        font-size: 15px;
    }
}

.program-year {
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