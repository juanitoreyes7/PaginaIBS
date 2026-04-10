<template>
    <div class="header-area header-sticky">
        <!-- Top Info Bar -->
        <div class="header-top-bar bg-white d-none d-lg-block">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="header-top-content">
                            <!-- Logo and Company Name -->
                            <div class="header-top-left">
                                <div class="company-logo-wrapper">
                                    <n-link to="/" class="company-logo-link">
                                        <img src="/images/logo/logoIBSNegro.png" class="company-logo-img" alt="IBS Consultores">
                                    </n-link>
                                </div>
                            </div>

                            <!-- Contact Information -->
                            <div class="header-top-center">
                                <div class="contact-info-grid">
                                    <!-- Operating Hours -->
                                    <div class="contact-item">
                                        <i class="fas fa-clock contact-icon"></i>
                                        <div class="contact-text">
                                            <span class="contact-label">Lunes a Viernes</span>
                                            <span class="contact-value">8:30AM - 6:00PM</span>
                                            <span class="contact-label">Sábados</span>
                                            <span class="contact-value">9:00AM - 1:00PM</span>
                                        </div>
                                    </div>

                                    <!-- WhatsApp -->
                                    <div class="contact-item">
                                        <i class="fab fa-whatsapp contact-icon whatsapp-icon"></i>
                                        <div class="contact-text">
                                            <span class="contact-label">Whatsapp 24/7</span>
                                            <a href="https://wa.me/526142408116" target="_blank" class="contact-value link">+52 614 240 8116</a>
                                        </div>
                                    </div>

                                    <!-- Phone and Email -->
                                    <div class="contact-item">
                                        <i class="fas fa-phone contact-icon"></i>
                                        <div class="contact-text">
                                            <a href="tel:+528007770911" class="contact-value link">+52 800 777 09 11</a>
                                            <a href="mailto:contacto@ibsconsultores.com" class="contact-value link">contacto@ibsconsultores.com</a>
                                        </div>
                                    </div>

                                    <!-- Location -->
                                    <div class="contact-item">
                                        <i class="fas fa-map-marker-alt contact-icon"></i>
                                        <div class="contact-text">
                                            <a href="https://www.google.com/maps/search/?api=1&query=Manuel+González+Cossio+3703+Col.+Las+granjas,+Chihuahua,+Chih" target="_blank" class="contact-value link address-link">Manuel González Cossio 3703<br>
                                            Col. Las granjas, Chihuahua, Chih</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Social Media -->
                            <div class="header-top-right">
                                <div class="social-networks-compact">
                                    <a href="https://twitter.com/IBSCONSULTORES" target="_blank" class="social-link" aria-label="Twitter">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.facebook.com/ibsconsultores/" target="_blank" class="social-link" aria-label="Facebook">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.instagram.com/ibsconsultores/" target="_blank" class="social-link" aria-label="Instagram">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/ibsconsultores/mycompany/" target="_blank" class="social-link" aria-label="LinkedIn">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation Bar -->
        <fixed-header :threshold="300">
            <div class="header-bottom-wrap navigation-blue-bar">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="header-bottom-inner">
                                <!-- Mobile Logo -->
                                <div class="header__logo-mobile d-lg-none">
                                    <n-link to="/">
                                        <img src="/images/logo/logoIBS.png" class="img-fluid" alt="Brand Logo">
                                    </n-link>
                                </div>

                                <!-- Navigation Menu -->
                                <div class="header__navigation header__navigation--with-logout">
                                    <nav class="navigation-menu navigation-menu--text_white">
                                        <!-- Menú completo para visitantes -->
                                        <Navigation v-if="!isLoggedIn" />

                                        <!-- Menú reducido para usuarios conectados -->
                                        <ul v-else class="navigation-single">
                                  
                                            <li>
                                                <n-link to="/portafolio-polizas">
                                                    <span>Mis pólizas</span>
                                                </n-link>
                                            </li>
                                            <li>
                                                <n-link to="/ibsapp">
                                                    <span>IBSApp</span>
                                                </n-link>
                                            </li>
                                            <li>
                                                <n-link to="/agente">
                                                    <span>Únete como agente</span>
                                                </n-link>
                                            </li>
                                            <li>
                                                <n-link to="/contact">
                                                    <span>Contacto</span>
                                                </n-link>
                                            </li>
                                        </ul>
                                    </nav>
                                    
                                    <button
                                        v-if="isLoggedIn"
                                        type="button"
                                        class="header-logout-btn"
                                        @click="cerrarSesion"
                                    >
                                        <i class="fas fa-sign-out-alt"></i>
                                        <span>Cerrar sesión</span>
                                    </button>
                                </div>

                                <!-- Mobile Menu Toggle -->
                                <div class="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger"
                                    @click="mobiletoggleClass('addClass', 'active')">
                                    <i></i>
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
    data() {
        return {
            isLoggedIn: false
        };
    },
    mounted() {
        if (process.client && this.$auth && this.$auth.onAuthStateChanged) {
            this.$auth.onAuthStateChanged((user) => {
                this.isLoggedIn = !!user;
            });
        }
    },
    methods: {
        async cerrarSesion() {
            if (this.$auth) {
                await this.$auth.signOut();
                this.$router.push('/login');
            }
        },
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

<style scoped lang="scss">
.header-top-bar {
    border-bottom: 1px solid #E4E8F6;
    padding: 10px 0;
    font-size: 12px;

    @media (max-width: 1400px) {
        padding: 12px 0;
    }

    @media (max-width: 1200px) {
        padding: 15px 0;
    }
}

.header-top-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 1400px) {
        gap: 15px;
    }

    @media (max-width: 1200px) {
        gap: 12px;
    }
}

.header-top-left {
    flex-shrink: 0;
}

.company-logo-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
        gap: 10px;
    }
}

.company-logo-link {
    display: flex;
    align-items: center;
}

.company-logo-img {
    height: 100px;
    width: auto;
    object-fit: contain;
    max-width: 100%;
    transition: height 0.3s ease;

    @media (max-width: 1400px) {
        height: 85px;
    }

    @media (max-width: 1200px) {
        height: 70px;
    }
}

.navigation-single {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 24px;

    li a {
        color: #ffffff;
        font-weight: 600;
        font-size: 14px;
        text-decoration: none;
        padding: 16px 8px;
        display: inline-flex;
        align-items: center;
        border-bottom: 2px solid transparent;
        transition: border-color 0.2s, opacity 0.2s;

        &:hover {
            opacity: 0.9;
            border-color: rgba(255, 255, 255, 0.9);
        }
    }
}

.company-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.company-name {
    font-size: 15px;
    font-weight: 700;
    color: #333;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 1400px) {
        font-size: 14px;
    }

    @media (max-width: 1200px) {
        font-size: 13px;
    }
}

.company-tagline {
    font-size: 10px;
    color: #666;
    margin: 0;
    line-height: 1.2;
}

.header-top-center {
    flex: 1;
    display: flex;
    justify-content: center;
}

.contact-info-grid {
    display: flex;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;
    justify-content: center;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    position: relative;

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        right: -12px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 25px;
        background-color: #E0E0E0;
    }
}

.contact-icon {
    font-size: 14px;
    color: #086AD8;
    margin-top: 2px;
    flex-shrink: 0;
    width: 16px;
    text-align: center;

    &.whatsapp-icon {
        color: #25D366;
    }
}

.contact-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.contact-label {
    font-size: 10px;
    color: #999;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.contact-value {
    font-size: 12px;
    color: #333;
    font-weight: 500;
    line-height: 1.3;

    &.link {
        color: #086AD8;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #002FA6;
            text-decoration: underline;
        }
    }

    &.address-link {
        display: inline-block;
        cursor: pointer;
        line-height: 1.4;

        &:hover {
            color: #002FA6;
        }
    }
}

.header-top-right {
    flex-shrink: 0;
}

.social-networks-compact {
    display: flex;
    align-items: center;
    gap: 12px;
}

.social-link {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #F5F5F5;
    color: #666;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 12px;

    &:hover {
        background-color: #086AD8;
        color: #fff;
        transform: translateY(-2px);
    }
}

.navigation-blue-bar {
    background: linear-gradient(180deg, #002FA6 0%, #086AD8 100%) !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0;
}

.header-bottom-wrap {
    padding: 0;
}

.header-bottom-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    position: relative;
    padding: 0 15px;

    @media (max-width: 991px) {
        padding: 0 60px 0 70px;
        justify-content: flex-start;
    }

    @media (max-width: 575px) {
        padding: 0 50px 0 60px;
        min-height: 65px;
    }
}

.header__logo-mobile {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;

    img {
        height: 50px;
        width: auto;
        max-width: 150px;
        object-fit: contain;

        @media (max-width: 575px) {
            height: 45px;
            max-width: 120px;
        }

        @media (max-width: 375px) {
            height: 40px;
            max-width: 100px;
        }
    }
}

.header__navigation {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 8px;

    @media (max-width: 991px) {
        display: none;
    }

    &--with-logout {
        justify-content: center;
    }
}

.header-logout-btn,
.header-login-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 16px;
    margin-left: 8px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 6px;
    background: transparent;
    color: #ffffff !important;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    text-decoration: none;

    i {
        font-size: 14px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.8);
        color: #ffffff !important;
    }
}

.navigation-menu {
    & > ul {
        display: flex;
        align-items: center;
        gap: 5px;
        margin: 0;
        padding: 0;
        list-style: none;

        & > li {
            margin: 0 !important;
            position: relative;

            & > a {
                padding: 20px 22px !important;
                color: #ffffff !important;
                font-size: 15px;
                font-weight: 600;
                transition: all 0.3s ease;
                border-radius: 6px;
                position: relative;
                text-transform: none;
                letter-spacing: 0.3px;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
                white-space: nowrap;

                @media (max-width: 1400px) {
                    padding: 18px 18px !important;
                    font-size: 14px;
                }

                @media (max-width: 1200px) {
                    padding: 16px 15px !important;
                    font-size: 13px;
                }

                span {
                    position: relative;
                    z-index: 1;
                    color: #ffffff !important;
                }

                &:before {
                    content: '';
                    position: absolute;
                    bottom: 8px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 2px;
                    background-color: #ffffff;
                    transition: all 0.3s ease;
                    border-radius: 2px;
                    box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
                }

                &:hover {
                    background-color: rgba(255, 255, 255, 0.15);
                    color: #ffffff !important;

                    span {
                        color: #ffffff !important;
                    }

                    &:before {
                        width: calc(100% - 44px);
                    }
                }

                &.nuxt-link-active,
                &.router-link-active {
                    color: #ffffff !important;
                    background-color: rgba(255, 255, 255, 0.1);

                    span {
                        color: #ffffff !important;
                    }

                    &:before {
                        width: calc(100% - 44px);
                    }
                }
            }
        }
    }
}

.mobile-navigation-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 35px;
    height: 35px;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    @media (max-width: 575px) {
        width: 32px;
        height: 32px;
        right: 12px;
    }

    i {
        display: block;
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: relative;
        transition: all 0.3s ease;

        &::before,
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #fff;
            left: 0;
            transition: all 0.3s ease;
        }

        &::before {
            top: -8px;
        }

        &::after {
            bottom: -8px;
        }
    }
}

// Responsive
@media (max-width: 1199px) {
    .contact-info-grid {
        gap: 20px;
    }

    .contact-item {
        &:not(:last-child)::after {
            right: -10px;
        }
    }
}

@media (max-width: 991px) {
    .header-top-bar {
        padding: 10px 0;
    }

    .header-top-content {
        flex-wrap: wrap;
        gap: 15px;
    }

    .contact-info-grid {
        gap: 15px;
        justify-content: flex-start;
    }

    .contact-item {
        &:not(:last-child)::after {
            display: none;
        }
    }

    .company-logo-wrapper {
        gap: 8px;
    }

    .company-logo-img {
        height: 60px;
    }

    .company-name {
        font-size: 14px;
    }

    .company-tagline {
        font-size: 10px;
    }

    .header-top-content {
        justify-content: center;
    }

    .header-top-center {
        order: 3;
        width: 100%;
        margin-top: 10px;
    }

    .header-top-right {
        order: 2;
    }
}

@media (max-width: 767px) {
    .header-top-bar {
        display: none !important;
    }

    .header-bottom-inner {
        min-height: 70px;
    }
}

// Estilos para cuando el header está fijo (scroll hacia abajo)
:deep(.vue-fixed-header--isFixed) {
    .navigation-blue-bar {
        background: linear-gradient(180deg, #002FA6 0%, #086AD8 100%) !important;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .navigation-menu {
        &--text_white {
            & > ul {
                & > li {
                    & > a {
                        color: #ffffff !important;

                        & > span {
                            color: #ffffff !important;
                        }
                    }

                    &.active {
                        & > a {
                            color: #ffffff !important;

                            & > span {
                                color: #ffffff !important;
                            }
                        }
                    }

                    &:hover {
                        & > a {
                            color: #ffffff !important;

                            & > span {
                                color: #ffffff !important;
                            }
                        }
                    }
                }
            }
        }
    }
}

// Estilos para cuando el header está fijo (scroll hacia abajo)
:deep(.vue-fixed-header--isFixed) {
    .navigation-blue-bar {
        background: linear-gradient(180deg, #002FA6 0%, #086AD8 100%) !important;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .navigation-menu {
        &--text_white {
            & > ul {
                & > li {
                    & > a {
                        color: #ffffff !important;

                        & > span {
                            color: #ffffff !important;
                        }
                    }

                    &.active {
                        & > a {
                            color: #ffffff !important;

                            & > span {
                                color: #ffffff !important;
                            }
                        }
                    }

                    &:hover {
                        & > a {
                            color: #ffffff !important;

                            & > span {
                                color: #ffffff !important;
                            }
                        }
                    }
                }
            }
        }
    }
}


// Estilos para cuando el header está fijo (scroll hacia abajo)
:deep(.vue-fixed-header--isFixed) {
    .navigation-blue-bar {
        background: linear-gradient(180deg, #002FA6 0%, #086AD8 100%) !important;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .navigation-menu {
        &--text_white {
            & > ul {
                & > li {
                    & > a {
                        color: #ffffff !important;

                        & > span {
                            color: #ffffff !important;
                        }
                    }

                    &.active {
                        & > a {
                            color: #ffffff !important;

                            & > span {
                                color: #ffffff !important;
                            }
                        }
                    }

                    &:hover {
                        & > a {
                            color: #ffffff !important;

                            & > span {
                                color: #ffffff !important;
                            }
                        }
                    }
                }
            }
        }
    }
}


// Estilos para cuando el header está fijo (scroll hacia abajo)
:deep(.vue-fixed-header--isFixed) {
    .navigation-blue-bar {
        background: linear-gradient(180deg, #002FA6 0%, #086AD8 100%) !important;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .navigation-menu {
        &--text_white {
            & > ul {
                & > li {
                    & > a {
                        color: #ffffff !important;

                        & > span {
                            color: #ffffff !important;
                        }
                    }

                    &.active {
                        & > a {
                            color: #ffffff !important;

                            & > span {
                                color: #ffffff !important;
                            }
                        }
                    }

                    &:hover {
                        & > a {
                            color: #ffffff !important;

                            & > span {
                                color: #ffffff !important;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>