<template>
    <div class="header-area header-area--default">

        <HeaderTop />

        <fixed-header :threshold="300">
            <div class="header-bottom-wrap">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header default-menu-style position-relative">
                                <div class="header__logo">
                                    <n-link to="/">
                                        <img src="/images/logo/logoIBS.png" class="img-fluid" alt="Brand Logo">
                                    </n-link>
                                </div>

                                <div class="header-midle-box">
                                    <div class="header-bottom-wrap d-md-block d-none">
                                        <div class="header-bottom-inner">
                                            <div class="header-bottom-left-wrap">
                                                <!-- navigation menu -->
                                                <div class="header__navigation d-none d-xl-block">
                                                    <nav class="navigation-menu primary--menu">
                                                        <Navigation />
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- header right box -->
                                <div class="header-right-box">
                                    <div class="header-right-inner" id="hidden-icon-wrapper">

                                        <!-- header-search-form -->
                                        <div class="header-search-form default-search">
                                            <form class="search-form-top">
                                                <input class="search-field" type="text" placeholder="Search…">
                                                <button class="search-submit">
                                                    <i class="search-btn-icon fa fa-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    <!-- mobile menu -->
                                    <div class="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger" @click="mobiletoggleClass('addClass', 'active')">
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </fixed-header>

    </div>
</template>

<script>
    import FixedHeader from 'vue-fixed-header'
    import HeaderTop from '@/components/HeaderTop';
    import Navigation from '@/components/Navigation';

    export default {
        components: {
            HeaderTop,
            Navigation,
            FixedHeader
        },
        methods: {
            // offcanvas mobilemenu open
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>