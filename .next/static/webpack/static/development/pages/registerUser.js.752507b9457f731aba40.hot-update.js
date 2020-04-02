webpackHotUpdate("static/development/pages/registerUser.js",{

/***/ "./pages/registerUser.js":
/*!*******************************!*\
  !*** ./pages/registerUser.js ***!
  \*******************************/
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




var register = function register() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    email: '',
    legalRep: '',
    creditCard: 0,
    phone: 0
  }),
      data = _useState[0],
      setStoreName = _useState[1];

  var handleChangeStoreName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name) {
    return setStoreName(name);
  }, []);

  var handleChangeForm = function handleChangeForm(e) {
    console.log(e.target);
  };

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    fullWidth: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    element: "h1"
  }, "Registro")))), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "text",
    label: "Nombre de la tienda",
    value: data.name,
    onChange: handleChangeForm
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "email",
    label: "E-Mail",
    value: data.email,
    onChange: handleChangeForm
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "text",
    label: "Nombre del Representante Legal",
    value: data.legalRep,
    onChange: handleChangeForm
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "number",
    max: "9999999999999999",
    label: "Opcional (Tarjeta De Cr\xE9dito",
    value: data.creditCard,
    onChange: handleChangeForm
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "number",
    label: "Tel\xE9fono",
    value: data.phone,
    onChange: handleChangeForm
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    submit: true
  }, "Guardar"))));
};

/* harmony default export */ __webpack_exports__["default"] = (register);

/***/ })

})
//# sourceMappingURL=registerUser.js.752507b9457f731aba40.hot-update.js.map