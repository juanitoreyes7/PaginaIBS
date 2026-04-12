exports.ids = [121,6,11,18,26,27,29,30,33,35,40,49,50,51,58,69,73,101,102,104,114,115,117,118];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/ServiceStyleTwo.vue?vue&type=template&id=2ce26c63&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "feature-icon-wrapper section-space--ptb_100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_c('SectionTitle', {
    staticClass: "text-center section-space--mb_40",
    attrs: {
      "title": _vm.data.serviceStyleTwo.sectionTitle,
      "subTitle": _vm.data.serviceStyleTwo.sectionSubTitle
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-12\">", "</div>", [_vm._ssrNode("<div class=\"feature-list__two\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.data.services.slice(6, 12), function (service) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6 wow move-up\">", "</div>", [_c('ServiceItemStyleTwo', {
      attrs: {
        "service": service
      }
    })], 1);
  }), 0)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-12\">", "</div>", [_vm._ssrNode("<div class=\"feature-list-button-box mt-30 text-center\">", "</div>", [_c('n-link', {
    staticClass: "ht-btn ht-btn-md",
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("\n                        Talk to a consultant\n                    ")]), _vm._ssrNode(" "), _c('n-link', {
    staticClass: "ht-btn ht-btn-md ht-btn--outline",
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("\n                        Contact us now\n                    ")])], 2)])], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/ServiceStyleTwo.vue?vue&type=template&id=2ce26c63&

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(55);

// EXTERNAL MODULE: ./components/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(57);

// EXTERNAL MODULE: ./components/ServiceItemStyleTwo.vue + 4 modules
var ServiceItemStyleTwo = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/ServiceStyleTwo.vue?vue&type=script&lang=js&



/* harmony default export */ var ServiceStyleTwovue_type_script_lang_js_ = ({
  components: {
    SectionTitle: SectionTitle["default"],
    ServiceItemStyleTwo: ServiceItemStyleTwo["default"]
  },

  data() {
    return {
      data: service
    };
  }

});
// CONCATENATED MODULE: ./components/sections/ServiceStyleTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_ServiceStyleTwovue_type_script_lang_js_ = (ServiceStyleTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/ServiceStyleTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_ServiceStyleTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f54b83cc"
  
)

/* harmony default export */ var ServiceStyleTwo = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(57).default,ServiceItemStyleTwo: __webpack_require__(79).default})


/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VideoPupupOne.vue?vue&type=template&id=55605427&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "tab-history-image video-popup mt-30"
  }, [_c('CoolLightBox', {
    attrs: {
      "items": _vm.items,
      "index": _vm.index
    },
    on: {
      "close": function ($event) {
        _vm.index = null;
      }
    }
  }), _vm._ssrNode(" " + _vm._ssrList(_vm.items, function (image, imageIndex) {
    return "<a href=\"javascript:void(0)\" class=\"video-link\"><div class=\"single-popup-wrap\"><img src=\"/images/bg/home-processing-video-intro-slider-slide-01-image-01-570x350.jpg\" alt=\"image\" class=\"img-fluid\"> <div class=\"ht-popup-video video-button\"><div class=\"video-mark\"><div class=\"wave-pulse wave-pulse-1\"></div> <div class=\"wave-pulse wave-pulse-2\"></div></div> <div class=\"video-button__two\"><div class=\"video-play\"><span class=\"video-play-icon\"></span></div></div></div></div></a>";
  }))], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/VideoPupupOne.vue?vue&type=template&id=55605427&

// EXTERNAL MODULE: external "vue-cool-lightbox"
var external_vue_cool_lightbox_ = __webpack_require__(32);
var external_vue_cool_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_vue_cool_lightbox_);

// EXTERNAL MODULE: ./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css
var vue_cool_lightbox_min = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/VideoPupupOne.vue?vue&type=script&lang=js&


/* harmony default export */ var VideoPupupOnevue_type_script_lang_js_ = ({
  components: {
    CoolLightBox: external_vue_cool_lightbox_default.a
  },

  data() {
    return {
      items: [{
        src: "https://www.youtube.com/watch?v=4RPqGXQFQ_s",
        autoplay: true
      }],
      index: null
    };
  }

});
// CONCATENATED MODULE: ./components/VideoPupupOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_VideoPupupOnevue_type_script_lang_js_ = (VideoPupupOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/VideoPupupOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VideoPupupOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5b21ddc0"
  
)

/* harmony default export */ var VideoPupupOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItemStyleThree.vue?vue&type=template&id=f7845cb2&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('n-link', {
    staticClass: "ht-large-box-images style-04",
    attrs: {
      "to": `/service/${_vm.service.slug}`
    }
  }, [_c('div', {
    staticClass: "large-image-box"
  }, [_c('div', {
    staticClass: "box-image"
  }, [_c('div', {
    staticClass: "default-image"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.service.image,
      "alt": "image"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('h5', {
    staticClass: "heading"
  }, [_vm._v(_vm._s(_vm.service.heading))]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "box-images-arrow"
  }, [_c('span', {
    staticClass: "button-text"
  }, [_vm._v("Discover now")]), _vm._v(" "), _c('i', {
    staticClass: "far fa-long-arrow-right"
  })])])])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ServiceItemStyleThree.vue?vue&type=template&id=f7845cb2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItemStyleThree.vue?vue&type=script&lang=js&
/* harmony default export */ var ServiceItemStyleThreevue_type_script_lang_js_ = ({
  props: ['service']
});
// CONCATENATED MODULE: ./components/ServiceItemStyleThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceItemStyleThreevue_type_script_lang_js_ = (ServiceItemStyleThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceItemStyleThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceItemStyleThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "023ccf0c"
  
)

/* harmony default export */ var ServiceItemStyleThree = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TeamOne.vue?vue&type=template&id=ebef107a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "team-member-wrapper section-space--pt_100 section-space--pb_40"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-8 ht-team-member-style-one\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.data.teamMembers.slice(0, 1), function (teamMember) {
    return _vm._ssrNode("<div class=\"col-lg-6 col-md-6 wow move-up\">", "</div>", [_c('TeamMember', {
      attrs: {
        "teamMember": teamMember
      }
    })], 1);
  }), 0)])]), _vm._ssrNode(" <div class=\"col-lg-4\"><div class=\"section-title section-space--mb_60\"><h3 class=\"heading\">" + _vm._s(_vm.data.sectionTitle) + "</h3> <p class=\"text mt-30\">" + _vm._ssrEscape(_vm._s(_vm.data.sectionSubTitle)) + "</p></div></div>")], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/TeamOne.vue?vue&type=template&id=ebef107a&

// EXTERNAL MODULE: ./data/team.json
var team = __webpack_require__(78);

// EXTERNAL MODULE: ./components/TeamMember.vue + 4 modules
var TeamMember = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TeamOne.vue?vue&type=script&lang=js&


/* harmony default export */ var TeamOnevue_type_script_lang_js_ = ({
  components: {
    TeamMember: TeamMember["default"]
  },

  data() {
    return {
      data: team
    };
  }

});
// CONCATENATED MODULE: ./components/sections/TeamOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_TeamOnevue_type_script_lang_js_ = (TeamOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/TeamOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_TeamOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "72104db3"
  
)

/* harmony default export */ var TeamOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TeamMember: __webpack_require__(71).default})


/***/ }),

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

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudiesSection_vue_vue_type_style_index_0_id_88070b8e_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudiesSection_vue_vue_type_style_index_0_id_88070b8e_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudiesSection_vue_vue_type_style_index_0_id_88070b8e_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudiesSection_vue_vue_type_style_index_0_id_88070b8e_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CaseStudiesSection_vue_vue_type_style_index_0_id_88070b8e_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/CaseStudiesSection.vue?vue&type=template&id=88070b8e&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "projects-wrapper projectinfotechno-bg section-space--ptb_100",
    style: {
      backgroundImage: `url('/images/patterns/mitech-home-infotechno-case-study-section-bg.png')`
    }
  }, [_vm._ssrNode("<div class=\"container\" data-v-88070b8e>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-88070b8e>", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\" data-v-88070b8e>", "</div>", [_c('SectionTitle', {
    staticClass: "text-center section-space--mb_40",
    attrs: {
      "title": _vm.data.sectionTitle,
      "subTitle": _vm.data.sectionSubTitle
    }
  })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-88070b8e>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-88070b8e>", "</div>", [_vm._ssrNode("<div class=\"projects-wrap\" data-v-88070b8e>", "</div>", [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.data.projects, function (project) {
    return _c('div', {
      key: project.id,
      staticClass: "swiper-slide"
    }, [_c('CaseStudiesItem', {
      attrs: {
        "project": project
      }
    })], 1);
  }), 0), _vm._ssrNode(" <div class=\"swiper-pagination swiper-pagination-project mt_20\" data-v-88070b8e></div> <div class=\"swiper-button-prev\" data-v-88070b8e></div> <div class=\"swiper-button-next\" data-v-88070b8e></div>")], 2), _vm._ssrNode(" <div class=\"newsletter-modern section-space--mt_40\" data-v-88070b8e><div class=\"newsletter-modern-content\" data-v-88070b8e><span class=\"newsletter-icon\" data-v-88070b8e><i class=\"fas fa-envelope\" data-v-88070b8e></i></span> <span class=\"newsletter-title\" data-v-88070b8e>Suscríbete a nuestro boletín</span> <a href=\"http://eepurl.com/h9mhRj\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"newsletter-btn-small\" data-v-88070b8e>\n                            Suscribirse\n                            <i class=\"fas fa-arrow-right\" data-v-88070b8e></i></a></div></div>")], 2)])], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/CaseStudiesSection.vue?vue&type=template&id=88070b8e&scoped=true&

// EXTERNAL MODULE: ./components/SectionTitle.vue + 4 modules
var SectionTitle = __webpack_require__(57);

// EXTERNAL MODULE: ./components/CaseStudiesItem.vue + 4 modules
var CaseStudiesItem = __webpack_require__(73);

// EXTERNAL MODULE: ./data/caseStidies.json
var caseStidies = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/CaseStudiesSection.vue?vue&type=script&lang=js&



/* harmony default export */ var CaseStudiesSectionvue_type_script_lang_js_ = ({
  components: {
    SectionTitle: SectionTitle["default"],
    CaseStudiesItem: CaseStudiesItem["default"]
  },

  data() {
    return {
      data: caseStidies,
      swiperOption: {
        loop: true,
        speed: 900,
        autoplay: 1000,
        spaceBetween: 20,
        autoplay: {
          delay: 2000 // en milisegundos

        },
        speed: 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: '.swiper-pagination-project',
          type: 'bullets',
          clickable: true
        },
        // Responsive breakpoints
        breakpoints: {
          1200: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          575: {
            slidesPerView: 1
          }
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/sections/CaseStudiesSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_CaseStudiesSectionvue_type_script_lang_js_ = (CaseStudiesSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/CaseStudiesSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(119)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_CaseStudiesSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "88070b8e",
  "799570d8"
  
)

/* harmony default export */ var CaseStudiesSection = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTitle: __webpack_require__(57).default,CaseStudiesItem: __webpack_require__(73).default})


/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroAppointment.vue?vue&type=template&id=459724ce&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "appointment-hero-wrapper bg-cover section-space--ptb_120",
    style: {
      backgroundImage: `url(${_vm.data.heroAppointment.bgImg})`
    }
  }, [_c('CoolLightBox', {
    attrs: {
      "items": _vm.items,
      "index": _vm.index
    },
    on: {
      "close": function ($event) {
        _vm.index = null;
      }
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6 col-md-6\"><div class=\"appointment-hero-wrap wow move-up\"><div class=\"appointment-hero-text\"><h6 class=\"text-white\">" + _vm._ssrEscape(_vm._s(_vm.data.heroAppointment.subTitle)) + "</h6> <h1 class=\"font-weight--reguler text-white mb-30\">" + _vm._s(_vm.data.heroAppointment.title) + "</h1> <div class=\"hero-button\"><div class=\"video-popup infotech-video-box\">" + _vm._ssrList(_vm.items, function (image, imageIndex) {
    return "<a href=\"javascript:void(0)\" class=\"single-popup-wrap video-link\"><div class=\"video-content\"><div class=\"ht-popup-video video-button\"><div class=\"video-mark\"><div class=\"wave-pulse wave-pulse-1\"></div> <div class=\"wave-pulse wave-pulse-2\"></div></div> <div class=\"video-button__two\"><div class=\"video-play\"><span class=\"video-play-icon\"></span></div></div></div> <div class=\"video-text\">" + _vm._ssrEscape("\n                                            " + _vm._s(_vm.data.heroAppointment.videoText) + "\n                                        ") + "</div></div></a>";
  }) + "</div></div></div></div></div> "), _vm._ssrNode("<div class=\"col-lg-5 mr-auto ml-auto col-md-6\">", "</div>", [_c('AppointmentForm')], 1)], 2)])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeroAppointment.vue?vue&type=template&id=459724ce&

// EXTERNAL MODULE: ./data/hero.json
var hero = __webpack_require__(70);

// EXTERNAL MODULE: external "vue-cool-lightbox"
var external_vue_cool_lightbox_ = __webpack_require__(32);
var external_vue_cool_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_vue_cool_lightbox_);

// EXTERNAL MODULE: ./node_modules/vue-cool-lightbox/dist/vue-cool-lightbox.min.css
var vue_cool_lightbox_min = __webpack_require__(64);

// EXTERNAL MODULE: ./components/AppointmentForm.vue + 2 modules
var AppointmentForm = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroAppointment.vue?vue&type=script&lang=js&




/* harmony default export */ var HeroAppointmentvue_type_script_lang_js_ = ({
  components: {
    AppointmentForm: AppointmentForm["default"],
    CoolLightBox: external_vue_cool_lightbox_default.a
  },

  data() {
    return {
      data: hero,
      items: [{
        src: "https://www.youtube.com/watch?v=4RPqGXQFQ_s",
        autoplay: true
      }],
      index: null
    };
  }

});
// CONCATENATED MODULE: ./components/HeroAppointment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroAppointmentvue_type_script_lang_js_ = (HeroAppointmentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeroAppointment.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroAppointmentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "117b64ec"
  
)

/* harmony default export */ var HeroAppointment = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppointmentForm: __webpack_require__(85).default})


/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TabSection.vue?vue&type=template&id=309132ea&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "tabs-wrapper bg-gray section-space--ptb_100"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-lg-12\"><div class=\"section-title-wrapper text-center section-space--mb_60 wow move-up\"><h6 class=\"section-sub-title mb-20\">discover our company</h6> <h3 class=\"section-title\">We’ve been thriving in<span class=\"text-color-primary\"> 38 years</span></h3></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-12 ht-tab-wrap\">", "</div>", [_vm._ssrNode("<div class=\"text-center\"><ul role=\"tablist\" class=\"nav justify-content-center ht-tab-menu ht-tab-menu_two\"><li class=\"tab__item nav-item\"><a href=\"#tab_mission\"" + _vm._ssrClass("nav-link", {
    active: _vm.isActive('tab_mission')
  }) + ">Our mission</a></li> <li class=\"tab__item nav-item\"><a href=\"#tab_services\"" + _vm._ssrClass("nav-link", {
    active: _vm.isActive('tab_services')
  }) + ">Our services</a></li> <li class=\"tab__item nav-item\"><a href=\"#tab_partners\"" + _vm._ssrClass("nav-link", {
    active: _vm.isActive('tab_partners')
  }) + ">Technology partners</a></li> <li class=\"tab__item nav-item\"><a href=\"#tab_awards\"" + _vm._ssrClass("nav-link", {
    active: _vm.isActive('tab_awards')
  }) + ">Our awards</a></li></ul></div> "), _vm._ssrNode("<div class=\"tab-content ht-tab__content\">", "</div>", [_vm._ssrNode("<div id=\"tab_mission\"" + _vm._ssrClass("tab-pane fade", {
    'active show': _vm.isActive('tab_mission')
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"tab-history-wrap section-space--mt_40\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-6\">", "</div>", [_c('VideoPupupOne')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-lg-5 offset-lg-1\">", "</div>", [_vm._ssrNode("<div class=\"tab-content-inner mt-30\">", "</div>", [_vm._ssrNode("<div class=\"text mb-30\">We’re available for 8 hours a day! <br>Contact to require a detailed analysis and assessment of your plan.\n                                        </div> <ul class=\"check-list section-space--mb_40\"><li class=\"list-item\">IT Consultancy </li> <li class=\"list-item\">IT Design </li> <li class=\"list-item\">Desktop Computing </li> <li class=\"list-item\">Software Engineering </li></ul> "), _vm._ssrNode("<div class=\"tab-button\">", "</div>", [_c('n-link', {
    staticClass: "btn-text",
    attrs: {
      "to": "/"
    }
  }, [_c('span', {
    staticClass: "button-text"
  }, [_vm._v("Let's get started "), _c('i', {
    staticClass: "far fa-long-arrow-right"
  })])])], 1)], 2)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"tab_services\"" + _vm._ssrClass("tab-pane fade", {
    'active show': _vm.isActive('tab_services')
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"tab-history-wrap section-space--mt_60\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", _vm._l(_vm.data.services.slice(14, 17), function (service) {
    return _vm._ssrNode("<div class=\"col-lg-4 col-md-6\">", "</div>", [_c('ServiceItemStyleThree', {
      attrs: {
        "service": service
      }
    })], 1);
  }), 0)])]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"tab_partners\"" + _vm._ssrClass("tab-pane fade", {
    'active show': _vm.isActive('tab_partners')
  }) + ">", "</div>", [_vm._ssrNode("<div class=\"tab-history-wrap section-space--mt_60 brand-logo-slider__one\">", "</div>", [_vm._ssrNode("<div class=\"modern-grid--6\">", "</div>", [_vm._ssrNode("<div class=\"brand-logo brand-logo--slider\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "brand-logo__image"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-01.png",
      "alt": "image"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "brand-logo__image-hover"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-01-hover.png",
      "alt": "image"
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brand-logo brand-logo--slider\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "brand-logo__image"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-02.png",
      "alt": "image"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "brand-logo__image-hover"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-02-hover.png",
      "alt": "image"
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brand-logo brand-logo--slider\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "brand-logo__image"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-03.png",
      "alt": "image"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "brand-logo__image-hover"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-03-hover.png",
      "alt": "image"
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brand-logo brand-logo--slider\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "brand-logo__image"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-04.png",
      "alt": "image"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "brand-logo__image-hover"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-04-hover.png",
      "alt": "image"
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brand-logo brand-logo--slider\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "brand-logo__image"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-05.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "brand-logo__image-hover"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-05-hover.png",
      "alt": "image"
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brand-logo brand-logo--slider\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "brand-logo__image"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-06.png",
      "alt": "image"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "brand-logo__image-hover"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-06-hover.png",
      "alt": "image"
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brand-logo brand-logo--slider\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "brand-logo__image"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-07.png",
      "alt": "image"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "brand-logo__image-hover"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-07-hover.png",
      "alt": "image"
    }
  })])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"brand-logo brand-logo--slider\">", "</div>", [_c('n-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('div', {
    staticClass: "brand-logo__image"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-08.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "brand-logo__image-hover"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": "/images/brand/client-logo-08-hover.png",
      "alt": "image"
    }
  })])])], 1)], 2)])]), _vm._ssrNode(" <div id=\"tab_awards\"" + _vm._ssrClass("tab-pane fade", {
    'active show': _vm.isActive('tab_awards')
  }) + "><div class=\"tab-history-wrap section-space--mt_20\"><div class=\"row\"><div class=\"col-lg-6\"><div class=\"ht-box-images style-08 move-up animate\"><div class=\"image-box-wrap\"><div class=\"box-image\"><div class=\"image\"><img src=\"/images/award/mitech-company-award-01-161x110.jpg\" alt=\"image\"></div></div> <div class=\"content\"><h6 class=\"heading\"> Top Training Companies 2016 </h6> <div class=\"text\">More than 40 years ago, our company’s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div></div></div></div></div> <div class=\"col-lg-6\"><div class=\"ht-box-images style-08 move-up animate\"><div class=\"image-box-wrap\"><div class=\"box-image\"><div class=\"image\"><img src=\"/images/award/mitech-company-award-02-161x116.jpg\" alt=\"image\"></div></div> <div class=\"content\"><h6 class=\"heading\">CIO Big Data 100 </h6> <div class=\"text\">More than 40 years ago, our company’s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div></div></div></div></div> <div class=\"col-lg-6\"><div class=\"ht-box-images style-08 move-up animate\"><div class=\"image-box-wrap\"><div class=\"box-image\"><div class=\"image\"><img src=\"/images/award/mitech-company-award-03-161x112.jpg\" alt=\"image\"></div></div> <div class=\"content\"><h6 class=\"heading\">Top 20 Sales Training Companies 2015 </h6> <div class=\"text\">More than 40 years ago, our company’s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div></div></div></div></div> <div class=\"col-lg-6\"><div class=\"ht-box-images style-08 move-up animate\"><div class=\"image-box-wrap\"><div class=\"box-image\"><div class=\"image\"><img src=\"/images/award/mitech-company-award-04-161x109.jpg\" alt=\"image\"></div></div> <div class=\"content\"><h6 class=\"heading\">Pharma Tech Outlook </h6> <div class=\"text\">More than 40 years ago, our company’s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div></div></div></div></div></div></div></div>")], 2)], 2)])], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/TabSection.vue?vue&type=template&id=309132ea&

// EXTERNAL MODULE: ./components/VideoPupupOne.vue + 4 modules
var VideoPupupOne = __webpack_require__(102);

// EXTERNAL MODULE: ./components/ServiceItemStyleThree.vue + 4 modules
var ServiceItemStyleThree = __webpack_require__(103);

// EXTERNAL MODULE: ./data/service.json
var service = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TabSection.vue?vue&type=script&lang=js&



/* harmony default export */ var TabSectionvue_type_script_lang_js_ = ({
  components: {
    VideoPupupOne: VideoPupupOne["default"],
    ServiceItemStyleThree: ServiceItemStyleThree["default"]
  },

  data() {
    return {
      data: service,
      activeItem: 'tab_mission'
    };
  },

  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },

    setActive(menuItem) {
      this.activeItem = menuItem;
    }

  }
});
// CONCATENATED MODULE: ./components/sections/TabSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_TabSectionvue_type_script_lang_js_ = (TabSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/TabSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_TabSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "803c6bd4"
  
)

/* harmony default export */ var TabSection = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VideoPupupOne: __webpack_require__(102).default,ServiceItemStyleThree: __webpack_require__(103).default})


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/ContactUs.vue?vue&type=template&id=4e3d3a4c&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "contact-us-area appointment-contact-bg section-space--ptb_100",
    style: {
      backgroundImage: `url('/images/bg/home-appointment-contact-bg-image.png')`
    }
  }, [_vm._ssrNode("<div class=\"container\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"contact-title section-space--mb_50\"><h3 class=\"mb-20\">Need a hand?</h3> <p class=\"sub-title\">Reach out to the world’s most reliable IT services.</p></div></div></div> <div class=\"row\"><div class=\"col-lg-6\"><div class=\"contact-form-wrap\"><form id=\"contact-form\"><div class=\"contact-form__two\"><div class=\"contact-input\"><div class=\"contact-inner\"><input name=\"con_name\" type=\"text\" placeholder=\"Name *\"></div> <div class=\"contact-inner\"><input name=\"con_email\" type=\"email\" placeholder=\"Email *\"></div></div> <div class=\"contact-select\"><div class=\"form-item contact-inner\"><span class=\"inquiry\"><select name=\"inquiry\" class=\"select-item\"><option value=\"Your inquiry about\">Your inquiry about</option> <option value=\"General Information Request\">General Information Request</option> <option value=\"Partner Relations\">Partner Relations</option> <option value=\"Careers\">Careers</option> <option value=\"Software Licencing\">Software Licencing</option></select></span></div></div> <div class=\"contact-inner contact-message\"><textarea name=\"con_message\" placeholder=\"Please describe what you need.\"></textarea></div> <div class=\"comment-submit-btn\"><button type=\"submit\" class=\"ht-btn ht-btn-md\">Get a free consultation</button> <p class=\"form-messege\"></p></div></div></form></div></div> <div class=\"col-lg-5 ml-auto\"><div class=\"contact-info-three text-left\"><h6 class=\"heading font-weight--reguler\">Reach out now!</h6> <h3 class=\"call-us\"><a href=\"tel:(+00)123567990\">(+00) 123 567990</a></h3> <div class=\"text\">Start the collaboration with us while figuring out the best solution based on your needs.</div> <div class=\"location-button mt-20\"><button class=\"location-text-button\"><span class=\"button-icon\"></span> <span class=\"button-text\">View on Google map</span></button></div></div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/ContactUs.vue?vue&type=template&id=4e3d3a4c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/ContactUs.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "34f2fac8"
  
)

/* harmony default export */ var ContactUs = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Appointment.vue?vue&type=template&id=fa0a7390&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderAppointment'), _vm._ssrNode(" "), _c('HeroAppointment'), _vm._ssrNode(" "), _c('ServiceStyleTwo'), _vm._ssrNode(" "), _c('TabSection'), _vm._ssrNode(" "), _c('TeamOne'), _vm._ssrNode(" "), _c('CtaOne'), _vm._ssrNode(" "), _c('CaseStudiesSection'), _vm._ssrNode(" "), _c('FunFactTwo'), _vm._ssrNode(" "), _c('ContactUs'), _vm._ssrNode(" "), _c('Footer'), _vm._ssrNode(" "), _c('OffCanvasMobileMenu')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/Appointment.vue?vue&type=template&id=fa0a7390&

// EXTERNAL MODULE: ./components/HeaderAppointment.vue + 4 modules
var HeaderAppointment = __webpack_require__(53);

// EXTERNAL MODULE: ./components/HeroAppointment.vue + 4 modules
var HeroAppointment = __webpack_require__(160);

// EXTERNAL MODULE: ./components/sections/ServiceStyleTwo.vue + 4 modules
var ServiceStyleTwo = __webpack_require__(101);

// EXTERNAL MODULE: ./components/sections/TabSection.vue + 4 modules
var TabSection = __webpack_require__(207);

// EXTERNAL MODULE: ./components/sections/TeamOne.vue + 4 modules
var TeamOne = __webpack_require__(104);

// EXTERNAL MODULE: ./components/CtaOne.vue + 4 modules
var CtaOne = __webpack_require__(68);

// EXTERNAL MODULE: ./components/sections/CaseStudiesSection.vue + 4 modules
var CaseStudiesSection = __webpack_require__(130);

// EXTERNAL MODULE: ./components/FunFactTwo.vue + 4 modules
var FunFactTwo = __webpack_require__(105);

// EXTERNAL MODULE: ./components/sections/ContactUs.vue + 2 modules
var ContactUs = __webpack_require__(229);

// EXTERNAL MODULE: ./components/Footer.vue + 4 modules
var Footer = __webpack_require__(46);

// EXTERNAL MODULE: ./components/OffCanvasMobileMenu.vue + 4 modules
var OffCanvasMobileMenu = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Appointment.vue?vue&type=script&lang=js&











/* harmony default export */ var Appointmentvue_type_script_lang_js_ = ({
  components: {
    HeaderAppointment: HeaderAppointment["default"],
    HeroAppointment: HeroAppointment["default"],
    ServiceStyleTwo: ServiceStyleTwo["default"],
    TabSection: TabSection["default"],
    TeamOne: TeamOne["default"],
    CtaOne: CtaOne["default"],
    CaseStudiesSection: CaseStudiesSection["default"],
    FunFactTwo: FunFactTwo["default"],
    ContactUs: ContactUs["default"],
    Footer: Footer["default"],
    OffCanvasMobileMenu: OffCanvasMobileMenu["default"]
  },

  head() {
    return {
      title: ''
    };
  }

});
// CONCATENATED MODULE: ./pages/Appointment.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Appointmentvue_type_script_lang_js_ = (Appointmentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Appointment.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Appointmentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2673f8c6"
  
)

/* harmony default export */ var Appointment = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderAppointment: __webpack_require__(53).default,HeroAppointment: __webpack_require__(160).default,CtaOne: __webpack_require__(68).default,FunFactTwo: __webpack_require__(105).default,Footer: __webpack_require__(46).default,OffCanvasMobileMenu: __webpack_require__(47).default})


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

/***/ 52:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderAppointment.vue?vue&type=template&id=ffeca162&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "header-area header-sticky"
  }, [_vm._ssrNode("<div class=\"header-top-bar bg-white d-none d-lg-block\" data-v-ffeca162>", "</div>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-ffeca162>", "</div>", [_vm._ssrNode("<div class=\"row align-items-center\" data-v-ffeca162>", "</div>", [_vm._ssrNode("<div class=\"col-lg-12\" data-v-ffeca162>", "</div>", [_vm._ssrNode("<div class=\"header-top-content\" data-v-ffeca162>", "</div>", [_vm._ssrNode("<div class=\"header-top-left\" data-v-ffeca162>", "</div>", [_vm._ssrNode("<div class=\"company-logo-wrapper\" data-v-ffeca162>", "</div>", [_c('n-link', {
    staticClass: "company-logo-link",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "company-logo-img",
    attrs: {
      "src": "/images/logo/logoIBSNegro.png",
      "alt": "IBS Consultores"
    }
  })])], 1)]), _vm._ssrNode(" <div class=\"header-top-center\" data-v-ffeca162><div class=\"contact-info-grid\" data-v-ffeca162><div class=\"contact-item\" data-v-ffeca162><i class=\"fas fa-clock contact-icon\" data-v-ffeca162></i> <div class=\"contact-text\" data-v-ffeca162><span class=\"contact-label\" data-v-ffeca162>Lunes a Viernes</span> <span class=\"contact-value\" data-v-ffeca162>8:30AM - 6:00PM</span> <span class=\"contact-label\" data-v-ffeca162>Sábados</span> <span class=\"contact-value\" data-v-ffeca162>9:00AM - 1:00PM</span></div></div> <div class=\"contact-item\" data-v-ffeca162><i class=\"fab fa-whatsapp contact-icon whatsapp-icon\" data-v-ffeca162></i> <div class=\"contact-text\" data-v-ffeca162><span class=\"contact-label\" data-v-ffeca162>Whatsapp 24/7</span> <a href=\"https://wa.me/526142408116\" target=\"_blank\" class=\"contact-value link\" data-v-ffeca162>+52 614 240 8116</a></div></div> <div class=\"contact-item\" data-v-ffeca162><i class=\"fas fa-phone contact-icon\" data-v-ffeca162></i> <div class=\"contact-text\" data-v-ffeca162><a href=\"tel:+528007770911\" class=\"contact-value link\" data-v-ffeca162>+52 800 777 09 11</a> <a href=\"mailto:contacto@ibsconsultores.com\" class=\"contact-value link\" data-v-ffeca162>contacto@ibsconsultores.com</a></div></div> <div class=\"contact-item\" data-v-ffeca162><i class=\"fas fa-map-marker-alt contact-icon\" data-v-ffeca162></i> <div class=\"contact-text\" data-v-ffeca162><a href=\"https://www.google.com/maps/search/?api=1&query=Manuel+González+Cossio+3703+Col.+Las+granjas,+Chihuahua,+Chih\" target=\"_blank\" class=\"contact-value link address-link\" data-v-ffeca162>Manuel González Cossio 3703<br data-v-ffeca162>\n                                        Col. Las granjas, Chihuahua, Chih</a></div></div></div></div> <div class=\"header-top-right\" data-v-ffeca162><div class=\"social-networks-compact\" data-v-ffeca162><a href=\"https://twitter.com/IBSCONSULTORES\" target=\"_blank\" aria-label=\"Twitter\" class=\"social-link\" data-v-ffeca162><i class=\"fab fa-twitter\" data-v-ffeca162></i></a> <a href=\"https://www.facebook.com/ibsconsultores/\" target=\"_blank\" aria-label=\"Facebook\" class=\"social-link\" data-v-ffeca162><i class=\"fab fa-facebook-f\" data-v-ffeca162></i></a> <a href=\"https://www.instagram.com/ibsconsultores/\" target=\"_blank\" aria-label=\"Instagram\" class=\"social-link\" data-v-ffeca162><i class=\"fab fa-instagram\" data-v-ffeca162></i></a> <a href=\"https://www.linkedin.com/company/ibsconsultores/mycompany/\" target=\"_blank\" aria-label=\"LinkedIn\" class=\"social-link\" data-v-ffeca162><i class=\"fab fa-linkedin\" data-v-ffeca162></i></a></div></div>")], 2)])])])]), _vm._ssrNode(" "), _c('fixed-header', {
    attrs: {
      "threshold": 300
    }
  }, [_c('div', {
    staticClass: "header-bottom-wrap navigation-blue-bar"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "header-bottom-inner"
  }, [_c('div', {
    staticClass: "header__logo-mobile d-lg-none"
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
    staticClass: "header__navigation header__navigation--with-logout"
  }, [_c('nav', {
    staticClass: "navigation-menu navigation-menu--text_white"
  }, [!_vm.isLoggedIn ? _c('Navigation') : _c('ul', {
    staticClass: "navigation-single"
  }, [_c('li', [_c('n-link', {
    attrs: {
      "to": "/portafolio-polizas"
    }
  }, [_c('span', [_vm._v("Mis pólizas")])])], 1), _vm._v(" "), _c('li', [_c('n-link', {
    attrs: {
      "to": "/ibsapp"
    }
  }, [_c('span', [_vm._v("IBSApp")])])], 1), _vm._v(" "), _c('li', [_c('n-link', {
    attrs: {
      "to": "/agente"
    }
  }, [_c('span', [_vm._v("Únete como agente")])])], 1), _vm._v(" "), _c('li', [_c('n-link', {
    attrs: {
      "to": "/contact"
    }
  }, [_c('span', [_vm._v("Contacto")])])], 1)])], 1), _vm._v(" "), !_vm.isLoggedIn ? _c('n-link', {
    staticClass: "header-login-btn",
    attrs: {
      "to": "/login"
    }
  }, [_c('i', {
    staticClass: "fas fa-sign-in-alt"
  }), _vm._v(" "), _c('span', [_vm._v("Iniciar sesión")])]) : _vm._e(), _vm._v(" "), _vm.isLoggedIn ? _c('button', {
    staticClass: "header-logout-btn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.cerrarSesion
    }
  }, [_c('i', {
    staticClass: "fas fa-sign-out-alt"
  }), _vm._v(" "), _c('span', [_vm._v("Cerrar sesión")])]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "mobile-navigation-icon d-block d-xl-none",
    attrs: {
      "id": "mobile-menu-trigger"
    },
    on: {
      "click": function ($event) {
        return _vm.mobiletoggleClass('addClass', 'active');
      }
    }
  }, [_c('i')])])])])])])])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeaderAppointment.vue?vue&type=template&id=ffeca162&scoped=true&

// EXTERNAL MODULE: external "vue-fixed-header"
var external_vue_fixed_header_ = __webpack_require__(31);
var external_vue_fixed_header_default = /*#__PURE__*/__webpack_require__.n(external_vue_fixed_header_);

// EXTERNAL MODULE: ./components/Navigation.vue + 4 modules
var Navigation = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderAppointment.vue?vue&type=script&lang=js&


/* harmony default export */ var HeaderAppointmentvue_type_script_lang_js_ = ({
  components: {
    FixedHeader: external_vue_fixed_header_default.a,
    Navigation: Navigation["default"]
  },

  data() {
    return {
      isLoggedIn: false
    };
  },

  mounted() {
    if (false) {}
  },

  methods: {
    async cerrarSesion() {
      if (this.$auth) {
        await this.$auth.signOut();
        this.$router.push('/login');
      }
    },

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
// CONCATENATED MODULE: ./components/HeaderAppointment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderAppointmentvue_type_script_lang_js_ = (HeaderAppointmentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeaderAppointment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderAppointmentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ffeca162",
  "4a468b57"
  
)

/* harmony default export */ var HeaderAppointment = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(38).default})


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderAppointment_vue_vue_type_style_index_0_id_ffeca162_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderAppointment_vue_vue_type_style_index_0_id_ffeca162_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderAppointment_vue_vue_type_style_index_0_id_ffeca162_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderAppointment_vue_vue_type_style_index_0_id_ffeca162_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderAppointment_vue_vue_type_style_index_0_id_ffeca162_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module) {

module.exports = JSON.parse("{\"serviceOne\":{\"sectionTitle\":\"Contrata hoy mismo</br><span> tu seguro.</span>\",\"sectionSubTitle\":\"Cotizaciones\",\"underHeading\":\"Challenges are just opportunities in disguise. \"},\"serviceStyleTwo\":{\"sectionTitle\":\"Services We Deliver<br> we provide <span> truly prominent IT solutions.</span>\",\"sectionSubTitle\":\"Industries we Serve\"},\"serviceFour\":{\"sectionTitle\":\"For your very specific industry, <br> we have <span> highly-tailored IT solutions.</span>\",\"sectionSubTitle\":\"our services\",\"underHeading\":\"Challenges are just opportunities in disguise. \"},\"fourSteps\":{\"sectionTitle\":\"How it helps <span>your <br> business succeed</span>\",\"sectionSubTitle\":\"IBS CONSULTORES \",\"heading\":\"<mark>IBS</mark> Consultores\",\"steps\":[{\"count\":1,\"heading\":\"01. Paso\",\"text\":\"We meet customers in set place to discuss the details about needs and demands before proposing a plan.\"},{\"count\":2,\"heading\":\"02. Paso\",\"text\":\"Our experts come up with all kinds of ideas and initiatives for delivering the best solutions for IT services chosen.\"},{\"count\":3,\"heading\":\"03. Paso\",\"text\":\"After agreeing on the ideas and plans, we will conduct as scheduled and give comments on the results & adaptations.\"}]},\"featureSectionTitle\":\"How we claim to <span> excel?</span>\",\"featureSectionSubTitle\":\"Hire us, why not?\",\"itSolutionTitle\":\"Contrata hoy mismo</br><span> tu seguro.</span>\",\"itSolutionSubTitle\":\"our services\",\"services\":[{\"id\":1,\"heading\":\"Autos\",\"slug\":\"it-design\",\"desc\":\"Los seguros de auto que te ofrecemos están diseñados de acuerdo a tus necesidades: paquetes de Responsabilidad Civil, Limitado, Ilimitado y Amplio.\",\"icon\":\"/images/icons/mitech-box-image-style-01-image-01-100x108.png\"},{\"id\":2,\"heading\":\"Gastos Médicos\",\"slug\":\"it-management\",\"desc\":\"Los seguros de gastos médicos que te ofrecemos están diseñados para enfrentar cualquier problema de salud, enfermedad o accidente, garantizando tu bienestar.\",\"icon\":\"/images/icons/mitech-box-image-style-01-image-02-100x108.png\"},{\"id\":3,\"heading\":\"Vida\",\"slug\":\"data-security\",\"desc\":\"Los seguros de vida que te ofrecemos están diseñados para salvaguardar y garantizar tu bienestar y el de tu familia a través de los años.\",\"icon\":\"/images/icons/mitech-box-image-style-01-image-03-100x108.png\"}]}");

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=template&id=1eb85042&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "section-title-wrap text-center"
  }, [_vm._ssrNode("<h6 class=\"section-sub-title mb-20\">" + _vm._ssrEscape(_vm._s(_vm.subTitle)) + "</h6> <h3 class=\"heading\">" + _vm._s(_vm.title) + "</h3>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=template&id=1eb85042&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SectionTitle.vue?vue&type=script&lang=js&
/* harmony default export */ var SectionTitlevue_type_script_lang_js_ = ({
  props: ['title', 'subTitle']
});
// CONCATENATED MODULE: ./components/SectionTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SectionTitlevue_type_script_lang_js_ = (SectionTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SectionTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SectionTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b713ff04"
  
)

/* harmony default export */ var SectionTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 66:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionTitle\":\"Conoce nuestros<span> productos</span>\",\"projects\":[{\"id\":1,\"image\":\"/images/projects/sedan.png\",\"imageBanner\":\"/images/bg/AUTOS.png\",\"heading\":\"Autos\",\"imageVideo\":\"/images/bg/auto.jpg\",\"desc\":\"Es un seguro que cubre el vehículo del propietario por los daños o hurto del automotor, así como por afectaciones aotras personas o a sus bienes, en casos de accidente de tránsito.\",\"youtube\":\"https://youtu.be/QSG8Psuawbk\",\"acordDesc\":\"Es un seguro que cubre al propietario de un vehículo por los daños o hurto del automotor, así como por afectaciones a otras personas o a sus bienes, en casos de accidente de tránsito. \",\"acord1\":\"No endeudarte ante una situación de accidente o pérdida total o parcial.\",\"acord2\":\"Asistencias legales, técnicas, entre otras dependiendo coberturas y productos.\",\"acord3\":\"Protección en la República Mexicana y en su caso en el extranjero.\",\"acord4\":\"Costos accesibles \",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":2,\"image\":\"/images/projects/medicos.png\",\"heading\":\"Gastos Médicos\",\"imageBanner\":\"/images/bg/GMM.png\",\"imageVideo\":\"/images/bg/GMMS.png\",\"desc\":\"Los seguros de gastos médicos que te ofrecemos están diseñados para enfrentar cualquier problema de salud, enfermedad o accidente, garantizando tu bienestar.\",\"youtube\":\"https://youtu.be/SyICKkdI9Fc\",\"acordDesc\":\"Este producto te da la protección financiera para hacer frente a los gastos generados por la atención médica originados de un accidente o enfermedad. \",\"acord1\":\"Estabilidad económica ante una enfermedad o accidente.\",\"acord2\":\"No endeudarte ante una situación de enfermedad o accidente.\",\"acord3\":\"Protección en la República Mexicana y en su caso en el extranjero.\",\"acord4\":\"Protección familiar.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":3,\"image\":\"/images/projects/vida.png\",\"imageBanner\":\"/images/bg/VIDAS.png\",\"heading\":\"Vida\",\"imageVideo\":\"/images/bg/vida.jpg\",\"acordDesc\":\"Este producto protege financieramente a tu familia y a otras personas que dependen de tus ingresos. Además, hay otros esquemas que te pueden ser de utilidad si lo que planeas es un ahorro para el retiro. \",\"desc\":\"Los seguros de vida que IBS Consultores tienen para ti están diseñados para salvaguardar y garantizar tu bienestar y el de tu familia a través de los años.\",\"youtube\":\"https://youtu.be/scn04w26kvk\",\"acord1\":\"Ahorro para la educación de tus hijos.\",\"acord2\":\"Ahorro para tu retiro.\",\"acord3\":\"Estabilidad económica ante una ausencia.\",\"acord4\":\"Control de finanzas personales.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":4,\"image\":\"/images/projects/viajes.png\",\"heading\":\"Viajes\",\"imageBanner\":\"/images/bg/VIAJE.png\",\"imageVideo\":\"/images/bg/viaje.jpg\",\"desc\":\"Los seguros de viaje que te ofrecemos están diseñados para afrontar cualquier inconveniente en tu viaje durante las 24 horas del día y los 365 días del año.\",\"acordDesc\":\"Este producto está diseñado para cubrirte durante viajes de duración limitada. Está dirigido a turistas que hagan viajes cortos al extranjero o dentro de la república, ofrece protección como cancelaciones, pérdida de equipaje, atención médica de emergencia, responsabilidad civil, repatriación, entre otros.\",\"youtube\":\"https://youtu.be/ySrh2Opx3Bk\",\"acord1\":\"Repatriación de restos\",\"acord2\":\"Protección de tu viaje.\",\"acord3\":\"Asistencias legales y responsabilidad civil.\",\"acord4\":\"Servicio médico de emergencia.\",\"acord5\":\"Protección en caso de pérdida de equipaje.\"},{\"id\":5,\"image\":\"/images/projects/hogar.png\",\"heading\":\"Hogar\",\"imageBanner\":\"/images/bg/HOGAR.png\",\"imageVideo\":\"/images/bg/hogar.jpg\",\"acordDesc\":\"Los seguros de hogar que te ofrecemos están diseñados a tu estilo de vida, ya sea que vivas solo, en pareja o si tienes hijos.\",\"desc\":\"Es un producto para proteger financieramente tu patrimonio como lo es tu hogar, si resulta dañada o destruida.\",\"youtube\":\"https://youtu.be/r4t-cbc8HZQ\",\"acord1\":\"No endeudarte ante una situación de accidente, robo o pérdida total o parcial.\",\"acord2\":\"Asistencias legales, técnicas, entre otras dependiendo coberturas y productos.\",\"acord3\":\"Responsabilidad Civil.\",\"acord4\":\"Protección de tu patrimonio.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":6,\"image\":\"/images/projects/empresarial.png\",\"heading\":\"Empresarial\",\"imageBanner\":\"/images/bg/EMPRESARIAL.png\",\"imageVideo\":\"/images/bg/empresarial.jpg\",\"acordDesc\":\"Producto que protege a tu empresa ante cualquier riesgo de la actividad empresarial.\",\"desc\":\"Producto que protege a tu empresa ante cualquier riesgo de peligro en la actividad empresarial.\",\"youtube\":\"https://youtu.be/G7LnmqA_jy8\",\"acord1\":\"Buena práctica de administración de riesgos.\",\"acord2\":\"Protección del patrimonio.\",\"acord3\":\"Control de gastos y finanzas.\",\"acord4\":\"Protección de tu negocio.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":7,\"image\":\"/images/projects/mascotas.png\",\"heading\":\"Mascotas\",\"imageBanner\":\"/images/bg/MASCOTAS.png\",\"imageVideo\":\"/images/bg/mascotas.jpg\",\"acordDesc\":\"Es un tipo de seguro de salud, orientado a mascotas y otros animales domésticos\",\"desc\":\"Es un tipo de seguro de salud, orientado a mascotas y otros animales domésticos.\",\"youtube\":\"https://youtu.be/dgKrUjfoKJw\",\"acord1\":\"Responsabilidad civil.\",\"acord2\":\"Enfermedades.\",\"acord3\":\"Accidentes.\",\"acord4\":\"Consultas veterinarias limitadas incluídas.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":9,\"image\":\"/images/projects/Flotillas.png\",\"heading\":\"Colectivos\",\"imageBanner\":\"/images/bg/COLECTIVOS.png\",\"imageVideo\":\"/images/bg/colectivos.jpg\",\"acordDesc\":\"Estos seguros tienen como finalidad el proteger el activo más importante de las empresas que son sus colaboradores, asimismo parte de su patrimonio. Estos seguros se pueden brindar como prestación o como descuento por nómina dependiendo de el caso y necesidad de la empresa. Los productos que manejamos son: Vida, Gastos funerarios, Gastos médicos, Gastos médicos menores, Accidentes, flotillas de automóviles, pick-up y camiones.\",\"desc\":\"Estos seguros tienen como finalidad el proteger el activo más importante de las empresas que son sus colaboradores.\",\"youtube\":\"https://youtu.be/SGPFxVdYy-w\",\"acord1\":\"Descuentos por volumen.\",\"acord2\":\"Coberturas diferentes a las de seguros individuales.\",\"acord3\":\"Convenios en hospitales.\",\"acord4\":\"Convenios en talleres mecánicos.\",\"acord5\":\"Control administrativo de riesgos.\"}],\"projectsTwo\":[{\"id\":1,\"image\":\"/images/features/case-study-image-01.png\",\"alt\":\"image\",\"heading\":\"Aqua Technology Case Studies\",\"category\":\"Cyber Security\",\"desc\":\"ARM Holdings is the world's leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day.\"},{\"id\":2,\"image\":\"/images/features/case-study-image-02.png\",\"alt\":\"image\",\"heading\":\"IBS Consultores\",\"category\":\"Information Technology\",\"desc\":\"ARM Holdings is the world's leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day.\"}],\"underHeading\":\"Suscríbete a nuesto boletín.\",\"link\":\"/\",\"caseStudies\":{\"bgImg\":\"/images/bg/single-case-study-bg-01.jpg\"}}");

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CtaOne.vue?vue&type=template&id=278aacbe&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "cta-modern section-space--ptb_100"
  }, [_vm._ssrNode("<div class=\"container\" data-v-278aacbe><div class=\"row align-items-center\" data-v-278aacbe><div class=\"col-lg-12\" data-v-278aacbe><div class=\"cta-modern-content text-center\" data-v-278aacbe><h2 class=\"cta-modern-title\" data-v-278aacbe>\n                        Compra y/o cotiza tu seguro<br data-v-278aacbe> <span class=\"highlight\" data-v-278aacbe>aquí mismo</span></h2> <p class=\"cta-modern-subtitle\" data-v-278aacbe>¡Es muy fácil! Elige el tipo de seguro que necesitas</p> <div class=\"cta-buttons-modern\" data-v-278aacbe><a href=\"https://cotizador.ibsconsultores.com/\" target=\"_blank\" class=\"cta-btn-modern cta-btn-auto\" data-v-278aacbe><div class=\"cta-btn-icon\" data-v-278aacbe><i class=\"fas fa-car\" data-v-278aacbe></i></div> <div class=\"cta-btn-content\" data-v-278aacbe><span class=\"cta-btn-title\" data-v-278aacbe>Autos</span> <span class=\"cta-btn-subtitle\" data-v-278aacbe>Cotiza ahora</span></div> <i class=\"fas fa-arrow-right cta-btn-arrow\" data-v-278aacbe></i></a> <a href=\"https://www.segurosargos.com/seimovil/acceso/porToken/53CEE673317802A108A53428:4a789270eaeefc5bf36f5545daa7a375\" target=\"_blank\" class=\"cta-btn-modern cta-btn-life\" data-v-278aacbe><div class=\"cta-btn-icon\" data-v-278aacbe><i class=\"fas fa-heart\" data-v-278aacbe></i></div> <div class=\"cta-btn-content\" data-v-278aacbe><span class=\"cta-btn-title\" data-v-278aacbe>Vida</span> <span class=\"cta-btn-subtitle\" data-v-278aacbe>Cotiza ahora</span></div> <i class=\"fas fa-arrow-right cta-btn-arrow\" data-v-278aacbe></i></a></div></div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CtaOne.vue?vue&type=template&id=278aacbe&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CtaOne.vue?vue&type=script&lang=js&
/* harmony default export */ var CtaOnevue_type_script_lang_js_ = ({
  name: 'CtaOne'
});
// CONCATENATED MODULE: ./components/CtaOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CtaOnevue_type_script_lang_js_ = (CtaOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CtaOne.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CtaOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "278aacbe",
  "3aab5901"
  
)

/* harmony default export */ var CtaOne = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module) {

module.exports = JSON.parse("{\"heroInfotechno\":{\"subTitle\":\"IT Design & Consulting\",\"title\":\"Facilitate All <br>  Local IT-related Service Providers\",\"desc\":\"Highly Tailored IT Design, Management & Support Services.\",\"bgImg\":\"/images/hero/infotechno-01.png\",\"img\":\"/images/hero/infotechno-02.png\"},\"heroAppointment\":{\"subTitle\":\"Secure & IT Services\",\"title\":\"Excellent IT services for <span>your success</span>\",\"videoText\":\"How we work\",\"videoLink\":\"https://www.youtube.com/watch?v=4RPqGXQFQ_s\",\"bgImg\":\"/images/hero/appointment-hero-bg.jpg\"},\"heroProcessing\":{\"subTitle\":\"IT Software and design\",\"title\":\"Virtual technology in a <span>Refined IT System</span>\",\"desc\":\"Set the trends for desktop & server virtualization technology\",\"videoText\":\"How we work\",\"videoLink\":\"https://www.youtube.com/watch?v=4RPqGXQFQ_s\",\"bgImg\":\"/images/hero/processing-hero-bg.jpg\",\"image\":\"/images/hero/slider-processing-slide-01-image-01.png\"},\"heroService\":{\"subTitle\":\"Responsive Design\",\"title\":\"For IT Services\",\"desc\":\"Highly Tailored IT Design, Management & Support Services.\",\"bgImg\":\"/images/hero/home-services-hero-bg.jpg\"},\"heroResolution\":{\"subTitle\":\"IT Services Designed For\",\"title\":\"Your Business \",\"desc\":\"Highly Tailored IT Design, Management & Support Services.\",\"bgImg\":\"/images/hero/home-resolutions-hero-bg-image.jpg\"}}");

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMember.vue?vue&type=template&id=7988db0a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "grid-item"
  }, [_vm._ssrNode("<div class=\"ht-team-member\"><div class=\"team-image\"><img" + _vm._ssrAttr("src", _vm.teamMember.image) + " alt=\"team member\" class=\"img-fluid\"> <div class=\"social-networks\"><div class=\"inner\"><a target=\"_blank\"" + _vm._ssrAttr("href", _vm.teamMember.fbUrl) + " aria-label=\"Facebook\" class=\"hint--bounce hint--top hint--theme-two\"><i class=\"fab fa-facebook\"></i></a> <a target=\"_blank\"" + _vm._ssrAttr("href", _vm.teamMember.twitterUrl) + " aria-label=\"Twitter\" class=\"hint--bounce hint--top hint--theme-two\"><i class=\"fab fa-twitter\"></i></a> <a target=\"_blank\"" + _vm._ssrAttr("href", _vm.teamMember.instagramUrl) + " aria-label=\"Instagram\" class=\"hint--bounce hint--top hint--theme-two\"><i class=\"fab fa-instagram\"></i></a></div></div></div> <div class=\"team-info\"><h5 class=\"name\">" + _vm._ssrEscape(_vm._s(_vm.teamMember.name)) + "</h5> <div class=\"position\">" + _vm._ssrEscape(_vm._s(_vm.teamMember.designation)) + "</div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TeamMember.vue?vue&type=template&id=7988db0a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamMember.vue?vue&type=script&lang=js&
/* harmony default export */ var TeamMembervue_type_script_lang_js_ = ({
  props: ['teamMember']
});
// CONCATENATED MODULE: ./components/TeamMember.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamMembervue_type_script_lang_js_ = (TeamMembervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamMember.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamMembervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "22b51422"
  
)

/* harmony default export */ var TeamMember = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module) {

module.exports = JSON.parse("{\"funfactOne\":[{\"title\":\"Successfully work <br> with\",\"count\":650,\"text\":\"Happy Clients\"},{\"title\":\"Successfully <br> completed\",\"count\":780,\"text\":\"finished projects\"},{\"title\":\"Recruit more <br> than\",\"count\":245,\"text\":\"skilled experts\"},{\"title\":\"Blog <br> update \",\"count\":980,\"text\":\"media posts\"}],\"funfactThree\":{\"subTitle\":\"Years’ Experience in IT\",\"markText\":\"38\",\"title\":\"Learn more about our <span>Success Stories</span>\",\"funfacts\":[{\"title\":\"Successfully work <br> with\",\"count\":650,\"text\":\"Happy Clients\"},{\"title\":\"Successfully <br> completed\",\"count\":780,\"text\":\"finished projects\"},{\"title\":\"Recruit more <br> than\",\"count\":245,\"text\":\"skilled experts\"},{\"title\":\"Blog <br> update \",\"count\":980,\"text\":\"media posts\"}]}}");

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudiesItem.vue?vue&type=template&id=23eb523a&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('n-link', {
    staticClass: "projects-wrap style-01 wow move-up",
    attrs: {
      "to": `/case-studies/${_vm.project.id}`
    }
  }, [_c('div', {
    staticClass: "projects-image-box"
  }, [_c('div', {
    staticClass: "projects-image"
  }, [_c('img', {
    staticClass: "img-fluid",
    attrs: {
      "src": _vm.project.image,
      "alt": "project image"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('h6', {
    staticClass: "heading"
  }, [_vm._v(_vm._s(_vm.project.heading))]), _vm._v(" "), _c('div', {
    staticClass: "post-categories"
  }, [_vm._v("\n                " + _vm._s(_vm.project.category) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "text",
    staticStyle: {
      "text-align": "justify"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.project.desc) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "box-projects-arrow"
  }, [_c('span', {
    staticClass: "button-text"
  }, [_vm._v("Ver más.")]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-long-arrow-right ml-1"
  })])])])]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CaseStudiesItem.vue?vue&type=template&id=23eb523a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudiesItem.vue?vue&type=script&lang=js&
/* harmony default export */ var CaseStudiesItemvue_type_script_lang_js_ = ({
  props: ['project']
});
// CONCATENATED MODULE: ./components/CaseStudiesItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CaseStudiesItemvue_type_script_lang_js_ = (CaseStudiesItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CaseStudiesItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CaseStudiesItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5ca99b62"
  
)

/* harmony default export */ var CaseStudiesItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CtaOne_vue_vue_type_style_index_0_id_278aacbe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CtaOne_vue_vue_type_style_index_0_id_278aacbe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CtaOne_vue_vue_type_style_index_0_id_278aacbe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CtaOne_vue_vue_type_style_index_0_id_278aacbe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CtaOne_vue_vue_type_style_index_0_id_278aacbe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionTitle\":\"<span>¿Quiénes somos?</span>\",\"sectionSubTitle\":\"Somos un despacho de asesoría en riesgos líderes en el Estado de Chihuahua por nuestro enfoque financiero y reconocido por nuestros valores y profesionalismo.\",\"teamMembers\":[{\"id\":1,\"image\":\"/images/team/Deya.png\",\"name\":\"Deyanira Rey Guillen\",\"designation\":\"Directora Administrativa\",\"fbUrl\":\"https://www.facebook.com\",\"twitterUrl\":\"https://twitter.com\",\"instagramUrl\":\"https://www.instagram.com\"},{\"id\":2,\"image\":\"/images/team/team-member-07-370x250.jpg\",\"name\":\"Stephen Mearsley\",\"designation\":\"President & CEO\",\"fbUrl\":\"https://www.facebook.com\",\"twitterUrl\":\"https://twitter.com\",\"instagramUrl\":\"https://www.instagram.com\"},{\"id\":3,\"image\":\"/images/team/team-member-04-370x250.jpg\",\"name\":\"Maggie Strickland\",\"designation\":\"Financial Services\",\"fbUrl\":\"https://www.facebook.com\",\"twitterUrl\":\"https://twitter.com\",\"instagramUrl\":\"https://www.instagram.com\"},{\"id\":4,\"image\":\"/images/team/team-member-02-370x250.jpg\",\"name\":\"Monica Blews\",\"designation\":\"Project manager\",\"fbUrl\":\"https://www.facebook.com\",\"twitterUrl\":\"https://twitter.com\",\"instagramUrl\":\"https://www.instagram.com\"},{\"id\":5,\"image\":\"/images/team/team-member-07-370x455.jpg\",\"name\":\"Dollie Horton\",\"designation\":\"Marketing\",\"fbUrl\":\"https://www.facebook.com\",\"twitterUrl\":\"https://twitter.com\",\"instagramUrl\":\"https://www.instagram.com\"},{\"id\":6,\"image\":\"/images/team/team-member-01-370x455.jpg\",\"name\":\"Stephen Mearsley\",\"designation\":\"President & CEO\",\"fbUrl\":\"https://www.facebook.com\",\"twitterUrl\":\"https://twitter.com\",\"instagramUrl\":\"https://www.instagram.com\"},{\"id\":7,\"image\":\"/images/team/team-member-06-370x455.jpg\",\"name\":\"Maggie Strickland\",\"designation\":\"Financial Services\",\"fbUrl\":\"https://www.facebook.com\",\"twitterUrl\":\"https://twitter.com\",\"instagramUrl\":\"https://www.instagram.com\"},{\"id\":8,\"image\":\"/images/team/team-member-04-370x452.jpg\",\"name\":\"Monica Blews\",\"designation\":\"Project manager\",\"fbUrl\":\"https://www.facebook.com\",\"twitterUrl\":\"https://twitter.com\",\"instagramUrl\":\"https://www.instagram.com\"},{\"id\":9,\"image\":\"/images/team/team-member-05-370x452.jpg\",\"name\":\"Monica Blews\",\"designation\":\"Project manager\",\"fbUrl\":\"https://www.facebook.com\",\"twitterUrl\":\"https://twitter.com\",\"instagramUrl\":\"https://www.instagram.com\"},{\"id\":10,\"image\":\"/images/team/team-member-03-370x452.jpg\",\"name\":\"Monica Blews\",\"designation\":\"Project manager\",\"fbUrl\":\"https://www.facebook.com\",\"twitterUrl\":\"https://twitter.com\",\"instagramUrl\":\"https://www.instagram.com\"},{\"id\":11,\"image\":\"/images/team/team-member-02-370x452.jpg\",\"name\":\"Monica Blews\",\"designation\":\"Project manager\",\"fbUrl\":\"https://www.facebook.com\",\"twitterUrl\":\"https://twitter.com\",\"instagramUrl\":\"https://www.instagram.com\"}],\"teamMemberWidget\":[{\"widgetTitle\":\"DEVELOPER\",\"teamMemberList\":[{\"title\":\"Gene Moreno\"},{\"title\":\"Carrie Greer\"},{\"title\":\"Brent Newman\"},{\"title\":\"Craig Stevenson\"}]},{\"widgetTitle\":\"ENGINEER\",\"teamMemberList\":[{\"title\":\"Albert Webster\"},{\"title\":\"Harry Castillo\"},{\"title\":\"Walter Reid\"},{\"title\":\"Gordon Baldwin\"}]},{\"widgetTitle\":\"STAFF\",\"teamMemberList\":[{\"title\":\"Gene Moreno\"},{\"title\":\"Carrie Greer\"},{\"title\":\"Brent Newman\"},{\"title\":\"Craig Stevenson\"}]},{\"widgetTitle\":\"DESIGN/MARKETING\",\"teamMemberList\":[{\"title\":\"Charlotte Shaw\"},{\"title\":\"Kate Wong\"},{\"title\":\"Frederick Huff\"},{\"title\":\"Ora Johnson\"}]}]}");

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItemStyleTwo.vue?vue&type=template&id=41f77942&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "ht-box-icon style-02 single-svg-icon-box"
  }, [_vm._ssrNode("<div class=\"icon-box-wrap\">", "</div>", [_vm._ssrNode("<div class=\"icon\"><div class=\"svg-icon\"><img" + _vm._ssrAttr("src", _vm.service.icon) + " alt=\"icon\"></div></div> "), _vm._ssrNode("<div class=\"content\">", "</div>", [_vm._ssrNode("<h5 class=\"heading\">" + _vm._ssrEscape(_vm._s(_vm.service.heading)) + "</h5> <div class=\"text\">" + _vm._ssrEscape("\n                " + _vm._s(_vm.service.desc) + "\n            ") + "</div> "), _vm._ssrNode("<div class=\"feature-btn\">", "</div>", [_c('n-link', {
    attrs: {
      "to": `/service/${_vm.service.slug}`
    }
  }, [_c('span', {
    staticClass: "button-text"
  }, [_vm._v("Discover now")]), _vm._v(" "), _c('i', {
    staticClass: "far fa-long-arrow-right"
  })])], 1)], 2)], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ServiceItemStyleTwo.vue?vue&type=template&id=41f77942&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ServiceItemStyleTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var ServiceItemStyleTwovue_type_script_lang_js_ = ({
  props: ['service']
});
// CONCATENATED MODULE: ./components/ServiceItemStyleTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ServiceItemStyleTwovue_type_script_lang_js_ = (ServiceItemStyleTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ServiceItemStyleTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ServiceItemStyleTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0804af28"
  
)

/* harmony default export */ var ServiceItemStyleTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppointmentForm.vue?vue&type=template&id=1e2af61f&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "business-solution-form-wrap mr-auto ml-auto"
  }, [_vm._ssrNode("<div class=\"contact-title text-center section-space--mb_40\"><h5 class=\"mb-10\">Book appointment</h5> <p class=\"text\">It's out pleasure to have a chance to cooperate.</p></div> <form method=\"post\"><div class=\"contact-form__two\"><div class=\"contact-inner\"><input name=\"name\" type=\"text\" placeholder=\"Name *\"></div> <div class=\"contact-inner\"><input name=\"email\" type=\"email\" placeholder=\"Email *\"></div> <div class=\"contact-select\"><div class=\"form-item contact-inner\"><span class=\"inquiry\"><select name=\"inquiry\" class=\"select-item\"><option value=\"Your inquiry about\">Your inquiry about</option> <option value=\"General Information Request\">General Information Request</option> <option value=\"Partner Relations\">Partner Relations</option> <option value=\"Careers\">Careers</option> <option value=\"Software Licencing\">Software Licencing</option></select></span></div></div> <div class=\"comment-submit-btn text-center\"><button type=\"submit\" class=\"ht-btn ht-btn-md\">Submit</button></div></div></form>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppointmentForm.vue?vue&type=template&id=1e2af61f&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppointmentForm.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0a4ee048"
  
)

/* harmony default export */ var AppointmentForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
//# sourceMappingURL=Appointment.js.map