<template>
    <div class="main-container">

        <HeaderAppointment />

        <Breadcrumbs :items="breadcrumbNavigation" breadcrumbTitle="Blogs" />

        <BlogPageWrapper />

        <CtaThree />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import HeaderAppointment from '@/components/HeaderAppointment';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import BlogPageWrapper from '@/components/sections/BlogPageWrapper';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    
    export default {
        components: {
            HeaderAppointment,
            Breadcrumbs,
            BlogPageWrapper,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        },
        head() {
            return {
                title: 'Blogs'
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
                        text: 'Blogs',
                        active: true
                    }
                ]
            }
        },
    };
</script>