(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["boomingui"] = factory();
	else
		root["boomingui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "16b4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BmCartoonDialog_vue_vue_type_style_index_0_id_89563ef0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d951");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BmCartoonDialog_vue_vue_type_style_index_0_id_89563ef0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BmCartoonDialog_vue_vue_type_style_index_0_id_89563ef0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BmCartoonDialog_vue_vue_type_style_index_0_id_89563ef0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "460a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9081":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDIalogGroup_vue_vue_type_style_index_0_id_0294c362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b7e8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDIalogGroup_vue_vue_type_style_index_0_id_0294c362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDIalogGroup_vue_vue_type_style_index_0_id_0294c362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartoonDIalogGroup_vue_vue_type_style_index_0_id_0294c362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b7e8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b995":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BmCartoon_vue_vue_type_style_index_0_id_50287c5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("460a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BmCartoon_vue_vue_type_style_index_0_id_50287c5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BmCartoon_vue_vue_type_style_index_0_id_50287c5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BmCartoon_vue_vue_type_style_index_0_id_50287c5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d951":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9e4412dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/crartoon/src/BmCartoon.vue?vue&type=template&id=50287c5e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bm-cartoon",style:(_vm.styleSize)},[_c('div',{staticClass:"background-img"},[_vm._t("background")],2),_c('div',{staticClass:"dialog-content"},[_vm._t("dialog"),_vm._t("question")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/crartoon/src/BmCartoon.vue?vue&type=template&id=50287c5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/crartoon/src/BmCartoon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BmCartoonvue_type_script_lang_js_ = ({
  name:"BmCartoon",
  props:{
    size:{
      type:String,
      default:"100%"
    }
  },
  data(){
    return{

    }
  },
  computed:{
    styleSize(){
      return {
        width: this.size
      }
    }
  },
  methods:{
    
  },
  mounted(){
    
  }
});

// CONCATENATED MODULE: ./packages/crartoon/src/BmCartoon.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_BmCartoonvue_type_script_lang_js_ = (BmCartoonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/crartoon/src/BmCartoon.vue?vue&type=style&index=0&id=50287c5e&scoped=true&lang=css&
var BmCartoonvue_type_style_index_0_id_50287c5e_scoped_true_lang_css_ = __webpack_require__("b995");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/crartoon/src/BmCartoon.vue






/* normalize component */

var component = normalizeComponent(
  src_BmCartoonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "50287c5e",
  null
  
)

/* harmony default export */ var BmCartoon = (component.exports);
// CONCATENATED MODULE: ./packages/crartoon/index.js

BmCartoon.install = function (Vue) { 
  Vue.component(BmCartoon.name, BmCartoon)
}
/* harmony default export */ var crartoon = (BmCartoon);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9e4412dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/cartoondialog/src/BmCartoonDialog.vue?vue&type=template&id=89563ef0&scoped=true&
var BmCartoonDialogvue_type_template_id_89563ef0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dialog",class:[_vm.getType,_vm.visibility],style:(_vm.getPosition)},[_vm._t("default")],2)}
var BmCartoonDialogvue_type_template_id_89563ef0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/cartoondialog/src/BmCartoonDialog.vue?vue&type=template&id=89563ef0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/cartoondialog/src/BmCartoonDialog.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var BmCartoonDialogvue_type_script_lang_js_ = ({
  name:"BmCartoonDialog",
  props:{
    type:{
      type:String,
      default:"circle"
    },
    position:{
      type:Object,
      default: () => {
        return {top:0,left:0}
      }
    },
    index:{
      type:Number,
      require:true
    }
  },
  inject:['childrens'],
  data(){
    return{
      
    }
  },
  methods:{
    isInArray(e){
      let ch = this.childrens.slotChildren
      if(ch){
        if(ch.indexOf(e) == -1){
          return false
        }else{
          return true
        }
      }
      
    }
  },
  computed:{
    getType(){
      return this.type
    },
    getPosition(){
      return this.position
    },
    getIndex(){
      return this.index
    },
    visibility(){
      return this.isInArray(this.getIndex) ? 'visible' : 'disvisible'
    }
  },
  mounted(){
    
  }
});

// CONCATENATED MODULE: ./packages/cartoondialog/src/BmCartoonDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_BmCartoonDialogvue_type_script_lang_js_ = (BmCartoonDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/cartoondialog/src/BmCartoonDialog.vue?vue&type=style&index=0&id=89563ef0&scoped=true&lang=css&
var BmCartoonDialogvue_type_style_index_0_id_89563ef0_scoped_true_lang_css_ = __webpack_require__("16b4");

// CONCATENATED MODULE: ./packages/cartoondialog/src/BmCartoonDialog.vue






/* normalize component */

var BmCartoonDialog_component = normalizeComponent(
  src_BmCartoonDialogvue_type_script_lang_js_,
  BmCartoonDialogvue_type_template_id_89563ef0_scoped_true_render,
  BmCartoonDialogvue_type_template_id_89563ef0_scoped_true_staticRenderFns,
  false,
  null,
  "89563ef0",
  null
  
)

/* harmony default export */ var BmCartoonDialog = (BmCartoonDialog_component.exports);
// CONCATENATED MODULE: ./packages/cartoondialog/index.js

BmCartoonDialog.install = function (Vue) { 
  Vue.component(BmCartoonDialog.name, BmCartoonDialog)
}
/* harmony default export */ var cartoondialog = (BmCartoonDialog);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9e4412dc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialogroup/src/CartoonDIalogGroup.vue?vue&type=template&id=0294c362&scoped=true&
var CartoonDIalogGroupvue_type_template_id_0294c362_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"dialogs",staticClass:"getAnimate"},[_vm._t("default",null,{"arr":_vm.slotChildren})],2)}
var CartoonDIalogGroupvue_type_template_id_0294c362_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/dialogroup/src/CartoonDIalogGroup.vue?vue&type=template&id=0294c362&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialogroup/src/CartoonDIalogGroup.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var CartoonDIalogGroupvue_type_script_lang_js_ = ({
  name:"CartoonDialogGroup",
  props:{
    animate:{
      type:String,
      default:"appear"
    },
  },
  data(){
    return{
      slotChildren:[],
      inAnimation:true,
      clearTer: 0,
      currentDialogInterval: null
    }
  },
  provide(){
    return{
      // childrens:this.slotChildren,
      childrens:this,
    }
  },
  methods:{
    _isMobile() {
      //终端判断 true 手机端 false pc端
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    intervalFun(vnodes){
      this.inAnimation = false
      let i = 0, _that = this;
      // let currentDialogInterval = setInterval(function(){
      this.currentDialogInterval = setInterval(function(){
        _that.slotChildren.push(i)
        i ++;
        if(i >= vnodes){
          console.log('clear-normal')
          clearInterval(_that.currentDialogInterval)
        }
        console.log("arr-=show",_that.slotChildren)
      },800)
    },
    clears(){
      console.log('clear-un-normal')
      let vnodes = (this.$slots.default).length;
      clearInterval(this.currentDialogInterval)
      for(let j = this.slotChildren.length; j < vnodes; j ++){
        this.slotChildren.push(j)
        console.log("ser-un",this.slotChildren)
      }
    },
    startDialog(){
      let vnodes = (this.$slots.default).length;
      if(this.inAnimation){
        this.intervalFun(vnodes)
      }
    },
    handleScrollx() {
      // console.log('滚动高度',window.pageYOffset)
      // console.log('距离顶部高度',this.$refs.dialogs.getBoundingClientRect().top)
      let hei = this.$refs.dialogs.getBoundingClientRect().top
      if(hei < 100){
        if(this.clearTer == 0){
          this.clears()
          this.clearTer++
        }
      }else if(hei < 300){
        this.startDialog()
      }
    }
  },
  computed:{
    getAnimate(){
      return this.animate
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScrollx,true)
  },
  beforeMount(){
    if(this._isMobile()){
      console.log('yidongduan')
    }else {
      console.log('pc duan')
    }
  }
});

// CONCATENATED MODULE: ./packages/dialogroup/src/CartoonDIalogGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_CartoonDIalogGroupvue_type_script_lang_js_ = (CartoonDIalogGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/dialogroup/src/CartoonDIalogGroup.vue?vue&type=style&index=0&id=0294c362&scoped=true&lang=css&
var CartoonDIalogGroupvue_type_style_index_0_id_0294c362_scoped_true_lang_css_ = __webpack_require__("9081");

// CONCATENATED MODULE: ./packages/dialogroup/src/CartoonDIalogGroup.vue






/* normalize component */

var CartoonDIalogGroup_component = normalizeComponent(
  src_CartoonDIalogGroupvue_type_script_lang_js_,
  CartoonDIalogGroupvue_type_template_id_0294c362_scoped_true_render,
  CartoonDIalogGroupvue_type_template_id_0294c362_scoped_true_staticRenderFns,
  false,
  null,
  "0294c362",
  null
  
)

/* harmony default export */ var CartoonDIalogGroup = (CartoonDIalogGroup_component.exports);
// CONCATENATED MODULE: ./packages/dialogroup/index.js

CartoonDIalogGroup.install = function (Vue) { 
  Vue.component(CartoonDIalogGroup.name, CartoonDIalogGroup)
}
/* harmony default export */ var dialogroup = (CartoonDIalogGroup);
// CONCATENATED MODULE: ./packages/index.js



const components = [
  crartoon,
  cartoondialog,
  dialogroup
]
const install = function (Vue) { 
  if(install.installed) return
  components.map(component => Vue.component(component.name, component))
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
 
/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  BmCartoon: crartoon,
  BmCartoonDialog: cartoondialog,
  CartoonDialogGroup: dialogroup
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=boomingui.umd.js.map