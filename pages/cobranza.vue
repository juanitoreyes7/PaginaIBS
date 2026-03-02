<template>
    <div class="main-container">
        <HeaderAppointment />

        <Breadcrumbs2
            :items="breadcrumbNavigation"
            breadcrumbTitle="Cobranza"
            subtitle="IBS Consultores tu mejor Agente de Seguros y de Fianzas"
            :hero-size="true"
            bg-image="/images/bg/COBRANZA.png"
        />

        <AdvisoryButtonsCobranza />

        <InsuranceDirectoryCobranza />

        <Footer />

        <OffCanvasMobileMenu />
    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Breadcrumbs2 from '@/components/Breadcrumbs2';
import AdvisoryButtonsCobranza from '@/components/sections/AdvisoryButtonsCobranza';
import InsuranceDirectoryCobranza from '@/components/sections/InsuranceDirectoryCobranza';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    name: 'Cobranza',
    components: {
        HeaderAppointment,
        Breadcrumbs2,
        AdvisoryButtonsCobranza,
        InsuranceDirectoryCobranza,
        Footer,
        OffCanvasMobileMenu
    },
    head() {
        return {
            title: 'Cobranza - IBS Consultores'
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
                    text: 'Cobranza',
                    active: true
                }
            ]
        }
    }
};
</script>