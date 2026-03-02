<template>
    <div class="directores-section section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-header text-center section-space--mb_60">
                        <h2 class="section-title">NUESTRO EQUIPO DIRECTIVO</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-6 mb-40" v-for="director in directoresData" :key="director.id">
                    <div class="director-card">
                        <div class="director-image-wrapper">
                            <div class="director-placeholder">
                                <i class="fas fa-user-tie"></i>
                            </div>
                        </div>
                        <div class="director-info">
                            <div class="director-qualification">{{ director.qualification }}</div>
                            <h3 class="director-name">{{ director.name }}</h3>
                            <p class="director-role">{{ director.role }}</p>
                            <div class="director-badge">
                                <i class="fas fa-medal"></i>
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
    name: 'DirectoresSection',
    data() {
        return {
            directoresData: [
                {
                    id: 1,
                    name: 'GERARDO ARZAGA LUEVANO',
                    qualification: 'INGENIERO Y MAESTRO EN FINANZAS',
                    role: 'DIRECTOR GENERAL'
                },
                {
                    id: 2,
                    name: 'DEYANIRA ILEANA REY GUILLÉN',
                    qualification: 'LICENCIADA EN MERCADOTECNIA',
                    role: 'DIRECTORA Y SOCIA FUNDADORA DE IBS CONSULTORES'
                }
            ]
        }
    }
};
</script>

<style scoped lang="scss">
.directores-section {
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    color: #ffffff;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/images/patterns/mitech-home-infotechno-case-study-section-bg.png') no-repeat center;
        background-size: cover;
        opacity: 0.1;
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
    color: #ffffff;
    margin-bottom: 15px;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    @media (max-width: 991px) {
        font-size: 32px;
    }

    @media (max-width: 575px) {
        font-size: 28px;
    }
}

.director-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 575px) {
        padding: 25px 20px;
    }
}

.director-image-wrapper {
    width: 150px;
    height: 150px;
    margin-bottom: 25px;
    position: relative;
}

.director-placeholder {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 60px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);

    @media (max-width: 575px) {
        width: 120px;
        height: 120px;
        font-size: 48px;
    }
}

.director-info {
    flex: 1;
    width: 100%;
    position: relative;
}

.director-qualification {
    font-size: 14px;
    font-weight: 600;
    color: #086AD8;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 575px) {
        font-size: 12px;
    }
}

.director-name {
    font-size: 24px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 10px;
    line-height: 1.3;

    @media (max-width: 991px) {
        font-size: 22px;
    }

    @media (max-width: 575px) {
        font-size: 20px;
    }
}

.director-role {
    font-size: 16px;
    color: #666666;
    margin: 0;
    line-height: 1.5;
    font-weight: 500;

    @media (max-width: 575px) {
        font-size: 14px;
    }
}

.director-badge {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #002FA6;
    font-size: 24px;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);

    @media (max-width: 575px) {
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
}
</style>