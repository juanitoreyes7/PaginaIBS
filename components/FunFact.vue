<template>
    <div class="fun-fact-wrapper">
        <div class="container">
            <div class="fun-fact-grid-4" v-observe-visibility="{callback: visibilityChanged, once: true}">
                <div class="grid-item wow move-up" v-for="item in data.funfactOne" :key="item.id">
                    <div class="fun-fact--one text-center" v-if="isVisible">
                        <h5 class="fun-fact__title" v-html="item.title">{{ item.title }}</h5>
                        <div class="fun-fact__count counter">
                            <countTo :startVal='startVal' :endVal='item.count' :duration='4000'></countTo>
                        </div>
                        <span class="fun-fact__text">{{ item.text }}</span>
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