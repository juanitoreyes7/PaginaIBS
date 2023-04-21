
<template>
    <div class="main-container">

        <HeaderAppointment />

        <Breadcrumbs :items="breadcrumbNavigation" breadcrumbTitle="Contacto" />

        <ContactUsFour />


        <CtaOne />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactUsFour from '@/components/sections/ContactUsFour';
import CtaOne from '@/components/CtaOne';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    name: 'contact',
    components: {
        HeaderAppointment,
        Breadcrumbs,
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