<template>
    <div class="main-container">
        
        <HeaderAppointment />

        <Breadcrumbs :items="breadcrumbNavigation" breadcrumbTitle="Preguntas Frecuentes." />

        <AboutDelivery />

        <BrandLogoCarousel />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderAppointment from '@/components/HeaderAppointment';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import AboutDelivery from '@/components/AboutDelivery';
    import BrandLogoCarousel from '@/components/BrandLogoCarousel';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        name: 'about',
        components: {
            HeaderAppointment,
            Breadcrumbs,
            AboutDelivery,
            BrandLogoCarousel,
            Footer,
            OffCanvasMobileMenu
        },
        head() {
            return {
                title: 'About Us',
                meta: [
                    { 
                        hid: 'description', 
                        name: 'description', 
                        content: 'About our description' 
                    }
                ]
            }
        }
    };
</script>