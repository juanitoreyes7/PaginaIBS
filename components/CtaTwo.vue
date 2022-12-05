<template>
    <div class="processing-computing-area bg-gray-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="computing-info-box text-center">
                        <h2>{{ data.ctaTwo.title }}</h2>
                        <div class="section-under-heading text-center mt-30">
                            {{ data.ctaTwo.subTitle }} 
                            <n-link to="/about">Take the challenge!</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/cta.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>