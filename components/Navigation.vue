<template>
    <ul>
        <li v-for="(item, index) in navItemsWithIcons" :key="index">
            <n-link :to="item.to">
                <img
                    v-if="item.icon && item.icon.startsWith('/')"
                    :src="item.icon"
                    :alt="item.label"
                    class="nav-item-icon"
                >
                <i v-else-if="item.icon" :class="item.icon" class="nav-item-icon nav-item-icon--fa"></i>
                <span>{{ item.label }}</span>
            </n-link>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            navItemsWithIcons: [
                {
                    to: '/portal',
                    label: 'Inicio',
                    icon: 'fas fa-home'
                },
                {
                    to: '/about',
                    label: 'Nosotros',
                    icon: 'fas fa-users'
                },
                {
                    to: '/case-studies',
                    label: 'Seguros',
                    icon: 'fas fa-shield-alt'
                },
                {
                    to: '/ibsapp',
                    label: 'IBSApp',
                    icon: 'fas fa-mobile-alt'
                },
                {
                    to: '/siniestros',
                    label: 'Siniestros',
                    icon: 'fas fa-exclamation-triangle'
                },
                {
                    to: '/cobranza',
                    label: 'Cobranza',
                    icon: 'fas fa-file-invoice-dollar'
                },
                {
                    to: '/contact',
                    label: 'Contacto',
                    icon: 'fas fa-envelope'
                },
                {
                    to: '/descargables',
                    label: 'Descargables',
                    icon: 'fas fa-download'
                }
            ]
        };
    }
};
</script>

<style scoped lang="scss">
.nav-item-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    vertical-align: middle;
    object-fit: contain;

    &--fa {
        font-size: 16px;
        width: auto;
        height: auto;
    }
}
</style>