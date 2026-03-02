
<template>
    <div class="main-container">

        <HeaderAppointment />

        <Breadcrumbs2
            :items="breadcrumbNavigation"
            breadcrumbTitle="Contacto"
            subtitle="IBS Consultores tu mejor Agente de Seguros y de Fianzas"
            :hero-size="true"
            bg-image="/images/bg/CONTACTO.png"
        />

        <ContactUsFour />


        <CtaOne />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Breadcrumbs2 from '@/components/Breadcrumbs2';
import ContactUsFour from '@/components/sections/ContactUsFour';
import CtaOne from '@/components/CtaOne';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    name: 'contact',
    components: {
        HeaderAppointment,
        Breadcrumbs2,
        ContactUsFour,
        CtaOne,
        Footer,
        OffCanvasMobileMenu
    },
    head() {
        return {
            title: 'Contacto'
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