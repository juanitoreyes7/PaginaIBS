exports.ids = [38,50];
exports.modules = {

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderResolution.vue?vue&type=template&id=392ec3c1&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "header-area header-area--absolute"
  }, [_vm._ssrNode("<div class=\"header-top-bar-info border-bottom d-none d-lg-block\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"top-bar-wrap\">", "</div>", [_vm._ssrNode("<div class=\"top-bar-left\">", "</div>", [_vm._ssrNode("<div class=\"top-bar-text text-white\">", "</div>", [_c('n-link', {
    staticClass: "font-medium display-inline",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Now Hiring:")]), _vm._ssrNode("\n                                Are you a driven and motivated 1st Line IT Support Engineer?\n                            ")], 2)]), _vm._ssrNode(" <div class=\"top-bar-right\"><ul class=\"top-bar-info\"><li class=\"info-item\"><a href=\"tel:01228899900\" class=\"info-link text-white\"><i class=\"info-icon fa fa-phone\"></i> <span class=\"info-text\"><strong>0122 8899900</strong></span></a></li> <li class=\"info-item text-white\"><i class=\"info-icon fa fa-map-marker-alt\"></i> <span class=\"info-text\">58 Howard Street #2 San Francisco</span></li></ul></div>")], 2)])])])]), _vm._ssrNode(" "), _c('fixed-header', {
    attrs: {
      "threshold": 300
    }
  }, [_c('div', {
    staticClass: "header-bottom-wrap"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "header position-relative"
  }, [_c('div', {
    staticClass: "header__logo"
  }, [_c('n-link', {
    attrs: {
      "to": "/resolution"
    }
  }, [_c('img', {
    staticClass: "img-fluid light-logo",
    attrs: {
      "src": "/images/logo/light-logo.png",
      "alt": "Brand Logo"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "img-fluid dark-logo",
    attrs: {
      "src": "/images/logo/logo-dark.png",
      "alt": "Brand Logo"
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "header-right"
  }, [_c('div', {
    staticClass: "header__navigation menu-style-four d-none d-xl-block"
  }, [_c('nav', {
    staticClass: "navigation-menu"
  }, [_c('Navigation')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "header-search-form-two white-icon"
  }, [_c('div', {
    staticClass: "search-icon",
    attrs: {
      "id": "search-overlay-trigger"
    },
    on: {
      "click": function ($event) {
        return _vm.toggleClass('addClass', 'active');
      }
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "fa fa-search"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "mobile-navigation-icon white-md-icon d-block d-xl-none",
    attrs: {
      "id": "mobile-menu-trigger"
    },
    on: {
      "click": function ($event) {
        return _vm.mobiletoggleClass('addClass', 'active');
      }
    }
  }, [_c('i')])])])])])])])])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeaderResolution.vue?vue&type=template&id=392ec3c1&

// EXTERNAL MODULE: external "vue-fixed-header"
var external_vue_fixed_header_ = __webpack_require__(31);
var external_vue_fixed_header_default = /*#__PURE__*/__webpack_require__.n(external_vue_fixed_header_);

// EXTERNAL MODULE: ./components/Navigation.vue + 4 modules
var Navigation = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderResolution.vue?vue&type=script&lang=js&


/* harmony default export */ var HeaderResolutionvue_type_script_lang_js_ = ({
  components: {
    FixedHeader: external_vue_fixed_header_default.a,
    Navigation: Navigation["default"]
  },
  methods: {
    // offcanvas mobilemenu open
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

    toggleClass(addRemoveClass, className) {
      const el = document.querySelector('#search-overlay');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/HeaderResolution.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderResolutionvue_type_script_lang_js_ = (HeaderResolutionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeaderResolution.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderResolutionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d3506b8"
  
)

/* harmony default export */ var HeaderResolution = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(38).default})


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=658ea6e8&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('ul', _vm._l(_vm.navItems, function (item, index) {
    return _vm._ssrNode("<li data-v-658ea6e8>", "</li>", [_c('n-link', {
      attrs: {
        "to": item.to
      }
    }, [_c('span', [_vm._v(_vm._s(item.label))])])], 1);
  }), 0);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=658ea6e8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=script&lang=js&
/* harmony default export */ var Navigationvue_type_script_lang_js_ = ({
  data() {
    return {
      navItems: [{
        to: '/',
        label: 'Inicio'
      }, {
        to: '/about',
        label: 'Nosotros'
      }, {
        to: '/agente',
        label: 'Únete como agente'
      }, {
        to: '/case-studies',
        label: 'Seguros'
      }, {
        to: '/ibsapp',
        label: 'IBSApp'
      }, {
        to: '/siniestros',
        label: 'Siniestros'
      }, {
        to: '/cobranza',
        label: 'Cobranza'
      }, {
        to: '/contact',
        label: 'Contacto'
      }, {
        to: '/descargables',
        label: 'Descargables'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "658ea6e8",
  "4425b85f"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header-resolution.js.map