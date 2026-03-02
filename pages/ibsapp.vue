<template>
    <div class="main-container">

        <HeaderAppointment />

        <Breadcrumbs2
            :items="breadcrumbNavigation"
            breadcrumbTitle="IBSApp"
            subtitle="IBS Consultores tu mejor Agente de Seguros y de Fianzas"
            :hero-size="true"
            bg-image="/images/bg/APP.png"
        />

        <IBSAppSection />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Breadcrumbs2 from '@/components/Breadcrumbs2';
import IBSAppSection from '@/components/sections/IBSAppSection';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    name: 'IBSAppPage',
    components: {
        HeaderAppointment,
        Breadcrumbs2,
        IBSAppSection,
        Footer,
        OffCanvasMobileMenu
    },
    head() {
        return {
            title: 'IBSApp - IBS Consultores'
        };
    },
    data() {
        return {
            breadcrumbNavigation: [
                {
                    text: 'Inicio',
                    to: '/'
                },
                {
                    text: 'IBSApp',
                    active: true
                }
            ]
        };
    }
};
</script>

