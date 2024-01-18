
<template>
    <div class="main-container">

        <Breadcrumbs2 :items="breadcrumbNavigation" breadcrumbTitle="Cotización GMM" />

        <CotizaGmm />


        <OffCanvasMobileMenu />

    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Breadcrumbs2 from '@/components/Breadcrumbs2';
import CotizaGmm from '@/components/sections/CotizaGmm';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    name: 'contact',
    components: {
        HeaderAppointment,
        Breadcrumbs2,
        CotizaGmm,
        OffCanvasMobileMenu,
    },
    head() {
        return {
            title: 'Contact Us'
        }
    },
    data() {
        return {
            breadcrumbNavigation: [
                {
                    text: 'Home',
                    to: "/"
                },
                {
                    text: 'Contact Us',
                    active: true
                }
            ]
        }
    }
};
</script>