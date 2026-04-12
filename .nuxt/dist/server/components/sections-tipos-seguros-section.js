exports.ids = [109,48];
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

/***/ 117:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiposSegurosSection_vue_vue_type_style_index_0_id_4b94f18b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiposSegurosSection_vue_vue_type_style_index_0_id_4b94f18b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiposSegurosSection_vue_vue_type_style_index_0_id_4b94f18b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiposSegurosSection_vue_vue_type_style_index_0_id_4b94f18b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TiposSegurosSection_vue_vue_type_style_index_0_id_4b94f18b_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ 66:
/***/ (function(module) {

module.exports = JSON.parse("{\"sectionTitle\":\"Conoce nuestros<span> productos</span>\",\"projects\":[{\"id\":1,\"image\":\"/images/projects/sedan.png\",\"imageBanner\":\"/images/bg/AUTOS.png\",\"heading\":\"Autos\",\"imageVideo\":\"/images/bg/auto.jpg\",\"desc\":\"Es un seguro que cubre el vehículo del propietario por los daños o hurto del automotor, así como por afectaciones aotras personas o a sus bienes, en casos de accidente de tránsito.\",\"youtube\":\"https://youtu.be/QSG8Psuawbk\",\"acordDesc\":\"Es un seguro que cubre al propietario de un vehículo por los daños o hurto del automotor, así como por afectaciones a otras personas o a sus bienes, en casos de accidente de tránsito. \",\"acord1\":\"No endeudarte ante una situación de accidente o pérdida total o parcial.\",\"acord2\":\"Asistencias legales, técnicas, entre otras dependiendo coberturas y productos.\",\"acord3\":\"Protección en la República Mexicana y en su caso en el extranjero.\",\"acord4\":\"Costos accesibles \",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":2,\"image\":\"/images/projects/medicos.png\",\"heading\":\"Gastos Médicos\",\"imageBanner\":\"/images/bg/GMM.png\",\"imageVideo\":\"/images/bg/GMMS.png\",\"desc\":\"Los seguros de gastos médicos que te ofrecemos están diseñados para enfrentar cualquier problema de salud, enfermedad o accidente, garantizando tu bienestar.\",\"youtube\":\"https://youtu.be/SyICKkdI9Fc\",\"acordDesc\":\"Este producto te da la protección financiera para hacer frente a los gastos generados por la atención médica originados de un accidente o enfermedad. \",\"acord1\":\"Estabilidad económica ante una enfermedad o accidente.\",\"acord2\":\"No endeudarte ante una situación de enfermedad o accidente.\",\"acord3\":\"Protección en la República Mexicana y en su caso en el extranjero.\",\"acord4\":\"Protección familiar.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":3,\"image\":\"/images/projects/vida.png\",\"imageBanner\":\"/images/bg/VIDAS.png\",\"heading\":\"Vida\",\"imageVideo\":\"/images/bg/vida.jpg\",\"acordDesc\":\"Este producto protege financieramente a tu familia y a otras personas que dependen de tus ingresos. Además, hay otros esquemas que te pueden ser de utilidad si lo que planeas es un ahorro para el retiro. \",\"desc\":\"Los seguros de vida que IBS Consultores tienen para ti están diseñados para salvaguardar y garantizar tu bienestar y el de tu familia a través de los años.\",\"youtube\":\"https://youtu.be/scn04w26kvk\",\"acord1\":\"Ahorro para la educación de tus hijos.\",\"acord2\":\"Ahorro para tu retiro.\",\"acord3\":\"Estabilidad económica ante una ausencia.\",\"acord4\":\"Control de finanzas personales.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":4,\"image\":\"/images/projects/viajes.png\",\"heading\":\"Viajes\",\"imageBanner\":\"/images/bg/VIAJE.png\",\"imageVideo\":\"/images/bg/viaje.jpg\",\"desc\":\"Los seguros de viaje que te ofrecemos están diseñados para afrontar cualquier inconveniente en tu viaje durante las 24 horas del día y los 365 días del año.\",\"acordDesc\":\"Este producto está diseñado para cubrirte durante viajes de duración limitada. Está dirigido a turistas que hagan viajes cortos al extranjero o dentro de la república, ofrece protección como cancelaciones, pérdida de equipaje, atención médica de emergencia, responsabilidad civil, repatriación, entre otros.\",\"youtube\":\"https://youtu.be/ySrh2Opx3Bk\",\"acord1\":\"Repatriación de restos\",\"acord2\":\"Protección de tu viaje.\",\"acord3\":\"Asistencias legales y responsabilidad civil.\",\"acord4\":\"Servicio médico de emergencia.\",\"acord5\":\"Protección en caso de pérdida de equipaje.\"},{\"id\":5,\"image\":\"/images/projects/hogar.png\",\"heading\":\"Hogar\",\"imageBanner\":\"/images/bg/HOGAR.png\",\"imageVideo\":\"/images/bg/hogar.jpg\",\"acordDesc\":\"Los seguros de hogar que te ofrecemos están diseñados a tu estilo de vida, ya sea que vivas solo, en pareja o si tienes hijos.\",\"desc\":\"Es un producto para proteger financieramente tu patrimonio como lo es tu hogar, si resulta dañada o destruida.\",\"youtube\":\"https://youtu.be/r4t-cbc8HZQ\",\"acord1\":\"No endeudarte ante una situación de accidente, robo o pérdida total o parcial.\",\"acord2\":\"Asistencias legales, técnicas, entre otras dependiendo coberturas y productos.\",\"acord3\":\"Responsabilidad Civil.\",\"acord4\":\"Protección de tu patrimonio.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":6,\"image\":\"/images/projects/empresarial.png\",\"heading\":\"Empresarial\",\"imageBanner\":\"/images/bg/EMPRESARIAL.png\",\"imageVideo\":\"/images/bg/empresarial.jpg\",\"acordDesc\":\"Producto que protege a tu empresa ante cualquier riesgo de la actividad empresarial.\",\"desc\":\"Producto que protege a tu empresa ante cualquier riesgo de peligro en la actividad empresarial.\",\"youtube\":\"https://youtu.be/G7LnmqA_jy8\",\"acord1\":\"Buena práctica de administración de riesgos.\",\"acord2\":\"Protección del patrimonio.\",\"acord3\":\"Control de gastos y finanzas.\",\"acord4\":\"Protección de tu negocio.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":7,\"image\":\"/images/projects/mascotas.png\",\"heading\":\"Mascotas\",\"imageBanner\":\"/images/bg/MASCOTAS.png\",\"imageVideo\":\"/images/bg/mascotas.jpg\",\"acordDesc\":\"Es un tipo de seguro de salud, orientado a mascotas y otros animales domésticos\",\"desc\":\"Es un tipo de seguro de salud, orientado a mascotas y otros animales domésticos.\",\"youtube\":\"https://youtu.be/dgKrUjfoKJw\",\"acord1\":\"Responsabilidad civil.\",\"acord2\":\"Enfermedades.\",\"acord3\":\"Accidentes.\",\"acord4\":\"Consultas veterinarias limitadas incluídas.\",\"acord5\":\"Tranquilidad financiera.\"},{\"id\":9,\"image\":\"/images/projects/Flotillas.png\",\"heading\":\"Colectivos\",\"imageBanner\":\"/images/bg/COLECTIVOS.png\",\"imageVideo\":\"/images/bg/colectivos.jpg\",\"acordDesc\":\"Estos seguros tienen como finalidad el proteger el activo más importante de las empresas que son sus colaboradores, asimismo parte de su patrimonio. Estos seguros se pueden brindar como prestación o como descuento por nómina dependiendo de el caso y necesidad de la empresa. Los productos que manejamos son: Vida, Gastos funerarios, Gastos médicos, Gastos médicos menores, Accidentes, flotillas de automóviles, pick-up y camiones.\",\"desc\":\"Estos seguros tienen como finalidad el proteger el activo más importante de las empresas que son sus colaboradores.\",\"youtube\":\"https://youtu.be/SGPFxVdYy-w\",\"acord1\":\"Descuentos por volumen.\",\"acord2\":\"Coberturas diferentes a las de seguros individuales.\",\"acord3\":\"Convenios en hospitales.\",\"acord4\":\"Convenios en talleres mecánicos.\",\"acord5\":\"Control administrativo de riesgos.\"}],\"projectsTwo\":[{\"id\":1,\"image\":\"/images/features/case-study-image-01.png\",\"alt\":\"image\",\"heading\":\"Aqua Technology Case Studies\",\"category\":\"Cyber Security\",\"desc\":\"ARM Holdings is the world's leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day.\"},{\"id\":2,\"image\":\"/images/features/case-study-image-02.png\",\"alt\":\"image\",\"heading\":\"IBS Consultores\",\"category\":\"Information Technology\",\"desc\":\"ARM Holdings is the world's leading semiconductor Intellectual Property (IP) supplier. A semiconductor is the electronic controller at the heart of many devices that we use every day.\"}],\"underHeading\":\"Suscríbete a nuesto boletín.\",\"link\":\"/\",\"caseStudies\":{\"bgImg\":\"/images/bg/single-case-study-bg-01.jpg\"}}");

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
//# sourceMappingURL=sections-tipos-seguros-section.js.map