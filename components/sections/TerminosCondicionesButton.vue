<template>
    <div class="terminos-section section-space--ptb_80">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="terminos-button-wrapper">
                        <a href="/doc/aviso.pdf" target="_blank" class="terminos-btn">
                            <div class="terminos-btn-icon">
                                <i class="fas fa-file-contract"></i>
                            </div>
                            <div class="terminos-btn-content">
                                <h3 class="terminos-btn-title">Términos y Condiciones</h3>
                                <p class="terminos-btn-subtitle">Aviso de privacidad</p>
                            </div>
                            <div class="terminos-btn-arrow">
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
    name: 'TerminosCondicionesButton'
};
</script>

<style scoped lang="scss">
.terminos-section {
    background: linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 100%);
    padding: 60px 0;
}

.terminos-button-wrapper {
    display: flex;
    justify-content: center;
    max-width: 600px;
    margin: 0 auto;
}

.terminos-btn {
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
    width: 100%;

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
        border-color: #086AD8;

        &::before {
            left: 100%;
        }

        .terminos-btn-arrow {
            transform: translateX(8px);
        }

        .terminos-btn-icon {
            transform: scale(1.1) rotate(5deg);
            background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
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

.terminos-btn-icon {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    flex-shrink: 0;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(8, 106, 216, 0.3);

    @media (max-width: 575px) {
        width: 70px;
        height: 70px;
        font-size: 32px;
    }
}

.terminos-btn-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.terminos-btn-title {
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

.terminos-btn-subtitle {
    font-size: 16px;
    color: #666666;
    margin: 0;
    font-weight: 500;

    @media (max-width: 575px) {
        font-size: 15px;
    }
}

.terminos-btn-arrow {
    font-size: 24px;
    color: #086AD8;
    transition: transform 0.3s ease;
    flex-shrink: 0;

    @media (max-width: 575px) {
        display: none;
    }
}
</style>
