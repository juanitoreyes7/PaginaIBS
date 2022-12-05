<template>
    <div class="about-banner-wrap banner-space about-us-bg bg-cover" :style="{ backgroundImage: `url('/images/bg/title.png')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 ml-auto mr-auto">
                    <div class="about-banner-content text-center">
                        <h1 class="mb-15 text-black">¿Quiénes somos?</h1>
                        <h5 class="font-weight--normal text-black">Somos un despacho de asesoría en riesgos líderes en el Estado de Chihuahua por nuestro enfoque financiero y reconocido por nuestros valores y profesionalismo.
</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subTitle', 'bgImg']
    };
</script>