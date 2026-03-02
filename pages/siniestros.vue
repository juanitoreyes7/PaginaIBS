<template>
    <div class="main-container">
        <HeaderAppointment />

        <Breadcrumbs2
            :items="breadcrumbNavigation"
            breadcrumbTitle="Siniestros"
            subtitle="IBS Consultores tu mejor Agente de Seguros y de Fianzas"
            :hero-size="true"
        />

        <AdvisoryButtons />

        <InsuranceDirectory />

        <Footer />

        <OffCanvasMobileMenu />
    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Breadcrumbs2 from '@/components/Breadcrumbs2';
import AdvisoryButtons from '@/components/sections/AdvisoryButtons';
import InsuranceDirectory from '@/components/sections/InsuranceDirectory';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    name: 'Siniestros',
    components: {
        HeaderAppointment,
        Breadcrumbs2,
        AdvisoryButtons,
        InsuranceDirectory,
        Footer,
        OffCanvasMobileMenu
    },
    head() {
        return {
            title: 'Siniestros - IBS Consultores'
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
                    text: 'Siniestros',
                    active: true
                }
            ]
        }
    }
};
</script>