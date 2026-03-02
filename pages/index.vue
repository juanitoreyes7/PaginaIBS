<template>
    <div class="main-container">

        <HeaderAppointment />

        <HeroInsurance />

        <BrandLogoCarousel />

        <CtaOne />

        <CaseStudiesSection />

        <CompanyHistory />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
import HeaderAppointment from '@/components/HeaderAppointment';
import HeroInsurance from '@/components/HeroInsurance';
import BrandLogoCarousel from '@/components/BrandLogoCarousel';
import CtaOne from '@/components/CtaOne';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import CompanyHistory from '@/components/sections/CompanyHistory';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';



export default {
    components: {
        HeaderAppointment,
        HeroInsurance,
        CtaOne,
        BrandLogoCarousel,
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