exports.ids = [48];
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

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceModal_vue_vue_type_style_index_0_id_3e666499_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceModal_vue_vue_type_style_index_0_id_3e666499_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceModal_vue_vue_type_style_index_0_id_3e666499_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceModal_vue_vue_type_style_index_0_id_3e666499_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceModal_vue_vue_type_style_index_0_id_3e666499_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
//# sourceMappingURL=insurance-modal.js.map