webpackHotUpdate("static/development/pages/otro-layout.js",{

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/ClientRouter.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/hook.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/index.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/ClientRouter/router.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/Loading/Loading.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/Loading/index.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/Modal/Modal.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/Modal/index.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/Provider/Provider.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/Provider/index.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/ResourcePicker/ResourcePicker.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/ResourcePicker/index.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/RoutePropagator.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/globals.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/hook.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/index.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/RoutePropagator/route-propagator.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/TitleBar/TitleBar.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/TitleBar/index.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/Toast/Toast.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/Toast/index.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/components/index.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/context.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/index.js":
false,

/***/ "./node_modules/@shopify/app-bridge-react/package.json":
false,

/***/ "./node_modules/@shopify/app-bridge-react/utilities/transformers.js":
false,

/***/ "./pages/otro-layout.js":
/*!******************************!*\
  !*** ./pages/otro-layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var OtroLayout = function OtroLayout() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('10%'),
      descuento = _useState[0],
      setDescuento = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('2000'),
      total = _useState2[0],
      setTotal = _useState2[1];

  var handleSubmit = function handleSubmit() {
    console.log("Formulario enviado - descuento: ".concat(descuento, ", total ").concat(total));
  };

  var handleChange = function handleChange(valor) {
    console.log(valor);
    setDescuento(valor);
  };

  var handleChangeTotal = function handleChangeTotal(valor) {
    console.log(valor);
    setTotal(valor);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
    title: "Alg\xFAn otro t\xEDtulo",
    description: "Alguna otra descripci\xF3n"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    sectioned: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    value: descuento,
    onChange: handleChange,
    label: "Descuento"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    value: total,
    onChange: handleChangeTotal,
    label: "Total"
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    distribution: "trailing"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    primary: true,
    submit: true
  }, "Guardar"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (OtroLayout);

/***/ })

})
//# sourceMappingURL=otro-layout.js.30efd16de1e7aa020b5a.hot-update.js.map