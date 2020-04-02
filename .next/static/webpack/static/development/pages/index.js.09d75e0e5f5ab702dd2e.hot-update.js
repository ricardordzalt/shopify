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



var img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var handleSelection = function handleSelection(resources) {
    setOpen(false);
    console.log(resources);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["TitleBar"], {
    primaryAction: {
      content: 'Hola soy un primary action'
    }
  }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: open,
    onSelection: handleSelection,
    onCancel: function onCancel() {
      return setOpen(false);
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(Card, {
    title: "Order details",
    sectioned: true
  }, __jsx("p", null, "View a summary of your order."))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
    secondary: true
  }, __jsx(Card, {
    title: "Tags",
    sectioned: true
  }, __jsx("p", null, "Add tags to your order.")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    heading: "Soy un t\xEDtulo",
    action: {
      content: 'Click on me',
      onAction: function onAction() {
        return setOpen(true);
      }
    },
    image: img
  }, __jsx("p", null, "Selecciona products"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FooterHelp"], null, "Soy Ricardo", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    url: "https://help.shopify.com/manual/orders/fulfill-orders"
  }, "Rodr\xEDguez")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.09d75e0e5f5ab702dd2e.hot-update.js.map