<template>
    <div class="main-container">

        <Header />

        <Breadcrumbs :items="breadcrumbNavigation" breadcrumbTitle="Box Icon" />

        <ServiceStyleFive />

        <ServiceStyleTwo class="bg-gray" />

        <FeatureGalleryFour />

        <CtaThree />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import ServiceStyleFive from '@/components/sections/ServiceStyleFive';
    import ServiceStyleTwo from '@/components/sections/ServiceStyleTwo';
    import FeatureGalleryFour from '@/components/sections/FeatureGalleryFour';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            ServiceStyleFive,
            ServiceStyleTwo,
            FeatureGalleryFour,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        },
        head() {
            return {
                title: 'Box Icon'
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
                        text: 'Box Icon',
                        active: true
                    }
                ]
            }
        }
    };
</script>