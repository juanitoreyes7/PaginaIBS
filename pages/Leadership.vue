<template>
    <div class="main-container">

        <TeamOne />

        <CtaContact />
        <CtaVideo />
        <ContactUsFour />

        <Footer />

        <OffCanvasMobileMenu />

    </div>
</template>

<script>
import TeamOne from '@/components/sections/TeamOne';
import CtaContact from '@/components/CtaContact';
import CtaVideo from '@/components/CtaVideo';
import ContactUsFour from '@/components/sections/ContactUsFour';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

export default {
    components: {
        TeamOne,
        CtaContact,
        CtaVideo,
        ContactUsFour,
        Footer,
        OffCanvasMobileMenu
    },
    data() {
        return {
            breadcrumbNavigation: [
                {
                    text: 'Home',
                    to: "/"
                },
                {
                    text: 'Leadership',
                    active: true
                }
            ]
        }
    },
    head() {
        return {
            title: 'Leadership'
        }
    }
};
</script>    