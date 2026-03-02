<template>
    <div class="mobile-navigation">
        <nav class="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li>
                    <n-link to="/about">
                        <span>Nosotros</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/case-studies">
                        <span>Seguros</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/ibsapp">
                        <span>IBSApp</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/contact">
                        <span>Contacto</span>
                    </n-link>
                </li>
                <li>
                    <n-link to="/descargables">
                        <span>Descargables</span>
                    </n-link>
                </li>
                <li class="mobile-nav-logout">
                    <a
                        v-if="!isLoggedIn"
                        href="/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mobile-logout-btn mobile-login-link"
                    >
                        <i class="fas fa-sign-in-alt"></i>
                        <span>Iniciar sesión</span>
                    </a>
                    <button v-else type="button" class="mobile-logout-btn" @click="cerrarSesion">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Cerrar sesión</span>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        name: 'MobileNavMenu',
        data() {
            return { isLoggedIn: false };
        },
        mounted() {
            if (process.client && this.$auth && this.$auth.onAuthStateChanged) {
                this.$auth.onAuthStateChanged((user) => {
                    this.isLoggedIn = !!user;
                });
            }
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            if (!offCanvasNav) return;
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');
            for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
            }
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
            for (let i = 0; i < numMenuExpand; i++) {
                menuExpand[i].addEventListener("click", (e) => { sideMenuExpand(e); });
            }
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => { closeMobileMenu(); });
            }
            function sideMenuExpand(e) {
                e.currentTarget.parentElement.classList.toggle('active');
            }
            function closeMobileMenu() {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu?.classList.remove('active');
            }
        },
        methods: {
            async cerrarSesion() {
                if (this.$auth) {
                    await this.$auth.signOut();
                    const offcanvas = document.querySelector('#offcanvas-mobile-menu');
                    if (offcanvas) offcanvas.classList.remove('active');
                    this.$router.push('/login');
                }
            }
        }
    };
</script>

<style lang="scss">
    @import '../assets/scss/_variables.scss';

    /* offcanvas mobile menu */
    .mobile-navigation {
        padding: 30px 20px;
    }
    .offcanvas-navigation {
         ul {
            li {
                &.menu-item-has-children {
                    .sub-menu {
                        height: 0;
                        visibility: hidden;
                        opacity: 0;
                        transition: 0.3s;
                    }
                    &.active {
                        .sub-menu {
                            height: 100%;
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
                a {
                    color: $white;
                    font-size: 14px;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $theme-color--two;
                    }
                }
            }
        }

        ul {
            &.sub-menu {
                margin-left: 15px;
                transition: 0.4s;
                li {
                    a {
                        color: $white;
                        font-size: 13px;
                        padding: 5px 0;
                        &:hover {
                            color: $theme-color--two;
                        }
                    }
                }
            }
            .mobile-nav-logout {
                margin-top: 16px;
                padding-top: 16px;
                border-top: 1px solid rgba(255, 255, 255, 0.2);
            }
            .mobile-logout-btn,
            .mobile-login-link {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 10px 0;
                border: none;
                background: none;
                color: $white;
                font-size: 14px;
                text-transform: uppercase;
                cursor: pointer;
                text-decoration: none;
                &:hover {
                    color: $theme-color--two;
                }
            }
            li {
                a {
                    text-transform: uppercase;
                }

                &.menu-item-has-children {
                    position: relative;
                    display: block;
                    a {
                        display: inline-block;
                    }

                    &.active {
                        .menu-expand {
                            background-color: rgba($white, 0.2);
                            i {
                                &:before {
                                    transform: rotate(0);
                                }
                            }
                        }
                    }

                    .menu-expand {
                        top: 5px;
                        right: 0;
                        width: 35px;
                        height: 35px;
                        cursor: pointer;
                        line-height: 35px;
                        position: absolute;
                        text-align: center;
                        background-color: rgba($white, 0.1);
                        &:hover {
                            background-color: rgba($white, 0.2);
                        }

                        i {
                            display: block;
                            border-bottom: 1px solid #ffffff;
                            position: relative;
                            width: 10px;
                            text-align: center;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            &:before {
                                width: 100%;
                                content: "";
                                border-bottom: 1px solid $white;
                                display: block;
                                position: absolute;
                                top: 0;
                                transform: rotate(90deg);
                                transition: 0.4s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>