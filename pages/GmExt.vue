
<template>
    <div class="main-container">

        <Breadcrumbs2 :items="breadcrumbNavigation" breadcrumbTitle="Cotización Vida" />

        <CotizaGmExt />


        <OffCanvasMobileMenu />

    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Breadcrumbs2 from '@/components/Breadcrumbs2';
import CotizaGmExt from '@/components/sections/CotizaGmExt';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    name: 'contact',
    components: {
        HeaderAppointment,
        Breadcrumbs2,
        CotizaGmExt,
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