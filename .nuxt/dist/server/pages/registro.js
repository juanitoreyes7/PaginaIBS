exports.ids = [166,10,26,27,29,30];
exports.modules = {

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/registro.vue?vue&type=template&id=7c7bbe8d&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "main-wrapper",
    attrs: {
      "id": "main-wrapper"
    }
  }, [_c('Breadcrumbs2', {
    attrs: {
      "items": _vm.breadcrumbNavigation,
      "breadcrumbTitle": "Crear cuenta"
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"account-page-area section-gap-equal\">", "</section>", [_vm._ssrNode("<div class=\"container position-relative\">", "</div>", [_vm._ssrNode("<div class=\"row g-5 justify-content-center\">", "</div>", [_vm._ssrNode("<div class=\"col-lg-5\">", "</div>", [_vm._ssrNode("<div class=\"login-form-box\">", "</div>", [_vm._ssrNode("<h3 class=\"title\">Registrarse</h3> "), _vm._ssrNode("<p>", "</p>", [_vm._ssrNode("¿Ya tienes cuenta? "), _c('nuxt-link', {
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Iniciar sesión")])], 2), _vm._ssrNode(" " + (_vm.mensajeError ? "<div role=\"alert\" class=\"alert alert-danger\">" + _vm._ssrEscape("\n                            " + _vm._s(_vm.mensajeError) + "\n                        ") + "</div>" : "<!---->") + " " + (_vm.mensajeExito ? "<div role=\"alert\" class=\"alert alert-success\">" + _vm._ssrEscape("\n                            " + _vm._s(_vm.mensajeExito) + "\n                        ") + "</div>" : "<!---->") + " <form><div class=\"form-group\"><label for=\"reg-email\">Email *</label> <input id=\"reg-email\" type=\"email\" placeholder=\"correo@ejemplo.com\" required=\"required\"" + _vm._ssrAttr("disabled", _vm.cargando) + _vm._ssrAttr("value", _vm.email) + " class=\"form-control\"></div> <div class=\"form-group\"><label for=\"reg-password\">Contraseña *</label> <input id=\"reg-password\" type=\"password\" placeholder=\"Mínimo 6 caracteres\" required=\"required\" minlength=\"6\"" + _vm._ssrAttr("disabled", _vm.cargando) + _vm._ssrAttr("value", _vm.password) + " class=\"form-control\"></div> <div class=\"form-group\"><label for=\"reg-password-confirm\">Confirmar contraseña *</label> <input id=\"reg-password-confirm\" type=\"password\" placeholder=\"Repite tu contraseña\" required=\"required\"" + _vm._ssrAttr("disabled", _vm.cargando) + _vm._ssrAttr("value", _vm.passwordConfirm) + " class=\"form-control\"></div> <div class=\"form-group\"><button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.cargando) + " class=\"edu-btn btn-medium\">" + (_vm.cargando ? "<span>Creando cuenta...</span>" : "<span>Registrarse <i class=\"icon-4\"></i></span>") + "</button></div></form>")], 2)])])])]), _vm._ssrNode(" "), _c('Footer')], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/registro.vue?vue&type=template&id=7c7bbe8d&

// EXTERNAL MODULE: ./components/Breadcrumbs2.vue + 4 modules
var Breadcrumbs2 = __webpack_require__(63);

// EXTERNAL MODULE: ./components/Footer.vue + 4 modules
var Footer = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/registro.vue?vue&type=script&lang=js&


/* harmony default export */ var registrovue_type_script_lang_js_ = ({
  name: 'RegistroPage',
  middleware: 'guest',
  components: {
    Breadcrumbs2: Breadcrumbs2["default"],
    Footer: Footer["default"]
  },

  data() {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      cargando: false,
      mensajeError: '',
      mensajeExito: '',
      breadcrumbNavigation: [{
        text: 'Inicio',
        to: '/'
      }, {
        text: 'Registro',
        to: ''
      }]
    };
  },

  head() {
    return {
      title: 'Registrarse - IBS Consultores'
    };
  },

  methods: {
    async registrarse() {
      this.mensajeError = '';
      this.mensajeExito = '';

      if (this.password !== this.passwordConfirm) {
        this.mensajeError = 'Las contraseñas no coinciden.';
        return;
      }

      if (this.password.length < 6) {
        this.mensajeError = 'La contraseña debe tener al menos 6 caracteres.';
        return;
      }

      this.cargando = true;

      try {
        await this.$auth.createUserWithEmailAndPassword(this.email, this.password);
        this.mensajeExito = 'Cuenta creada. Redirigiendo...';
        this.$router.push('/portal');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          this.mensajeError = 'Ya existe una cuenta con este correo.';
        } else if (error.code === 'auth/invalid-email') {
          this.mensajeError = 'El correo no es válido.';
        } else if (error.code === 'auth/weak-password') {
          this.mensajeError = 'La contraseña es muy débil. Usa al menos 6 caracteres.';
        } else {
          this.mensajeError = error.message || 'Error al crear la cuenta.';
        }
      } finally {
        this.cargando = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/registro.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registrovue_type_script_lang_js_ = (registrovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/registro.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registrovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4dd63d7c"
  
)

/* harmony default export */ var registro = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Breadcrumbs2: __webpack_require__(63).default,Footer: __webpack_require__(46).default})


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


/***/ })

};;
//# sourceMappingURL=registro.js.map