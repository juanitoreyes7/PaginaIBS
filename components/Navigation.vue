<template>
    <ul>
        <li v-for="(item, index) in navItems" :key="index">
            <n-link :to="item.to">
                <span>{{ item.label }}</span>
            </n-link>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            navItems: [
                {
                    to: '/',
                    label: 'Inicio'
                },
                {
                    to: '/about',
                    label: 'Nosotros'
                },
                {
                    to: '/agente',
                    label: 'Únete como agente'
                },
                {
                    to: '/case-studies',
                    label: 'Seguros'
                },
                {
                    to: '/ibsapp',
                    label: 'IBSApp'
                },
                {
                    to: '/siniestros',
                    label: 'Siniestros'
                },
                {
                    to: '/cobranza',
                    label: 'Cobranza'
                },
                {
                    to: '/contact',
                    label: 'Contacto'
                },
                {
                    to: '/descargables',
                    label: 'Descargables'
                }
            ]
        };
    }
};
</script>

<style scoped lang="scss">
</style>