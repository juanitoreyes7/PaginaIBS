<template>
    <div class="main-container">

        <HeaderAppointment />

        <HeroCybersecurity />

        <BrandLogoCarousel />

        <CtaOne />

        <CaseStudiesSection />

        <ContactUsFour />

        <CompanyHistory />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import HeroCybersecurity from '@/components/HeroCybersecurity';
import BrandLogoCarousel from '@/components/BrandLogoCarousel';
import CtaOne from '@/components/CtaOne';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import CompanyHistory from '@/components/sections/CompanyHistory';
import ContactUsFour from '@/components/sections/ContactUsFour';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';



export default {
    components: {
        HeaderAppointment,
        HeroCybersecurity,
        CtaOne,
        BrandLogoCarousel,
        ContactUsFour,
        CaseStudiesSection,
        CompanyHistory,
        Footer,
        OffCanvasMobileMenu
    },
    head() {
        return {
            title: 'IBS Consultores'
        }
    }
};
</script>