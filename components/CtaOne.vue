<template>
    <div class="cta-modern section-space--ptb_100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="cta-modern-content text-center">
                        <h2 class="cta-modern-title">
                            Compra y/o cotiza tu seguro<br>
                            <span class="highlight">aquí mismo</span>
                        </h2>
                        <p class="cta-modern-subtitle">¡Es muy fácil! Elige el tipo de seguro que necesitas</p>
                        
                        <div class="cta-buttons-modern">
                            <a href="https://cotizador.ibsconsultores.com/" target="_blank" class="cta-btn-modern cta-btn-auto">
                                <div class="cta-btn-icon">
                                    <i class="fas fa-car"></i>
                                </div>
                                <div class="cta-btn-content">
                                    <span class="cta-btn-title">Autos</span>
                                    <span class="cta-btn-subtitle">Cotiza ahora</span>
                                </div>
                                <i class="fas fa-arrow-right cta-btn-arrow"></i>
                            </a>
                            
                            <a href="https://www.segurosargos.com/seimovil/acceso/porToken/53CEE673317802A108A53428:4a789270eaeefc5bf36f5545daa7a375"
                                target="_blank" class="cta-btn-modern cta-btn-life">
                                <div class="cta-btn-icon">
                                    <i class="fas fa-heart"></i>
                                </div>
                                <div class="cta-btn-content">
                                    <span class="cta-btn-title">Vida</span>
                                    <span class="cta-btn-subtitle">Cotiza ahora</span>
                                </div>
                                <i class="fas fa-arrow-right cta-btn-arrow"></i>
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
    name: 'CtaOne'
};
</script>

<style scoped lang="scss">
.cta-modern {
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('/images/patterns/mitech-home-appointment-call-to-action-bg-image.png') center/cover;
        opacity: 0.1;
        z-index: 0;
    }
}

.cta-modern-content {
    position: relative;
    z-index: 1;
}

.cta-modern-title {
    font-size: 42px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.3;
    margin-bottom: 15px;
    letter-spacing: -0.5px;

    .highlight {
        color: #FFD700;
        font-weight: 800;
    }

    @media (max-width: 991px) {
        font-size: 32px;
    }

    @media (max-width: 575px) {
        font-size: 26px;
    }
}

.cta-modern-subtitle {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 40px;
    font-weight: 400;

    @media (max-width: 575px) {
        font-size: 16px;
    }
}

.cta-buttons-modern {
    display: flex;
    gap: 25px;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 700px;
    margin: 0 auto;

    @media (max-width: 575px) {
        flex-direction: column;
        gap: 15px;
    }
}

.cta-btn-modern {
    flex: 1;
    min-width: 280px;
    background: #ffffff;
    border-radius: 16px;
    padding: 25px 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.5s ease;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

        &::before {
            left: 100%;
        }

        .cta-btn-arrow {
            transform: translateX(5px);
        }
    }

    @media (max-width: 575px) {
        min-width: 100%;
    }
}

.cta-btn-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
    transition: all 0.3s ease;
}

.cta-btn-auto {
    .cta-btn-icon {
        background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
        color: #ffffff;
    }

    &:hover .cta-btn-icon {
        transform: scale(1.1) rotate(5deg);
    }
}

.cta-btn-life {
    .cta-btn-icon {
        background: linear-gradient(135deg, #E91E63 0%, #C2185B 100%);
        color: #ffffff;
    }

    &:hover .cta-btn-icon {
        transform: scale(1.1) rotate(-5deg);
    }
}

.cta-btn-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.cta-btn-title {
    font-size: 22px;
    font-weight: 700;
    color: #333333;
    line-height: 1.2;
}

.cta-btn-subtitle {
    font-size: 14px;
    color: #666666;
    font-weight: 500;
}

.cta-btn-arrow {
    font-size: 20px;
    color: #086AD8;
    transition: transform 0.3s ease;
    flex-shrink: 0;
}
</style>