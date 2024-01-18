import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7b004f60 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _da6169bc = () => interopDefault(import('../pages/Appointment.vue' /* webpackChunkName: "pages/Appointment" */))
const _12926b5c = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _64f81b8c = () => interopDefault(import('../pages/case-studies/index.vue' /* webpackChunkName: "pages/case-studies/index" */))
const _2467d8a3 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _17bb818c = () => interopDefault(import('../pages/Cotgmm.vue' /* webpackChunkName: "pages/Cotgmm" */))
const _0ba3a556 = () => interopDefault(import('../pages/CotHogar.vue' /* webpackChunkName: "pages/CotHogar" */))
const _4927165c = () => interopDefault(import('../pages/Cybersecurity.vue' /* webpackChunkName: "pages/Cybersecurity" */))
const _3ccb8cc1 = () => interopDefault(import('../pages/descargables.vue' /* webpackChunkName: "pages/descargables" */))
const _18cc51dc = () => interopDefault(import('../pages/Faq/index.vue' /* webpackChunkName: "pages/Faq/index" */))
const _bea94176 = () => interopDefault(import('../pages/IT-Solutions.vue' /* webpackChunkName: "pages/IT-Solutions" */))
const _7cf45d12 = () => interopDefault(import('../pages/Leadership.vue' /* webpackChunkName: "pages/Leadership" */))
const _346d364c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _615892c7 = () => interopDefault(import('../pages/Politicas.vue' /* webpackChunkName: "pages/Politicas" */))
const _6dcd7b40 = () => interopDefault(import('../pages/Processing.vue' /* webpackChunkName: "pages/Processing" */))
const _7f7e78ca = () => interopDefault(import('../pages/Resolutions.vue' /* webpackChunkName: "pages/Resolutions" */))
const _a1f1ae90 = () => interopDefault(import('../pages/Service.vue' /* webpackChunkName: "pages/Service" */))
const _0e247b32 = () => interopDefault(import('../pages/Solicitud.vue' /* webpackChunkName: "pages/Solicitud" */))
const _0299b547 = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _88e13350 = () => interopDefault(import('../pages/element/accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _445f3a4a = () => interopDefault(import('../pages/element/box-icon.vue' /* webpackChunkName: "pages/element/box-icon" */))
const _0536312e = () => interopDefault(import('../pages/element/box-image.vue' /* webpackChunkName: "pages/element/box-image" */))
const _492de6d7 = () => interopDefault(import('../pages/element/box-large-image.vue' /* webpackChunkName: "pages/element/box-large-image" */))
const _7c5e9fb9 = () => interopDefault(import('../pages/element/call-to-action.vue' /* webpackChunkName: "pages/element/call-to-action" */))
const _d83770d2 = () => interopDefault(import('../pages/element/counters.vue' /* webpackChunkName: "pages/element/counters" */))
const _7abf2a12 = () => interopDefault(import('../pages/element/gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _1e028074 = () => interopDefault(import('../pages/element/teams.vue' /* webpackChunkName: "pages/element/teams" */))
const _15ffadec = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _b00589bc = () => interopDefault(import('../pages/case-studies/_id.vue' /* webpackChunkName: "pages/case-studies/_id" */))
const _3885c978 = () => interopDefault(import('../pages/Faq/_id.vue' /* webpackChunkName: "pages/Faq/_id" */))
const _33d56413 = () => interopDefault(import('../pages/service/_slug.vue' /* webpackChunkName: "pages/service/_slug" */))
const _6ac59335 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _7b004f60,
    name: "About"
  }, {
    path: "/Appointment",
    component: _da6169bc,
    name: "Appointment"
  }, {
    path: "/blog",
    component: _12926b5c,
    name: "blog"
  }, {
    path: "/case-studies",
    component: _64f81b8c,
    name: "case-studies"
  }, {
    path: "/Contact",
    component: _2467d8a3,
    name: "Contact"
  }, {
    path: "/Cotgmm",
    component: _17bb818c,
    name: "Cotgmm"
  }, {
    path: "/CotHogar",
    component: _0ba3a556,
    name: "CotHogar"
  }, {
    path: "/Cybersecurity",
    component: _4927165c,
    name: "Cybersecurity"
  }, {
    path: "/descargables",
    component: _3ccb8cc1,
    name: "descargables"
  }, {
    path: "/Faq",
    component: _18cc51dc,
    name: "Faq"
  }, {
    path: "/IT-Solutions",
    component: _bea94176,
    name: "IT-Solutions"
  }, {
    path: "/Leadership",
    component: _7cf45d12,
    name: "Leadership"
  }, {
    path: "/login",
    component: _346d364c,
    name: "login"
  }, {
    path: "/Politicas",
    component: _615892c7,
    name: "Politicas"
  }, {
    path: "/Processing",
    component: _6dcd7b40,
    name: "Processing"
  }, {
    path: "/Resolutions",
    component: _7f7e78ca,
    name: "Resolutions"
  }, {
    path: "/Service",
    component: _a1f1ae90,
    name: "Service"
  }, {
    path: "/Solicitud",
    component: _0e247b32,
    name: "Solicitud"
  }, {
    path: "/blog/blog-details",
    component: _0299b547,
    name: "blog-blog-details"
  }, {
    path: "/element/accordion",
    component: _88e13350,
    name: "element-accordion"
  }, {
    path: "/element/box-icon",
    component: _445f3a4a,
    name: "element-box-icon"
  }, {
    path: "/element/box-image",
    component: _0536312e,
    name: "element-box-image"
  }, {
    path: "/element/box-large-image",
    component: _492de6d7,
    name: "element-box-large-image"
  }, {
    path: "/element/call-to-action",
    component: _7c5e9fb9,
    name: "element-call-to-action"
  }, {
    path: "/element/counters",
    component: _d83770d2,
    name: "element-counters"
  }, {
    path: "/element/gradation",
    component: _7abf2a12,
    name: "element-gradation"
  }, {
    path: "/element/teams",
    component: _1e028074,
    name: "element-teams"
  }, {
    path: "/blog/:slug",
    component: _15ffadec,
    name: "blog-slug"
  }, {
    path: "/case-studies/:id?",
    component: _b00589bc,
    name: "case-studies-id"
  }, {
    path: "/Faq/:id",
    component: _3885c978,
    name: "Faq-id"
  }, {
    path: "/service/:slug?",
    component: _33d56413,
    name: "service-slug"
  }, {
    path: "/",
    component: _6ac59335,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
