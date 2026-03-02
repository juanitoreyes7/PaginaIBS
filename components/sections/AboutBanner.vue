<template>
    <div class="about-banner">
        <div class="banner-overlay"></div>
        <div class="banner-image-wrapper">
            <img 
                src="/images/nosotros/local.jpg" 
                alt="Local IBS Consultores"
                class="banner-image"
                @error="handleImageError"
            >
        </div>
        <div class="banner-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner-text-content">
                            <h1 class="banner-title">IBS CONSULTORES</h1>
                            <p class="banner-subtitle">Tu Mejor Agente de Seguros y de Fianzas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutBanner',
    methods: {
        handleImageError(event) {
            event.target.style.display = 'none';
            const parent = event.target.parentElement;
            if (parent && !parent.querySelector('.image-placeholder')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'image-placeholder';
                placeholder.innerHTML = '<i class="fas fa-building"></i><p>Imagen no disponible</p>';
                parent.appendChild(placeholder);
            }
        }
    }
};
</script>

<style scoped lang="scss">
.about-banner {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 991px) {
        height: 400px;
    }

    @media (max-width: 575px) {
        height: 300px;
    }
}

.banner-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #002FA6 0%, #086AD8 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;

    i {
        font-size: 64px;
        margin-bottom: 15px;
        opacity: 0.7;
    }

    p {
        margin: 0;
        font-size: 18px;
        opacity: 0.8;
    }
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        rgba(0, 47, 166, 0.85) 0%,
        rgba(8, 106, 216, 0.75) 50%,
        rgba(227, 242, 253, 0.6) 100%
    );
    z-index: 2;
    backdrop-filter: blur(2px);
}

.banner-content {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.banner-text-content {
    text-align: center;
    color: #ffffff;
    padding: 40px 20px;
}

.banner-title {
    font-size: 56px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
    line-height: 1.2;
    text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;

    @media (max-width: 991px) {
        font-size: 42px;
    }

    @media (max-width: 575px) {
        font-size: 32px;
        margin-bottom: 15px;
    }
}

.banner-subtitle {
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    margin: 0;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;

    @media (max-width: 991px) {
        font-size: 20px;
    }

    @media (max-width: 575px) {
        font-size: 18px;
    }
}
</style>