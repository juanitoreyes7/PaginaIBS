
<template>
    <div class="main-container">

        <Breadcrumbs2 :items="breadcrumbNavigation" breadcrumbTitle="Cotización Hogar" />

        <CotHogar />


        <OffCanvasMobileMenu />

    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Breadcrumbs2 from '@/components/Breadcrumbs2';
import CotHogar from '@/components/sections/CotHogar';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    name: 'contact',
    components: {
        HeaderAppointment,
        Breadcrumbs2,
        CotHogar,
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