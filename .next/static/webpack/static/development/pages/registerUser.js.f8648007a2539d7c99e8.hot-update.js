webpackHotUpdate("static/development/pages/registerUser.js",{

/***/ "./pages/registerUser.js":
/*!*******************************!*\
  !*** ./pages/registerUser.js ***!
  \*******************************/
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




var register = function register() {
  var _useInput = useInput(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      name = _useInput2[0],
      setStoreName = _useInput2[1],
      resetName = _useInput2[2];

  var handleChangeStoreName = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (name) {
    return setStoreName(name);
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var handleChangeEmail = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (email) {
    return setEmail(email);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      legalRep = _useState2[0],
      setLegalRep = _useState2[1];

  var handleChangeLegalRep = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (legalRep) {
    return setLegalRep(legalRep);
  }, []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      creditCard = _useState3[0],
      setCreditCard = _useState3[1];

  var handleChangeCreditCard = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (creditCard) {
    return setCreditCard(creditCard);
  }, []);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      phone = _useState4[0],
      setPhone = _useState4[1];

  var handleChangePhone = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (phone) {
    return setPhone(phone);
  }, []);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    name: '',
    email: '',
    legalRep: legalRep,
    creditCard: creditCard,
    phone: phone
  }]),
      data = _useState5[0],
      setSaveData = _useState5[1];

  var handleSaveForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSaveData({
      name: name,
      email: email,
      legalRep: legalRep,
      creditCard: creditCard,
      phone: phone
    });
    resetName();
    console.log(data);
  }, []);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Page"], {
    fullWidth: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    element: "h1"
  }, "Registro")))), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    onSubmit: handleSaveForm
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    type: "text",
    label: "Nombre de la tienda",
    value: email,
    onChange: handleChangeStoreName
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    type: "email",
    label: "E-Mail",
    value: email,
    onChange: handleChangeEmail
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    type: "text",
    label: "Nombre del Representante Legal",
    value: legalRep,
    onChange: handleChangeLegalRep
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    type: "number",
    max: "9999999999999999",
    label: "Opcional (Tarjeta De Cr\xE9dito",
    value: creditCard,
    onChange: handleChangeCreditCard
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    type: "number",
    label: "Tel\xE9fono",
    value: phone,
    onChange: handleChangePhone
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    submit: true
  }, "Guardar"))));
};

/* harmony default export */ __webpack_exports__["default"] = (register);

/***/ })

})
//# sourceMappingURL=registerUser.js.f8648007a2539d7c99e8.hot-update.js.map