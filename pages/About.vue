<template>
    <div class="main-container">
        
        <HeaderAppointment />

        <PageHeader />

        <CaseStudiesSection />

        <BrandLogoCarousel />

        <ContactUsThree />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderAppointment from '@/components/HeaderAppointment';
    import PageHeader from '@/components/PageHeader';
    import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
    import BrandLogoCarousel from '@/components/BrandLogoCarousel';
    import ContactUsThree from '@/components/sections/ContactUsThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        name: 'about',
        components: {
            HeaderAppointment,
            PageHeader,
            CaseStudiesSection,
            BrandLogoCarousel,
            ContactUsThree,
            Footer,
            OffCanvasMobileMenu
        },
        head() {
            return {
                title: 'Nosotros',
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