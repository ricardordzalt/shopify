webpackHotUpdate("static/development/pages/registerUser.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

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
//# sourceMappingURL=registerUser.js.7d8241579c172e2958ab.hot-update.js.map