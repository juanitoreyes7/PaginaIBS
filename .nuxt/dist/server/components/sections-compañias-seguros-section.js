exports.ids = [72];
exports.modules = {

/***/ 115:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compa_iasSegurosSection_vue_vue_type_style_index_0_id_3da6e60c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compa_iasSegurosSection_vue_vue_type_style_index_0_id_3da6e60c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compa_iasSegurosSection_vue_vue_type_style_index_0_id_3da6e60c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compa_iasSegurosSection_vue_vue_type_style_index_0_id_3da6e60c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compa_iasSegurosSection_vue_vue_type_style_index_0_id_3da6e60c_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ 96:
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Directorio de Aseguradoras\",\"subtitle\":\"Accede al portal de pago de tu aseguradora\",\"companies\":[{\"id\":1,\"name\":\"Afirme\",\"logo\":\"/images/brand/afirme.png\",\"paymentUrl\":\"https://www.afirmeseguros.com/clientes/#/recibos\",\"paymentText\":\"Portal de Pago\"},{\"id\":2,\"name\":\"Qualitas\",\"logo\":\"/images/brand/qualitas.png\",\"paymentUrl\":\"https://www.qualitas.com.mx/web/qmx/pago-de-poliza\",\"paymentText\":\"Portal de Pago\"},{\"id\":3,\"name\":\"AXA\",\"logo\":\"/images/brand/axa.png\",\"paymentUrl\":\"https://cajaaxa.mitec.com.mx/cua/inicio.do?method=loginAgente&perfil=cliente\",\"paymentText\":\"Portal de Pago\"},{\"id\":4,\"name\":\"Atlas\",\"logo\":\"/images/brand/atlas.png\",\"paymentUrl\":\"https://hyperion.segurosatlas.com.mx/Portales/Pages/General/PagoLinea2.aspx\",\"paymentText\":\"Portal de Pago\"},{\"id\":5,\"name\":\"MetLife\",\"logo\":\"/images/brand/metlife.png\",\"paymentUrl\":\"https://www.metlife.com.mx/tramites-y-servicios/paga-tu-poliza/\",\"paymentText\":\"Portal de Pago\"},{\"id\":6,\"name\":\"Zurich\",\"logo\":\"/images/brand/zurich.png\",\"paymentUrl\":\"https://miportal.zurich.com.mx/pagos/a \",\"paymentText\":\"Portal de Pago\"},{\"id\":7,\"name\":\"HDI\",\"logo\":\"/images/brand/hdi.png\",\"paymentUrl\":\" https://www.hdi.com.mx/atencion-a-clientes/pago-de-polizas/\",\"paymentText\":\"Portal de Pago\"},{\"id\":9,\"name\":\"ANA\",\"logo\":\"/images/brand/ana.png\",\"paymentUrl\":\"https://www.anaseguros.com.mx/\",\"paymentText\":\"Portal de Pago\"},{\"id\":11,\"name\":\"GNP\",\"logo\":\"/images/brand/gnp.png\",\"paymentUrl\":\"#\",\"paymentText\":\"Portal de Pago\"},{\"id\":12,\"name\":\"AIG\",\"logo\":\"/images/brand/aig.png\",\"paymentUrl\":\"https://www.aig.com.mx\",\"paymentText\":\"Portal de Pago\"},{\"id\":13,\"name\":\"Plan Seguro\",\"logo\":\"/images/brand/plan.png\",\"paymentUrl\":\"https://web.planseguro.com.mx:444/pagatupoliza/poliza\",\"paymentText\":\"Portal de Pago\"},{\"id\":14,\"name\":\"CHUBB\",\"logo\":\"/images/brand/chubb.png\",\"paymentUrl\":\"https://aba.chubb.com/pago-poliza \",\"paymentText\":\"Portal de Pago\"},{\"id\":15,\"name\":\"Seguros Monterrey\",\"logo\":\"/images/brand/mty.png\",\"paymentUrl\":\" https://www.smnyl-clientes.com.mx/pago-en-linea/ \",\"paymentText\":\"Portal de Pago\"},{\"id\":16,\"name\":\"GMX\",\"logo\":\"/images/brand/gmx.png\",\"paymentUrl\":\"https://ews.gmx.com.mx/CO-DIG/pagoenlinea.aspx \",\"paymentText\":\"Portal de Pago\"},{\"id\":17,\"name\":\"SURA\",\"logo\":\"/images/brand/sura.png\",\"paymentUrl\":\"https://web.planseguro.com.mx:444/pagatupoliza/poliza\",\"paymentText\":\"Portal de Pago\"},{\"id\":19,\"name\":\"Mapfre\",\"logo\":\"/images/brand/mafre.png\",\"paymentUrl\":\"https://zonaliados.mapfre.com.mx/cobranzaii/Gestion/Linea/LineaCBPublic.aspx?utm_source=homepage&utm_medium=banner \",\"paymentText\":\"Portal de Pago\"},{\"id\":20,\"name\":\"ARGOS\",\"logo\":\"/images/brand/argos.png\",\"paymentUrl\":\"https://www.segurosargos.com/sas2.0/cobros\",\"paymentText\":\"Portal de Pago\"},{\"id\":21,\"name\":\"Allianz\",\"logo\":\"/images/brand/allianz.png\",\"paymentUrl\":\"https://www.allianz.com.mx/servicios/tramites/pago-en-linea.html\",\"paymentText\":\"Portal de Pago\"},{\"id\":22,\"name\":\"Prevem\",\"logo\":\"/images/brand/prevem.png\",\"paymentUrl\":\"#\",\"paymentText\":\"Portal de Pago\"},{\"id\":22,\"name\":\"HIR\",\"logo\":\"/images/brand/hir.png\",\"paymentUrl\":\"#\",\"paymentText\":\"Portal de Pago\"}]}");

/***/ })

};;
//# sourceMappingURL=sections-compañias-seguros-section.js.map