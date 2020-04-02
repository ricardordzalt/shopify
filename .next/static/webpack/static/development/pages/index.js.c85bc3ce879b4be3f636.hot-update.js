webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      productsSelected = _useState2[0],
      saveProducts = _useState2[1];

  var handleSelection = function handleSelection(resources) {
    setOpen(false);
    console.log(resources);
    saveProducts(resources);
  };

  var printProducts = function printProducts() {
    console.log(productsSelected);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    fullWidth: "true"
  }, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: open,
    onSelection: handleSelection,
    onCancel: function onCancel() {
      return setOpen(false);
    }
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
      onAction: function onAction() {
        return setOpen(true);
      }
    }
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    title: "Env\xEDo",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    resourceType: "Product",
    heading: "Productos",
    action: {
      content: 'Envíar productos a revisión',
      onAction: function onAction() {
        return printProducts();
      }
    }
  })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FooterHelp"], null, "Soy Ricardo", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    url: "https://help.shopify.com/manual/orders/fulfill-orders"
  }, "Rodr\xEDguez")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c85bc3ce879b4be3f636.hot-update.js.map