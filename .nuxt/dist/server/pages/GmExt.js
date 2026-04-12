exports.ids = [128,10,26,27,29,30,35,49,50,51,78];
exports.modules = {

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/CotizaGmExt.vue?vue&type=template&id=5c5dd512&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_vm._ssrNode("<div class=\"contact-us-section-wrappaer section-space--pt_100 section-space--pb_70\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-12 col-lg-12\"><div class=\"conact-us-wrap-one mb-30\"><h3 class=\"heading\">\n                            ¡Pide tu cotización <span class=\"text-color-primary\"> ahora mismo! </span></h3> <div class=\"sub-heading\"><br>Para darte una mejor asesoría de acuerdo a tus necesidades, favor de contestar las\n                            siguientes preguntas.\n                        </div></div></div> <div class=\"col-lg-12 col-lg-12\"><div class=\"contact-form-wrap\"><form id=\"contact-form\"><div class=\"contact-form\"><div class=\"contact-inner\">\n                                    ¿Cuál es tu nombre completo?\n                                    <input name=\"nombreCli\" type=\"text\"></div> <br> <div class=\"contact-input\"><div class=\"contact-inner\">\n                                        ¿Cuál es tu correo electrónico?\n                                        <input name=\"email\" type=\"email\"></div> <div class=\"contact-inner contact-message\">\n                                        Teléfono de contacto\n                                        <input name=\"telefono\"></div></div> <br> <div class=\"contact-input\"><div class=\"contact-inner\">\n                                        ¿Cuál es tu género?\n                                        <select name=\"genero\" aria-label=\"Default select example\" class=\"form-select\"><option selected=\"selected\">Selecciona una opción</option> <option value=\"femenino\">Femenino</option> <option value=\"masculino\">Masculino</option></select></div> <div class=\"contact-inner contact-message\">\n                                        ¿Cual es tu edad?\n                                        <select name=\"tienenE\" aria-label=\"Default select example\" class=\"form-select\"><option selected=\"selected\">Selecciona una opcion</option> <option value=\"0\">0</option> <option value=\"1\">1</option> <option value=\"2\">2</option> <option value=\"3\">3</option> <option value=\"4\">4</option> <option value=\"5\">5</option> <option value=\"6\">6</option> <option value=\"7\">7</option> <option value=\"8\">8</option> <option value=\"9\">9</option> <option value=\"10\">10</option> <option value=\"11\">11</option> <option value=\"12\">12</option> <option value=\"13\">13</option> <option value=\"14\">14</option> <option value=\"15\">15</option> <option value=\"16\">16</option> <option value=\"17\">17</option> <option value=\"18\">18</option> <option value=\"19\">19</option> <option value=\"20\">20</option> <option value=\"21\">21</option> <option value=\"22\">22</option> <option value=\"23\">23</option> <option value=\"24\">24</option> <option value=\"25\">25</option> <option value=\"26\">26</option> <option value=\"27\">27</option> <option value=\"28\">28</option> <option value=\"29\">29</option> <option value=\"30\">30</option> <option value=\"31\">31</option> <option value=\"32\">32</option> <option value=\"33\">33</option> <option value=\"34\">34</option> <option value=\"35\">35</option> <option value=\"36\">36</option> <option value=\"37\">37</option> <option value=\"38\">38</option> <option value=\"39\">39</option> <option value=\"40\">40</option> <option value=\"41\">41</option> <option value=\"42\">42</option> <option value=\"43\">43</option> <option value=\"44\">44</option> <option value=\"45\">45</option> <option value=\"46\">46</option> <option value=\"47\">47</option> <option value=\"48\">48</option> <option value=\"49\">49</option> <option value=\"50\">50</option> <option value=\"51\">51</option> <option value=\"52\">52</option> <option value=\"53\">53</option> <option value=\"54\">54</option> <option value=\"55\">55</option> <option value=\"56\">56</option> <option value=\"57\">57</option> <option value=\"58\">58</option> <option value=\"59\">59</option> <option value=\"60\">60</option> <option value=\"61\">61</option> <option value=\"62\">62</option> <option value=\"63\">63</option> <option value=\"64\">64</option></select></div></div> <br> <div class=\"contact-input\"><div class=\"contact-inner contact-message\">\n                                        ¿Tipo de conversión?\n                                        <select name=\"tienenE\" aria-label=\"Default select example\" class=\"form-select\"><option selected=\"selected\">Selecciona una opcion</option> <option value=\"2,000,000.00\">2,000,000.00</option> <option value=\"5,000,000.00\">5,000,000.00</option></select></div> <div class=\"contact-inner contact-message\"><div class=\"submit-btn mt-20\"><button type=\"button\" class=\"btn btn-info bx bxs-edit\">Tabla de tabulación</button></div></div></div></div> <div class=\"contact-input\"><div class=\"contact-inner contact-message\"><div class=\"submit-btn mt-20\"><button type=\"submit\" class=\"ht-btn ht-btn-md\">Cotizar</button></div></div></div></form></div></div></div></div></div> "), _c('b-modal', {
    attrs: {
      "size": "xl",
      "title": "Tabulación"
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function () {
        return [_c('b-button', {
          attrs: {
            "variant": "secondary"
          },
          on: {
            "click": function ($event) {
              _vm.modalTabulacion = false;
            }
          }
        }, [_vm._v("Cerrar")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.modalTabulacion,
      callback: function ($$v) {
        _vm.modalTabulacion = $$v;
      },
      expression: "modalTabulacion"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('h5', [_c('b', [_vm._v("Sumas aseguradas:")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Suma:")]), _vm._v(" $ 170,000,000.00 ")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Deducible:")]), _vm._v(" $ 18,000.00")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Coaseguro:")]), _vm._v(" 10%")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Gama:")]), _vm._v(" Esmeralda")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-12"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Periodo:")]), _vm._v(" 100 Años")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-12"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Tabulador:")]), _vm._v(" CAOBA")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('h5', [_c('b', [_vm._v("Coberturas adicionales: ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Medicamentos fuera de hospital")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Cobertura en el extrajero ECE")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Preexistencias")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Complicaciones de GMM")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Deducible cero")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Conversion garantizada")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Servicios de asistencia")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Cliente distinguido")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_c('b', [_vm._v("Cobertura nacional")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('blockquote', {
    staticClass: "blockquote text-center"
  }, [_c('p', {
    staticClass: "mb-0"
  }, [_vm._v("De acuerdo con tu edad que tienes 18 años puedes contratar tu poliza por $2,000.00\n                    ")]), _vm._v(" "), _c('footer', {
    staticClass: "blockquote-footer"
  }, [_vm._v("Sa clic en solicitar "), _c('cite', {
    attrs: {
      "title": "Source Title"
    }
  }, [_vm._v("y en breve un\n                            acesor\n                            estara contactandote.")]), _vm._v(" "), _c('div', {
    staticClass: "contact-inner contact-message"
  }, [_c('div', {
    staticClass: "submit-btn mt-20"
  }, [_c('button', {
    staticClass: "ht-btn ht-btn-md",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Cotizar")])])])])])])]), _vm._v(" "), _c('br')])], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/sections/CotizaGmExt.vue?vue&type=template&id=5c5dd512&

// EXTERNAL MODULE: external "@emailjs/browser"
var browser_ = __webpack_require__(34);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_);

// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(35);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);

// EXTERNAL MODULE: external "vue-multiselect"
var external_vue_multiselect_ = __webpack_require__(36);
var external_vue_multiselect_default = /*#__PURE__*/__webpack_require__.n(external_vue_multiselect_);

// EXTERNAL MODULE: external "vue2-datepicker"
var external_vue2_datepicker_ = __webpack_require__(37);
var external_vue2_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_vue2_datepicker_);

// EXTERNAL MODULE: ./node_modules/vue2-datepicker/index.css
var vue2_datepicker = __webpack_require__(83);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/sections/CotizaGmExt.vue?vue&type=script&lang=js&





/* harmony default export */ var CotizaGmExtvue_type_script_lang_js_ = ({
  components: {
    DatePicker: external_vue2_datepicker_default.a,
    Multiselect: external_vue_multiselect_default.a
  },

  data() {
    return {
      modalTabulacion: false,
      dataFecha: {
        fechaN: ""
      },
      decision1: {
        edad1: "0",
        edad2: "2"
      },
      decision2: ["Si", "No"],
      genero: ["Femenino", "Masculino"]
    };
  },

  methods: {
    sendEmail() {
      browser_default.a.sendForm('service_o10ni4h', 'template_lo78jmh', this.$refs.form, '9dXIW13fiQT0eCgk5').then(() => {
        location.href = "/contact/";
      }).catch(error => {
        alert(error);
      });
      external_sweetalert2_default.a.fire({
        icon: "success",
        title: "En un momento un asesor se comunicara contigo.",
        showConfirmButton: false,
        timer: 1500
      });
    }

  }
});
// CONCATENATED MODULE: ./components/sections/CotizaGmExt.vue?vue&type=script&lang=js&
 /* harmony default export */ var sections_CotizaGmExtvue_type_script_lang_js_ = (CotizaGmExtvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/sections/CotizaGmExt.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sections_CotizaGmExtvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "52128a5d"
  
)

/* harmony default export */ var CotizaGmExt = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(46).default})


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/GmExt.vue?vue&type=template&id=36996bb3&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-container"
  }, [_c('Breadcrumbs2', {
    attrs: {
      "items": _vm.breadcrumbNavigation,
      "breadcrumbTitle": "Cotización Vida"
    }
  }), _vm._ssrNode(" "), _c('CotizaGmExt'), _vm._ssrNode(" "), _c('OffCanvasMobileMenu')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/GmExt.vue?vue&type=template&id=36996bb3&

// EXTERNAL MODULE: ./components/HeaderAppointment.vue + 4 modules
var HeaderAppointment = __webpack_require__(53);

// EXTERNAL MODULE: ./components/Breadcrumbs2.vue + 4 modules
var Breadcrumbs2 = __webpack_require__(63);

// EXTERNAL MODULE: ./components/sections/CotizaGmExt.vue + 4 modules
var CotizaGmExt = __webpack_require__(215);

// EXTERNAL MODULE: ./components/OffCanvasMobileMenu.vue + 4 modules
var OffCanvasMobileMenu = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/GmExt.vue?vue&type=script&lang=js&




/* harmony default export */ var GmExtvue_type_script_lang_js_ = ({
  name: 'contact',
  components: {
    HeaderAppointment: HeaderAppointment["default"],
    Breadcrumbs2: Breadcrumbs2["default"],
    CotizaGmExt: CotizaGmExt["default"],
    OffCanvasMobileMenu: OffCanvasMobileMenu["default"]
  },

  head() {
    return {
      title: 'Contact Us'
    };
  },

  data() {
    return {
      breadcrumbNavigation: [{
        text: 'Home',
        to: "/"
      }, {
        text: 'Contact Us',
        active: true
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/GmExt.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_GmExtvue_type_script_lang_js_ = (GmExtvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/GmExt.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_GmExtvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a89e2c7c"
  
)

/* harmony default export */ var GmExt = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Breadcrumbs2: __webpack_require__(63).default,OffCanvasMobileMenu: __webpack_require__(47).default})


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

/***/ 62:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumbs2.vue?vue&type=template&id=47009208&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "breadcrumb-area bg-cover",
    class: {
      'breadcrumb-area--hero-size': _vm.heroSize
    },
    style: {
      backgroundImage: `url('${_vm.bgImage}')`
    }
  }, [_vm._ssrNode("<div class=\"container\" data-v-47009208><div class=\"row\" data-v-47009208><div class=\"col-12\" data-v-47009208><div class=\"breadcrumb_box text-center\" data-v-47009208><h2 class=\"breadcrumb-title\" data-v-47009208>" + _vm._ssrEscape(_vm._s(_vm.breadcrumbTitle)) + "</h2> " + (_vm.subtitle ? "<p class=\"breadcrumb-subtitle\" data-v-47009208>" + _vm._ssrEscape(_vm._s(_vm.subtitle)) + "</p>" : "<!---->") + "</div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Breadcrumbs2.vue?vue&type=template&id=47009208&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumbs2.vue?vue&type=script&lang=js&
/* harmony default export */ var Breadcrumbs2vue_type_script_lang_js_ = ({
  props: {
    items: {
      type: Array,
      default: () => []
    },
    breadcrumbTitle: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    heroSize: {
      type: Boolean,
      default: false
    },
    bgImage: {
      type: String,
      default: '/images/bg/titlesss.png'
    }
  }
});
// CONCATENATED MODULE: ./components/Breadcrumbs2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbs2vue_type_script_lang_js_ = (Breadcrumbs2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Breadcrumbs2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbs2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "47009208",
  "072bffed"
  
)

/* harmony default export */ var Breadcrumbs2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs2_vue_vue_type_style_index_0_id_47009208_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs2_vue_vue_type_style_index_0_id_47009208_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs2_vue_vue_type_style_index_0_id_47009208_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs2_vue_vue_type_style_index_0_id_47009208_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumbs2_vue_vue_type_style_index_0_id_47009208_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
//# sourceMappingURL=GmExt.js.map