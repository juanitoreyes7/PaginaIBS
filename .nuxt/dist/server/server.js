module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/about-company","2":"components/about-company-two","3":"components/about-delivery","4":"components/accordion-one","5":"components/accordion-two","6":"components/appointment-form","7":"components/blog-sidebar","8":"components/brand-logo-carousel","9":"components/breadcrumbs","10":"components/breadcrumbs2","11":"components/case-studies-item","12":"components/contact-us-info","13":"components/contact-us-info1","14":"components/corporate-video","15":"components/cta-contact","16":"components/cta-contact-two","17":"components/cta-four","18":"components/cta-one","19":"components/cta-one1","20":"components/cta-three","21":"components/cta-two","22":"components/cta-video","23":"components/feature-item","24":"components/feature-item-style-three","25":"components/feature-item-two","26":"components/footer","27":"components/footer-about","28":"components/footer-video","29":"components/footer-widget-apps","30":"components/footer-widget-link","31":"components/fun-fact","32":"components/fun-fact-three","33":"components/fun-fact-two","34":"components/header","35":"components/header-appointment","36":"components/header-cybersecurity","37":"components/header-processing","38":"components/header-resolution","39":"components/header-top","40":"components/hero-appointment","41":"components/hero-cybersecurity","42":"components/hero-infotech-no","43":"components/hero-insurance","44":"components/hero-processing","45":"components/hero-resolution","46":"components/hero-service","47":"components/home-carousel","48":"components/insurance-modal","49":"components/mobile-nav-menu","50":"components/navigation","51":"components/off-canvas-mobile-menu","52":"components/page-header","53":"components/portal-empresa-view","54":"components/preview-mobile-nav-menu","55":"components/preview-offcanvas-mobile-menu","56":"components/qualified-method","57":"components/search-overlay","58":"components/section-title","59":"components/sections-about-banner","60":"components/sections-about-us-description","61":"components/sections-about-us-hero","62":"components/sections-accordion-wrapper","63":"components/sections-advisory-buttons","64":"components/sections-advisory-buttons-cobranza","65":"components/sections-blog-page-wrapper","66":"components/sections-blog-style-one","67":"components/sections-blog-style-two","68":"components/sections-case-studies-item-wrapper","69":"components/sections-case-studies-section","70":"components/sections-case-studies-section-two","71":"components/sections-company-history","72":"components/sections-compañias-seguros-section","73":"components/sections-contact-us","74":"components/sections-contact-us-four","75":"components/sections-contact-us-three","76":"components/sections-contact-us-two","77":"components/sections-cot-hogar","78":"components/sections-cotiza-gm-ext","79":"components/sections-cotiza-gmm","80":"components/sections-directores-section","81":"components/sections-experiencia-section","82":"components/sections-feature-gallery","83":"components/sections-feature-gallery-four","84":"components/sections-feature-gallery-two","85":"components/sections-formacion-experiencia-section","86":"components/sections-formacion-section","87":"components/sections-four-steps","88":"components/sections-gallery-one","89":"components/sections-i-b-s-app-section","90":"components/sections-info-tech-experience","91":"components/sections-insurance-directory","92":"components/sections-insurance-directory-cobranza","93":"components/sections-premios-section","94":"components/sections-pricing-one","95":"components/sections-service-i-t-solution","96":"components/sections-service-style-eight","97":"components/sections-service-style-five","98":"components/sections-service-style-seven","99":"components/sections-service-style-six","100":"components/sections-service-style-three","101":"components/sections-service-style-two","102":"components/sections-tab-section","103":"components/sections-team-member-list","104":"components/sections-team-one","105":"components/sections-team-two","106":"components/sections-terminos-condiciones-button","107":"components/sections-testimonial-one","108":"components/sections-testimonial-two","109":"components/sections-tipos-seguros-section","110":"components/service-i-t","111":"components/service-item","112":"components/service-item-style-five","113":"components/service-item-style-four","114":"components/service-item-style-three","115":"components/service-item-style-two","116":"components/service-one","117":"components/team-member","118":"components/video-pupup-one","119":"components/video-with-images","120":"pages/About","121":"pages/Appointment","122":"pages/Contact","123":"pages/CotHogar","124":"pages/Cotgmm","125":"pages/Cybersecurity","126":"pages/Faq/_id","127":"pages/Faq/index","128":"pages/GmExt","129":"pages/IT-Solutions","130":"pages/Leadership","131":"pages/Politicas","132":"pages/Processing","133":"pages/Resolutions","134":"pages/Service","135":"pages/Solicitud","136":"pages/agente","137":"pages/agentes","138":"pages/beneficios/_slug","139":"pages/blog/_slug","140":"pages/blog/blog-details","141":"pages/blog/index","142":"pages/case-studies/_id","143":"pages/case-studies/index","144":"pages/cobranza","145":"pages/descargables","146":"pages/element/accordion","147":"pages/element/box-icon","148":"pages/element/box-image","149":"pages/element/box-large-image","150":"pages/element/call-to-action","151":"pages/element/counters","152":"pages/element/gradation","153":"pages/element/teams","154":"pages/hospitales","155":"pages/ibsapp","156":"pages/index","157":"pages/login","158":"pages/poliza-accidente","159":"pages/poliza-auto","160":"pages/poliza-funeraria","161":"pages/poliza-gmm","162":"pages/poliza-hogar","163":"pages/poliza-vida","164":"pages/portafolio-polizas","165":"pages/portal","166":"pages/registro","167":"pages/service/_slug","168":"pages/siniestros"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-vue");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper/dist/vue-awesome-swiper");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("vue-observe-visibility");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);
module.exports = __webpack_require__(30);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Redirige a /login si el usuario no está autenticado.
 * Las rutas /login y /registro son públicas.
 */
const rutasPublicas = ['/', '/login', '/registro', '/register'];
/* harmony default export */ __webpack_exports__["default"] = (function ({
  route,
  redirect,
  app
}) {
  if (rutasPublicas.includes(route.path)) {
    return;
  } // Solo en el cliente podemos leer el estado de Firebase Auth


  if (false) {}
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Redirige al inicio si el usuario ya está autenticado.
 * Usar en páginas de login y registro.
 */
/* harmony default export */ __webpack_exports__["default"] = (function ({
  app,
  route,
  redirect
}) {
  if (true) {
    return;
  }

  return new Promise(resolve => {
    const unsubscribe = app.$auth.onAuthStateChanged(user => {
      unsubscribe();

      if (user) {
        redirect('/');
      }

      resolve();
    });
  });
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_473cf558_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_473cf558_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_473cf558_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_473cf558_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_error_vue_vue_type_style_index_0_id_473cf558_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_f380381a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_f380381a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_f380381a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_f380381a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_f380381a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_c86c3bb4_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_c86c3bb4_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_c86c3bb4_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_c86c3bb4_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _css_loader_dist_cjs_js_ref_3_oneOf_1_0_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_1_nuxt_components_dist_loader_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Paginate_vue_vue_type_style_index_0_id_c86c3bb4_prod_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AboutCompany", function() { return AboutCompany; });
__webpack_require__.d(components_namespaceObject, "AboutCompanyTwo", function() { return AboutCompanyTwo; });
__webpack_require__.d(components_namespaceObject, "AboutDelivery", function() { return AboutDelivery; });
__webpack_require__.d(components_namespaceObject, "AccordionOne", function() { return AccordionOne; });
__webpack_require__.d(components_namespaceObject, "AccordionTwo", function() { return AccordionTwo; });
__webpack_require__.d(components_namespaceObject, "AppointmentForm", function() { return AppointmentForm; });
__webpack_require__.d(components_namespaceObject, "BlogSidebar", function() { return BlogSidebar; });
__webpack_require__.d(components_namespaceObject, "BrandLogoCarousel", function() { return BrandLogoCarousel; });
__webpack_require__.d(components_namespaceObject, "Breadcrumbs", function() { return Breadcrumbs; });
__webpack_require__.d(components_namespaceObject, "Breadcrumbs2", function() { return Breadcrumbs2; });
__webpack_require__.d(components_namespaceObject, "CaseStudiesItem", function() { return CaseStudiesItem; });
__webpack_require__.d(components_namespaceObject, "ContactUsInfo", function() { return ContactUsInfo; });
__webpack_require__.d(components_namespaceObject, "ContactUsInfo1", function() { return ContactUsInfo1; });
__webpack_require__.d(components_namespaceObject, "CorporateVideo", function() { return CorporateVideo; });
__webpack_require__.d(components_namespaceObject, "CtaContact", function() { return CtaContact; });
__webpack_require__.d(components_namespaceObject, "CtaContactTwo", function() { return CtaContactTwo; });
__webpack_require__.d(components_namespaceObject, "CtaFour", function() { return CtaFour; });
__webpack_require__.d(components_namespaceObject, "CtaOne", function() { return CtaOne; });
__webpack_require__.d(components_namespaceObject, "CtaOne1", function() { return CtaOne1; });
__webpack_require__.d(components_namespaceObject, "CtaThree", function() { return CtaThree; });
__webpack_require__.d(components_namespaceObject, "CtaTwo", function() { return CtaTwo; });
__webpack_require__.d(components_namespaceObject, "CtaVideo", function() { return CtaVideo; });
__webpack_require__.d(components_namespaceObject, "FeatureItem", function() { return FeatureItem; });
__webpack_require__.d(components_namespaceObject, "FeatureItemStyleThree", function() { return FeatureItemStyleThree; });
__webpack_require__.d(components_namespaceObject, "FeatureItemTwo", function() { return FeatureItemTwo; });
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "FooterAbout", function() { return FooterAbout; });
__webpack_require__.d(components_namespaceObject, "FooterVideo", function() { return FooterVideo; });
__webpack_require__.d(components_namespaceObject, "FooterWidgetApps", function() { return FooterWidgetApps; });
__webpack_require__.d(components_namespaceObject, "FooterWidgetLink", function() { return FooterWidgetLink; });
__webpack_require__.d(components_namespaceObject, "FunFact", function() { return FunFact; });
__webpack_require__.d(components_namespaceObject, "FunFactThree", function() { return FunFactThree; });
__webpack_require__.d(components_namespaceObject, "FunFactTwo", function() { return FunFactTwo; });
__webpack_require__.d(components_namespaceObject, "Header", function() { return Header; });
__webpack_require__.d(components_namespaceObject, "HeaderAppointment", function() { return HeaderAppointment; });
__webpack_require__.d(components_namespaceObject, "HeaderCybersecurity", function() { return HeaderCybersecurity; });
__webpack_require__.d(components_namespaceObject, "HeaderProcessing", function() { return HeaderProcessing; });
__webpack_require__.d(components_namespaceObject, "HeaderResolution", function() { return HeaderResolution; });
__webpack_require__.d(components_namespaceObject, "HeaderTop", function() { return HeaderTop; });
__webpack_require__.d(components_namespaceObject, "HeroAppointment", function() { return HeroAppointment; });
__webpack_require__.d(components_namespaceObject, "HeroCybersecurity", function() { return HeroCybersecurity; });
__webpack_require__.d(components_namespaceObject, "HeroInfotechNo", function() { return HeroInfotechNo; });
__webpack_require__.d(components_namespaceObject, "HeroInsurance", function() { return HeroInsurance; });
__webpack_require__.d(components_namespaceObject, "HeroProcessing", function() { return HeroProcessing; });
__webpack_require__.d(components_namespaceObject, "HeroResolution", function() { return HeroResolution; });
__webpack_require__.d(components_namespaceObject, "HeroService", function() { return HeroService; });
__webpack_require__.d(components_namespaceObject, "HomeCarousel", function() { return HomeCarousel; });
__webpack_require__.d(components_namespaceObject, "InsuranceModal", function() { return InsuranceModal; });
__webpack_require__.d(components_namespaceObject, "MobileNavMenu", function() { return MobileNavMenu; });
__webpack_require__.d(components_namespaceObject, "Navigation", function() { return Navigation; });
__webpack_require__.d(components_namespaceObject, "OffCanvasMobileMenu", function() { return OffCanvasMobileMenu; });
__webpack_require__.d(components_namespaceObject, "PageHeader", function() { return PageHeader; });
__webpack_require__.d(components_namespaceObject, "PortalEmpresaView", function() { return PortalEmpresaView; });
__webpack_require__.d(components_namespaceObject, "PreviewMobileNavMenu", function() { return PreviewMobileNavMenu; });
__webpack_require__.d(components_namespaceObject, "PreviewOffcanvasMobileMenu", function() { return PreviewOffcanvasMobileMenu; });
__webpack_require__.d(components_namespaceObject, "QualifiedMethod", function() { return QualifiedMethod; });
__webpack_require__.d(components_namespaceObject, "SearchOverlay", function() { return SearchOverlay; });
__webpack_require__.d(components_namespaceObject, "SectionTitle", function() { return SectionTitle; });
__webpack_require__.d(components_namespaceObject, "ServiceIT", function() { return ServiceIT; });
__webpack_require__.d(components_namespaceObject, "ServiceItem", function() { return ServiceItem; });
__webpack_require__.d(components_namespaceObject, "ServiceItemStyleFive", function() { return ServiceItemStyleFive; });
__webpack_require__.d(components_namespaceObject, "ServiceItemStyleFour", function() { return ServiceItemStyleFour; });
__webpack_require__.d(components_namespaceObject, "ServiceItemStyleThree", function() { return ServiceItemStyleThree; });
__webpack_require__.d(components_namespaceObject, "ServiceItemStyleTwo", function() { return ServiceItemStyleTwo; });
__webpack_require__.d(components_namespaceObject, "ServiceOne", function() { return ServiceOne; });
__webpack_require__.d(components_namespaceObject, "TeamMember", function() { return TeamMember; });
__webpack_require__.d(components_namespaceObject, "VideoPupupOne", function() { return VideoPupupOne; });
__webpack_require__.d(components_namespaceObject, "VideoWithImages", function() { return VideoWithImages; });
__webpack_require__.d(components_namespaceObject, "SectionsAboutBanner", function() { return SectionsAboutBanner; });
__webpack_require__.d(components_namespaceObject, "SectionsAboutUsDescription", function() { return SectionsAboutUsDescription; });
__webpack_require__.d(components_namespaceObject, "SectionsAboutUsHero", function() { return SectionsAboutUsHero; });
__webpack_require__.d(components_namespaceObject, "SectionsAccordionWrapper", function() { return SectionsAccordionWrapper; });
__webpack_require__.d(components_namespaceObject, "SectionsAdvisoryButtons", function() { return SectionsAdvisoryButtons; });
__webpack_require__.d(components_namespaceObject, "SectionsAdvisoryButtonsCobranza", function() { return SectionsAdvisoryButtonsCobranza; });
__webpack_require__.d(components_namespaceObject, "SectionsBlogPageWrapper", function() { return SectionsBlogPageWrapper; });
__webpack_require__.d(components_namespaceObject, "SectionsBlogStyleOne", function() { return SectionsBlogStyleOne; });
__webpack_require__.d(components_namespaceObject, "SectionsBlogStyleTwo", function() { return SectionsBlogStyleTwo; });
__webpack_require__.d(components_namespaceObject, "SectionsCaseStudiesItemWrapper", function() { return SectionsCaseStudiesItemWrapper; });
__webpack_require__.d(components_namespaceObject, "SectionsCaseStudiesSection", function() { return SectionsCaseStudiesSection; });
__webpack_require__.d(components_namespaceObject, "SectionsCaseStudiesSectionTwo", function() { return SectionsCaseStudiesSectionTwo; });
__webpack_require__.d(components_namespaceObject, "SectionsCompanyHistory", function() { return SectionsCompanyHistory; });
__webpack_require__.d(components_namespaceObject, "SectionsCompañiasSegurosSection", function() { return SectionsCompañiasSegurosSection; });
__webpack_require__.d(components_namespaceObject, "SectionsContactUs", function() { return SectionsContactUs; });
__webpack_require__.d(components_namespaceObject, "SectionsContactUsFour", function() { return SectionsContactUsFour; });
__webpack_require__.d(components_namespaceObject, "SectionsContactUsThree", function() { return SectionsContactUsThree; });
__webpack_require__.d(components_namespaceObject, "SectionsContactUsTwo", function() { return SectionsContactUsTwo; });
__webpack_require__.d(components_namespaceObject, "SectionsCotHogar", function() { return SectionsCotHogar; });
__webpack_require__.d(components_namespaceObject, "SectionsCotizaGmExt", function() { return SectionsCotizaGmExt; });
__webpack_require__.d(components_namespaceObject, "SectionsCotizaGmm", function() { return SectionsCotizaGmm; });
__webpack_require__.d(components_namespaceObject, "SectionsDirectoresSection", function() { return SectionsDirectoresSection; });
__webpack_require__.d(components_namespaceObject, "SectionsExperienciaSection", function() { return SectionsExperienciaSection; });
__webpack_require__.d(components_namespaceObject, "SectionsFeatureGallery", function() { return SectionsFeatureGallery; });
__webpack_require__.d(components_namespaceObject, "SectionsFeatureGalleryFour", function() { return SectionsFeatureGalleryFour; });
__webpack_require__.d(components_namespaceObject, "SectionsFeatureGalleryTwo", function() { return SectionsFeatureGalleryTwo; });
__webpack_require__.d(components_namespaceObject, "SectionsFormacionExperienciaSection", function() { return SectionsFormacionExperienciaSection; });
__webpack_require__.d(components_namespaceObject, "SectionsFormacionSection", function() { return SectionsFormacionSection; });
__webpack_require__.d(components_namespaceObject, "SectionsFourSteps", function() { return SectionsFourSteps; });
__webpack_require__.d(components_namespaceObject, "SectionsGalleryOne", function() { return SectionsGalleryOne; });
__webpack_require__.d(components_namespaceObject, "SectionsIBSAppSection", function() { return SectionsIBSAppSection; });
__webpack_require__.d(components_namespaceObject, "SectionsInfoTechExperience", function() { return SectionsInfoTechExperience; });
__webpack_require__.d(components_namespaceObject, "SectionsInsuranceDirectory", function() { return SectionsInsuranceDirectory; });
__webpack_require__.d(components_namespaceObject, "SectionsInsuranceDirectoryCobranza", function() { return SectionsInsuranceDirectoryCobranza; });
__webpack_require__.d(components_namespaceObject, "SectionsPremiosSection", function() { return SectionsPremiosSection; });
__webpack_require__.d(components_namespaceObject, "SectionsPricingOne", function() { return SectionsPricingOne; });
__webpack_require__.d(components_namespaceObject, "SectionsServiceITSolution", function() { return SectionsServiceITSolution; });
__webpack_require__.d(components_namespaceObject, "SectionsServiceStyleEight", function() { return SectionsServiceStyleEight; });
__webpack_require__.d(components_namespaceObject, "SectionsServiceStyleFive", function() { return SectionsServiceStyleFive; });
__webpack_require__.d(components_namespaceObject, "SectionsServiceStyleSeven", function() { return SectionsServiceStyleSeven; });
__webpack_require__.d(components_namespaceObject, "SectionsServiceStyleSix", function() { return SectionsServiceStyleSix; });
__webpack_require__.d(components_namespaceObject, "SectionsServiceStyleThree", function() { return SectionsServiceStyleThree; });
__webpack_require__.d(components_namespaceObject, "SectionsServiceStyleTwo", function() { return SectionsServiceStyleTwo; });
__webpack_require__.d(components_namespaceObject, "SectionsTabSection", function() { return SectionsTabSection; });
__webpack_require__.d(components_namespaceObject, "SectionsTeamMemberList", function() { return SectionsTeamMemberList; });
__webpack_require__.d(components_namespaceObject, "SectionsTeamOne", function() { return SectionsTeamOne; });
__webpack_require__.d(components_namespaceObject, "SectionsTeamTwo", function() { return SectionsTeamTwo; });
__webpack_require__.d(components_namespaceObject, "SectionsTerminosCondicionesButton", function() { return SectionsTerminosCondicionesButton; });
__webpack_require__.d(components_namespaceObject, "SectionsTestimonialOne", function() { return SectionsTestimonialOne; });
__webpack_require__.d(components_namespaceObject, "SectionsTestimonialTwo", function() { return SectionsTestimonialTwo; });
__webpack_require__.d(components_namespaceObject, "SectionsTiposSegurosSection", function() { return SectionsTiposSegurosSection; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(10);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['auth'] = __webpack_require__(18);
middleware['auth'] = middleware['auth'].default || middleware['auth'];
middleware['guest'] = __webpack_require__(19);
middleware['guest'] = middleware['guest'].default || middleware['guest'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(11);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(5);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(4);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(6);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _73dbd5d5 = () => interopDefault(__webpack_require__.e(/* import() | pages/About */ 120).then(__webpack_require__.bind(null, 254)));

const _101ba770 = () => interopDefault(__webpack_require__.e(/* import() | pages/agente */ 136).then(__webpack_require__.bind(null, 200)));

const _09fefddb = () => interopDefault(__webpack_require__.e(/* import() | pages/agentes */ 137).then(__webpack_require__.bind(null, 315)));

const _cfd35e32 = () => interopDefault(__webpack_require__.e(/* import() | pages/Appointment */ 121).then(__webpack_require__.bind(null, 255)));

const _f9751026 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/index */ 141).then(__webpack_require__.bind(null, 256)));

const _1ef65656 = () => interopDefault(__webpack_require__.e(/* import() | pages/case-studies/index */ 143).then(__webpack_require__.bind(null, 257)));

const _d4bea3d0 = () => interopDefault(__webpack_require__.e(/* import() | pages/cobranza */ 144).then(__webpack_require__.bind(null, 258)));

const _228aee30 = () => interopDefault(__webpack_require__.e(/* import() | pages/Contact */ 122).then(__webpack_require__.bind(null, 259)));

const _dc4196b2 = () => interopDefault(__webpack_require__.e(/* import() | pages/Cotgmm */ 124).then(__webpack_require__.bind(null, 260)));

const _e8b2049e = () => interopDefault(__webpack_require__.e(/* import() | pages/CotHogar */ 123).then(__webpack_require__.bind(null, 261)));

const _18c3bee1 = () => interopDefault(__webpack_require__.e(/* import() | pages/Cybersecurity */ 125).then(__webpack_require__.bind(null, 262)));

const _3f3580c8 = () => interopDefault(__webpack_require__.e(/* import() | pages/descargables */ 145).then(__webpack_require__.bind(null, 263)));

const _cd97f63e = () => interopDefault(__webpack_require__.e(/* import() | pages/Faq/index */ 127).then(__webpack_require__.bind(null, 264)));

const _8907a2ba = () => interopDefault(__webpack_require__.e(/* import() | pages/GmExt */ 128).then(__webpack_require__.bind(null, 265)));

const _0ce2a6b0 = () => interopDefault(__webpack_require__.e(/* import() | pages/hospitales */ 154).then(__webpack_require__.bind(null, 266)));

const _a562c7a2 = () => interopDefault(__webpack_require__.e(/* import() | pages/ibsapp */ 155).then(__webpack_require__.bind(null, 267)));

const _44451220 = () => interopDefault(__webpack_require__.e(/* import() | pages/IT-Solutions */ 129).then(__webpack_require__.bind(null, 268)));

const _09830aad = () => interopDefault(__webpack_require__.e(/* import() | pages/Leadership */ 130).then(__webpack_require__.bind(null, 269)));

const _346d985e = () => interopDefault(__webpack_require__.e(/* import() | pages/login */ 157).then(__webpack_require__.bind(null, 270)));

const _3c7f7468 = () => interopDefault(__webpack_require__.e(/* import() | pages/Politicas */ 131).then(__webpack_require__.bind(null, 271)));

const _f16fb1d8 = () => interopDefault(__webpack_require__.e(/* import() | pages/poliza-accidente */ 158).then(__webpack_require__.bind(null, 272)));

const _23919dc1 = () => interopDefault(__webpack_require__.e(/* import() | pages/poliza-auto */ 159).then(__webpack_require__.bind(null, 273)));

const _e8511e5a = () => interopDefault(__webpack_require__.e(/* import() | pages/poliza-funeraria */ 160).then(__webpack_require__.bind(null, 274)));

const _12d279b6 = () => interopDefault(__webpack_require__.e(/* import() | pages/poliza-gmm */ 161).then(__webpack_require__.bind(null, 275)));

const _2942c4cf = () => interopDefault(__webpack_require__.e(/* import() | pages/poliza-hogar */ 162).then(__webpack_require__.bind(null, 276)));

const _122cb202 = () => interopDefault(__webpack_require__.e(/* import() | pages/poliza-vida */ 163).then(__webpack_require__.bind(null, 277)));

const _827006d8 = () => interopDefault(__webpack_require__.e(/* import() | pages/portafolio-polizas */ 164).then(__webpack_require__.bind(null, 278)));

const _4e2e80b4 = () => interopDefault(__webpack_require__.e(/* import() | pages/portal */ 165).then(__webpack_require__.bind(null, 253)));

const _55a7effb = () => interopDefault(__webpack_require__.e(/* import() | pages/Processing */ 132).then(__webpack_require__.bind(null, 279)));

const _457ac0fb = () => interopDefault(__webpack_require__.e(/* import() | pages/registro */ 166).then(__webpack_require__.bind(null, 280)));

const _f67502e2 = () => interopDefault(__webpack_require__.e(/* import() | pages/Resolutions */ 133).then(__webpack_require__.bind(null, 281)));

const _7959d8fd = () => interopDefault(__webpack_require__.e(/* import() | pages/Service */ 134).then(__webpack_require__.bind(null, 282)));

const _df3df3ae = () => interopDefault(__webpack_require__.e(/* import() | pages/siniestros */ 168).then(__webpack_require__.bind(null, 283)));

const _7955756c = () => interopDefault(__webpack_require__.e(/* import() | pages/Solicitud */ 135).then(__webpack_require__.bind(null, 284)));

const _2a16d968 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/blog-details */ 140).then(__webpack_require__.bind(null, 285)));

const _b82b7746 = () => interopDefault(__webpack_require__.e(/* import() | pages/element/accordion */ 146).then(__webpack_require__.bind(null, 286)));

const _35619f94 = () => interopDefault(__webpack_require__.e(/* import() | pages/element/box-icon */ 147).then(__webpack_require__.bind(null, 287)));

const _34807524 = () => interopDefault(__webpack_require__.e(/* import() | pages/element/box-image */ 148).then(__webpack_require__.bind(null, 288)));

const _942d25c8 = () => interopDefault(__webpack_require__.e(/* import() | pages/element/box-large-image */ 149).then(__webpack_require__.bind(null, 289)));

const _ceb28658 = () => interopDefault(__webpack_require__.e(/* import() | pages/element/call-to-action */ 150).then(__webpack_require__.bind(null, 290)));

const _c939d61c = () => interopDefault(__webpack_require__.e(/* import() | pages/element/counters */ 151).then(__webpack_require__.bind(null, 291)));

const _aa096e08 = () => interopDefault(__webpack_require__.e(/* import() | pages/element/gradation */ 152).then(__webpack_require__.bind(null, 292)));

const _7ec92f6a = () => interopDefault(__webpack_require__.e(/* import() | pages/element/teams */ 153).then(__webpack_require__.bind(null, 293)));

const _1593c68a = () => interopDefault(__webpack_require__.e(/* import() | pages/beneficios/_slug */ 138).then(__webpack_require__.bind(null, 294)));

const _fce252b6 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/_slug */ 139).then(__webpack_require__.bind(null, 295)));

const _a107ef06 = () => interopDefault(__webpack_require__.e(/* import() | pages/case-studies/_id */ 142).then(__webpack_require__.bind(null, 296)));

const _a3e068ee = () => interopDefault(__webpack_require__.e(/* import() | pages/Faq/_id */ 126).then(__webpack_require__.bind(null, 297)));

const _03720c98 = () => interopDefault(__webpack_require__.e(/* import() | pages/service/_slug */ 167).then(__webpack_require__.bind(null, 298)));

const _1c2190ba = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 156).then(__webpack_require__.bind(null, 299)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior: router_scrollBehavior,
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
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=473cf558&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "error404 bg-cover",
    style: {
      backgroundImage: `url('/images/bg/page-404-bg.jpg')`
    }
  }, [_vm._ssrNode("<div class=\"container\" data-v-473cf558><div class=\"row\" data-v-473cf558><div class=\"col-md-12 text-center\" data-v-473cf558><div class=\"error-image\" data-v-473cf558><img src=\"/images/other/page-404-image.png\" alt=\"Not Found Image\" class=\"img-fluid\" data-v-473cf558></div> " + (_vm.error.statusCode === 404 ? "<h1 class=\"error-404-title font-weight--light text-white\" data-v-473cf558>Oops! Page not found!</h1>" : "<h1 class=\"error-404-title font-weight--light text-white\" data-v-473cf558>An error occurred</h1>") + " <div class=\"error-buttons section-space--mt_30\" data-v-473cf558><button class=\"ht-btn ht-btn-md\" data-v-473cf558><span class=\"button-icon mr-2\" data-v-473cf558><i class=\"fa fa-home\" data-v-473cf558></i></span> <span class=\"button-text\" data-v-473cf558>Go back to homepage</span></button></div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=473cf558&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js&
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  props: ['error']
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./layouts/error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(20)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "473cf558",
  "3ff147d8"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(21)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "5bbdb67f"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__(23);

// EXTERNAL MODULE: ./assets/scss/style.scss
var style = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=426b0bba&
var defaultvue_type_template_id_426b0bba_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('nuxt')], 1);
};

var defaultvue_type_template_id_426b0bba_staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=426b0bba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  middleware(ctx) {
    const rutasPublicas = ['/', '/login', '/registro', '/register'];

    if (rutasPublicas.includes(ctx.route.path)) {
      return;
    }

    return 'auth';
  }

});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_426b0bba_render,
  defaultvue_type_template_id_426b0bba_staticRenderFns,
  false,
  null,
  null,
  "65be8ecd"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(external_ufo_["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(external_ufo_["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();

      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(external_ufo_["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AboutCompany = () => __webpack_require__.e(/* import() | components/about-company */ 1).then(__webpack_require__.bind(null, 174)).then(c => wrapFunctional(c.default || c));
const AboutCompanyTwo = () => __webpack_require__.e(/* import() | components/about-company-two */ 2).then(__webpack_require__.bind(null, 300)).then(c => wrapFunctional(c.default || c));
const AboutDelivery = () => __webpack_require__.e(/* import() | components/about-delivery */ 3).then(__webpack_require__.bind(null, 162)).then(c => wrapFunctional(c.default || c));
const AccordionOne = () => __webpack_require__.e(/* import() | components/accordion-one */ 4).then(__webpack_require__.bind(null, 179)).then(c => wrapFunctional(c.default || c));
const AccordionTwo = () => __webpack_require__.e(/* import() | components/accordion-two */ 5).then(__webpack_require__.bind(null, 95)).then(c => wrapFunctional(c.default || c));
const AppointmentForm = () => __webpack_require__.e(/* import() | components/appointment-form */ 6).then(__webpack_require__.bind(null, 85)).then(c => wrapFunctional(c.default || c));
const BlogSidebar = () => __webpack_require__.e(/* import() | components/blog-sidebar */ 7).then(__webpack_require__.bind(null, 106)).then(c => wrapFunctional(c.default || c));
const BrandLogoCarousel = () => __webpack_require__.e(/* import() | components/brand-logo-carousel */ 8).then(__webpack_require__.bind(null, 69)).then(c => wrapFunctional(c.default || c));
const Breadcrumbs = () => __webpack_require__.e(/* import() | components/breadcrumbs */ 9).then(__webpack_require__.bind(null, 58)).then(c => wrapFunctional(c.default || c));
const Breadcrumbs2 = () => __webpack_require__.e(/* import() | components/breadcrumbs2 */ 10).then(__webpack_require__.bind(null, 63)).then(c => wrapFunctional(c.default || c));
const CaseStudiesItem = () => __webpack_require__.e(/* import() | components/case-studies-item */ 11).then(__webpack_require__.bind(null, 73)).then(c => wrapFunctional(c.default || c));
const ContactUsInfo = () => __webpack_require__.e(/* import() | components/contact-us-info */ 12).then(__webpack_require__.bind(null, 316)).then(c => wrapFunctional(c.default || c));
const ContactUsInfo1 = () => __webpack_require__.e(/* import() | components/contact-us-info1 */ 13).then(__webpack_require__.bind(null, 178)).then(c => wrapFunctional(c.default || c));
const CorporateVideo = () => __webpack_require__.e(/* import() | components/corporate-video */ 14).then(__webpack_require__.bind(null, 90)).then(c => wrapFunctional(c.default || c));
const CtaContact = () => __webpack_require__.e(/* import() | components/cta-contact */ 15).then(__webpack_require__.bind(null, 177)).then(c => wrapFunctional(c.default || c));
const CtaContactTwo = () => __webpack_require__.e(/* import() | components/cta-contact-two */ 16).then(__webpack_require__.bind(null, 92)).then(c => wrapFunctional(c.default || c));
const CtaFour = () => __webpack_require__.e(/* import() | components/cta-four */ 17).then(__webpack_require__.bind(null, 301)).then(c => wrapFunctional(c.default || c));
const CtaOne = () => __webpack_require__.e(/* import() | components/cta-one */ 18).then(__webpack_require__.bind(null, 68)).then(c => wrapFunctional(c.default || c));
const CtaOne1 = () => __webpack_require__.e(/* import() | components/cta-one1 */ 19).then(__webpack_require__.bind(null, 170)).then(c => wrapFunctional(c.default || c));
const CtaThree = () => __webpack_require__.e(/* import() | components/cta-three */ 20).then(__webpack_require__.bind(null, 59)).then(c => wrapFunctional(c.default || c));
const CtaTwo = () => __webpack_require__.e(/* import() | components/cta-two */ 21).then(__webpack_require__.bind(null, 166)).then(c => wrapFunctional(c.default || c));
const CtaVideo = () => __webpack_require__.e(/* import() | components/cta-video */ 22).then(__webpack_require__.bind(null, 163)).then(c => wrapFunctional(c.default || c));
const FeatureItem = () => __webpack_require__.e(/* import() | components/feature-item */ 23).then(__webpack_require__.bind(null, 74)).then(c => wrapFunctional(c.default || c));
const FeatureItemStyleThree = () => __webpack_require__.e(/* import() | components/feature-item-style-three */ 24).then(__webpack_require__.bind(null, 81)).then(c => wrapFunctional(c.default || c));
const FeatureItemTwo = () => __webpack_require__.e(/* import() | components/feature-item-two */ 25).then(__webpack_require__.bind(null, 89)).then(c => wrapFunctional(c.default || c));
const Footer = () => __webpack_require__.e(/* import() | components/footer */ 26).then(__webpack_require__.bind(null, 46)).then(c => wrapFunctional(c.default || c));
const FooterAbout = () => __webpack_require__.e(/* import() | components/footer-about */ 27).then(__webpack_require__.bind(null, 39)).then(c => wrapFunctional(c.default || c));
const FooterVideo = () => __webpack_require__.e(/* import() | components/footer-video */ 28).then(__webpack_require__.bind(null, 302)).then(c => wrapFunctional(c.default || c));
const FooterWidgetApps = () => __webpack_require__.e(/* import() | components/footer-widget-apps */ 29).then(__webpack_require__.bind(null, 41)).then(c => wrapFunctional(c.default || c));
const FooterWidgetLink = () => __webpack_require__.e(/* import() | components/footer-widget-link */ 30).then(__webpack_require__.bind(null, 40)).then(c => wrapFunctional(c.default || c));
const FunFact = () => __webpack_require__.e(/* import() | components/fun-fact */ 31).then(__webpack_require__.bind(null, 172)).then(c => wrapFunctional(c.default || c));
const FunFactThree = () => __webpack_require__.e(/* import() | components/fun-fact-three */ 32).then(__webpack_require__.bind(null, 86)).then(c => wrapFunctional(c.default || c));
const FunFactTwo = () => __webpack_require__.e(/* import() | components/fun-fact-two */ 33).then(__webpack_require__.bind(null, 105)).then(c => wrapFunctional(c.default || c));
const Header = () => __webpack_require__.e(/* import() | components/header */ 34).then(__webpack_require__.bind(null, 61)).then(c => wrapFunctional(c.default || c));
const HeaderAppointment = () => __webpack_require__.e(/* import() | components/header-appointment */ 35).then(__webpack_require__.bind(null, 53)).then(c => wrapFunctional(c.default || c));
const HeaderCybersecurity = () => __webpack_require__.e(/* import() | components/header-cybersecurity */ 36).then(__webpack_require__.bind(null, 161)).then(c => wrapFunctional(c.default || c));
const HeaderProcessing = () => __webpack_require__.e(/* import() | components/header-processing */ 37).then(__webpack_require__.bind(null, 108)).then(c => wrapFunctional(c.default || c));
const HeaderResolution = () => __webpack_require__.e(/* import() | components/header-resolution */ 38).then(__webpack_require__.bind(null, 167)).then(c => wrapFunctional(c.default || c));
const HeaderTop = () => __webpack_require__.e(/* import() | components/header-top */ 39).then(__webpack_require__.bind(null, 56)).then(c => wrapFunctional(c.default || c));
const HeroAppointment = () => __webpack_require__.e(/* import() | components/hero-appointment */ 40).then(__webpack_require__.bind(null, 160)).then(c => wrapFunctional(c.default || c));
const HeroCybersecurity = () => __webpack_require__.e(/* import() | components/hero-cybersecurity */ 41).then(__webpack_require__.bind(null, 176)).then(c => wrapFunctional(c.default || c));
const HeroInfotechNo = () => __webpack_require__.e(/* import() | components/hero-infotech-no */ 42).then(__webpack_require__.bind(null, 303)).then(c => wrapFunctional(c.default || c));
const HeroInsurance = () => __webpack_require__.e(/* import() | components/hero-insurance */ 43).then(__webpack_require__.bind(null, 173)).then(c => wrapFunctional(c.default || c));
const HeroProcessing = () => __webpack_require__.e(/* import() | components/hero-processing */ 44).then(__webpack_require__.bind(null, 165)).then(c => wrapFunctional(c.default || c));
const HeroResolution = () => __webpack_require__.e(/* import() | components/hero-resolution */ 45).then(__webpack_require__.bind(null, 168)).then(c => wrapFunctional(c.default || c));
const HeroService = () => __webpack_require__.e(/* import() | components/hero-service */ 46).then(__webpack_require__.bind(null, 169)).then(c => wrapFunctional(c.default || c));
const HomeCarousel = () => __webpack_require__.e(/* import() | components/home-carousel */ 47).then(__webpack_require__.bind(null, 164)).then(c => wrapFunctional(c.default || c));
const InsuranceModal = () => __webpack_require__.e(/* import() | components/insurance-modal */ 48).then(__webpack_require__.bind(null, 100)).then(c => wrapFunctional(c.default || c));
const MobileNavMenu = () => __webpack_require__.e(/* import() | components/mobile-nav-menu */ 49).then(__webpack_require__.bind(null, 44)).then(c => wrapFunctional(c.default || c));
const Navigation = () => __webpack_require__.e(/* import() | components/navigation */ 50).then(__webpack_require__.bind(null, 38)).then(c => wrapFunctional(c.default || c));
const OffCanvasMobileMenu = () => __webpack_require__.e(/* import() | components/off-canvas-mobile-menu */ 51).then(__webpack_require__.bind(null, 47)).then(c => wrapFunctional(c.default || c));
const PageHeader = () => __webpack_require__.e(/* import() | components/page-header */ 52).then(__webpack_require__.bind(null, 159)).then(c => wrapFunctional(c.default || c));
const PortalEmpresaView = () => __webpack_require__.e(/* import() | components/portal-empresa-view */ 53).then(__webpack_require__.bind(null, 158)).then(c => wrapFunctional(c.default || c));
const PreviewMobileNavMenu = () => __webpack_require__.e(/* import() | components/preview-mobile-nav-menu */ 54).then(__webpack_require__.bind(null, 175)).then(c => wrapFunctional(c.default || c));
const PreviewOffcanvasMobileMenu = () => __webpack_require__.e(/* import() | components/preview-offcanvas-mobile-menu */ 55).then(__webpack_require__.bind(null, 304)).then(c => wrapFunctional(c.default || c));
const QualifiedMethod = () => __webpack_require__.e(/* import() | components/qualified-method */ 56).then(__webpack_require__.bind(null, 317)).then(c => wrapFunctional(c.default || c));
const SearchOverlay = () => __webpack_require__.e(/* import() | components/search-overlay */ 57).then(__webpack_require__.bind(null, 87)).then(c => wrapFunctional(c.default || c));
const SectionTitle = () => __webpack_require__.e(/* import() | components/section-title */ 58).then(__webpack_require__.bind(null, 57)).then(c => wrapFunctional(c.default || c));
const ServiceIT = () => __webpack_require__.e(/* import() | components/service-i-t */ 110).then(__webpack_require__.bind(null, 171)).then(c => wrapFunctional(c.default || c));
const ServiceItem = () => __webpack_require__.e(/* import() | components/service-item */ 111).then(__webpack_require__.bind(null, 91)).then(c => wrapFunctional(c.default || c));
const ServiceItemStyleFive = () => __webpack_require__.e(/* import() | components/service-item-style-five */ 112).then(__webpack_require__.bind(null, 88)).then(c => wrapFunctional(c.default || c));
const ServiceItemStyleFour = () => __webpack_require__.e(/* import() | components/service-item-style-four */ 113).then(__webpack_require__.bind(null, 80)).then(c => wrapFunctional(c.default || c));
const ServiceItemStyleThree = () => __webpack_require__.e(/* import() | components/service-item-style-three */ 114).then(__webpack_require__.bind(null, 103)).then(c => wrapFunctional(c.default || c));
const ServiceItemStyleTwo = () => __webpack_require__.e(/* import() | components/service-item-style-two */ 115).then(__webpack_require__.bind(null, 79)).then(c => wrapFunctional(c.default || c));
const ServiceOne = () => __webpack_require__.e(/* import() | components/service-one */ 116).then(__webpack_require__.bind(null, 305)).then(c => wrapFunctional(c.default || c));
const TeamMember = () => __webpack_require__.e(/* import() | components/team-member */ 117).then(__webpack_require__.bind(null, 71)).then(c => wrapFunctional(c.default || c));
const VideoPupupOne = () => __webpack_require__.e(/* import() | components/video-pupup-one */ 118).then(__webpack_require__.bind(null, 102)).then(c => wrapFunctional(c.default || c));
const VideoWithImages = () => __webpack_require__.e(/* import() | components/video-with-images */ 119).then(__webpack_require__.bind(null, 131)).then(c => wrapFunctional(c.default || c));
const SectionsAboutBanner = () => __webpack_require__.e(/* import() | components/sections-about-banner */ 59).then(__webpack_require__.bind(null, 306)).then(c => wrapFunctional(c.default || c));
const SectionsAboutUsDescription = () => __webpack_require__.e(/* import() | components/sections-about-us-description */ 60).then(__webpack_require__.bind(null, 307)).then(c => wrapFunctional(c.default || c));
const SectionsAboutUsHero = () => __webpack_require__.e(/* import() | components/sections-about-us-hero */ 61).then(__webpack_require__.bind(null, 201)).then(c => wrapFunctional(c.default || c));
const SectionsAccordionWrapper = () => __webpack_require__.e(/* import() | components/sections-accordion-wrapper */ 62).then(__webpack_require__.bind(null, 218)).then(c => wrapFunctional(c.default || c));
const SectionsAdvisoryButtons = () => __webpack_require__.e(/* import() | components/sections-advisory-buttons */ 63).then(__webpack_require__.bind(null, 223)).then(c => wrapFunctional(c.default || c));
const SectionsAdvisoryButtonsCobranza = () => __webpack_require__.e(/* import() | components/sections-advisory-buttons-cobranza */ 64).then(__webpack_require__.bind(null, 210)).then(c => wrapFunctional(c.default || c));
const SectionsBlogPageWrapper = () => __webpack_require__.e(/* import() | components/sections-blog-page-wrapper */ 65).then(__webpack_require__.bind(null, 208)).then(c => wrapFunctional(c.default || c));
const SectionsBlogStyleOne = () => __webpack_require__.e(/* import() | components/sections-blog-style-one */ 66).then(__webpack_require__.bind(null, 308)).then(c => wrapFunctional(c.default || c));
const SectionsBlogStyleTwo = () => __webpack_require__.e(/* import() | components/sections-blog-style-two */ 67).then(__webpack_require__.bind(null, 222)).then(c => wrapFunctional(c.default || c));
const SectionsCaseStudiesItemWrapper = () => __webpack_require__.e(/* import() | components/sections-case-studies-item-wrapper */ 68).then(__webpack_require__.bind(null, 209)).then(c => wrapFunctional(c.default || c));
const SectionsCaseStudiesSection = () => __webpack_require__.e(/* import() | components/sections-case-studies-section */ 69).then(__webpack_require__.bind(null, 130)).then(c => wrapFunctional(c.default || c));
const SectionsCaseStudiesSectionTwo = () => __webpack_require__.e(/* import() | components/sections-case-studies-section-two */ 70).then(__webpack_require__.bind(null, 220)).then(c => wrapFunctional(c.default || c));
const SectionsCompanyHistory = () => __webpack_require__.e(/* import() | components/sections-company-history */ 71).then(__webpack_require__.bind(null, 135)).then(c => wrapFunctional(c.default || c));
const SectionsCompañiasSegurosSection = () => __webpack_require__.e(/* import() | components/sections-compañias-seguros-section */ 72).then(__webpack_require__.bind(null, 205)).then(c => wrapFunctional(c.default || c));
const SectionsContactUs = () => __webpack_require__.e(/* import() | components/sections-contact-us */ 73).then(__webpack_require__.bind(null, 229)).then(c => wrapFunctional(c.default || c));
const SectionsContactUsFour = () => __webpack_require__.e(/* import() | components/sections-contact-us-four */ 74).then(__webpack_require__.bind(null, 107)).then(c => wrapFunctional(c.default || c));
const SectionsContactUsThree = () => __webpack_require__.e(/* import() | components/sections-contact-us-three */ 75).then(__webpack_require__.bind(null, 230)).then(c => wrapFunctional(c.default || c));
const SectionsContactUsTwo = () => __webpack_require__.e(/* import() | components/sections-contact-us-two */ 76).then(__webpack_require__.bind(null, 232)).then(c => wrapFunctional(c.default || c));
const SectionsCotHogar = () => __webpack_require__.e(/* import() | components/sections-cot-hogar */ 77).then(__webpack_require__.bind(null, 213)).then(c => wrapFunctional(c.default || c));
const SectionsCotizaGmExt = () => __webpack_require__.e(/* import() | components/sections-cotiza-gm-ext */ 78).then(__webpack_require__.bind(null, 215)).then(c => wrapFunctional(c.default || c));
const SectionsCotizaGmm = () => __webpack_require__.e(/* import() | components/sections-cotiza-gmm */ 79).then(__webpack_require__.bind(null, 212)).then(c => wrapFunctional(c.default || c));
const SectionsDirectoresSection = () => __webpack_require__.e(/* import() | components/sections-directores-section */ 80).then(__webpack_require__.bind(null, 203)).then(c => wrapFunctional(c.default || c));
const SectionsExperienciaSection = () => __webpack_require__.e(/* import() | components/sections-experiencia-section */ 81).then(__webpack_require__.bind(null, 309)).then(c => wrapFunctional(c.default || c));
const SectionsFeatureGallery = () => __webpack_require__.e(/* import() | components/sections-feature-gallery */ 82).then(__webpack_require__.bind(null, 134)).then(c => wrapFunctional(c.default || c));
const SectionsFeatureGalleryFour = () => __webpack_require__.e(/* import() | components/sections-feature-gallery-four */ 83).then(__webpack_require__.bind(null, 133)).then(c => wrapFunctional(c.default || c));
const SectionsFeatureGalleryTwo = () => __webpack_require__.e(/* import() | components/sections-feature-gallery-two */ 84).then(__webpack_require__.bind(null, 219)).then(c => wrapFunctional(c.default || c));
const SectionsFormacionExperienciaSection = () => __webpack_require__.e(/* import() | components/sections-formacion-experiencia-section */ 85).then(__webpack_require__.bind(null, 202)).then(c => wrapFunctional(c.default || c));
const SectionsFormacionSection = () => __webpack_require__.e(/* import() | components/sections-formacion-section */ 86).then(__webpack_require__.bind(null, 310)).then(c => wrapFunctional(c.default || c));
const SectionsFourSteps = () => __webpack_require__.e(/* import() | components/sections-four-steps */ 87).then(__webpack_require__.bind(null, 136)).then(c => wrapFunctional(c.default || c));
const SectionsGalleryOne = () => __webpack_require__.e(/* import() | components/sections-gallery-one */ 88).then(__webpack_require__.bind(null, 231)).then(c => wrapFunctional(c.default || c));
const SectionsIBSAppSection = () => __webpack_require__.e(/* import() | components/sections-i-b-s-app-section */ 89).then(__webpack_require__.bind(null, 216)).then(c => wrapFunctional(c.default || c));
const SectionsInfoTechExperience = () => __webpack_require__.e(/* import() | components/sections-info-tech-experience */ 90).then(__webpack_require__.bind(null, 311)).then(c => wrapFunctional(c.default || c));
const SectionsInsuranceDirectory = () => __webpack_require__.e(/* import() | components/sections-insurance-directory */ 91).then(__webpack_require__.bind(null, 224)).then(c => wrapFunctional(c.default || c));
const SectionsInsuranceDirectoryCobranza = () => __webpack_require__.e(/* import() | components/sections-insurance-directory-cobranza */ 92).then(__webpack_require__.bind(null, 211)).then(c => wrapFunctional(c.default || c));
const SectionsPremiosSection = () => __webpack_require__.e(/* import() | components/sections-premios-section */ 93).then(__webpack_require__.bind(null, 204)).then(c => wrapFunctional(c.default || c));
const SectionsPricingOne = () => __webpack_require__.e(/* import() | components/sections-pricing-one */ 94).then(__webpack_require__.bind(null, 221)).then(c => wrapFunctional(c.default || c));
const SectionsServiceITSolution = () => __webpack_require__.e(/* import() | components/sections-service-i-t-solution */ 95).then(__webpack_require__.bind(null, 217)).then(c => wrapFunctional(c.default || c));
const SectionsServiceStyleEight = () => __webpack_require__.e(/* import() | components/sections-service-style-eight */ 96).then(__webpack_require__.bind(null, 227)).then(c => wrapFunctional(c.default || c));
const SectionsServiceStyleFive = () => __webpack_require__.e(/* import() | components/sections-service-style-five */ 97).then(__webpack_require__.bind(null, 132)).then(c => wrapFunctional(c.default || c));
const SectionsServiceStyleSeven = () => __webpack_require__.e(/* import() | components/sections-service-style-seven */ 98).then(__webpack_require__.bind(null, 226)).then(c => wrapFunctional(c.default || c));
const SectionsServiceStyleSix = () => __webpack_require__.e(/* import() | components/sections-service-style-six */ 99).then(__webpack_require__.bind(null, 225)).then(c => wrapFunctional(c.default || c));
const SectionsServiceStyleThree = () => __webpack_require__.e(/* import() | components/sections-service-style-three */ 100).then(__webpack_require__.bind(null, 109)).then(c => wrapFunctional(c.default || c));
const SectionsServiceStyleTwo = () => __webpack_require__.e(/* import() | components/sections-service-style-two */ 101).then(__webpack_require__.bind(null, 101)).then(c => wrapFunctional(c.default || c));
const SectionsTabSection = () => __webpack_require__.e(/* import() | components/sections-tab-section */ 102).then(__webpack_require__.bind(null, 207)).then(c => wrapFunctional(c.default || c));
const SectionsTeamMemberList = () => __webpack_require__.e(/* import() | components/sections-team-member-list */ 103).then(__webpack_require__.bind(null, 312)).then(c => wrapFunctional(c.default || c));
const SectionsTeamOne = () => __webpack_require__.e(/* import() | components/sections-team-one */ 104).then(__webpack_require__.bind(null, 104)).then(c => wrapFunctional(c.default || c));
const SectionsTeamTwo = () => __webpack_require__.e(/* import() | components/sections-team-two */ 105).then(__webpack_require__.bind(null, 228)).then(c => wrapFunctional(c.default || c));
const SectionsTerminosCondicionesButton = () => __webpack_require__.e(/* import() | components/sections-terminos-condiciones-button */ 106).then(__webpack_require__.bind(null, 214)).then(c => wrapFunctional(c.default || c));
const SectionsTestimonialOne = () => __webpack_require__.e(/* import() | components/sections-testimonial-one */ 107).then(__webpack_require__.bind(null, 313)).then(c => wrapFunctional(c.default || c));
const SectionsTestimonialTwo = () => __webpack_require__.e(/* import() | components/sections-testimonial-two */ 108).then(__webpack_require__.bind(null, 314)).then(c => wrapFunctional(c.default || c));
const SectionsTiposSegurosSection = () => __webpack_require__.e(/* import() | components/sections-tipos-seguros-section */ 109).then(__webpack_require__.bind(null, 206)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "bootstrap-vue"
var external_bootstrap_vue_ = __webpack_require__(12);

// CONCATENATED MODULE: ./.nuxt/bootstrap-vue.js


external_vue_default.a.use(external_bootstrap_vue_["BootstrapVue"], {});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(13);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(25);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__(26);

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__(27);

// CONCATENATED MODULE: ./config/firebase.js
// Configuración de Firebase para IBS Consultores
// Las claves del cliente son públicas; la seguridad se maneja con Firebase Security Rules
/* harmony default export */ var firebase = ({
  apiKey: 'AIzaSyA0dvk3WAK5awXnSVrroNBlO9_2x37a46Q',
  authDomain: 'appibsconsultores.firebaseapp.com',
  databaseURL: 'https://appibsconsultores.firebaseio.com',
  projectId: 'appibsconsultores',
  storageBucket: 'appibsconsultores.appspot.com',
  messagingSenderId: '616002718679',
  appId: '1:616002718679:web:4a10be622a674c2c745992'
});
// CONCATENATED MODULE: ./plugins/firebase.js




let firebase_app = null;
let authWrapper = null;
let db = null;

if (false) {}

/* harmony default export */ var plugins_firebase = (({
  app: nuxtApp
}, inject) => {
  inject('firebaseApp', firebase_app);
  inject('auth', authWrapper);
  inject('db', db);
});
// EXTERNAL MODULE: external "vue-awesome-swiper/dist/vue-awesome-swiper"
var vue_awesome_swiper_ = __webpack_require__(14);
var vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper_);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(28);

// CONCATENATED MODULE: ./plugins/vue-awesome-swiper.js



external_vue_default.a.use(vue_awesome_swiper_default.a);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuejs-paginate/src/components/Paginate.vue?vue&type=template&id=c86c3bb4&scoped=true&
var Paginatevue_type_template_id_c86c3bb4_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return !_vm.noLiSurround ? _c('ul', {
    class: _vm.containerClass
  }, [_vm._ssrNode((_vm.firstLastButton ? "<li" + _vm._ssrClass(null, [_vm.pageClass, _vm.firstPageSelected() ? _vm.disabledClass : '']) + " data-v-c86c3bb4><a" + _vm._ssrAttr("tabindex", _vm.firstPageSelected() ? -1 : 0) + _vm._ssrClass(null, _vm.pageLinkClass) + " data-v-c86c3bb4>" + _vm._s(_vm.firstButtonText) + "</a></li>" : "<!---->") + " " + (!(_vm.firstPageSelected() && _vm.hidePrevNext) ? "<li" + _vm._ssrClass(null, [_vm.prevClass, _vm.firstPageSelected() ? _vm.disabledClass : '']) + " data-v-c86c3bb4><a" + _vm._ssrAttr("tabindex", _vm.firstPageSelected() ? -1 : 0) + _vm._ssrClass(null, _vm.prevLinkClass) + " data-v-c86c3bb4>" + _vm._s(_vm.prevText) + "</a></li>" : "<!---->") + " "), _vm._l(_vm.pages, function (page) {
    return _vm._ssrNode("<li" + _vm._ssrClass(null, [_vm.pageClass, page.selected ? _vm.activeClass : '', page.disabled ? _vm.disabledClass : '', page.breakView ? _vm.breakViewClass : '']) + " data-v-c86c3bb4>", "</li>", [page.breakView ? _vm._ssrNode("<a tabindex=\"0\"" + _vm._ssrClass(null, [_vm.pageLinkClass, _vm.breakViewLinkClass]) + " data-v-c86c3bb4>", "</a>", [_vm._t("breakViewContent", function () {
      return [_vm._v(_vm._s(_vm.breakViewText))];
    })], 2) : page.disabled ? _vm._ssrNode("<a tabindex=\"0\"" + _vm._ssrClass(null, _vm.pageLinkClass) + " data-v-c86c3bb4>" + _vm._ssrEscape(_vm._s(page.content)) + "</a>") : _vm._ssrNode("<a tabindex=\"0\"" + _vm._ssrClass(null, _vm.pageLinkClass) + " data-v-c86c3bb4>" + _vm._ssrEscape(_vm._s(page.content)) + "</a>")]);
  }), _vm._ssrNode(" " + (!(_vm.lastPageSelected() && _vm.hidePrevNext) ? "<li" + _vm._ssrClass(null, [_vm.nextClass, _vm.lastPageSelected() ? _vm.disabledClass : '']) + " data-v-c86c3bb4><a" + _vm._ssrAttr("tabindex", _vm.lastPageSelected() ? -1 : 0) + _vm._ssrClass(null, _vm.nextLinkClass) + " data-v-c86c3bb4>" + _vm._s(_vm.nextText) + "</a></li>" : "<!---->") + " " + (_vm.firstLastButton ? "<li" + _vm._ssrClass(null, [_vm.pageClass, _vm.lastPageSelected() ? _vm.disabledClass : '']) + " data-v-c86c3bb4><a" + _vm._ssrAttr("tabindex", _vm.lastPageSelected() ? -1 : 0) + _vm._ssrClass(null, _vm.pageLinkClass) + " data-v-c86c3bb4>" + _vm._s(_vm.lastButtonText) + "</a></li>" : "<!---->"))], 2) : _c('div', {
    class: _vm.containerClass
  }, [_vm._ssrNode((_vm.firstLastButton ? "<a tabindex=\"0\"" + _vm._ssrClass(null, [_vm.pageLinkClass, _vm.firstPageSelected() ? _vm.disabledClass : '']) + " data-v-c86c3bb4>" + _vm._s(_vm.firstButtonText) + "</a>" : "<!---->") + " " + (!(_vm.firstPageSelected() && _vm.hidePrevNext) ? "<a tabindex=\"0\"" + _vm._ssrClass(null, [_vm.prevLinkClass, _vm.firstPageSelected() ? _vm.disabledClass : '']) + " data-v-c86c3bb4>" + _vm._s(_vm.prevText) + "</a>" : "<!---->") + " "), _vm._l(_vm.pages, function (page) {
    return [page.breakView ? _vm._ssrNode("<a tabindex=\"0\"" + _vm._ssrClass(null, [_vm.pageLinkClass, _vm.breakViewLinkClass, page.disabled ? _vm.disabledClass : '']) + " data-v-c86c3bb4>", "</a>", [_vm._t("breakViewContent", function () {
      return [_vm._v(_vm._s(_vm.breakViewText))];
    })], 2) : page.disabled ? _vm._ssrNode("<a tabindex=\"0\"" + _vm._ssrClass(null, [_vm.pageLinkClass, page.selected ? _vm.activeClass : '', _vm.disabledClass]) + " data-v-c86c3bb4>" + _vm._ssrEscape(_vm._s(page.content)) + "</a>") : _vm._ssrNode("<a tabindex=\"0\"" + _vm._ssrClass(null, [_vm.pageLinkClass, page.selected ? _vm.activeClass : '']) + " data-v-c86c3bb4>" + _vm._ssrEscape(_vm._s(page.content)) + "</a>")];
  }), _vm._ssrNode(" " + (!(_vm.lastPageSelected() && _vm.hidePrevNext) ? "<a tabindex=\"0\"" + _vm._ssrClass(null, [_vm.nextLinkClass, _vm.lastPageSelected() ? _vm.disabledClass : '']) + " data-v-c86c3bb4>" + _vm._s(_vm.nextText) + "</a>" : "<!---->") + " " + (_vm.firstLastButton ? "<a tabindex=\"0\"" + _vm._ssrClass(null, [_vm.pageLinkClass, _vm.lastPageSelected() ? _vm.disabledClass : '']) + " data-v-c86c3bb4>" + _vm._s(_vm.lastButtonText) + "</a>" : "<!---->"))], 2);
};

var Paginatevue_type_template_id_c86c3bb4_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/vuejs-paginate/src/components/Paginate.vue?vue&type=template&id=c86c3bb4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vuejs-paginate/src/components/Paginate.vue?vue&type=script&lang=js&
/* harmony default export */ var Paginatevue_type_script_lang_js_ = ({
  props: {
    value: {
      type: Number
    },
    pageCount: {
      type: Number,
      required: true
    },
    forcePage: {
      type: Number
    },
    clickHandler: {
      type: Function,
      default: () => {}
    },
    pageRange: {
      type: Number,
      default: 3
    },
    marginPages: {
      type: Number,
      default: 1
    },
    prevText: {
      type: String,
      default: 'Prev'
    },
    nextText: {
      type: String,
      default: 'Next'
    },
    breakViewText: {
      type: String,
      default: '…'
    },
    containerClass: {
      type: String
    },
    pageClass: {
      type: String
    },
    pageLinkClass: {
      type: String
    },
    prevClass: {
      type: String
    },
    prevLinkClass: {
      type: String
    },
    nextClass: {
      type: String
    },
    nextLinkClass: {
      type: String
    },
    breakViewClass: {
      type: String
    },
    breakViewLinkClass: {
      type: String
    },
    activeClass: {
      type: String,
      default: 'active'
    },
    disabledClass: {
      type: String,
      default: 'disabled'
    },
    noLiSurround: {
      type: Boolean,
      default: false
    },
    firstLastButton: {
      type: Boolean,
      default: false
    },
    firstButtonText: {
      type: String,
      default: 'First'
    },
    lastButtonText: {
      type: String,
      default: 'Last'
    },
    hidePrevNext: {
      type: Boolean,
      default: false
    }
  },

  beforeUpdate() {
    if (this.forcePage === undefined) return;

    if (this.forcePage !== this.selected) {
      this.selected = this.forcePage;
    }
  },

  computed: {
    selected: {
      get: function () {
        return this.value || this.innerValue;
      },
      set: function (newValue) {
        this.innerValue = newValue;
      }
    },
    pages: function () {
      let items = {};

      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected - 1
          };
          items[index] = page;
        }
      } else {
        const halfPageRange = Math.floor(this.pageRange / 2);

        let setPageItem = index => {
          let page = {
            index: index,
            content: index + 1,
            selected: index === this.selected - 1
          };
          items[index] = page;
        };

        let setBreakView = index => {
          let breakView = {
            disabled: true,
            breakView: true
          };
          items[index] = breakView;
        }; // 1st - loop thru low end of margin pages


        for (let i = 0; i < this.marginPages; i++) {
          setPageItem(i);
        } // 2nd - loop thru selected range


        let selectedRangeLow = 0;

        if (this.selected - halfPageRange > 0) {
          selectedRangeLow = this.selected - 1 - halfPageRange;
        }

        let selectedRangeHigh = selectedRangeLow + this.pageRange - 1;

        if (selectedRangeHigh >= this.pageCount) {
          selectedRangeHigh = this.pageCount - 1;
          selectedRangeLow = selectedRangeHigh - this.pageRange + 1;
        }

        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++) {
          setPageItem(i);
        } // Check if there is breakView in the left of selected range


        if (selectedRangeLow > this.marginPages) {
          setBreakView(selectedRangeLow - 1);
        } // Check if there is breakView in the right of selected range


        if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
          setBreakView(selectedRangeHigh + 1);
        } // 3rd - loop thru high end of margin pages


        for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
          setPageItem(i);
        }
      }

      return items;
    }
  },

  data() {
    return {
      innerValue: 1
    };
  },

  methods: {
    handlePageSelected(selected) {
      if (this.selected === selected) return;
      this.innerValue = selected;
      this.$emit('input', selected);
      this.clickHandler(selected);
    },

    prevPage() {
      if (this.selected <= 1) return;
      this.handlePageSelected(this.selected - 1);
    },

    nextPage() {
      if (this.selected >= this.pageCount) return;
      this.handlePageSelected(this.selected + 1);
    },

    firstPageSelected() {
      return this.selected === 1;
    },

    lastPageSelected() {
      return this.selected === this.pageCount || this.pageCount === 0;
    },

    selectFirstPage() {
      if (this.selected <= 1) return;
      this.handlePageSelected(1);
    },

    selectLastPage() {
      if (this.selected >= this.pageCount) return;
      this.handlePageSelected(this.pageCount);
    }

  }
});
// CONCATENATED MODULE: ./node_modules/vuejs-paginate/src/components/Paginate.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Paginatevue_type_script_lang_js_ = (Paginatevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vuejs-paginate/src/components/Paginate.vue



function Paginate_injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Paginate_component = Object(componentNormalizer["a" /* default */])(
  components_Paginatevue_type_script_lang_js_,
  Paginatevue_type_template_id_c86c3bb4_scoped_true_render,
  Paginatevue_type_template_id_c86c3bb4_scoped_true_staticRenderFns,
  false,
  Paginate_injectStyles,
  "c86c3bb4",
  "8e7d683c"
  
)

/* harmony default export */ var Paginate = (Paginate_component.exports);
// CONCATENATED MODULE: ./plugins/vuejs-paginate.js


external_vue_default.a.component('paginate', Paginate);
// EXTERNAL MODULE: external "vue-observe-visibility"
var external_vue_observe_visibility_ = __webpack_require__(15);
var external_vue_observe_visibility_default = /*#__PURE__*/__webpack_require__.n(external_vue_observe_visibility_);

// CONCATENATED MODULE: ./plugins/observe-visibility.js


external_vue_default.a.use(external_vue_observe_visibility_default.a);
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./bootstrap-vue.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ../plugins/firebase.js (mode: 'all')

 // Source: ../plugins/vue-awesome-swiper.js (mode: 'all')

 // Source: ../plugins/vuejs-paginate.js (mode: 'all')

 // Source: ../plugins/observe-visibility.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "mitech",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "favicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/bootstrap-vue.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof plugins_firebase === 'function') {
    await plugins_firebase(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vuejs-paginate.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vuejs-paginate.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/observe-visibility.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/observe-visibility.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("vue-fixed-header");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("vue-cool-lightbox");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("vue-count-to");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@emailjs/browser");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("vue-multiselect");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("vue2-datepicker");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map