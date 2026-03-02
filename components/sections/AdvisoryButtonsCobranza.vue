<template>
    <div class="advisory-buttons-section section-space--ptb_80">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-header text-center section-space--mb_50">
                        <h2 class="section-title">Directorio Personalizado</h2>
                        <p class="section-subtitle">de un ejecutivo de IBS Consultores</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="advisory-buttons-wrapper">
                        <a href="tel:6141319773" class="advisory-btn advisory-btn-cobranza">
                            <div class="advisory-btn-icon">
                                <i class="fas fa-credit-card"></i>
                            </div>
                            <div class="advisory-btn-content">
                                <h3 class="advisory-btn-title">Asesoría Personalizada</h3>
                                <p class="advisory-btn-subtitle">Cobranza</p>
                                <div class="advisory-btn-phone">
                                    <i class="fas fa-phone"></i>
                                    <span>614 131 9773</span>
                                </div>
                            </div>
                            <div class="advisory-btn-arrow">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdvisoryButtonsCobranza'
};
</script>

<style scoped lang="scss">
.advisory-buttons-section {
    background: linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 100%);
    padding: 60px 0;
}

.section-header {
    margin-bottom: 40px;
}

.section-title {
    font-size: 42px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 10px;
    line-height: 1.3;

    @media (max-width: 991px) {
        font-size: 32px;
    }

    @media (max-width: 575px) {
        font-size: 28px;
    }
}

.section-subtitle {
    font-size: 20px;
    color: #086AD8;
    margin: 0;
    font-weight: 600;

    @media (max-width: 991px) {
        font-size: 18px;
    }

    @media (max-width: 575px) {
        font-size: 16px;
    }
}

.advisory-buttons-wrapper {
    display: flex;
    justify-content: center;
    max-width: 600px;
    margin: 0 auto;
}

.advisory-btn {
    background: #ffffff;
    border-radius: 20px;
    padding: 35px 40px;
    display: flex;
    align-items: center;
    gap: 25px;
    text-decoration: none;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 3px solid transparent;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        transition: left 0.5s ease;
    }

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);

        &::before {
            left: 100%;
        }

        .advisory-btn-arrow {
            transform: translateX(8px);
        }
    }

    @media (max-width: 991px) {
        padding: 30px 25px;
        gap: 20px;
    }

    @media (max-width: 575px) {
        padding: 25px 20px;
        gap: 15px;
        flex-direction: column;
        text-align: center;
    }
}

.advisory-btn-cobranza {
    &:hover {
        border-color: #FF9800;
        background: linear-gradient(135deg, #ffffff 0%, #FFF8F0 100%);
    }
}

.advisory-btn-icon {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    flex-shrink: 0;
    transition: all 0.3s ease;

    @media (max-width: 575px) {
        width: 70px;
        height: 70px;
        font-size: 32px;
    }
}

.advisory-btn-cobranza .advisory-btn-icon {
    background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
    color: #ffffff;
}

.advisory-btn:hover .advisory-btn-icon {
    transform: scale(1.1) rotate(5deg);
}

.advisory-btn-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.advisory-btn-title {
    font-size: 22px;
    font-weight: 700;
    color: #333333;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 991px) {
        font-size: 20px;
    }

    @media (max-width: 575px) {
        font-size: 18px;
    }
}

.advisory-btn-subtitle {
    font-size: 16px;
    color: #666666;
    margin: 0;
    font-weight: 500;

    @media (max-width: 575px) {
        font-size: 15px;
    }
}

.advisory-btn-phone {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
    padding: 10px 18px;
    background: linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%);
    border-radius: 10px;
    width: fit-content;

    i {
        color: #086AD8;
        font-size: 16px;
    }

    span {
        font-size: 18px;
        font-weight: 700;
        color: #086AD8;
    }

    @media (max-width: 575px) {
        margin: 8px auto 0;
        padding: 8px 15px;

        span {
            font-size: 16px;
        }
    }
}

.advisory-btn-cobranza .advisory-btn-phone {
    i, span {
        color: #FF9800;
    }
}

.advisory-btn-arrow {
    font-size: 24px;
    color: #086AD8;
    transition: transform 0.3s ease;
    flex-shrink: 0;

    @media (max-width: 575px) {
        display: none;
    }
}

.advisory-btn-cobranza .advisory-btn-arrow {
    color: #FF9800;
}

.advisory-btn:hover .advisory-btn-arrow {
    transform: translateX(8px);
}
</style>