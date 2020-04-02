webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _userState = userState(''),
      _userState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_userState, 2),
      selectedProducts = _userState2[0],
      displayProducts = _userState2[1];

  var handleSelection = function handleSelection(resources) {
    setOpen(false);
    console.log(resources);
  };

  var handleSelected = function handleSelected(resources) {
    console.log(resources);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__["TitleBar"], {
    primaryAction: {
      content: 'Hola soy un primary action'
    }
  }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: open,
    onSelection: handleSelection,
    onCancel: function onCancel() {
      return setOpen(false);
    }
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    title: "MENU",
    sectioned: true
  }, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in consequat leo, eu placerat dui. Nunc ornare felis nunc, eu consectetur dolor consectetur a. Quisque eu ante ut tortor condimentum varius. Nulla at egestas felis, a vestibulum ex. Aenean a erat in arcu tempus porttitor in ac erat. Cras tempor quam pellentesque placerat faucibus. Suspendisse vel elit non augue mollis faucibus. Vestibulum finibus tincidunt orci eget blandit. Nulla sit amet magna mi. Etiam vel erat augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus consectetur in magna sit amet sollicitudin. Etiam sed diam eu eros ullamcorper pellentesque. Etiam non enim commodo, maximus enim laoreet, rhoncus libero."))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, {
    secondary: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    title: "Tienda",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], {
    heading: "Selecciona los productos",
    action: {
      content: 'Registro',
      onAction: function onAction() {
        return setOpen(true);
      }
    } //image={img}

  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    title: "Env\xEDo",
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["EmptyState"], {
    heading: "Productos",
    action: {
      content: 'Envíar productos a revisión',
      onAction: function onAction() {
        return setOpen(true);
      }
    }
  })))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FooterHelp"], null, "Soy Ricardo", ' ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    url: "https://help.shopify.com/manual/orders/fulfill-orders"
  }, "Rodr\xEDguez")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.8d6e7a474810fbded6db.hot-update.js.map