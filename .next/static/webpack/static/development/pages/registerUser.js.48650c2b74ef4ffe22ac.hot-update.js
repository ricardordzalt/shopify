webpackHotUpdate("static/development/pages/registerUser.js",{

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var register = function register() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var handleChangeStoreName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (name) {
    setName(name);
    setSaveData(data.name = name);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('a@a.com'),
      email = _useState2[0],
      setEmail = _useState2[1];

  var handleChangeEmail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (email) {
    setEmail(email);
    setSaveData(data.email = email);
  }, []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      legalRep = _useState3[0],
      setLegalRep = _useState3[1];

  var handleChangeLegalRep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (legalRep) {
    setLegalRep(legalRep);
    setSaveData(data.legalRep = legalRep);
  }, []);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      creditCard = _useState4[0],
      setCreditCard = _useState4[1];

  var handleChangeCreditCard = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (creditCard) {
    setCreditCard(creditCard);
    setSaveData(data.creditCard = creditCard);
  }, []);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      phone = _useState5[0],
      setPhone = _useState5[1];

  var handleChangePhone = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (phone) {
    setPhone(phone);
    setSaveData(data.phone = phone);
  }, []);

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    email: '',
    legalRep: legalRep,
    creditCard: creditCard,
    phone: phone
  }),
      data = _useState6[0],
      setSaveData = _useState6[1];

  var handleSaveForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    console.log(data);
  }, []);
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    fullWidth: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    element: "h1"
  }, "Registro")))), __jsx("br", null), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSaveForm
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "text",
    min: "1",
    label: "Nombre de la tienda",
    value: name,
    onChange: handleChangeStoreName
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "email",
    label: "E-Mail",
    value: email,
    onChange: handleChangeEmail
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "text",
    min: "1",
    label: "Nombre del Representante Legal",
    value: legalRep,
    onChange: handleChangeLegalRep
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "number",
    max: "9999999999999999",
    label: "Opcional (Tarjeta De Cr\xE9dito",
    value: creditCard,
    onChange: handleChangeCreditCard
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    type: "number",
    label: "Tel\xE9fono",
    value: phone,
    onChange: handleChangePhone
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    submit: true
  }, "Guardar"))));
};

/* harmony default export */ __webpack_exports__["default"] = (register);

/***/ })

})
//# sourceMappingURL=registerUser.js.48650c2b74ef4ffe22ac.hot-update.js.map