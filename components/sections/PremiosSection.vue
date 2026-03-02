<template>
    <div class="premios-section section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-header text-center section-space--mb_60">
                        <h2 class="section-title">PREMIOS Y RECONOCIMIENTOS</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="premios-list">
                        <div class="premio-item" v-for="(premio, index) in premiosData" :key="index">
                            <div class="premio-content">
                                <i class="fas fa-trophy premio-icon"></i>
                                <div class="premio-text">
                                    <h4 class="premio-name">{{ premio.name }}</h4>
                                    <span class="premio-year">{{ premio.year }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row section-space--mt_60">
                <div class="col-lg-6 col-md-6 mb-30">
                    <div class="premio-image-card">
                        <img 
                            src="/images/nosotros/premio1.jpg" 
                            alt="Premio 1"
                            class="premio-image"
                            @error="handleImageError"
                        >
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 mb-30">
                    <div class="premio-image-card">
                        <img 
                            src="/images/nosotros/premio2.jpg" 
                            alt="Premio 2"
                            class="premio-image"
                            @error="handleImageError"
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PremiosSection',
    data() {
        return {
            premiosData: [
                { name: 'Grupo Villacero', year: '2017' },
                { name: 'Premio AXA Mejores Agentes Nacionales', year: '1999-2024' },
                { name: 'Premio especial Don Antonio Segui Moguel', year: '2021' }
            ]
        }
    },
    methods: {
        handleImageError(event) {
            event.target.style.display = 'none';
            const parent = event.target.parentElement;
            if (parent && !parent.querySelector('.image-placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.innerHTML = '<i class="fas fa-image"></i><p>Imagen no disponible</p>';
                parent.appendChild(placeholder);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.premios-section {
    background: #ffffff;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 300px;
        height: 300px;
        background: linear-gradient(135deg, rgba(0, 47, 166, 0.1) 0%, rgba(8, 106, 216, 0.05) 100%);
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

.premios-list {
    position: relative;
    z-index: 1;
    margin-bottom: 40px;
}

.premio-item {
    margin-bottom: 20px;
}

.premio-content {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 25px 30px;
    background: linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 100%);
    border-radius: 16px;
    border-left: 4px solid #FFD700;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        transform: translateX(10px);
    }

    @media (max-width: 575px) {
        padding: 20px;
        gap: 15px;
    }
}

.premio-icon {
    font-size: 36px;
    color: #FFD700;
    flex-shrink: 0;

    @media (max-width: 575px) {
        font-size: 28px;
    }
}

.premio-text {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 575px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
}

.premio-name {
    font-size: 18px;
    font-weight: 600;
    color: #333333;
    margin: 0;
    flex: 1;

    @media (max-width: 575px) {
        font-size: 16px;
    }
}

.premio-year {
    font-size: 16px;
    font-weight: 700;
    color: #086AD8;
    white-space: nowrap;

    @media (max-width: 575px) {
        font-size: 14px;
    }
}

.premio-image-card {
    background: #F8F9FA;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    }

    .image-placeholder {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #999999;
        background: #E8E8E8;
        border-radius: 12px;

        i {
            font-size: 48px;
            margin-bottom: 10px;
        }

        p {
            margin: 0;
            font-size: 14px;
        }
    }
}

.premio-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;

    .premio-image-card:hover & {
        transform: scale(1.05);
    }
}
</style>