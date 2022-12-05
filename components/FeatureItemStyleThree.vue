<template>
    <div class="ht-box-images style-05">
        <div class="image-box-wrap">
            <div class="box-image">
                <div class="default-image">
                    <img class="img-fulid" :src="service.icon" alt="icon">
                </div>
                <div class="hover-images">
                    <img class="img-fulid" :src="service.hoverIcon" alt="icon">
                </div>
            </div>
            <div class="content">
                <h5 class="heading">{{ service.heading }}</h5>
                <div class="text">{{ service.desc }}</div>
                <div class="box-images-arrow">
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