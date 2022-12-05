<template>
    <div class="header-area header-sticky">
       <!-- <div class="header-top-bar-info bg-gray d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="top-bar-wrap">
                            <div class="top-bar-left">
                                <div class="top-bar-text"></div>
                            </div>
                            <div class="top-bar-right">
                                <ul class="top-bar-info">
                                    <li class="info-item">
                                        <a href="" class="info-link">
                                            <i class="info-icon fa fa-user"></i>
                                            <span class="info-text"><strong>Iniciar Sesión</strong></span>
                                        </a>
                                    </li>
                                    <li class="info-item">
                                        <a href="" class="info-link">
                                            <i class="info-icon fa fa-user-plus"></i>
                                            <span class="info-text"><strong>Registrate</strong></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->  
        
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="header position-relative">
                        <!-- brand logo -->
                        <div class="header__logo top-logo">
                            <n-link to="/">
                                <img src="/images/logo/logoIBS.png" class="img-fluid" alt="Brand Logo">
                            </n-link>
                        </div>

                        <div class="header-right flexible-image-slider-wrap">

                            <div class="header-right-inner" id="hidden-icon-wrapper">
                                <!-- Header Search Form -->
                                <div class="header-search-form d-md-none d-block">
                                    <form class="search-form-top">
                                        <input class="search-field" type="text" placeholder="Search…">
                                        <button class="search-submit">
                                            <i class="search-btn-icon fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>

                                <!-- Header Top Info -->
                                <div class="header-top-info-slider-werap top-info-slider__container">
                                    <div class="header-top-info-inner default-color">
                                        <swiper :options="swiperOption">
                                            <div class="swiper-slide">
                                                <div class="info-item">
                                                    <div class="info-icon">
                                                        <span class="fa fa-phone"></span>
                                                    </div>
                                                    <div class="info-content"><p></p>
                                                        <h6 class="info-title"> +52 614 414 8936</h6>
                                                        <div class="info-sub-title">contacto@ibsconsultores.com</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="info-item">
                                                    <div class="info-icon">
                                                        <span class="fa fa-map-marker-alt"></span>
                                                    </div>
                                                    <div class="info-content"><p></p>
                                                        <h6 class="info-title">González Cossio 3705 Col. Las granjas</h6>
                                                        <div class="info-sub-title">Chihuahua, Chih, Mx</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="info-item">
                                                    <div class="info-icon">
                                                        <span class="fa fa-clock"></span>
                                                    </div>
                                                    <div class="info-content">
                                                        <h6 class="info-title">Lunes a Viernes</h6>
                                                        <div class="info-sub-title"> 8:30AM - 6:00PM</div>
                                                        <h6 class="info-title">Sábados</h6>
                                                        <div class="info-sub-title"> 9:00AM - 1:00PM</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="info-item">
                                                    <div class="info-icon">
                                                        <span class="fab fa-whatsapp link-icon"></span>
                                                    </div>
                                                    <div class="info-content"><p></p>
                                                        <h6 class="info-title">Whatsapp 24/7</h6>
                                                        <div class="info-sub-title">+52 614 240 8116</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </swiper>
                                    </div>
                                </div>

                                <!-- Header Social Networks -->
                                <div class="header-social-networks style-icons">
                                    <div class="inner">
                                        <a class=" social-link hint--black hint--bottom-left" aria-label="Twitter" href="https://twitter.com/IBSCONSULTORES" data-hover="Twitter" target="_blank">
                                            <i class="social-icon fab fa-twitter"></i>
                                        </a>
                                        <a class=" social-link hint--black hint--bottom-left" aria-label="Facebook" href="https://www.facebook.com/ibsconsultores/" data-hover="Facebook" target="_blank">
                                            <i class="social-icon fab fa-facebook-f"></i>
                                        </a>
                                        <a class=" social-link hint--black hint--bottom-left" aria-label="Instagram" href="https://www.instagram.com/ibsconsultores/" data-hover="Instagram" target="_blank">
                                            <i class="social-icon fab fa-instagram"></i>
                                        </a>
                                        <a class=" social-link hint--black hint--bottom-left" aria-label="Linkedin" href="https://www.linkedin.com/company/ibsconsultores/mycompany/" data-hover="Linkedin" target="_blank">
                                            <i class="social-icon fab fa-linkedin"></i>
                                        </a>
                                    </div>
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

        <fixed-header :threshold="300">
            <div class="header-bottom-wrap bg-theme-default d-lg-block d-none">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header-bottom-inner">
                                <div class="header-bottom-left-wrap">
                                    <!-- navigation menu -->
                                    <div class="header__navigation d-none d-xl-block">
                                        <nav class="navigation-menu navigation-menu--text_white">
                                            <Navigation />
                                        </nav>
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
    import FixedHeader from 'vue-fixed-header';
    import Navigation from '@/components/Navigation';
    
    export default {
        components: {
            FixedHeader,
            Navigation
        },
        data () {
            return {
                swiperOption: {
                    slidesPerView : 3,
                    slidesPerGroup: 1,
                    loop: true,
                    speed: 1000,
                    autoplay: true,
                    spaceBetween : 30,
                    breakpoints: {
                        1200:{
                            slidesPerView : 3
                        },

                        992:{
                            slidesPerView : 2
                        },

                        575:{
                            slidesPerView : 1
                        }
                    }
                }
            }
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