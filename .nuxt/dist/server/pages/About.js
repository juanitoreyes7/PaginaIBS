exports.ids = [120,26,27,29,30,35,48,49,50,51,52,61,72,80,85,93,109];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InsuranceModal.vue?vue&type=template&id=3e666499&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.show ? _c('div', {
    staticClass: "insurance-modal-overlay",
    on: {
      "click": function ($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_vm._ssrNode("<div class=\"insurance-modal\" data-v-3e666499><div class=\"modal-header\" data-v-3e666499><h3 class=\"modal-title\" data-v-3e666499>" + _vm._ssrEscape(_vm._s(_vm.seguroData.heading || _vm.seguroData.name)) + "</h3> <button class=\"modal-close\" data-v-3e666499><i class=\"fas fa-times\" data-v-3e666499></i></button></div> <div class=\"modal-body\" data-v-3e666499>" + (_vm.seguroData.desc ? "<p class=\"modal-description\" data-v-3e666499>" + _vm._ssrEscape("\n                " + _vm._s(_vm.seguroData.desc) + "\n            ") + "</p>" : _vm.seguroData.acordDesc ? "<p class=\"modal-description\" data-v-3e666499>" + _vm._ssrEscape("\n                " + _vm._s(_vm.seguroData.acordDesc) + "\n            ") + "</p>" : "<!---->") + " " + (_vm.seguroData.acord1 ? "<div class=\"modal-benefits\" data-v-3e666499><h4 class=\"benefits-title\" data-v-3e666499>Beneficios:</h4> <ul class=\"benefits-list\" data-v-3e666499>" + (_vm.seguroData.acord1 ? "<li data-v-3e666499>" + _vm._ssrEscape(_vm._s(_vm.seguroData.acord1)) + "</li>" : "<!---->") + " " + (_vm.seguroData.acord2 ? "<li data-v-3e666499>" + _vm._ssrEscape(_vm._s(_vm.seguroData.acord2)) + "</li>" : "<!---->") + " " + (_vm.seguroData.acord3 ? "<li data-v-3e666499>" + _vm._ssrEscape(_vm._s(_vm.seguroData.acord3)) + "</li>" : "<!---->") + " " + (_vm.seguroData.acord4 ? "<li data-v-3e666499>" + _vm._ssrEscape(_vm._s(_vm.seguroData.acord4)) + "</li>" : "<!---->") + " " + (_vm.seguroData.acord5 ? "<li data-v-3e666499>" + _vm._ssrEscape(_vm._s(_vm.seguroData.acord5)) + "</li>" : "<!---->") + "</ul></div>" : "<!---->") + "</div></div>")]) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/InsuranceModal.vue?vue&type=template&id=3e666499&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/InsuranceModal.vue?vue&type=script&lang=js&
/* harmony default export */ var InsuranceModalvue_type_script_lang_js_ = ({
  name: 'InsuranceModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    seguroData: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }

  },
  watch: {
    show(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

  },

  beforeDestroy() {
    document.body.style.overflow = '';
  }

});
// CONCATENATED MODULE: ./components/InsuranceModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_InsuranceModalvue_type_script_lang_js_ = (InsuranceModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/InsuranceModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(116)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_InsuranceModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e666499",
  "ea779d84"
  
)

/* harmony default export */ var InsuranceModal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 113:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceModal_vue_vue_type_style_index_0_id_3e666499_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceModal_vue_vue_type_style_index_0_id_3e666499_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceModal_vue_vue_type_style_index_0_id_3e666499_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceModal_vue_vue_type_style_index_0_id_3e666499_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceModal_vue_vue_type_style_index_0_id_3e666499_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_586857ff_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_586857ff_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_586857ff_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_586857ff_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_586857ff_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUsHero_vue_vue_type_style_index_0_id_d1425d68_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUsHero_vue_vue_type_style_index_0_id_d1425d68_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUsHero_vue_vue_type_style_index_0_id_d1425d68_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUsHero_vue_vue_type_style_index_0_id_d1425d68_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUsHero_vue_vue_type_style_index_0_id_d1425d68_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormacionExperienciaSection_vue_vue_type_style_index_0_id_be8c7082_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormacionExperienciaSection_vue_vue_type_style_index_0_id_be8c7082_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormacionExperienciaSection_vue_vue_type_style_index_0_id_be8c7082_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormacionExperienciaSection_vue_vue_type_style_index_0_id_be8c7082_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormacionExperienciaSection_vue_vue_type_style_index_0_id_be8c7082_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectoresSection_vue_vue_type_style_index_0_id_71230ce3_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectoresSection_vue_vue_type_style_index_0_id_71230ce3_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectoresSection_vue_vue_type_style_index_0_id_71230ce3_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectoresSection_vue_vue_type_style_index_0_id_71230ce3_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DirectoresSection_vue_vue_type_style_index_0_id_71230ce3_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PremiosSection_vue_vue_type_style_index_0_id_40c1b01c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PremiosSection_vue_vue_type_style_index_0_id_40c1b01c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PremiosSection_vue_vue_type_style_index_0_id_40c1b01c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PremiosSection_vue_vue_type_style_index_0_id_40c1b01c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PremiosSection_vue_vue_type_style_index_0_id_40c1b01c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compa_iasSegurosSection_vue_vue_type_style_index_0_id_3da6e60c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compa_iasSegurosSection_vue_vue_type_style_index_0_id_3da6e60c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compa_iasSegurosSection_vue_vue_type_style_index_0_id_3da6e60c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compa_iasSegurosSection_vue_vue_type_style_index_0_id_3da6e60c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compa_iasSegurosSection_vue_vue_type_style_index_0_id_3da6e60c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiposSegurosSection_vue_vue_type_style_index_0_id_4b94f18b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiposSegurosSection_vue_vue_type_style_index_0_id_4b94f18b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiposSegurosSection_vue_vue_type_style_index_0_id_4b94f18b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiposSegurosSection_vue_vue_type_style_index_0_id_4b94f18b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiposSegurosSection_vue_vue_type_style_index_0_id_4b94f18b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageHeader.vue?vue&type=template&id=586857ff&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "page-header-banner"
  }, [_vm._ssrNode("<div class=\"banner-image-wrapper\" data-v-586857ff><img src=\"/images/nosotros/local.jpg\" alt=\"Local IBS Consultores\" class=\"banner-image\" data-v-586857ff></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PageHeader.vue?vue&type=template&id=586857ff&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PageHeader.vue?vue&type=script&lang=js&
/* harmony default export */ var PageHeadervue_type_script_lang_js_ = ({
  name: 'PageHeader',
  props: ['title', 'subTitle', 'bgImg'],
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
// CONCATENATED MODULE: ./components/PageHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PageHeadervue_type_script_lang_js_ = (PageHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PageHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "586857ff",
  "2e054447"
  
)

/* harmony default export */ var PageHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/AboutUsHero.vue?vue&type=template&id=d1425d68&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "about-us-hero section-space--ptb_100"
  }, [_vm._ssrNode("<div class=\"container\" data-v-d1425d68><div class=\"row align-items-center\" data-v-d1425d68><div class=\"col-lg-6\" data-v-d1425d68><div class=\"about-hero-content\" data-v-d1425d68><h1 class=\"about-hero-title\" data-v-d1425d68>IBS CONSULTORES</h1> <h2 class=\"about-hero-subtitle\" data-v-d1425d68>Acerca de nosotros</h2> <p class=\"about-hero-description\" data-v-d1425d68>\n                        Somos un despacho integrado por profesionistas dedicados a la asesoría y consultoría en seguros y fianzas, así como la administración de riesgos desde 1998.\n                    </p> <p class=\"about-hero-description\" data-v-d1425d68>\n                        En IBS Consultores somos especialistas en Seguros y Fianzas, nos damos a la tarea de asesorar adecuadamente a nuestros clientes y asegurados con el fin de cubrir sus necesidades de seguridad y estabilidad económica ante cualquier contingencia.\n                    </p></div></div> <div class=\"col-lg-6\" data-v-d1425d68><div class=\"about-hero-image\" data-v-d1425d68><div class=\"logo-display\" data-v-d1425d68><img src=\"/images/logo/logoIBS.png\" alt=\"IBS Consultores Logo\" class=\"logo-image\" data-v-d1425d68></div></div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/AboutUsHero.vue?vue&type=template&id=d1425d68&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/AboutUsHero.vue?vue&type=script&lang=js&
/* harmony default export */ var AboutUsHerovue_type_script_lang_js_ = ({
  name: 'AboutUsHero',
  methods: {
    handleImageError(event) {
      event.target.style.display = 'none';
      const parent = event.target.parentElement;

      if (parent && !parent.querySelector('.logo-placeholder')) {
        const placeholder = document.createElement('div');
        placeholder.className = 'logo-placeholder';
        placeholder.innerHTML = `
                    <div class="logo-banner">
                        <p class="logo-top-text">Insurance Business Services</p>
                        <h2 class="logo-main">IBS</h2>
                        <p class="logo-bottom-text">Consultores</p>
                        <p class="logo-tagline">Asesores en Seguros & Fianzas</p>
                    </div>
                `;
        parent.appendChild(placeholder);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/sections/AboutUsHero.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_AboutUsHerovue_type_script_lang_js_ = (AboutUsHerovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/AboutUsHero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(138)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_AboutUsHerovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d1425d68",
  "18e9dce2"
  
)

/* harmony default export */ var AboutUsHero = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/FormacionExperienciaSection.vue?vue&type=template&id=be8c7082&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "formacion-experiencia-section section-space--ptb_80"
  }, [_vm._ssrNode("<div class=\"container\" data-v-be8c7082><div class=\"row justify-content-center\" data-v-be8c7082><div class=\"col-lg-10\" data-v-be8c7082><div class=\"formacion-experiencia-card\" data-v-be8c7082><h2 class=\"section-title\" data-v-be8c7082>Formación y experiencia</h2> <p class=\"section-intro\" data-v-be8c7082>\n                        Nuestro equipo cuenta con formación en instituciones como IPADE, Harvard Business School, ITESM y certificaciones CRM Internacional, además de experiencia como asesores en CNSF, consejeros en aseguradoras líderes y docencia en el ITESM.\n                    </p> <div class=\"summary-grid\" data-v-be8c7082><div class=\"summary-block\" data-v-be8c7082><h3 data-v-be8c7082>Formación destacada</h3> <ul data-v-be8c7082><li data-v-be8c7082>IPADE – Alta dirección y continuidad</li> <li data-v-be8c7082>Harvard Business School – Crecimiento e innovación</li> <li data-v-be8c7082>CRM Internacional – Certified Risk Manager</li> <li data-v-be8c7082>ITESM – Ingeniería y Maestría en Finanzas</li></ul></div> <div class=\"summary-block\" data-v-be8c7082><h3 data-v-be8c7082>Experiencia clave</h3> <ul data-v-be8c7082><li data-v-be8c7082>Asesor externo en CNSF (2004-actualidad)</li> <li data-v-be8c7082>Consejero nacional en aseguradoras (MetLife, Afirme, Zurich, HIR)</li> <li data-v-be8c7082>Certified Risk Manager (CRM Internacional)</li> <li data-v-be8c7082>Miembro MDRT</li></ul></div></div></div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/FormacionExperienciaSection.vue?vue&type=template&id=be8c7082&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/FormacionExperienciaSection.vue?vue&type=script&lang=js&
/* harmony default export */ var FormacionExperienciaSectionvue_type_script_lang_js_ = ({
  name: 'FormacionExperienciaSection'
});
// CONCATENATED MODULE: ./components/sections/FormacionExperienciaSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_FormacionExperienciaSectionvue_type_script_lang_js_ = (FormacionExperienciaSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/FormacionExperienciaSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_FormacionExperienciaSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "be8c7082",
  "1d533dc4"
  
)

/* harmony default export */ var FormacionExperienciaSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/DirectoresSection.vue?vue&type=template&id=71230ce3&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "directores-section section-space--ptb_100"
  }, [_vm._ssrNode("<div class=\"container\" data-v-71230ce3><div class=\"row\" data-v-71230ce3><div class=\"col-lg-12\" data-v-71230ce3><div class=\"section-header text-center section-space--mb_60\" data-v-71230ce3><h2 class=\"section-title\" data-v-71230ce3>NUESTRO EQUIPO DIRECTIVO</h2></div></div></div> <div class=\"row\" data-v-71230ce3>" + _vm._ssrList(_vm.directoresData, function (director) {
    return "<div class=\"col-lg-6 col-md-6 mb-40\" data-v-71230ce3><div class=\"director-card\" data-v-71230ce3><div class=\"director-image-wrapper\" data-v-71230ce3><div class=\"director-placeholder\" data-v-71230ce3><i class=\"fas fa-user-tie\" data-v-71230ce3></i></div></div> <div class=\"director-info\" data-v-71230ce3><div class=\"director-qualification\" data-v-71230ce3>" + _vm._ssrEscape(_vm._s(director.qualification)) + "</div> <h3 class=\"director-name\" data-v-71230ce3>" + _vm._ssrEscape(_vm._s(director.name)) + "</h3> <p class=\"director-role\" data-v-71230ce3>" + _vm._ssrEscape(_vm._s(director.role)) + "</p> <div class=\"director-badge\" data-v-71230ce3><i class=\"fas fa-medal\" data-v-71230ce3></i></div></div></div></div>";
  }) + "</div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/DirectoresSection.vue?vue&type=template&id=71230ce3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/DirectoresSection.vue?vue&type=script&lang=js&
/* harmony default export */ var DirectoresSectionvue_type_script_lang_js_ = ({
  name: 'DirectoresSection',

  data() {
    return {
      directoresData: [{
        id: 1,
        name: 'GERARDO ARZAGA LUEVANO',
        qualification: 'INGENIERO Y MAESTRO EN FINANZAS',
        role: 'DIRECTOR GENERAL'
      }, {
        id: 2,
        name: 'DEYANIRA ILEANA REY GUILLÉN',
        qualification: 'LICENCIADA EN MERCADOTECNIA',
        role: 'DIRECTORA Y SOCIA FUNDADORA DE IBS CONSULTORES'
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/sections/DirectoresSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_DirectoresSectionvue_type_script_lang_js_ = (DirectoresSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/DirectoresSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(140)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_DirectoresSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "71230ce3",
  "55ed57b5"
  
)

/* harmony default export */ var DirectoresSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/PremiosSection.vue?vue&type=template&id=40c1b01c&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "premios-section section-space--ptb_100"
  }, [_vm._ssrNode("<div class=\"container\" data-v-40c1b01c><div class=\"row\" data-v-40c1b01c><div class=\"col-lg-12\" data-v-40c1b01c><div class=\"section-header text-center section-space--mb_60\" data-v-40c1b01c><h2 class=\"section-title\" data-v-40c1b01c>PREMIOS Y RECONOCIMIENTOS</h2></div></div></div> <div class=\"row\" data-v-40c1b01c><div class=\"col-lg-10 offset-lg-1\" data-v-40c1b01c><div class=\"premios-list\" data-v-40c1b01c>" + _vm._ssrList(_vm.premiosData, function (premio, index) {
    return "<div class=\"premio-item\" data-v-40c1b01c><div class=\"premio-content\" data-v-40c1b01c><i class=\"fas fa-trophy premio-icon\" data-v-40c1b01c></i> <div class=\"premio-text\" data-v-40c1b01c><h4 class=\"premio-name\" data-v-40c1b01c>" + _vm._ssrEscape(_vm._s(premio.name)) + "</h4> <span class=\"premio-year\" data-v-40c1b01c>" + _vm._ssrEscape(_vm._s(premio.year)) + "</span></div></div></div>";
  }) + "</div></div></div> <div class=\"row section-space--mt_60\" data-v-40c1b01c><div class=\"col-lg-6 col-md-6 mb-30\" data-v-40c1b01c><div class=\"premio-image-card\" data-v-40c1b01c><img src=\"/images/nosotros/premio1.jpg\" alt=\"Premio 1\" class=\"premio-image\" data-v-40c1b01c></div></div> <div class=\"col-lg-6 col-md-6 mb-30\" data-v-40c1b01c><div class=\"premio-image-card\" data-v-40c1b01c><img src=\"/images/nosotros/premio2.jpg\" alt=\"Premio 2\" class=\"premio-image\" data-v-40c1b01c></div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/PremiosSection.vue?vue&type=template&id=40c1b01c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/PremiosSection.vue?vue&type=script&lang=js&
/* harmony default export */ var PremiosSectionvue_type_script_lang_js_ = ({
  name: 'PremiosSection',

  data() {
    return {
      premiosData: [{
        name: 'Grupo Villacero',
        year: '2017'
      }, {
        name: 'Premio AXA Mejores Agentes Nacionales',
        year: '1999-2024'
      }, {
        name: 'Premio especial Don Antonio Segui Moguel',
        year: '2021'
      }]
    };
  },

  methods: {
    handleImageError(event) {
      event.target.style.display = 'none';
      const parent = event.target.parentElement;

      if (parent && !parent.querySelector('.image-placeholder')) {
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        placeholder.innerHTML = '<i class="fas fa-image"></i><p>Imagen no disponible</p>';
        parent.appendChild(placeholder);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/sections/PremiosSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_PremiosSectionvue_type_script_lang_js_ = (PremiosSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/PremiosSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_PremiosSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "40c1b01c",
  "88633f70"
  
)

/* harmony default export */ var PremiosSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/CompañiasSegurosSection.vue?vue&type=template&id=3da6e60c&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "companias-seguros-section section-space--ptb_100"
  }, [_vm._ssrNode("<div class=\"container\" data-v-3da6e60c>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-3da6e60c><div class=\"col-lg-12\" data-v-3da6e60c><div class=\"section-header text-center section-space--mb_60\" data-v-3da6e60c><h2 class=\"section-title\" data-v-3da6e60c>COMPAÑÍAS DE SEGUROS</h2> <p class=\"section-subtitle\" data-v-3da6e60c>\n                        Fortalecemos nuestra relación con grandes empresas aseguradoras para brindarles una amplia variedad de seguros\n                    </p></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-3da6e60c>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-3da6e60c>", "</div>", [_vm._ssrNode("<div class=\"companias-carousel\" data-v-3da6e60c>", "</div>", [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.companiasData, function (compania, index) {
    return _c('div', {
      key: compania.name + '-' + index,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "compania-card"
    }, [_c('div', {
      staticClass: "compania-logo-wrapper"
    }, [compania.logo ? _c('img', {
      staticClass: "compania-logo",
      attrs: {
        "src": compania.logo,
        "alt": compania.name
      },
      on: {
        "error": _vm.handleImageError
      }
    }) : _c('div', {
      staticClass: "compania-placeholder"
    }, [_vm._v("\n                                        " + _vm._s(compania.name.charAt(0)) + "\n                                    ")])])])]);
  }), 0), _vm._ssrNode(" <div class=\"swiper-pagination swiper-pagination-companias\" data-v-3da6e60c></div> <div class=\"swiper-button-prev swiper-button-prev-companias\" data-v-3da6e60c></div> <div class=\"swiper-button-next swiper-button-next-companias\" data-v-3da6e60c></div>")], 2)])])], 2)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/CompañiasSegurosSection.vue?vue&type=template&id=3da6e60c&scoped=true&

// EXTERNAL MODULE: ./data/cobranzaDirectory.json
var cobranzaDirectory = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/CompañiasSegurosSection.vue?vue&type=script&lang=js&

/* harmony default export */ var Compa_iasSegurosSectionvue_type_script_lang_js_ = ({
  name: 'CompañiasSegurosSection',

  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 600,
        spaceBetween: 24,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next-companias',
          prevEl: '.swiper-button-prev-companias'
        },
        pagination: {
          el: '.swiper-pagination-companias',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          1200: {
            slidesPerView: 5
          },
          992: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 3
          },
          576: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      },
      companiasData: cobranzaDirectory.companies.map((c, i) => ({
        id: i + 1,
        name: c.name,
        logo: c.logo || null
      }))
    };
  },

  methods: {
    handleImageError(event) {
      event.target.style.display = 'none';
      const parent = event.target.parentElement;

      if (parent && !parent.querySelector('.compania-placeholder')) {
        const placeholder = document.createElement('div');
        placeholder.className = 'compania-placeholder';
        const companyName = event.target.alt;
        placeholder.textContent = companyName.charAt(0);
        parent.appendChild(placeholder);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/sections/CompañiasSegurosSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_Compa_iasSegurosSectionvue_type_script_lang_js_ = (Compa_iasSegurosSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/CompañiasSegurosSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_Compa_iasSegurosSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3da6e60c",
  "2dbba416"
  
)

/* harmony default export */ var Compa_iasSegurosSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TiposSegurosSection.vue?vue&type=template&id=4b94f18b&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "tipos-seguros-section section-space--ptb_100"
  }, [_vm._ssrNode("<div class=\"container\" data-v-4b94f18b>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-4b94f18b><div class=\"col-lg-12\" data-v-4b94f18b><div class=\"section-header text-center section-space--mb_60\" data-v-4b94f18b><h2 class=\"section-title\" data-v-4b94f18b>SEGUROS</h2> <p class=\"section-subtitle\" data-v-4b94f18b>\n                        Contamos con seguros diseñados específicamente para cada circunstancia que nos presente en la vida\n                    </p></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-4b94f18b>", "</div>", [_vm._ssrNode("<div class=\"col-12\" data-v-4b94f18b>", "</div>", [_vm._ssrNode("<div class=\"tipos-seguros-carousel\" data-v-4b94f18b>", "</div>", [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.segurosData, function (seguro) {
    return _c('div', {
      key: seguro.id,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "seguro-card",
      on: {
        "click": function ($event) {
          return _vm.openModal(seguro);
        }
      }
    }, [_c('div', {
      staticClass: "seguro-icon-wrapper"
    }, [_c('i', {
      class: seguro.icon
    })]), _vm._v(" "), _c('h4', {
      staticClass: "seguro-name"
    }, [_vm._v(_vm._s(seguro.name))])])]);
  }), 0), _vm._ssrNode(" <div class=\"swiper-pagination swiper-pagination-tipos\" data-v-4b94f18b></div> <div class=\"swiper-button-prev swiper-button-prev-tipos\" data-v-4b94f18b></div> <div class=\"swiper-button-next swiper-button-next-tipos\" data-v-4b94f18b></div>")], 2)])])], 2), _vm._ssrNode(" "), _c('InsuranceModal', {
    attrs: {
      "show": _vm.showModal,
      "seguroData": _vm.selectedSeguro
    },
    on: {
      "close": _vm.closeModal
    }
  })], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/TiposSegurosSection.vue?vue&type=template&id=4b94f18b&scoped=true&

// EXTERNAL MODULE: ./data/caseStidies.json
var caseStidies = __webpack_require__(66);

// EXTERNAL MODULE: ./components/InsuranceModal.vue + 4 modules
var InsuranceModal = __webpack_require__(100);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/TiposSegurosSection.vue?vue&type=script&lang=js&


/* harmony default export */ var TiposSegurosSectionvue_type_script_lang_js_ = ({
  name: 'TiposSegurosSection',
  components: {
    InsuranceModal: InsuranceModal["default"]
  },

  data() {
    return {
      showModal: false,
      selectedSeguro: {},
      swiperOption: {
        loop: true,
        speed: 600,
        spaceBetween: 24,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next-tipos',
          prevEl: '.swiper-button-prev-tipos'
        },
        pagination: {
          el: '.swiper-pagination-tipos',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          1200: {
            slidesPerView: 4
          },
          992: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      },
      segurosData: [{
        id: 1,
        name: 'Vida',
        icon: 'fas fa-heart',
        mapKey: 'Vida'
      }, {
        id: 2,
        name: 'Gastos Médicos',
        icon: 'fas fa-heartbeat',
        mapKey: 'Gastos Médicos'
      }, {
        id: 3,
        name: 'Flotillas',
        icon: 'fas fa-car',
        mapKey: 'Colectivos'
      }, {
        id: 4,
        name: 'Accidentes',
        icon: 'fas fa-user-injured',
        mapKey: null
      }, {
        id: 5,
        name: 'Empresarial',
        icon: 'fas fa-briefcase',
        mapKey: 'Empresarial'
      }, {
        id: 6,
        name: 'Ciberseguridad para empresas',
        icon: 'fas fa-shield-alt',
        mapKey: null
      }, {
        id: 7,
        name: 'Retiro',
        icon: 'fas fa-piggy-bank',
        mapKey: null
      }],
      productsData: caseStidies.projects
    };
  },

  methods: {
    openModal(seguro) {
      // Buscar el producto correspondiente en el JSON
      let productData = null;

      if (seguro.mapKey) {
        productData = this.productsData.find(p => p.heading === seguro.mapKey);
      } // Si no se encuentra, usar datos genéricos


      if (!productData) {
        productData = this.getGenericDescription(seguro);
      }

      this.selectedSeguro = { ...productData,
        name: seguro.name
      };
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
      this.selectedSeguro = {};
    },

    getGenericDescription(seguro) {
      const genericDescriptions = {
        'Accidentes': {
          heading: 'Accidentes',
          desc: 'Los seguros de accidentes te protegen ante cualquier eventualidad que pueda afectar tu integridad física, proporcionándote tranquilidad y seguridad financiera.',
          acordDesc: 'Este producto está diseñado para protegerte económicamente en caso de sufrir un accidente que te impida trabajar o realizar tus actividades normales.',
          acord1: 'Protección económica ante incapacidad temporal o permanente.',
          acord2: 'Cobertura de gastos médicos por accidente.',
          acord3: 'Indemnización por muerte accidental.',
          acord4: 'Asistencia médica inmediata.',
          acord5: 'Tranquilidad financiera para ti y tu familia.'
        },
        'Ciberseguridad para empresas': {
          heading: 'Ciberseguridad para empresas',
          desc: 'Los seguros de ciberseguridad protegen a tu empresa ante amenazas digitales, pérdida de datos y ataques cibernéticos que puedan comprometer tu información y operaciones.',
          acordDesc: 'Este producto está diseñado para proteger a tu empresa de los riesgos cibernéticos que pueden afectar tu negocio, incluyendo robo de información, ataques de malware, y violaciones de datos.',
          acord1: 'Protección contra ataques cibernéticos.',
          acord2: 'Cobertura por pérdida de datos.',
          acord3: 'Asistencia técnica especializada.',
          acord4: 'Protección de la reputación de tu empresa.',
          acord5: 'Tranquilidad en el entorno digital.'
        },
        'Retiro': {
          heading: 'Retiro',
          desc: 'Los seguros de retiro te permiten planificar tu futuro financiero, asegurando que tengas los recursos necesarios para disfrutar de tu jubilación con tranquilidad.',
          acordDesc: 'Este producto está diseñado para ayudarte a construir un patrimonio que te permita mantener tu nivel de vida durante tu retiro, ofreciendo diferentes esquemas de ahorro y protección.',
          acord1: 'Ahorro sistemático para tu retiro.',
          acord2: 'Protección financiera a largo plazo.',
          acord3: 'Diversificación de inversiones.',
          acord4: 'Beneficios fiscales.',
          acord5: 'Tranquilidad financiera para tu futuro.'
        }
      };
      return genericDescriptions[seguro.name] || {
        heading: seguro.name,
        desc: 'Información detallada sobre este producto de seguro disponible.',
        acordDesc: 'Este producto está diseñado para brindarte la protección que necesitas.'
      };
    }

  }
});
// CONCATENATED MODULE: ./components/sections/TiposSegurosSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_TiposSegurosSectionvue_type_script_lang_js_ = (TiposSegurosSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/TiposSegurosSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(143)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_TiposSegurosSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b94f18b",
  "651341f8"
  
)

/* harmony default export */ var TiposSegurosSection = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InsuranceModal: __webpack_require__(100).default})


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/About.vue?vue&type=template&id=b1a43664&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('HeaderAppointment'), _vm._ssrNode(" "), _c('PageHeader'), _vm._ssrNode(" "), _c('AboutUsHero'), _vm._ssrNode(" "), _c('CompañiasSegurosSection'), _vm._ssrNode(" "), _c('FormacionExperienciaSection'), _vm._ssrNode(" "), _c('DirectoresSection'), _vm._ssrNode(" "), _c('PremiosSection'), _vm._ssrNode(" "), _c('TiposSegurosSection'), _vm._ssrNode(" "), _c('Footer'), _vm._ssrNode(" "), _c('OffCanvasMobileMenu')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/About.vue?vue&type=template&id=b1a43664&

// EXTERNAL MODULE: ./components/HeaderAppointment.vue + 4 modules
var HeaderAppointment = __webpack_require__(53);

// EXTERNAL MODULE: ./components/PageHeader.vue + 4 modules
var PageHeader = __webpack_require__(159);

// EXTERNAL MODULE: ./components/sections/AboutUsHero.vue + 4 modules
var AboutUsHero = __webpack_require__(201);

// EXTERNAL MODULE: ./components/sections/FormacionExperienciaSection.vue + 4 modules
var FormacionExperienciaSection = __webpack_require__(202);

// EXTERNAL MODULE: ./components/sections/DirectoresSection.vue + 4 modules
var DirectoresSection = __webpack_require__(203);

// EXTERNAL MODULE: ./components/sections/PremiosSection.vue + 4 modules
var PremiosSection = __webpack_require__(204);

// EXTERNAL MODULE: ./components/sections/CompañiasSegurosSection.vue + 4 modules
var Compa_iasSegurosSection = __webpack_require__(205);

// EXTERNAL MODULE: ./components/sections/TiposSegurosSection.vue + 4 modules
var TiposSegurosSection = __webpack_require__(206);

// EXTERNAL MODULE: ./components/Footer.vue + 4 modules
var Footer = __webpack_require__(46);

// EXTERNAL MODULE: ./components/OffCanvasMobileMenu.vue + 4 modules
var OffCanvasMobileMenu = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/About.vue?vue&type=script&lang=js&










/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  name: 'about',
  components: {
    HeaderAppointment: HeaderAppointment["default"],
    PageHeader: PageHeader["default"],
    AboutUsHero: AboutUsHero["default"],
    FormacionExperienciaSection: FormacionExperienciaSection["default"],
    DirectoresSection: DirectoresSection["default"],
    PremiosSection: PremiosSection["default"],
    CompañiasSegurosSection: Compa_iasSegurosSection["default"],
    TiposSegurosSection: TiposSegurosSection["default"],
    Footer: Footer["default"],
    OffCanvasMobileMenu: OffCanvasMobileMenu["default"]
  },

  head() {
    return {
      title: 'Nosotros - IBS Consultores',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'IBS Consultores - Despacho integrado por profesionistas dedicados a la asesoría y consultoría en seguros y fianzas, así como la administración de riesgos desde 1998.'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/About.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "641090f4"
  
)

/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderAppointment: __webpack_require__(53).default,PageHeader: __webpack_require__(159).default,Footer: __webpack_require__(46).default,OffCanvasMobileMenu: __webpack_require__(47).default})


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

/***/ 66:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionTitle\":\"Conoce nuestros<span> productos</span>\",\"projects\":[{\"id\":1,\"image\":\"/images/projects/sedan.png\",\"imageBanner\":\"/images/bg/AUTOS.png\",\"heading\":\"Autos\",\"imageVideo\":\"/images/bg/auto.jpg\",\"desc\":\"Es un seguro que cubre el vehículo del propietario por los daños o hurto del automotor, así como por afectaciones aotras personas o a sus bienes, en casos de accidente de tránsito.\",\"youtube\":\"https://youtu.be/QSG8Psuawbk\",\"acordDesc\":\"Es un seguro que cubre al propietario de un vehículo por los daños o hurto del automotor, así como por afectaciones a otras personas o a sus bienes, en casos de accidente de tránsito. \",\"acord1\":\"No endeudarte ante una situación de accidente o pérdida total o parcial.\",\"acord2\":\"Asistencias legales, técnicas, entre otras dependiendo coberturas y productos.\",\"acord3\":\"Protección en la República Mexicana y en su caso en el extranjero.\",\"acord4\":\"Costos accesibles \",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":2,\"image\":\"/images/projects/medicos.png\",\"heading\":\"Gastos Médicos\",\"imageBanner\":\"/images/bg/GMM.png\",\"imageVideo\":\"/images/bg/GMMS.png\",\"desc\":\"Los seguros de gastos médicos que te ofrecemos están diseñados para enfrentar cualquier problema de salud, enfermedad o accidente, garantizando tu bienestar.\",\"youtube\":\"https://youtu.be/SyICKkdI9Fc\",\"acordDesc\":\"Este producto te da la protección financiera para hacer frente a los gastos generados por la atención médica originados de un accidente o enfermedad. \",\"acord1\":\"Estabilidad económica ante una enfermedad o accidente.\",\"acord2\":\"No endeudarte ante una situación de enfermedad o accidente.\",\"acord3\":\"Protección en la República Mexicana y en su caso en el extranjero.\",\"acord4\":\"Protección familiar.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":3,\"image\":\"/images/projects/vida.png\",\"imageBanner\":\"/images/bg/VIDAS.png\",\"heading\":\"Vida\",\"imageVideo\":\"/images/bg/vida.jpg\",\"acordDesc\":\"Este producto protege financieramente a tu familia y a otras personas que dependen de tus ingresos. Además, hay otros esquemas que te pueden ser de utilidad si lo que planeas es un ahorro para el retiro. \",\"desc\":\"Los seguros de vida que IBS Consultores tienen para ti están diseñados para salvaguardar y garantizar tu bienestar y el de tu familia a través de los años.\",\"youtube\":\"https://youtu.be/scn04w26kvk\",\"acord1\":\"Ahorro para la educación de tus hijos.\",\"acord2\":\"Ahorro para tu retiro.\",\"acord3\":\"Estabilidad económica ante una ausencia.\",\"acord4\":\"Control de finanzas personales.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":4,\"image\":\"/images/projects/viajes.png\",\"heading\":\"Viajes\",\"imageBanner\":\"/images/bg/VIAJE.png\",\"imageVideo\":\"/images/bg/viaje.jpg\",\"desc\":\"Los seguros de viaje que te ofrecemos están diseñados para afrontar cualquier inconveniente en tu viaje durante las 24 horas del día y los 365 días del año.\",\"acordDesc\":\"Este producto está diseñado para cubrirte durante viajes de duración limitada. Está dirigido a turistas que hagan viajes cortos al extranjero o dentro de la república, ofrece protección como cancelaciones, pérdida de equipaje, atención médica de emergencia, responsabilidad civil, repatriación, entre otros.\",\"youtube\":\"https://youtu.be/ySrh2Opx3Bk\",\"acord1\":\"Repatriación de restos\",\"acord2\":\"Protección de tu viaje.\",\"acord3\":\"Asistencias legales y responsabilidad civil.\",\"acord4\":\"Servicio médico de emergencia.\",\"acord5\":\"Protección en caso de pérdida de equipaje.\"},{\"id\":5,\"image\":\"/images/projects/hogar.png\",\"heading\":\"Hogar\",\"imageBanner\":\"/images/bg/HOGAR.png\",\"imageVideo\":\"/images/bg/hogar.jpg\",\"acordDesc\":\"Los seguros de hogar que te ofrecemos están diseñados a tu estilo de vida, ya sea que vivas solo, en pareja o si tienes hijos.\",\"desc\":\"Es un producto para proteger financieramente tu patrimonio como lo es tu hogar, si resulta dañada o destruida.\",\"youtube\":\"https://youtu.be/r4t-cbc8HZQ\",\"acord1\":\"No endeudarte ante una situación de accidente, robo o pérdida total o parcial.\",\"acord2\":\"Asistencias legales, técnicas, entre otras dependiendo coberturas y productos.\",\"acord3\":\"Responsabilidad Civil.\",\"acord4\":\"Protección de tu patrimonio.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":6,\"image\":\"/images/projects/empresarial.png\",\"heading\":\"Empresarial\",\"imageBanner\":\"/images/bg/EMPRESARIAL.png\",\"imageVideo\":\"/images/bg/empresarial.jpg\",\"acordDesc\":\"Producto que protege a tu empresa ante cualquier riesgo de la actividad empresarial.\",\"desc\":\"Producto que protege a tu empresa ante cualquier riesgo de peligro en la actividad empresarial.\",\"youtube\":\"https://youtu.be/G7LnmqA_jy8\",\"acord1\":\"Buena práctica de administración de riesgos.\",\"acord2\":\"Protección del patrimonio.\",\"acord3\":\"Control de gastos y finanzas.\",\"acord4\":\"Protección de tu negocio.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":7,\"image\":\"/images/projects/mascotas.png\",\"heading\":\"Mascotas\",\"imageBanner\":\"/images/bg/MASCOTAS.png\",\"imageVideo\":\"/images/bg/mascotas.jpg\",\"acordDesc\":\"Es un tipo de seguro de salud, orientado a mascotas y otros animales domésticos\",\"desc\":\"Es un tipo de seguro de salud, orientado a mascotas y otros animales domésticos.\",\"youtube\":\"https://youtu.be/dgKrUjfoKJw\",\"acord1\":\"Responsabilidad civil.\",\"acord2\":\"Enfermedades.\",\"acord3\":\"Accidentes.\",\"acord4\":\"Consultas veterinarias limitadas incluídas.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":9,\"image\":\"/images/projects/Flotillas.png\",\"heading\":\"Colectivos\",\"imageBanner\":\"/images/bg/COLECTIVOS.png\",\"imageVideo\":\"/images/bg/colectivos.jpg\",\"acordDesc\":\"Estos seguros tienen como finalidad el proteger el activo más importante de las empresas que son sus colaboradores, asimismo parte de su patrimonio. Estos seguros se pueden brindar como prestación o como descuento por nómina dependiendo de el caso y necesidad de la empresa. Los productos que manejamos son: Vida, Gastos funerarios, Gastos médicos, Gastos médicos menores, Accidentes, flotillas de automóviles, pick-up y camiones.\",\"desc\":\"Estos seguros tienen como finalidad el proteger el activo más importante de las empresas que son sus colaboradores.\",\"youtube\":\"https://youtu.be/SGPFxVdYy-w\",\"acord1\":\"Descuentos por volumen.\",\"acord2\":\"Coberturas diferentes a las de seguros individuales.\",\"acord3\":\"Convenios en hospitales.\",\"acord4\":\"Convenios en talleres mecánicos.\",\"acord5\":\"Control administrativo de riesgos.\"}],\"projectsTwo\":[{\"id\":1,\"image\":\"/images/features/case-study-image-01.png\",\"alt\":\"image\",\"heading\":\"Aqua Technology Case Studies\",\"category\":\"Cyber Security\",\"desc\":\"ARM Holdings is the world's leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day.\"},{\"id\":2,\"image\":\"/images/features/case-study-image-02.png\",\"alt\":\"image\",\"heading\":\"IBS Consultores\",\"category\":\"Information Technology\",\"desc\":\"ARM Holdings is the world's leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day.\"}],\"underHeading\":\"Suscríbete a nuesto boletín.\",\"link\":\"/\",\"caseStudies\":{\"bgImg\":\"/images/bg/single-case-study-bg-01.jpg\"}}");

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 96:
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Directorio de Aseguradoras\",\"subtitle\":\"Accede al portal de pago de tu aseguradora\",\"companies\":[{\"id\":1,\"name\":\"Afirme\",\"logo\":\"/images/brand/afirme.png\",\"paymentUrl\":\"https://www.afirmeseguros.com/clientes/#/recibos\",\"paymentText\":\"Portal de Pago\"},{\"id\":2,\"name\":\"Qualitas\",\"logo\":\"/images/brand/qualitas.png\",\"paymentUrl\":\"https://www.qualitas.com.mx/web/qmx/pago-de-poliza\",\"paymentText\":\"Portal de Pago\"},{\"id\":3,\"name\":\"AXA\",\"logo\":\"/images/brand/axa.png\",\"paymentUrl\":\"https://cajaaxa.mitec.com.mx/cua/inicio.do?method=loginAgente&perfil=cliente\",\"paymentText\":\"Portal de Pago\"},{\"id\":4,\"name\":\"Atlas\",\"logo\":\"/images/brand/atlas.png\",\"paymentUrl\":\"https://hyperion.segurosatlas.com.mx/Portales/Pages/General/PagoLinea2.aspx\",\"paymentText\":\"Portal de Pago\"},{\"id\":5,\"name\":\"MetLife\",\"logo\":\"/images/brand/metlife.png\",\"paymentUrl\":\"https://www.metlife.com.mx/tramites-y-servicios/paga-tu-poliza/\",\"paymentText\":\"Portal de Pago\"},{\"id\":6,\"name\":\"Zurich\",\"logo\":\"/images/brand/zurich.png\",\"paymentUrl\":\"https://miportal.zurich.com.mx/pagos/a \",\"paymentText\":\"Portal de Pago\"},{\"id\":7,\"name\":\"HDI\",\"logo\":\"/images/brand/hdi.png\",\"paymentUrl\":\" https://www.hdi.com.mx/atencion-a-clientes/pago-de-polizas/\",\"paymentText\":\"Portal de Pago\"},{\"id\":9,\"name\":\"ANA\",\"logo\":\"/images/brand/ana.png\",\"paymentUrl\":\"https://www.anaseguros.com.mx/\",\"paymentText\":\"Portal de Pago\"},{\"id\":11,\"name\":\"GNP\",\"logo\":\"/images/brand/gnp.png\",\"paymentUrl\":\"#\",\"paymentText\":\"Portal de Pago\"},{\"id\":12,\"name\":\"AIG\",\"logo\":\"/images/brand/aig.png\",\"paymentUrl\":\"https://www.aig.com.mx\",\"paymentText\":\"Portal de Pago\"},{\"id\":13,\"name\":\"Plan Seguro\",\"logo\":\"/images/brand/plan.png\",\"paymentUrl\":\"https://web.planseguro.com.mx:444/pagatupoliza/poliza\",\"paymentText\":\"Portal de Pago\"},{\"id\":14,\"name\":\"CHUBB\",\"logo\":\"/images/brand/chubb.png\",\"paymentUrl\":\"https://aba.chubb.com/pago-poliza \",\"paymentText\":\"Portal de Pago\"},{\"id\":15,\"name\":\"Seguros Monterrey\",\"logo\":\"/images/brand/mty.png\",\"paymentUrl\":\" https://www.smnyl-clientes.com.mx/pago-en-linea/ \",\"paymentText\":\"Portal de Pago\"},{\"id\":16,\"name\":\"GMX\",\"logo\":\"/images/brand/gmx.png\",\"paymentUrl\":\"https://ews.gmx.com.mx/CO-DIG/pagoenlinea.aspx \",\"paymentText\":\"Portal de Pago\"},{\"id\":17,\"name\":\"SURA\",\"logo\":\"/images/brand/sura.png\",\"paymentUrl\":\"https://web.planseguro.com.mx:444/pagatupoliza/poliza\",\"paymentText\":\"Portal de Pago\"},{\"id\":19,\"name\":\"Mapfre\",\"logo\":\"/images/brand/mafre.png\",\"paymentUrl\":\"https://zonaliados.mapfre.com.mx/cobranzaii/Gestion/Linea/LineaCBPublic.aspx?utm_source=homepage&utm_medium=banner \",\"paymentText\":\"Portal de Pago\"},{\"id\":20,\"name\":\"ARGOS\",\"logo\":\"/images/brand/argos.png\",\"paymentUrl\":\"https://www.segurosargos.com/sas2.0/cobros\",\"paymentText\":\"Portal de Pago\"},{\"id\":21,\"name\":\"Allianz\",\"logo\":\"/images/brand/allianz.png\",\"paymentUrl\":\"https://www.allianz.com.mx/servicios/tramites/pago-en-linea.html\",\"paymentText\":\"Portal de Pago\"},{\"id\":22,\"name\":\"Prevem\",\"logo\":\"/images/brand/prevem.png\",\"paymentUrl\":\"#\",\"paymentText\":\"Portal de Pago\"},{\"id\":22,\"name\":\"HIR\",\"logo\":\"/images/brand/hir.png\",\"paymentUrl\":\"#\",\"paymentText\":\"Portal de Pago\"}]}");

/***/ })

};;
//# sourceMappingURL=About.js.map