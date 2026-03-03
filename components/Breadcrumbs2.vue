<template>
    <div
        class="breadcrumb-area bg-cover"
        :class="{ 'breadcrumb-area--hero-size': heroSize }"
        :style="{ backgroundImage: `url('${bgImage}')` }"
    >
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_box text-center">
                        <h2 class="breadcrumb-title">{{ breadcrumbTitle }}</h2>
                        <p v-if="subtitle" class="breadcrumb-subtitle">{{ subtitle }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: { type: Array, default: () => [] },
        breadcrumbTitle: { type: String, default: '' },
        subtitle: { type: String, default: '' },
        heroSize: { type: Boolean, default: false },
        bgImage: { type: String, default: '/images/bg/titlesss.png' }
    }
};
</script>

<style scoped lang="scss">
/* Mismo tamaño que el hero de case-studies (Autos, GMM, Vida) */
.breadcrumb-area--hero-size {
    min-height: 420px;
    padding: 100px 0 60px !important;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        min-height: 360px;
        padding: 80px 0 50px !important;
    }
}

.breadcrumb-area--hero-size .breadcrumb-title {
    font-size: 38px;
    font-weight: 700;
    color: #002FA6;

    @media (max-width: 767px) {
        font-size: 28px;
    }
}

.breadcrumb-subtitle {
    margin: 16px 0 0;
    padding: 12px 28px;
    display: inline-block;
    background: linear-gradient(135deg, #086AD8 0%, #002FA6 100%);
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 50px;

    @media (max-width: 767px) {
        font-size: 13px;
        padding: 10px 20px;
        margin-top: 12px;
    }
}
</style>