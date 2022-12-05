<template>
    <div class="main-container">

        <Header />

        <Breadcrumbs :items="breadcrumbNavigation" breadcrumbTitle="Team Members" />

        <TeamOne />

        <TeamTwo class="bg-gray" />

        <CtaThree />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import TeamOne from '@/components/sections/TeamOne';
    import TeamTwo from '@/components/sections/TeamTwo';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    export default {
        components: {
            Header,
            Breadcrumbs,
            TeamOne,
            TeamTwo,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        },
        head() {
            return {
                title: 'Team Members'
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
                        text: 'Team Members',
                        active: true
                    }
                ]
            }
        }
    };
</script>