webpackHotUpdate("static/development/pages/otro-layout.js",{

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
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var register = function register() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Nombre de la tienda'),
      storeName = _useState[0],
      setStoreName = _useState[1];

  var handleChangeStoreName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (storeName) {
    return setStoreName(storeName);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('E-Mail'),
      email = _useState2[0],
      setEmail = _useState2[1];

  var handleChangeEmail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (email) {
    return setEmail(email);
  }, []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Nombre del Representante Legal'),
      legalRep = _useState3[0],
      setLegalRep = _useState3[1];

  var handleChangeLegalRep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (legalRep) {
    return setLegalRep(legalRep);
  }, []);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Opcional (Tarjeta De Crédito'),
      creditCard = _useState4[0],
      setCreditCard = _useState4[1];

  var handleChangeCreditCard = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (creditCard) {
    return setCreditCard(creditCard);
  }, []);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Teléfono'),
      phone = _useState5[0],
      setPhone = _useState5[1];

  var handleChangePhone = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (phone) {
    return setPhone(phone);
  }, []);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    fullWidth: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    element: "h1"
  }, "Registro")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "text",
    value: storeName,
    onChange: handleChangeStoreName
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "text",
    label: "E-Mail",
    value: email,
    onChange: handleChangeEmail
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "text",
    label: "Nombre del Representante Legal",
    value: legalRep,
    onChange: handleChangeLegalRep
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "text",
    label: "Opcional (Tarjeta De Cr\xE9dito",
    value: creditCard,
    onChange: handleChangeCreditCard
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "text",
    label: "Tel\xE9fono",
    value: phone,
    onChange: handleChangePhone
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (register);

/***/ })

})
//# sourceMappingURL=otro-layout.js.37b5eb14b0a240dad386.hot-update.js.map