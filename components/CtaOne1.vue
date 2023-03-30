<template>
    <div class="cta-image-area_one section-space--ptb_80 cta-bg-image_two"
        :style="{ backgroundImage: `url('/images/patterns/mitech-home-appointment-call-to-action-bg-image.png')` }">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="cta-content md-text-center">
                        <h3 class="heading text-center section-space--mb_40" v-html="data.ctaOne1.title">{{
                            data.ctaOne1.title
                            }}</h3>
                    </div>
                </div>
                <div class="col-xl-12 col-lg-4">
                    <div class="cta-button-group--two text-center">

                        <a href="https://forms.gle/8Uv7ZucGmuEjMYuh7" target="_blank" class="btn btn--white btn-one">
                            <span class="btn-icon mr-2">
                                <i class="far fa-success"></i>
                            </span>
                            Llenar Formulario
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '../data/cta.json';
export default {
    data() {
        return {
            data
        }
    }
};
</script>