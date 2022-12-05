<template>
    <div class="header-area header-area--absolute">
        <div class="header-top-bar-info border-bottom d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="top-bar-wrap">
                            <div class="top-bar-left">
                                <div class="top-bar-text text-white">
                                    <n-link to="/" class="font-medium display-inline">Now Hiring:</n-link>
                                    Are you a driven and motivated 1st Line IT Support Engineer?
                                </div>
                            </div>
                            <div class="top-bar-right">
                                <ul class="top-bar-info">
                                    <li class="info-item">
                                        <a href="tel:01228899900" class="info-link text-white">
                                            <i class="info-icon fa fa-phone"></i>
                                            <span class="info-text"><strong>0122 8899900</strong></span>
                                        </a>
                                    </li>
                                    <li class="info-item text-white">
                                        <i class="info-icon fa fa-map-marker-alt"></i>
                                        <span class="info-text">58 Howard Street #2 San Francisco</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <fixed-header :threshold="300">
            <div class="header-bottom-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header position-relative">
                                <!-- brand logo -->
                                <div class="header__logo">
                                    <n-link to="/resolution">
                                        <img src="/images/logo/light-logo.png" class="img-fluid light-logo" alt="Brand Logo">
                                        <img src="/images/logo/logo-dark.png" class="img-fluid dark-logo" alt="Brand Logo">
                                    </n-link>
                                </div>

                                <div class="header-right">
                                    <!-- navigation menu -->
                                    <div class="header__navigation menu-style-four d-none d-xl-block">
                                        <nav class="navigation-menu">
                                            <Navigation />
                                        </nav>
                                    </div>

                                    <div class="header-search-form-two white-icon">
                                        <div class="search-icon" id="search-overlay-trigger" @click="toggleClass('addClass', 'active')">
                                            <a href="javascript:void(0)">
                                                <i class="fa fa-search"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <!-- mobile menu -->
                                    <div class="mobile-navigation-icon white-md-icon d-block d-xl-none" id="mobile-menu-trigger" @click="mobiletoggleClass('addClass', 'active')">
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
    import Navigation from '@/components/Navigation';

    export default {
        components: {
            FixedHeader,
            Navigation,
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

            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-overlay');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>