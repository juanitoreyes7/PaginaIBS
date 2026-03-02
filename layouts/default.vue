<template>
    <div>
        <nuxt />
    </div>
</template>

<script>
export default {
    middleware(ctx) {
        const rutasPublicas = ['/', '/login', '/registro', '/register'];
        if (rutasPublicas.includes(ctx.route.path)) {
            return;
        }
        return 'auth';
    }
};
</script>