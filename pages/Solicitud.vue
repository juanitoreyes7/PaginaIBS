
<template>
    <div class="main-container">

        <HeaderAppointment />

        <Breadcrumbs2 :items="breadcrumbNavigation" breadcrumbTitle="Visteon" />

        <CtaOne1 />

        <ContactUsInfo1 />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import Breadcrumbs2 from '@/components/Breadcrumbs2';
import ContactUsInfo1 from '@/components/ContactUsInfo1';
import CtaOne1 from '@/components/CtaOne1';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    name: 'contact',
    components: {
        HeaderAppointment,
        Breadcrumbs2,
        ContactUsInfo1,
        CtaOne1,
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