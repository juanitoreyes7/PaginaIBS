<template>
    <div class="main-container">

        <Header />

        <Breadcrumbs :items="breadcrumbNavigation" breadcrumbTitle="Box Image" />

        <ServiceIT />

        <ServiceStyleThree />

        <FeatureGallery />

        <ServiceStyleSix />

        <CtaThree />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import ServiceIT from '@/components/ServiceIT';
    import ServiceStyleThree from '@/components/sections/ServiceStyleThree';
    import FeatureGallery from '@/components/sections/FeatureGallery';
    import ServiceStyleSix from '@/components/sections/ServiceStyleSix';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            ServiceIT,
            ServiceStyleThree,
            FeatureGallery,
            ServiceStyleSix,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        },
        head() {
            return {
                title: 'Box Image'
            }
        },
        data () {
            return {
                breadcrumbNavigation: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Box Image',
                        active: true
                    }
                ]
            }
        }
    };
</script>