<template>
    <div class="our-company-history section-space--ptb_100">
        <div class="container-fluid">
            <div class="grid-wrapper">
                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
                <div class="line line-4"></div>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="faq-custom-col">
                        <div class="section-title-wrap">
                            <h6 class="section-sub-title mb-20">Video Corporativo</h6>
                            <h3 class="heading">IBS Consultores<br><span>Tu Mejor Agente de Seguros y de Fianzas</span></h3>
                            <p class="text mt-30">Conoce más sobre nosotros y nuestros servicios de seguros y fianzas.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <CorporateVideo />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CorporateVideo from '@/components/CorporateVideo';

export default {
    components: {
        CorporateVideo
    }
};
</script>