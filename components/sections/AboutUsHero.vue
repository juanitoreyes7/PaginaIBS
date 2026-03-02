<template>
    <div class="about-us-hero section-space--ptb_100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="about-hero-content">
                        <h1 class="about-hero-title">IBS CONSULTORES</h1>
                        <h2 class="about-hero-subtitle">Acerca de nosotros</h2>
                        <p class="about-hero-description">
                            Somos un despacho integrado por profesionistas dedicados a la asesoría y consultoría en seguros y fianzas, así como la administración de riesgos desde 1998.
                        </p>
                        <p class="about-hero-description">
                            En IBS Consultores somos especialistas en Seguros y Fianzas, nos damos a la tarea de asesorar adecuadamente a nuestros clientes y asegurados con el fin de cubrir sus necesidades de seguridad y estabilidad económica ante cualquier contingencia.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-hero-image">
                        <div class="logo-display">
                            <img 
                                src="/images/logo/logoIBS.png" 
                                alt="IBS Consultores Logo"
                                class="logo-image"
                                @error="handleImageError"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUsHero',
    methods: {
        handleImageError(event) {
            event.target.style.display = 'none';
            const parent = event.target.parentElement;
            if (parent && !parent.querySelector('.logo-placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'logo-placeholder';
                placeholder.innerHTML = `
                    <div class="logo-banner">
                        <p class="logo-top-text">Insurance Business Services</p>
                        <h2 class="logo-main">IBS</h2>
                        <p class="logo-bottom-text">Consultores</p>
                        <p class="logo-tagline">Asesores en Seguros & Fianzas</p>
                    </div>
                `;
                parent.appendChild(placeholder);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.about-us-hero {
    background: linear-gradient(135deg, #F8F9FA 0%, #E3F2FD 100%);
    padding: 80px 0;
}

.about-hero-content {
    padding-right: 40px;

    @media (max-width: 991px) {
        padding-right: 0;
        margin-bottom: 40px;
        text-align: center;
    }
}

.about-hero-title {
    font-size: 48px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 15px;
    line-height: 1.2;

    @media (max-width: 991px) {
        font-size: 38px;
    }

    @media (max-width: 575px) {
        font-size: 32px;
    }
}

.about-hero-subtitle {
    font-size: 28px;
    font-weight: 600;
    color: #086AD8;
    margin-bottom: 25px;

    @media (max-width: 991px) {
        font-size: 24px;
    }

    @media (max-width: 575px) {
        font-size: 20px;
    }
}

.about-hero-description {
    font-size: 16px;
    color: #333333;
    line-height: 1.8;
    margin-bottom: 20px;

    @media (max-width: 575px) {
        font-size: 15px;
    }
}

.about-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.logo-display {
    position: relative;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-image {
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2));
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
}

.logo-placeholder {
    width: 100%;
    max-width: 400px;

    .logo-banner {
        background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
        border-radius: 20px;
        padding: 40px 30px;
        box-shadow: 0 15px 40px rgba(0, 47, 166, 0.3);
        text-align: center;
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
        }

        @media (max-width: 575px) {
            padding: 30px 20px;
        }
    }

    .logo-top-text {
        font-size: 12px;
        color: #FFD700;
        margin-bottom: 10px;
        font-weight: 500;
        letter-spacing: 1px;
        position: relative;
        z-index: 1;
    }

    .logo-main {
        font-size: 72px;
        font-weight: 700;
        color: #FFD700;
        margin: 10px 0;
        line-height: 1;
        position: relative;
        z-index: 1;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

        @media (max-width: 575px) {
            font-size: 56px;
        }
    }

    .logo-bottom-text {
        font-size: 24px;
        color: #ffffff;
        margin-bottom: 8px;
        font-weight: 600;
        position: relative;
        z-index: 1;

        @media (max-width: 575px) {
            font-size: 20px;
        }
    }

    .logo-tagline {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.9);
        margin: 0;
        position: relative;
        z-index: 1;
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>