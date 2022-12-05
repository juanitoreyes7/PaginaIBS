<template>
    <div class="breadcrumb-area bg-cover" :style="{ backgroundImage: `url('/images/bg/vida.png')` }">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_box text-center">
                        <h2 class="breadcrumb-title">{{ breadcrumbTitle }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['items', 'breadcrumbTitle']
    }
</script>