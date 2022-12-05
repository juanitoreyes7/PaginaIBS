<template>
    <div class="fun-fact-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 offset-lg-1">
                    <div class="modern-number-01 mr-5">
                        <h2 class="heading"><span class="mark-text">{{ data.funfactThree.markText }}</span>{{ data.funfactThree.subTitle }}</h2>
                        <h3 class="heading" v-html="data.funfactThree.title">{{ data.funfactThree.title }}</h3>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="row" v-observe-visibility="{callback: visibilityChanged, once: true}">
                        <div class="col-md-6 col-sm-6 wow move-up" v-for="item in data.funfactThree.funfacts" :key="item.id">
                            <div class="fun-fact--three text-center" v-if="isVisible">
                                <div class="fun-fact__count counter">
                                    <countTo :startVal='startVal' :endVal='item.count' :duration='4000'></countTo>
                                </div>
                                <h6 class="fun-fact__text">{{ item.text }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import countTo from 'vue-count-to';

    import data from '../data/funfact.json';
    export default {
        components: {
            countTo
        },
        data () {
            return {
                data,
                startVal: 0,
                isVisible: false,
            }
        },
        methods: {
            visibilityChanged (isVisible) {
                this.isVisible = isVisible
            },
        },
    };
</script>