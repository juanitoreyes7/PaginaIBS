<template>
    <div class="blog-section-wrapper section-space--pt_100  section-space--pb_70">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 wow move-up">
                    <div class="section-title tablet-mb__60 section-space--mb_30 tablet-mt__0 small-mt__0 small-mb__60 mt-30">
                        <h6 class="section-sub-title mb-20">{{ data.sectionSubTitle }}</h6>
                        <h3 class="heading" v-html="data.sectionTitle">{{ data.sectionTitle }}</h3>
                        <ul class="infotechno-blog-list mt-30">
                            <li v-for="blog in data.blogPosts.slice(0, 5)" :key="blog.id">
                                <n-link :to="`/blog/${blog.slug}`">{{ blog.title }}</n-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 wow move-up" v-for="blog in data.blogPosts.slice(0, 2)" :key="blog.id">
                    <div class="single-blog-item blog-grid">
                        <!-- Post Feature Start -->
                        <div class="post-feature blog-thumbnail">
                            <n-link :to="`/blog/${blog.slug}`">
                                <img class="img-fluid" :src="blog.image" alt="Blog Images">
                            </n-link>
                        </div>
                        <!-- Post Feature End -->

                        <!-- Post info Start -->
                        <div class="post-info lg-blog-post-info">
                            <div class="post-meta">
                                <div class="post-date">
                                    <span class="far fa-calendar meta-icon"></span>
                                    {{ blog.postDate }}
                                </div>
                            </div>

                            <h5 class="post-title font-weight--bold">
                                <n-link :to="`/blog/${blog.slug}`">{{ blog.title }}</n-link>
                            </h5>

                            <div class="post-excerpt mt-15">
                                <p>{{ blog.desc }}</p>
                            </div>
                            <div class="btn-text">
                                <n-link :to="`/blog/${blog.slug}`">
                                    Read more 
                                    <i class="ml-1 button-icon far fa-long-arrow-right"></i>
                                </n-link>
                            </div>
                        </div>
                        <!-- Post info End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '~/data/blog.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>