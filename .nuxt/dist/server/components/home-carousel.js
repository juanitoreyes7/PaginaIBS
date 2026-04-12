exports.ids = [47];
exports.modules = {

/***/ 124:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCarousel_vue_vue_type_style_index_0_id_7b60b8be_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCarousel_vue_vue_type_style_index_0_id_7b60b8be_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCarousel_vue_vue_type_style_index_0_id_7b60b8be_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCarousel_vue_vue_type_style_index_0_id_7b60b8be_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeCarousel_vue_vue_type_style_index_0_id_7b60b8be_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeCarousel.vue?vue&type=template&id=7b60b8be&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('section', {
    staticClass: "home-carousel"
  }, [_vm._ssrNode("<div class=\"home-carousel__inner\" data-v-7b60b8be>" + _vm._ssrList(_vm.slides, function (slide, index) {
    return "<div" + _vm._ssrClass("home-carousel__slide", _vm.getSlideClass(index)) + " data-v-7b60b8be><img" + _vm._ssrAttr("src", slide.src) + _vm._ssrAttr("srcset", `${slide.src} 2400w`) + _vm._ssrAttr("alt", slide.alt || `Slide ${index + 1}`) + " class=\"home-carousel__img\" data-v-7b60b8be> <div class=\"home-carousel__overlay\" data-v-7b60b8be></div></div>";
  }) + " <button type=\"button\" aria-label=\"Anterior\" class=\"home-carousel__control home-carousel__control--prev\" data-v-7b60b8be><i class=\"fas fa-chevron-left\" data-v-7b60b8be></i></button> <button type=\"button\" aria-label=\"Siguiente\" class=\"home-carousel__control home-carousel__control--next\" data-v-7b60b8be><i class=\"fas fa-chevron-right\" data-v-7b60b8be></i></button> <div class=\"home-carousel__dots\" data-v-7b60b8be>" + _vm._ssrList(_vm.slides, function (slide, index) {
    return "<button type=\"button\"" + _vm._ssrAttr("aria-label", `Ir al slide ${index + 1}`) + _vm._ssrClass("home-carousel__dot", {
      'home-carousel__dot--active': index === _vm.currentIndex
    }) + " data-v-7b60b8be></button>";
  }) + "</div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HomeCarousel.vue?vue&type=template&id=7b60b8be&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeCarousel.vue?vue&type=script&lang=js&
/* harmony default export */ var HomeCarouselvue_type_script_lang_js_ = ({
  name: 'HomeCarousel',

  data() {
    return {
      currentIndex: 0,
      prevIndex: 0,
      direction: 'next',
      autoPlayId: null,
      // Imágenes 2400×840 px en static/images/carusel -> /images/carusel/*
      slides: [{
        src: '/images/carusel/1.png',
        alt: 'Banner 1'
      }, {
        src: '/images/carusel/2.png',
        alt: 'Banner 2'
      }, {
        src: '/images/carusel/3.png',
        alt: 'Banner 3'
      }]
    };
  },

  mounted() {
    this.startAutoPlay();
  },

  beforeDestroy() {
    this.stopAutoPlay();
  },

  methods: {
    nextSlide() {
      if (this.slides.length <= 1) return;
      this.prevIndex = this.currentIndex;
      this.direction = 'next';
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.restartAutoPlay();
    },

    prevSlide() {
      if (this.slides.length <= 1) return;
      this.prevIndex = this.currentIndex;
      this.direction = 'prev';
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      this.restartAutoPlay();
    },

    goToSlide(index) {
      if (index === this.currentIndex || this.slides.length <= 1) return;
      this.prevIndex = this.currentIndex;
      this.direction = index > this.currentIndex ? 'next' : 'prev';
      this.currentIndex = index;
      this.restartAutoPlay();
    },

    startAutoPlay() {
      if (this.autoPlayId || this.slides.length <= 1) return;
      this.autoPlayId = setInterval(() => {
        this.prevIndex = this.currentIndex;
        this.direction = 'next';
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      }, 6000);
    },

    stopAutoPlay() {
      if (this.autoPlayId) {
        clearInterval(this.autoPlayId);
        this.autoPlayId = null;
      }
    },

    restartAutoPlay() {
      this.stopAutoPlay();
      this.startAutoPlay();
    },

    getSlideClass(index) {
      if (index === this.currentIndex) {
        return 'home-carousel__slide--active';
      }

      if (index === this.prevIndex) {
        return this.direction === 'next' ? 'home-carousel__slide--left' : 'home-carousel__slide--right';
      }

      return this.direction === 'next' ? 'home-carousel__slide--right' : 'home-carousel__slide--left';
    }

  }
});
// CONCATENATED MODULE: ./components/HomeCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HomeCarouselvue_type_script_lang_js_ = (HomeCarouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HomeCarousel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(149)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HomeCarouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7b60b8be",
  "1855db6a"
  
)

/* harmony default export */ var HomeCarousel = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-carousel.js.map