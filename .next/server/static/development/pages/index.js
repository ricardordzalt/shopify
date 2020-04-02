module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = () => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: productsSelected,
    1: saveProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleSelection = resources => {
    setOpen(false);
    console.log(resources);
    saveProducts(resources);
  };

  const printProducts = () => {
    console.log(productsSelected);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: open,
    onSelection: handleSelection,
    onCancel: () => setOpen(false)
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "MENU",
    sectioned: true
  }, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in consequat leo, eu placerat dui. Nunc ornare felis nunc, eu consectetur dolor consectetur a. Quisque eu ante ut tortor condimentum varius. Nulla at egestas felis, a vestibulum ex. Aenean a erat in arcu tempus porttitor in ac erat. Cras tempor quam pellentesque placerat faucibus. Suspendisse vel elit non augue mollis faucibus. Vestibulum finibus tincidunt orci eget blandit. Nulla sit amet magna mi. Etiam vel erat augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus consectetur in magna sit amet sollicitudin. Etiam sed diam eu eros ullamcorper pellentesque. Etiam non enim commodo, maximus enim laoreet, rhoncus libero."))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    secondary: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Tienda",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    heading: "Selecciona los productos",
    action: {
      content: 'Registro',
      onAction: () => setOpen(true)
    }
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Env\xEDo",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    resourceType: "Product",
    heading: "Productos",
    action: {
      content: 'Envíar productos a revisión',
      onAction: () => printProducts()
    }
  })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FooterHelp"], null, "Soy Ricardo", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    url: "https://help.shopify.com/manual/orders/fulfill-orders"
  }, "Rodr\xEDguez")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zlayerz/CeroUno/Mes 3/app_shopify/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map