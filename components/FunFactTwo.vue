<template>
    <div class="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
        <div class="container">
            <div class="row" v-observe-visibility="{callback: visibilityChanged, once: true}">
                <div class="col-md-3 col-sm-6 wow move-up" v-for="item in data.funfactOne" :key="item.id">
                    <div class="fun-fact--two text-center" v-if="isVisible">
                        <div class="fun-fact__count counter">
                            <countTo :startVal='startVal' :endVal='item.count' :duration='4000'></countTo>
                        </div>
                        <h6 class="fun-fact__text">{{ item.text }}</h6>
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