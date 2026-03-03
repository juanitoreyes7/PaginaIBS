<template>
    <div class="main-container">

        <HeaderAppointment />

        <Breadcrumbs2
            :items="breadcrumbNavigation"
            breadcrumbTitle="Seguros"
            subtitle="IBS Consultores tu mejor Agente de Seguros y de Fianzas"
            :hero-size="true"
            bg-image="/images/bg/SEGUROS.png"
        />

        <CaseStudiesItemWrapper />

        <CtaOne/>

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderAppointment from '@/components/HeaderAppointment';
    import Breadcrumbs2 from '@/components/Breadcrumbs2';
    import CtaOne from '@/components/CtaOne';
    import CaseStudiesItemWrapper from '@/components/sections/CaseStudiesItemWrapper';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            HeaderAppointment,
            Breadcrumbs2,
            CtaOne,
            CaseStudiesItemWrapper,
            Footer,
            OffCanvasMobileMenu
        },
        head() {
            return {
                title: 'Seguros'
            }
        },
        data () {
            return {
                breadcrumbNavigation: [
                    {
                        text: 'IBS',
                        to: "/"
                    },
                    {
                        text: 'Consultores',
                        active: true
                    }
                ]
            }
        }
    };
</script>