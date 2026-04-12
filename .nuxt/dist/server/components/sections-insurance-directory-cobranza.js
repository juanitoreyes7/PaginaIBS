exports.ids = [92];
exports.modules = {

/***/ 121:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceDirectoryCobranza_vue_vue_type_style_index_0_id_93600fbe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceDirectoryCobranza_vue_vue_type_style_index_0_id_93600fbe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceDirectoryCobranza_vue_vue_type_style_index_0_id_93600fbe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceDirectoryCobranza_vue_vue_type_style_index_0_id_93600fbe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InsuranceDirectoryCobranza_vue_vue_type_style_index_0_id_93600fbe_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/InsuranceDirectoryCobranza.vue?vue&type=template&id=93600fbe&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "insurance-directory section-space--ptb_100"
  }, [_vm._ssrNode("<div class=\"container\" data-v-93600fbe><div class=\"row\" data-v-93600fbe><div class=\"col-lg-12\" data-v-93600fbe><div class=\"directory-header text-center section-space--mb_60\" data-v-93600fbe><h2 class=\"directory-title\" data-v-93600fbe>" + _vm._ssrEscape(_vm._s(_vm.data.title)) + "</h2> <p class=\"directory-subtitle\" data-v-93600fbe>" + _vm._ssrEscape(_vm._s(_vm.data.subtitle)) + "</p></div></div></div> <div class=\"row\" data-v-93600fbe>" + _vm._ssrList(_vm.data.companies, function (company) {
    return "<div class=\"col-lg-3 col-md-4 col-sm-6\" data-v-93600fbe><div class=\"insurance-company-card\" data-v-93600fbe><div class=\"company-logo-wrapper\" data-v-93600fbe><img" + _vm._ssrAttr("src", company.logo) + _vm._ssrAttr("alt", company.name) + " class=\"company-logo\" data-v-93600fbe></div> <div class=\"company-info\" data-v-93600fbe><h4 class=\"company-name\" data-v-93600fbe>" + _vm._ssrEscape(_vm._s(company.name)) + "</h4> <div class=\"company-payment-link\" data-v-93600fbe><a" + _vm._ssrAttr("href", company.paymentUrl) + " target=\"_blank\"" + _vm._ssrClass("payment-btn", {
      'disabled-link': company.paymentUrl === '#'
    }) + " data-v-93600fbe><i class=\"fas fa-external-link-alt link-icon\" data-v-93600fbe></i> <span data-v-93600fbe>" + _vm._ssrEscape(_vm._s(company.paymentText)) + "</span></a></div></div></div></div>";
  }) + "</div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/InsuranceDirectoryCobranza.vue?vue&type=template&id=93600fbe&scoped=true&

// EXTERNAL MODULE: ./data/cobranzaDirectory.json
var cobranzaDirectory = __webpack_require__(96);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/InsuranceDirectoryCobranza.vue?vue&type=script&lang=js&

/* harmony default export */ var InsuranceDirectoryCobranzavue_type_script_lang_js_ = ({
  name: 'InsuranceDirectoryCobranza',

  data() {
    return {
      data: cobranzaDirectory
    };
  },

  methods: {
    handleImageError(event) {
      const companyName = event.target.alt;
      event.target.style.display = 'none';
      const parent = event.target.parentElement;

      if (parent && !parent.querySelector('.logo-placeholder')) {
        const placeholder = document.createElement('div');
        placeholder.className = 'logo-placeholder';
        placeholder.innerHTML = `<span>${companyName.charAt(0)}</span>`;
        parent.appendChild(placeholder);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/sections/InsuranceDirectoryCobranza.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_InsuranceDirectoryCobranzavue_type_script_lang_js_ = (InsuranceDirectoryCobranzavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/InsuranceDirectoryCobranza.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(146)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_InsuranceDirectoryCobranzavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "93600fbe",
  "624d38a9"
  
)

/* harmony default export */ var InsuranceDirectoryCobranza = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Directorio de Aseguradoras\",\"subtitle\":\"Accede al portal de pago de tu aseguradora\",\"companies\":[{\"id\":1,\"name\":\"Afirme\",\"logo\":\"/images/brand/afirme.png\",\"paymentUrl\":\"https://www.afirmeseguros.com/clientes/#/recibos\",\"paymentText\":\"Portal de Pago\"},{\"id\":2,\"name\":\"Qualitas\",\"logo\":\"/images/brand/qualitas.png\",\"paymentUrl\":\"https://www.qualitas.com.mx/web/qmx/pago-de-poliza\",\"paymentText\":\"Portal de Pago\"},{\"id\":3,\"name\":\"AXA\",\"logo\":\"/images/brand/axa.png\",\"paymentUrl\":\"https://cajaaxa.mitec.com.mx/cua/inicio.do?method=loginAgente&perfil=cliente\",\"paymentText\":\"Portal de Pago\"},{\"id\":4,\"name\":\"Atlas\",\"logo\":\"/images/brand/atlas.png\",\"paymentUrl\":\"https://hyperion.segurosatlas.com.mx/Portales/Pages/General/PagoLinea2.aspx\",\"paymentText\":\"Portal de Pago\"},{\"id\":5,\"name\":\"MetLife\",\"logo\":\"/images/brand/metlife.png\",\"paymentUrl\":\"https://www.metlife.com.mx/tramites-y-servicios/paga-tu-poliza/\",\"paymentText\":\"Portal de Pago\"},{\"id\":6,\"name\":\"Zurich\",\"logo\":\"/images/brand/zurich.png\",\"paymentUrl\":\"https://miportal.zurich.com.mx/pagos/a \",\"paymentText\":\"Portal de Pago\"},{\"id\":7,\"name\":\"HDI\",\"logo\":\"/images/brand/hdi.png\",\"paymentUrl\":\" https://www.hdi.com.mx/atencion-a-clientes/pago-de-polizas/\",\"paymentText\":\"Portal de Pago\"},{\"id\":9,\"name\":\"ANA\",\"logo\":\"/images/brand/ana.png\",\"paymentUrl\":\"https://www.anaseguros.com.mx/\",\"paymentText\":\"Portal de Pago\"},{\"id\":11,\"name\":\"GNP\",\"logo\":\"/images/brand/gnp.png\",\"paymentUrl\":\"#\",\"paymentText\":\"Portal de Pago\"},{\"id\":12,\"name\":\"AIG\",\"logo\":\"/images/brand/aig.png\",\"paymentUrl\":\"https://www.aig.com.mx\",\"paymentText\":\"Portal de Pago\"},{\"id\":13,\"name\":\"Plan Seguro\",\"logo\":\"/images/brand/plan.png\",\"paymentUrl\":\"https://web.planseguro.com.mx:444/pagatupoliza/poliza\",\"paymentText\":\"Portal de Pago\"},{\"id\":14,\"name\":\"CHUBB\",\"logo\":\"/images/brand/chubb.png\",\"paymentUrl\":\"https://aba.chubb.com/pago-poliza \",\"paymentText\":\"Portal de Pago\"},{\"id\":15,\"name\":\"Seguros Monterrey\",\"logo\":\"/images/brand/mty.png\",\"paymentUrl\":\" https://www.smnyl-clientes.com.mx/pago-en-linea/ \",\"paymentText\":\"Portal de Pago\"},{\"id\":16,\"name\":\"GMX\",\"logo\":\"/images/brand/gmx.png\",\"paymentUrl\":\"https://ews.gmx.com.mx/CO-DIG/pagoenlinea.aspx \",\"paymentText\":\"Portal de Pago\"},{\"id\":17,\"name\":\"SURA\",\"logo\":\"/images/brand/sura.png\",\"paymentUrl\":\"https://web.planseguro.com.mx:444/pagatupoliza/poliza\",\"paymentText\":\"Portal de Pago\"},{\"id\":19,\"name\":\"Mapfre\",\"logo\":\"/images/brand/mafre.png\",\"paymentUrl\":\"https://zonaliados.mapfre.com.mx/cobranzaii/Gestion/Linea/LineaCBPublic.aspx?utm_source=homepage&utm_medium=banner \",\"paymentText\":\"Portal de Pago\"},{\"id\":20,\"name\":\"ARGOS\",\"logo\":\"/images/brand/argos.png\",\"paymentUrl\":\"https://www.segurosargos.com/sas2.0/cobros\",\"paymentText\":\"Portal de Pago\"},{\"id\":21,\"name\":\"Allianz\",\"logo\":\"/images/brand/allianz.png\",\"paymentUrl\":\"https://www.allianz.com.mx/servicios/tramites/pago-en-linea.html\",\"paymentText\":\"Portal de Pago\"},{\"id\":22,\"name\":\"Prevem\",\"logo\":\"/images/brand/prevem.png\",\"paymentUrl\":\"#\",\"paymentText\":\"Portal de Pago\"},{\"id\":22,\"name\":\"HIR\",\"logo\":\"/images/brand/hir.png\",\"paymentUrl\":\"#\",\"paymentText\":\"Portal de Pago\"}]}");

/***/ })

};;
//# sourceMappingURL=sections-insurance-directory-cobranza.js.map