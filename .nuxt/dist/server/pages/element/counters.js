exports.ids = [151,9,20,26,27,29,30,31,32,33,34,39,49,50,51];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFactTwo.vue?vue&type=template&id=9f58cb30&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('div', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: {
        callback: _vm.visibilityChanged,
        once: true
      },
      expression: "{callback: visibilityChanged, once: true}"
    }],
    staticClass: "row"
  }, _vm._l(_vm.data.funfactOne, function (item) {
    return _vm._ssrNode("<div class=\"col-md-3 col-sm-6 wow move-up\">", "</div>", [_vm.isVisible ? _vm._ssrNode("<div class=\"fun-fact--two text-center\">", "</div>", [_vm._ssrNode("<div class=\"fun-fact__count counter\">", "</div>", [_c('countTo', {
      attrs: {
        "startVal": _vm.startVal,
        "endVal": item.count,
        "duration": 4000
      }
    })], 1), _vm._ssrNode(" <h6 class=\"fun-fact__text\">" + _vm._ssrEscape(_vm._s(item.text)) + "</h6>")], 2) : _vm._e()]);
  }), 0)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FunFactTwo.vue?vue&type=template&id=9f58cb30&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(33);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: ./data/funfact.json
var funfact = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFactTwo.vue?vue&type=script&lang=js&


/* harmony default export */ var FunFactTwovue_type_script_lang_js_ = ({
  components: {
    countTo: external_vue_count_to_default.a
  },

  data() {
    return {
      data: funfact,
      startVal: 0,
      isVisible: false
    };
  },

  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }

  }
});
// CONCATENATED MODULE: ./components/FunFactTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FunFactTwovue_type_script_lang_js_ = (FunFactTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FunFactTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FunFactTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6444898c"
  
)

/* harmony default export */ var FunFactTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFact.vue?vue&type=template&id=20f7c3ee&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "fun-fact-wrapper"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('div', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: {
        callback: _vm.visibilityChanged,
        once: true
      },
      expression: "{callback: visibilityChanged, once: true}"
    }],
    staticClass: "fun-fact-grid-4"
  }, _vm._l(_vm.data.funfactOne, function (item) {
    return _vm._ssrNode("<div class=\"grid-item wow move-up\">", "</div>", [_vm.isVisible ? _vm._ssrNode("<div class=\"fun-fact--one text-center\">", "</div>", [_vm._ssrNode("<h5 class=\"fun-fact__title\">" + _vm._s(item.title) + "</h5> "), _vm._ssrNode("<div class=\"fun-fact__count counter\">", "</div>", [_c('countTo', {
      attrs: {
        "startVal": _vm.startVal,
        "endVal": item.count,
        "duration": 4000
      }
    })], 1), _vm._ssrNode(" <span class=\"fun-fact__text\">" + _vm._ssrEscape(_vm._s(item.text)) + "</span>")], 2) : _vm._e()]);
  }), 0)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FunFact.vue?vue&type=template&id=20f7c3ee&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(33);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: ./data/funfact.json
var funfact = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFact.vue?vue&type=script&lang=js&


/* harmony default export */ var FunFactvue_type_script_lang_js_ = ({
  components: {
    countTo: external_vue_count_to_default.a
  },

  data() {
    return {
      data: funfact,
      startVal: 0,
      isVisible: false
    };
  },

  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }

  }
});
// CONCATENATED MODULE: ./components/FunFact.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FunFactvue_type_script_lang_js_ = (FunFactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FunFact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FunFactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "02353660"
  
)

/* harmony default export */ var FunFact = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/counters.vue?vue&type=template&id=71ea6c6b&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('Header'), _vm._ssrNode(" "), _c('Breadcrumbs', {
    attrs: {
      "items": _vm.breadcrumbNavigation,
      "breadcrumbTitle": "Counters"
    }
  }), _vm._ssrNode(" "), _c('FunFact'), _vm._ssrNode(" "), _c('FunFactTwo'), _vm._ssrNode(" "), _c('FunFactThree'), _vm._ssrNode(" "), _c('CtaThree'), _vm._ssrNode(" "), _c('Footer'), _vm._ssrNode(" "), _c('OffCanvasMobileMenu')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/element/counters.vue?vue&type=template&id=71ea6c6b&

// EXTERNAL MODULE: ./components/Header.vue + 4 modules
var Header = __webpack_require__(61);

// EXTERNAL MODULE: ./components/Breadcrumbs.vue + 4 modules
var Breadcrumbs = __webpack_require__(58);

// EXTERNAL MODULE: ./components/FunFact.vue + 4 modules
var FunFact = __webpack_require__(172);

// EXTERNAL MODULE: ./components/FunFactTwo.vue + 4 modules
var FunFactTwo = __webpack_require__(105);

// EXTERNAL MODULE: ./components/FunFactThree.vue + 4 modules
var FunFactThree = __webpack_require__(86);

// EXTERNAL MODULE: ./components/CtaThree.vue + 4 modules
var CtaThree = __webpack_require__(59);

// EXTERNAL MODULE: ./components/Footer.vue + 4 modules
var Footer = __webpack_require__(46);

// EXTERNAL MODULE: ./components/OffCanvasMobileMenu.vue + 4 modules
var OffCanvasMobileMenu = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/element/counters.vue?vue&type=script&lang=js&








/* harmony default export */ var countersvue_type_script_lang_js_ = ({
  components: {
    Header: Header["default"],
    Breadcrumbs: Breadcrumbs["default"],
    FunFact: FunFact["default"],
    FunFactTwo: FunFactTwo["default"],
    FunFactThree: FunFactThree["default"],
    CtaThree: CtaThree["default"],
    Footer: Footer["default"],
    OffCanvasMobileMenu: OffCanvasMobileMenu["default"]
  },

  head() {
    return {
      title: 'Counters'
    };
  },

  data() {
    return {
      breadcrumbNavigation: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Counters',
        active: true
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/element/counters.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_countersvue_type_script_lang_js_ = (countersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/element/counters.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_countersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1602ff1a"
  
)

/* harmony default export */ var counters = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(61).default,Breadcrumbs: __webpack_require__(58).default,FunFact: __webpack_require__(172).default,FunFactTwo: __webpack_require__(105).default,FunFactThree: __webpack_require__(86).default,CtaThree: __webpack_require__(59).default,Footer: __webpack_require__(46).default,OffCanvasMobileMenu: __webpack_require__(47).default})


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

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterAbout.vue?vue&type=template&id=563111ea&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "footer-widget"
  }, [_vm._ssrNode("<div class=\"footer-widget__logo mb-30\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.footerAbout.logo,
      "alt": "logo"
    }
  })])], 1), _vm._ssrNode(" <ul class=\"footer-widget__list\"><li>" + _vm._ssrEscape(_vm._s(_vm.footerAbout.address)) + "</li> <li><a href=\"mailto:contacto@ibsconsultores.com\" class=\"hover-style-link\">" + _vm._ssrEscape(_vm._s(_vm.footerAbout.email)) + "</a></li> <li><a href=\"tel:+52 800 777 0911\" class=\"hover-style-link text-black font-weight--bold\">" + _vm._ssrEscape(_vm._s(_vm.footerAbout.telephone)) + "</a></li> <li><a href=\"https://hasthemes.com/\" target=\"_blank\" class=\"hover-style-link text-color-primary\">" + _vm._ssrEscape(_vm._s(_vm.footerAbout.web)) + "</a></li></ul>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FooterAbout.vue?vue&type=template&id=563111ea&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterAbout.vue?vue&type=script&lang=js&
/* harmony default export */ var FooterAboutvue_type_script_lang_js_ = ({
  props: ['footerAbout']
});
// CONCATENATED MODULE: ./components/FooterAbout.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FooterAboutvue_type_script_lang_js_ = (FooterAboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FooterAbout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FooterAboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58dc60f7"
  
)

/* harmony default export */ var FooterAbout = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterWidgetLink.vue?vue&type=template&id=7db1494c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "footer-widget"
  }, [_vm._ssrNode("<h6 class=\"footer-widget__title mb-20\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h6> "), _vm._ssrNode("<ul class=\"footer-widget__list\">", "</ul>", _vm._l(_vm.navLists, function (nav) {
    return _vm._ssrNode("<li>", "</li>", [_c('n-link', {
      staticClass: "hover-style-link",
      attrs: {
        "to": nav.navUrl
      }
    }, [_vm._v("\n                " + _vm._s(nav.navTitle) + "\n            ")])], 1);
  }), 0)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FooterWidgetLink.vue?vue&type=template&id=7db1494c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterWidgetLink.vue?vue&type=script&lang=js&
/* harmony default export */ var FooterWidgetLinkvue_type_script_lang_js_ = ({
  props: ['title', 'navLists']
});
// CONCATENATED MODULE: ./components/FooterWidgetLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FooterWidgetLinkvue_type_script_lang_js_ = (FooterWidgetLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FooterWidgetLink.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FooterWidgetLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f2400c38"
  
)

/* harmony default export */ var FooterWidgetLink = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterWidgetApps.vue?vue&type=template&id=d2df3638&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "footer-widget"
  }, [_vm._ssrNode("<h6 class=\"footer-widget__title mb-30\">" + _vm._ssrEscape(_vm._s(_vm.footerApps.footerWidgetTitleFour)) + "</h6> <ul class=\"footer-widget__list\"><li><a" + _vm._ssrAttr("href", _vm.footerApps.androidUrl) + " target=\"_blank\" class=\"image_btn\"><img" + _vm._ssrAttr("src", _vm.footerApps.android) + " alt=\"thumbnail\" class=\"img-fluid\"></a></li> <li><a" + _vm._ssrAttr("href", _vm.footerApps.appleUrl) + " target=\"_blank\" class=\"image_btn\"><img" + _vm._ssrAttr("src", _vm.footerApps.apple) + " alt=\"thumbnail\" class=\"img-fluid\"></a></li></ul>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FooterWidgetApps.vue?vue&type=template&id=d2df3638&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterWidgetApps.vue?vue&type=script&lang=js&
/* harmony default export */ var FooterWidgetAppsvue_type_script_lang_js_ = ({
  props: ['footerApps']
});
// CONCATENATED MODULE: ./components/FooterWidgetApps.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FooterWidgetAppsvue_type_script_lang_js_ = (FooterWidgetAppsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FooterWidgetApps.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FooterWidgetAppsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f34dcf48"
  
)

/* harmony default export */ var FooterWidgetApps = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavMenu.vue?vue&type=template&id=89df281a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "mobile-navigation"
  }, [_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\">", "</nav>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/about"
    }
  }, [_c('span', [_vm._v("Nosotros")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/agente"
    }
  }, [_c('span', [_vm._v("Únete como agente")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/case-studies"
    }
  }, [_c('span', [_vm._v("Seguros")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/ibsapp"
    }
  }, [_c('span', [_vm._v("IBSApp")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/contact"
    }
  }, [_c('span', [_vm._v("Contacto")])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    attrs: {
      "to": "/descargables"
    }
  }, [_c('span', [_vm._v("Descargables")])])], 1), _vm._ssrNode(" "), !_vm.isLoggedIn ? _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    staticClass: "mobile-login-link",
    attrs: {
      "to": "/login"
    }
  }, [_c('span', [_vm._v("Iniciar sesión")])])], 1) : _vm._e(), _vm._ssrNode(" " + (_vm.isLoggedIn ? "<li class=\"mobile-nav-logout\"><button type=\"button\" class=\"mobile-logout-btn\"><span>Cerrar sesión</span></button></li>" : "<!---->"))], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MobileNavMenu.vue?vue&type=template&id=89df281a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavMenu.vue?vue&type=script&lang=js&
/* harmony default export */ var MobileNavMenuvue_type_script_lang_js_ = ({
  name: 'MobileNavMenu',

  data() {
    return {
      isLoggedIn: false
    };
  },

  mounted() {
    if (false) {}

    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    if (!offCanvasNav) return;
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
    const anchorLinks = offCanvasNav.querySelectorAll('a');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    function sideMenuExpand(e) {
      e.currentTarget.parentElement.classList.toggle('active');
    }

    function closeMobileMenu() {
      const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
      offcanvasMobileMenu === null || offcanvasMobileMenu === void 0 ? void 0 : offcanvasMobileMenu.classList.remove('active');
    }
  },

  methods: {
    async cerrarSesion() {
      if (this.$auth) {
        await this.$auth.signOut();
        const offcanvas = document.querySelector('#offcanvas-mobile-menu');
        if (offcanvas) offcanvas.classList.remove('active');
        this.$router.push('/login');
      }
    }

  }
});
// CONCATENATED MODULE: ./components/MobileNavMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileNavMenuvue_type_script_lang_js_ = (MobileNavMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MobileNavMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileNavMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "665f1225"
  
)

/* harmony default export */ var MobileNavMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=a9b6a700&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "footer-area-wrapper footer-blue-bg"
  }, [_vm._ssrNode("<div class=\"footer-area section-space--ptb_80\" data-v-a9b6a700>", "</div>", [_vm._ssrNode("<div class=\"container\" data-v-a9b6a700>", "</div>", [_vm._ssrNode("<div class=\"row footer-widget-wrapper\" data-v-a9b6a700>", "</div>", [_vm._ssrNode("<div class=\"col-lg-4 col-md-6 col-sm-6\" data-v-a9b6a700>", "</div>", [_c('FooterAbout', {
    attrs: {
      "footerAbout": _vm.data.footerAboutData
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-2 col-md-4 col-sm-6\" data-v-a9b6a700>", "</div>", [_c('FooterWidgetLink', {
    attrs: {
      "title": _vm.data.footerWidgetTitleOne,
      "navLists": _vm.data.navListOne
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-2 col-md-4 col-sm-6\" data-v-a9b6a700>", "</div>", [_c('FooterWidgetLink', {
    attrs: {
      "title": _vm.data.footerWidgetTitleThree,
      "navLists": _vm.data.navListThree
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-2 col-md-4 col-sm-6 footer-widget\" data-v-a9b6a700>", "</div>", [_c('FooterWidgetApps', {
    attrs: {
      "footerApps": _vm.data.footerAppData1
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-2 col-md-4 col-sm-6\" data-v-a9b6a700>", "</div>", [_c('FooterWidgetApps', {
    attrs: {
      "footerApps": _vm.data.footerAppData
    }
  })], 1)], 2)])]), _vm._ssrNode(" <div class=\"footer-copyright-area section-space--pb_30\" data-v-a9b6a700><div class=\"container\" data-v-a9b6a700><div class=\"row align-items-center\" data-v-a9b6a700><div class=\"col-md-6 text-center text-md-left\" data-v-a9b6a700><span class=\"copyright-text\" data-v-a9b6a700>" + _vm._ssrEscape(_vm._s(_vm.data.footerBottom.copyright)) + "</span></div> <div class=\"col-md-6 text-center text-md-right\" data-v-a9b6a700><ul class=\"list ht-social-networks solid-rounded-icon\" data-v-a9b6a700><li class=\"item\" data-v-a9b6a700><a" + _vm._ssrAttr("href", _vm.data.footerBottom.twitterUrl) + " target=\"_blank\" aria-label=\"Twitter\" class=\"social-link hint--bounce hint--top hint--primary\" data-v-a9b6a700><i class=\"fab fa-twitter link-icon\" data-v-a9b6a700></i></a></li> <li class=\"item\" data-v-a9b6a700><a" + _vm._ssrAttr("href", _vm.data.footerBottom.fbUrl) + " target=\"_blank\" aria-label=\"Facebook\" class=\"social-link hint--bounce hint--top hint--primary\" data-v-a9b6a700><i class=\"fab fa-facebook-f link-icon\" data-v-a9b6a700></i></a></li> <li class=\"item\" data-v-a9b6a700><a" + _vm._ssrAttr("href", _vm.data.footerBottom.instagramUrl) + " target=\"_blank\" aria-label=\"Instagram\" class=\"social-link hint--bounce hint--top hint--primary\" data-v-a9b6a700><i class=\"fab fa-instagram link-icon\" data-v-a9b6a700></i></a></li> <li class=\"item\" data-v-a9b6a700><a" + _vm._ssrAttr("href", _vm.data.footerBottom.linkedinUrl) + " target=\"_blank\" aria-label=\"Linkedin\" class=\"social-link hint--bounce hint--top hint--primary\" data-v-a9b6a700><i class=\"fab fa-linkedin link-icon\" data-v-a9b6a700></i></a></li></ul></div></div></div></div>")], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=a9b6a700&scoped=true&

// EXTERNAL MODULE: ./data/footer.json
var footer = __webpack_require__(48);

// EXTERNAL MODULE: ./components/FooterAbout.vue + 4 modules
var FooterAbout = __webpack_require__(39);

// EXTERNAL MODULE: ./components/FooterWidgetLink.vue + 4 modules
var FooterWidgetLink = __webpack_require__(40);

// EXTERNAL MODULE: ./components/FooterWidgetApps.vue + 4 modules
var FooterWidgetApps = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&




/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  components: {
    FooterAbout: FooterAbout["default"],
    FooterWidgetLink: FooterWidgetLink["default"],
    FooterWidgetApps: FooterWidgetApps["default"]
  },

  data() {
    return {
      data: footer
    };
  }

});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a9b6a700",
  "772419e6"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FooterAbout: __webpack_require__(39).default,FooterWidgetLink: __webpack_require__(40).default,FooterWidgetApps: __webpack_require__(41).default})


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=4ff1ad16&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "offcanvas-menu",
    attrs: {
      "id": "offcanvas-menu"
    }
  }, [_vm._ssrNode("<div class=\"offcanvas-menu__inner\" data-v-4ff1ad16>", "</div>", [_vm._ssrNode("<div class=\"offcanvas-menu__header\" data-v-4ff1ad16>", "</div>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-4ff1ad16>", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\" data-v-4ff1ad16>", "</div>", [_vm._ssrNode("<div class=\"col-md-6 col-8\" data-v-4ff1ad16>", "</div>", [_vm._ssrNode("<div class=\"logo\" data-v-4ff1ad16>", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/logo/logoIBS.png",
      "alt": "logo"
    }
  })])], 1)]), _vm._ssrNode(" <div class=\"col-md-6 col-4\" data-v-4ff1ad16><div class=\"text-right\" data-v-4ff1ad16><span class=\"mobile-navigation-close-icon\" data-v-4ff1ad16></span></div></div>")], 2)])]), _vm._ssrNode(" "), _c('MobileNavMenu')], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=4ff1ad16&scoped=true&

// EXTERNAL MODULE: ./components/MobileNavMenu.vue + 4 modules
var MobileNavMenu = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&

/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({
  components: {
    MobileNavMenu: MobileNavMenu["default"]
  },
  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4ff1ad16",
  "567abb26"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MobileNavMenu: __webpack_require__(44).default})


/***/ }),

/***/ 48:
/***/ (function(module) {

module.exports = JSON.parse("{\"footerAboutData\":{\"logo\":\"/images/logo/logoIBSIBYBlanco.png\",\"address\":\"Manuel González Cossio 3703 Col. Las Granjas Chihuahua, Chih, MX\",\"telephone\":\"+52 800 777 09 11\",\"email\":\"contacto@ibsconsultores.com\"},\"footerWidgetTitleThree\":\"Soporte\",\"navListThree\":[{\"navTitle\":\"Politica de privacidad \",\"navUrl\":\"/Politicas\"},{\"navTitle\":\"Contacto\",\"navUrl\":\"/contact\"},{\"navTitle\":\"Preguntas\",\"navUrl\":\"/Faq\"},{\"navTitle\":\"Nosotros\",\"navUrl\":\"/about\"},{\"navTitle\":\"Seguros\",\"navUrl\":\"/case-studies\"}],\"footerAppData1\":{\"footerWidgetTitleFour\":\"Viaja Seguro\",\"android\":\"/images/icons/mexico.png\",\"androidUrl\":\"https://voyseguromexico.com\",\"apple\":\"/images/icons/usa.png\",\"appleUrl\":\"https://voysegurousa.com.mx\"},\"footerAppData\":{\"footerWidgetTitleFour\":\"Apps Store\",\"android\":\"/images/icons/google-play.jpg\",\"androidUrl\":\"https://play.google.com/store/apps/details?id=com.juanreyes.cincotenedores&hl=es_MX\",\"apple\":\"/images/icons/apple-store.jpg\",\"appleUrl\":\"https://apps.apple.com/mx/app/ibs-consultores/id1582085062\"},\"footerBottom\":{\"copyright\":\"© 2022 IBS Consultores. All Rights Reserved. \",\"fbUrl\":\"https://www.facebook.com/ibsconsultores/\",\"twitterUrl\":\"https://twitter.com/IBSCONSULTORES\",\"instagramUrl\":\"https://www.instagram.com/ibsconsultores/\",\"linkedinUrl\":\"https://www.linkedin.com/company/ibsconsultores/mycompany/\"}}");

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a9b6a700_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a9b6a700_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a9b6a700_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a9b6a700_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_a9b6a700_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavMenu_vue_vue_type_style_index_0_id_89df281a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavMenu_vue_vue_type_style_index_0_id_89df281a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavMenu_vue_vue_type_style_index_0_id_89df281a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavMenu_vue_vue_type_style_index_0_id_89df281a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavMenu_vue_vue_type_style_index_0_id_89df281a_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffCanvasMobileMenu_vue_vue_type_style_index_0_id_4ff1ad16_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffCanvasMobileMenu_vue_vue_type_style_index_0_id_4ff1ad16_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffCanvasMobileMenu_vue_vue_type_style_index_0_id_4ff1ad16_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffCanvasMobileMenu_vue_vue_type_style_index_0_id_4ff1ad16_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OffCanvasMobileMenu_vue_vue_type_style_index_0_id_4ff1ad16_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderTop.vue?vue&type=template&id=4d1961d3&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "header-top-wrap border-bottom"
  }, [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<p class=\"text-center top-message\">", "</p>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Now Hiring:")]), _vm._ssrNode("\n                    Are you a driven and motivated 1st Line IT Support Engineer?\n                ")], 2)])])])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeaderTop.vue?vue&type=template&id=4d1961d3&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeaderTop.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f20873e6"
  
)

/* harmony default export */ var HeaderTop = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumbs.vue?vue&type=template&id=36fa8241&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "breadcrumb-area bg-cover",
    style: {
      backgroundImage: `url('/images/bg/vida.png')`
    }
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-12\"><div class=\"breadcrumb_box text-center\"><h2 class=\"breadcrumb-title\">" + _vm._ssrEscape(_vm._s(_vm.breadcrumbTitle)) + "</h2></div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Breadcrumbs.vue?vue&type=template&id=36fa8241&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumbs.vue?vue&type=script&lang=js&
/* harmony default export */ var Breadcrumbsvue_type_script_lang_js_ = ({
  props: ['items', 'breadcrumbTitle']
});
// CONCATENATED MODULE: ./components/Breadcrumbs.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbsvue_type_script_lang_js_ = (Breadcrumbsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Breadcrumbs.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5b112c15"
  
)

/* harmony default export */ var Breadcrumbs = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CtaThree.vue?vue&type=template&id=5a14b239&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "cta-image-area_one section-space--ptb_80 cta-bg-image_one",
    style: {
      backgroundImage: `url('/images/patterns/mitech-call-to-action-image-global.png')`
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-xl-8 col-lg-7\"><div class=\"cta-content md-text-center\"><h3 class=\"heading text-white\">" + _vm._s(_vm.data.ctaOne.title) + "</h3></div></div> "), _vm._ssrNode("<div class=\"col-xl-4 col-lg-5\">", "</div>", [_vm._ssrNode("<div class=\"cta-button-group--one text-center\">", "</div>", [_c('n-link', {
    staticClass: "btn btn--white btn-one",
    attrs: {
      "to": "/contact"
    }
  }, [_c('span', {
    staticClass: "btn-icon mr-2"
  }, [_c('i', {
    staticClass: "far fa-comment-alt-dots"
  })]), _vm._v(" Let's talk\n                    ")]), _vm._ssrNode(" "), _c('n-link', {
    staticClass: "btn btn--secondary btn-two",
    attrs: {
      "to": "/about"
    }
  }, [_c('span', {
    staticClass: "btn-icon mr-2"
  }, [_c('i', {
    staticClass: "far fa-info-circle"
  })]), _vm._v(" Get info\n                    ")])], 2)])], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CtaThree.vue?vue&type=template&id=5a14b239&

// EXTERNAL MODULE: ./data/cta.json
var cta = __webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CtaThree.vue?vue&type=script&lang=js&

/* harmony default export */ var CtaThreevue_type_script_lang_js_ = ({
  data() {
    return {
      data: cta
    };
  }

});
// CONCATENATED MODULE: ./components/CtaThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CtaThreevue_type_script_lang_js_ = (CtaThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CtaThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CtaThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8077810e"
  
)

/* harmony default export */ var CtaThree = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module) {

module.exports = JSON.parse("{\"ctaOne\":{\"title\":\"Compra y/o cotiza tu seguro aquí mismo <br><span> ¡ES MUY FÁCIL!</span>\",\"buttonTalk\":\"/\",\"buttonInfo\":\"/\"},\"ctaOne1\":{\"title\":\"Llena aquí tu información para tu nueva poliza de autos.<br><span> ¡ES MUY FÁCIL INGRESA AQUÍ!</span>\",\"buttonTalk\":\"/\",\"buttonInfo\":\"/\"},\"ctaTwo\":{\"title\":\"IT Security & Computing\",\"subTitle\":\"Challenges are just opportunities in disguise.\"},\"ctaFour\":{\"title\":\"Get a copy of brochure on <span> Brand New IT Tech.</span>\",\"subTitle\":\"Resources\",\"image\":\"/images/banners/managed-it-services-book-cover.png\"}}");

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=0c34076c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "header-area header-area--default"
  }, [_c('HeaderTop'), _vm._ssrNode(" "), _c('fixed-header', {
    attrs: {
      "threshold": 300
    }
  }, [_c('div', {
    staticClass: "header-bottom-wrap"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "header default-menu-style position-relative"
  }, [_c('div', {
    staticClass: "header__logo"
  }, [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/logo/logoIBS.png",
      "alt": "Brand Logo"
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "header-midle-box"
  }, [_c('div', {
    staticClass: "header-bottom-wrap d-md-block d-none"
  }, [_c('div', {
    staticClass: "header-bottom-inner"
  }, [_c('div', {
    staticClass: "header-bottom-left-wrap"
  }, [_c('div', {
    staticClass: "header__navigation d-none d-xl-block"
  }, [_c('nav', {
    staticClass: "navigation-menu primary--menu"
  }, [_c('Navigation')], 1)])])])])]), _vm._v(" "), _c('div', {
    staticClass: "header-right-box"
  }, [_c('div', {
    staticClass: "header-right-inner",
    attrs: {
      "id": "hidden-icon-wrapper"
    }
  }, [_c('div', {
    staticClass: "header-search-form default-search"
  }, [_c('form', {
    staticClass: "search-form-top"
  }, [_c('input', {
    staticClass: "search-field",
    attrs: {
      "type": "text",
      "placeholder": "Search…"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "search-submit"
  }, [_c('i', {
    staticClass: "search-btn-icon fa fa-search"
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "mobile-navigation-icon d-block d-xl-none",
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

// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=0c34076c&

// EXTERNAL MODULE: external "vue-fixed-header"
var external_vue_fixed_header_ = __webpack_require__(31);
var external_vue_fixed_header_default = /*#__PURE__*/__webpack_require__.n(external_vue_fixed_header_);

// EXTERNAL MODULE: ./components/HeaderTop.vue + 2 modules
var HeaderTop = __webpack_require__(56);

// EXTERNAL MODULE: ./components/Navigation.vue + 4 modules
var Navigation = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&



/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    HeaderTop: HeaderTop["default"],
    Navigation: Navigation["default"],
    FixedHeader: external_vue_fixed_header_default.a
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
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cf530450"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderTop: __webpack_require__(56).default,Navigation: __webpack_require__(38).default})


/***/ }),

/***/ 72:
/***/ (function(module) {

module.exports = JSON.parse("{\"funfactOne\":[{\"title\":\"Successfully work <br> with\",\"count\":650,\"text\":\"Happy Clients\"},{\"title\":\"Successfully <br> completed\",\"count\":780,\"text\":\"finished projects\"},{\"title\":\"Recruit more <br> than\",\"count\":245,\"text\":\"skilled experts\"},{\"title\":\"Blog <br> update \",\"count\":980,\"text\":\"media posts\"}],\"funfactThree\":{\"subTitle\":\"Years’ Experience in IT\",\"markText\":\"38\",\"title\":\"Learn more about our <span>Success Stories</span>\",\"funfacts\":[{\"title\":\"Successfully work <br> with\",\"count\":650,\"text\":\"Happy Clients\"},{\"title\":\"Successfully <br> completed\",\"count\":780,\"text\":\"finished projects\"},{\"title\":\"Recruit more <br> than\",\"count\":245,\"text\":\"skilled experts\"},{\"title\":\"Blog <br> update \",\"count\":980,\"text\":\"media posts\"}]}}");

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFactThree.vue?vue&type=template&id=9e72a662&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "fun-fact-wrapper section-space--ptb_100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-4 offset-lg-1\"><div class=\"modern-number-01 mr-5\"><h2 class=\"heading\"><span class=\"mark-text\">" + _vm._ssrEscape(_vm._s(_vm.data.funfactThree.markText)) + "</span>" + _vm._ssrEscape(_vm._s(_vm.data.funfactThree.subTitle)) + "</h2> <h3 class=\"heading\">" + _vm._s(_vm.data.funfactThree.title) + "</h3></div></div> "), _vm._ssrNode("<div class=\"col-lg-7\">", "</div>", [_c('div', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: {
        callback: _vm.visibilityChanged,
        once: true
      },
      expression: "{callback: visibilityChanged, once: true}"
    }],
    staticClass: "row"
  }, _vm._l(_vm.data.funfactThree.funfacts, function (item) {
    return _vm._ssrNode("<div class=\"col-md-6 col-sm-6 wow move-up\">", "</div>", [_vm.isVisible ? _vm._ssrNode("<div class=\"fun-fact--three text-center\">", "</div>", [_vm._ssrNode("<div class=\"fun-fact__count counter\">", "</div>", [_c('countTo', {
      attrs: {
        "startVal": _vm.startVal,
        "endVal": item.count,
        "duration": 4000
      }
    })], 1), _vm._ssrNode(" <h6 class=\"fun-fact__text\">" + _vm._ssrEscape(_vm._s(item.text)) + "</h6>")], 2) : _vm._e()]);
  }), 0)])], 2)])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/FunFactThree.vue?vue&type=template&id=9e72a662&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(33);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: ./data/funfact.json
var funfact = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FunFactThree.vue?vue&type=script&lang=js&


/* harmony default export */ var FunFactThreevue_type_script_lang_js_ = ({
  components: {
    countTo: external_vue_count_to_default.a
  },

  data() {
    return {
      data: funfact,
      startVal: 0,
      isVisible: false
    };
  },

  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }

  }
});
// CONCATENATED MODULE: ./components/FunFactThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FunFactThreevue_type_script_lang_js_ = (FunFactThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FunFactThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FunFactThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4a9469de"
  
)

/* harmony default export */ var FunFactThree = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=counters.js.map