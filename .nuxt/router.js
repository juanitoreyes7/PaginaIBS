import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _73dbd5d5 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _101ba770 = () => interopDefault(import('../pages/agente.vue' /* webpackChunkName: "pages/agente" */))
const _09fefddb = () => interopDefault(import('../pages/agentes.vue' /* webpackChunkName: "pages/agentes" */))
const _cfd35e32 = () => interopDefault(import('../pages/Appointment.vue' /* webpackChunkName: "pages/Appointment" */))
const _f9751026 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1ef65656 = () => interopDefault(import('../pages/case-studies/index.vue' /* webpackChunkName: "pages/case-studies/index" */))
const _d4bea3d0 = () => interopDefault(import('../pages/cobranza.vue' /* webpackChunkName: "pages/cobranza" */))
const _228aee30 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _dc4196b2 = () => interopDefault(import('../pages/Cotgmm.vue' /* webpackChunkName: "pages/Cotgmm" */))
const _e8b2049e = () => interopDefault(import('../pages/CotHogar.vue' /* webpackChunkName: "pages/CotHogar" */))
const _18c3bee1 = () => interopDefault(import('../pages/Cybersecurity.vue' /* webpackChunkName: "pages/Cybersecurity" */))
const _3f3580c8 = () => interopDefault(import('../pages/descargables.vue' /* webpackChunkName: "pages/descargables" */))
const _cd97f63e = () => interopDefault(import('../pages/Faq/index.vue' /* webpackChunkName: "pages/Faq/index" */))
const _8907a2ba = () => interopDefault(import('../pages/GmExt.vue' /* webpackChunkName: "pages/GmExt" */))
const _0ce2a6b0 = () => interopDefault(import('../pages/hospitales.vue' /* webpackChunkName: "pages/hospitales" */))
const _a562c7a2 = () => interopDefault(import('../pages/ibsapp.vue' /* webpackChunkName: "pages/ibsapp" */))
const _44451220 = () => interopDefault(import('../pages/IT-Solutions.vue' /* webpackChunkName: "pages/IT-Solutions" */))
const _09830aad = () => interopDefault(import('../pages/Leadership.vue' /* webpackChunkName: "pages/Leadership" */))
const _346d985e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3c7f7468 = () => interopDefault(import('../pages/Politicas.vue' /* webpackChunkName: "pages/Politicas" */))
const _f16fb1d8 = () => interopDefault(import('../pages/poliza-accidente.vue' /* webpackChunkName: "pages/poliza-accidente" */))
const _23919dc1 = () => interopDefault(import('../pages/poliza-auto.vue' /* webpackChunkName: "pages/poliza-auto" */))
const _e8511e5a = () => interopDefault(import('../pages/poliza-funeraria.vue' /* webpackChunkName: "pages/poliza-funeraria" */))
const _12d279b6 = () => interopDefault(import('../pages/poliza-gmm.vue' /* webpackChunkName: "pages/poliza-gmm" */))
const _2942c4cf = () => interopDefault(import('../pages/poliza-hogar.vue' /* webpackChunkName: "pages/poliza-hogar" */))
const _122cb202 = () => interopDefault(import('../pages/poliza-vida.vue' /* webpackChunkName: "pages/poliza-vida" */))
const _827006d8 = () => interopDefault(import('../pages/portafolio-polizas.vue' /* webpackChunkName: "pages/portafolio-polizas" */))
const _4e2e80b4 = () => interopDefault(import('../pages/portal.vue' /* webpackChunkName: "pages/portal" */))
const _55a7effb = () => interopDefault(import('../pages/Processing.vue' /* webpackChunkName: "pages/Processing" */))
const _457ac0fb = () => interopDefault(import('../pages/registro.vue' /* webpackChunkName: "pages/registro" */))
const _f67502e2 = () => interopDefault(import('../pages/Resolutions.vue' /* webpackChunkName: "pages/Resolutions" */))
const _7959d8fd = () => interopDefault(import('../pages/Service.vue' /* webpackChunkName: "pages/Service" */))
const _df3df3ae = () => interopDefault(import('../pages/siniestros.vue' /* webpackChunkName: "pages/siniestros" */))
const _7955756c = () => interopDefault(import('../pages/Solicitud.vue' /* webpackChunkName: "pages/Solicitud" */))
const _2a16d968 = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _b82b7746 = () => interopDefault(import('../pages/element/accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _35619f94 = () => interopDefault(import('../pages/element/box-icon.vue' /* webpackChunkName: "pages/element/box-icon" */))
const _34807524 = () => interopDefault(import('../pages/element/box-image.vue' /* webpackChunkName: "pages/element/box-image" */))
const _942d25c8 = () => interopDefault(import('../pages/element/box-large-image.vue' /* webpackChunkName: "pages/element/box-large-image" */))
const _ceb28658 = () => interopDefault(import('../pages/element/call-to-action.vue' /* webpackChunkName: "pages/element/call-to-action" */))
const _c939d61c = () => interopDefault(import('../pages/element/counters.vue' /* webpackChunkName: "pages/element/counters" */))
const _aa096e08 = () => interopDefault(import('../pages/element/gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _7ec92f6a = () => interopDefault(import('../pages/element/teams.vue' /* webpackChunkName: "pages/element/teams" */))
const _1593c68a = () => interopDefault(import('../pages/beneficios/_slug.vue' /* webpackChunkName: "pages/beneficios/_slug" */))
const _fce252b6 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _a107ef06 = () => interopDefault(import('../pages/case-studies/_id.vue' /* webpackChunkName: "pages/case-studies/_id" */))
const _a3e068ee = () => interopDefault(import('../pages/Faq/_id.vue' /* webpackChunkName: "pages/Faq/_id" */))
const _03720c98 = () => interopDefault(import('../pages/service/_slug.vue' /* webpackChunkName: "pages/service/_slug" */))
const _1c2190ba = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _73dbd5d5,
    name: "About"
  }, {
    path: "/agente",
    component: _101ba770,
    name: "agente"
  }, {
    path: "/agentes",
    component: _09fefddb,
    name: "agentes"
  }, {
    path: "/Appointment",
    component: _cfd35e32,
    name: "Appointment"
  }, {
    path: "/blog",
    component: _f9751026,
    name: "blog"
  }, {
    path: "/case-studies",
    component: _1ef65656,
    name: "case-studies"
  }, {
    path: "/cobranza",
    component: _d4bea3d0,
    name: "cobranza"
  }, {
    path: "/Contact",
    component: _228aee30,
    name: "Contact"
  }, {
    path: "/Cotgmm",
    component: _dc4196b2,
    name: "Cotgmm"
  }, {
    path: "/CotHogar",
    component: _e8b2049e,
    name: "CotHogar"
  }, {
    path: "/Cybersecurity",
    component: _18c3bee1,
    name: "Cybersecurity"
  }, {
    path: "/descargables",
    component: _3f3580c8,
    name: "descargables"
  }, {
    path: "/Faq",
    component: _cd97f63e,
    name: "Faq"
  }, {
    path: "/GmExt",
    component: _8907a2ba,
    name: "GmExt"
  }, {
    path: "/hospitales",
    component: _0ce2a6b0,
    name: "hospitales"
  }, {
    path: "/ibsapp",
    component: _a562c7a2,
    name: "ibsapp"
  }, {
    path: "/IT-Solutions",
    component: _44451220,
    name: "IT-Solutions"
  }, {
    path: "/Leadership",
    component: _09830aad,
    name: "Leadership"
  }, {
    path: "/login",
    component: _346d985e,
    name: "login"
  }, {
    path: "/Politicas",
    component: _3c7f7468,
    name: "Politicas"
  }, {
    path: "/poliza-accidente",
    component: _f16fb1d8,
    name: "poliza-accidente"
  }, {
    path: "/poliza-auto",
    component: _23919dc1,
    name: "poliza-auto"
  }, {
    path: "/poliza-funeraria",
    component: _e8511e5a,
    name: "poliza-funeraria"
  }, {
    path: "/poliza-gmm",
    component: _12d279b6,
    name: "poliza-gmm"
  }, {
    path: "/poliza-hogar",
    component: _2942c4cf,
    name: "poliza-hogar"
  }, {
    path: "/poliza-vida",
    component: _122cb202,
    name: "poliza-vida"
  }, {
    path: "/portafolio-polizas",
    component: _827006d8,
    name: "portafolio-polizas"
  }, {
    path: "/portal",
    component: _4e2e80b4,
    name: "portal"
  }, {
    path: "/Processing",
    component: _55a7effb,
    name: "Processing"
  }, {
    path: "/registro",
    component: _457ac0fb,
    name: "registro"
  }, {
    path: "/Resolutions",
    component: _f67502e2,
    name: "Resolutions"
  }, {
    path: "/Service",
    component: _7959d8fd,
    name: "Service"
  }, {
    path: "/siniestros",
    component: _df3df3ae,
    name: "siniestros"
  }, {
    path: "/Solicitud",
    component: _7955756c,
    name: "Solicitud"
  }, {
    path: "/blog/blog-details",
    component: _2a16d968,
    name: "blog-blog-details"
  }, {
    path: "/element/accordion",
    component: _b82b7746,
    name: "element-accordion"
  }, {
    path: "/element/box-icon",
    component: _35619f94,
    name: "element-box-icon"
  }, {
    path: "/element/box-image",
    component: _34807524,
    name: "element-box-image"
  }, {
    path: "/element/box-large-image",
    component: _942d25c8,
    name: "element-box-large-image"
  }, {
    path: "/element/call-to-action",
    component: _ceb28658,
    name: "element-call-to-action"
  }, {
    path: "/element/counters",
    component: _c939d61c,
    name: "element-counters"
  }, {
    path: "/element/gradation",
    component: _aa096e08,
    name: "element-gradation"
  }, {
    path: "/element/teams",
    component: _7ec92f6a,
    name: "element-teams"
  }, {
    path: "/beneficios/:slug?",
    component: _1593c68a,
    name: "beneficios-slug"
  }, {
    path: "/blog/:slug",
    component: _fce252b6,
    name: "blog-slug"
  }, {
    path: "/case-studies/:id?",
    component: _a107ef06,
    name: "case-studies-id"
  }, {
    path: "/Faq/:id",
    component: _a3e068ee,
    name: "Faq-id"
  }, {
    path: "/service/:slug?",
    component: _03720c98,
    name: "service-slug"
  }, {
    path: "/",
    component: _1c2190ba,
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
