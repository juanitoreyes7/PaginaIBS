<template>
    <div class="main-container">

        <HeaderAppointment />

        <Breadcrumbs :items="breadcrumbNavigation" breadcrumbTitle="Seguros" />

        <CaseStudiesItemWrapper />

        <CtaOne/>

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderAppointment from '@/components/HeaderAppointment';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import CtaOne from '@/components/CtaOne';
    import CaseStudiesItemWrapper from '@/components/sections/CaseStudiesItemWrapper';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            HeaderAppointment,
            Breadcrumbs,
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