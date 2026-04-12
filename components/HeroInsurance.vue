<template>
    <div class="insurance-hero">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-7">
                    <div class="insurance-hero-text wow move-up">
                        <h1 class="insurance-hero-title">
                            En IBS Consultores cotiza<br>
                            el seguro<br>
                            ideal en un minuto
                        </h1>
                        <p class="insurance-hero-subtitle">
                            Asegura lo que más quieres, fácil,<br>
                            rápido y seguro.
                        </p>

                        <div class="insurance-selection-box">
                            <p class="selection-question">¿Qué quieres asegurar?</p>
                            <div class="selection-options">
                                <button 
                                    class="selection-btn" 
                                    :class="{ active: selectedOption === 'coche' }"
                                    @click="selectedOption = 'coche'"
                                >
                                    <i class="fas fa-car"></i>
                                    <span>Mi Auto</span>
                                    <i v-if="selectedOption === 'coche'" class="fas fa-check check-icon"></i>
                                </button>
                                <button 
                                    class="selection-btn" 
                                    :class="{ active: selectedOption === 'vida' }"
                                    @click="selectedOption = 'vida'"
                                >
                                    <i class="fas fa-heart"></i>
                                    <span>Vida</span>
                                    <i v-if="selectedOption === 'vida'" class="fas fa-check check-icon"></i>
                                </button>
                            </div>
                            <div class="quote-button-wrapper">
                                <a 
                                    v-if="selectedOption === 'coche'"
                                    href="https://cotizador.ibsconsultores.com/" 
                                    target="_blank"
                                    class="btn btn--primary btn-quote"
                                >
                                    Cotizar
                                </a>
                                <a 
                                    v-else
                                    href="https://www.segurosargos.com/seimovil/acceso/porToken/53CEE673317802A108A53428:4a789270eaeefc5bf36f5545daa7a375"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="btn btn--primary btn-quote"
                                >
                                    Cotizar
                                </a>
                            </div>
                            <div class="existing-quote-link">
                                <n-link to="/Solicitud">Ya tengo una cotización</n-link>
                            </div>
                            <div class="hero-portal-link">
                                <n-link
                                    v-if="!isLoggedIn"
                                    to="/login"
                                    class="hero-portal-link__btn"
                                >
                                    Iniciar sesión
                                </n-link>
                                <n-link
                                    v-else
                                    to="/portal"
                                    class="hero-portal-link__btn hero-portal-link__btn--portal"
                                >
                                    Ir al portal
                                </n-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-5">
                    <div class="insurance-hero-images-wrap wow move-up">
                        <div class="insurance-hero-images">
                            <div class="car-illustration">
                                <img
                                    class="img-fluid hero-car-image"
                                    src="/images/projects/132.png"
                                    alt="Ilustración de auto para seguros"
                                >
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
    name: 'HeroInsurance',
    data() {
        return {
            selectedOption: 'coche',
            isLoggedIn: false
        };
    },
    mounted() {
        if (process.client && this.$auth && this.$auth.onAuthStateChanged) {
            this.$auth.onAuthStateChanged((user) => {
                this.isLoggedIn = !!user;
            });
        }
    }
};
</script>

<style scoped lang="scss">
.insurance-hero {
    min-height: 80vh;
    background: linear-gradient(180deg, #002FA6 0%, #086AD8 50%, #E3F2FD 100%);
    display: flex;
    align-items: center;
    padding: 90px 0 60px;
    position: relative;
    overflow: hidden;

    @media (max-width: 991px) {
        min-height: auto;
        padding: 60px 0 40px;
    }
}

.insurance-hero-text {
    padding-left: 50px;
    z-index: 2;
    position: relative;

    @media (max-width: 991px) {
        padding-left: 0;
        text-align: center;
        margin-bottom: 35px;
    }
}

.insurance-hero-title {
    font-size: 36px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.3;
    margin-bottom: 20px;
    letter-spacing: -0.2px;

    @media (max-width: 1199px) {
        font-size: 32px;
    }

    @media (max-width: 991px) {
        font-size: 26px;
        margin-bottom: 15px;
    }

    @media (max-width: 575px) {
        font-size: 22px;
    }
}

.insurance-hero-subtitle {
    font-size: 15px;
    color: #ffffff;
    line-height: 1.5;
    margin-bottom: 30px;
    font-weight: 400;

    @media (max-width: 991px) {
        font-size: 13px;
        margin-bottom: 20px;
    }
}

.insurance-selection-box {
    background: #ffffff;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin-top: 30px;

    @media (max-width: 991px) {
        max-width: 100%;
        margin: 30px auto 0;
    }
}

.selection-question {
    font-size: 16px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 20px;
    text-align: left;
}

.selection-options {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;

    @media (max-width: 575px) {
        flex-direction: column;
    }
}

.selection-btn {
    flex: 1;
    padding: 18px 20px;
    border: 2px solid #E0E0E0;
    border-radius: 12px;
    background: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    position: relative;

    i:first-child {
        font-size: 20px;
        color: #666666;
    }

    span {
        font-weight: 500;
    }

    &:hover {
        border-color: #086AD8;
        background: #F6FAFE;
    }

    &.active {
        border-color: #086AD8;
        background: #F6FAFE;
        color: #086AD8;

        i:first-child {
            color: #086AD8;
        }
    }

    .check-icon {
        position: absolute;
        top: 8px;
        right: 8px;
        font-size: 14px;
        color: #086AD8;
        background: #ffffff;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #086AD8;
    }
}

.quote-button-wrapper {
    margin-bottom: 15px;
}

.btn-quote {
    width: 100%;
    padding: 18px 30px;
    font-size: 18px;
    font-weight: 600;
    border-radius: 12px;
    background: #086AD8;
    color: #ffffff;
    border: none;
    transition: all 0.3s ease;
    text-transform: none;
    letter-spacing: 0;

    &:hover {
        background: #002FA6;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(8, 106, 216, 0.3);
        color: #ffffff;
    }
}

.existing-quote-link {
    text-align: center;

    a {
        font-size: 14px;
        color: #666666;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #086AD8;
        }
    }
}

.hero-portal-link {
    margin-top: 14px;
    text-align: center;
}

.hero-portal-link__btn {
    display: inline-block;
    padding: 12px 24px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 10px;
    text-decoration: none;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
    background: #ffffff;
    color: #086AD8;
    border: 2px solid #086AD8;

    &:hover {
        background: #086AD8;
        color: #ffffff;
        border-color: #086AD8;
    }

    &--portal {
        background: #086AD8;
        color: #ffffff;
        border-color: #086AD8;

        &:hover {
            background: #002FA6;
            border-color: #002FA6;
            color: #ffffff;
        }
    }
}

.insurance-hero-images-wrap {
    position: relative;
    z-index: 1;
}

.insurance-hero-images {
    position: relative;
    text-align: center;
}

.car-illustration {
    position: relative;
    animation: float 3s ease-in-out infinite;

    img, video, .hero-car-image {
        max-width: 100%;
        height: auto;
        filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
        display: block;
    }

    .hero-video {
        display: block;
        width: 100%;
        height: auto;
        object-fit: contain;
    }
}

.car-placeholder {
    text-align: center;
    padding: 50px 0;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) translateX(0);
    }
    25% {
        transform: translateY(-15px) translateX(5px);
    }
    50% {
        transform: translateY(-22px) translateX(0);
    }
    75% {
        transform: translateY(-12px) translateX(-5px);
    }
}

@media (max-width: 991px) {
    .insurance-hero-images {
        margin-top: 40px;
    }

    .car-illustration img,
    .car-illustration video {
        max-width: 80%;
    }
}
</style>
