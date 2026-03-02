<template>
    <div class="main-container">
        <HeaderAppointment />

        <PageHeader />

        <AboutUsHero />

        <CompañiasSegurosSection />

        <FormacionExperienciaSection />

        <DirectoresSection />

        <PremiosSection />

        <TiposSegurosSection />

        <Footer />

        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import HeaderAppointment from '@/components/HeaderAppointment';
    import PageHeader from '@/components/PageHeader';
    import AboutUsHero from '@/components/sections/AboutUsHero';
    import FormacionExperienciaSection from '@/components/sections/FormacionExperienciaSection';
    import DirectoresSection from '@/components/sections/DirectoresSection';
    import PremiosSection from '@/components/sections/PremiosSection';
    import CompañiasSegurosSection from '@/components/sections/CompañiasSegurosSection';
    import TiposSegurosSection from '@/components/sections/TiposSegurosSection';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        name: 'about',
        components: {
            HeaderAppointment,
            PageHeader,
            AboutUsHero,
            FormacionExperienciaSection,
            DirectoresSection,
            PremiosSection,
            CompañiasSegurosSection,
            TiposSegurosSection,
            Footer,
            OffCanvasMobileMenu
        },
        head() {
            return {
                title: 'Nosotros - IBS Consultores',
                meta: [
                    { 
                        hid: 'description', 
                        name: 'description', 
                        content: 'IBS Consultores - Despacho integrado por profesionistas dedicados a la asesoría y consultoría en seguros y fianzas, así como la administración de riesgos desde 1998.' 
                    }
                ]
            }
        }
    };
</script>