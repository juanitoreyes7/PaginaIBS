export default {
    generate: {
        fallback: true
    },

    target: 'static',

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

    loading: { color: '#fff' },

    css: [
        'assets/scss/style.scss'
    ],

    router: {
        linkExactActiveClass: 'active-link'
    },

    plugins: [
        '~/plugins/firebase.js',
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/observe-visibility.js'
    ],

    components: true,

    buildModules: [],

    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],

    styleResources: {
        scss: [
            'assets/scss/_variables.scss'
        ]
    },

    axios: {
        proxy: true
    },

    proxy: {
        '/api/': {
            target: process.env.API_BASE_URL || 'http://localhost:8080',
            pathRewrite: { '^/api/': '/api/' },
            changeOrigin: true
        }
    },

    publicRuntimeConfig: {
        apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8080/api'
    },

    build: {
        extractCSS: true,
        extend(config, ctx) {
            const crypto = require('crypto');
            const crypto_orig_createHash = crypto.createHash;
            crypto.createHash = algorithm => crypto_orig_createHash(algorithm === 'md4' ? 'sha256' : algorithm);
        }
    }
}