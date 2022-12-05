<template>
    <div class="ht-box-icon style-01 single-svg-icon-box">
        <div class="icon-box-wrap">
            <div class="icon">
                <img :src="service.icon" alt="icon">
            </div>
            <div class="content">
                <h5 class="heading">{{ service.heading }}</h5>
                <div class="text">{{ service.desc }}</div>
                <div class="feature-btn">
                    <n-link :to="`/service/${service.slug}`">
                        <span class="button-text">Discover now</span>
                        <i class="far fa-long-arrow-right"></i>
                    </n-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service']
    };
</script>