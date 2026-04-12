exports.ids = [59];
exports.modules = {

/***/ 196:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutBanner_vue_vue_type_style_index_0_id_7c5b41b2_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutBanner_vue_vue_type_style_index_0_id_7c5b41b2_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutBanner_vue_vue_type_style_index_0_id_7c5b41b2_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutBanner_vue_vue_type_style_index_0_id_7c5b41b2_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutBanner_vue_vue_type_style_index_0_id_7c5b41b2_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/AboutBanner.vue?vue&type=template&id=7c5b41b2&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "about-banner"
  }, [_vm._ssrNode("<div class=\"banner-overlay\" data-v-7c5b41b2></div> <div class=\"banner-image-wrapper\" data-v-7c5b41b2><img src=\"/images/nosotros/local.jpg\" alt=\"Local IBS Consultores\" class=\"banner-image\" data-v-7c5b41b2></div> <div class=\"banner-content\" data-v-7c5b41b2><div class=\"container\" data-v-7c5b41b2><div class=\"row\" data-v-7c5b41b2><div class=\"col-lg-12\" data-v-7c5b41b2><div class=\"banner-text-content\" data-v-7c5b41b2><h1 class=\"banner-title\" data-v-7c5b41b2>IBS CONSULTORES</h1> <p class=\"banner-subtitle\" data-v-7c5b41b2>Tu Mejor Agente de Seguros y de Fianzas</p></div></div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/AboutBanner.vue?vue&type=template&id=7c5b41b2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/AboutBanner.vue?vue&type=script&lang=js&
/* harmony default export */ var AboutBannervue_type_script_lang_js_ = ({
  name: 'AboutBanner',
  methods: {
    handleImageError(event) {
      event.target.style.display = 'none';
      const parent = event.target.parentElement;

      if (parent && !parent.querySelector('.image-placeholder')) {
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        placeholder.innerHTML = '<i class="fas fa-building"></i><p>Imagen no disponible</p>';
        parent.appendChild(placeholder);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/sections/AboutBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_AboutBannervue_type_script_lang_js_ = (AboutBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/AboutBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(249)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_AboutBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c5b41b2",
  "d27039fa"
  
)

/* harmony default export */ var AboutBanner = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sections-about-banner.js.map