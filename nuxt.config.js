export default {
    generate: {
        fallback: true
    },

    target: 'static',
    
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || 'Vue.JS Technology & Blog Template',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        'assets/scss/style.scss',
    ],

    router: {
        linkExactActiveClass: 'active-link',
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/observe-visibility.js',
    ],

    components: true,
    
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
    ],

    styleResources: {
        scss: [
            'assets/scss/_variables.scss'
        ]
    },

    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        }
    },
}
