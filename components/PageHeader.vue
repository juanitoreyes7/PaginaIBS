<template>
    <div class="page-header-banner">
        <div class="banner-image-wrapper">
            <img 
                src="/images/nosotros/local.jpg" 
                alt="Local IBS Consultores"
                class="banner-image"
                @error="handleImageError"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
    props: ['title', 'subTitle', 'bgImg'],
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
.page-header-banner {
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
        height: 350px;
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

.banner-content {
    position: relative;
    z-index: 2;
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
    max-width: 900px;
    margin: 0 auto;
}

.banner-title {
    font-size: 56px;
    font-weight: 700;
    color: #002FA6;
    margin-bottom: 25px;
    line-height: 1.2;
    text-shadow: 2px 4px 8px rgba(255, 255, 255, 0.8);
    letter-spacing: 1px;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px 40px;
    border-radius: 12px;
    display: inline-block;

    @media (max-width: 991px) {
        font-size: 42px;
        margin-bottom: 20px;
    }

    @media (max-width: 575px) {
        font-size: 32px;
        margin-bottom: 15px;
    }
}

.banner-subtitle {
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    margin: 0;
    line-height: 1.6;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 991px) {
        font-size: 18px;
    }

    @media (max-width: 575px) {
        font-size: 16px;
    }
}
</style>