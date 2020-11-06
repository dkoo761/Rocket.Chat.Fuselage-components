(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@rocket.chat/fuselage-hooks"), require("react-dom"), require("@rocket.chat/icons"));
	else if(typeof define === 'function' && define.amd)
		define("RocketChatFuselage", ["react", "@rocket.chat/fuselage-hooks", "react-dom", "@rocket.chat/icons"], factory);
	else if(typeof exports === 'object')
		exports["RocketChatFuselage"] = factory(require("react"), require("@rocket.chat/fuselage-hooks"), require("react-dom"), require("@rocket.chat/icons"));
	else
		root["RocketChatFuselage"] = factory(root["React"], root["@rocket.chat/fuselage-hooks"], root["react-dom"], root["@rocket.chat/icons"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__rocket_chat_fuselage_hooks__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE__rocket_chat_icons__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 11:0-14 */
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 37:0-14 */
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 16:0-14 */
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 28:0-14 */
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:0-14 */
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 22:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 16:0-14 */
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 13:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 13:0-14 */
/***/ ((module) => {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 13:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 5:4-18 */
/*! CommonJS bailout: module.exports is used directly at 9:4-18 */
/*! CommonJS bailout: module.exports is used directly at 17:0-14 */
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 12:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/regenerator-runtime/runtime.js .__esModule */
/*! other exports [maybe provided (runtime-defined)] [no usage info] -> ./node_modules/regenerator-runtime/runtime.js */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.browser.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.esm.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);


/***/ }),

/***/ "./node_modules/@rocket.chat/css-in-js/dist/index.module.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rocket.chat/css-in-js/dist/index.module.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export attachRules [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createAnimationName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createClassName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export css [provided] [no usage info] [missing usage info prevents renaming] */
/*! export cssSupports [provided] [no usage info] [missing usage info prevents renaming] */
/*! export escapeName [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keyframes [provided] [no usage info] [missing usage info prevents renaming] */
/*! export transpile [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachRules": () => /* binding */ w,
/* harmony export */   "createAnimationName": () => /* binding */ u,
/* harmony export */   "createClassName": () => /* binding */ f,
/* harmony export */   "css": () => /* binding */ p,
/* harmony export */   "cssSupports": () => /* binding */ h,
/* harmony export */   "escapeName": () => /* binding */ o,
/* harmony export */   "keyframes": () => /* binding */ x,
/* harmony export */   "transpile": () => /* binding */ B
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.browser.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
;var t,r,i,u=function(n){return n?"rcx-@"+(0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__.default)(n):"none"},f=function(n){return"rcx-@"+(0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__.default)(n)},o=function(e){return e.replace(/@|#|:/g,function(e){return"\\"+e})},s=new WeakMap,a=function(e){var n=new Map,t=function(t){if(n.has(t))return n.get(t);var r=e.call(this,t);return n.set(t,r),r};return s.set(t,n),t},c=void 0,l=function(){return c?[c,function(){return""}]:[c=[],function(){var e=(c||[]).join("");return c=void 0,e}]},d=a(function(e){return Object.freeze(function(){return e})}),b=function(e,n,t){var r=e[0],i=e.slice(1);return n.reduce(function(e,n,r){return e+function e(n,t){return"function"==typeof n||"function"==typeof n?e(n.apply(void 0,t),t):!1===n||null==n?"":Array.isArray(n)?n.map(function(n){return e(n,t)}).join(""):String(n)}(n,t)+i[r]},r).trim()},p=function(e){var n=[].slice.call(arguments,1);if(!e||0===e.length||e.some(function(e){return"string"!=typeof e}))return d("");if(!n.some(function(e){return"function"==typeof e})){var t=b(e,n,[]);return d(t)}return function(){var t=l(),r=t[1],i=b(e,n,[].slice.call(arguments));return i+r()}},x=function(e){var n=arguments;if(!e||0===e.length||e.some(function(e){return"string"!=typeof e}))return d("none");var t=function(){var t=l(),r=t[0],i=t[1],f=b(e,[].slice.call(n,1),[].slice.call(arguments)),s=u(f),a=o(s);return r.push("@keyframes "+a+"{"+f+"}"),i(),a};return t},h="undefined"!=typeof window&&void 0!==window.CSS&&window.CSS.supports?a(function(e){return window.CSS.supports(e)}):function(){return!1},m=function(){return t||((t=document.getElementById("rcx-styles")||document.createElement("style")).id="rcx-styles",t.appendChild(document.createTextNode("")),document.head&&document.head.appendChild(t)),t},v=function(){if(!r){var e=m(),n=e.sheet||Array.from(document.styleSheets).find(function(n){return n.ownerNode===e});if(!n)throw Error("could not get style sheet");r=n}return r},y=function(n){var t={};return function(r){var i=(0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__.default)(r);if(!t[i]){var u=n(r),f=0;t[i]={ref:function(){++f},unref:function(){var e;e=function(){0==--f&&(u(),delete t[i])},"undefined"!=typeof window&&"function"==typeof window.queueMicrotask?window.queueMicrotask(e):Promise.resolve().then(e)}}}return t[i].ref(),t[i].unref}},w="undefined"==typeof window&&function(){return function(){}}|| false&&0||y(function(e){var n=m(),t=document.createTextNode(e);return n.appendChild(t),function(){return t.remove()}}),g=function(){return[].slice.call(arguments).filter(Boolean).join("-")},k=function(e){var t=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__.default;return t.use(function(e){var n=new Set(e.supportedProperties),t=function(e){return n.has(e)||h(e+":inherit")},r=new Map,i="",u=function(e){return function(n){return e.map(function(e){return e+":"+n}).join(";")}},f=function(e,n){return function(t,r){return i+="html:not([dir=rtl]) "+r.join(",")+"{"+function(n){return e.map(function(e){return e+":"+n}).join(";")}(t)+";}[dir=rtl] "+r.join(",")+"{"+function(e){return n.map(function(n){return n+":"+e}).join(";")}(t)+";}",""}};return[{base:"size"},{prefix:"min",base:"size"},{prefix:"max",base:"size"}].forEach(function(e){var n=g(e.prefix,"inline",e.base),i=g(e.prefix,"block",e.base),f=g(e.prefix,"width"),o=g(e.prefix,"height");t(n)||r.set(n,u([f])),t(i)||r.set(i,u([o]))}),["clear","float","text-align"].forEach(function(e){var n=function(n,t,r){return function(u,f){return i+="[dir=rtl] "+f.join(",")+"{"+e+": "+(u===n?r:u)+"}",e+": "+(u===n?t:u)}};h(e+": start")||r.set(e,n("start","left","right")),h(e+": inline-start")||r.set(e,n("inline-start","left","right")),h(e+": end")||r.set(e,n("end","right","left")),h(e+": inline-end")||r.set(e,n("inline-end","right","left"))}),[{base:"border",suffix:"radius",fallbackBase:"border"}].forEach(function(e){var n=g(e.base,"start-start",e.suffix),i=g(e.base,"start-end",e.suffix),u=g(e.base,"end-start",e.suffix),o=g(e.base,"end-end",e.suffix),s=g(e.base,"top-left",e.suffix),a=g(e.base,"top-right",e.suffix),c=g(e.base,"bottom-left",e.suffix),l=g(e.base,"bottom-right",e.suffix);t(n)||r.set(n,f([s],[a])),t(i)||r.set(i,f([a],[s])),t(u)||r.set(u,f([c],[l])),t(o)||r.set(o,f([l],[c]))}),[{base:"margin",fallbackBase:"margin"},{base:"padding",fallbackBase:"padding"},{base:"inset"},{base:"border",fallbackBase:"border"},{base:"border",suffix:"width",fallbackBase:"border"},{base:"border",suffix:"style",fallbackBase:"border"},{base:"border",suffix:"color",fallbackBase:"border"}].forEach(function(e){var n=g(e.base,e.suffix),i=g(e.base,"inline",e.suffix),o=g(e.base,"inline-start",e.suffix),s=g(e.base,"inline-end",e.suffix),a=g(e.base,"block",e.suffix),c=g(e.base,"block-start",e.suffix),l=g(e.base,"block-end",e.suffix),d=g(e.fallbackBase,"left",e.suffix),b=g(e.fallbackBase,"right",e.suffix),p=g(e.fallbackBase,"top",e.suffix),x=g(e.fallbackBase,"bottom",e.suffix),h=t(o),m=t(s),v=t(c),y=t(l),w=t(i),k=t(a),B=t(n);h||r.set(o,f([d],[b])),m||r.set(s,f([b],[d])),v||r.set(c,u([p])),y||r.set(l,u([x])),w||r.set(i,h&&m?u([o,s]):f([d,b],[b,d])),k||r.set(a,u(v&&y?[c,l]:[p,x])),B||r.set(n,w&&k?u([i,a]):h&&m&&v&&y?u([o,s,c,l]):f([d,p,b,x],[b,p,d,x]))}),function(e,n,t){switch(e){case-2:try{return""+n+i}finally{i=""}case 1:var u,f=n.slice(0,u=n.indexOf(":")),o=r.get(f);if(!o)return;return o(n.slice(u+1),t)}}}(e)),t.set(e),t},B=function(e,n,t){return(t?k(t):(i||(i=k({})),i))(e,n)};
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@rocket.chat/fuselage-tokens/colors.js":
/*!*************************************************************!*\
  !*** ./node_modules/@rocket.chat/fuselage-tokens/colors.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // Neutral
  n100: '#f7f8fa',
  n200: '#f2f3f5',
  n300: '#eeeff1',
  n400: '#e4e7ea',
  n500: '#cbced1',
  n600: '#9ea2a8',
  n700: '#6c727a',
  n800: '#2f343d',
  n900: '#1f2329',

  // Blues
  b100: '#e8f2ff',
  b200: '#d1ebfe',
  b300: '#76b7fc',
  b400: '#549df9',
  b500: '#1d74f5',
  b600: '#095ad2',
  b700: '#10529e',
  b800: '#01336b',
  b900: '#012247',

  // Greens
  g100: '#e5fbf4',
  g200: '#c0f6e4',
  g300: '#96f0d2',
  g400: '#6ce9c0',
  g500: '#2de0a5',
  g600: '#1ecb92',
  g700: '#19ac7c',
  g800: '#158d65',
  g900: '#106d4f',

  // Reds
  r100: '#fddade',
  r200: '#fbb5be',
  r300: '#f98f9d',
  r400: '#f76a7d',
  r500: '#f5455c',
  r600: '#db0c27',
  r700: '#b30a20',
  r800: '#8b0719',
  r900: '#630512',

  // Yellows
  y100: '#fff6d6',
  y200: '#ffecad',
  y300: '#ffe383',
  y400: '#ffd95a',
  y500: '#ffd031',
  y600: '#f3be08',
  y700: '#dfac00',
  y800: '#b68d00',
  y900: '#8e6d00',

  // Purples
  p100: '#f9effc',
  p200: '#edd0f7',
  p300: '#dca0ef',
  p400: '#ca71e7',
  p500: '#9f22c7',
  p600: '#7f1b9f',
  p700: '#5f1477',
  p800: '#4a105d',
  p900: '#350b42',

  // Oranges
  o100: '#fde8d7',
  o200: '#fad1b0',
  o300: '#f7b27b',
  o400: '#f59b53',
  o500: '#f38c39',
  o600: '#e26d0e',
  o700: '#bd5a0b',
  o800: '#974809',
  o900: '#713607',

  white: '#ffffff',
});


/***/ }),

/***/ "./node_modules/@rocket.chat/fuselage-tokens/typography.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@rocket.chat/fuselage-tokens/typography.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const fontSans = [
  'Inter',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Helvetica Neue',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Meiryo UI',
  'Arial',
  'sans-serif'
];

const fontMono = [
  'Menlo',
  'Monaco',
  'Consolas',
  'Liberation Mono',
  'Courier New',
  'monospace'
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fontFamilies: {
    sans: fontSans,
    mono: fontMono,
  },
  fontScales: {
    h1: {
      fontSize: 22,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 32,
    },
    s1: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 22,
    },
    s2: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 22,
    },
    p1: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 20,
    },
    p2: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 0,
      lineHeight: 20,
    },
    c1: {
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: 16,
    },
    c2: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 0,
      lineHeight: 16,
    },
    micro: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: 0.2,
      lineHeight: 12,
    },
  },
});


/***/ }),

/***/ "./src/components/Accordion/Item.js":
/*!******************************************!*\
  !*** ./src/components/Accordion/Item.js ***!
  \******************************************/
/*! namespace exports */
/*! export Item [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => /* binding */ Item
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rocket.chat/fuselage-hooks */ "@rocket.chat/fuselage-hooks");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Chevron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Chevron */ "./src/components/Chevron/index.js");
/* harmony import */ var _ToggleSwitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ToggleSwitch */ "./src/components/ToggleSwitch/index.js");
;

var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Accordion/Item.js";






function Item(_ref) {
  var children = _ref.children,
      className = _ref.className,
      defaultExpanded = _ref.defaultExpanded,
      disabled = _ref.disabled,
      propExpanded = _ref.expanded,
      _ref$tabIndex = _ref.tabIndex,
      tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
      title = _ref.title,
      _ref$noncollapsible = _ref.noncollapsible,
      noncollapsible = _ref$noncollapsible === void 0 ? !title : _ref$noncollapsible,
      onToggle = _ref.onToggle,
      onToggleEnabled = _ref.onToggleEnabled,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["children", "className", "defaultExpanded", "disabled", "expanded", "tabIndex", "title", "noncollapsible", "onToggle", "onToggleEnabled"]);

  var _useToggle = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useToggle)(defaultExpanded),
      _useToggle2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useToggle, 2),
      stateExpanded = _useToggle2[0],
      toggleStateExpanded = _useToggle2[1];

  var expanded = propExpanded || stateExpanded;

  var toggleExpanded = function toggleExpanded() {
    if (onToggle) {
      onToggle.call(event.currentTarget, event);
      return;
    }

    toggleStateExpanded();
  };

  var panelExpanded = noncollapsible || expanded;
  var titleId = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)();
  var panelId = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useUniqueId)();

  var handleClick = function handleClick(event) {
    if (disabled) {
      return;
    }

    event.currentTarget.blur();
    toggleExpanded();
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (disabled || event.currentTarget !== event.target) {
      return;
    }

    if ([13, 32].includes(event.keyCode)) {
      event.preventDefault();

      if (event.repeat) {
        return;
      }

      toggleExpanded();
    }
  };

  var handleToggleClick = function handleToggleClick(event) {
    event.stopPropagation();
  };

  var collapsibleProps = {
    'aria-controls': panelId,
    'aria-expanded': expanded ? 'true' : 'false',
    tabIndex: !disabled ? tabIndex : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  };
  var nonCollapsibleProps = {
    'aria-disabled': 'true',
    'aria-expanded': 'true',
    'aria-labelledby': titleId
  };
  var barProps = noncollapsible ? nonCollapsibleProps : collapsibleProps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, Object.assign({
    is: "section",
    "rcx-accordion-item": true,
    className: className
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 10
    }
  }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, Object.assign({
    "rcx-accordion-item__bar": true,
    "rcx-accordion-item__bar--disabled": disabled
  }, barProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, {
    is: "h1",
    "rcx-accordion-item__title": true,
    id: titleId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, title), !noncollapsible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, (disabled || onToggleEnabled) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, {
    "rcx-accordion-item__toggle-switch": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 14
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ToggleSwitch__WEBPACK_IMPORTED_MODULE_7__.ToggleSwitch, {
    checked: !disabled,
    onClick: handleToggleClick,
    onChange: onToggleEnabled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Chevron__WEBPACK_IMPORTED_MODULE_6__.Chevron, {
    size: "x24",
    up: expanded,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, {
    "rcx-accordion-item__panel": true,
    "rcx-accordion-item__panel--expanded": panelExpanded,
    id: panelId,
    role: "region",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, children));
}
Item.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  defaultExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  expanded: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  onToggle: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  onToggleEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};

/***/ }),

/***/ "./src/components/Accordion/index.js":
/*!*******************************************!*\
  !*** ./src/components/Accordion/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! export Accordion [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => /* binding */ Accordion
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item */ "./src/components/Accordion/Item.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Accordion/index.js";




function Accordion(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_2__.Box, Object.assign({
    "rcx-accordion": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }));
}
Accordion.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node.isRequired)
};
Accordion.Item = _Item__WEBPACK_IMPORTED_MODULE_3__.Item;

/***/ }),

/***/ "./src/components/AutoComplete/index.js":
/*!**********************************************!*\
  !*** ./src/components/AutoComplete/index.js ***!
  \**********************************************/
/*! namespace exports */
/*! export AutoComplete [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutoComplete": () => /* binding */ AutoComplete
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rocket.chat/fuselage-hooks */ "@rocket.chat/fuselage-hooks");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Chip */ "./src/components/Chip/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
/* harmony import */ var _Margins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Margins */ "./src/components/Margins/index.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Options */ "./src/components/Options/index.js");
;

var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/AutoComplete/index.js";










var Addon = function Addon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    "rcx-autocomplete__addon": true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 26
    }
  }));
};

var SelectedOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_4__.default, Object.assign({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 47
    }
  }));
});
function AutoComplete(_ref) {
  var value = _ref.value,
      filter = _ref.filter,
      _ref$setFilter = _ref.setFilter,
      setFilter = _ref$setFilter === void 0 ? function () {} : _ref$setFilter,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      renderItem = _ref.renderItem,
      _ref$renderSelected = _ref.renderSelected,
      RenderSelected = _ref$renderSelected === void 0 ? SelectedOptions : _ref$renderSelected,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$getLabel = _ref.getLabel,
      getLabel = _ref$getLabel === void 0 ? function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        label = _ref2.label;

    return label;
  } : _ref$getLabel,
      _ref$getValue = _ref.getValue,
      getValue = _ref$getValue === void 0 ? function (_ref3) {
    var value = _ref3.value;
    return value;
  } : _ref$getValue,
      renderEmpty = _ref.renderEmpty,
      placeholder = _ref.placeholder,
      error = _ref.error,
      disabled = _ref.disabled;

  var _useResizeObserver = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1__.useResizeObserver)(),
      containerRef = _useResizeObserver.ref,
      borderBoxSize = _useResizeObserver.borderBoxSize;

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var selectByKeyboard = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1__.useMutableCallback)(function (_ref4) {
    var _ref5 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, 1),
        value = _ref5[0];

    setFilter('');
    onChange(value);
  });
  var memoizedOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return options.map(function (_ref6) {
      var label = _ref6.label,
          value = _ref6.value;
      return [value, label];
    });
  }, [options]);

  var _useCursor = (0,_Options__WEBPACK_IMPORTED_MODULE_8__.useCursor)(value, memoizedOptions, selectByKeyboard),
      _useCursor2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useCursor, 5),
      cursor = _useCursor2[0],
      handleKeyDown = _useCursor2[1],
      reset = _useCursor2[3],
      _useCursor2$ = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useCursor2[4], 3),
      optionsAreVisible = _useCursor2$[0],
      hide = _useCursor2$[1],
      show = _useCursor2$[2];

  var onSelect = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1__.useMutableCallback)(function (_ref7) {
    var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref7, 1),
        value = _ref8[0];

    onChange(value);
    setFilter('');
    hide();
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(reset, [filter]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    "rcx-autocomplete": true,
    ref: containerRef,
    onClick: (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1__.useMutableCallback)(function () {
      return ref.current.focus();
    }),
    flexGrow: 1,
    className: (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
      return [error && 'invalid', disabled && 'disabled'];
    }, [error, disabled]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    flexWrap: "wrap",
    margin: "neg-x4",
    role: "listbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_7__.default, {
    all: "x4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_6__.InputBox.Input, {
    ref: ref,
    onChange: (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1__.useMutableCallback)(function (e) {
      return setFilter(e.currentTarget.value);
    }),
    onBlur: hide,
    onFocus: show,
    onKeyDown: handleKeyDown,
    placeholder: placeholder,
    order: 1,
    "rcx-input-box--undecorated": true,
    value: filter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), value && optionsAreVisible === _Box__WEBPACK_IMPORTED_MODULE_3__.AnimatedVisibility.HIDDEN && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(RenderSelected, {
    role: "option",
    value: value,
    label: getLabel(options.find(function (option) {
      return getValue(option) === value;
    })),
    children: getLabel(options.find(function (option) {
      return getValue(option) === value;
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 72
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Addon, {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_5__.Icon, {
      name: optionsAreVisible === _Box__WEBPACK_IMPORTED_MODULE_3__.AnimatedVisibility.VISIBLE ? 'cross' : 'chevron-down',
      size: "x20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 24
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.PositionAnimated, {
    visible: optionsAreVisible,
    anchor: containerRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Options__WEBPACK_IMPORTED_MODULE_8__.Options, {
    role: "option",
    width: borderBoxSize.inlineSize,
    onSelect: onSelect,
    renderItem: renderItem,
    renderEmpty: renderEmpty,
    cursor: cursor,
    value: value,
    options: memoizedOptions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/components/Avatar/index.js":
/*!****************************************!*\
  !*** ./src/components/Avatar/index.js ***!
  \****************************************/
/*! namespace exports */
/*! export Avatar [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Avatar": () => /* binding */ Avatar
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_keyed_flatten_children__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-keyed-flatten-children */ "./node_modules/react-keyed-flatten-children/index.js");
/* harmony import */ var _helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/createPropType */ "./src/helpers/createPropType.js");
/* harmony import */ var _styleTokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styleTokens */ "./src/styleTokens.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;

var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Avatar/index.js",
    _this = undefined;







var AvatarContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
  baseUrl: ''
});
function Avatar(_ref) {
  var title = _ref.title,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? false : _ref$rounded,
      url = _ref.url,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'x36' : _ref$size,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["title", "rounded", "url", "size"]);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(AvatarContext),
      baseUrl = _useContext.baseUrl;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_6__.Box, Object.assign({
    is: "figure",
    "rcx-avatar": true,
    "aria-label": title
  }, props, {
    width: size,
    height: size,
    verticalAlign: "middle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_6__.Box, Object.assign({
    is: "img"
  }, props, {
    "rcx-avatar__element": true,
    "rcx-avatar__element--rounded": rounded,
    src: "".concat(baseUrl).concat(url),
    width: size,
    height: size,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  })));
}
Avatar.Context = AvatarContext;
Avatar.propTypes = {
  rounded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  size: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_5__.size),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};

var AvatarStack = function AvatarStack(_ref2) {
  var children = _ref2.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_6__.Box, Object.assign({
    "rcx-avatar-stack": true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 3
    }
  }), (0,react_keyed_flatten_children__WEBPACK_IMPORTED_MODULE_3__.default)(children).reverse());
};

Avatar.Stack = AvatarStack;

/***/ }),

/***/ "./src/components/Badge/index.js":
/*!***************************************!*\
  !*** ./src/components/Badge/index.js ***!
  \***************************************/
/*! namespace exports */
/*! export Badge [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Badge": () => /* binding */ Badge
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tag */ "./src/components/Tag/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Badge/index.js";



function Badge(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Tag__WEBPACK_IMPORTED_MODULE_2__.Tag, Object.assign({}, props, {
    round: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }));
}
Badge.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['secondary', 'primary', 'danger', 'warning', 'ghost'])
};

/***/ }),

/***/ "./src/components/Box/AnimatedVisibility/index.js":
/*!********************************************************!*\
  !*** ./src/components/Box/AnimatedVisibility/index.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rocket.chat/css-in-js */ "./node_modules/@rocket.chat/css-in-js/dist/index.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_appendClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/appendClassName */ "./src/helpers/appendClassName.js");
/* harmony import */ var _hooks_useStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useStyle */ "./src/hooks/useStyle.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transforms */ "./src/components/Box/transforms.js");
;

var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Box/AnimatedVisibility/index.js";

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        from {\n          transform: translate3d(0, 1rem, 0);\n          opacity: 0;\n        }\n\n        to {\n          transform: translate3d(0, 0, 0);\n          opacity: 1;\n        }\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      animation-name: ", ";\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        from {\n          transform: translate3d(0, 0, 0);\n          opacity: 1;\n        }\n\n        to {\n          transform: translate3d(0, 1rem, 0);\n          opacity: 0;\n        }\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      animation-name: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    animation-duration: 230ms;\n\n    ", "\n\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function AnimatedVisibility(_ref) {
  var children = _ref.children,
      _ref$visibility = _ref.visibility,
      propVisibility = _ref$visibility === void 0 ? AnimatedVisibility.HIDDEN : _ref$visibility;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(propVisibility),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      visibility = _useState2[0],
      setVisibility = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setVisibility(function (visibility) {
      if (propVisibility === AnimatedVisibility.VISIBLE && visibility !== propVisibility) {
        return AnimatedVisibility.UNHIDING;
      }

      if (propVisibility === AnimatedVisibility.HIDDEN && visibility !== propVisibility) {
        return AnimatedVisibility.HIDING;
      }

      return visibility;
    });
  }, [propVisibility]);
  var className = (0,_hooks_useStyle__WEBPACK_IMPORTED_MODULE_6__.useStyle)((0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject(), visibility === AnimatedVisibility.HIDING && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject2(), (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_2__.keyframes)(_templateObject3())), visibility === AnimatedVisibility.UNHIDING && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject4(), (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_2__.keyframes)(_templateObject5()))));
  var handleAnimationEnd = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    return setVisibility(function (visibility) {
      if (visibility === AnimatedVisibility.HIDING) {
        return AnimatedVisibility.HIDDEN;
      }

      if (visibility === AnimatedVisibility.UNHIDING) {
        return AnimatedVisibility.VISIBLE;
      }

      return visibility;
    });
  }, []);
  var transformFn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (props) {
    if (props.onAnimationEnd === undefined) {
      props.onAnimationEnd = handleAnimationEnd;
    }

    props.className = (0,_helpers_appendClassName__WEBPACK_IMPORTED_MODULE_5__.appendClassName)(props.className, className);
    return props;
  }, [className, handleAnimationEnd]);
  var composedFn = (0,_transforms__WEBPACK_IMPORTED_MODULE_7__.useComposedBoxTransform)(transformFn);

  if (visibility === AnimatedVisibility.HIDDEN) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_transforms__WEBPACK_IMPORTED_MODULE_7__.BoxTransforms.Provider, {
    children: children,
    value: composedFn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 10
    }
  });
}

AnimatedVisibility.HIDDEN = 'hidden';
AnimatedVisibility.VISIBLE = 'visible';
AnimatedVisibility.HIDING = 'hiding';
AnimatedVisibility.UNHIDING = 'unhiding';
AnimatedVisibility.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  visibility: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf([AnimatedVisibility.HIDDEN, AnimatedVisibility.VISIBLE, AnimatedVisibility.HIDING, AnimatedVisibility.UNHIDING])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedVisibility);

/***/ }),

/***/ "./src/components/Box/Flex/index.js":
/*!******************************************!*\
  !*** ./src/components/Box/Flex/index.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transforms */ "./src/components/Box/transforms.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Box/Flex/index.js";




function FlexContainer(_ref) {
  var _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      children = _ref.children,
      direction = _ref.direction,
      wrap = _ref.wrap,
      alignItems = _ref.alignItems,
      alignContent = _ref.alignContent,
      justifyContent = _ref.justifyContent;
  var transformFn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (props) {
    if (inline !== undefined && props.display === undefined) {
      props.display = inline ? 'inline-flex' : 'flex';
    }

    if (direction !== undefined && props.flexDirection === undefined) {
      props.flexDirection = direction;
    }

    if (wrap !== undefined && props.flexWrap === undefined) {
      props.flexWrap = wrap === 'no-wrap' ? 'nowrap' : wrap;
    }

    if (alignItems !== undefined && props.alignItems === undefined) {
      props.alignItems = alignItems === 'start' && 'flex-start' || alignItems === 'end' && 'flex-end' || alignItems;
    }

    if (alignContent !== undefined && props.alignContent === undefined) {
      props.alignContent = alignContent === 'start' && 'flex-start' || alignContent === 'end' && 'flex-end' || alignContent;
    }

    if (justifyContent !== undefined && props.justifyContent === undefined) {
      props.justifyContent = justifyContent === 'start' && 'flex-start' || justifyContent === 'end' && 'flex-end' || justifyContent;
    }

    return props;
  }, [alignContent, alignItems, direction, inline, justifyContent, wrap]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_transforms__WEBPACK_IMPORTED_MODULE_2__.BoxTransforms.Provider, {
    children: children,
    value: (0,_transforms__WEBPACK_IMPORTED_MODULE_2__.useComposedBoxTransform)(transformFn),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }
  });
}

FlexContainer.propTypes = {
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
  direction: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  wrap: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['no-wrap', 'wrap', 'wrap-reverse']),
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['stretch', 'start', 'center', 'end', 'baseline']),
  alignContent: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['start', 'center', 'end', 'space-between', 'space-around']),
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['start', 'center', 'end', 'space-between', 'space-around'])
};

function FlexItem(_ref2) {
  var children = _ref2.children,
      order = _ref2.order,
      grow = _ref2.grow,
      shrink = _ref2.shrink,
      basis = _ref2.basis,
      align = _ref2.align;
  var transformFn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (props) {
    if (order !== undefined && props.order === undefined) {
      props.order = order;
    }

    if (grow !== undefined && props.flexGrow === undefined) {
      props.flexGrow = grow;
    }

    if (shrink !== undefined && props.flexShrink === undefined) {
      props.flexShrink = shrink;
    }

    if (basis !== undefined && props.flexBasis === undefined) {
      props.flexBasis = basis;
    }

    if (align !== undefined && props.alignSelf === undefined) {
      props.alignSelf = align === 'start' && 'flex-start' || align === 'end' && 'flex-end' || align;
    }

    return props;
  }, [align, basis, grow, order, shrink]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_transforms__WEBPACK_IMPORTED_MODULE_2__.BoxTransforms.Provider, {
    children: children,
    value: (0,_transforms__WEBPACK_IMPORTED_MODULE_2__.useComposedBoxTransform)(transformFn),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 10
    }
  });
}

FlexItem.propTypes = {
  order: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  grow: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  shrink: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  basis: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['auto'])]),
  align: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(['auto', 'start', 'end', 'center', 'stretch'])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Container: FlexContainer,
  Item: FlexItem
});

/***/ }),

/***/ "./src/components/Box/Position/index.js":
/*!**********************************************!*\
  !*** ./src/components/Box/Position/index.js ***!
  \**********************************************/
/*! namespace exports */
/*! export PositionAnimated [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PositionAnimated": () => /* binding */ PositionAnimated,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rocket.chat/fuselage-hooks */ "@rocket.chat/fuselage-hooks");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AnimatedVisibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AnimatedVisibility */ "./src/components/Box/AnimatedVisibility/index.js");
;


var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Box/Position/index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Position = function Position(_ref) {
  var anchor = _ref.anchor,
      children = _ref.children,
      placement = _ref.placement,
      margin = _ref.margin,
      className = _ref.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["anchor", "children", "placement", "margin", "className"]);

  var target = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var _ref2 = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.usePosition)(anchor, target, (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    return {
      placement: placement,
      margin: margin
    };
  }, [placement, margin])) || {},
      positionStyle = _ref2.style,
      positionPlacement = _ref2.placement;

  var style = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    return _objectSpread({
      position: 'fixed'
    }, positionStyle);
  }, [positionStyle]);
  var portalContainer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    var element = document.createElement('div');
    document.body.appendChild(element);
    return element;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    return function () {
      return document.body.removeChild(portalContainer);
    };
  }, [portalContainer]);
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_4___default().createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(children, _objectSpread(_objectSpread({
    ref: target,
    style: style
  }, props), {}, {
    placement: positionPlacement
  })), portalContainer);
};

var PositionAnimated = function PositionAnimated(_ref3) {
  var width = _ref3.width,
      margin = _ref3.margin,
      placement = _ref3.placement,
      visible = _ref3.visible,
      children = _ref3.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, ["width", "margin", "placement", "visible", "children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_AnimatedVisibility__WEBPACK_IMPORTED_MODULE_5__.default, {
    visibility: visible,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Position, Object.assign({
    margin: margin,
    placement: placement
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 44
    }
  }), children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Position);

/***/ }),

/***/ "./src/components/Box/Scrollable/index.js":
/*!************************************************!*\
  !*** ./src/components/Box/Scrollable/index.js ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rocket.chat/css-in-js */ "./node_modules/@rocket.chat/css-in-js/dist/index.module.js");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rocket.chat/fuselage-hooks */ "@rocket.chat/fuselage-hooks");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_appendClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/appendClassName */ "./src/helpers/appendClassName.js");
/* harmony import */ var _hooks_useStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useStyle */ "./src/hooks/useStyle.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transforms */ "./src/components/Box/transforms.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Box/Scrollable/index.js";

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["scroll-behavior: smooth !important;"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["overflow: auto !important;"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["overflow-y: auto !important;"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["overflow-x: auto !important;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    position: relative;\n\n    &::-webkit-scrollbar {\n      width: ", "rem;\n      height: ", "rem;\n    }\n\n    &::-webkit-scrollbar-track {\n      background-color: transparent;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: rgba(0, 0, 0, 0.05);\n      background-color: var(--rcx-theme-scrollbar-thumb-color, rgba(0, 0, 0, 0.05));\n    }\n\n    &:hover::-webkit-scrollbar-thumb {\n      background-color: rgba(0, 0, 0, 0.15);\n      background-color: var(--rcx-theme-scrollbar-thumb-hover-color, rgba(0, 0, 0, 0.15));\n    }\n\n    ", "\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var getTouchingEdges = function getTouchingEdges(element) {
  return {
    top: !element.scrollTop,
    bottom: !(element.scrollTop + element.clientHeight - element.scrollHeight),
    left: !element.scrollLeft,
    right: !(element.scrollLeft + element.clientWidth - element.scrollWidth)
  };
};

var pollTouchingEdges = function pollTouchingEdges(element, touchingEdgesRef, onScrollContent) {
  var touchingEdges = touchingEdgesRef.current;
  var newTouchingEdges = getTouchingEdges(element);
  var dirty = touchingEdges.top !== newTouchingEdges.top || touchingEdges.bottom !== newTouchingEdges.bottom || touchingEdges.left !== newTouchingEdges.left || touchingEdges.right !== newTouchingEdges.right;

  if (dirty) {
    touchingEdgesRef.current = newTouchingEdges;
    onScrollContent(newTouchingEdges);
  }
};

function Scrollable(_ref) {
  var children = _ref.children,
      horizontal = _ref.horizontal,
      vertical = _ref.vertical,
      smooth = _ref.smooth,
      onScrollContent = _ref.onScrollContent;
  var scrollTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  var touchingEdgesRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)({});
  var handleScroll = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutableCallback)(function (event) {
    var element = event.currentTarget;

    if (!scrollTimeoutRef.current) {
      pollTouchingEdges(element, touchingEdgesRef, onScrollContent);
    }

    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(function () {
      scrollTimeoutRef.current = false;
      pollTouchingEdges(element, touchingEdgesRef, onScrollContent);
    }, 200);
  });
  var className = (0,_hooks_useStyle__WEBPACK_IMPORTED_MODULE_6__.useStyle)((0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject(), 4 / 16, 4 / 16, horizontal && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2()) || vertical && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject3()) || (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject4()), smooth && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject5())));
  var transformFn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function (props) {
    props.className = (0,_helpers_appendClassName__WEBPACK_IMPORTED_MODULE_5__.appendClassName)(props.className, className);

    if (onScrollContent !== undefined && props.onScroll === undefined) {
      props.onScroll = handleScroll;
    }

    return props;
  }, [className, handleScroll, onScrollContent]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_transforms__WEBPACK_IMPORTED_MODULE_7__.BoxTransforms.Provider, {
    children: children,
    value: (0,_transforms__WEBPACK_IMPORTED_MODULE_7__.useComposedBoxTransform)(transformFn),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 10
    }
  });
}

Scrollable.propTypes = {
  horizontal: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  vertical: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  smooth: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  onScrollContent: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollable);

/***/ }),

/***/ "./src/components/Box/index.js":
/*!*************************************!*\
  !*** ./src/components/Box/index.js ***!
  \*************************************/
/*! namespace exports */
/*! export AnimatedVisibility [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/AnimatedVisibility/index.js .default */
/*! export Box [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Flex [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/Flex/index.js .default */
/*! export Position [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/Position/index.js .default */
/*! export PositionAnimated [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/Position/index.js .PositionAnimated */
/*! export Scrollable [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/Scrollable/index.js .default */
/*! export useArrayLikeClassNameProp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useBoxOnlyProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useArrayLikeClassNameProp": () => /* binding */ useArrayLikeClassNameProp,
/* harmony export */   "useBoxOnlyProps": () => /* binding */ useBoxOnlyProps,
/* harmony export */   "Box": () => /* binding */ Box,
/* harmony export */   "AnimatedVisibility": () => /* reexport safe */ _AnimatedVisibility__WEBPACK_IMPORTED_MODULE_12__.default,
/* harmony export */   "Flex": () => /* reexport safe */ _Flex__WEBPACK_IMPORTED_MODULE_13__.default,
/* harmony export */   "Position": () => /* reexport safe */ _Position__WEBPACK_IMPORTED_MODULE_14__.default,
/* harmony export */   "PositionAnimated": () => /* reexport safe */ _Position__WEBPACK_IMPORTED_MODULE_14__.PositionAnimated,
/* harmony export */   "Scrollable": () => /* reexport safe */ _Scrollable__WEBPACK_IMPORTED_MODULE_15__.default
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rocket.chat/css-in-js */ "./node_modules/@rocket.chat/css-in-js/dist/index.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_appendClassName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/appendClassName */ "./src/helpers/appendClassName.js");
/* harmony import */ var _helpers_prependClassName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/prependClassName */ "./src/helpers/prependClassName.js");
/* harmony import */ var _hooks_useStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useStyle */ "./src/hooks/useStyle.js");
/* harmony import */ var _hooks_useStyleSheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useStyleSheet */ "./src/hooks/useStyleSheet.js");
/* harmony import */ var _stylingProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stylingProps */ "./src/components/Box/stylingProps/index.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transforms */ "./src/components/Box/transforms.js");
/* harmony import */ var _AnimatedVisibility__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AnimatedVisibility */ "./src/components/Box/AnimatedVisibility/index.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Flex */ "./src/components/Box/Flex/index.js");
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Position */ "./src/components/Box/Position/index.js");
/* harmony import */ var _Scrollable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Scrollable */ "./src/components/Box/Scrollable/index.js");
;


var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Box/index.js";

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var useArrayLikeClassNameProp = function useArrayLikeClassNameProp(props) {
  var classNames = [].concat(props.className);
  var cssFns = classNames.filter(function (value) {
    return typeof value === 'function';
  });
  var stylesClassName = (0,_hooks_useStyle__WEBPACK_IMPORTED_MODULE_8__.useStyle)((0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject(), cssFns), props);
  var strings = classNames.filter(function (value) {
    return typeof value === 'string';
  });
  props.className = strings.reduce(function (className, string) {
    return (0,_helpers_appendClassName__WEBPACK_IMPORTED_MODULE_6__.appendClassName)(className, string);
  }, stylesClassName || '');
  return props;
};
var useBoxOnlyProps = function useBoxOnlyProps(props) {
  Object.entries(props).forEach(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (key.slice(0, 4) === 'rcx-') {
      if (!value) {
        delete props[key];
        return;
      }

      var newClassName = value === true ? key : "".concat(key, "-").concat(value);
      props.className = (0,_helpers_prependClassName__WEBPACK_IMPORTED_MODULE_7__.prependClassName)(props.className, newClassName);
      delete props[key];
    }
  });
  props.className = (0,_helpers_prependClassName__WEBPACK_IMPORTED_MODULE_7__.prependClassName)(props.className, 'rcx-box rcx-box--full');
  return props;
};
var Box = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.memo)( /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(function Box(_ref3, ref) {
  var _ref3$is = _ref3.is,
      is = _ref3$is === void 0 ? 'div' : _ref3$is,
      children = _ref3.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, ["is", "children"]);

  (0,_hooks_useStyleSheet__WEBPACK_IMPORTED_MODULE_9__.useStyleSheet)();

  if (ref) {
    props.ref = ref;
  }

  props = useArrayLikeClassNameProp(props);
  var transformFn = (0,_transforms__WEBPACK_IMPORTED_MODULE_11__.useBoxTransform)();

  if (transformFn) {
    props = transformFn(props);
  }

  props = useBoxOnlyProps(props);
  props = (0,_stylingProps__WEBPACK_IMPORTED_MODULE_10__.useStylingProps)(props);
  var element = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.createElement)(is, props, children);

  if (transformFn) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_transforms__WEBPACK_IMPORTED_MODULE_11__.BoxTransforms.Provider, {
      children: element,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 12
      }
    });
  }

  return element;
}));

if (true) {
  Box.displayName = 'Box';
  Box.propTypes = {
    is: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),
    className: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)]) // ...stylingPropsPropTypes,

  };
}

Box.defaultProps = {
  is: 'div'
};





/***/ }),

/***/ "./src/components/Box/stylingProps/index.js":
/*!**************************************************!*\
  !*** ./src/components/Box/stylingProps/index.js ***!
  \**************************************************/
/*! namespace exports */
/*! export propTypes [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useStylingProps [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "propTypes": () => /* binding */ propTypes,
/* harmony export */   "useStylingProps": () => /* binding */ useStylingProps
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rocket.chat/css-in-js */ "./node_modules/@rocket.chat/css-in-js/dist/index.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_appendClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/appendClassName */ "./src/helpers/appendClassName.js");
/* harmony import */ var _helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers/createPropType */ "./src/helpers/createPropType.js");
/* harmony import */ var _helpers_fromCamelToKebab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/fromCamelToKebab */ "./src/helpers/fromCamelToKebab.js");
/* harmony import */ var _hooks_useStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useStyle */ "./src/hooks/useStyle.js");
/* harmony import */ var _styleTokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styleTokens */ "./src/styleTokens.js");
/* harmony import */ var _richContentStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./richContentStyle */ "./src/components/Box/stylingProps/richContentStyle.js");
;



function _templateObject11() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["", ""]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["", ": ", " !important;"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n      font-size: ", " !important;\n      font-weight: ", " !important;\n      letter-spacing: ", " !important;\n      line-height: ", " !important;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n          max-width: ", " !important;\n          max-height: ", " !important;\n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n          min-width: ", " !important;\n          min-height: ", " !important;\n        "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n          width: ", " !important;\n          height: ", " !important;\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n          visibility: hidden;\n          opacity: 0;\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["\n        box-shadow:\n          0px 0px 2px 0px ", ",\n          0px 0px 12px 0px ", ";\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["box-shadow: 0px 0px 12px 0px ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()(["box-shadow: none;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var stringProp = {
  toCSSValue: function toCSSValue(value) {
    return typeof value === 'string' ? value : undefined;
  },
  propType: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
var numberOrStringProp = {
  toCSSValue: function toCSSValue(value) {
    if (typeof value === 'number' || typeof value === 'string') {
      return String(value);
    }
  },
  propType: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)])
};
var borderWidthProp = {
  toCSSValue: _styleTokens__WEBPACK_IMPORTED_MODULE_9__.borderWidth,
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.borderWidth)
};
var borderRadiusProp = {
  toCSSValue: _styleTokens__WEBPACK_IMPORTED_MODULE_9__.borderRadius,
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.borderRadius)
};
var colorProp = {
  toCSSValue: _styleTokens__WEBPACK_IMPORTED_MODULE_9__.color,
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.color)
};
var sizeProp = {
  toCSSValue: _styleTokens__WEBPACK_IMPORTED_MODULE_9__.size,
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)
};
var insetProp = {
  toCSSValue: _styleTokens__WEBPACK_IMPORTED_MODULE_9__.inset,
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.inset)
};
var marginProp = {
  toCSSValue: _styleTokens__WEBPACK_IMPORTED_MODULE_9__.margin,
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.margin)
};
var paddingProp = {
  toCSSValue: _styleTokens__WEBPACK_IMPORTED_MODULE_9__.padding,
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.padding)
};
var fontFamilyProp = {
  toCSSValue: _styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontFamily,
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontFamily)
};
var fontSizeProp = {
  toCSSValue: function toCSSValue(value) {
    var _fontScale;

    return ((_fontScale = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale === void 0 ? void 0 : _fontScale.fontSize) || (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value);
  },
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(function (value) {
    var _fontScale2;

    return ((_fontScale2 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale2 === void 0 ? void 0 : _fontScale2.fontSize) || (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value);
  })
};
var fontWeightProp = {
  toCSSValue: function toCSSValue(value) {
    var _fontScale3;

    return ((_fontScale3 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale3 === void 0 ? void 0 : _fontScale3.fontWeight) || value;
  },
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(function (value) {
    var _fontScale4;

    return ((_fontScale4 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale4 === void 0 ? void 0 : _fontScale4.fontWeight) || value;
  })
};
var lineHeightProp = {
  toCSSValue: function toCSSValue(value) {
    var _fontScale5;

    return ((_fontScale5 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale5 === void 0 ? void 0 : _fontScale5.lineHeight) || (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value);
  },
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(function (value) {
    var _fontScale6;

    return ((_fontScale6 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale6 === void 0 ? void 0 : _fontScale6.lineHeight) || (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value);
  })
};
var letterSpacingProp = {
  toCSSValue: function toCSSValue(value) {
    var _fontScale7;

    return ((_fontScale7 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale7 === void 0 ? void 0 : _fontScale7.letterSpacing) || value;
  },
  propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(function (value) {
    var _fontScale8;

    return ((_fontScale8 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale8 === void 0 ? void 0 : _fontScale8.letterSpacing) || value;
  })
};

var aliasOf = function aliasOf(propName) {
  return {
    aliasOf: propName
  };
};

var propDefs = {
  border: stringProp,
  borderBlock: stringProp,
  borderBlockStart: stringProp,
  borderBlockEnd: stringProp,
  borderInline: stringProp,
  borderInlineStart: stringProp,
  borderInlineEnd: stringProp,
  borderWidth: borderWidthProp,
  borderBlockWidth: borderWidthProp,
  borderBlockStartWidth: borderWidthProp,
  borderBlockEndWidth: borderWidthProp,
  borderInlineWidth: borderWidthProp,
  borderInlineStartWidth: borderWidthProp,
  borderInlineEndWidth: borderWidthProp,
  borderStyle: stringProp,
  borderBlockStyle: stringProp,
  borderBlockStartStyle: stringProp,
  borderBlockEndStyle: stringProp,
  borderInlineStyle: stringProp,
  borderInlineStartStyle: stringProp,
  borderInlineEndStyle: stringProp,
  borderColor: colorProp,
  borderBlockColor: colorProp,
  borderBlockStartColor: colorProp,
  borderBlockEndColor: colorProp,
  borderInlineColor: colorProp,
  borderInlineStartColor: colorProp,
  borderInlineEndColor: colorProp,
  borderRadius: borderRadiusProp,
  borderStartStartRadius: borderRadiusProp,
  borderStartEndRadius: borderRadiusProp,
  borderEndStartRadius: borderRadiusProp,
  borderEndEndRadius: borderRadiusProp,
  color: colorProp,
  backgroundColor: colorProp,
  bg: aliasOf('backgroundColor'),
  opacity: numberOrStringProp,
  alignItems: stringProp,
  alignContent: stringProp,
  justifyItems: stringProp,
  justifyContent: stringProp,
  flexWrap: stringProp,
  flexDirection: stringProp,
  flexGrow: numberOrStringProp,
  flexShrink: numberOrStringProp,
  flexBasis: stringProp,
  justifySelf: stringProp,
  alignSelf: stringProp,
  order: numberOrStringProp,
  w: aliasOf('width'),
  width: sizeProp,
  minWidth: sizeProp,
  maxWidth: sizeProp,
  h: aliasOf('height'),
  height: sizeProp,
  minHeight: sizeProp,
  maxHeight: sizeProp,
  display: stringProp,
  verticalAlign: stringProp,
  overflow: stringProp,
  overflowX: stringProp,
  overflowY: stringProp,
  position: stringProp,
  zIndex: numberOrStringProp,
  inset: insetProp,
  insetBlock: insetProp,
  insetBlockStart: insetProp,
  insetBlockEnd: insetProp,
  insetInline: insetProp,
  insetInlineStart: insetProp,
  insetInlineEnd: insetProp,
  m: aliasOf('margin'),
  margin: marginProp,
  mb: aliasOf('marginBlock'),
  marginBlock: marginProp,
  mbs: aliasOf('marginBlockStart'),
  marginBlockStart: marginProp,
  mbe: aliasOf('marginBlockEnd'),
  marginBlockEnd: marginProp,
  mi: aliasOf('marginInline'),
  marginInline: marginProp,
  mis: aliasOf('marginInlineStart'),
  marginInlineStart: marginProp,
  mie: aliasOf('marginInlineEnd'),
  marginInlineEnd: marginProp,
  p: aliasOf('padding'),
  padding: paddingProp,
  pb: aliasOf('paddingBlock'),
  paddingBlock: paddingProp,
  pbs: aliasOf('paddingBlockStart'),
  paddingBlockStart: paddingProp,
  pbe: aliasOf('paddingBlockEnd'),
  paddingBlockEnd: paddingProp,
  pi: aliasOf('paddingInline'),
  paddingInline: paddingProp,
  pis: aliasOf('paddingInlineStart'),
  paddingInlineStart: paddingProp,
  pie: aliasOf('paddingInlineEnd'),
  paddingInlineEnd: paddingProp,
  fontFamily: fontFamilyProp,
  fontSize: fontSizeProp,
  fontStyle: stringProp,
  fontWeight: fontWeightProp,
  letterSpacing: letterSpacingProp,
  lineHeight: lineHeightProp,
  textAlign: stringProp,
  textTransform: stringProp,
  textDecorationLine: stringProp,
  elevation: {
    toStyle: function toStyle(value) {
      if (value === '0') {
        return (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject());
      }

      if (value === '1') {
        return (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject2(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.color)('neutral-800-10'));
      }

      if (value === '2') {
        return (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject3(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.color)('neutral-800-8'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.color)('neutral-800-12'));
      }
    },
    propType: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['0', '1', '2'])
  },
  invisible: {
    toStyle: function toStyle(value) {
      return value ? (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject4()) : undefined;
    },
    propType: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
  },
  withRichContent: {
    toStyle: function toStyle(value) {
      return value ? _richContentStyle__WEBPACK_IMPORTED_MODULE_10__.default : undefined;
    },
    propType: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
  },
  withTruncatedText: {
    toStyle: function toStyle(value) {
      return value ? (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject5()) : undefined;
    },
    propType: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool)
  },
  size: {
    toStyle: function toStyle(value) {
      return (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value) ? (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject6(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value)) : undefined;
    },
    propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)
  },
  minSize: {
    toStyle: function toStyle(value) {
      return (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value) ? (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject7(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value)) : undefined;
    },
    propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)
  },
  maxSize: {
    toStyle: function toStyle(value) {
      return (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value) ? (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject8(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)(value)) : undefined;
    },
    propType: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_6__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.size)
  },
  fontScale: {
    toStyle: function toStyle(value) {
      var _fontScale9, _fontScale10, _fontScale11, _fontScale12;

      return (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject9(), (_fontScale9 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale9 === void 0 ? void 0 : _fontScale9.fontSize, (_fontScale10 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale10 === void 0 ? void 0 : _fontScale10.fontWeight, (_fontScale11 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale11 === void 0 ? void 0 : _fontScale11.letterSpacing, (_fontScale12 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale)(value)) === null || _fontScale12 === void 0 ? void 0 : _fontScale12.lineHeight);
    },
    propType: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(_styleTokens__WEBPACK_IMPORTED_MODULE_9__.fontScale.values)
  }
};
var propTypes = Object.entries(propDefs).reduce(function (obj, _ref) {
  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
      propName = _ref2[0],
      propDef = _ref2[1];

  if (propDef.aliasOf) {
    propDef = propDefs[propDef.aliasOf];
  }

  obj[propName] = propDef.propType;
  return obj;
}, {
  htmlSize: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number)])
});
var useStylingProps = function useStylingProps(originalProps) {
  var htmlSize = originalProps.htmlSize,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(originalProps, ["htmlSize"]);

  var stylingProps = new Map();

  for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
    var entry = _Object$entries[_i];

    var _entry = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(entry, 2),
        propName = _entry[0],
        propValue = _entry[1];

    var propDef = propDefs[propName];

    if (!propDef) {
      continue;
    }

    delete props[propName];

    if (propValue === undefined) {
      continue;
    }

    var effectivePropName = propName;
    var effectivePropDef = propDef;

    if (effectivePropDef.aliasOf) {
      if (stylingProps.has(effectivePropDef.aliasOf)) {
        continue;
      }

      effectivePropName = effectivePropDef.aliasOf;
      effectivePropDef = propDefs[effectivePropName];
    }

    var _effectivePropDef = effectivePropDef,
        toStyle = _effectivePropDef.toStyle;

    if (effectivePropDef.toCSSValue) {
      (function () {
        var cssProperty = (0,_helpers_fromCamelToKebab__WEBPACK_IMPORTED_MODULE_7__.fromCamelToKebab)(effectivePropName);
        var _effectivePropDef2 = effectivePropDef,
            toCSSValue = _effectivePropDef2.toCSSValue;

        toStyle = function toStyle(value) {
          var cssValue = toCSSValue(value);

          if (cssValue === undefined) {
            return;
          }

          return (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject10(), cssProperty, cssValue);
        };
      })();
    }

    var style = toStyle(propValue);

    if (style === undefined) {
      continue;
    }

    stylingProps.set(effectivePropName, style);
  }

  var styles = stylingProps.size ? Array.from(stylingProps.values()) : undefined;
  var newClassName = (0,_hooks_useStyle__WEBPACK_IMPORTED_MODULE_8__.useStyle)((0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject11(), styles));

  if (newClassName) {
    props.className = (0,_helpers_appendClassName__WEBPACK_IMPORTED_MODULE_5__.appendClassName)(props.className, newClassName);
  }

  if (htmlSize) {
    props.size = htmlSize;
  }

  return props;
};

/***/ }),

/***/ "./src/components/Box/stylingProps/richContentStyle.js":
/*!*************************************************************!*\
  !*** ./src/components/Box/stylingProps/richContentStyle.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rocket.chat/css-in-js */ "./node_modules/@rocket.chat/css-in-js/dist/index.module.js");
/* harmony import */ var _styleTokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styleTokens */ "./src/styleTokens.js");
;

var _fontScale, _fontScale2, _fontScale3, _fontScale4, _fontScale5, _fontScale6, _fontScale7, _fontScale8, _fontScale9, _fontScale10, _fontScale11, _fontScale12, _fontScale13, _fontScale14, _fontScale15, _fontScale16, _fontScale17, _fontScale18, _fontScale19, _fontScale20, _fontScale21, _fontScale22, _fontScale23, _fontScale24, _fontScale25, _fontScale26, _fontScale27, _fontScale28, _fontScale29, _fontScale30, _fontScale31, _fontScale32, _fontScale33, _fontScale34, _fontScale35, _fontScale36;

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  strong, em, b, i, a, q, cite, code, time, dfn, abbr, del, ins,\n  sup, sub, kbd, var, small, h1, h2, h3, h4, h5, h6, p {\n    color: inherit;\n    font: inherit;\n    letter-spacing: inherit;\n  }\n\n  strong, b {\n    font-weight: bolder;\n  }\n\n  em, i {\n    font-style: italic;\n  }\n\n  a {\n    &:link {\n      text-decoration: none;\n      color: ", ";\n    }\n\n    &:visited,\n    &.is-visited {\n      color: ", ";\n    }\n\n    &:active,\n    &.is-active {\n      color: ", ";\n    }\n\n    &:hover,\n    &.is-hovered {\n      text-decoration: underline;\n    }\n  }\n\n  q {\n    &::before {\n      content: open-quote;\n    }\n\n    &::after {\n      content: close-quote;\n    }\n\n    cite {\n      font-style: italic;\n    }\n  }\n\n  code {\n    padding:\n      ", "\n      ", ";\n    border-radius: ", ";\n    background-color: ", ";\n    font-family: ", ";\n    -webkit-font-smoothing: auto;\n  }\n\n  time {\n    color: ", ";\n  }\n\n  dfn {\n    color: ", ";\n    font-style: italic;\n  }\n\n  abbr {\n    &[title] {\n      text-decoration: underline dashed;\n      border-block-end-width: ", ";\n    }\n  }\n\n  del {\n    text-decoration: line-through solid;\n  }\n\n  ins {\n    text-decoration: underline solid;\n  }\n\n  sup,\n  sub {\n    position: relative;\n    vertical-align: baseline;\n    font-size: 75%;\n    line-height: 0;\n  }\n\n  sup {\n    inset-block-start: -0.5em;\n  }\n\n  sub {\n    inset-block-start: -0.25em;\n  }\n\n  kbd {\n    padding:\n      ", "\n      ", ";\n    border-width: ", ";\n    border-style: solid;\n    border-color: currentColor;\n    border-radius: ", ";\n    font-family: ", ";\n    -webkit-font-smoothing: auto;\n  }\n\n  var {\n    font-style: italic;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  ul,\n  ol,\n  pre {\n    display: block;\n    margin:\n      ", "\n      ", ";\n  }\n\n  h1 {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n  }\n\n  h2 {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n  }\n\n  h3 {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n  }\n\n  h4 {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n  }\n\n  h5 {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n  }\n\n  h6 {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n  }\n\n  p {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n  }\n\n  ul,\n  ol {\n    padding-inline-start: ", ";\n  }\n\n  ul {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n    list-style-type: disc;\n  }\n\n  ol {\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    letter-spacing: ", ";\n    list-style-type: decimal;\n  }\n\n  li {\n    display: list-item;\n    text-align: inherit;\n  }\n\n  pre {\n    font-family: ", ";\n\n    code {\n      display: block;\n      padding: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.color)('link'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.color)('visited-link'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.color)('active-link'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.padding)('x4'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.padding)('x8'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.borderRadius)('x2'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.color)('neutral-300'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontFamily)('mono'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.color)('info'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.color)('info'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.borderWidth)('none'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.padding)('x4'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.padding)('x8'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.borderWidth)('x1'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.borderRadius)('x2'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontFamily)('mono'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.margin)('x16'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.margin)('none'), (_fontScale = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('h1')) === null || _fontScale === void 0 ? void 0 : _fontScale.fontSize, (_fontScale2 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('h1')) === null || _fontScale2 === void 0 ? void 0 : _fontScale2.fontWeight, (_fontScale3 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('h1')) === null || _fontScale3 === void 0 ? void 0 : _fontScale3.lineHeight, (_fontScale4 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('h1')) === null || _fontScale4 === void 0 ? void 0 : _fontScale4.letterSpacing, (_fontScale5 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('s2')) === null || _fontScale5 === void 0 ? void 0 : _fontScale5.fontSize, (_fontScale6 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('s2')) === null || _fontScale6 === void 0 ? void 0 : _fontScale6.fontWeight, (_fontScale7 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('s2')) === null || _fontScale7 === void 0 ? void 0 : _fontScale7.lineHeight, (_fontScale8 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('s2')) === null || _fontScale8 === void 0 ? void 0 : _fontScale8.letterSpacing, (_fontScale9 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p2')) === null || _fontScale9 === void 0 ? void 0 : _fontScale9.fontSize, (_fontScale10 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p2')) === null || _fontScale10 === void 0 ? void 0 : _fontScale10.fontWeight, (_fontScale11 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p2')) === null || _fontScale11 === void 0 ? void 0 : _fontScale11.lineHeight, (_fontScale12 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p2')) === null || _fontScale12 === void 0 ? void 0 : _fontScale12.letterSpacing, (_fontScale13 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('c2')) === null || _fontScale13 === void 0 ? void 0 : _fontScale13.fontSize, (_fontScale14 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('c2')) === null || _fontScale14 === void 0 ? void 0 : _fontScale14.fontWeight, (_fontScale15 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('c2')) === null || _fontScale15 === void 0 ? void 0 : _fontScale15.lineHeight, (_fontScale16 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('c2')) === null || _fontScale16 === void 0 ? void 0 : _fontScale16.letterSpacing, (_fontScale17 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('micro')) === null || _fontScale17 === void 0 ? void 0 : _fontScale17.fontSize, (_fontScale18 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('micro')) === null || _fontScale18 === void 0 ? void 0 : _fontScale18.fontWeight, (_fontScale19 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('micro')) === null || _fontScale19 === void 0 ? void 0 : _fontScale19.lineHeight, (_fontScale20 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('micro')) === null || _fontScale20 === void 0 ? void 0 : _fontScale20.letterSpacing, (_fontScale21 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('micro')) === null || _fontScale21 === void 0 ? void 0 : _fontScale21.fontSize, (_fontScale22 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('micro')) === null || _fontScale22 === void 0 ? void 0 : _fontScale22.fontWeight, (_fontScale23 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('micro')) === null || _fontScale23 === void 0 ? void 0 : _fontScale23.lineHeight, (_fontScale24 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('micro')) === null || _fontScale24 === void 0 ? void 0 : _fontScale24.letterSpacing, (_fontScale25 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale25 === void 0 ? void 0 : _fontScale25.fontSize, (_fontScale26 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale26 === void 0 ? void 0 : _fontScale26.fontWeight, (_fontScale27 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale27 === void 0 ? void 0 : _fontScale27.lineHeight, (_fontScale28 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale28 === void 0 ? void 0 : _fontScale28.letterSpacing, (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.padding)('x40'), (_fontScale29 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale29 === void 0 ? void 0 : _fontScale29.fontSize, (_fontScale30 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale30 === void 0 ? void 0 : _fontScale30.fontWeight, (_fontScale31 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale31 === void 0 ? void 0 : _fontScale31.lineHeight, (_fontScale32 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale32 === void 0 ? void 0 : _fontScale32.letterSpacing, (_fontScale33 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale33 === void 0 ? void 0 : _fontScale33.fontSize, (_fontScale34 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale34 === void 0 ? void 0 : _fontScale34.fontWeight, (_fontScale35 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale35 === void 0 ? void 0 : _fontScale35.lineHeight, (_fontScale36 = (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontScale)('p1')) === null || _fontScale36 === void 0 ? void 0 : _fontScale36.letterSpacing, (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.fontFamily)('mono'), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_2__.padding)('x16')));

/***/ }),

/***/ "./src/components/Box/transforms.js":
/*!******************************************!*\
  !*** ./src/components/Box/transforms.js ***!
  \******************************************/
/*! namespace exports */
/*! export BoxTransforms [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useBoxTransform [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useComposedBoxTransform [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxTransforms": () => /* binding */ BoxTransforms,
/* harmony export */   "useBoxTransform": () => /* binding */ useBoxTransform,
/* harmony export */   "useComposedBoxTransform": () => /* binding */ useComposedBoxTransform
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
;
var BoxTransforms = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var useBoxTransform = function useBoxTransform() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BoxTransforms);
};
var useComposedBoxTransform = function useComposedBoxTransform(fn) {
  var parentFn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BoxTransforms);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!parentFn) {
      return fn;
    }

    if (!fn) {
      return parentFn;
    }

    return function () {
      return fn(parentFn.apply(void 0, arguments));
    };
  }, [fn, parentFn]);
};

/***/ }),

/***/ "./src/components/Box/withBoxStyling.js":
/*!**********************************************!*\
  !*** ./src/components/Box/withBoxStyling.js ***!
  \**********************************************/
/*! namespace exports */
/*! export withBoxStyling [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withBoxStyling": () => /* binding */ withBoxStyling
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useStyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useStyleSheet */ "./src/hooks/useStyleSheet.js");
/* harmony import */ var _stylingProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylingProps */ "./src/components/Box/stylingProps/index.js");
;


var withBoxStyling = function withBoxStyling(component) {
  var render = function render(props) {
    if (typeof component === 'function') {
      return component(props);
    }

    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, props);
  };

  var WithBoxStyling = function WithBoxStyling(props) {
    (0,_hooks_useStyleSheet__WEBPACK_IMPORTED_MODULE_1__.useStyleSheet)();
    props = (0,_stylingProps__WEBPACK_IMPORTED_MODULE_2__.useStylingProps)(props);
    return render(props);
  };

  if (true) {
    WithBoxStyling.displayName = "WithBoxStyling(".concat(component.displayName || component.name || 'Component', ")");
  }

  return WithBoxStyling;
};

/***/ }),

/***/ "./src/components/Button/ActionButton.js":
/*!***********************************************!*\
  !*** ./src/components/Button/ActionButton.js ***!
  \***********************************************/
/*! namespace exports */
/*! export ActionButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionButton": () => /* binding */ ActionButton
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/components/Button/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
;

var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Button/ActionButton.js";





var getSize = function getSize(_ref) {
  var tiny = _ref.tiny,
      mini = _ref.mini,
      small = _ref.small;

  if (mini) {
    return 'x16';
  }

  if (tiny) {
    return 'x20';
  }

  if (small) {
    return 'x20';
  }

  return 'x20';
};

var ActionButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function (_ref2, ref) {
  var icon = _ref2.icon,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["icon"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.Button, Object.assign({
    ref: ref,
    square: true,
    flexShrink: 0
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 75
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    name: icon,
    size: getSize(props),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 126
    }
  }));
});

/***/ }),

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/*! namespace exports */
/*! export Button [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => /* binding */ Button
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Button/index.js";



var Button = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function Button(_ref, ref) {
  var danger = _ref.danger,
      success = _ref.success,
      external = _ref.external,
      ghost = _ref.ghost,
      _ref$is = _ref.is,
      is = _ref$is === void 0 ? 'button' : _ref$is,
      primary = _ref.primary,
      rel = _ref.rel,
      small = _ref.small,
      tiny = _ref.tiny,
      mini = _ref.mini,
      square = _ref.square,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["danger", "success", "external", "ghost", "is", "primary", "rel", "small", "tiny", "mini", "square"]);

  var extraProps = is === 'a' && {
    rel: external && 'noopener noreferrer',
    target: external && '_blank'
  } || is === 'button' && {
    type: 'button'
  } || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: is,
    "rcx-button": true,
    "rcx-button--danger": !primary && danger && !ghost,
    "rcx-button--success": !primary && success && !ghost,
    "rcx-button--ghost": !primary && !danger && ghost,
    "rcx-button--ghost-danger": !primary && danger && ghost,
    "rcx-button--ghost-success": !primary && success && ghost,
    "rcx-button--primary": primary && !danger && !ghost,
    "rcx-button--primary-danger": primary && danger && !ghost,
    "rcx-button--primary-success": primary && success && !ghost,
    "rcx-button--small": small,
    "rcx-button--square": square,
    "rcx-button--small-square": small && square,
    "rcx-button--tiny-square": tiny && square,
    "rcx-button--mini-square": mini && square,
    ref: ref
  }, extraProps, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }
  }));
});
Button.propTypes = {
  external: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/***/ }),

/***/ "./src/components/ButtonGroup/index.js":
/*!*********************************************!*\
  !*** ./src/components/ButtonGroup/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! export ButtonGroup [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonGroup": () => /* binding */ ButtonGroup
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_appendClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/appendClassName */ "./src/helpers/appendClassName.js");
/* harmony import */ var _helpers_patchChildren__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/patchChildren */ "./src/helpers/patchChildren.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/ButtonGroup/index.js";





function ButtonGroup(_ref) {
  var align = _ref.align,
      children = _ref.children,
      stretch = _ref.stretch,
      vertical = _ref.vertical,
      wrap = _ref.wrap,
      small = _ref.small,
      medium = _ref.medium,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["align", "children", "stretch", "vertical", "wrap", "small", "medium"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, Object.assign({
    "rcx-button-group": true,
    "rcx-button-group--align": align,
    "rcx-button-group--stretch": stretch,
    "rcx-button-group--vertical": vertical,
    "rcx-button-group--small": small,
    "rcx-button-group--medium": medium,
    "rcx-button-group--wrap": wrap,
    role: "group"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }), (0,_helpers_patchChildren__WEBPACK_IMPORTED_MODULE_4__.patchChildren)(children, function (childProps) {
    return {
      className: (0,_helpers_appendClassName__WEBPACK_IMPORTED_MODULE_3__.appendClassName)(childProps.className, 'rcx-button-group__item')
    };
  }));
}
ButtonGroup.defaultProps = {
  align: 'start'
};
ButtonGroup.propTypes = {
  /** The alignment that should be applied to the items */
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['start', 'center', 'end']),

  /** Will be the items stretched to fill space? */
  stretch: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Is the items vertically placed? */
  vertical: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),

  /** Will wrap the items when they exceed the container space? */
  wrap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  small: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  medium: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/***/ }),

/***/ "./src/components/Callout/index.js":
/*!*****************************************!*\
  !*** ./src/components/Callout/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! export Callout [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Callout": () => /* binding */ Callout
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Callout/index.js";




function Callout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'info' : _ref$type,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["children", "title", "type"]);

  var iconName = type === 'info' && 'info-circled' || type === 'success' && 'checkmark-circled' || type === 'warning' && 'warning' || type === 'danger' && 'ban';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "section",
    "rcx-callout": true,
    "rcx-callout--type": type
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {
    name: iconName,
    size: "x20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    "rcx-callout__wrapper": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    is: "h1",
    "rcx-callout__title": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, title), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    "rcx-callout__children": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 20
    }
  }, children)));
}
Callout.defaultProps = {
  type: 'info'
};
Callout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['info', 'success', 'warning', 'danger']).isRequired
};

/***/ }),

/***/ "./src/components/CheckBox/index.js":
/*!******************************************!*\
  !*** ./src/components/CheckBox/index.js ***!
  \******************************************/
/*! namespace exports */
/*! export CheckBox [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckBox": () => /* binding */ CheckBox
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rocket.chat/fuselage-hooks */ "@rocket.chat/fuselage-hooks");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Label */ "./src/components/Label/index.js");
;



var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/CheckBox/index.js";





var CheckBox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function CheckBox(_ref, ref) {
  var autoComplete = _ref.autoComplete,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      form = _ref.form,
      id = _ref.id,
      indeterminate = _ref.indeterminate,
      name = _ref.name,
      required = _ref.required,
      tabIndex = _ref.tabIndex,
      value = _ref.value,
      qa = _ref.qa,
      dataQa = _ref['data-qa'],
      onChange = _ref.onChange,
      onInput = _ref.onInput,
      onInvalid = _ref.onInvalid,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["autoComplete", "checked", "defaultChecked", "disabled", "form", "id", "indeterminate", "name", "required", "tabIndex", "value", "qa", "data-qa", "onChange", "onInput", "onInvalid"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(checked),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  var internalChangedByClick = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4__.useMutableCallback)( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var updatedVal;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            updatedVal = !internalValue;
            setInternalValue(updatedVal);
            onChange(updatedVal);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Box, Object.assign({
    is: _Label__WEBPACK_IMPORTED_MODULE_8__.Label,
    "rcx-check-box": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Box, {
    is: "input",
    "rcx-check-box__input": true,
    autoComplete: autoComplete,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    form: form,
    id: id,
    name: name,
    required: required,
    tabIndex: tabIndex,
    type: "checkbox",
    value: value,
    "data-qa": dataQa || qa,
    ref: ref,
    readOnly: true,
    onInput: onInput,
    onInvalid: onInvalid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Box, {
    is: "i",
    "rcx-check-box__fake": true,
    "aria-hidden": "true",
    onClick: internalChangedByClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }));
});
CheckBox.propTypes = {
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  checked: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  defaultChecked: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  form: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  indeterminate: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  qa: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  'data-qa': (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onInput: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onInvalid: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
};

/***/ }),

/***/ "./src/components/Chevron/index.js":
/*!*****************************************!*\
  !*** ./src/components/Chevron/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! export Chevron [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Chevron": () => /* binding */ Chevron
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_createPropType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/createPropType */ "./src/helpers/createPropType.js");
/* harmony import */ var _styleTokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styleTokens */ "./src/styleTokens.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Chevron/index.js";






function Chevron(_ref) {
  var _this = this;

  var up = _ref.up,
      right = _ref.right,
      down = _ref.down,
      left = _ref.left,
      size = _ref.size,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["up", "right", "down", "left", "size"]);

  var children = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_6__.Icon, {
      name: "chevron-down",
      size: size,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 34
      }
    });
  }, [size]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, Object.assign({
    is: "span",
    children: children,
    "rcx-chevron": true,
    "rcx-chevron--up": up,
    "rcx-chevron--right": right,
    "rcx-chevron--down": down,
    "rcx-chevron--left": left
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }
  }));
}
Chevron.propTypes = {
  up: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  right: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  down: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  left: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  size: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_3__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_4__.size)
};

/***/ }),

/***/ "./src/components/Chip/index.js":
/*!**************************************!*\
  !*** ./src/components/Chip/index.js ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_prependClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/prependClassName */ "./src/helpers/prependClassName.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Avatar */ "./src/components/Avatar/index.js");
/* harmony import */ var _Box_withBoxStyling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Box/withBoxStyling */ "./src/components/Box/withBoxStyling.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _Margins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Margins */ "./src/components/Margins/index.js");
;

var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Chip/index.js";









var defaultRenderThumb = function defaultRenderThumb(_ref) {
  var url = _ref.url;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Avatar__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
    size: "x20",
    url: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 41
    }
  });
};

var defaultRenderDismissSymbol = function defaultRenderDismissSymbol() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_6__.Icon, {
    name: "cross",
    size: "x16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 42
    }
  });
};

var Chip = function Chip(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      thumbUrl = _ref2.thumbUrl,
      onClick = _ref2.onClick,
      onMouseDown = _ref2.onMouseDown,
      _ref2$renderThumb = _ref2.renderThumb,
      renderThumb = _ref2$renderThumb === void 0 ? defaultRenderThumb : _ref2$renderThumb,
      _ref2$renderDismissSy = _ref2.renderDismissSymbol,
      renderDismissSymbol = _ref2$renderDismissSy === void 0 ? defaultRenderDismissSymbol : _ref2$renderDismissSy,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["children", "className", "thumbUrl", "onClick", "onMouseDown", "renderThumb", "renderDismissSymbol"]);

  var onDismiss = onClick || onMouseDown;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", Object.assign({
    type: "button",
    className: (0,_helpers_prependClassName__WEBPACK_IMPORTED_MODULE_3__.prependClassName)(className, 'rcx-box rcx-chip'),
    disabled: !onDismiss,
    onClick: onDismiss
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_7__.default, {
    all: "x4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, thumbUrl && renderThumb && renderThumb({
    url: thumbUrl
  }), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "rcx-box rcx-chip__text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 20
    }
  }, children), onDismiss && renderDismissSymbol && renderDismissSymbol()));
};

if (true) {
  Chip.displayName = 'Chip';
  Chip.propTypes = {
    thumbUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    renderThumb: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    renderDismissSymbol: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Box_withBoxStyling__WEBPACK_IMPORTED_MODULE_5__.withBoxStyling)(Chip));

/***/ }),

/***/ "./src/components/Divider/index.js":
/*!*****************************************!*\
  !*** ./src/components/Divider/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! export Divider [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Divider": () => /* binding */ Divider
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Divider/index.js";


function Divider(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_1__.Box, Object.assign({
    is: "hr",
    "rcx-divider": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./src/components/EmailInput/index.js":
/*!********************************************!*\
  !*** ./src/components/EmailInput/index.js ***!
  \********************************************/
/*! namespace exports */
/*! export EmailInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailInput": () => /* binding */ EmailInput
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/EmailInput/index.js";


var EmailInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function EmailInput(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_1__.InputBox, Object.assign({
    type: "email",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
});

/***/ }),

/***/ "./src/components/Field/index.js":
/*!***************************************!*\
  !*** ./src/components/Field/index.js ***!
  \***************************************/
/*! namespace exports */
/*! export Field [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FieldDescription [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FieldError [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FieldHint [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FieldLabel [provided] [no usage info] [missing usage info prevents renaming] */
/*! export FieldRow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldLabel": () => /* binding */ FieldLabel,
/* harmony export */   "FieldDescription": () => /* binding */ FieldDescription,
/* harmony export */   "FieldRow": () => /* binding */ FieldRow,
/* harmony export */   "FieldHint": () => /* binding */ FieldHint,
/* harmony export */   "FieldError": () => /* binding */ FieldError,
/* harmony export */   "Field": () => /* binding */ Field
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Label */ "./src/components/Label/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Field/index.js";



function FieldLabel(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_1__.Box, Object.assign({
    is: _Label__WEBPACK_IMPORTED_MODULE_2__.Label,
    "rcx-field__label": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }));
}
function FieldDescription(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_1__.Box, Object.assign({
    is: "span",
    "rcx-field__description": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }));
}
function FieldRow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_1__.Box, Object.assign({
    is: "span",
    "rcx-field__row": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }
  }));
}
function FieldHint(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_1__.Box, Object.assign({
    is: "span",
    "rcx-field__hint": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 10
    }
  }));
}
function FieldError(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_1__.Box, Object.assign({
    is: "span",
    "rcx-field__error": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }
  }));
}
function Field(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_1__.Box, Object.assign({
    "rcx-field": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 10
    }
  }));
}
Field.Label = FieldLabel;
Field.Description = FieldDescription;
Field.Row = FieldRow;
Field.Error = FieldError;
Field.Hint = FieldHint;

/***/ }),

/***/ "./src/components/FieldGroup/index.js":
/*!********************************************!*\
  !*** ./src/components/FieldGroup/index.js ***!
  \********************************************/
/*! namespace exports */
/*! export FieldGroup [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldGroup": () => /* binding */ FieldGroup
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_appendClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/appendClassName */ "./src/helpers/appendClassName.js");
/* harmony import */ var _helpers_patchChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/patchChildren */ "./src/helpers/patchChildren.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/FieldGroup/index.js";




function FieldGroup(_ref) {
  var children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, Object.assign({
    is: "fieldset",
    "rcx-field-group": true,
    role: "group"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }), (0,_helpers_patchChildren__WEBPACK_IMPORTED_MODULE_3__.patchChildren)(children, function (childProps) {
    return {
      className: (0,_helpers_appendClassName__WEBPACK_IMPORTED_MODULE_2__.appendClassName)(childProps.className, 'rcx-field-group__item')
    };
  }));
}

/***/ }),

/***/ "./src/components/Grid/index.js":
/*!**************************************!*\
  !*** ./src/components/Grid/index.js ***!
  \**************************************/
/*! namespace exports */
/*! export Grid [provided] [no usage info] [missing usage info prevents renaming] */
/*! export GridItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Grid": () => /* binding */ Grid,
/* harmony export */   "GridItem": () => /* binding */ GridItem
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Grid/index.js";



function Grid(_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["xs", "sm", "md", "lg", "xl"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    "rcx-grid__wrapper": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    "rcx-grid": true,
    "rcx-grid--xs": xs,
    "rcx-grid--sm": sm,
    "rcx-grid--md": md,
    "rcx-grid--lg": lg,
    "rcx-grid--xl": xl
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  })));
}
Grid.propTypes = {
  xs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  sm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  md: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  lg: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  xl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
function GridItem(_ref2) {
  var xs = _ref2.xs,
      sm = _ref2.sm,
      md = _ref2.md,
      lg = _ref2.lg,
      xl = _ref2.xl,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["xs", "sm", "md", "lg", "xl"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    "rcx-grid__item": true,
    "rcx-grid__item--xs": xs,
    "rcx-grid__item--sm": sm,
    "rcx-grid__item--md": md,
    "rcx-grid__item--lg": lg,
    "rcx-grid__item--xl": xl
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }
  }));
}
GridItem.propTypes = {
  xs: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([1, 2, 3, 4]),
  sm: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  md: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  lg: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};
Grid.Item = GridItem;

/***/ }),

/***/ "./src/components/Icon/index.js":
/*!**************************************!*\
  !*** ./src/components/Icon/index.js ***!
  \**************************************/
/*! namespace exports */
/*! export Icon [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": () => /* binding */ Icon
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rocket_chat_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rocket.chat/icons */ "@rocket.chat/icons");
/* harmony import */ var _rocket_chat_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/createPropType */ "./src/helpers/createPropType.js");
/* harmony import */ var _styleTokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styleTokens */ "./src/styleTokens.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Icon/index.js";






var Icon = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function Icon(_ref, ref) {
  var name = _ref.name,
      size = _ref.size,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["name", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_6__.Box, Object.assign({
    is: "i",
    "rcx-icon": true,
    "rcx-icon--name": name,
    children: (_rocket_chat_icons__WEBPACK_IMPORTED_MODULE_1___default())[name],
    "aria-hidden": "true",
    fontSize: size,
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 10
    }
  }));
});
Icon.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(Object.keys((_rocket_chat_icons__WEBPACK_IMPORTED_MODULE_1___default()))).isRequired,
  size: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_5__.size)
};

/***/ }),

/***/ "./src/components/InputBox/Option.js":
/*!*******************************************!*\
  !*** ./src/components/InputBox/Option.js ***!
  \*******************************************/
/*! namespace exports */
/*! export Option [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Option": () => /* binding */ Option
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/InputBox/Option.js";



var Option = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Option(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_2__.Box, Object.assign({
    is: "option",
    "rcx-input-box__option": true,
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }));
});
Option.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)
};

/***/ }),

/***/ "./src/components/InputBox/Placeholder.js":
/*!************************************************!*\
  !*** ./src/components/InputBox/Placeholder.js ***!
  \************************************************/
/*! namespace exports */
/*! export Placeholder [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Placeholder": () => /* binding */ Placeholder
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/InputBox/Placeholder.js";



var Placeholder = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Placeholder(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_2__.Box, Object.assign({
    is: "option",
    "rcx-input-box__placeholder": true,
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }));
});
Placeholder.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)
};

/***/ }),

/***/ "./src/components/InputBox/index.js":
/*!******************************************!*\
  !*** ./src/components/InputBox/index.js ***!
  \******************************************/
/*! namespace exports */
/*! export InputBox [provided] [no usage info] [missing usage info prevents renaming] */
/*! export InputBoxSkeleton [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputBox": () => /* binding */ InputBox,
/* harmony export */   "InputBoxSkeleton": () => /* binding */ InputBoxSkeleton
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rocket.chat/fuselage-hooks */ "@rocket.chat/fuselage-hooks");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Label */ "./src/components/Label/index.js");
/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Skeleton */ "./src/components/Skeleton/index.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Option */ "./src/components/InputBox/Option.js");
/* harmony import */ var _Placeholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Placeholder */ "./src/components/InputBox/Placeholder.js");
;

var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/InputBox/index.js";

/* eslint-disable complexity */









var Wrapper = function Wrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, Object.assign({
    is: _Label__WEBPACK_IMPORTED_MODULE_5__.Label,
    "rcx-input-box__wrapper": true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 28
    }
  }));
};

var Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, Object.assign({
    is: "input",
    "rcx-input-box": true,
    ref: ref
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 42
    }
  }));
});
var Addon = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, Object.assign({
    is: "span",
    "rcx-input-box__addon": true,
    ref: ref
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 42
    }
  }));
});
var InputBox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function InputBox(_ref, ref) {
  var className = _ref.className,
      addon = _ref.addon,
      error = _ref.error,
      hidden = _ref.hidden,
      invisible = _ref.invisible,
      multiple = _ref.multiple,
      placeholderVisible = _ref.placeholderVisible,
      type = _ref.type,
      onChange = _ref.onChange,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["className", "addon", "error", "hidden", "invisible", "multiple", "placeholderVisible", "type", "onChange"]);

  var innerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var mergedRef = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_1__.useMergedRefs)(ref, innerRef);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(function () {
    if (innerRef.current && innerRef.current.setCustomValidity) {
      innerRef.current.setCustomValidity(error || '');
    }
  }, [error]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(function () {
    if (addon) {
      innerRef.current.parentElement.classList.toggle('invalid', !innerRef.current.checkValidity());
    }
  }, []);
  var handleChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (event) {
    if (addon) {
      innerRef.current.parentElement.classList.toggle('invalid', !innerRef.current.checkValidity());
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return onChange && onChange.call.apply(onChange, [event.currentTarget, event].concat(args));
  }, [addon, onChange]);

  if (!addon) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Input, Object.assign({
      is: type === 'textarea' && 'textarea' || type === 'select' && 'select' || 'input',
      className: className,
      cols: type === 'textarea' && 1 || type === 'select' && 0 || 0,
      hidden: hidden,
      invisible: invisible,
      multiple: multiple,
      ref: mergedRef,
      htmlSize: type === 'textarea' && undefined || type === 'select' && 1 || 1,
      type: type === 'textarea' || type === 'select' ? undefined : type,
      onChange: handleChange,
      "rcx-input-box--multiple": multiple,
      "rcx-input-box--placeholder-visible": placeholderVisible,
      "rcx-input-box--type": type
    }, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 12
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Wrapper, {
    className: [props.disabled && 'disabled', className],
    hidden: hidden,
    invisible: invisible,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Input, Object.assign({
    is: type === 'textarea' && 'textarea' || type === 'select' && 'select' || 'input',
    className: className,
    cols: type === 'textarea' && 1 || type === 'select' && 0 || 0,
    multiple: multiple,
    ref: mergedRef,
    htmlSize: type === 'textarea' && undefined || type === 'select' && 1 || 1,
    type: type === 'textarea' || type === 'select' ? undefined : type,
    onChange: handleChange,
    "rcx-input-box--multiple": multiple,
    "rcx-input-box--placeholder-visible": placeholderVisible,
    "rcx-input-box--type": type,
    "rcx-input-box--undecorated": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Addon, {
    children: addon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }));
});
InputBox.defaultProps = {
  type: 'text'
};
InputBox.propTypes = {
  addon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element),
  input: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().element),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['button', 'checkbox', 'color', 'date', 'datetime', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week', 'textarea', 'select']).isRequired
};
InputBox.Input = Input;
InputBox.Wrapper = Wrapper;
InputBox.Addon = Addon;
InputBox.Placeholder = _Placeholder__WEBPACK_IMPORTED_MODULE_8__.Placeholder;
InputBox.Option = _Option__WEBPACK_IMPORTED_MODULE_7__.Option;
function InputBoxSkeleton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, Object.assign({
    "rcx-skeleton__input": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }));
}
InputBox.Skeleton = InputBoxSkeleton;

/***/ }),

/***/ "./src/components/Label/index.js":
/*!***************************************!*\
  !*** ./src/components/Label/index.js ***!
  \***************************************/
/*! namespace exports */
/*! export Label [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => /* binding */ Label
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Label/index.js";



var LabelContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(false);
function Label(_ref) {
  var disabled = _ref.disabled,
      is = _ref.is,
      required = _ref.required,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["disabled", "is", "required"]);

  var isInsideLabel = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(LabelContext);
  var component = is || isInsideLabel && 'span' || 'label';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(LabelContext.Provider, {
    value: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: component,
    "rcx-label": true,
    "rcx-label--disabled": disabled,
    "rcx-label--required": required
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  })));
}
Label.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};

/***/ }),

/***/ "./src/components/Margins/index.js":
/*!*****************************************!*\
  !*** ./src/components/Margins/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rocket.chat/css-in-js */ "./node_modules/@rocket.chat/css-in-js/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_appendClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/appendClassName */ "./src/helpers/appendClassName.js");
/* harmony import */ var _helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/createPropType */ "./src/helpers/createPropType.js");
/* harmony import */ var _helpers_patchChildren__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/patchChildren */ "./src/helpers/patchChildren.js");
/* harmony import */ var _hooks_useStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useStyle */ "./src/hooks/useStyle.js");
/* harmony import */ var _styleTokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styleTokens */ "./src/styleTokens.js");
/* harmony import */ var _Box_transforms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Box/transforms */ "./src/components/Box/transforms.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Margins/index.js";

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["margin-block-end: ", ";"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["margin-block-start: ", ";"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["margin-block: ", ";"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["margin-inline-end: ", ";"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["margin-inline-start: ", ";"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["margin-inline: ", ";"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["margin: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    &:not(.rcx-box--full) {\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










function Margins(props) {
  var children = props.children,
      className = props.className,
      all = props.all,
      block = props.block,
      blockStart = props.blockStart,
      blockEnd = props.blockEnd,
      inline = props.inline,
      inlineStart = props.inlineStart,
      inlineEnd = props.inlineEnd;
  var transformFn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (props) {
    if (all !== undefined && props.margin === undefined) {
      props.margin = all;
    }

    if (block !== undefined && props.marginBlock === undefined) {
      props.marginBlock = block;
    }

    if (blockStart !== undefined && props.marginBlockStart === undefined) {
      props.marginBlockStart = blockStart;
    }

    if (blockEnd !== undefined && props.marginBlockEnd === undefined) {
      props.marginBlockEnd = blockEnd;
    }

    if (inline !== undefined && props.marginInline === undefined) {
      props.marginInline = inline;
    }

    if (inlineStart !== undefined && props.marginInlineStart === undefined) {
      props.marginInlineStart = inlineStart;
    }

    if (inlineEnd !== undefined && props.marginInlineEnd === undefined) {
      props.marginInlineEnd = inlineEnd;
    }

    return props;
  }, [all, block, blockEnd, blockStart, inline, inlineEnd, inlineStart]);
  var marginsClassName = (0,_hooks_useStyle__WEBPACK_IMPORTED_MODULE_6__.useStyle)((0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject(), props.all && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin)(props.all)), props.inline && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject3(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin)(props.inline)), props.inlineStart && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject4(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin)(props.inlineStart)), props.inlineEnd && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject5(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin)(props.inlineEnd)), props.block && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject6(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin)(props.block)), props.blockStart && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject7(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin)(props.blockStart)), props.blockEnd && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject8(), (0,_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin)(props.blockEnd))), props);
  var patchedChildren = (0,_helpers_patchChildren__WEBPACK_IMPORTED_MODULE_5__.patchChildren)(children, function (childProps) {
    return {
      className: (0,_helpers_appendClassName__WEBPACK_IMPORTED_MODULE_3__.appendClassName)(childProps.className, (0,_helpers_appendClassName__WEBPACK_IMPORTED_MODULE_3__.appendClassName)(className, marginsClassName))
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box_transforms__WEBPACK_IMPORTED_MODULE_8__.BoxTransforms.Provider, {
    children: patchedChildren,
    value: (0,_Box_transforms__WEBPACK_IMPORTED_MODULE_8__.useComposedBoxTransform)(transformFn),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 10
    }
  });
}

Margins.propTypes = {
  all: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin),
  block: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin),
  blockStart: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin),
  blockEnd: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin),
  inline: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin),
  inlineStart: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin),
  inlineEnd: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_4__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_7__.margin)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Margins);

/***/ }),

/***/ "./src/components/Menu/index.js":
/*!**************************************!*\
  !*** ./src/components/Menu/index.js ***!
  \**************************************/
/*! namespace exports */
/*! export Menu [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => /* binding */ Menu
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./src/components/index.js");
;


var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Menu/index.js";




var menuAction = function menuAction(_ref, options) {
  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 1),
      selected = _ref2[0];

  options[selected].action();
};

var mapOptions = function mapOptions(options) {
  return Object.entries(options).map(function (_ref3) {
    var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),
        value = _ref4[0],
        label = _ref4[1].label;

    return [value, label];
  });
};

var Menu = function Menu(_ref5) {
  var tiny = _ref5.tiny,
      mini = _ref5.mini,
      _ref5$small = _ref5.small,
      small = _ref5$small === void 0 ? tiny || mini ? null : true : _ref5$small,
      options = _ref5.options,
      optionWidth = _ref5.optionWidth,
      _ref5$placement = _ref5.placement,
      placement = _ref5$placement === void 0 ? 'bottom-start' : _ref5$placement,
      renderItem = _ref5.renderItem,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref5, ["tiny", "mini", "small", "options", "optionWidth", "placement", "renderItem"]);

  var mappedOptions = mapOptions(options);

  var _useCursor = (0,___WEBPACK_IMPORTED_MODULE_3__.useCursor)(-1, mappedOptions, function (args, _ref6) {
    var _ref7 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref6, 2),
        hide = _ref7[1];

    menuAction(args, options);
    reset();
    hide();
  }),
      _useCursor2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useCursor, 5),
      cursor = _useCursor2[0],
      handleKeyDown = _useCursor2[1],
      handleKeyUp = _useCursor2[2],
      reset = _useCursor2[3],
      _useCursor2$ = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useCursor2[4], 3),
      visible = _useCursor2$[0],
      hide = _useCursor2$[1],
      show = _useCursor2$[2];

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    ref.current.focus() & show();
    ref.current.classList.add('focus-visible');
  }, [show]);
  var handleSelection = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (args) {
    menuAction(args, options);
    reset();
    hide();
  }, [hide, reset, options]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(___WEBPACK_IMPORTED_MODULE_3__.ActionButton, Object.assign({
    ref: ref,
    ghost: true,
    small: small,
    tiny: tiny,
    mini: mini,
    onClick: onClick,
    onBlur: hide,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    icon: "kebab"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(___WEBPACK_IMPORTED_MODULE_3__.PositionAnimated, {
    width: "auto",
    visible: visible,
    anchor: ref,
    placement: placement,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(___WEBPACK_IMPORTED_MODULE_3__.Options, {
    renderItem: renderItem,
    width: optionWidth,
    onSelect: handleSelection,
    options: mappedOptions,
    cursor: cursor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./src/components/Modal/Stack.js":
/*!***************************************!*\
  !*** ./src/components/Modal/Stack.js ***!
  \***************************************/
/*! namespace exports */
/*! export ModalBackdrop [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ModalContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ModalContext [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ModalPortal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ModalStack [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useModalStack [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalContext": () => /* binding */ ModalContext,
/* harmony export */   "useModalStack": () => /* binding */ useModalStack,
/* harmony export */   "ModalPortal": () => /* binding */ ModalPortal,
/* harmony export */   "ModalBackdrop": () => /* binding */ ModalBackdrop,
/* harmony export */   "ModalContainer": () => /* binding */ ModalContainer,
/* harmony export */   "ModalStack": () => /* binding */ ModalStack
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;


var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Modal/Stack.js";




var ModalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
var useModalStack = function useModalStack() {
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(ModalContext);
};

var createModalRoot = function createModalRoot() {
  var node = document.createElement('div');
  document.querySelector('body').appendChild(node);
  return node;
};

var ModalPortal = function ModalPortal(_ref) {
  var children = _ref.children,
      _ref$rootElement = _ref.rootElement,
      rootElement = _ref$rootElement === void 0 ? createModalRoot() : _ref$rootElement;
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default().createPortal(children, rootElement);
};
var ModalBackdrop = function ModalBackdrop(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, Object.assign({
    "rcx-modal__backdrop": true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 41
    }
  }));
};
function ModalContainer() {
  var _this2 = this;

  var _useModalStack = useModalStack(),
      stack = _useModalStack.stack;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ModalPortal, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, stack.size > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ModalBackdrop, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 26
    }
  }), Array.from(stack.entries()).map(function (_ref2, i, array) {
    var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, 2),
        key = _ref3[0],
        element = _ref3[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.AnimatedVisibility, {
      key: key,
      children: element,
      visibility: i === array.length - 1 ? _Box__WEBPACK_IMPORTED_MODULE_4__.AnimatedVisibility.VISIBLE : _Box__WEBPACK_IMPORTED_MODULE_4__.AnimatedVisibility.HIDDEN,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    });
  }));
}
function ModalStack(_ref4) {
  var children = _ref4.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Map()),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      stack = _useState2[0],
      setStack = _useState2[1];

  var open = function open(_ref5) {
    var id = _ref5.id,
        data = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref5, ["id"]);

    setStack(new Map([id, data]));
  };

  var update = function update(_ref6) {
    var id = _ref6.id,
        data = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref6, ["id"]);

    setStack(new Map([id, data]));
  };

  var push = function push(_ref7) {
    var id = _ref7.id,
        data = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref7, ["id"]);

    setStack(new Map(stack.set(id, data)));
  };

  var pop = function pop() {
    if (!stack.size) {
      return;
    }

    var key = Array.from(stack.keys()).pop();
    stack.delete(key);
    setStack(new Map(stack));
  };

  var close = function close() {
    setStack(new Map());
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ModalContext.Provider, {
    value: {
      stack: stack,
      open: open,
      push: push,
      pop: pop,
      close: close,
      update: update
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ModalContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/Modal/index.js":
/*!***************************************!*\
  !*** ./src/components/Modal/index.js ***!
  \***************************************/
/*! namespace exports */
/*! export Modal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ModalBackdrop [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/Stack.js .ModalBackdrop */
/*! export ModalClose [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ModalContainer [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/Stack.js .ModalContainer */
/*! export ModalContent [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ModalFooter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ModalHeader [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ModalPortal [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/Stack.js .ModalPortal */
/*! export ModalStack [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/Stack.js .ModalStack */
/*! export ModalThumb [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ModalTitle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useModalStack [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/Stack.js .useModalStack */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => /* binding */ Modal,
/* harmony export */   "ModalHeader": () => /* binding */ ModalHeader,
/* harmony export */   "ModalThumb": () => /* binding */ ModalThumb,
/* harmony export */   "ModalTitle": () => /* binding */ ModalTitle,
/* harmony export */   "ModalClose": () => /* binding */ ModalClose,
/* harmony export */   "ModalContent": () => /* binding */ ModalContent,
/* harmony export */   "ModalFooter": () => /* binding */ ModalFooter,
/* harmony export */   "ModalBackdrop": () => /* reexport safe */ _Stack__WEBPACK_IMPORTED_MODULE_8__.ModalBackdrop,
/* harmony export */   "ModalContainer": () => /* reexport safe */ _Stack__WEBPACK_IMPORTED_MODULE_8__.ModalContainer,
/* harmony export */   "ModalPortal": () => /* reexport safe */ _Stack__WEBPACK_IMPORTED_MODULE_8__.ModalPortal,
/* harmony export */   "ModalStack": () => /* reexport safe */ _Stack__WEBPACK_IMPORTED_MODULE_8__.ModalStack,
/* harmony export */   "useModalStack": () => /* reexport safe */ _Stack__WEBPACK_IMPORTED_MODULE_8__.useModalStack
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Avatar */ "./src/components/Avatar/index.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _Margins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Margins */ "./src/components/Margins/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Tile */ "./src/components/Tile/index.js");
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Stack */ "./src/components/Modal/Stack.js");
;

var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Modal/index.js";









var Modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function (_ref, ref) {
  var children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Flex.Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "dialog",
    "rcx-modal": true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Flex.Container, {
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Flex.Item, {
    grow: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Tile__WEBPACK_IMPORTED_MODULE_7__.Tile, {
    ref: ref,
    elevation: "2",
    className: "rcx-modal__inner",
    padding: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, children)))));
});
var ModalHeader = function ModalHeader(_ref2) {
  var children = _ref2.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_6__.default, {
    all: "x32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "header"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Flex.Container, {
    alignItems: "center",
    wrap: "no-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_6__.default, {
    all: "neg-x8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_6__.default, {
    all: "x8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, children))))));
};
var ModalThumb = function ModalThumb(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, Object.assign({
    size: "x32"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 38
    }
  }));
};
var ModalTitle = function ModalTitle(_ref3) {
  var children = _ref3.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Flex.Item, {
    grow: 1,
    shrink: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    "rcx-modal__title": true,
    color: "default",
    fontScale: "h1"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), children));
};
var ModalClose = function ModalClose(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Flex.Item, {
    shrink: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 38
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_4__.Button, Object.assign({
    small: true,
    ghost: true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_5__.Icon, {
    name: "cross",
    size: "x24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  })));
};
var ModalContent = function ModalContent(_ref4) {
  var children = _ref4.children,
      onScrollContent = _ref4.onScrollContent,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, ["children", "onScrollContent"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Scrollable, {
    vertical: true,
    onScrollContent: onScrollContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    "rcx-modal__content": true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_6__.default, {
    inline: "x32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    "rcx-modal__content-wrapper": true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), children))));
};
var ModalFooter = function ModalFooter(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_6__.default, {
    all: "x32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    "rcx-modal__footer": true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, children));
};

Modal.Header = ModalHeader;
Modal.Thumb = ModalThumb;
Modal.Title = ModalTitle;
Modal.Close = ModalClose;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.Backdrop = _Stack__WEBPACK_IMPORTED_MODULE_8__.ModalBackdrop;
Modal.Container = _Stack__WEBPACK_IMPORTED_MODULE_8__.ModalContainer;
Modal.Portal = _Stack__WEBPACK_IMPORTED_MODULE_8__.ModalPortal;
Modal.Stack = _Stack__WEBPACK_IMPORTED_MODULE_8__.ModalStack;

/***/ }),

/***/ "./src/components/NumberInput/index.js":
/*!*********************************************!*\
  !*** ./src/components/NumberInput/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! export NumberInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberInput": () => /* binding */ NumberInput
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/NumberInput/index.js";


var NumberInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function NumberInput(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_1__.InputBox, Object.assign({
    type: "number",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
});

/***/ }),

/***/ "./src/components/Options/index.js":
/*!*****************************************!*\
  !*** ./src/components/Options/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! export ACTIONS [provided] [no usage info] [missing usage info prevents renaming] */
/*! export CheckOption [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Empty [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Option [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Options [provided] [no usage info] [missing usage info prevents renaming] */
/*! export useCursor [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTIONS": () => /* binding */ ACTIONS,
/* harmony export */   "Option": () => /* binding */ Option,
/* harmony export */   "Empty": () => /* binding */ Empty,
/* harmony export */   "CheckOption": () => /* binding */ CheckOption,
/* harmony export */   "Options": () => /* binding */ Options,
/* harmony export */   "useCursor": () => /* binding */ useCursor
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rocket.chat/fuselage-hooks */ "@rocket.chat/fuselage-hooks");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CheckBox */ "./src/components/CheckBox/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _Margins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Margins */ "./src/components/Margins/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Tile */ "./src/components/Tile/index.js");
;



var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Options/index.js",
    _this = undefined;








var ACTIONS = {
  ESC: 27,
  KEY_UP: 38,
  KEY_DOWN: 40,
  HOME: 36,
  END: 35,
  TAB: 9,
  ENTER: 13
};

var prevent = function prevent(e) {
  e.preventDefault();
  e.stopPropagation();
};

var Li = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function Li(_ref, ref) {
  var children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, Object.assign({
    "rcx-option": true,
    withTruncatedText: true,
    is: "li",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, {
    withTruncatedText: true,
    display: "flex",
    alignItems: "center",
    mi: "neg-x4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 73
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_8__.default, {
    inline: "x4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 143
    }
  }, children)));
});
var Option = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().memo(function (_ref2) {
  var id = _ref2.id,
      avatar = _ref2.avatar,
      children = _ref2.children,
      _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? children : _ref2$label,
      focus = _ref2.focus,
      selected = _ref2.selected,
      icon = _ref2.icon,
      className = _ref2.className,
      options = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, ["id", "avatar", "children", "label", "focus", "selected", "icon", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Li, Object.assign({
    key: id,
    "rcx-option--focus": focus,
    id: id,
    "rcx-option--selected": selected,
    "aria-selected": selected
  }, options, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 128
    }
  }), avatar, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_7__.Icon, {
    size: "x16",
    name: icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 262
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, {
    is: "span",
    className: className,
    withTruncatedText: true,
    flexGrow: 1,
    fontScale: "p1",
    color: "default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 294
    }
  }, label), label !== children && children);
});
var Empty = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().memo(function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Option, {
    color: "hint",
    label: "Empty",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 39
    }
  });
});
var CheckOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().memo(function (_ref3) {
  var selected = _ref3.selected,
      label = _ref3.children,
      options = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, ["selected", "children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Option, Object.assign({
    label: label,
    selected: selected
  }, options, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 86
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_CheckBox__WEBPACK_IMPORTED_MODULE_6__.CheckBox, {
    checked: selected,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 141
    }
  }));
});
var Options = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().forwardRef(function (_ref4, ref) {
  var _React$createElement;

  var _ref4$maxHeight = _ref4.maxHeight,
      maxHeight = _ref4$maxHeight === void 0 ? '144px' : _ref4$maxHeight,
      multiple = _ref4.multiple,
      _ref4$renderEmpty = _ref4.renderEmpty,
      EmptyComponent = _ref4$renderEmpty === void 0 ? Empty : _ref4$renderEmpty,
      options = _ref4.options,
      cursor = _ref4.cursor,
      _ref4$renderItem = _ref4.renderItem,
      OptionComponent = _ref4$renderItem === void 0 ? Option : _ref4$renderItem,
      onSelect = _ref4.onSelect,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref4, ["maxHeight", "multiple", "renderEmpty", "options", "cursor", "renderItem", "onSelect"]);

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(function () {
    var current = ref.current;
    var li = current.querySelector('.rcx-option--focus');

    if (!li) {
      return;
    }

    if (li.offsetTop + li.clientHeight > current.scrollTop + current.clientHeight || li.offsetTop - li.clientHeight < current.scrollTop) {
      current.scrollTop = li.offsetTop;
    }
  }, [cursor, ref]);
  var optionsMemoized = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    return options.map(function (_ref5, i) {
      var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref5, 3),
          value = _ref6[0],
          label = _ref6[1],
          selected = _ref6[2];

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(OptionComponent, {
        role: "option",
        label: label,
        onClick: function onClick(e) {
          return prevent(e) & onSelect([value, label]) && false;
        },
        key: value,
        value: value,
        selected: selected || multiple !== true && null,
        focus: cursor === i || null,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 86
        }
      });
    });
  }, [options, multiple, cursor, onSelect]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, Object.assign({
    "rcx-options": true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Tile__WEBPACK_IMPORTED_MODULE_9__.Tile, {
    padding: 0,
    paddingBlock: 'x12',
    paddingInline: 0,
    elevation: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Scrollable, {
    vertical: true,
    smooth: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Tile__WEBPACK_IMPORTED_MODULE_9__.Tile, (_React$createElement = {
    ref: ref,
    elevation: "0",
    padding: "none",
    maxHeight: maxHeight,
    onMouseDown: prevent,
    onClick: prevent,
    is: "ol",
    "aria-multiselectable": multiple,
    role: "listbox"
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "aria-multiselectable", "true"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "aria-activedescendant", options && options[cursor] && options[cursor][0]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__self", _this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }), _React$createElement), !options.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(EmptyComponent, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 31
    }
  }), optionsMemoized))));
});

var useVisible = function useVisible() {
  var initialVisibility = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Box__WEBPACK_IMPORTED_MODULE_5__.AnimatedVisibility.HIDDEN;

  var _useDebouncedState = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__.useDebouncedState)(initialVisibility, 10),
      _useDebouncedState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useDebouncedState, 2),
      visible = _useDebouncedState2[0],
      setVisible = _useDebouncedState2[1];

  var hide = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__.useMutableCallback)(function () {
    return setVisible(_Box__WEBPACK_IMPORTED_MODULE_5__.AnimatedVisibility.HIDDEN);
  });
  var show = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__.useMutableCallback)(function () {
    return setVisible(_Box__WEBPACK_IMPORTED_MODULE_5__.AnimatedVisibility.VISIBLE);
  });
  return [visible, hide, show];
};

var useCursor = function useCursor(initial, options, onChange) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initial),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      cursor = _useState2[0],
      setCursor = _useState2[1];

  var visibilityHandler = useVisible();

  var _visibilityHandler = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(visibilityHandler, 3),
      visibility = _visibilityHandler[0],
      hide = _visibilityHandler[1],
      show = _visibilityHandler[2];

  var reset = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__.useMutableCallback)(function () {
    return setCursor(0);
  });
  var handleKeyUp = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__.useMutableCallback)(function (e) {
    var keyCode = e.keyCode;

    if (_Box__WEBPACK_IMPORTED_MODULE_5__.AnimatedVisibility.HIDDEN === visibility && keyCode === ACTIONS.TAB) {
      return show();
    }
  });
  var handleKeyDown = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__.useMutableCallback)(function (e) {
    var lastIndex = options.length - 1;
    var keyCode = e.keyCode,
        key = e.key;

    if (_Box__WEBPACK_IMPORTED_MODULE_5__.AnimatedVisibility.HIDDEN === visibility && keyCode !== ACTIONS.ESC && keyCode !== ACTIONS.TAB) {
      show();
    }

    switch (keyCode) {
      case ACTIONS.HOME:
        e.preventDefault();
        return reset();

      case ACTIONS.END:
        e.preventDefault();
        return setCursor(lastIndex);

      case ACTIONS.KEY_UP:
        e.preventDefault();

        if (cursor < 1) {
          return setCursor(lastIndex);
        }

        return setCursor(cursor - 1);

      case ACTIONS.KEY_DOWN:
        e.preventDefault();

        if (cursor === lastIndex) {
          return setCursor(0);
        }

        return setCursor(cursor + 1);

      case ACTIONS.ENTER:
        e.preventDefault();

        if (visibility === _Box__WEBPACK_IMPORTED_MODULE_5__.AnimatedVisibility.VISIBLE) {
          e.persist();
          e.nativeEvent.stopImmediatePropagation(); // TODO

          e.stopPropagation();
        }

        hide();
        onChange(options[cursor], visibilityHandler);
        return;

      case ACTIONS.ESC:
        e.preventDefault();
        reset();
        hide();

        if (visibility === _Box__WEBPACK_IMPORTED_MODULE_5__.AnimatedVisibility.VISIBLE) {
          e.persist();
          e.nativeEvent.stopImmediatePropagation(); // TODO

          e.stopPropagation();
          return false;
        }

        break;

      default:
        if (key.match(/^[\d\w]$/i)) {
          var index = options.findIndex(function (_ref7) {
            var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 2),
                label = _ref8[1];

            return label[0].toLowerCase() === key;
          });
          ~index && setCursor(index);
        }

    }
  });
  return [cursor, handleKeyDown, handleKeyUp, reset, visibilityHandler];
};
Options.AvatarSize = 'x28';

/***/ }),

/***/ "./src/components/Pagination/index.js":
/*!********************************************!*\
  !*** ./src/components/Pagination/index.js ***!
  \********************************************/
/*! namespace exports */
/*! export Pagination [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagination": () => /* binding */ Pagination
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Chevron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Chevron */ "./src/components/Chevron/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Pagination/index.js";





var defaultItemsPerPageLabel = function defaultItemsPerPageLabel() {
  return 'Items per page:';
};

var defaultShowingResultsLabel = function defaultShowingResultsLabel(_ref) {
  var count = _ref.count,
      current = _ref.current,
      itemsPerPage = _ref.itemsPerPage;
  return "Showing results ".concat(current + 1, " - ").concat(Math.min(current + itemsPerPage, count), " of ").concat(count);
};

function Pagination(_ref2) {
  var _this = this;

  var count = _ref2.count,
      _ref2$current = _ref2.current,
      current = _ref2$current === void 0 ? 0 : _ref2$current,
      _ref2$itemsPerPage = _ref2.itemsPerPage,
      itemsPerPage = _ref2$itemsPerPage === void 0 ? 25 : _ref2$itemsPerPage,
      _ref2$itemsPerPageLab = _ref2.itemsPerPageLabel,
      itemsPerPageLabel = _ref2$itemsPerPageLab === void 0 ? defaultItemsPerPageLabel : _ref2$itemsPerPageLab,
      _ref2$showingResultsL = _ref2.showingResultsLabel,
      showingResultsLabel = _ref2$showingResultsL === void 0 ? defaultShowingResultsLabel : _ref2$showingResultsL,
      onSetItemsPerPage = _ref2.onSetItemsPerPage,
      onSetCurrent = _ref2.onSetCurrent,
      divider = _ref2.divider,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["count", "current", "itemsPerPage", "itemsPerPageLabel", "showingResultsLabel", "onSetItemsPerPage", "onSetCurrent", "divider"]);

  var itemsPerPageOptions = [25, 50, 100].filter(function (i) {
    return i <= count;
  });
  var hasItemsPerPageSelection = itemsPerPageOptions.length > 1;
  var currentPage = Math.floor(current / itemsPerPage);
  var pages = Math.ceil(count / itemsPerPage);
  var displayedPages = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (pages <= 7) {
      // 0 1 2 3 4 5 6
      return Array.from({
        length: pages
      }, function (_, i) {
        return i;
      });
    }

    if (currentPage < 5) {
      // 0 1 2 3 4 ... N
      return [0, 1, 2, 3, 4, '⋯', pages - 1];
    }

    if (currentPage > pages - 5) {
      // 0 ... N-4 N-3 N-2 N-1 N
      return [0, '⋯', pages - 5, pages - 4, pages - 3, pages - 2, pages - 1];
    } // 0 ... x-1 x x-2 ... N


    return [0, '⋯', currentPage - 1, currentPage, currentPage + 1, '⋯', pages - 1];
  }, [pages, currentPage]);
  var renderingContext = {
    count: count,
    pages: pages,
    current: current,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage
  };

  var handleSetItemsPerPageLinkClick = function handleSetItemsPerPageLinkClick(itemsPerPageOption) {
    return function () {
      onSetItemsPerPage && onSetItemsPerPage(itemsPerPageOption);
    };
  };

  var handleSetPageLinkClick = function handleSetPageLinkClick(page) {
    return function () {
      onSetCurrent && onSetCurrent(page * itemsPerPage);
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "nav",
    "rcx-pagination": true,
    "rcx-pagination--divider": divider
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }), hasItemsPerPageSelection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    "rcx-pagination__left": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    is: "span",
    "rcx-pagination__label": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, itemsPerPageLabel(renderingContext)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    is: "ol",
    "rcx-pagination__list": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, itemsPerPageOptions.map(function (itemsPerPageOption) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
      key: itemsPerPageOption,
      is: "li",
      "rcx-pagination__list-item": true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
      is: "button",
      "rcx-pagination__link": true,
      tabIndex: itemsPerPage === itemsPerPageOption ? -1 : 0,
      disabled: itemsPerPage === itemsPerPageOption,
      onClick: handleSetItemsPerPageLinkClick(itemsPerPageOption),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, itemsPerPageOption));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    "rcx-pagination__right": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    is: "span",
    "rcx-pagination__label": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, showingResultsLabel(renderingContext)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    is: "ol",
    "rcx-pagination__list": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    is: "li",
    "rcx-pagination__list-item": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    is: "button",
    "rcx-pagination__back": true,
    disabled: currentPage === 0,
    onClick: handleSetPageLinkClick(currentPage - 1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Chevron__WEBPACK_IMPORTED_MODULE_4__.Chevron, {
    left: true,
    size: "x16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }))), displayedPages.map(function (page, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
      key: i,
      is: "li",
      "rcx-pagination__list-item": true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }, page === '⋯' ? '⋯' : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
      is: "button",
      "rcx-pagination__link": true,
      disabled: currentPage === page,
      onClick: handleSetPageLinkClick(page),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, page + 1));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    is: "li",
    "rcx-pagination__list-item": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    is: "button",
    "rcx-pagination__forward": true,
    disabled: currentPage === pages - 1,
    onClick: handleSetPageLinkClick(currentPage + 1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Chevron__WEBPACK_IMPORTED_MODULE_4__.Chevron, {
    right: true,
    size: "x16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }))))));
}
Pagination.defaultProps = {
  current: 0,
  itemsPerPage: 25,
  itemsPerPageLabel: defaultItemsPerPageLabel,
  showingResultsLabel: defaultShowingResultsLabel
};
Pagination.propTypes = {
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  current: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  itemsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([25, 50, 100])
};

/***/ }),

/***/ "./src/components/PasswordInput/index.js":
/*!***********************************************!*\
  !*** ./src/components/PasswordInput/index.js ***!
  \***********************************************/
/*! namespace exports */
/*! export PasswordInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordInput": () => /* binding */ PasswordInput
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/PasswordInput/index.js";


var PasswordInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function PasswordInput(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_1__.InputBox, Object.assign({
    type: "password",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
});

/***/ }),

/***/ "./src/components/ProgressBar/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProgressBar/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! export ProgressBar [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBar": () => /* binding */ ProgressBar
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/ProgressBar/index.js";




var processPercentage = function processPercentage(percentage) {
  var newPercentage = Math.min(Math.max(0, percentage), 100);
  return newPercentage.toFixed(1);
};

var ProgressBar = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function ProgressBar(_ref, ref) {
  var percentage = _ref.percentage,
      error = _ref.error,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["percentage", "error"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    ref: ref,
    "rcx-progress-bar": true,
    title: error || null
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    "rcx-progress-bar__fill": true,
    "rcx-progress-bar__fill--type": error && 'error' || (processPercentage(percentage) >= 100 ? 'success' : 'primary'),
    width: "".concat(processPercentage(percentage), "%"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }));
});
ProgressBar.defaultProps = {
  percentage: 0
};
ProgressBar.propTypes = {
  percentage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./src/components/RadioButton/index.js":
/*!*********************************************!*\
  !*** ./src/components/RadioButton/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! export RadioButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButton": () => /* binding */ RadioButton
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rocket.chat/fuselage-hooks */ "@rocket.chat/fuselage-hooks");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Label */ "./src/components/Label/index.js");
;



var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/RadioButton/index.js";





var RadioButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function RadioButton(_ref, ref) {
  var autoComplete = _ref.autoComplete,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      form = _ref.form,
      id = _ref.id,
      name = _ref.name,
      required = _ref.required,
      tabIndex = _ref.tabIndex,
      value = _ref.value,
      qa = _ref.qa,
      dataQa = _ref['data-qa'],
      onChange = _ref.onChange,
      onInput = _ref.onInput,
      onInvalid = _ref.onInvalid,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["autoComplete", "checked", "defaultChecked", "disabled", "form", "id", "name", "required", "tabIndex", "value", "qa", "data-qa", "onChange", "onInput", "onInvalid"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(checked),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  var internalChangedByClick = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4__.useMutableCallback)( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var updatedVal;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            updatedVal = !internalValue;
            setInternalValue(updatedVal);
            onChange(updatedVal);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Box, Object.assign({
    is: _Label__WEBPACK_IMPORTED_MODULE_8__.Label,
    "rcx-radio-button": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Box, {
    is: "input",
    "rcx-radio-button__input": true,
    autoComplete: autoComplete,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    form: form,
    id: id,
    name: name,
    required: required,
    tabIndex: tabIndex,
    type: "radio",
    value: value,
    "data-qa": dataQa || qa,
    ref: ref,
    readOnly: true,
    onInput: onInput,
    onInvalid: onInvalid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Box, {
    is: "i",
    "rcx-radio-button__fake": true,
    "aria-hidden": "true",
    onClick: internalChangedByClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }));
});
RadioButton.propTypes = {
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  checked: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  defaultChecked: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  form: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  qa: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  'data-qa': (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onInput: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onInvalid: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
};

/***/ }),

/***/ "./src/components/SearchInput/index.js":
/*!*********************************************!*\
  !*** ./src/components/SearchInput/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! export SearchInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchInput": () => /* binding */ SearchInput
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/SearchInput/index.js";


var SearchInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function SearchInput(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_1__.InputBox, Object.assign({
    type: "search",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
});

/***/ }),

/***/ "./src/components/Select/MultiSelect.js":
/*!**********************************************!*\
  !*** ./src/components/Select/MultiSelect.js ***!
  \**********************************************/
/*! namespace exports */
/*! export MultiSelect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export MultiSelectFiltered [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiSelect": () => /* binding */ MultiSelect,
/* harmony export */   "MultiSelectFiltered": () => /* binding */ MultiSelectFiltered
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rocket.chat/fuselage-hooks */ "@rocket.chat/fuselage-hooks");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Chip */ "./src/components/Chip/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
/* harmony import */ var _Margins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Margins */ "./src/components/Margins/index.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Options */ "./src/components/Options/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Select */ "./src/components/Select/Select.js");
;



var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Select/MultiSelect.js";










var SelectedOptions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().memo(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Chip__WEBPACK_IMPORTED_MODULE_6__.default, Object.assign({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 47
    }
  }));
});

var prevent = function prevent(e) {
  e.preventDefault();
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

var MultiSelect = function MultiSelect(_ref) {
  var value = _ref.value,
      filter = _ref.filter,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      error = _ref.error,
      disabled = _ref.disabled,
      _ref$anchor = _ref.anchor,
      Anchor = _ref$anchor === void 0 ? _Select__WEBPACK_IMPORTED_MODULE_11__.Focus : _ref$anchor,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$getLabel = _ref.getLabel,
      getLabel = _ref$getLabel === void 0 ? function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
        _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, 2),
        label = _ref3[1];

    return label;
  } : _ref$getLabel,
      _ref$getValue = _ref.getValue,
      getValue = _ref$getValue === void 0 ? function (_ref4) {
    var _ref5 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref4, 1),
        value = _ref5[0];

    return value;
  } : _ref$getValue,
      placeholder = _ref.placeholder,
      _ref$renderOptions = _ref.renderOptions,
      _Options = _ref$renderOptions === void 0 ? _Options__WEBPACK_IMPORTED_MODULE_10__.Options : _ref$renderOptions,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["value", "filter", "options", "error", "disabled", "anchor", "onChange", "getLabel", "getValue", "placeholder", "renderOptions"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(value || []),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  var currentValue = value !== undefined ? value : internalValue;
  var option = options.find(function (option) {
    return getValue(option) === currentValue;
  });
  var index = options.indexOf(option);

  var internalChanged = function internalChanged(_ref6) {
    var _ref7 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref6, 1),
        value = _ref7[0];

    if (currentValue.includes(value)) {
      var _newValue = currentValue.filter(function (item) {
        return item !== value;
      });

      setInternalValue(_newValue);
      return onChange(_newValue);
    }

    var newValue = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(currentValue), [value]);
    setInternalValue(newValue);
    return onChange(newValue);
  };

  var mapOptions = function mapOptions(_ref8) {
    var _ref9 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref8, 2),
        value = _ref9[0],
        label = _ref9[1];

    if (currentValue.includes(value)) {
      return [value, label, true];
    }

    return [value, label];
  };

  var applyFilter = function applyFilter(_ref10) {
    var _ref11 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref10, 2),
        option = _ref11[1];

    return !filter || ~option.toLowerCase().indexOf(filter.toLowerCase());
  };

  var filteredOptions = options.filter(applyFilter).map(mapOptions);

  var _useCursor = (0,_Options__WEBPACK_IMPORTED_MODULE_10__.useCursor)(index, filteredOptions, internalChanged),
      _useCursor2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useCursor, 5),
      cursor = _useCursor2[0],
      handleKeyDown = _useCursor2[1],
      handleKeyUp = _useCursor2[2],
      reset = _useCursor2[3],
      _useCursor2$ = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useCursor2[4], 3),
      visible = _useCursor2$[0],
      hide = _useCursor2$[1],
      show = _useCursor2$[2];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(reset, [filter]);
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();

  var _useResizeObserver = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__.useResizeObserver)(),
      containerRef = _useResizeObserver.ref,
      borderBoxSize = _useResizeObserver.borderBoxSize;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, Object.assign({
    is: "div",
    "rcx-select": true,
    className: [error && 'invalid', disabled && 'disabled'],
    ref: containerRef,
    onClick: (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_3__.useMutableCallback)(function () {
      return ref.current.focus() & show();
    }),
    disabled: disabled
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Flex.Item, {
    grow: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_9__.default, {
    inline: "x4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Flex.Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, {
    is: "div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Box, {
    is: "div",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "-x8",
    role: "listbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_9__.default, {
    all: "x4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Anchor, {
    disabled: disabled,
    ref: ref,
    "aria-haspopup": "listbox",
    onClick: show,
    onBlur: hide,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    order: 1,
    "rcx-input-box--undecorated": true,
    children: !value ? option || placeholder : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }), currentValue.map(function (value) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(SelectedOptions, {
      tabIndex: -1,
      role: "option",
      key: value,
      onMouseDown: function onMouseDown(e) {
        return prevent(e) & internalChanged([value]) && false;
      },
      children: getLabel(options.find(function (_ref12) {
        var _ref13 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref12, 1),
            val = _ref13[0];

        return val === value;
      })),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 48
      }
    });
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Flex.Item, {
    grow: 0,
    shrink: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_9__.default, {
    inline: "x4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Select__WEBPACK_IMPORTED_MODULE_11__.Addon, {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_7__.Icon, {
      name: visible === _Box__WEBPACK_IMPORTED_MODULE_5__.AnimatedVisibility.VISIBLE ? 'cross' : 'chevron-down',
      size: "x20",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 28
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.AnimatedVisibility, {
    visibility: visible,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Position, {
    anchor: containerRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 48
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Options, {
    width: borderBoxSize.inlineSize,
    onMouseDown: prevent,
    multiple: true,
    filter: filter,
    renderItem: _Options__WEBPACK_IMPORTED_MODULE_10__.CheckOption,
    role: "listbox",
    options: filteredOptions,
    onSelect: internalChanged,
    cursor: cursor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 80
    }
  }))));
};
var MultiSelectFiltered = function MultiSelectFiltered(_ref14) {
  var options = _ref14.options,
      placeholder = _ref14.placeholder,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref14, ["options", "placeholder"]);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1];

  var anchor = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().forwardRef(function (_ref15, ref) {
    var children = _ref15.children,
        filter = _ref15.filter,
        props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref15, ["children", "filter"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_5__.Flex.Item, {
      grow: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 88
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_8__.InputBox.Input, Object.assign({
      ref: ref,
      placeholder: placeholder,
      value: filter,
      onInput: function onInput(e) {
        return setFilter(e.currentTarget.value);
      }
    }, props, {
      "rcx-input-box--undecorated": true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 108
      }
    })));
  }), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(MultiSelect, Object.assign({
    filter: filter,
    options: options
  }, props, {
    anchor: anchor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 10
    }
  }));
};

/***/ }),

/***/ "./src/components/Select/Select.js":
/*!*****************************************!*\
  !*** ./src/components/Select/Select.js ***!
  \*****************************************/
/*! namespace exports */
/*! export Addon [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Focus [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Select [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SelectFiltered [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Addon": () => /* binding */ Addon,
/* harmony export */   "Focus": () => /* binding */ Focus,
/* harmony export */   "Select": () => /* binding */ Select,
/* harmony export */   "SelectFiltered": () => /* binding */ SelectFiltered
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rocket.chat/fuselage-hooks */ "@rocket.chat/fuselage-hooks");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Options */ "./src/components/Options/index.js");
;


var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Select/Select.js";







var Addon = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, Object.assign({
    is: "div",
    "rcx-select__addon": true,
    ref: ref
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 49
    }
  }));
});
var Wrapper = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, Object.assign({
    is: "div",
    "rcx-select__wrapper": true,
    ref: ref
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 44
    }
  }));
});
var Focus = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, Object.assign({
    ref: ref,
    fontScale: "p2",
    color: "hint",
    "rcx-select__focus": true,
    is: "button",
    type: "button"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 55
    }
  }));
});

var useDidUpdate = function useDidUpdate(func) {
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var didMount = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
  var fn = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutableCallback)(func);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (didMount.current) {
      fn();
    }

    didMount.current = true;
  }, deps);
};

var Select = function Select(_ref) {
  var value = _ref.value,
      filter = _ref.filter,
      error = _ref.error,
      disabled = _ref.disabled,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$anchor = _ref.anchor,
      Anchor = _ref$anchor === void 0 ? Focus : _ref$anchor,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$getValue = _ref.getValue,
      getValue = _ref$getValue === void 0 ? function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
        _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 1),
        value = _ref3[0];

    return value;
  } : _ref$getValue,
      _ref$getLabel = _ref.getLabel,
      getLabel = _ref$getLabel === void 0 ? function () {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
        _ref5 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, 2),
        label = _ref5[1];

    return label;
  } : _ref$getLabel,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      _ref$renderOptions = _ref.renderOptions,
      _Options = _ref$renderOptions === void 0 ? _Options__WEBPACK_IMPORTED_MODULE_7__.Options : _ref$renderOptions,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["value", "filter", "error", "disabled", "options", "anchor", "onChange", "getValue", "getLabel", "placeholder", "renderOptions"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  var currentValue = value !== undefined ? value : internalValue;
  var internalChangedByKeyboard = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutableCallback)(function (_ref6) {
    var _ref7 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref6, 1),
        value = _ref7[0];

    setInternalValue(value);
    onChange(value);
  });
  var option = options.find(function (option) {
    return getValue(option) === currentValue;
  });
  var index = options.indexOf(option);
  var filteredOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    var mapOptions = function mapOptions(_ref8) {
      var _ref9 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref8, 2),
          value = _ref9[0],
          label = _ref9[1];

      if (currentValue === value) {
        return [value, label, true];
      }

      return [value, label];
    };

    var applyFilter = function applyFilter(_ref10) {
      var _ref11 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref10, 2),
          option = _ref11[1];

      return !filter || ~option.toLowerCase().indexOf(filter.toLowerCase());
    };

    return options.filter(applyFilter).map(mapOptions);
  }, [options, currentValue, filter]);

  var _useCursor = (0,_Options__WEBPACK_IMPORTED_MODULE_7__.useCursor)(index, filteredOptions, internalChangedByKeyboard),
      _useCursor2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useCursor, 5),
      cursor = _useCursor2[0],
      handleKeyDown = _useCursor2[1],
      handleKeyUp = _useCursor2[2],
      reset = _useCursor2[3],
      _useCursor2$ = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useCursor2[4], 3),
      visible = _useCursor2$[0],
      hide = _useCursor2$[1],
      show = _useCursor2$[2];

  var internalChangedByClick = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutableCallback)(function (_ref12) {
    var _ref13 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref12, 1),
        value = _ref13[0];

    setInternalValue(value);
    onChange(value);
    hide();
  });
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var _useResizeObserver = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useResizeObserver)(),
      containerRef = _useResizeObserver.ref,
      borderBoxSize = _useResizeObserver.borderBoxSize;

  useDidUpdate(reset, [filter, internalValue]);
  var valueLabel = getLabel(option);
  var visibleText = (filter === undefined || visible === _Box__WEBPACK_IMPORTED_MODULE_4__.AnimatedVisibility.HIDDEN) && (valueLabel || placeholder || typeof placeholder === 'string');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, Object.assign({
    "rcx-select": true,
    disabled: disabled,
    ref: containerRef,
    onClick: (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutableCallback)(function () {
      return ref.current.focus() & show();
    }),
    className: (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
      return [error && 'invalid', disabled && 'disabled'];
    }, [error, disabled])
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Wrapper, {
    display: "flex",
    mi: "neg-x4",
    "rcx-select__wrapper--hidden": !!visibleText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, visibleText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, {
    flexGrow: 1,
    is: "span",
    mi: "x4",
    "rcx-select__item": true,
    fontScale: "p2",
    color: valueLabel ? 'default' : 'hint',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 14
    }
  }, visibleText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Anchor, {
    disabled: disabled,
    "rcx-input-box--undecorated": true,
    filter: filter,
    ref: ref,
    "aria-haspopup": "listbox",
    onClick: show,
    onBlur: hide,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Addon, {
    mi: "x4",
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_5__.Icon, {
      name: visible === _Box__WEBPACK_IMPORTED_MODULE_4__.AnimatedVisibility.VISIBLE ? 'cross' : 'chevron-down',
      size: "x20",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 34
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.PositionAnimated, {
    visible: visible,
    anchor: containerRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Options, {
    width: borderBoxSize.inlineSize,
    role: "listbox",
    filter: filter,
    options: filteredOptions,
    onSelect: internalChangedByClick,
    cursor: cursor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 65
    }
  })));
};
var SelectFiltered = function SelectFiltered(_ref14) {
  var options = _ref14.options,
      placeholder = _ref14.placeholder,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref14, ["options", "placeholder"]);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      filter = _useState4[0],
      setFilter = _useState4[1];

  var anchor = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function (_ref15, ref) {
    var children = _ref15.children,
        filter = _ref15.filter,
        props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref15, ["children", "filter"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_6__.InputBox.Input, Object.assign({
      mi: "x4",
      flexGrow: 1,
      className: "rcx-select__focus",
      ref: ref,
      placeholder: placeholder,
      value: filter,
      onChange: (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_2__.useMutableCallback)(function (e) {
        return setFilter(e.currentTarget.value);
      })
    }, props, {
      "rcx-input-box--undecorated": true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 88
      }
    }));
  }), []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Select, Object.assign({
    placeholder: null,
    filter: filter,
    options: options
  }, props, {
    anchor: anchor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 10
    }
  }));
};

/***/ }),

/***/ "./src/components/Select/index.js":
/*!****************************************!*\
  !*** ./src/components/Select/index.js ***!
  \****************************************/
/*! namespace exports */
/*! export Addon [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/Select.js .Addon */
/*! export Focus [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/Select.js .Focus */
/*! export MultiSelect [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/MultiSelect.js .MultiSelect */
/*! export MultiSelectFiltered [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/MultiSelect.js .MultiSelectFiltered */
/*! export Select [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/Select.js .Select */
/*! export SelectFiltered [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/Select.js .SelectFiltered */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Addon": () => /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_0__.Addon,
/* harmony export */   "Focus": () => /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_0__.Focus,
/* harmony export */   "Select": () => /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_0__.Select,
/* harmony export */   "SelectFiltered": () => /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_0__.SelectFiltered,
/* harmony export */   "MultiSelect": () => /* reexport safe */ _MultiSelect__WEBPACK_IMPORTED_MODULE_1__.MultiSelect,
/* harmony export */   "MultiSelectFiltered": () => /* reexport safe */ _MultiSelect__WEBPACK_IMPORTED_MODULE_1__.MultiSelectFiltered
/* harmony export */ });
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./src/components/Select/Select.js");
/* harmony import */ var _MultiSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiSelect */ "./src/components/Select/MultiSelect.js");



/***/ }),

/***/ "./src/components/SelectInput/index.js":
/*!*********************************************!*\
  !*** ./src/components/SelectInput/index.js ***!
  \*********************************************/
/*! namespace exports */
/*! export SelectInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectInput": () => /* binding */ SelectInput
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
;

var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/SelectInput/index.js";



var SelectInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function SelectInput(_ref, ref) {
  var children = _ref.children,
      multiple = _ref.multiple,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["children", "multiple", "placeholder", "onChange"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!props.value && !props.defaultValue),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isPlaceholderVisible = _useState2[0],
      setPlaceholderVisible = _useState2[1];

  var handleChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (event) {
    setPlaceholderVisible(!event.currentTarget.value);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    onChange && onChange.call.apply(onChange, [event.currentTarget, event].concat(args));
  }, [onChange]);

  if (multiple) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_4__.InputBox, Object.assign({
      children: children
    }, props, {
      multiple: true,
      type: "select",
      onChange: handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 12
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_4__.InputBox, Object.assign({
    placeholderVisible: isPlaceholderVisible ? !!placeholder : undefined,
    ref: ref
  }, props, {
    addon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      name: "chevron-down",
      size: "x20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 12
      }
    }),
    type: "select",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }
  }), placeholder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_4__.InputBox.Placeholder, {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, placeholder), children);
});
SelectInput.Option = _InputBox__WEBPACK_IMPORTED_MODULE_4__.InputBox.Option;

/***/ }),

/***/ "./src/components/Sidebar/Actions.js":
/*!*******************************************!*\
  !*** ./src/components/Sidebar/Actions.js ***!
  \*******************************************/
/*! namespace exports */
/*! export Actions [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Actions": () => /* binding */ Actions
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ "./src/index.js");
var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Sidebar/Actions.js";



var Actions = function Actions(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.ButtonGroup, Object.assign({
    mb: "neg-x2",
    medium: true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 35
    }
  }));
};

/***/ }),

/***/ "./src/components/Sidebar/Item.js":
/*!****************************************!*\
  !*** ./src/components/Sidebar/Item.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.. */ "./src/index.js");
;

var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Sidebar/Item.js";




var Item = function Item(_ref) {
  var selected = _ref.selected,
      highlighted = _ref.highlighted,
      clickable = _ref.clickable,
      _ref$is = _ref.is,
      Tag = _ref$is === void 0 ? 'div' : _ref$is,
      children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["selected", "highlighted", "clickable", "is", "children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Tag, Object.assign({
    className: ['rc-box rcx-box--full rcx-sidebar-item', highlighted && 'rcx-sidebar-item--highlighted', clickable && 'rcx-sidebar-item--clickable', selected && 'rcx-sidebar-item--selected'].filter(Boolean).join(' ')
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 93
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "rcx-box rcx-box--full rcx-sidebar-item__wrapper",
    children: children,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 43
    }
  }));
};

var Container = function Container(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
    className: "rc-box rcx-box--full rcx-sidebar-item__container"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 30
    }
  }));
};

var Menu = function Menu(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
    className: "rc-box rcx-box--full rcx-sidebar-item__menu-wraper "
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }));
};

var Content = function Content(_ref2) {
  var className = _ref2.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
    className: "rc-box rcx-box--full rcx-sidebar-item__container rcx-sidebar-item__content ".concat(className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 46
    }
  }));
};

var Title = function Title(_ref3) {
  var className = _ref3.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
    className: "rc-box rcx-box--full rcx-sidebar-item__title ".concat(className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 44
    }
  }));
};

var Time = function Time(_ref4) {
  var className = _ref4.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
    className: "rc-box rcx-box--full rcx-sidebar-item__time ".concat(className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 43
    }
  }));
};

var Badge = function Badge(_ref5) {
  var className = _ref5.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref5, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
    className: "rc-box rcx-box--full rcx-sidebar-item__badge ".concat(className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 44
    }
  }));
};

var Subtitle = function Subtitle(_ref6) {
  var className = _ref6.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref6, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
    className: "rc-box rcx-box--full rcx-sidebar-item__subtitle ".concat(className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 47
    }
  }));
};

var Wrapper = function Wrapper(_ref7) {
  var className = _ref7.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref7, ["className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
    className: "rc-box rcx-box--full rcx-sidebar-item__wrapper ".concat(className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 46
    }
  }));
};

var Icon = function Icon(_ref8) {
  var children = _ref8.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref8, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
    className: "rc-box rcx-box--full rcx-sidebar-item__icon"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 42
    }
  }), children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.Icon, Object.assign({
    size: "x16"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 128
    }
  })));
};

var Avatar = function Avatar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 27
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
    className: "rc-box rcx-box--full rcx-sidebar-item__avatar"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 38
    }
  })));
};

var Actions = function Actions(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, Object.assign({
    small: true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 28
    }
  }));
};

var Action = function Action(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.ActionButton, Object.assign({
    small: true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 27
    }
  }));
};

Object.assign(Item, {
  Menu: Menu,
  Container: Container,
  Content: Content,
  Title: Title,
  Subtitle: Subtitle,
  Time: Time,
  Wrapper: Wrapper,
  Icon: Icon,
  Avatar: Avatar,
  Actions: Actions,
  Action: Action,
  Badge: Badge
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

/***/ }),

/***/ "./src/components/Sidebar/Section.js":
/*!*******************************************!*\
  !*** ./src/components/Sidebar/Section.js ***!
  \*******************************************/
/*! namespace exports */
/*! export Title [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Title": () => /* binding */ Title,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Sidebar/Section.js";


var Title = function Title(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", Object.assign({
    className: "rcx-box rcx-box--full rcx-sidebar-title"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 33
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Title: Title
});

/***/ }),

/***/ "./src/components/Sidebar/TopBar.js":
/*!******************************************!*\
  !*** ./src/components/Sidebar/TopBar.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.. */ "./src/index.js");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Actions */ "./src/components/Sidebar/Actions.js");
;

var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Sidebar/TopBar.js";




var Avatar = {
  size: 'x24'
};

var TopBar = function TopBar(_ref) {
  var modifier = _ref.modifier,
      className = _ref.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["modifier", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", Object.assign({
    className: "rc-box rc-box--full rcx-sidebar-topbar ".concat(className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 55
    }
  }));
};

var Wrapper = function Wrapper(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "rc-box rc-box--full rcx-sidebar-topbar__wrapper",
    children: children,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 35
    }
  });
};

TopBar.ToolBox = function (_ref3) {
  var children = _ref3.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TopBar, Object.assign({
    className: "rcx-sidebar-topbar--toolbox"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TopBar.Wrapper, {
    children: children,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TopBar.Divider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }));
};

TopBar.Section = function (_ref4) {
  var children = _ref4.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TopBar, Object.assign({
    className: "rcx-sidebar-topbar--section"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TopBar.Wrapper, {
    children: children,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(TopBar.Divider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }));
};

TopBar.Wrapper = Wrapper;
TopBar.Avatar = Avatar;
TopBar.Actions = _Actions__WEBPACK_IMPORTED_MODULE_3__.Actions;

TopBar.Action = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.ActionButton, Object.assign({
    small: true,
    ghost: true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 28
    }
  }));
};

TopBar.Divider = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.Divider, {
    mbs: "neg-x2",
    mbe: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 24
    }
  });
};

TopBar.Title = function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(___WEBPACK_IMPORTED_MODULE_2__.Box, Object.assign({
    "rcx-sidebar-top-bar__title": true,
    withTruncatedText: true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 27
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);

/***/ }),

/***/ "./src/components/Sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/Sidebar/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! export Sidebar [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": () => /* binding */ Sidebar,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/components/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ "./src/components/Sidebar/Item.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./src/components/Sidebar/Section.js");
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TopBar */ "./src/components/Sidebar/TopBar.js");
var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Sidebar/index.js";






var Sidebar = function Sidebar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.Box, Object.assign({
    "rcx-sidebar": true
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 35
    }
  }));
};
Sidebar.TopBar = _TopBar__WEBPACK_IMPORTED_MODULE_4__.default;
Sidebar.Item = _Item__WEBPACK_IMPORTED_MODULE_2__.default;
Sidebar.Section = _Section__WEBPACK_IMPORTED_MODULE_3__.default;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/components/Skeleton/index.js":
/*!******************************************!*\
  !*** ./src/components/Skeleton/index.js ***!
  \******************************************/
/*! namespace exports */
/*! export Skeleton [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Skeleton": () => /* binding */ Skeleton
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Skeleton/index.js";



function Skeleton(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'text' : _ref$variant,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "span",
    "rcx-skeleton": true,
    "rcx-skeleton--text": variant === 'text',
    "rcx-skeleton--rect": variant === 'rect'
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }));
}
Skeleton.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['text', 'rect'])
};

/***/ }),

/***/ "./src/components/StatusBullet/index.js":
/*!**********************************************!*\
  !*** ./src/components/StatusBullet/index.js ***!
  \**********************************************/
/*! namespace exports */
/*! export StatusBullet [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusBullet": () => /* binding */ StatusBullet
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
;

var _this = undefined,
    _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/StatusBullet/index.js";



var StatusBullet = function StatusBullet(_ref) {
  var _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'loading' : _ref$status,
      size = _ref.size,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["status", "size", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", Object.assign({
    className: "rcx-box rcx-box--full rcx-status-bullet rcx-status-bullet--".concat(status, " ").concat(size === 'small' ? 'rcx-status-bullet--small' : '', " ").concat(className)
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 89
    }
  }));
};
StatusBullet.propTypes = {
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['online', 'busy', 'away', 'offline']),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};

/***/ }),

/***/ "./src/components/Table/index.js":
/*!***************************************!*\
  !*** ./src/components/Table/index.js ***!
  \***************************************/
/*! namespace exports */
/*! export Selection [provided] [no usage info] [missing usage info prevents renaming] */
/*! export SelectionButton [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Table [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TableBody [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TableCell [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TableFoot [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TableHead [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TableRow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Selection": () => /* binding */ Selection,
/* harmony export */   "SelectionButton": () => /* binding */ SelectionButton,
/* harmony export */   "Table": () => /* binding */ Table,
/* harmony export */   "TableHead": () => /* binding */ TableHead,
/* harmony export */   "TableBody": () => /* binding */ TableBody,
/* harmony export */   "TableFoot": () => /* binding */ TableFoot,
/* harmony export */   "TableRow": () => /* binding */ TableRow,
/* harmony export */   "TableCell": () => /* binding */ TableCell
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");
/* harmony import */ var _Margins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Margins */ "./src/components/Margins/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Table/index.js";





var style = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};
function Selection(_ref) {
  var children = _ref.children,
      text = _ref.text,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["children", "text"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    color: "alternative",
    "rcx-table__selection": true,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }, props, {
    pi: "x24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    fontScale: "p2",
    mb: "x16",
    flexShrink: 1,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, text), children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    mi: "neg-x8",
    fontScale: "p2",
    flexShrink: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Margins__WEBPACK_IMPORTED_MODULE_5__.default, {
    inline: "x4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 67
    }
  }, children)));
}
function SelectionButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_4__.Button, Object.assign({
    small: true,
    primary: true,
    flexShrink: 0
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 10
    }
  }));
}
Selection.Button = SelectionButton;
function Table(_ref2) {
  var striped = _ref2.striped,
      sticky = _ref2.sticky,
      _ref2$fixed = _ref2.fixed,
      fixed = _ref2$fixed === void 0 ? false : _ref2$fixed,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["striped", "sticky", "fixed"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    "rcx-table__wrapper": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "table",
    "rcx-table": true,
    "rcx-table--fixed": fixed,
    "rcx-table--sticky": sticky,
    "rcx-table--striped": striped
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  })));
}
Table.Selection = Selection;
var TableHeadContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(false);
function TableHead(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(TableHeadContext.Provider, {
    value: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "thead",
    "rcx-table__head": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  })));
}
function TableBody(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "tbody",
    "rcx-table__body": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  }));
}
function TableFoot(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "tfoot",
    "rcx-table__foot": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }));
}
function TableRow(_ref3) {
  var action = _ref3.action,
      selected = _ref3.selected,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, ["action", "selected"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "tr",
    "rcx-table__row": true,
    "rcx-table__row--selected": selected,
    "rcx-table__row--action": action
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 10
    }
  }));
}
function TableCell(_ref4) {
  var align = _ref4.align,
      clickable = _ref4.clickable,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, ["align", "clickable"]);

  var isInsideHead = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(TableHeadContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: isInsideHead ? 'th' : 'td',
    "rcx-table__cell": true,
    "rcx-table__cell--align": align,
    "rcx-table__cell--header": isInsideHead,
    "rcx-table__cell--clickable": clickable
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 10
    }
  }));
}
TableCell.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['start', 'end', 'center', 'justify']), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)])
};
Table.Head = TableHead;
Table.Body = TableBody;
Table.Foot = TableFoot;
Table.Row = TableRow;
Table.Cell = TableCell;

/***/ }),

/***/ "./src/components/Tabs/index.js":
/*!**************************************!*\
  !*** ./src/components/Tabs/index.js ***!
  \**************************************/
/*! namespace exports */
/*! export Tabs [provided] [no usage info] [missing usage info prevents renaming] */
/*! export TabsItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tabs": () => /* binding */ Tabs,
/* harmony export */   "TabsItem": () => /* binding */ TabsItem
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Tabs/index.js";



function Tabs(_ref) {
  var children = _ref.children,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "div",
    "rcx-tabs": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    is: "div",
    "rcx-tabs__scroll-box": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, {
    is: "div",
    p: "x4",
    "rcx-tabs__wrapper": true,
    children: children,
    role: "tablist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  })));
}
var TabsItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function TabsItem(_ref2, ref) {
  var selected = _ref2.selected,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ["selected"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "button",
    "rcx-tabs__item": true,
    "rcx-tabs__item--selected": selected,
    "aria-selected": selected ? 'true' : 'false',
    ref: ref,
    role: "tab"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 10
    }
  }));
});
TabsItem.propTypes = {
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Tabs.Item = TabsItem;

/***/ }),

/***/ "./src/components/Tag/index.js":
/*!*************************************!*\
  !*** ./src/components/Tag/index.js ***!
  \*************************************/
/*! namespace exports */
/*! export Tag [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tag": () => /* binding */ Tag
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.. */ "./src/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Tag/index.js";



function Tag(_ref) {
  var disabled = _ref.disabled,
      round = _ref.round,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'secondary' : _ref$variant,
      onClick = _ref.onClick,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["disabled", "round", "variant", "onClick"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(___WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    is: "span",
    "rcx-tag": true,
    "rcx-tag--warning": variant === 'warning',
    "rcx-tag--secondary": variant === 'secondary',
    "rcx-tag--primary": variant === 'primary',
    "rcx-tag--danger": variant === 'danger',
    "rcx-tag--ghost": variant === 'ghost',
    "rcx-tag--disabled": !!disabled,
    "rcx-tag--round": !!round,
    "rcx-tag--clickable": !!onClick,
    onClick: onClick
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  }));
}
Tag.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  round: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['secondary', 'primary', 'danger', 'warning', 'ghost'])
};

/***/ }),

/***/ "./src/components/TelephoneInput/index.js":
/*!************************************************!*\
  !*** ./src/components/TelephoneInput/index.js ***!
  \************************************************/
/*! namespace exports */
/*! export TelephoneInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelephoneInput": () => /* binding */ TelephoneInput
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/TelephoneInput/index.js";


var TelephoneInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function TelephoneInput(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_1__.InputBox, Object.assign({
    type: "tel",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
});

/***/ }),

/***/ "./src/components/TextAreaInput/index.js":
/*!***********************************************!*\
  !*** ./src/components/TextAreaInput/index.js ***!
  \***********************************************/
/*! namespace exports */
/*! export TextAreaInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextAreaInput": () => /* binding */ TextAreaInput
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/TextAreaInput/index.js";


var TextAreaInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function TextAreaInput(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_1__.InputBox, Object.assign({
    type: "textarea",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
});

/***/ }),

/***/ "./src/components/TextInput/index.js":
/*!*******************************************!*\
  !*** ./src/components/TextInput/index.js ***!
  \*******************************************/
/*! namespace exports */
/*! export TextInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextInput": () => /* binding */ TextInput
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/TextInput/index.js";


var TextInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function TextInput(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_1__.InputBox, Object.assign({
    type: "text",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
});

/***/ }),

/***/ "./src/components/Throbber/index.js":
/*!******************************************!*\
  !*** ./src/components/Throbber/index.js ***!
  \******************************************/
/*! namespace exports */
/*! export Throbber [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Throbber": () => /* binding */ Throbber
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rocket.chat/css-in-js */ "./node_modules/@rocket.chat/css-in-js/dist/index.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_createPropType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/createPropType */ "./src/helpers/createPropType.js");
/* harmony import */ var _styleTokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styleTokens */ "./src/styleTokens.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;

var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Throbber/index.js";

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      animation-duration: ", "s;\n      animation-delay: ", "s;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function Circle(_ref) {
  var disabled = _ref.disabled,
      circleCount = _ref.circleCount,
      iteration = _ref.iteration,
      inheritColor = _ref.inheritColor,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["disabled", "circleCount", "iteration", "inheritColor"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Box, Object.assign({
    is: "span",
    className: (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_2__.css)(_templateObject(), circleCount * 0.466, iteration * 0.16),
    "rcx-throbber__circle": true,
    "rcx-throbber__circle--disabled": disabled,
    "rcx-throbber__circle--inherit-color": inheritColor
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 10
    }
  }));
}

var Throbber = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function Throbber(_ref2, ref) {
  var _this = this;

  var disabled = _ref2.disabled,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'x16' : _ref2$size,
      _ref2$circleCount = _ref2.circleCount,
      circleCount = _ref2$circleCount === void 0 ? 3 : _ref2$circleCount,
      inheritColor = _ref2.inheritColor,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["disabled", "size", "circleCount", "inheritColor"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Box, Object.assign({
    "rcx-throbber": true,
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }
  }), Array.from({
    length: circleCount || 3
  }, function (_, iteration) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Circle, {
      key: iteration,
      iteration: iteration,
      disabled: !!disabled,
      size: size,
      inheritColor: !!inheritColor,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    });
  }));
});
Throbber.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  size: (0,_helpers_createPropType__WEBPACK_IMPORTED_MODULE_5__.createPropType)(_styleTokens__WEBPACK_IMPORTED_MODULE_6__.size),
  circleCount: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  inheritColor: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};

/***/ }),

/***/ "./src/components/Tile/index.js":
/*!**************************************!*\
  !*** ./src/components/Tile/index.js ***!
  \**************************************/
/*! namespace exports */
/*! export Tile [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tile": () => /* binding */ Tile
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Tile/index.js";



var Tile = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function Tile(_ref, ref) {
  var className = _ref.className,
      elevation = _ref.elevation,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["className", "elevation"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_3__.Box, Object.assign({
    ref: ref,
    "rcx-tile": true,
    "rcx-tile--elevation": elevation
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }));
});
Tile.defaultProps = {
  elevation: '1',
  padding: 'x16'
};
Tile.propTypes = {
  elevation: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['0', '1', '2']).isRequired
};

/***/ }),

/***/ "./src/components/ToggleSwitch/index.js":
/*!**********************************************!*\
  !*** ./src/components/ToggleSwitch/index.js ***!
  \**********************************************/
/*! namespace exports */
/*! export ToggleSwitch [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleSwitch": () => /* binding */ ToggleSwitch
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rocket.chat/fuselage-hooks */ "@rocket.chat/fuselage-hooks");
/* harmony import */ var _rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Label */ "./src/components/Label/index.js");
;



var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/ToggleSwitch/index.js";





var ToggleSwitch = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(function ToggleSwitch(_ref, ref) {
  var autoComplete = _ref.autoComplete,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      disabled = _ref.disabled,
      form = _ref.form,
      id = _ref.id,
      name = _ref.name,
      required = _ref.required,
      tabIndex = _ref.tabIndex,
      value = _ref.value,
      qa = _ref.qa,
      dataQa = _ref['data-qa'],
      onChange = _ref.onChange,
      onInput = _ref.onInput,
      onInvalid = _ref.onInvalid,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["autoComplete", "checked", "defaultChecked", "disabled", "form", "id", "name", "required", "tabIndex", "value", "qa", "data-qa", "onChange", "onInput", "onInvalid"]);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(checked),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  var internalChangedByClick = (0,_rocket_chat_fuselage_hooks__WEBPACK_IMPORTED_MODULE_4__.useMutableCallback)( /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var updatedVal;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            updatedVal = !internalValue;
            setInternalValue(updatedVal);
            onChange(updatedVal);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Box, Object.assign({
    is: _Label__WEBPACK_IMPORTED_MODULE_8__.Label,
    "rcx-toggle-switch": true
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Box, {
    is: "input",
    "rcx-toggle-switch__input": true,
    autoComplete: autoComplete,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    form: form,
    id: id,
    name: name,
    required: required,
    tabIndex: tabIndex,
    type: "checkbox",
    value: value,
    "data-qa": dataQa || qa,
    ref: ref,
    readOnly: true,
    onInput: onInput,
    onInvalid: onInvalid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_7__.Box, {
    is: "i",
    "rcx-toggle-switch__fake": true,
    "aria-hidden": "true",
    onClick: internalChangedByClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }));
});
ToggleSwitch.propTypes = {
  autoComplete: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  checked: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  defaultChecked: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  form: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  tabIndex: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  qa: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  'data-qa': (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onInput: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  onInvalid: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)
};

/***/ }),

/***/ "./src/components/Tooltip/index.js":
/*!*****************************************!*\
  !*** ./src/components/Tooltip/index.js ***!
  \*****************************************/
/*! namespace exports */
/*! export Tooltip [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tooltip": () => /* binding */ Tooltip
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
;

var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/Tooltip/index.js";



var Tooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function Tooltip(_ref, ref) {
  var placement = _ref.placement,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["placement"]);

  var _ref2 = placement ? placement.split('-') : [false, false],
      _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 2),
      direction = _ref3[0],
      position = _ref3[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Box__WEBPACK_IMPORTED_MODULE_4__.Box, Object.assign({
    is: "div",
    ref: ref,
    "rcx-tooltip": true,
    "rcx-tooltip--dir": direction,
    "rcx-tooltip--pos": position
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }));
});
Tooltip.propTypes = {
  position: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['top-start', 'top-middle', 'top-end', 'bottom-start', 'bottom-middle', 'bottom-end', 'left-start', 'left-middle', 'left-end', 'right-start', 'right-middle', 'right-end', 'top', 'left', 'bottom', 'right'])
};

/***/ }),

/***/ "./src/components/UrlInput/index.js":
/*!******************************************!*\
  !*** ./src/components/UrlInput/index.js ***!
  \******************************************/
/*! namespace exports */
/*! export UrlInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlInput": () => /* binding */ UrlInput
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InputBox */ "./src/components/InputBox/index.js");
var _jsxFileName = "/Users/davekoo/Dev/workspace/Rocket.Chat.Fuselage-components/src/components/UrlInput/index.js";


var UrlInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function UrlInput(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputBox__WEBPACK_IMPORTED_MODULE_1__.InputBox, Object.assign({
    type: "url",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  }));
});

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! namespace exports */
/*! export ACTIONS [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Options/index.js .ACTIONS */
/*! export Accordion [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Accordion/index.js .Accordion */
/*! export ActionButton [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Button/ActionButton.js .ActionButton */
/*! export Addon [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/Select.js .Addon */
/*! export AnimatedVisibility [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/AnimatedVisibility/index.js .default */
/*! export AutoComplete [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/AutoComplete/index.js .AutoComplete */
/*! export Avatar [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Avatar/index.js .Avatar */
/*! export Badge [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Badge/index.js .Badge */
/*! export Box [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/index.js .Box */
/*! export Button [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Button/index.js .Button */
/*! export ButtonGroup [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/ButtonGroup/index.js .ButtonGroup */
/*! export Callout [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Callout/index.js .Callout */
/*! export CheckBox [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/CheckBox/index.js .CheckBox */
/*! export CheckOption [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Options/index.js .CheckOption */
/*! export Chevron [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Chevron/index.js .Chevron */
/*! export Chip [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Chip/index.js .default */
/*! export Divider [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Divider/index.js .Divider */
/*! export EmailInput [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/EmailInput/index.js .EmailInput */
/*! export Empty [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Options/index.js .Empty */
/*! export Field [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Field/index.js .Field */
/*! export FieldDescription [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Field/index.js .FieldDescription */
/*! export FieldError [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Field/index.js .FieldError */
/*! export FieldGroup [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/FieldGroup/index.js .FieldGroup */
/*! export FieldHint [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Field/index.js .FieldHint */
/*! export FieldLabel [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Field/index.js .FieldLabel */
/*! export FieldRow [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Field/index.js .FieldRow */
/*! export Flex [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/Flex/index.js .default */
/*! export Focus [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/Select.js .Focus */
/*! export Grid [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Grid/index.js .Grid */
/*! export GridItem [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Grid/index.js .GridItem */
/*! export Icon [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Icon/index.js .Icon */
/*! export InputBox [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/InputBox/index.js .InputBox */
/*! export InputBoxSkeleton [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/InputBox/index.js .InputBoxSkeleton */
/*! export Label [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Label/index.js .Label */
/*! export Margins [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Margins/index.js .default */
/*! export Menu [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Menu/index.js .Menu */
/*! export Modal [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/index.js .Modal */
/*! export ModalBackdrop [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/Stack.js .ModalBackdrop */
/*! export ModalClose [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/index.js .ModalClose */
/*! export ModalContainer [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/Stack.js .ModalContainer */
/*! export ModalContent [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/index.js .ModalContent */
/*! export ModalFooter [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/index.js .ModalFooter */
/*! export ModalHeader [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/index.js .ModalHeader */
/*! export ModalPortal [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/Stack.js .ModalPortal */
/*! export ModalStack [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/Stack.js .ModalStack */
/*! export ModalThumb [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/index.js .ModalThumb */
/*! export ModalTitle [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/index.js .ModalTitle */
/*! export MultiSelect [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/MultiSelect.js .MultiSelect */
/*! export MultiSelectFiltered [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/MultiSelect.js .MultiSelectFiltered */
/*! export NumberInput [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/NumberInput/index.js .NumberInput */
/*! export Option [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Options/index.js .Option */
/*! export Options [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Options/index.js .Options */
/*! export Pagination [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Pagination/index.js .Pagination */
/*! export PasswordInput [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/PasswordInput/index.js .PasswordInput */
/*! export Position [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/Position/index.js .default */
/*! export PositionAnimated [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/Position/index.js .PositionAnimated */
/*! export ProgressBar [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/ProgressBar/index.js .ProgressBar */
/*! export RadioButton [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/RadioButton/index.js .RadioButton */
/*! export Scrollable [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/Scrollable/index.js .default */
/*! export SearchInput [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/SearchInput/index.js .SearchInput */
/*! export Select [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/Select.js .Select */
/*! export SelectFiltered [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Select/Select.js .SelectFiltered */
/*! export SelectInput [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/SelectInput/index.js .SelectInput */
/*! export Selection [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Table/index.js .Selection */
/*! export SelectionButton [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Table/index.js .SelectionButton */
/*! export Sidebar [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Sidebar/index.js .Sidebar */
/*! export Skeleton [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Skeleton/index.js .Skeleton */
/*! export StatusBullet [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/StatusBullet/index.js .StatusBullet */
/*! export Table [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Table/index.js .Table */
/*! export TableBody [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Table/index.js .TableBody */
/*! export TableCell [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Table/index.js .TableCell */
/*! export TableFoot [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Table/index.js .TableFoot */
/*! export TableHead [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Table/index.js .TableHead */
/*! export TableRow [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Table/index.js .TableRow */
/*! export Tabs [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Tabs/index.js .Tabs */
/*! export TabsItem [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Tabs/index.js .TabsItem */
/*! export Tag [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Tag/index.js .Tag */
/*! export TelephoneInput [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/TelephoneInput/index.js .TelephoneInput */
/*! export TextAreaInput [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/TextAreaInput/index.js .TextAreaInput */
/*! export TextInput [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/TextInput/index.js .TextInput */
/*! export Throbber [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Throbber/index.js .Throbber */
/*! export Tile [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Tile/index.js .Tile */
/*! export ToggleSwitch [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/ToggleSwitch/index.js .ToggleSwitch */
/*! export Tooltip [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Tooltip/index.js .Tooltip */
/*! export UrlInput [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/UrlInput/index.js .UrlInput */
/*! export useArrayLikeClassNameProp [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/index.js .useArrayLikeClassNameProp */
/*! export useBoxOnlyProps [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Box/index.js .useBoxOnlyProps */
/*! export useCursor [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Options/index.js .useCursor */
/*! export useModalStack [provided] [no usage info] [missing usage info prevents renaming] -> ./src/components/Modal/Stack.js .useModalStack */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => /* reexport safe */ _Accordion__WEBPACK_IMPORTED_MODULE_0__.Accordion,
/* harmony export */   "AutoComplete": () => /* reexport safe */ _AutoComplete__WEBPACK_IMPORTED_MODULE_1__.AutoComplete,
/* harmony export */   "Avatar": () => /* reexport safe */ _Avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar,
/* harmony export */   "Badge": () => /* reexport safe */ _Badge__WEBPACK_IMPORTED_MODULE_3__.Badge,
/* harmony export */   "AnimatedVisibility": () => /* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_4__.AnimatedVisibility,
/* harmony export */   "Box": () => /* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_4__.Box,
/* harmony export */   "Flex": () => /* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_4__.Flex,
/* harmony export */   "Position": () => /* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_4__.Position,
/* harmony export */   "PositionAnimated": () => /* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_4__.PositionAnimated,
/* harmony export */   "Scrollable": () => /* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_4__.Scrollable,
/* harmony export */   "useArrayLikeClassNameProp": () => /* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_4__.useArrayLikeClassNameProp,
/* harmony export */   "useBoxOnlyProps": () => /* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_4__.useBoxOnlyProps,
/* harmony export */   "Button": () => /* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_5__.Button,
/* harmony export */   "ActionButton": () => /* reexport safe */ _Button_ActionButton__WEBPACK_IMPORTED_MODULE_6__.ActionButton,
/* harmony export */   "ButtonGroup": () => /* reexport safe */ _ButtonGroup__WEBPACK_IMPORTED_MODULE_7__.ButtonGroup,
/* harmony export */   "Callout": () => /* reexport safe */ _Callout__WEBPACK_IMPORTED_MODULE_8__.Callout,
/* harmony export */   "CheckBox": () => /* reexport safe */ _CheckBox__WEBPACK_IMPORTED_MODULE_9__.CheckBox,
/* harmony export */   "Chevron": () => /* reexport safe */ _Chevron__WEBPACK_IMPORTED_MODULE_10__.Chevron,
/* harmony export */   "Chip": () => /* reexport safe */ _Chip__WEBPACK_IMPORTED_MODULE_11__.default,
/* harmony export */   "Divider": () => /* reexport safe */ _Divider__WEBPACK_IMPORTED_MODULE_12__.Divider,
/* harmony export */   "EmailInput": () => /* reexport safe */ _EmailInput__WEBPACK_IMPORTED_MODULE_13__.EmailInput,
/* harmony export */   "Field": () => /* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_14__.Field,
/* harmony export */   "FieldDescription": () => /* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_14__.FieldDescription,
/* harmony export */   "FieldError": () => /* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_14__.FieldError,
/* harmony export */   "FieldHint": () => /* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_14__.FieldHint,
/* harmony export */   "FieldLabel": () => /* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_14__.FieldLabel,
/* harmony export */   "FieldRow": () => /* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_14__.FieldRow,
/* harmony export */   "FieldGroup": () => /* reexport safe */ _FieldGroup__WEBPACK_IMPORTED_MODULE_15__.FieldGroup,
/* harmony export */   "Grid": () => /* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_16__.Grid,
/* harmony export */   "GridItem": () => /* reexport safe */ _Grid__WEBPACK_IMPORTED_MODULE_16__.GridItem,
/* harmony export */   "Icon": () => /* reexport safe */ _Icon__WEBPACK_IMPORTED_MODULE_17__.Icon,
/* harmony export */   "InputBox": () => /* reexport safe */ _InputBox__WEBPACK_IMPORTED_MODULE_18__.InputBox,
/* harmony export */   "InputBoxSkeleton": () => /* reexport safe */ _InputBox__WEBPACK_IMPORTED_MODULE_18__.InputBoxSkeleton,
/* harmony export */   "Label": () => /* reexport safe */ _Label__WEBPACK_IMPORTED_MODULE_19__.Label,
/* harmony export */   "Margins": () => /* reexport safe */ _Margins__WEBPACK_IMPORTED_MODULE_20__.default,
/* harmony export */   "Menu": () => /* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_21__.Menu,
/* harmony export */   "Modal": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.Modal,
/* harmony export */   "ModalBackdrop": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.ModalBackdrop,
/* harmony export */   "ModalClose": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.ModalClose,
/* harmony export */   "ModalContainer": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.ModalContainer,
/* harmony export */   "ModalContent": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.ModalContent,
/* harmony export */   "ModalFooter": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.ModalFooter,
/* harmony export */   "ModalHeader": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.ModalHeader,
/* harmony export */   "ModalPortal": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.ModalPortal,
/* harmony export */   "ModalStack": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.ModalStack,
/* harmony export */   "ModalThumb": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.ModalThumb,
/* harmony export */   "ModalTitle": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.ModalTitle,
/* harmony export */   "useModalStack": () => /* reexport safe */ _Modal__WEBPACK_IMPORTED_MODULE_22__.useModalStack,
/* harmony export */   "NumberInput": () => /* reexport safe */ _NumberInput__WEBPACK_IMPORTED_MODULE_23__.NumberInput,
/* harmony export */   "ACTIONS": () => /* reexport safe */ _Options__WEBPACK_IMPORTED_MODULE_24__.ACTIONS,
/* harmony export */   "CheckOption": () => /* reexport safe */ _Options__WEBPACK_IMPORTED_MODULE_24__.CheckOption,
/* harmony export */   "Empty": () => /* reexport safe */ _Options__WEBPACK_IMPORTED_MODULE_24__.Empty,
/* harmony export */   "Option": () => /* reexport safe */ _Options__WEBPACK_IMPORTED_MODULE_24__.Option,
/* harmony export */   "Options": () => /* reexport safe */ _Options__WEBPACK_IMPORTED_MODULE_24__.Options,
/* harmony export */   "useCursor": () => /* reexport safe */ _Options__WEBPACK_IMPORTED_MODULE_24__.useCursor,
/* harmony export */   "Pagination": () => /* reexport safe */ _Pagination__WEBPACK_IMPORTED_MODULE_25__.Pagination,
/* harmony export */   "PasswordInput": () => /* reexport safe */ _PasswordInput__WEBPACK_IMPORTED_MODULE_26__.PasswordInput,
/* harmony export */   "StatusBullet": () => /* reexport safe */ _StatusBullet__WEBPACK_IMPORTED_MODULE_27__.StatusBullet,
/* harmony export */   "ProgressBar": () => /* reexport safe */ _ProgressBar__WEBPACK_IMPORTED_MODULE_28__.ProgressBar,
/* harmony export */   "RadioButton": () => /* reexport safe */ _RadioButton__WEBPACK_IMPORTED_MODULE_29__.RadioButton,
/* harmony export */   "SearchInput": () => /* reexport safe */ _SearchInput__WEBPACK_IMPORTED_MODULE_30__.SearchInput,
/* harmony export */   "Addon": () => /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_31__.Addon,
/* harmony export */   "Focus": () => /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_31__.Focus,
/* harmony export */   "MultiSelect": () => /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_31__.MultiSelect,
/* harmony export */   "MultiSelectFiltered": () => /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_31__.MultiSelectFiltered,
/* harmony export */   "Select": () => /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_31__.Select,
/* harmony export */   "SelectFiltered": () => /* reexport safe */ _Select__WEBPACK_IMPORTED_MODULE_31__.SelectFiltered,
/* harmony export */   "SelectInput": () => /* reexport safe */ _SelectInput__WEBPACK_IMPORTED_MODULE_32__.SelectInput,
/* harmony export */   "Sidebar": () => /* reexport safe */ _Sidebar__WEBPACK_IMPORTED_MODULE_33__.Sidebar,
/* harmony export */   "Skeleton": () => /* reexport safe */ _Skeleton__WEBPACK_IMPORTED_MODULE_34__.Skeleton,
/* harmony export */   "Selection": () => /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_35__.Selection,
/* harmony export */   "SelectionButton": () => /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_35__.SelectionButton,
/* harmony export */   "Table": () => /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_35__.Table,
/* harmony export */   "TableBody": () => /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_35__.TableBody,
/* harmony export */   "TableCell": () => /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_35__.TableCell,
/* harmony export */   "TableFoot": () => /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_35__.TableFoot,
/* harmony export */   "TableHead": () => /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_35__.TableHead,
/* harmony export */   "TableRow": () => /* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_35__.TableRow,
/* harmony export */   "Tabs": () => /* reexport safe */ _Tabs__WEBPACK_IMPORTED_MODULE_36__.Tabs,
/* harmony export */   "TabsItem": () => /* reexport safe */ _Tabs__WEBPACK_IMPORTED_MODULE_36__.TabsItem,
/* harmony export */   "Tag": () => /* reexport safe */ _Tag__WEBPACK_IMPORTED_MODULE_37__.Tag,
/* harmony export */   "TelephoneInput": () => /* reexport safe */ _TelephoneInput__WEBPACK_IMPORTED_MODULE_38__.TelephoneInput,
/* harmony export */   "TextAreaInput": () => /* reexport safe */ _TextAreaInput__WEBPACK_IMPORTED_MODULE_39__.TextAreaInput,
/* harmony export */   "TextInput": () => /* reexport safe */ _TextInput__WEBPACK_IMPORTED_MODULE_40__.TextInput,
/* harmony export */   "Throbber": () => /* reexport safe */ _Throbber__WEBPACK_IMPORTED_MODULE_41__.Throbber,
/* harmony export */   "Tile": () => /* reexport safe */ _Tile__WEBPACK_IMPORTED_MODULE_42__.Tile,
/* harmony export */   "ToggleSwitch": () => /* reexport safe */ _ToggleSwitch__WEBPACK_IMPORTED_MODULE_43__.ToggleSwitch,
/* harmony export */   "Tooltip": () => /* reexport safe */ _Tooltip__WEBPACK_IMPORTED_MODULE_44__.Tooltip,
/* harmony export */   "UrlInput": () => /* reexport safe */ _UrlInput__WEBPACK_IMPORTED_MODULE_45__.UrlInput
/* harmony export */ });
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion */ "./src/components/Accordion/index.js");
/* harmony import */ var _AutoComplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoComplete */ "./src/components/AutoComplete/index.js");
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar */ "./src/components/Avatar/index.js");
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Badge */ "./src/components/Badge/index.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Box */ "./src/components/Box/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./src/components/Button/index.js");
/* harmony import */ var _Button_ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button/ActionButton */ "./src/components/Button/ActionButton.js");
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ButtonGroup */ "./src/components/ButtonGroup/index.js");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Callout */ "./src/components/Callout/index.js");
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CheckBox */ "./src/components/CheckBox/index.js");
/* harmony import */ var _Chevron__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chevron */ "./src/components/Chevron/index.js");
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Chip */ "./src/components/Chip/index.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Divider */ "./src/components/Divider/index.js");
/* harmony import */ var _EmailInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./EmailInput */ "./src/components/EmailInput/index.js");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Field */ "./src/components/Field/index.js");
/* harmony import */ var _FieldGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FieldGroup */ "./src/components/FieldGroup/index.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Grid */ "./src/components/Grid/index.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon/index.js");
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./InputBox */ "./src/components/InputBox/index.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Label */ "./src/components/Label/index.js");
/* harmony import */ var _Margins__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Margins */ "./src/components/Margins/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Menu */ "./src/components/Menu/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal/index.js");
/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./NumberInput */ "./src/components/NumberInput/index.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Options */ "./src/components/Options/index.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Pagination */ "./src/components/Pagination/index.js");
/* harmony import */ var _PasswordInput__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./PasswordInput */ "./src/components/PasswordInput/index.js");
/* harmony import */ var _StatusBullet__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StatusBullet */ "./src/components/StatusBullet/index.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ProgressBar */ "./src/components/ProgressBar/index.js");
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./RadioButton */ "./src/components/RadioButton/index.js");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SearchInput */ "./src/components/SearchInput/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Select */ "./src/components/Select/index.js");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./SelectInput */ "./src/components/SelectInput/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar/index.js");
/* harmony import */ var _Skeleton__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Skeleton */ "./src/components/Skeleton/index.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Table */ "./src/components/Table/index.js");
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Tabs */ "./src/components/Tabs/index.js");
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Tag */ "./src/components/Tag/index.js");
/* harmony import */ var _TelephoneInput__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./TelephoneInput */ "./src/components/TelephoneInput/index.js");
/* harmony import */ var _TextAreaInput__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./TextAreaInput */ "./src/components/TextAreaInput/index.js");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./TextInput */ "./src/components/TextInput/index.js");
/* harmony import */ var _Throbber__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Throbber */ "./src/components/Throbber/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Tile */ "./src/components/Tile/index.js");
/* harmony import */ var _ToggleSwitch__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./ToggleSwitch */ "./src/components/ToggleSwitch/index.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Tooltip */ "./src/components/Tooltip/index.js");
/* harmony import */ var _UrlInput__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./UrlInput */ "./src/components/UrlInput/index.js");















































/***/ }),

/***/ "./src/helpers/appendClassName.js":
/*!****************************************!*\
  !*** ./src/helpers/appendClassName.js ***!
  \****************************************/
/*! namespace exports */
/*! export appendClassName [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendClassName": () => /* binding */ appendClassName
/* harmony export */ });
var appendClassName = function appendClassName(currentClassName, newClassName) {
  if (Array.isArray(currentClassName)) {
    return [].concat(currentClassName, newClassName);
  }

  if (currentClassName) {
    return "".concat(currentClassName, " ").concat(newClassName);
  }

  return newClassName;
};

/***/ }),

/***/ "./src/helpers/createPropType.js":
/*!***************************************!*\
  !*** ./src/helpers/createPropType.js ***!
  \***************************************/
/*! namespace exports */
/*! export createPropType [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPropType": () => /* binding */ createPropType
/* harmony export */ });
var createPropType = function createPropType(getValue) {
  var propType = function propType(props, propName, componentName) {
    var propValue = props[propName];

    if (propValue === undefined || getValue(propValue) !== undefined) {
      return;
    }

    return new Error("Invalid value for prop `".concat(propName, "` supplied to `").concat(componentName, "`: `").concat(propValue, "`"));
  };

  propType.isRequired = function (props, propName, componentName) {
    var propValue = props[propName];

    if (propValue !== undefined && getValue(propValue) !== undefined) {
      return;
    }

    return new Error("Invalid value for prop `".concat(propName, "` supplied to `").concat(componentName, "`: `").concat(propValue, "`"));
  };

  return propType;
};

/***/ }),

/***/ "./src/helpers/flattenChildren.js":
/*!****************************************!*\
  !*** ./src/helpers/flattenChildren.js ***!
  \****************************************/
/*! namespace exports */
/*! export flattenChildren [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/react-keyed-flatten-children/index.js .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flattenChildren": () => /* reexport safe */ react_keyed_flatten_children__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var react_keyed_flatten_children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-keyed-flatten-children */ "./node_modules/react-keyed-flatten-children/index.js");


/***/ }),

/***/ "./src/helpers/fromCamelToKebab.js":
/*!*****************************************!*\
  !*** ./src/helpers/fromCamelToKebab.js ***!
  \*****************************************/
/*! namespace exports */
/*! export fromCamelToKebab [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromCamelToKebab": () => /* binding */ fromCamelToKebab
/* harmony export */ });
var fromCamelToKebab = function fromCamelToKebab(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

/***/ }),

/***/ "./src/helpers/memoize.js":
/*!********************************!*\
  !*** ./src/helpers/memoize.js ***!
  \********************************/
/*! namespace exports */
/*! export clear [provided] [no usage info] [missing usage info prevents renaming] */
/*! export memoize [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "memoize": () => /* binding */ memoize,
/* harmony export */   "clear": () => /* binding */ clear
/* harmony export */ });
var store = new WeakMap();
var memoize = function memoize(fn) {
  var cache = new Map();

  var memoized = function memoized(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }

    var result = fn.call(this, arg);
    cache.set(arg, result);
    return result;
  };

  store.set(memoized, cache);
  return memoized;
};
var clear = function clear(fn) {
  if (store.has(fn)) {
    store.get(fn).clear();
  }
};

/***/ }),

/***/ "./src/helpers/patchChildren.js":
/*!**************************************!*\
  !*** ./src/helpers/patchChildren.js ***!
  \**************************************/
/*! namespace exports */
/*! export patchChildren [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "patchChildren": () => /* binding */ patchChildren
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flattenChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flattenChildren */ "./src/helpers/flattenChildren.js");
/* harmony import */ var _shallowEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shallowEqual */ "./src/helpers/shallowEqual.js");
;


var patchChildren = function patchChildren(children, patch) {
  var dirty = false;
  var newChildren = (0,_flattenChildren__WEBPACK_IMPORTED_MODULE_1__.flattenChildren)(children).map(function (child) {
    if (! /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) {
      return child;
    }

    var mergedProps = patch(child.props);

    if ((0,_shallowEqual__WEBPACK_IMPORTED_MODULE_2__.shallowEqual)(child.props, mergedProps)) {
      return child;
    }

    dirty = true;
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, mergedProps);
  });

  if (dirty) {
    return newChildren;
  }

  return children;
};

/***/ }),

/***/ "./src/helpers/prependClassName.js":
/*!*****************************************!*\
  !*** ./src/helpers/prependClassName.js ***!
  \*****************************************/
/*! namespace exports */
/*! export prependClassName [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prependClassName": () => /* binding */ prependClassName
/* harmony export */ });
var prependClassName = function prependClassName(currentClassName, newClassName) {
  if (Array.isArray(currentClassName)) {
    return [].concat(newClassName, currentClassName);
  }

  if (currentClassName) {
    return "".concat(newClassName, " ").concat(currentClassName);
  }

  return newClassName;
};

/***/ }),

/***/ "./src/helpers/shallowEqual.js":
/*!*************************************!*\
  !*** ./src/helpers/shallowEqual.js ***!
  \*************************************/
/*! namespace exports */
/*! export shallowEqual [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shallowEqual": () => /* binding */ shallowEqual
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
;

var isObject = function isObject(value) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' && value !== null;
};

var compareObjects = function compareObjects(a, b) {
  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  return !keysA.some(function (key) {
    return !b.hasOwnProperty(key) || a[key] !== b[key];
  });
};

var shallowEqual = function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if ([a, b].every(Number.isNaN)) {
    return true;
  }

  if (![a, b].every(isObject)) {
    return false;
  }

  return compareObjects(a, b);
};

/***/ }),

/***/ "./src/hooks/useStyle.js":
/*!*******************************!*\
  !*** ./src/hooks/useStyle.js ***!
  \*******************************/
/*! namespace exports */
/*! export useStyle [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStyle": () => /* binding */ useStyle
/* harmony export */ });
/* harmony import */ var _rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rocket.chat/css-in-js */ "./node_modules/@rocket.chat/css-in-js/dist/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
;

var useStyle = function useStyle(cssFn, arg) {
  var content = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return cssFn ? cssFn(arg) : undefined;
  }, [arg, cssFn]);
  var className = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    if (!content) {
      return;
    }

    return content ? (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_0__.createClassName)(content) : undefined;
  }, [content]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(className);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
    if (!content || !className) {
      return;
    }

    var escapedClassName = (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_0__.escapeName)(className);
    var transpiledContent = (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_0__.transpile)(".".concat(escapedClassName), content);
    var detach = (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_0__.attachRules)(transpiledContent);
    return function () {
      setTimeout(detach, 1000);
    };
  }, [className, content]);
  return className;
};

/***/ }),

/***/ "./src/hooks/useStyleSheet.js":
/*!************************************!*\
  !*** ./src/hooks/useStyleSheet.js ***!
  \************************************/
/*! namespace exports */
/*! export useStyleSheet [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStyleSheet": () => /* binding */ useStyleSheet
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.scss */ "./src/index.scss");
;

var useStyleSheet = function useStyleSheet() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    _index_scss__WEBPACK_IMPORTED_MODULE_1__.default.use();
    return function () {
      _index_scss__WEBPACK_IMPORTED_MODULE_1__.default.unuse();
    };
  }, []);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export ACTIONS [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Options/index.js .ACTIONS */
/*! export Accordion [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Accordion/index.js .Accordion */
/*! export ActionButton [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Button/ActionButton.js .ActionButton */
/*! export Addon [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Select/Select.js .Addon */
/*! export AnimatedVisibility [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Box/AnimatedVisibility/index.js .default */
/*! export AutoComplete [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/AutoComplete/index.js .AutoComplete */
/*! export Avatar [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Avatar/index.js .Avatar */
/*! export Badge [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Badge/index.js .Badge */
/*! export Box [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Box/index.js .Box */
/*! export Button [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Button/index.js .Button */
/*! export ButtonGroup [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/ButtonGroup/index.js .ButtonGroup */
/*! export Callout [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Callout/index.js .Callout */
/*! export CheckBox [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/CheckBox/index.js .CheckBox */
/*! export CheckOption [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Options/index.js .CheckOption */
/*! export Chevron [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Chevron/index.js .Chevron */
/*! export Chip [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Chip/index.js .default */
/*! export Divider [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Divider/index.js .Divider */
/*! export EmailInput [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/EmailInput/index.js .EmailInput */
/*! export Empty [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Options/index.js .Empty */
/*! export Field [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Field/index.js .Field */
/*! export FieldDescription [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Field/index.js .FieldDescription */
/*! export FieldError [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Field/index.js .FieldError */
/*! export FieldGroup [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/FieldGroup/index.js .FieldGroup */
/*! export FieldHint [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Field/index.js .FieldHint */
/*! export FieldLabel [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Field/index.js .FieldLabel */
/*! export FieldRow [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Field/index.js .FieldRow */
/*! export Flex [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Box/Flex/index.js .default */
/*! export Focus [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Select/Select.js .Focus */
/*! export Grid [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Grid/index.js .Grid */
/*! export GridItem [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Grid/index.js .GridItem */
/*! export Icon [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Icon/index.js .Icon */
/*! export InputBox [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/InputBox/index.js .InputBox */
/*! export InputBoxSkeleton [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/InputBox/index.js .InputBoxSkeleton */
/*! export Label [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Label/index.js .Label */
/*! export Margins [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Margins/index.js .default */
/*! export Menu [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Menu/index.js .Menu */
/*! export Modal [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/index.js .Modal */
/*! export ModalBackdrop [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/Stack.js .ModalBackdrop */
/*! export ModalClose [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/index.js .ModalClose */
/*! export ModalContainer [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/Stack.js .ModalContainer */
/*! export ModalContent [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/index.js .ModalContent */
/*! export ModalFooter [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/index.js .ModalFooter */
/*! export ModalHeader [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/index.js .ModalHeader */
/*! export ModalPortal [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/Stack.js .ModalPortal */
/*! export ModalStack [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/Stack.js .ModalStack */
/*! export ModalThumb [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/index.js .ModalThumb */
/*! export ModalTitle [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/index.js .ModalTitle */
/*! export MultiSelect [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Select/MultiSelect.js .MultiSelect */
/*! export MultiSelectFiltered [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Select/MultiSelect.js .MultiSelectFiltered */
/*! export NumberInput [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/NumberInput/index.js .NumberInput */
/*! export Option [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Options/index.js .Option */
/*! export Options [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Options/index.js .Options */
/*! export Pagination [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Pagination/index.js .Pagination */
/*! export PasswordInput [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/PasswordInput/index.js .PasswordInput */
/*! export Position [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Box/Position/index.js .default */
/*! export PositionAnimated [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Box/Position/index.js .PositionAnimated */
/*! export ProgressBar [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/ProgressBar/index.js .ProgressBar */
/*! export RadioButton [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/RadioButton/index.js .RadioButton */
/*! export Scrollable [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Box/Scrollable/index.js .default */
/*! export SearchInput [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/SearchInput/index.js .SearchInput */
/*! export Select [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Select/Select.js .Select */
/*! export SelectFiltered [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Select/Select.js .SelectFiltered */
/*! export SelectInput [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/SelectInput/index.js .SelectInput */
/*! export Selection [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Table/index.js .Selection */
/*! export SelectionButton [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Table/index.js .SelectionButton */
/*! export Sidebar [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Sidebar/index.js .Sidebar */
/*! export Skeleton [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Skeleton/index.js .Skeleton */
/*! export StatusBullet [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/StatusBullet/index.js .StatusBullet */
/*! export Table [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Table/index.js .Table */
/*! export TableBody [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Table/index.js .TableBody */
/*! export TableCell [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Table/index.js .TableCell */
/*! export TableFoot [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Table/index.js .TableFoot */
/*! export TableHead [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Table/index.js .TableHead */
/*! export TableRow [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Table/index.js .TableRow */
/*! export Tabs [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Tabs/index.js .Tabs */
/*! export TabsItem [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Tabs/index.js .TabsItem */
/*! export Tag [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Tag/index.js .Tag */
/*! export TelephoneInput [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/TelephoneInput/index.js .TelephoneInput */
/*! export TextAreaInput [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/TextAreaInput/index.js .TextAreaInput */
/*! export TextInput [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/TextInput/index.js .TextInput */
/*! export Throbber [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Throbber/index.js .Throbber */
/*! export Tile [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Tile/index.js .Tile */
/*! export ToggleSwitch [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/ToggleSwitch/index.js .ToggleSwitch */
/*! export Tooltip [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Tooltip/index.js .Tooltip */
/*! export UrlInput [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/UrlInput/index.js .UrlInput */
/*! export borderRadius [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/styleTokens.js .borderRadius */
/*! export borderWidth [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/styleTokens.js .borderWidth */
/*! export color [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/styleTokens.js .color */
/*! export fontFamily [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/styleTokens.js .fontFamily */
/*! export fontScale [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/styleTokens.js .fontScale */
/*! export inset [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/styleTokens.js .inset */
/*! export margin [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/styleTokens.js .margin */
/*! export padding [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/styleTokens.js .padding */
/*! export size [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/styleTokens.js .size */
/*! export useArrayLikeClassNameProp [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Box/index.js .useArrayLikeClassNameProp */
/*! export useBoxOnlyProps [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Box/index.js .useBoxOnlyProps */
/*! export useCursor [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Options/index.js .useCursor */
/*! export useModalStack [provided] [maybe used in fuselage (runtime-defined)] [usage prevents renaming] -> ./src/components/Modal/Stack.js .useModalStack */
/*! other exports [not provided] [maybe used in fuselage (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACTIONS": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ACTIONS,
/* harmony export */   "Accordion": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Accordion,
/* harmony export */   "ActionButton": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ActionButton,
/* harmony export */   "Addon": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Addon,
/* harmony export */   "AnimatedVisibility": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.AnimatedVisibility,
/* harmony export */   "AutoComplete": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.AutoComplete,
/* harmony export */   "Avatar": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Avatar,
/* harmony export */   "Badge": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Badge,
/* harmony export */   "Box": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Box,
/* harmony export */   "Button": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Button,
/* harmony export */   "ButtonGroup": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ButtonGroup,
/* harmony export */   "Callout": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Callout,
/* harmony export */   "CheckBox": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.CheckBox,
/* harmony export */   "CheckOption": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.CheckOption,
/* harmony export */   "Chevron": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Chevron,
/* harmony export */   "Chip": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Chip,
/* harmony export */   "Divider": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Divider,
/* harmony export */   "EmailInput": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.EmailInput,
/* harmony export */   "Empty": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Empty,
/* harmony export */   "Field": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Field,
/* harmony export */   "FieldDescription": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.FieldDescription,
/* harmony export */   "FieldError": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.FieldError,
/* harmony export */   "FieldGroup": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.FieldGroup,
/* harmony export */   "FieldHint": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.FieldHint,
/* harmony export */   "FieldLabel": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.FieldLabel,
/* harmony export */   "FieldRow": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.FieldRow,
/* harmony export */   "Flex": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Flex,
/* harmony export */   "Focus": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Focus,
/* harmony export */   "Grid": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Grid,
/* harmony export */   "GridItem": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.GridItem,
/* harmony export */   "Icon": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Icon,
/* harmony export */   "InputBox": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.InputBox,
/* harmony export */   "InputBoxSkeleton": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.InputBoxSkeleton,
/* harmony export */   "Label": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Label,
/* harmony export */   "Margins": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Margins,
/* harmony export */   "Menu": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Menu,
/* harmony export */   "Modal": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Modal,
/* harmony export */   "ModalBackdrop": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ModalBackdrop,
/* harmony export */   "ModalClose": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ModalClose,
/* harmony export */   "ModalContainer": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ModalContainer,
/* harmony export */   "ModalContent": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ModalContent,
/* harmony export */   "ModalFooter": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ModalFooter,
/* harmony export */   "ModalHeader": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ModalHeader,
/* harmony export */   "ModalPortal": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ModalPortal,
/* harmony export */   "ModalStack": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ModalStack,
/* harmony export */   "ModalThumb": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ModalThumb,
/* harmony export */   "ModalTitle": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ModalTitle,
/* harmony export */   "MultiSelect": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.MultiSelect,
/* harmony export */   "MultiSelectFiltered": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.MultiSelectFiltered,
/* harmony export */   "NumberInput": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.NumberInput,
/* harmony export */   "Option": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Option,
/* harmony export */   "Options": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Options,
/* harmony export */   "Pagination": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Pagination,
/* harmony export */   "PasswordInput": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PasswordInput,
/* harmony export */   "Position": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Position,
/* harmony export */   "PositionAnimated": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.PositionAnimated,
/* harmony export */   "ProgressBar": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ProgressBar,
/* harmony export */   "RadioButton": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.RadioButton,
/* harmony export */   "Scrollable": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Scrollable,
/* harmony export */   "SearchInput": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SearchInput,
/* harmony export */   "Select": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Select,
/* harmony export */   "SelectFiltered": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SelectFiltered,
/* harmony export */   "SelectInput": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SelectInput,
/* harmony export */   "Selection": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Selection,
/* harmony export */   "SelectionButton": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.SelectionButton,
/* harmony export */   "Sidebar": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Sidebar,
/* harmony export */   "Skeleton": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Skeleton,
/* harmony export */   "StatusBullet": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.StatusBullet,
/* harmony export */   "Table": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Table,
/* harmony export */   "TableBody": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TableBody,
/* harmony export */   "TableCell": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TableCell,
/* harmony export */   "TableFoot": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TableFoot,
/* harmony export */   "TableHead": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TableHead,
/* harmony export */   "TableRow": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TableRow,
/* harmony export */   "Tabs": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Tabs,
/* harmony export */   "TabsItem": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TabsItem,
/* harmony export */   "Tag": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Tag,
/* harmony export */   "TelephoneInput": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TelephoneInput,
/* harmony export */   "TextAreaInput": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TextAreaInput,
/* harmony export */   "TextInput": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.TextInput,
/* harmony export */   "Throbber": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Throbber,
/* harmony export */   "Tile": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Tile,
/* harmony export */   "ToggleSwitch": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.ToggleSwitch,
/* harmony export */   "Tooltip": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.Tooltip,
/* harmony export */   "UrlInput": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.UrlInput,
/* harmony export */   "useArrayLikeClassNameProp": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.useArrayLikeClassNameProp,
/* harmony export */   "useBoxOnlyProps": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.useBoxOnlyProps,
/* harmony export */   "useCursor": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.useCursor,
/* harmony export */   "useModalStack": () => /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_0__.useModalStack,
/* harmony export */   "borderRadius": () => /* reexport safe */ _styleTokens__WEBPACK_IMPORTED_MODULE_1__.borderRadius,
/* harmony export */   "borderWidth": () => /* reexport safe */ _styleTokens__WEBPACK_IMPORTED_MODULE_1__.borderWidth,
/* harmony export */   "color": () => /* reexport safe */ _styleTokens__WEBPACK_IMPORTED_MODULE_1__.color,
/* harmony export */   "fontFamily": () => /* reexport safe */ _styleTokens__WEBPACK_IMPORTED_MODULE_1__.fontFamily,
/* harmony export */   "fontScale": () => /* reexport safe */ _styleTokens__WEBPACK_IMPORTED_MODULE_1__.fontScale,
/* harmony export */   "inset": () => /* reexport safe */ _styleTokens__WEBPACK_IMPORTED_MODULE_1__.inset,
/* harmony export */   "margin": () => /* reexport safe */ _styleTokens__WEBPACK_IMPORTED_MODULE_1__.margin,
/* harmony export */   "padding": () => /* reexport safe */ _styleTokens__WEBPACK_IMPORTED_MODULE_1__.padding,
/* harmony export */   "size": () => /* reexport safe */ _styleTokens__WEBPACK_IMPORTED_MODULE_1__.size
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _styleTokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleTokens */ "./src/styleTokens.js");



/***/ }),

/***/ "./src/styleTokens.js":
/*!****************************!*\
  !*** ./src/styleTokens.js ***!
  \****************************/
/*! namespace exports */
/*! export borderRadius [provided] [no usage info] [missing usage info prevents renaming] */
/*! export borderWidth [provided] [no usage info] [missing usage info prevents renaming] */
/*! export color [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fontFamily [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fontScale [provided] [no usage info] [missing usage info prevents renaming] */
/*! export inset [provided] [no usage info] [missing usage info prevents renaming] */
/*! export margin [provided] [no usage info] [missing usage info prevents renaming] */
/*! export padding [provided] [no usage info] [missing usage info prevents renaming] */
/*! export size [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "borderWidth": () => /* binding */ borderWidth,
/* harmony export */   "borderRadius": () => /* binding */ borderRadius,
/* harmony export */   "color": () => /* binding */ color,
/* harmony export */   "size": () => /* binding */ size,
/* harmony export */   "inset": () => /* binding */ inset,
/* harmony export */   "margin": () => /* binding */ margin,
/* harmony export */   "padding": () => /* binding */ padding,
/* harmony export */   "fontFamily": () => /* binding */ fontFamily,
/* harmony export */   "fontScale": () => /* binding */ fontScale
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rocket.chat/css-in-js */ "./node_modules/@rocket.chat/css-in-js/dist/index.module.js");
/* harmony import */ var _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rocket.chat/fuselage-tokens/colors */ "./node_modules/@rocket.chat/fuselage-tokens/colors.js");
/* harmony import */ var _rocket_chat_fuselage_tokens_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rocket.chat/fuselage-tokens/typography */ "./node_modules/@rocket.chat/fuselage-tokens/typography.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_memoize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/memoize */ "./src/helpers/memoize.js");
;






var measure = function measure(computeSpecialValue) {
  return (0,_helpers_memoize__WEBPACK_IMPORTED_MODULE_5__.memoize)(function (value) {
    if (typeof value === 'number') {
      return "".concat(value, "px");
    }

    if (typeof value !== 'string') {
      return undefined;
    }

    var xRegExp = /^(neg-|-)?x(\d+)$/;

    if (xRegExp.test(value)) {
      var _xRegExp$exec = xRegExp.exec(value),
          _xRegExp$exec2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_xRegExp$exec, 3),
          negativeMark = _xRegExp$exec2[1],
          measureInPixelsAsString = _xRegExp$exec2[2];

      var measureInPixels = (negativeMark ? -1 : 1) * parseInt(measureInPixelsAsString, 10);
      return "".concat(measureInPixels / 16, "rem");
    }

    if (computeSpecialValue) {
      return computeSpecialValue(value) || value;
    }

    return value;
  });
};

var borderWidth = measure(function (value) {
  if (value === 'none') {
    return '0px';
  }
});
var borderRadius = measure(function (value) {
  if (value === 'none') {
    return '0px';
  }

  if (value === 'full') {
    return '9999px';
  }
});
var mapTypeToPrefix = {
  neutral: 'n',
  primary: 'b',
  info: 'b',
  success: 'g',
  warning: 'y',
  danger: 'r'
};

var getPaletteColor = function getPaletteColor(type, grade, alpha) {
  invariant__WEBPACK_IMPORTED_MODULE_4___default()(grade % 100 === 0 && grade / 100 >= 1 && grade / 100 <= 9, 'invalid color grade');
  invariant__WEBPACK_IMPORTED_MODULE_4___default()(alpha === undefined || alpha >= 0 && alpha <= 1, 'invalid color alpha');
  var prefix = mapTypeToPrefix[type];
  invariant__WEBPACK_IMPORTED_MODULE_4___default()(!!prefix, 'invalid color type');
  var baseColor = _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default["".concat(prefix).concat(grade)];
  invariant__WEBPACK_IMPORTED_MODULE_4___default()(!!baseColor, 'invalid color reference');
  var matches = /^#([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/.exec(baseColor);
  invariant__WEBPACK_IMPORTED_MODULE_4___default()(!!matches, 'invalid color token format');

  if (alpha !== undefined) {
    var _matches = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(matches, 4),
        r = _matches[1],
        g = _matches[2],
        b = _matches[3];

    return ["--rcx-color-".concat(type, "-").concat(grade, "-").concat((alpha * 100).toFixed(0)), "rgba(".concat(parseInt(r, 16), ", ").concat(parseInt(g, 16), ", ").concat(parseInt(b, 16), ", ").concat(alpha * 100, "%)")];
  }

  return ["--rcx-color-".concat(type, "-").concat(grade), baseColor];
};

var foregroundColors = {
  default: _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default.n800,
  info: _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default.n700,
  hint: _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default.n600,
  disabled: _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default.n400,
  alternative: 'white',
  primary: _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default.b500,
  success: _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default.g500,
  danger: _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default.r500,
  warning: _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default.y700,
  link: _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default.b500,
  'visited-link': _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default.p500,
  'active-link': _rocket_chat_fuselage_tokens_colors__WEBPACK_IMPORTED_MODULE_2__.default.r500
};

var getForegroundColor = function getForegroundColor(type) {
  var color = foregroundColors[type];
  invariant__WEBPACK_IMPORTED_MODULE_4___default()(!!color, 'invalid foreground color');
  return ["--rcx-color-foreground-".concat(type), color];
};

var paletteColorRegex = /^(neutral|primary|info|success|warning|danger)-(\d+)(-(\d+))?$/;
var color = (0,_helpers_memoize__WEBPACK_IMPORTED_MODULE_5__.memoize)(function (propValue) {
  if (typeof propValue !== 'string') {
    return;
  }

  var paletteMatches = paletteColorRegex.exec(String(propValue));

  if (paletteMatches) {
    var _paletteMatches = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(paletteMatches, 5),
        type = _paletteMatches[1],
        gradeString = _paletteMatches[2],
        alphaString = _paletteMatches[4];

    var grade = parseInt(gradeString, 10);
    var alpha = alphaString !== undefined ? parseInt(alphaString, 10) / 100 : undefined;

    var _getPaletteColor = getPaletteColor(type, grade, alpha),
        _getPaletteColor2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_getPaletteColor, 2),
        customProperty = _getPaletteColor2[0],
        _color = _getPaletteColor2[1];

    if (customProperty && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.cssSupports)('(--foo: bar)')) {
      return "var(".concat(customProperty, ", ").concat(_color, ")");
    }

    return _color;
  }

  if (propValue === 'surface') {
    if ((0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.cssSupports)('(--foo: bar)')) {
      return 'var(--rcx-color-surface, white)';
    }

    return 'white';
  }

  if (foregroundColors[String(propValue)]) {
    var _getForegroundColor = getForegroundColor(String(propValue)),
        _getForegroundColor2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_getForegroundColor, 2),
        _customProperty = _getForegroundColor2[0],
        _color2 = _getForegroundColor2[1];

    if (_customProperty && (0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.cssSupports)('(--foo: bar)')) {
      return "var(".concat(_customProperty, ", ").concat(_color2, ")");
    }

    return _color2;
  }

  return propValue;
});
var size = measure(function (value) {
  if (value === 'none') {
    return '0px';
  }

  if (value === 'full') {
    return '100%';
  }

  if (value === 'sw') {
    return '100vw';
  }

  if (value === 'sh') {
    return '100vh';
  }
});
var inset = measure(function (value) {
  if (value === 'none') {
    return '0px';
  }
});
var margin = measure(function (value) {
  if (value === 'none') {
    return '0px';
  }
});
var padding = measure(function (value) {
  if (value === 'none') {
    return '0px';
  }
});
var fontFamily = (0,_helpers_memoize__WEBPACK_IMPORTED_MODULE_5__.memoize)(function (value) {
  if (typeof value !== 'string') {
    return;
  }

  if (!_rocket_chat_fuselage_tokens_typography__WEBPACK_IMPORTED_MODULE_3__.default.fontFamilies[value]) {
    return value;
  }

  var fontFamily = _rocket_chat_fuselage_tokens_typography__WEBPACK_IMPORTED_MODULE_3__.default.fontFamilies[value].map(function (fontFace) {
    return fontFace.includes(' ') ? "'".concat(fontFace, "'") : fontFace;
  }).join(', ');

  if ((0,_rocket_chat_css_in_js__WEBPACK_IMPORTED_MODULE_1__.cssSupports)('(--foo: bar)')) {
    return "var(--rcx-font-family-".concat(value, ", ").concat(fontFamily, ")");
  }

  return fontFamily;
});
var fontScale = function fontScale(value) {
  if (!_rocket_chat_fuselage_tokens_typography__WEBPACK_IMPORTED_MODULE_3__.default.fontScales[value]) {
    return;
  }

  var _tokenTypography$font = _rocket_chat_fuselage_tokens_typography__WEBPACK_IMPORTED_MODULE_3__.default.fontScales[value],
      fontSize = _tokenTypography$font.fontSize,
      fontWeight = _tokenTypography$font.fontWeight,
      lineHeight = _tokenTypography$font.lineHeight,
      letterSpacing = _tokenTypography$font.letterSpacing;
  return {
    fontSize: "".concat(fontSize / 16, "rem"),
    fontWeight: fontWeight,
    lineHeight: "".concat(lineHeight / 16, "rem"),
    letterSpacing: "".concat(letterSpacing / 16, "rem")
  };
};
fontScale.values = Object.keys(_rocket_chat_fuselage_tokens_typography__WEBPACK_IMPORTED_MODULE_3__.default.fontScales);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_exports__, module, __webpack_require__, module.id */
/*! CommonJS bailout: exports is used directly at 3:0-7 */
/*! CommonJS bailout: exports.push(...) prevents optimization as exports is passed as call context at 5:0-12 */
/*! CommonJS bailout: exports is used directly at 7:17-24 */
/*! CommonJS bailout: module.exports is used directly at 7:0-14 */
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "@charset \"UTF-8\";\n.rcx-box--full::before, .rcx-box--full::after, .rcx-box {\n  flex: 0 1 auto;\n  box-sizing: border-box;\n  outline: none;\n  font-variant-numeric: tabular-nums;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.rcx-chip, .rcx-box--full::before, .rcx-box--full::after, .rcx-box--full {\n  transition: all 230ms;\n}\n\n@media (prefers-reduced-motion) {\n  .rcx-chip, .rcx-box--full::before, .rcx-box--full::after, .rcx-box--full {\n    transition: none;\n  }\n}\n.rcx-chip, .rcx-box--full::before, .rcx-box--full::after, .rcx-box--full {\n  margin: 0;\n  padding: 0;\n  border-width: 0;\n  border-style: solid;\n  border-color: currentColor;\n  outline: none;\n  font-family: Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Helvetica Neue\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Meiryo UI\", Arial, sans-serif;\n  font-family: var(--rcx-font-family-sans, Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Helvetica Neue\", \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Meiryo UI\", Arial, sans-serif);\n  font-variant-numeric: tabular-nums;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.rcx-field__error strong, .rcx-field__hint strong, .rcx-field__description strong {\n  letter-spacing: inherit;\n  font: inherit;\n  font-weight: bolder;\n}\n\n.rcx-field__error em, .rcx-field__hint em, .rcx-field__description em {\n  letter-spacing: inherit;\n  font: inherit;\n  font-style: italic;\n}\n\n.rcx-field__error b, .rcx-field__hint b, .rcx-field__description b {\n  letter-spacing: inherit;\n  font: inherit;\n  font-weight: bolder;\n}\n\n.rcx-field__error i, .rcx-field__hint i, .rcx-field__description i {\n  letter-spacing: inherit;\n  font: inherit;\n  font-style: italic;\n}\n\n.rcx-field__error a, .rcx-field__hint a, .rcx-field__description a {\n  letter-spacing: inherit;\n  font: inherit;\n}\n\n.rcx-field__error a:link, .rcx-field__hint a:link, .rcx-field__description a:link {\n  text-decoration: none;\n  color: #1d74f5;\n  color: var(--rcx-color-foreground-link, #1d74f5);\n}\n\n.rcx-field__error a:visited, .rcx-field__hint a:visited, .rcx-field__description a:visited, .rcx-field__error a.is-visited, .rcx-field__hint a.is-visited, .rcx-field__description a.is-visited {\n  color: #9f22c7;\n  color: var(--rcx-color-foreground-visited-link, #9f22c7);\n}\n\n.rcx-field__error a:active, .rcx-field__hint a:active, .rcx-field__description a:active, .rcx-field__error a.is-active, .rcx-field__hint a.is-active, .rcx-field__description a.is-active {\n  color: #f5455c;\n  color: var(--rcx-color-foreground-active-link, #f5455c);\n}\n\n.rcx-field__error a:hover, .rcx-field__hint a:hover, .rcx-field__description a:hover, .rcx-field__error a.is-hovered, .rcx-field__hint a.is-hovered, .rcx-field__description a.is-hovered {\n  text-decoration: underline;\n}\n\n.rcx-field__error q, .rcx-field__hint q, .rcx-field__description q {\n  letter-spacing: inherit;\n  font: inherit;\n}\n\n.rcx-field__error q::before, .rcx-field__hint q::before, .rcx-field__description q::before {\n  content: open-quote;\n}\n\n.rcx-field__error q::after, .rcx-field__hint q::after, .rcx-field__description q::after {\n  content: close-quote;\n}\n\n.rcx-field__error q cite, .rcx-field__hint q cite, .rcx-field__description q cite {\n  letter-spacing: inherit;\n  font: inherit;\n  font-style: italic;\n}\n\n.rcx-field__error code, .rcx-field__hint code, .rcx-field__description code {\n  padding: 0.25rem 0.5rem;\n  letter-spacing: inherit;\n  border-radius: 0.125rem;\n  background-color: #eeeff1;\n  background-color: var(--rcx-color-neutral-300, #eeeff1);\n  font: inherit;\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-family: var(--rcx-font-family-mono, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n  -webkit-font-smoothing: auto;\n}\n\n.rcx-field__error time, .rcx-field__hint time, .rcx-field__description time {\n  letter-spacing: inherit;\n  color: #6c727a;\n  color: var(--rcx-color-foreground-info, #6c727a);\n  font: inherit;\n}\n\n.rcx-field__error dfn, .rcx-field__hint dfn, .rcx-field__description dfn {\n  letter-spacing: inherit;\n  color: #6c727a;\n  color: var(--rcx-color-foreground-info, #6c727a);\n  font: inherit;\n  font-style: italic;\n}\n\n.rcx-field__error abbr, .rcx-field__hint abbr, .rcx-field__description abbr {\n  letter-spacing: inherit;\n  font: inherit;\n}\n\n.rcx-field__error abbr[title], .rcx-field__hint abbr[title], .rcx-field__description abbr[title] {\n  -webkit-text-decoration: underline dashed;\n          text-decoration: underline dashed;\n  border-bottom-width: 0;\n}\n\n.rcx-field__error del, .rcx-field__hint del, .rcx-field__description del {\n  -webkit-text-decoration: line-through solid;\n          text-decoration: line-through solid;\n  letter-spacing: inherit;\n  font: inherit;\n}\n\n.rcx-field__error ins, .rcx-field__hint ins, .rcx-field__description ins {\n  -webkit-text-decoration: underline solid;\n          text-decoration: underline solid;\n  letter-spacing: inherit;\n  font: inherit;\n}\n\n.rcx-field__error sup, .rcx-field__hint sup, .rcx-field__description sup,\n.rcx-field__error sub,\n.rcx-field__hint sub,\n.rcx-field__description sub {\n  position: relative;\n  vertical-align: baseline;\n  letter-spacing: inherit;\n  font: inherit;\n  font-size: 75%;\n  line-height: 0;\n}\n\n.rcx-field__error sup, .rcx-field__hint sup, .rcx-field__description sup {\n  top: -0.5em;\n  letter-spacing: inherit;\n  font: inherit;\n}\n\n.rcx-field__error sub, .rcx-field__hint sub, .rcx-field__description sub {\n  bottom: -0.25em;\n  letter-spacing: inherit;\n  font: inherit;\n}\n\n.rcx-field__error kbd, .rcx-field__hint kbd, .rcx-field__description kbd {\n  padding: 0.25rem 0.5rem;\n  letter-spacing: inherit;\n  border-width: 0.0625rem;\n  border-style: solid;\n  border-color: currentColor;\n  border-radius: 0.125rem;\n  font: inherit;\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-family: var(--rcx-font-family-mono, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n  -webkit-font-smoothing: auto;\n}\n\n.rcx-field__error var, .rcx-field__hint var, .rcx-field__description var {\n  letter-spacing: inherit;\n  font: inherit;\n  font-style: italic;\n}\n\n.rcx-field__error small, .rcx-field__hint small, .rcx-field__description small {\n  letter-spacing: inherit;\n  font: inherit;\n  font-size: 80%;\n}\n\n.rcx-toggle-switch__input, .rcx-radio-button__input, .rcx-check-box__input {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  white-space: nowrap;\n  border: 0;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n}\n\n.rcx-input-box--type-select::-webkit-scrollbar, .rcx-input-box--type-textarea::-webkit-scrollbar {\n  width: 0.25rem;\n  height: 0.25rem;\n}\n\n.rcx-input-box--type-select::-webkit-scrollbar-track, .rcx-input-box--type-textarea::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n.rcx-input-box--type-select::-webkit-scrollbar-thumb, .rcx-input-box--type-textarea::-webkit-scrollbar-thumb {\n  background-color: rgba(247, 248, 250, 0.05);\n  background-color: var(--rcx-color-neutral-100-5, rgba(247, 248, 250, 0.05));\n}\n\n.rcx-input-box--type-select:hover::-webkit-scrollbar-thumb, .rcx-input-box--type-textarea:hover::-webkit-scrollbar-thumb {\n  background-color: rgba(247, 248, 250, 0.15);\n  background-color: var(--rcx-color-neutral-100-15, rgba(247, 248, 250, 0.15));\n}\n\n.rcx-input-box:not(.rcx-input-box--undecorated), .rcx-input-box__wrapper,\n.rcx-select,\n.rcx-autocomplete {\n  border-width: 0.125rem;\n  border-color: #cbced1;\n  border-color: var(--rcx-input-colors-border-color, var(--rcx-color-neutral-500, #cbced1));\n  border-radius: 0.125rem;\n  background-color: white;\n  background-color: var(--rcx-input-colors-background-color, var(--rcx-color-surface, white));\n  box-shadow: none;\n}\n.rcx-input-box:hover:not(.rcx-input-box--undecorated), .rcx-input-box__wrapper:hover,\n.rcx-select:hover,\n.rcx-autocomplete:hover, .hover.rcx-input-box:not(.rcx-input-box--undecorated), .hover.rcx-input-box__wrapper,\n.hover.rcx-select,\n.hover.rcx-autocomplete, .is-hovered.rcx-input-box:not(.rcx-input-box--undecorated), .is-hovered.rcx-input-box__wrapper,\n.is-hovered.rcx-select,\n.is-hovered.rcx-autocomplete {\n  border-color: #9ea2a8;\n  border-color: var(--rcx-input-colors-hover-border-color, var(--rcx-color-neutral-600, #9ea2a8));\n}\n.rcx-input-box:focus:not(.rcx-input-box--undecorated), .rcx-input-box__wrapper:focus,\n.rcx-select:focus,\n.rcx-autocomplete:focus, .rcx-input-box:focus-within:not(.rcx-input-box--undecorated), .rcx-input-box__wrapper:focus-within,\n.rcx-select:focus-within,\n.rcx-autocomplete:focus-within, .focus.rcx-input-box:not(.rcx-input-box--undecorated), .focus.rcx-input-box__wrapper,\n.focus.rcx-select,\n.focus.rcx-autocomplete, .is-focused.rcx-input-box:not(.rcx-input-box--undecorated), .is-focused.rcx-input-box__wrapper,\n.is-focused.rcx-select,\n.is-focused.rcx-autocomplete {\n  border-color: #1d74f5;\n  border-color: var(--rcx-input-colors-focus-border-color, var(--rcx-color-primary-500, #1d74f5));\n  box-shadow: 0 0 0 0.25rem #e8f2ff;\n  box-shadow: 0 0 0 0.25rem var(--rcx-input-colors-focus-shadow-color, var(--rcx-color-primary-100, #e8f2ff));\n}\n.rcx-input-box:active:not(.rcx-input-box--undecorated), .rcx-input-box__wrapper:active,\n.rcx-select:active,\n.rcx-autocomplete:active, .active.rcx-input-box:not(.rcx-input-box--undecorated), .active.rcx-input-box__wrapper,\n.active.rcx-select,\n.active.rcx-autocomplete, .is-active.rcx-input-box:not(.rcx-input-box--undecorated), .is-active.rcx-input-box__wrapper,\n.is-active.rcx-select,\n.is-active.rcx-autocomplete {\n  border-color: #9ea2a8;\n  border-color: var(--rcx-input-colors-active-border-color, var(--rcx-color-neutral-600, #9ea2a8));\n  box-shadow: none;\n}\n*:disabled .rcx-input-box:not(.rcx-input-box--undecorated), *:disabled .rcx-input-box__wrapper,\n*:disabled .rcx-select,\n*:disabled .rcx-autocomplete, .rcx-input-box:disabled:not(.rcx-input-box--undecorated), .rcx-input-box__wrapper:disabled,\n.rcx-select:disabled,\n.rcx-autocomplete:disabled, .disabled.rcx-input-box:not(.rcx-input-box--undecorated), .disabled.rcx-input-box__wrapper,\n.disabled.rcx-select,\n.disabled.rcx-autocomplete, .is-disabled.rcx-input-box:not(.rcx-input-box--undecorated), .is-disabled.rcx-input-box__wrapper,\n.is-disabled.rcx-select,\n.is-disabled.rcx-autocomplete {\n  border-color: #cbced1;\n  border-color: var(--rcx-input-colors-disabled-border-color, var(--rcx-color-neutral-500, #cbced1));\n  background-color: #f2f3f5;\n  background-color: var(--rcx-input-colors-disabled-background-color, var(--rcx-color-neutral-200, #f2f3f5));\n}\n\n.rcx-input-box:not(.rcx-input-box--undecorated):invalid, .rcx-input-box:not(.rcx-input-box--undecorated).invalid, .rcx-input-box__wrapper:invalid, .rcx-input-box__wrapper.invalid,\n.rcx-select:invalid,\n.rcx-autocomplete:invalid,\n.invalid.rcx-select,\n.invalid.rcx-autocomplete {\n  border-width: 0.125rem;\n  border-color: #f5455c;\n  border-color: var(--rcx-input-colors-invalid-border-color, var(--rcx-color-danger-500, #f5455c));\n  border-radius: 0.125rem;\n  background-color: white;\n  background-color: var(--rcx-input-colors-invalid-background-color, var(--rcx-color-surface, white));\n  box-shadow: none;\n}\n.rcx-input-box:hover:not(.rcx-input-box--undecorated):invalid, .rcx-input-box.invalid:hover:not(.rcx-input-box--undecorated), .rcx-input-box__wrapper:hover:invalid, .rcx-input-box__wrapper.invalid:hover,\n.rcx-select:hover:invalid,\n.rcx-autocomplete:hover:invalid,\n.invalid.rcx-select:hover,\n.invalid.rcx-autocomplete:hover, .hover.rcx-input-box:not(.rcx-input-box--undecorated):invalid, .hover.rcx-input-box.invalid:not(.rcx-input-box--undecorated), .hover.rcx-input-box__wrapper:invalid, .hover.rcx-input-box__wrapper.invalid,\n.hover.rcx-select:invalid,\n.hover.rcx-autocomplete:invalid,\n.hover.invalid.rcx-select,\n.hover.invalid.rcx-autocomplete, .is-hovered.rcx-input-box:not(.rcx-input-box--undecorated):invalid, .is-hovered.rcx-input-box.invalid:not(.rcx-input-box--undecorated), .is-hovered.rcx-input-box__wrapper:invalid, .is-hovered.rcx-input-box__wrapper.invalid,\n.is-hovered.rcx-select:invalid,\n.is-hovered.rcx-autocomplete:invalid,\n.is-hovered.invalid.rcx-select,\n.is-hovered.invalid.rcx-autocomplete {\n  border-color: #f5455c;\n  border-color: var(--rcx-input-colors-invalid-hover-border-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-input-box:focus:not(.rcx-input-box--undecorated):invalid, .rcx-input-box.invalid:focus:not(.rcx-input-box--undecorated), .rcx-input-box__wrapper:focus:invalid, .rcx-input-box__wrapper.invalid:focus,\n.rcx-select:focus:invalid,\n.rcx-autocomplete:focus:invalid,\n.invalid.rcx-select:focus,\n.invalid.rcx-autocomplete:focus, .rcx-input-box:focus-within:not(.rcx-input-box--undecorated):invalid, .rcx-input-box.invalid:focus-within:not(.rcx-input-box--undecorated), .rcx-input-box__wrapper:focus-within:invalid, .rcx-input-box__wrapper.invalid:focus-within,\n.rcx-select:focus-within:invalid,\n.rcx-autocomplete:focus-within:invalid,\n.invalid.rcx-select:focus-within,\n.invalid.rcx-autocomplete:focus-within, .focus.rcx-input-box:not(.rcx-input-box--undecorated):invalid, .focus.rcx-input-box.invalid:not(.rcx-input-box--undecorated), .focus.rcx-input-box__wrapper:invalid, .focus.rcx-input-box__wrapper.invalid,\n.focus.rcx-select:invalid,\n.focus.rcx-autocomplete:invalid,\n.focus.invalid.rcx-select,\n.focus.invalid.rcx-autocomplete, .is-focused.rcx-input-box:not(.rcx-input-box--undecorated):invalid, .is-focused.rcx-input-box.invalid:not(.rcx-input-box--undecorated), .is-focused.rcx-input-box__wrapper:invalid, .is-focused.rcx-input-box__wrapper.invalid,\n.is-focused.rcx-select:invalid,\n.is-focused.rcx-autocomplete:invalid,\n.is-focused.invalid.rcx-select,\n.is-focused.invalid.rcx-autocomplete {\n  border-color: #f5455c;\n  border-color: var(--rcx-input-colors-invalid-focus-border-color, var(--rcx-color-danger-500, #f5455c));\n  box-shadow: 0 0 0 0.25rem #fddade;\n  box-shadow: 0 0 0 0.25rem var(--rcx-input-colors-invalid-focus-shadow-color, var(--rcx-color-danger-100, #fddade));\n}\n.rcx-input-box:active:not(.rcx-input-box--undecorated):invalid, .rcx-input-box.invalid:active:not(.rcx-input-box--undecorated), .rcx-input-box__wrapper:active:invalid, .rcx-input-box__wrapper.invalid:active,\n.rcx-select:active:invalid,\n.rcx-autocomplete:active:invalid,\n.invalid.rcx-select:active,\n.invalid.rcx-autocomplete:active, .active.rcx-input-box:not(.rcx-input-box--undecorated):invalid, .active.rcx-input-box.invalid:not(.rcx-input-box--undecorated), .active.rcx-input-box__wrapper:invalid, .active.rcx-input-box__wrapper.invalid,\n.active.rcx-select:invalid,\n.active.rcx-autocomplete:invalid,\n.active.invalid.rcx-select,\n.active.invalid.rcx-autocomplete, .is-active.rcx-input-box:not(.rcx-input-box--undecorated):invalid, .is-active.rcx-input-box.invalid:not(.rcx-input-box--undecorated), .is-active.rcx-input-box__wrapper:invalid, .is-active.rcx-input-box__wrapper.invalid,\n.is-active.rcx-select:invalid,\n.is-active.rcx-autocomplete:invalid,\n.is-active.invalid.rcx-select,\n.is-active.invalid.rcx-autocomplete {\n  border-color: #9ea2a8;\n  border-color: var(--rcx-input-colors-invalid-active-border-color, var(--rcx-color-neutral-600, #9ea2a8));\n  box-shadow: none;\n}\n*:disabled .rcx-input-box:not(.rcx-input-box--undecorated):invalid, *:disabled .rcx-input-box:not(.rcx-input-box--undecorated).invalid, *:disabled .rcx-input-box__wrapper:invalid, *:disabled .rcx-input-box__wrapper.invalid,\n*:disabled .rcx-select:invalid,\n*:disabled .rcx-autocomplete:invalid,\n*:disabled .invalid.rcx-select,\n*:disabled .invalid.rcx-autocomplete, .rcx-input-box:disabled:not(.rcx-input-box--undecorated):invalid, .rcx-input-box.invalid:disabled:not(.rcx-input-box--undecorated), .rcx-input-box__wrapper:disabled:invalid, .rcx-input-box__wrapper.invalid:disabled,\n.rcx-select:disabled:invalid,\n.rcx-autocomplete:disabled:invalid,\n.invalid.rcx-select:disabled,\n.invalid.rcx-autocomplete:disabled, .disabled.rcx-input-box:not(.rcx-input-box--undecorated):invalid, .disabled.rcx-input-box.invalid:not(.rcx-input-box--undecorated), .disabled.rcx-input-box__wrapper:invalid, .disabled.rcx-input-box__wrapper.invalid,\n.disabled.rcx-select:invalid,\n.disabled.rcx-autocomplete:invalid,\n.disabled.invalid.rcx-select,\n.disabled.invalid.rcx-autocomplete, .is-disabled.rcx-input-box:not(.rcx-input-box--undecorated):invalid, .is-disabled.rcx-input-box.invalid:not(.rcx-input-box--undecorated), .is-disabled.rcx-input-box__wrapper:invalid, .is-disabled.rcx-input-box__wrapper.invalid,\n.is-disabled.rcx-select:invalid,\n.is-disabled.rcx-autocomplete:invalid,\n.is-disabled.invalid.rcx-select,\n.is-disabled.invalid.rcx-autocomplete {\n  border-color: #cbced1;\n  border-color: var(--rcx-input-colors-invalid-disabled-border-color, var(--rcx-color-neutral-500, #cbced1));\n  background-color: #f2f3f5;\n  background-color: var(--rcx-input-colors-invalid-disabled-background-color, var(--rcx-color-neutral-200, #f2f3f5));\n}\n\n.rcx-chip, .rcx-button {\n  color: #2f343d;\n  color: var(--rcx-button-colors-secondary-color, var(--rcx-color-neutral-800, #2f343d));\n  border-width: 0.125rem;\n  border-style: solid;\n  border-color: #eeeff1;\n  border-color: var(--rcx-button-colors-secondary-border-color, var(--rcx-color-neutral-300, #eeeff1));\n  border-radius: 0.125rem;\n  background-color: #eeeff1;\n  background-color: var(--rcx-button-colors-secondary-background-color, var(--rcx-color-neutral-300, #eeeff1));\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.js-focus-visible .rcx-chip:focus.focus-visible, .js-focus-visible .rcx-button:focus.focus-visible, .js-focus-visible .focus.focus-visible.rcx-chip, .js-focus-visible .focus.focus-visible.rcx-button {\n  border-color: #cbced1;\n  border-color: var(--rcx-button-colors-secondary-focus-border-color, var(--rcx-color-neutral-500, #cbced1));\n  background-color: #eeeff1;\n  background-color: var(--rcx-button-colors-secondary-focus-background-color, var(--rcx-color-neutral-300, #eeeff1));\n  box-shadow: 0 0 0 0.25rem #f7f8fa;\n  box-shadow: 0 0 0 0.25rem var(--rcx-button-colors-secondary-focus-shadow-color, var(--rcx-color-neutral-100, #f7f8fa));\n}\n\nhtml:not(.js-focus-visible) .rcx-chip:focus, html:not(.js-focus-visible) .rcx-button:focus, html:not(.js-focus-visible) .rcx-chip:focus-within, html:not(.js-focus-visible) .rcx-button:focus-within, html:not(.js-focus-visible) .focus.rcx-chip, html:not(.js-focus-visible) .focus.rcx-button, html:not(.js-focus-visible) .is-focused.rcx-chip, html:not(.js-focus-visible) .is-focused.rcx-button {\n  border-color: #cbced1;\n  border-color: var(--rcx-button-colors-secondary-focus-border-color, var(--rcx-color-neutral-500, #cbced1));\n  background-color: #eeeff1;\n  background-color: var(--rcx-button-colors-secondary-focus-background-color, var(--rcx-color-neutral-300, #eeeff1));\n  box-shadow: 0 0 0 0.25rem #f7f8fa;\n  box-shadow: 0 0 0 0.25rem var(--rcx-button-colors-secondary-focus-shadow-color, var(--rcx-color-neutral-100, #f7f8fa));\n}\n\n.rcx-chip:hover, .rcx-button:hover, .hover.rcx-chip, .hover.rcx-button, .is-hovered.rcx-chip, .is-hovered.rcx-button {\n  border-color: #e4e7ea;\n  border-color: var(--rcx-button-colors-secondary-hover-border-color, var(--rcx-color-neutral-400, #e4e7ea));\n  background-color: #e4e7ea;\n  background-color: var(--rcx-button-colors-secondary-hover-background-color, var(--rcx-color-neutral-400, #e4e7ea));\n  box-shadow: none;\n}\n.rcx-chip:active, .rcx-button:active, .active.rcx-chip, .active.rcx-button, .is-active.rcx-chip, .is-active.rcx-button {\n  border-color: #cbced1;\n  border-color: var(--rcx-button-colors-secondary-active-border-color, var(--rcx-color-neutral-500, #cbced1));\n  background-color: #cbced1;\n  background-color: var(--rcx-button-colors-secondary-active-background-color, var(--rcx-color-neutral-500, #cbced1));\n  box-shadow: none;\n}\n*:disabled .rcx-chip, *:disabled .rcx-button, .rcx-chip:disabled, .rcx-button:disabled, .disabled.rcx-chip, .disabled.rcx-button, .is-disabled.rcx-chip, .is-disabled.rcx-button {\n  color: #e4e7ea;\n  color: var(--rcx-button-colors-secondary-disabled-color, var(--rcx-color-neutral-400, #e4e7ea));\n  border-color: #f7f8fa;\n  border-color: var(--rcx-button-colors-secondary-disabled-border-color, var(--rcx-color-neutral-100, #f7f8fa));\n  background-color: #f7f8fa;\n  background-color: var(--rcx-button-colors-secondary-disabled-background-color, var(--rcx-color-neutral-100, #f7f8fa));\n}\n\n.rcx-button--primary {\n  color: white;\n  color: var(--rcx-button-colors-primary-color, var(--rcx-color-foreground-alternative, white));\n  border-width: 0.125rem;\n  border-style: solid;\n  border-color: #1d74f5;\n  border-color: var(--rcx-button-colors-primary-border-color, var(--rcx-color-primary-500, #1d74f5));\n  border-radius: 0.125rem;\n  background-color: #1d74f5;\n  background-color: var(--rcx-button-colors-primary-background-color, var(--rcx-color-primary-500, #1d74f5));\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.js-focus-visible .rcx-button--primary:focus.focus-visible, .js-focus-visible .focus.focus-visible.rcx-button--primary {\n  border-color: #10529e;\n  border-color: var(--rcx-button-colors-primary-focus-border-color, var(--rcx-color-primary-700, #10529e));\n  background-color: #1d74f5;\n  background-color: var(--rcx-button-colors-primary-focus-background-color, var(--rcx-color-primary-500, #1d74f5));\n  box-shadow: 0 0 0 0.25rem #e8f2ff;\n  box-shadow: 0 0 0 0.25rem var(--rcx-button-colors-primary-focus-shadow-color, var(--rcx-color-primary-100, #e8f2ff));\n}\n\nhtml:not(.js-focus-visible) .rcx-button--primary:focus, html:not(.js-focus-visible) .rcx-button--primary:focus-within, html:not(.js-focus-visible) .focus.rcx-button--primary, html:not(.js-focus-visible) .is-focused.rcx-button--primary {\n  border-color: #10529e;\n  border-color: var(--rcx-button-colors-primary-focus-border-color, var(--rcx-color-primary-700, #10529e));\n  background-color: #1d74f5;\n  background-color: var(--rcx-button-colors-primary-focus-background-color, var(--rcx-color-primary-500, #1d74f5));\n  box-shadow: 0 0 0 0.25rem #e8f2ff;\n  box-shadow: 0 0 0 0.25rem var(--rcx-button-colors-primary-focus-shadow-color, var(--rcx-color-primary-100, #e8f2ff));\n}\n\n.rcx-button--primary:hover, .hover.rcx-button--primary, .is-hovered.rcx-button--primary {\n  border-color: #095ad2;\n  border-color: var(--rcx-button-colors-primary-hover-border-color, var(--rcx-color-primary-600, #095ad2));\n  background-color: #095ad2;\n  background-color: var(--rcx-button-colors-primary-hover-background-color, var(--rcx-color-primary-600, #095ad2));\n  box-shadow: none;\n}\n.rcx-button--primary:active, .active.rcx-button--primary, .is-active.rcx-button--primary {\n  border-color: #10529e;\n  border-color: var(--rcx-button-colors-primary-active-border-color, var(--rcx-color-primary-700, #10529e));\n  background-color: #10529e;\n  background-color: var(--rcx-button-colors-primary-active-background-color, var(--rcx-color-primary-700, #10529e));\n  box-shadow: none;\n}\n*:disabled .rcx-button--primary, .rcx-button--primary:disabled, .disabled.rcx-button--primary, .is-disabled.rcx-button--primary {\n  color: white;\n  color: var(--rcx-button-colors-primary-disabled-color, var(--rcx-color-foreground-alternative, white));\n  border-color: #d1ebfe;\n  border-color: var(--rcx-button-colors-primary-disabled-border-color, var(--rcx-color-primary-200, #d1ebfe));\n  background-color: #d1ebfe;\n  background-color: var(--rcx-button-colors-primary-disabled-background-color, var(--rcx-color-primary-200, #d1ebfe));\n}\n\n.rcx-button--primary-success {\n  color: white;\n  color: var(--rcx-button-colors-success-color, var(--rcx-color-foreground-alternative, white));\n  border-width: 0.125rem;\n  border-style: solid;\n  border-color: #2de0a5;\n  border-color: var(--rcx-button-colors-success-border-color, var(--rcx-color-success-500, #2de0a5));\n  border-radius: 0.125rem;\n  background-color: #2de0a5;\n  background-color: var(--rcx-button-colors-success-background-color, var(--rcx-color-success-500, #2de0a5));\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.js-focus-visible .rcx-button--primary-success:focus.focus-visible, .js-focus-visible .focus.focus-visible.rcx-button--primary-success {\n  border-color: #19ac7c;\n  border-color: var(--rcx-button-colors-success-focus-border-color, var(--rcx-color-success-700, #19ac7c));\n  background-color: #2de0a5;\n  background-color: var(--rcx-button-colors-success-focus-background-color, var(--rcx-color-success-500, #2de0a5));\n  box-shadow: 0 0 0 0.25rem #e5fbf4;\n  box-shadow: 0 0 0 0.25rem var(--rcx-button-colors-success-focus-shadow-color, var(--rcx-color-success-100, #e5fbf4));\n}\n\nhtml:not(.js-focus-visible) .rcx-button--primary-success:focus, html:not(.js-focus-visible) .rcx-button--primary-success:focus-within, html:not(.js-focus-visible) .focus.rcx-button--primary-success, html:not(.js-focus-visible) .is-focused.rcx-button--primary-success {\n  border-color: #19ac7c;\n  border-color: var(--rcx-button-colors-success-focus-border-color, var(--rcx-color-success-700, #19ac7c));\n  background-color: #2de0a5;\n  background-color: var(--rcx-button-colors-success-focus-background-color, var(--rcx-color-success-500, #2de0a5));\n  box-shadow: 0 0 0 0.25rem #e5fbf4;\n  box-shadow: 0 0 0 0.25rem var(--rcx-button-colors-success-focus-shadow-color, var(--rcx-color-success-100, #e5fbf4));\n}\n\n.rcx-button--primary-success:hover, .hover.rcx-button--primary-success, .is-hovered.rcx-button--primary-success {\n  border-color: #1ecb92;\n  border-color: var(--rcx-button-colors-success-hover-border-color, var(--rcx-color-success-600, #1ecb92));\n  background-color: #1ecb92;\n  background-color: var(--rcx-button-colors-success-hover-background-color, var(--rcx-color-success-600, #1ecb92));\n  box-shadow: none;\n}\n.rcx-button--primary-success:active, .active.rcx-button--primary-success, .is-active.rcx-button--primary-success {\n  border-color: #19ac7c;\n  border-color: var(--rcx-button-colors-success-active-border-color, var(--rcx-color-success-700, #19ac7c));\n  background-color: #19ac7c;\n  background-color: var(--rcx-button-colors-success-active-background-color, var(--rcx-color-success-700, #19ac7c));\n  box-shadow: none;\n}\n*:disabled .rcx-button--primary-success, .rcx-button--primary-success:disabled, .disabled.rcx-button--primary-success, .is-disabled.rcx-button--primary-success {\n  color: white;\n  color: var(--rcx-button-colors-success-disabled-color, var(--rcx-color-foreground-alternative, white));\n  border-color: #c0f6e4;\n  border-color: var(--rcx-button-colors-success-disabled-border-color, var(--rcx-color-success-200, #c0f6e4));\n  background-color: #c0f6e4;\n  background-color: var(--rcx-button-colors-success-disabled-background-color, var(--rcx-color-success-200, #c0f6e4));\n}\n\n.rcx-button--primary-danger {\n  color: white;\n  color: var(--rcx-button-colors-danger-color, var(--rcx-color-foreground-alternative, white));\n  border-width: 0.125rem;\n  border-style: solid;\n  border-color: #f5455c;\n  border-color: var(--rcx-button-colors-danger-border-color, var(--rcx-color-danger-500, #f5455c));\n  border-radius: 0.125rem;\n  background-color: #f5455c;\n  background-color: var(--rcx-button-colors-danger-background-color, var(--rcx-color-danger-500, #f5455c));\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.js-focus-visible .rcx-button--primary-danger:focus.focus-visible, .js-focus-visible .focus.focus-visible.rcx-button--primary-danger {\n  border-color: #b30a20;\n  border-color: var(--rcx-button-colors-danger-focus-border-color, var(--rcx-color-danger-700, #b30a20));\n  background-color: #f5455c;\n  background-color: var(--rcx-button-colors-danger-focus-background-color, var(--rcx-color-danger-500, #f5455c));\n  box-shadow: 0 0 0 0.25rem #fddade;\n  box-shadow: 0 0 0 0.25rem var(--rcx-button-colors-danger-focus-shadow-color, var(--rcx-color-danger-100, #fddade));\n}\n\nhtml:not(.js-focus-visible) .rcx-button--primary-danger:focus, html:not(.js-focus-visible) .rcx-button--primary-danger:focus-within, html:not(.js-focus-visible) .focus.rcx-button--primary-danger, html:not(.js-focus-visible) .is-focused.rcx-button--primary-danger {\n  border-color: #b30a20;\n  border-color: var(--rcx-button-colors-danger-focus-border-color, var(--rcx-color-danger-700, #b30a20));\n  background-color: #f5455c;\n  background-color: var(--rcx-button-colors-danger-focus-background-color, var(--rcx-color-danger-500, #f5455c));\n  box-shadow: 0 0 0 0.25rem #fddade;\n  box-shadow: 0 0 0 0.25rem var(--rcx-button-colors-danger-focus-shadow-color, var(--rcx-color-danger-100, #fddade));\n}\n\n.rcx-button--primary-danger:hover, .hover.rcx-button--primary-danger, .is-hovered.rcx-button--primary-danger {\n  border-color: #db0c27;\n  border-color: var(--rcx-button-colors-danger-hover-border-color, var(--rcx-color-danger-600, #db0c27));\n  background-color: #db0c27;\n  background-color: var(--rcx-button-colors-danger-hover-background-color, var(--rcx-color-danger-600, #db0c27));\n  box-shadow: none;\n}\n.rcx-button--primary-danger:active, .active.rcx-button--primary-danger, .is-active.rcx-button--primary-danger {\n  border-color: #b30a20;\n  border-color: var(--rcx-button-colors-danger-active-border-color, var(--rcx-color-danger-700, #b30a20));\n  background-color: #b30a20;\n  background-color: var(--rcx-button-colors-danger-active-background-color, var(--rcx-color-danger-700, #b30a20));\n  box-shadow: none;\n}\n*:disabled .rcx-button--primary-danger, .rcx-button--primary-danger:disabled, .disabled.rcx-button--primary-danger, .is-disabled.rcx-button--primary-danger {\n  color: white;\n  color: var(--rcx-button-colors-danger-disabled-color, var(--rcx-color-foreground-alternative, white));\n  border-color: #fbb5be;\n  border-color: var(--rcx-button-colors-danger-disabled-border-color, var(--rcx-color-danger-200, #fbb5be));\n  background-color: #fbb5be;\n  background-color: var(--rcx-button-colors-danger-disabled-background-color, var(--rcx-color-danger-200, #fbb5be));\n}\n\n.rcx-toggle-switch__fake, .rcx-radio-button__fake, .rcx-check-box__fake {\n  position: relative;\n  height: 1.25rem;\n  border-width: 0.125rem;\n}\n\n.rcx-radio-button__input + .rcx-radio-button__fake, .rcx-check-box__input + .rcx-check-box__fake {\n  color: white;\n  color: var(--rcx-button-colors-empty-color, var(--rcx-color-foreground-alternative, white));\n  border-color: #e4e7ea;\n  border-color: var(--rcx-button-colors-empty-border-color, var(--rcx-color-neutral-400, #e4e7ea));\n  background-color: white;\n  background-color: var(--rcx-button-colors-empty-background-color, var(--rcx-color-surface, white));\n}\n\n.rcx-radio-button__input:hover + .rcx-radio-button__fake, .rcx-radio-button.is-hovered .rcx-radio-button__input + .rcx-radio-button__fake, .rcx-check-box__input:hover + .rcx-check-box__fake, .rcx-check-box.is-hovered .rcx-check-box__input + .rcx-check-box__fake {\n  border-color: #cbced1;\n  border-color: var(--rcx-button-colors-empty-hover-border-color, var(--rcx-color-neutral-500, #cbced1));\n  background-color: white;\n  background-color: var(--rcx-button-colors-empty-hover-background-color, var(--rcx-color-surface, white));\n  box-shadow: none;\n}\n\n.rcx-radio-button__input:active + .rcx-radio-button__fake, .rcx-radio-button.is-active .rcx-radio-button__input + .rcx-radio-button__fake, .rcx-check-box__input:active + .rcx-check-box__fake, .rcx-check-box.is-active .rcx-check-box__input + .rcx-check-box__fake {\n  border-color: #9ea2a8;\n  border-color: var(--rcx-button-colors-empty-active-border-color, var(--rcx-color-neutral-600, #9ea2a8));\n  background-color: white;\n  background-color: var(--rcx-button-colors-empty-active-background-color, var(--rcx-color-surface, white));\n  box-shadow: none;\n}\n\n.rcx-radio-button__input:focus + .rcx-radio-button__fake, .rcx-radio-button.is-focused .rcx-radio-button__input + .rcx-radio-button__fake, .rcx-check-box__input:focus + .rcx-check-box__fake, .rcx-check-box.is-focused .rcx-check-box__input + .rcx-check-box__fake {\n  border-color: #1d74f5;\n  border-color: var(--rcx-button-colors-empty-focus-border-color, var(--rcx-color-primary-500, #1d74f5));\n  background-color: white;\n  background-color: var(--rcx-button-colors-empty-focus-background-color, var(--rcx-color-surface, white));\n  box-shadow: 0 0 0 0.25rem #e8f2ff;\n  box-shadow: 0 0 0 0.25rem var(--rcx-button-colors-empty-focus-shadow-color, var(--rcx-color-primary-100, #e8f2ff));\n}\n\n.rcx-radio-button__input:disabled + .rcx-radio-button__fake, .rcx-radio-button.is-disabled .rcx-radio-button__input + .rcx-radio-button__fake, .rcx-check-box__input:disabled + .rcx-check-box__fake, .rcx-check-box.is-disabled .rcx-check-box__input + .rcx-check-box__fake {\n  color: white;\n  color: var(--rcx-button-colors-empty-disabled-color, var(--rcx-color-foreground-alternative, white));\n  border-color: #f2f3f5;\n  border-color: var(--rcx-button-colors-empty-disabled-border-color, var(--rcx-color-neutral-200, #f2f3f5));\n  background-color: #f2f3f5;\n  background-color: var(--rcx-button-colors-empty-disabled-background-color, var(--rcx-color-neutral-200, #f2f3f5));\n}\n\n.rcx-toggle-switch__input + .rcx-toggle-switch__fake {\n  color: white;\n  color: var(--rcx-button-colors-off-color, var(--rcx-color-foreground-alternative, white));\n  border-color: #e4e7ea;\n  border-color: var(--rcx-button-colors-off-border-color, var(--rcx-color-neutral-400, #e4e7ea));\n  background-color: #e4e7ea;\n  background-color: var(--rcx-button-colors-off-background-color, var(--rcx-color-neutral-400, #e4e7ea));\n}\n\n.rcx-toggle-switch__input:hover + .rcx-toggle-switch__fake, .rcx-toggle-switch.is-hovered .rcx-toggle-switch__input + .rcx-toggle-switch__fake {\n  border-color: #cbced1;\n  border-color: var(--rcx-button-colors-off-hover-border-color, var(--rcx-color-neutral-500, #cbced1));\n  background-color: #cbced1;\n  background-color: var(--rcx-button-colors-off-hover-background-color, var(--rcx-color-neutral-500, #cbced1));\n  box-shadow: none;\n}\n\n.rcx-toggle-switch__input:active + .rcx-toggle-switch__fake, .rcx-toggle-switch.is-active .rcx-toggle-switch__input + .rcx-toggle-switch__fake {\n  border-color: #9ea2a8;\n  border-color: var(--rcx-button-colors-off-active-border-color, var(--rcx-color-neutral-600, #9ea2a8));\n  background-color: #9ea2a8;\n  background-color: var(--rcx-button-colors-off-active-background-color, var(--rcx-color-neutral-600, #9ea2a8));\n  box-shadow: none;\n}\n\n.rcx-toggle-switch__input:focus + .rcx-toggle-switch__fake, .rcx-toggle-switch.is-focused .rcx-toggle-switch__input + .rcx-toggle-switch__fake {\n  border-color: #1d74f5;\n  border-color: var(--rcx-button-colors-off-focus-border-color, var(--rcx-color-primary-500, #1d74f5));\n  background-color: #cbced1;\n  background-color: var(--rcx-button-colors-off-focus-background-color, var(--rcx-color-neutral-500, #cbced1));\n  box-shadow: 0 0 0 0.25rem #e8f2ff;\n  box-shadow: 0 0 0 0.25rem var(--rcx-button-colors-off-focus-shadow-color, var(--rcx-color-primary-100, #e8f2ff));\n}\n\n.rcx-toggle-switch__input:disabled + .rcx-toggle-switch__fake, .rcx-toggle-switch.is-disabled .rcx-toggle-switch__input + .rcx-toggle-switch__fake {\n  color: #f2f3f5;\n  color: var(--rcx-button-colors-off-disabled-color, var(--rcx-color-neutral-200, #f2f3f5));\n  border-color: #e4e7ea;\n  border-color: var(--rcx-button-colors-off-disabled-border-color, var(--rcx-color-neutral-400, #e4e7ea));\n  background-color: #e4e7ea;\n  background-color: var(--rcx-button-colors-off-disabled-background-color, var(--rcx-color-neutral-400, #e4e7ea));\n}\n\n.rcx-toggle-switch__input:checked + .rcx-toggle-switch__fake, .rcx-radio-button__input:checked + .rcx-radio-button__fake, .rcx-check-box__input:checked + .rcx-check-box__fake, .rcx-check-box__input:indeterminate + .rcx-check-box__fake {\n  color: white;\n  color: var(--rcx-button-colors-primary-color, var(--rcx-color-foreground-alternative, white));\n  border-color: #1d74f5;\n  border-color: var(--rcx-button-colors-primary-border-color, var(--rcx-color-primary-500, #1d74f5));\n  background-color: #1d74f5;\n  background-color: var(--rcx-button-colors-primary-background-color, var(--rcx-color-primary-500, #1d74f5));\n}\n\n.rcx-toggle-switch__input:checked:hover + .rcx-toggle-switch__fake, .rcx-toggle-switch.is-hovered .rcx-toggle-switch__input:checked + .rcx-toggle-switch__fake, .rcx-radio-button__input:checked:hover + .rcx-radio-button__fake, .rcx-radio-button.is-hovered .rcx-radio-button__input:checked + .rcx-radio-button__fake, .rcx-check-box__input:checked:hover + .rcx-check-box__fake, .rcx-check-box.is-hovered .rcx-check-box__input:checked + .rcx-check-box__fake, .rcx-check-box__input:indeterminate:hover + .rcx-check-box__fake, .rcx-check-box.is-hovered .rcx-check-box__input:indeterminate + .rcx-check-box__fake {\n  border-color: #095ad2;\n  border-color: var(--rcx-button-colors-primary-hover-border-color, var(--rcx-color-primary-600, #095ad2));\n  background-color: #095ad2;\n  background-color: var(--rcx-button-colors-primary-hover-background-color, var(--rcx-color-primary-600, #095ad2));\n  box-shadow: none;\n}\n\n.rcx-toggle-switch__input:checked:active + .rcx-toggle-switch__fake, .rcx-toggle-switch.is-active .rcx-toggle-switch__input:checked + .rcx-toggle-switch__fake, .rcx-radio-button__input:checked:active + .rcx-radio-button__fake, .rcx-radio-button.is-active .rcx-radio-button__input:checked + .rcx-radio-button__fake, .rcx-check-box__input:checked:active + .rcx-check-box__fake, .rcx-check-box.is-active .rcx-check-box__input:checked + .rcx-check-box__fake, .rcx-check-box__input:indeterminate:active + .rcx-check-box__fake, .rcx-check-box.is-active .rcx-check-box__input:indeterminate + .rcx-check-box__fake {\n  border-color: #10529e;\n  border-color: var(--rcx-button-colors-primary-active-border-color, var(--rcx-color-primary-700, #10529e));\n  background-color: #10529e;\n  background-color: var(--rcx-button-colors-primary-active-background-color, var(--rcx-color-primary-700, #10529e));\n  box-shadow: none;\n}\n\n.rcx-toggle-switch__input:checked:focus + .rcx-toggle-switch__fake, .rcx-toggle-switch.is-focused .rcx-toggle-switch__input:checked + .rcx-toggle-switch__fake, .rcx-radio-button__input:checked:focus + .rcx-radio-button__fake, .rcx-radio-button.is-focused .rcx-radio-button__input:checked + .rcx-radio-button__fake, .rcx-check-box__input:checked:focus + .rcx-check-box__fake, .rcx-check-box.is-focused .rcx-check-box__input:checked + .rcx-check-box__fake, .rcx-check-box__input:indeterminate:focus + .rcx-check-box__fake, .rcx-check-box.is-focused .rcx-check-box__input:indeterminate + .rcx-check-box__fake {\n  border-color: #10529e;\n  border-color: var(--rcx-button-colors-primary-focus-border-color, var(--rcx-color-primary-700, #10529e));\n  background-color: #1d74f5;\n  background-color: var(--rcx-button-colors-primary-focus-background-color, var(--rcx-color-primary-500, #1d74f5));\n  box-shadow: 0 0 0 0.25rem #e8f2ff;\n  box-shadow: 0 0 0 0.25rem var(--rcx-button-colors-primary-focus-shadow-color, var(--rcx-color-primary-100, #e8f2ff));\n}\n\n.rcx-toggle-switch__input:checked:disabled + .rcx-toggle-switch__fake, .rcx-toggle-switch.is-disabled .rcx-toggle-switch__input:checked + .rcx-toggle-switch__fake, .rcx-radio-button__input:checked:disabled + .rcx-radio-button__fake, .rcx-radio-button.is-disabled .rcx-radio-button__input:checked + .rcx-radio-button__fake, .rcx-check-box__input:checked:disabled + .rcx-check-box__fake, .rcx-check-box.is-disabled .rcx-check-box__input:checked + .rcx-check-box__fake, .rcx-check-box__input:indeterminate:disabled + .rcx-check-box__fake, .rcx-check-box.is-disabled .rcx-check-box__input:indeterminate + .rcx-check-box__fake {\n  color: white;\n  color: var(--rcx-button-colors-primary-disabled-color, var(--rcx-color-foreground-alternative, white));\n  border-color: #d1ebfe;\n  border-color: var(--rcx-button-colors-primary-disabled-border-color, var(--rcx-color-primary-200, #d1ebfe));\n  background-color: #d1ebfe;\n  background-color: var(--rcx-button-colors-primary-disabled-background-color, var(--rcx-color-primary-200, #d1ebfe));\n}\n\n.rcx-accordion {\n  display: flex;\n  flex-flow: column nowrap;\n  border-bottom-color: #eeeff1;\n  border-bottom-color: var(--rcx-color-neutral-300, #eeeff1);\n  border-bottom-width: 0.125rem;\n}\n\n.rcx-accordion-item {\n  display: flex;\n  flex-flow: column nowrap;\n}\n\nhtml:not([dir=\"rtl\"]) .rcx-accordion-item__bar{\n  text-align: left;\n}\n\n[dir=\"rtl\"] .rcx-accordion-item__bar{\n  text-align: right;\n}\n\n.rcx-accordion-item__bar {\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 5.5rem;\n  padding: 1.875rem 0.375rem;\n  text-align: start;\n  color: #2f343d;\n  color: var(--rcx-color-foreground-default, #2f343d);\n  border-width: 0.125rem;\n  border-color: #eeeff1 transparent transparent;\n  border-color: var(--rcx-color-neutral-300, #eeeff1) transparent transparent;\n}\n.rcx-accordion-item__bar[tabindex] {\n  cursor: pointer;\n  outline: 0;\n}\n.rcx-accordion-item__bar[tabindex].disabled, .rcx-accordion-item__bar[tabindex]:disabled {\n  cursor: not-allowed;\n}\n.rcx-accordion-item__bar[tabindex].hover, .rcx-accordion-item__bar[tabindex]:hover {\n  background-color: #f7f8fa;\n  background-color: var(--rcx-color-neutral-100, #f7f8fa);\n}\n.rcx-accordion-item__bar[tabindex].focus, .rcx-accordion-item__bar[tabindex]:focus {\n  border-color: #1d74f5;\n  border-color: var(--rcx-color-primary-500, #1d74f5);\n  box-shadow: 0 0 0 0.25rem #e8f2ff;\n  box-shadow: 0 0 0 0.25rem var(--rcx-color-primary-100, #e8f2ff);\n}\n.rcx-accordion-item__bar--disabled {\n  cursor: not-allowed;\n  color: #e4e7ea;\n  color: var(--rcx-color-foreground-disabled, #e4e7ea);\n  background-color: #f7f8fa;\n  background-color: var(--rcx-color-neutral-100, #f7f8fa);\n}\n\n.rcx-accordion-item__title {\n  flex: 1 1 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  letter-spacing: 0rem;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.375rem;\n}\n\n.rcx-accordion-item__toggle-switch {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  margin: 0 1.5rem;\n}\n\n.rcx-accordion-item__panel {\n  visibility: hidden;\n  overflow: hidden;\n  height: 0;\n  padding: 0 0.5rem;\n}\n.rcx-accordion-item__panel--expanded {\n  visibility: visible;\n  height: auto;\n  padding: 2rem 0.5rem;\n}\n\n.rcx-avatar {\n  display: inline-flex;\n}\n.rcx-avatar__element {\n  position: relative;\n  border-radius: 0.125rem;\n}\n.rcx-avatar__element--rounded {\n  border-radius: 100%;\n}\n.rcx-avatar-stack {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n  color: white;\n  color: var(--rcx-avatar-background-color, var(--rcx-color-surface, white));\n}\n.rcx-avatar-stack > .rcx-avatar {\n  margin: auto -0.125rem;\n}\n.rcx-avatar-stack > .rcx-avatar > .rcx-avatar__element {\n  border: 0.125rem solid currentColor;\n}\n\n.rcx-button {\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-decoration: none;\n  cursor: pointer;\n  outline: 0;\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: calc((2.5rem - 1.25rem) / 2 - 0.125rem) calc(1rem - 0.125rem);\n  padding-top: calc((2.5rem - 1.25rem) / 2 - 0.125rem);\n  padding-bottom: calc((2.5rem - 1.25rem) / 2 - 0.125rem);\n  padding-block: calc((2.5rem - 1.25rem) / 2 - 0.125rem);\n  padding-left: calc(1rem - 0.125rem);\n  padding-right: calc(1rem - 0.125rem);\n  padding-inline: calc(1rem - 0.125rem);\n}\n.rcx-button.disabled, .rcx-button:disabled {\n  cursor: not-allowed;\n}\n.rcx-button--small {\n  letter-spacing: 0rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1rem;\n  padding: calc((1.75rem - 1rem) / 2 - 0.125rem) calc(0.5rem - 0.125rem);\n  padding-top: calc((1.75rem - 1rem) / 2 - 0.125rem);\n  padding-bottom: calc((1.75rem - 1rem) / 2 - 0.125rem);\n  padding-block: calc((1.75rem - 1rem) / 2 - 0.125rem);\n  padding-left: calc(0.5rem - 0.125rem);\n  padding-right: calc(0.5rem - 0.125rem);\n  padding-inline: calc(0.5rem - 0.125rem);\n}\n.rcx-button--square {\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.rcx-button--square::before, .rcx-button--square::after {\n  display: inline-block;\n  height: 100%;\n  content: \"\";\n  vertical-align: middle;\n}\n.rcx-button--tiny-square {\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 0;\n}\n.rcx-button--tiny-square::before, .rcx-button--tiny-square::after {\n  display: inline-block;\n  height: 100%;\n  content: \"\";\n  vertical-align: middle;\n}\n.rcx-button--mini-square {\n  width: 1.25rem;\n  height: 1.25rem;\n  padding: 0;\n}\n.rcx-button--mini-square::before, .rcx-button--mini-square::after {\n  display: inline-block;\n  height: 100%;\n  content: \"\";\n  vertical-align: middle;\n}\n.rcx-button--small-square {\n  width: 1.75rem;\n  height: 1.75rem;\n  padding: 0;\n}\n.rcx-button--small-square::before, .rcx-button--small-square::after {\n  display: inline-block;\n  height: 100%;\n  content: \"\";\n  vertical-align: middle;\n}\n.rcx-button--success {\n  color: #2de0a5;\n  color: var(--rcx-color-success-500, #2de0a5);\n}\n.rcx-button--success.disabled, .rcx-button--success:disabled {\n  color: #e5fbf4;\n  color: var(--rcx-color-success-100, #e5fbf4);\n}\n.rcx-button--danger {\n  color: #f5455c;\n  color: var(--rcx-color-danger-500, #f5455c);\n}\n.rcx-button--danger.disabled, .rcx-button--danger:disabled {\n  color: #fddade;\n  color: var(--rcx-color-danger-100, #fddade);\n}\n.rcx-button--ghost {\n  border-color: transparent;\n  border-color: var(--rcx-button-colors-ghost-background-color, transparent);\n  background-color: transparent;\n  background-color: var(--rcx-button-colors-ghost-border-color, transparent);\n}\n.rcx-button--ghost-danger {\n  color: #f5455c;\n  color: var(--rcx-color-danger-500, #f5455c);\n}\n.rcx-button--ghost-danger.disabled, .rcx-button--ghost-danger:disabled {\n  color: #fddade;\n  color: var(--rcx-color-danger-100, #fddade);\n}\n.rcx-button--ghost-success {\n  color: #2de0a5;\n  color: var(--rcx-color-success-500, #2de0a5);\n}\n.rcx-button--ghost-success.disabled, .rcx-button--ghost-success:disabled {\n  color: #e5fbf4;\n  color: var(--rcx-color-success-100, #e5fbf4);\n}\n\n.rcx-button-group {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.rcx-button-group--wrap {\n  flex-wrap: wrap;\n  margin-bottom: -1rem;\n}\n.rcx-button-group--stretch {\n  justify-content: stretch;\n  align-items: stretch;\n}\n.rcx-button-group--vertical {\n  flex-direction: column;\n}\n.rcx-button-group--align-start {\n  justify-content: flex-start;\n}\n.rcx-button-group--align-center {\n  justify-content: center;\n}\n.rcx-button-group--align-end {\n  justify-content: flex-end;\n}\n\n.rcx-button-group > .rcx-button-group__item {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  margin-inline: 0.5rem;\n}\nhtml:not([dir=\"rtl\"]) .rcx-button-group > .rcx-button-group__item:first-child{\n  margin-left: 0;\n}\n[dir=\"rtl\"] .rcx-button-group > .rcx-button-group__item:first-child{\n  margin-right: 0;\n}\n.rcx-button-group > .rcx-button-group__item:first-child {\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n}\nhtml:not([dir=\"rtl\"]) .rcx-button-group > .rcx-button-group__item:last-child{\n  margin-right: 0;\n}\n[dir=\"rtl\"] .rcx-button-group > .rcx-button-group__item:last-child{\n  margin-left: 0;\n}\n.rcx-button-group > .rcx-button-group__item:last-child {\n  -webkit-margin-end: 0;\n          margin-inline-end: 0;\n}\n.rcx-button-group.rcx-button-group--small > .rcx-button-group__item {\n  margin-left: 0.125rem;\n  margin-right: 0.125rem;\n  margin-inline: 0.125rem;\n}\n.rcx-button-group.rcx-button-group--medium > .rcx-button-group__item {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  margin-inline: 0.25rem;\n}\nhtml:not([dir=\"rtl\"]) .rcx-button-group--wrap > .rcx-button-group__item{\n  margin-left: 0;\n}\n[dir=\"rtl\"] .rcx-button-group--wrap > .rcx-button-group__item{\n  margin-right: 0;\n}\nhtml:not([dir=\"rtl\"]) .rcx-button-group--wrap > .rcx-button-group__item{\n  margin-right: 1rem;\n}\n[dir=\"rtl\"] .rcx-button-group--wrap > .rcx-button-group__item{\n  margin-left: 1rem;\n}\n.rcx-button-group--wrap > .rcx-button-group__item {\n  margin-bottom: 1rem;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n  -webkit-margin-end: 1rem;\n          margin-inline-end: 1rem;\n}\n.rcx-button-group--stretch > .rcx-button-group__item {\n  flex-grow: 1;\n}\n.rcx-button-group--vertical > .rcx-button-group__item {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  margin-block: 0.5rem;\n  margin-left: 0;\n  margin-right: 0;\n  margin-inline: 0;\n}\n.rcx-button-group--vertical > .rcx-button-group__item:first-child {\n  margin-top: 0;\n}\n.rcx-button-group--vertical > .rcx-button-group__item:last-child {\n  margin-bottom: 0;\n}\n\nhtml:not([dir=\"rtl\"]) .rcx-callout{\n  padding-left: 1rem;\n}\n\n[dir=\"rtl\"] .rcx-callout{\n  padding-right: 1rem;\n}\n\nhtml:not([dir=\"rtl\"]) .rcx-callout{\n  padding-right: 2rem;\n}\n\n[dir=\"rtl\"] .rcx-callout{\n  padding-left: 2rem;\n}\n\n.rcx-callout {\n  display: flex;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-block: 1rem;\n  -webkit-padding-start: 1rem;\n          padding-inline-start: 1rem;\n  -webkit-padding-end: 2rem;\n          padding-inline-end: 2rem;\n  border-radius: 0.125rem;\n}\n.rcx-callout--type-info {\n  background-color: #d1ebfe;\n  background-color: var(--rcx-color-info-200, #d1ebfe);\n}\n.rcx-callout--type-success {\n  background-color: #c0f6e4;\n  background-color: var(--rcx-color-success-200, #c0f6e4);\n}\n.rcx-callout--type-warning {\n  background-color: #ffecad;\n  background-color: var(--rcx-color-warning-200, #ffecad);\n}\n.rcx-callout--type-danger {\n  background-color: #fbb5be;\n  background-color: var(--rcx-color-danger-200, #fbb5be);\n}\n\nhtml:not([dir=\"rtl\"]) .rcx-callout__wrapper{\n  margin-left: 0.5rem;\n}\n\n[dir=\"rtl\"] .rcx-callout__wrapper{\n  margin-right: 0.5rem;\n}\n\n.rcx-callout__wrapper {\n  display: flex;\n  overflow: hidden;\n  flex-flow: column nowrap;\n  flex: 1 1 0;\n  -webkit-margin-start: 0.5rem;\n          margin-inline-start: 0.5rem;\n  color: #2f343d;\n  color: var(--rcx-color-foreground-default, #2f343d);\n  letter-spacing: 0rem;\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1rem;\n}\n\n.rcx-callout__title {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n  padding-block: 0.125rem;\n  letter-spacing: 0rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.rcx-callout__children {\n  display: block;\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n  padding-block: 0.125rem;\n}\n\n.rcx-check-box {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  cursor: pointer;\n  outline: 0;\n}\n.rcx-check-box.disabled, .rcx-check-box:disabled {\n  cursor: not-allowed;\n}\n.rcx-check-box__input:disabled + .rcx-check-box__fake, .rcx-check-box.is-disabled .rcx-check-box__input + .rcx-check-box__fake {\n  cursor: not-allowed;\n}\n\n.rcx-check-box__input:indeterminate:disabled + .rcx-check-box__fake, .rcx-check-box.is-disabled .rcx-check-box__input:indeterminate + .rcx-check-box__fake {\n  cursor: not-allowed;\n}\n\n.rcx-check-box__input:checked:disabled + .rcx-check-box__fake, .rcx-check-box.is-disabled .rcx-check-box__input:checked + .rcx-check-box__fake {\n  cursor: not-allowed;\n}\n\n.rcx-check-box__fake {\n  border-radius: 0.125rem;\n  width: 1.25rem;\n}\nhtml:not([dir=\"rtl\"]) .rcx-check-box__fake::before,html:not([dir=\"rtl\"])  .rcx-check-box__fake::after{\n  left: 50%;\n}\n[dir=\"rtl\"] .rcx-check-box__fake::before,[dir=\"rtl\"]  .rcx-check-box__fake::after{\n  right: 50%;\n}\n.rcx-check-box__fake::before, .rcx-check-box__fake::after {\n  position: absolute;\n  top: 50%;\n  inset-inline-start: 50%;\n  display: block;\n  visibility: hidden;\n  content: \"\";\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  background-color: currentColor;\n}\n.rcx-check-box__input:indeterminate + .rcx-check-box__fake::before {\n  visibility: visible;\n  width: 0.75rem;\n  height: 0.125rem;\n  opacity: 1;\n  border-radius: 0.0625rem;\n}\n.rcx-check-box__input:checked + .rcx-check-box__fake::before, .rcx-check-box__input:checked + .rcx-check-box__fake::after {\n  visibility: visible;\n  opacity: 1;\n  border-radius: 0.0625rem;\n}\n.rcx-check-box__input:checked + .rcx-check-box__fake::before {\n  width: 0.75rem;\n  height: 0.125rem;\n  transform: translate(-50%, -50%) translate(-0.25rem, 0.125rem) rotate(-45deg) translate(0.375rem, 0.125rem);\n}\n.rcx-check-box__input:checked + .rcx-check-box__fake::after {\n  width: 0.125rem;\n  height: 0.375rem;\n  transform: translate(-50%, -50%) translate(-0.25rem, 0.125rem) rotate(-45deg);\n}\n\n.rcx-chevron {\n  display: inline-flex;\n}\n.rcx-chevron--up {\n  transform: rotate(-180deg);\n}\n.rcx-chevron--down {\n  transform: rotate(0deg);\n}\n.rcx-chevron--right {\n  transform: rotate(-90deg);\n}\n[dir=\"rtl\"] .rcx-chevron--right {\n  transform: rotate(-270deg);\n}\n.rcx-chevron--left {\n  transform: rotate(-270deg);\n}\n[dir=\"rtl\"] .rcx-chevron--left {\n  transform: rotate(-90deg);\n}\n\n.rcx-chip {\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  min-height: 1.75rem;\n  border-width: 0;\n  cursor: pointer;\n  outline: 0;\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n}\n.rcx-chip.disabled, .rcx-chip:disabled {\n  cursor: not-allowed;\n}\n.rcx-chip.disabled, .rcx-chip:disabled {\n  color: #2f343d;\n  color: var(--rcx-button-colors-secondary-color, var(--rcx-color-neutral-800, #2f343d));\n  border-color: #eeeff1;\n  border-color: var(--rcx-button-colors-secondary-border-color, var(--rcx-color-neutral-300, #eeeff1));\n  background-color: #eeeff1;\n  background-color: var(--rcx-button-colors-secondary-background-color, var(--rcx-color-neutral-300, #eeeff1));\n}\n.rcx-chip__text {\n  white-space: nowrap;\n  letter-spacing: inherit;\n  color: inherit;\n  font: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.rcx-divider {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n  margin-block: 0.5rem;\n  border: 0.0625rem solid #eeeff1;\n  border: 0.0625rem solid var(--rcx-divider-color, var(--rcx-color-neutral-300, #eeeff1));\n}\n\n.rcx-field {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: stretch;\n  width: 100%;\n  margin-top: -0.125rem;\n  margin-bottom: -0.125rem;\n  margin-block: -0.125rem;\n}\n.rcx-field__label {\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.25rem;\n  flex: 1 1 0;\n  align-self: flex-start;\n  margin-top: 0.125rem;\n  margin-bottom: 0.125rem;\n  margin-block: 0.125rem;\n  color: #2f343d;\n  color: var(--rcx-color-foreground-default, #2f343d);\n}\n.rcx-field__description {\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n  margin-top: 0.125rem;\n  margin-bottom: 0.125rem;\n  margin-block: 0.125rem;\n  color: #9ea2a8;\n  color: var(--rcx-color-foreground-hint, #9ea2a8);\n}\n.rcx-field__row {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 0.25rem;\n  margin-bottom: 0.125rem;\n}\nhtml:not([dir=\"rtl\"]) .rcx-field__row .rcx-field__label{\n  padding-left: 0.5rem;\n}\n[dir=\"rtl\"] .rcx-field__row .rcx-field__label{\n  padding-right: 0.5rem;\n}\n.rcx-field__row .rcx-field__label {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n}\n.rcx-field__hint {\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n  margin-top: 0.125rem;\n  margin-bottom: 0.125rem;\n  margin-block: 0.125rem;\n  color: #9ea2a8;\n  color: var(--rcx-color-foreground-hint, #9ea2a8);\n}\n.rcx-field__error {\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n  margin-top: 0.125rem;\n  margin-bottom: 0.125rem;\n  margin-block: 0.125rem;\n  color: #f5455c;\n  color: var(--rcx-color-foreground-danger, #f5455c);\n}\n\n.rcx-field-group {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: stretch;\n  min-width: 0;\n}\n\n.rcx-field-group > .rcx-field-group__item {\n  flex: 0 0 auto;\n  width: 100%;\n}\n.rcx-field-group__item + .rcx-field-group__item {\n  margin-top: 1.5rem;\n}\n\n.rcx-grid {\n  display: flex;\n  flex-flow: row wrap;\n  margin-top: calc(1rem / -2);\n  margin-bottom: calc(1rem / -2);\n  margin-block: calc(1rem / -2);\n  margin-left: calc(1rem / -2);\n  margin-right: calc(1rem / -2);\n  margin-inline: calc(1rem / -2);\n}\n.rcx-grid__wrapper {\n  overflow: hidden;\n}\n.rcx-grid--xs > .rcx-grid {\n  margin-top: calc(1rem / -2);\n  margin-bottom: calc(1rem / -2);\n  margin-block: calc(1rem / -2);\n  margin-left: calc(1rem / -2);\n  margin-right: calc(1rem / -2);\n  margin-inline: calc(1rem / -2);\n}\n@media screen and (min-width: 37.5em) {\n  .rcx-grid {\n    margin-top: calc(1rem / -2);\n    margin-bottom: calc(1rem / -2);\n    margin-block: calc(1rem / -2);\n    margin-left: calc(1rem / -2);\n    margin-right: calc(1rem / -2);\n    margin-inline: calc(1rem / -2);\n  }\n}\n.rcx-grid--sm > .rcx-grid {\n  margin-top: calc(1rem / -2);\n  margin-bottom: calc(1rem / -2);\n  margin-block: calc(1rem / -2);\n  margin-left: calc(1rem / -2);\n  margin-right: calc(1rem / -2);\n  margin-inline: calc(1rem / -2);\n}\n@media screen and (min-width: 48em) {\n  .rcx-grid {\n    margin-top: calc(1.5rem / -2);\n    margin-bottom: calc(1.5rem / -2);\n    margin-block: calc(1.5rem / -2);\n    margin-left: calc(1.5rem / -2);\n    margin-right: calc(1.5rem / -2);\n    margin-inline: calc(1.5rem / -2);\n  }\n}\n.rcx-grid--md > .rcx-grid {\n  margin-top: calc(1.5rem / -2);\n  margin-bottom: calc(1.5rem / -2);\n  margin-block: calc(1.5rem / -2);\n  margin-left: calc(1.5rem / -2);\n  margin-right: calc(1.5rem / -2);\n  margin-inline: calc(1.5rem / -2);\n}\n@media screen and (min-width: 64em) {\n  .rcx-grid {\n    margin-top: calc(1.5rem / -2);\n    margin-bottom: calc(1.5rem / -2);\n    margin-block: calc(1.5rem / -2);\n    margin-left: calc(1.5rem / -2);\n    margin-right: calc(1.5rem / -2);\n    margin-inline: calc(1.5rem / -2);\n  }\n}\n.rcx-grid--lg > .rcx-grid {\n  margin-top: calc(1.5rem / -2);\n  margin-bottom: calc(1.5rem / -2);\n  margin-block: calc(1.5rem / -2);\n  margin-left: calc(1.5rem / -2);\n  margin-right: calc(1.5rem / -2);\n  margin-inline: calc(1.5rem / -2);\n}\n@media screen and (min-width: 90em) {\n  .rcx-grid {\n    margin-top: calc(1.5rem / -2);\n    margin-bottom: calc(1.5rem / -2);\n    margin-block: calc(1.5rem / -2);\n    margin-left: calc(1.5rem / -2);\n    margin-right: calc(1.5rem / -2);\n    margin-inline: calc(1.5rem / -2);\n  }\n}\n.rcx-grid--xl > .rcx-grid {\n  margin-top: calc(1.5rem / -2);\n  margin-bottom: calc(1.5rem / -2);\n  margin-block: calc(1.5rem / -2);\n  margin-left: calc(1.5rem / -2);\n  margin-right: calc(1.5rem / -2);\n  margin-inline: calc(1.5rem / -2);\n}\n\n.rcx-grid__item {\n  flex: 1 1 0;\n  padding-top: calc(1rem / 2);\n  padding-bottom: calc(1rem / 2);\n  padding-block: calc(1rem / 2);\n  padding-left: calc(1rem / 2);\n  padding-right: calc(1rem / 2);\n  padding-inline: calc(1rem / 2);\n}\n.rcx-grid__item--xs-1 {\n  flex-grow: 0;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n.rcx-grid__item--xs-2 {\n  flex-grow: 0;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n.rcx-grid__item--xs-3 {\n  flex-grow: 0;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n.rcx-grid__item--xs-4 {\n  flex-grow: 0;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n.rcx-grid--xs > .rcx-grid__item {\n  padding-top: calc(1rem / 2);\n  padding-bottom: calc(1rem / 2);\n  padding-block: calc(1rem / 2);\n  padding-left: calc(1rem / 2);\n  padding-right: calc(1rem / 2);\n  padding-inline: calc(1rem / 2);\n}\n.rcx-grid--xs > .rcx-grid__item--xs-1 {\n  flex-grow: 0;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n.rcx-grid--xs > .rcx-grid__item--xs-2 {\n  flex-grow: 0;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n.rcx-grid--xs > .rcx-grid__item--xs-3 {\n  flex-grow: 0;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n.rcx-grid--xs > .rcx-grid__item--xs-4 {\n  flex-grow: 0;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n@media screen and (min-width: 37.5em) {\n  .rcx-grid__item {\n    padding-top: calc(1rem / 2);\n    padding-bottom: calc(1rem / 2);\n    padding-block: calc(1rem / 2);\n    padding-left: calc(1rem / 2);\n    padding-right: calc(1rem / 2);\n    padding-inline: calc(1rem / 2);\n  }\n  .rcx-grid__item--sm-1 {\n    flex-grow: 0;\n    flex-basis: 12.5%;\n    max-width: 12.5%;\n  }\n  .rcx-grid__item--sm-2 {\n    flex-grow: 0;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  .rcx-grid__item--sm-3 {\n    flex-grow: 0;\n    flex-basis: 37.5%;\n    max-width: 37.5%;\n  }\n  .rcx-grid__item--sm-4 {\n    flex-grow: 0;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  .rcx-grid__item--sm-5 {\n    flex-grow: 0;\n    flex-basis: 62.5%;\n    max-width: 62.5%;\n  }\n  .rcx-grid__item--sm-6 {\n    flex-grow: 0;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  .rcx-grid__item--sm-7 {\n    flex-grow: 0;\n    flex-basis: 87.5%;\n    max-width: 87.5%;\n  }\n  .rcx-grid__item--sm-8 {\n    flex-grow: 0;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n}\n.rcx-grid--sm > .rcx-grid__item {\n  padding-top: calc(1rem / 2);\n  padding-bottom: calc(1rem / 2);\n  padding-block: calc(1rem / 2);\n  padding-left: calc(1rem / 2);\n  padding-right: calc(1rem / 2);\n  padding-inline: calc(1rem / 2);\n}\n.rcx-grid--sm > .rcx-grid__item--sm-1 {\n  flex-grow: 0;\n  flex-basis: 12.5%;\n  max-width: 12.5%;\n}\n.rcx-grid--sm > .rcx-grid__item--sm-2 {\n  flex-grow: 0;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n.rcx-grid--sm > .rcx-grid__item--sm-3 {\n  flex-grow: 0;\n  flex-basis: 37.5%;\n  max-width: 37.5%;\n}\n.rcx-grid--sm > .rcx-grid__item--sm-4 {\n  flex-grow: 0;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n.rcx-grid--sm > .rcx-grid__item--sm-5 {\n  flex-grow: 0;\n  flex-basis: 62.5%;\n  max-width: 62.5%;\n}\n.rcx-grid--sm > .rcx-grid__item--sm-6 {\n  flex-grow: 0;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n.rcx-grid--sm > .rcx-grid__item--sm-7 {\n  flex-grow: 0;\n  flex-basis: 87.5%;\n  max-width: 87.5%;\n}\n.rcx-grid--sm > .rcx-grid__item--sm-8 {\n  flex-grow: 0;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n@media screen and (min-width: 48em) {\n  .rcx-grid__item {\n    padding-top: calc(1.5rem / 2);\n    padding-bottom: calc(1.5rem / 2);\n    padding-block: calc(1.5rem / 2);\n    padding-left: calc(1.5rem / 2);\n    padding-right: calc(1.5rem / 2);\n    padding-inline: calc(1.5rem / 2);\n  }\n  .rcx-grid__item--md-1 {\n    flex-grow: 0;\n    flex-basis: 12.5%;\n    max-width: 12.5%;\n  }\n  .rcx-grid__item--md-2 {\n    flex-grow: 0;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  .rcx-grid__item--md-3 {\n    flex-grow: 0;\n    flex-basis: 37.5%;\n    max-width: 37.5%;\n  }\n  .rcx-grid__item--md-4 {\n    flex-grow: 0;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  .rcx-grid__item--md-5 {\n    flex-grow: 0;\n    flex-basis: 62.5%;\n    max-width: 62.5%;\n  }\n  .rcx-grid__item--md-6 {\n    flex-grow: 0;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  .rcx-grid__item--md-7 {\n    flex-grow: 0;\n    flex-basis: 87.5%;\n    max-width: 87.5%;\n  }\n  .rcx-grid__item--md-8 {\n    flex-grow: 0;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n}\n.rcx-grid--md > .rcx-grid__item {\n  padding-top: calc(1.5rem / 2);\n  padding-bottom: calc(1.5rem / 2);\n  padding-block: calc(1.5rem / 2);\n  padding-left: calc(1.5rem / 2);\n  padding-right: calc(1.5rem / 2);\n  padding-inline: calc(1.5rem / 2);\n}\n.rcx-grid--md > .rcx-grid__item--md-1 {\n  flex-grow: 0;\n  flex-basis: 12.5%;\n  max-width: 12.5%;\n}\n.rcx-grid--md > .rcx-grid__item--md-2 {\n  flex-grow: 0;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n.rcx-grid--md > .rcx-grid__item--md-3 {\n  flex-grow: 0;\n  flex-basis: 37.5%;\n  max-width: 37.5%;\n}\n.rcx-grid--md > .rcx-grid__item--md-4 {\n  flex-grow: 0;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n.rcx-grid--md > .rcx-grid__item--md-5 {\n  flex-grow: 0;\n  flex-basis: 62.5%;\n  max-width: 62.5%;\n}\n.rcx-grid--md > .rcx-grid__item--md-6 {\n  flex-grow: 0;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n.rcx-grid--md > .rcx-grid__item--md-7 {\n  flex-grow: 0;\n  flex-basis: 87.5%;\n  max-width: 87.5%;\n}\n.rcx-grid--md > .rcx-grid__item--md-8 {\n  flex-grow: 0;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n@media screen and (min-width: 64em) {\n  .rcx-grid__item {\n    padding-top: calc(1.5rem / 2);\n    padding-bottom: calc(1.5rem / 2);\n    padding-block: calc(1.5rem / 2);\n    padding-left: calc(1.5rem / 2);\n    padding-right: calc(1.5rem / 2);\n    padding-inline: calc(1.5rem / 2);\n  }\n  .rcx-grid__item--lg-1 {\n    flex-grow: 0;\n    flex-basis: 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  .rcx-grid__item--lg-2 {\n    flex-grow: 0;\n    flex-basis: 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  .rcx-grid__item--lg-3 {\n    flex-grow: 0;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  .rcx-grid__item--lg-4 {\n    flex-grow: 0;\n    flex-basis: 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  .rcx-grid__item--lg-5 {\n    flex-grow: 0;\n    flex-basis: 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  .rcx-grid__item--lg-6 {\n    flex-grow: 0;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  .rcx-grid__item--lg-7 {\n    flex-grow: 0;\n    flex-basis: 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  .rcx-grid__item--lg-8 {\n    flex-grow: 0;\n    flex-basis: 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  .rcx-grid__item--lg-9 {\n    flex-grow: 0;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  .rcx-grid__item--lg-10 {\n    flex-grow: 0;\n    flex-basis: 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  .rcx-grid__item--lg-11 {\n    flex-grow: 0;\n    flex-basis: 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  .rcx-grid__item--lg-12 {\n    flex-grow: 0;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n}\n.rcx-grid--lg > .rcx-grid__item {\n  padding-top: calc(1.5rem / 2);\n  padding-bottom: calc(1.5rem / 2);\n  padding-block: calc(1.5rem / 2);\n  padding-left: calc(1.5rem / 2);\n  padding-right: calc(1.5rem / 2);\n  padding-inline: calc(1.5rem / 2);\n}\n.rcx-grid--lg > .rcx-grid__item--lg-1 {\n  flex-grow: 0;\n  flex-basis: 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.rcx-grid--lg > .rcx-grid__item--lg-2 {\n  flex-grow: 0;\n  flex-basis: 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.rcx-grid--lg > .rcx-grid__item--lg-3 {\n  flex-grow: 0;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n.rcx-grid--lg > .rcx-grid__item--lg-4 {\n  flex-grow: 0;\n  flex-basis: 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.rcx-grid--lg > .rcx-grid__item--lg-5 {\n  flex-grow: 0;\n  flex-basis: 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.rcx-grid--lg > .rcx-grid__item--lg-6 {\n  flex-grow: 0;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n.rcx-grid--lg > .rcx-grid__item--lg-7 {\n  flex-grow: 0;\n  flex-basis: 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.rcx-grid--lg > .rcx-grid__item--lg-8 {\n  flex-grow: 0;\n  flex-basis: 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.rcx-grid--lg > .rcx-grid__item--lg-9 {\n  flex-grow: 0;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n.rcx-grid--lg > .rcx-grid__item--lg-10 {\n  flex-grow: 0;\n  flex-basis: 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.rcx-grid--lg > .rcx-grid__item--lg-11 {\n  flex-grow: 0;\n  flex-basis: 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.rcx-grid--lg > .rcx-grid__item--lg-12 {\n  flex-grow: 0;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n@media screen and (min-width: 90em) {\n  .rcx-grid__item {\n    padding-top: calc(1.5rem / 2);\n    padding-bottom: calc(1.5rem / 2);\n    padding-block: calc(1.5rem / 2);\n    padding-left: calc(1.5rem / 2);\n    padding-right: calc(1.5rem / 2);\n    padding-inline: calc(1.5rem / 2);\n  }\n  .rcx-grid__item--xl-1 {\n    flex-grow: 0;\n    flex-basis: 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  .rcx-grid__item--xl-2 {\n    flex-grow: 0;\n    flex-basis: 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  .rcx-grid__item--xl-3 {\n    flex-grow: 0;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  .rcx-grid__item--xl-4 {\n    flex-grow: 0;\n    flex-basis: 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  .rcx-grid__item--xl-5 {\n    flex-grow: 0;\n    flex-basis: 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  .rcx-grid__item--xl-6 {\n    flex-grow: 0;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  .rcx-grid__item--xl-7 {\n    flex-grow: 0;\n    flex-basis: 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  .rcx-grid__item--xl-8 {\n    flex-grow: 0;\n    flex-basis: 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  .rcx-grid__item--xl-9 {\n    flex-grow: 0;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  .rcx-grid__item--xl-10 {\n    flex-grow: 0;\n    flex-basis: 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  .rcx-grid__item--xl-11 {\n    flex-grow: 0;\n    flex-basis: 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  .rcx-grid__item--xl-12 {\n    flex-grow: 0;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n}\n.rcx-grid--xl > .rcx-grid__item {\n  padding-top: calc(1.5rem / 2);\n  padding-bottom: calc(1.5rem / 2);\n  padding-block: calc(1.5rem / 2);\n  padding-left: calc(1.5rem / 2);\n  padding-right: calc(1.5rem / 2);\n  padding-inline: calc(1.5rem / 2);\n}\n.rcx-grid--xl > .rcx-grid__item--xl-1 {\n  flex-grow: 0;\n  flex-basis: 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n.rcx-grid--xl > .rcx-grid__item--xl-2 {\n  flex-grow: 0;\n  flex-basis: 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n.rcx-grid--xl > .rcx-grid__item--xl-3 {\n  flex-grow: 0;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n.rcx-grid--xl > .rcx-grid__item--xl-4 {\n  flex-grow: 0;\n  flex-basis: 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n.rcx-grid--xl > .rcx-grid__item--xl-5 {\n  flex-grow: 0;\n  flex-basis: 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n.rcx-grid--xl > .rcx-grid__item--xl-6 {\n  flex-grow: 0;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n.rcx-grid--xl > .rcx-grid__item--xl-7 {\n  flex-grow: 0;\n  flex-basis: 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n.rcx-grid--xl > .rcx-grid__item--xl-8 {\n  flex-grow: 0;\n  flex-basis: 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n.rcx-grid--xl > .rcx-grid__item--xl-9 {\n  flex-grow: 0;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n.rcx-grid--xl > .rcx-grid__item--xl-10 {\n  flex-grow: 0;\n  flex-basis: 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n.rcx-grid--xl > .rcx-grid__item--xl-11 {\n  flex-grow: 0;\n  flex-basis: 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n.rcx-grid--xl > .rcx-grid__item--xl-12 {\n  flex-grow: 0;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n.rcx-icon {\n  display: inline-block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  letter-spacing: 0;\n  font-family: \"RocketChat\";\n  font-size: inherit;\n  font-weight: 400;\n  font-style: normal;\n  font-variant: normal;\n  line-height: 1;\n  text-rendering: auto;\n}\n\n.rcx-input-box__wrapper,\n.rcx-select,\n.rcx-autocomplete {\n  position: relative;\n  display: inline-flex;\n  flex-flow: row nowrap;\n  align-items: flex-start;\n  flex: 1 0 auto;\n  min-width: 8rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-block: 0.5rem;\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n  padding-inline: 0.875rem;\n  vertical-align: baseline;\n  word-break: break-all;\n  outline: 0;\n}\n*:disabled .rcx-input-box__wrapper, .rcx-input-box__wrapper:disabled, .rcx-input-box__wrapper.disabled,\n*:disabled .rcx-select,\n*:disabled .rcx-autocomplete,\n.rcx-select:disabled,\n.rcx-autocomplete:disabled,\n.disabled.rcx-select,\n.disabled.rcx-autocomplete {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.rcx-input-box__addon, .rcx-select__addon {\n  cursor: pointer;\n  outline: 0;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: flex-start;\n  flex: 0 0 auto;\n}\n.rcx-input-box__addon.disabled, .disabled.rcx-select__addon, .rcx-input-box__addon:disabled, .rcx-select__addon:disabled {\n  cursor: not-allowed;\n}\n\n.rcx-input-box {\n  position: relative;\n  display: inline-flex;\n  flex: 1 0 auto;\n  min-width: 8rem;\n  -webkit-user-select: initial;\n     -moz-user-select: initial;\n      -ms-user-select: initial;\n          user-select: initial;\n  vertical-align: baseline;\n  white-space: nowrap;\n  word-break: break-all;\n  outline: 0;\n  background-color: transparent;\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #2f343d;\n  color: var(--rcx-input-colors-color, var(--rcx-color-neutral-800, #2f343d));\n}\n.rcx-input-box--type-textarea {\n  overflow: auto;\n  resize: none;\n  vertical-align: middle;\n}\n.rcx-input-box--type-select {\n  overflow: auto;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.rcx-input-box--type-select.rcx-input-box--multiple {\n  vertical-align: middle;\n}\n.rcx-input-box:not(.rcx-input-box--undecorated) {\n  min-width: 8rem;\n  min-height: 2.5rem;\n  padding: 0.5rem 0.875rem;\n}\n.rcx-input-box.rcx-input-box--placeholder-visible {\n  color: #9ea2a8;\n  color: var(--rcx-input-colors-placeholder-color, var(--rcx-color-neutral-600, #9ea2a8));\n}\n.rcx-input-box:focus, .rcx-input-box.focus {\n  caret-color: #1d74f5;\n  caret-color: var(--rcx-input-colors-focus-caret-color, var(--rcx-color-primary-500, #1d74f5));\n}\n.rcx-input-box:active, .rcx-input-box.active {\n  caret-color: #9ea2a8;\n  caret-color: var(--rcx-input-colors-active-caret-color, var(--rcx-color-neutral-600, #9ea2a8));\n}\n*:disabled .rcx-input-box, .rcx-input-box:disabled, .rcx-input-box.disabled {\n  color: #2f343d;\n  color: var(--rcx-input-colors-disabled-color, var(--rcx-color-neutral-800, #2f343d));\n}\n.rcx-input-box:invalid, .rcx-input-box.invalid {\n  color: #f5455c;\n  color: var(--rcx-input-colors-invalid-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-input-box:invalid.rcx-input-box--placeholder-visible, .rcx-input-box.invalid.rcx-input-box--placeholder-visible {\n  color: #9ea2a8;\n  color: var(--rcx-input-colors-invalid-placeholder-color, var(--rcx-color-neutral-600, #9ea2a8));\n}\n.rcx-input-box:invalid:focus, .rcx-input-box:invalid.focus, .rcx-input-box.invalid:focus, .rcx-input-box.invalid.focus {\n  caret-color: #f5455c;\n  caret-color: var(--rcx-input-colors-invalid-focus-caret-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-input-box:invalid:active, .rcx-input-box:invalid.active, .rcx-input-box.invalid:active, .rcx-input-box.invalid.active {\n  caret-color: #9ea2a8;\n  caret-color: var(--rcx-input-colors-invalid-active-caret-color, var(--rcx-color-neutral-600, #9ea2a8));\n}\n*:disabled .rcx-input-box:invalid, .rcx-input-box:invalid:disabled, .rcx-input-box:invalid.disabled, *:disabled .rcx-input-box.invalid, .rcx-input-box.invalid:disabled, .rcx-input-box.invalid.disabled {\n  color: #2f343d;\n  color: var(--rcx-input-colors-invalid-disabled-color, var(--rcx-color-neutral-800, #2f343d));\n}\n.rcx-input-box:invalid + .rcx-input-box__addon, .rcx-input-box:invalid + .rcx-select__addon, .rcx-input-box.invalid + .rcx-input-box__addon, .rcx-input-box.invalid + .rcx-select__addon {\n  color: #f5455c;\n  color: var(--rcx-input-colors-invalid-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-input-box__wrapper.focus > .rcx-input-box:invalid, .rcx-input-box__wrapper.focus > .rcx-input-box.invalid {\n  caret-color: #f5455c;\n  caret-color: var(--rcx-input-colors-invalid-focus-caret-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-input-box:invalid:focus + .rcx-input-box__addon, .rcx-input-box:invalid:focus + .rcx-select__addon, .rcx-input-box:invalid.focus + .rcx-input-box__addon, .rcx-input-box:invalid.focus + .rcx-select__addon, .rcx-input-box__wrapper.focus > .rcx-input-box:invalid + .rcx-input-box__addon, .rcx-input-box__wrapper.focus > .rcx-input-box:invalid + .rcx-select__addon, .rcx-input-box.invalid:focus + .rcx-input-box__addon, .rcx-input-box.invalid:focus + .rcx-select__addon, .rcx-input-box.invalid.focus + .rcx-input-box__addon, .rcx-input-box.invalid.focus + .rcx-select__addon, .rcx-input-box__wrapper.focus > .rcx-input-box.invalid + .rcx-input-box__addon, .rcx-input-box__wrapper.focus > .rcx-input-box.invalid + .rcx-select__addon {\n  color: #f5455c;\n  color: var(--rcx-input-colors-invalid-focus-icon-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-input-box__wrapper.disabled > .rcx-input-box:invalid, .rcx-input-box__wrapper.disabled > .rcx-input-box.invalid {\n  color: #2f343d;\n  color: var(--rcx-input-colors-invalid-disabled-color, var(--rcx-color-neutral-800, #2f343d));\n}\n*:disabled .rcx-input-box:invalid + .rcx-input-box__addon, *:disabled .rcx-input-box:invalid + .rcx-select__addon, .rcx-input-box:invalid:disabled + .rcx-input-box__addon, .rcx-input-box:invalid:disabled + .rcx-select__addon, .rcx-input-box:invalid.disabled + .rcx-input-box__addon, .rcx-input-box:invalid.disabled + .rcx-select__addon, .rcx-input-box__wrapper.disabled > .rcx-input-box:invalid + .rcx-input-box__addon, .rcx-input-box__wrapper.disabled > .rcx-input-box:invalid + .rcx-select__addon, *:disabled .rcx-input-box.invalid + .rcx-input-box__addon, *:disabled .rcx-input-box.invalid + .rcx-select__addon, .rcx-input-box.invalid:disabled + .rcx-input-box__addon, .rcx-input-box.invalid:disabled + .rcx-select__addon, .rcx-input-box.invalid.disabled + .rcx-input-box__addon, .rcx-input-box.invalid.disabled + .rcx-select__addon, .rcx-input-box__wrapper.disabled > .rcx-input-box.invalid + .rcx-input-box__addon, .rcx-input-box__wrapper.disabled > .rcx-input-box.invalid + .rcx-select__addon {\n  color: #2f343d;\n  color: var(--rcx-input-colors-invalid-disabled-color, var(--rcx-color-neutral-800, #2f343d));\n}\n*:disabled .rcx-input-box, .rcx-input-box:disabled, .rcx-input-box.disabled {\n  cursor: not-allowed;\n}\n.rcx-input-box + .rcx-input-box__addon, .rcx-input-box + .rcx-select__addon {\n  color: #2f343d;\n  color: var(--rcx-input-colors-color, var(--rcx-color-neutral-800, #2f343d));\n}\n.rcx-input-box__wrapper.focus > .rcx-input-box {\n  caret-color: #1d74f5;\n  caret-color: var(--rcx-input-colors-focus-caret-color, var(--rcx-color-primary-500, #1d74f5));\n}\n.rcx-input-box:focus + .rcx-input-box__addon, .rcx-input-box:focus + .rcx-select__addon, .rcx-input-box.focus + .rcx-input-box__addon, .rcx-input-box.focus + .rcx-select__addon, .rcx-input-box__wrapper.focus > .rcx-input-box + .rcx-input-box__addon, .rcx-input-box__wrapper.focus > .rcx-input-box + .rcx-select__addon {\n  color: #1d74f5;\n  color: var(--rcx-input-colors-focus-icon-color, var(--rcx-color-primary-500, #1d74f5));\n}\n.rcx-input-box__wrapper.disabled > .rcx-input-box {\n  color: #2f343d;\n  color: var(--rcx-input-colors-disabled-color, var(--rcx-color-neutral-800, #2f343d));\n}\n*:disabled .rcx-input-box + .rcx-input-box__addon, *:disabled .rcx-input-box + .rcx-select__addon, .rcx-input-box:disabled + .rcx-input-box__addon, .rcx-input-box:disabled + .rcx-select__addon, .rcx-input-box.disabled + .rcx-input-box__addon, .rcx-input-box.disabled + .rcx-select__addon, .rcx-input-box__wrapper.disabled > .rcx-input-box + .rcx-input-box__addon, .rcx-input-box__wrapper.disabled > .rcx-input-box + .rcx-select__addon {\n  color: #2f343d;\n  color: var(--rcx-input-colors-disabled-color, var(--rcx-color-neutral-800, #2f343d));\n}\n*:disabled .rcx-input-box + .rcx-input-box__addon, *:disabled .rcx-input-box + .rcx-select__addon, .rcx-input-box:disabled + .rcx-input-box__addon, .rcx-input-box:disabled + .rcx-select__addon, .rcx-input-box.disabled + .rcx-input-box__addon, .rcx-input-box.disabled + .rcx-select__addon {\n  pointer-events: none;\n}\n.rcx-input-box__wrapper > .rcx-input-box {\n  width: 0;\n  min-width: 0;\n}\n\n.rcx-input-box__placeholder {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n  color: #9ea2a8;\n  color: var(--rcx-input-colors-placeholder-color, var(--rcx-color-neutral-600, #9ea2a8));\n}\n\n.rcx-input-box__option {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n  color: #2f343d;\n  color: var(--rcx-input-colors-color, var(--rcx-color-neutral-800, #2f343d));\n}\n\n.rcx-skeleton__input {\n  display: inline-flex;\n  flex: 1 0 0;\n  min-width: 8rem;\n  min-height: 2.5rem;\n  padding: 0.625rem 0.875rem;\n  vertical-align: baseline;\n  color: #2f343d;\n  color: var(--rcx-input-colors-color, var(--rcx-color-neutral-800, #2f343d));\n  border-width: 0.125rem;\n  border-color: #cbced1;\n  border-color: var(--rcx-input-colors-border-color, var(--rcx-color-neutral-500, #cbced1));\n  border-radius: 0.125rem;\n  background-color: white;\n  background-color: var(--rcx-input-colors-background-color, var(--rcx-color-surface, white));\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.rcx-label {\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.25rem;\n  color: #2f343d;\n  color: var(--rcx-color-foreground-default, #2f343d);\n}\n.rcx-label--disabled {\n  pointer-events: none;\n  color: #9ea2a8;\n  color: var(--rcx-color-foreground-hint, #9ea2a8);\n}\n.rcx-label--required::before {\n  content: \"* \";\n  color: #f5455c;\n  color: var(--rcx-color-foreground-danger, #f5455c);\n}\n\n.rcx-modal {\n  position: static;\n  width: 100%;\n  max-height: 100%;\n  margin: auto;\n  background: none;\n}\n.rcx-modal__inner {\n  min-width: 0;\n}\n.rcx-modal__title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.rcx-modal__backdrop {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  inset: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(47, 52, 61, 0.5);\n  background-color: var(--rcx-color-neutral-800-50, rgba(47, 52, 61, 0.5));\n}\n@media screen and (min-width: 37.5em) {\n  .rcx-modal {\n    max-width: 40rem;\n    padding: 1rem;\n  }\n}\n\n.rcx-option {\n  cursor: pointer;\n  outline: 0;\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.25rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0.25rem 1rem;\n  list-style: none;\n  white-space: nowrap;\n}\n.rcx-option.disabled, .rcx-option:disabled {\n  cursor: not-allowed;\n}\n.rcx-option:hover, .rcx-option--focus {\n  background: #e4e7ea;\n  background: var(--rcx-color-neutral-400, #e4e7ea);\n}\n.rcx-option--selected {\n  background: #cbced1;\n  background: var(--rcx-color-neutral-500, #cbced1);\n}\n\n.rcx-options:hover .rcx-option--focus:not(.rcx-option--selected):not(:hover) {\n  background: initial;\n}\n\n.rcx-pagination {\n  display: flex;\n  flex-flow: column-reverse nowrap;\n  align-items: center;\n  padding: 0.75rem 1.5rem;\n}\n@media screen and (min-width: 37.5em) {\n  .rcx-pagination {\n    flex-direction: column;\n  }\n}\n@media screen and (min-width: 48em) {\n  .rcx-pagination {\n    flex-direction: row;\n  }\n}\n.rcx-pagination--divider {\n  position: relative;\n}\n.rcx-pagination--divider::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  content: \"\";\n  border-radius: 0.125rem;\n  background-color: #eeeff1;\n  background-color: var(--rcx-color-neutral-300, #eeeff1);\n}\n\n.rcx-pagination__left,\n.rcx-pagination__right {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  flex: 0 1 auto;\n}\n\nhtml:not([dir=\"rtl\"]) .rcx-pagination__left{\n  margin-left: 0;\n}\n\n[dir=\"rtl\"] .rcx-pagination__left{\n  margin-right: 0;\n}\n\n.rcx-pagination__left {\n  justify-content: center;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n}\n@media screen and (min-width: 37.5em) {\n  html:not([dir=\"rtl\"]) .rcx-pagination__left{\n    margin-left: auto;\n  }\n  [dir=\"rtl\"] .rcx-pagination__left{\n    margin-right: auto;\n  }\n  .rcx-pagination__left {\n    -webkit-margin-start: auto;\n            margin-inline-start: auto;\n  }\n}\n@media screen and (min-width: 48em) {\n  html:not([dir=\"rtl\"]) .rcx-pagination__left{\n    margin-left: 0;\n  }\n  [dir=\"rtl\"] .rcx-pagination__left{\n    margin-right: 0;\n  }\n  html:not([dir=\"rtl\"]) .rcx-pagination__left{\n    margin-right: auto;\n  }\n  [dir=\"rtl\"] .rcx-pagination__left{\n    margin-left: auto;\n  }\n  .rcx-pagination__left {\n    -webkit-margin-start: 0;\n            margin-inline-start: 0;\n    -webkit-margin-end: auto;\n            margin-inline-end: auto;\n  }\n}\n\nhtml:not([dir=\"rtl\"]) .rcx-pagination__right{\n  margin-left: 0;\n}\n\n[dir=\"rtl\"] .rcx-pagination__right{\n  margin-right: 0;\n}\n\n.rcx-pagination__right {\n  flex-flow: column nowrap;\n  align-items: center;\n  -webkit-margin-start: 0;\n          margin-inline-start: 0;\n}\n@media screen and (min-width: 37.5em) {\n  html:not([dir=\"rtl\"]) .rcx-pagination__right{\n    margin-left: auto;\n  }\n  [dir=\"rtl\"] .rcx-pagination__right{\n    margin-right: auto;\n  }\n  .rcx-pagination__right {\n    flex-flow: row nowrap;\n    align-items: center;\n    -webkit-margin-start: auto;\n            margin-inline-start: auto;\n  }\n}\n\n.rcx-pagination__label {\n  letter-spacing: 0rem;\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1rem;\n  color: #9ea2a8;\n  color: var(--rcx-color-foreground-hint, #9ea2a8);\n}\n\n.rcx-pagination__list {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  margin-inline: 0.25rem;\n}\n\n.rcx-pagination__list-item {\n  letter-spacing: 0rem;\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1rem;\n  display: flex;\n  margin-left: 0.125rem;\n  margin-right: 0.125rem;\n  margin-inline: 0.125rem;\n  padding: 0.25rem;\n  color: #9ea2a8;\n  color: var(--rcx-color-foreground-hint, #9ea2a8);\n}\n\n.rcx-pagination__link {\n  letter-spacing: 0rem;\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1rem;\n  cursor: pointer;\n  outline: 0;\n  display: inline-flex;\n  color: #1d74f5;\n  color: var(--rcx-color-foreground-link, #1d74f5);\n  background: transparent;\n}\n.rcx-pagination__link.disabled, .rcx-pagination__link:disabled {\n  cursor: not-allowed;\n}\n.rcx-pagination__link:hover:not(.disabled):not(:disabled), .rcx-pagination__link:focus:not(.disabled):not(:disabled) {\n  text-decoration: underline;\n}\n.rcx-pagination__link.disabled, .rcx-pagination__link:disabled {\n  letter-spacing: 0rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1rem;\n  cursor: default;\n  color: #2f343d;\n  color: var(--rcx-color-foreground-default, #2f343d);\n}\n\n.rcx-pagination__back,\n.rcx-pagination__forward {\n  letter-spacing: 0rem;\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1rem;\n  cursor: pointer;\n  outline: 0;\n  display: inline-flex;\n  color: #1d74f5;\n  color: var(--rcx-color-foreground-link, #1d74f5);\n  background: transparent;\n}\n.rcx-pagination__back.disabled, .rcx-pagination__back:disabled,\n.rcx-pagination__forward.disabled,\n.rcx-pagination__forward:disabled {\n  cursor: not-allowed;\n}\n.rcx-pagination__back.disabled, .rcx-pagination__back:disabled,\n.rcx-pagination__forward.disabled,\n.rcx-pagination__forward:disabled {\n  color: #e4e7ea;\n  color: var(--rcx-color-foreground-disabled, #e4e7ea);\n}\n\n.rcx-status-bullet {\n  display: inline-block;\n  flex-grow: 0;\n  flex-shrink: 0;\n  border-radius: 9999px;\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='5' stroke='%239EA2A8' stroke-width='2' stroke-dasharray='2 2'/%3E%3C/svg%3E\") top left/contain no-repeat;\n  background: var(--rcx-status-bullet-loading-background, url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='5' stroke='%239EA2A8' stroke-width='2' stroke-dasharray='2 2'/%3E%3C/svg%3E\") top left/contain no-repeat);\n  background-size: contain;\n  width: 0.75rem;\n  height: 0.75rem;\n}\n.rcx-status-bullet--small {\n  width: 0.625rem;\n  height: 0.625rem;\n}\n.rcx-status-bullet--online {\n  background: #2de0a5;\n  background: var(--rcx-status-bullet-online-background-color, var(--rcx-color-foreground-success, #2de0a5));\n}\n.rcx-status-bullet--away {\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='%23F3BE08'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6 1.66699C6.46024 1.66699 6.83333 2.04009 6.83333 2.50033V5.59981L9.02058 7.3496C9.37996 7.63711 9.43823 8.16152 9.15072 8.52091C8.86321 8.88029 8.3388 8.93856 7.97942 8.65105L5.16667 6.40085V2.50033C5.16667 2.04009 5.53976 1.66699 6 1.66699Z' fill='white'/%3E%3C/svg%3E\") top left/contain no-repeat;\n  background: var(--rcx-status-bullet-away-background, url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='6' fill='%23F3BE08'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6 1.66699C6.46024 1.66699 6.83333 2.04009 6.83333 2.50033V5.59981L9.02058 7.3496C9.37996 7.63711 9.43823 8.16152 9.15072 8.52091C8.86321 8.88029 8.3388 8.93856 7.97942 8.65105L5.16667 6.40085V2.50033C5.16667 2.04009 5.53976 1.66699 6 1.66699Z' fill='white'/%3E%3C/svg%3E\") top left/contain no-repeat);\n}\n.rcx-status-bullet--busy {\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z' fill='%23F5455C'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.16667 5.99967C3.16667 5.53944 3.53977 5.16634 4 5.16634L8 5.16634C8.46024 5.16634 8.83334 5.53944 8.83334 5.99967C8.83334 6.45991 8.46024 6.83301 8 6.83301L4 6.83301C3.53977 6.83301 3.16667 6.45991 3.16667 5.99967Z' fill='white'/%3E%3C/svg%3E\") top left/contain no-repeat;\n  background: var(--rcx-status-bullet-busy-background, url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z' fill='%23F5455C'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.16667 5.99967C3.16667 5.53944 3.53977 5.16634 4 5.16634L8 5.16634C8.46024 5.16634 8.83334 5.53944 8.83334 5.99967C8.83334 6.45991 8.46024 6.83301 8 6.83301L4 6.83301C3.53977 6.83301 3.16667 6.45991 3.16667 5.99967Z' fill='white'/%3E%3C/svg%3E\") top left/contain no-repeat);\n}\n.rcx-status-bullet--offline {\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='5' stroke='%239EA2A8' stroke-width='2'/%3E%3C/svg%3E\") top left/contain no-repeat;\n  background: var(--rcx-status-bullet-offline-background, url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='6' cy='6' r='5' stroke='%239EA2A8' stroke-width='2'/%3E%3C/svg%3E\") top left/contain no-repeat);\n}\n\n.rcx-progress-bar {\n  display: block;\n  width: 100%;\n  height: 8px;\n  border-radius: 0.125rem;\n  background-color: #e4e7ea;\n  background-color: var(--rcx-progress-bar-color-background, var(--rcx-color-neutral-400-100, #e4e7ea));\n}\n\n.rcx-progress-bar__fill {\n  display: block;\n  height: 8px;\n  border-radius: 0.125rem;\n}\n.rcx-progress-bar__fill--type-primary {\n  background-color: #d1ebfe;\n  background-color: var(--rcx-progress-bar-color-primary, var(--rcx-color-primary-200, #d1ebfe));\n}\n.rcx-progress-bar__fill--type-primary::before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: inherit;\n  content: \"\";\n  -webkit-animation: rcx-progress-bar__animation 2s ease-out infinite;\n          animation: rcx-progress-bar__animation 2s ease-out infinite;\n  opacity: 0;\n  border-radius: 0.125rem;\n  background: white;\n  background: var(--rcx-progress-bar-color-shine, var(--rcx-color-surface, white));\n}\n.rcx-progress-bar__fill--type-success {\n  background-color: #c0f6e4;\n  background-color: var(--rcx-progress-bar-color-success, var(--rcx-color-success-200, #c0f6e4));\n}\n.rcx-progress-bar__fill--type-error {\n  background-color: #fbb5be;\n  background-color: var(--rcx-progress-bar-color-error, var(--rcx-color-danger-200, #fbb5be));\n}\n\n@-webkit-keyframes rcx-progress-bar__animation {\n  0% {\n    width: 0;\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    width: inherit;\n    opacity: 0;\n  }\n}\n\n@keyframes rcx-progress-bar__animation {\n  0% {\n    width: 0;\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    width: inherit;\n    opacity: 0;\n  }\n}\n.rcx-radio-button {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  cursor: pointer;\n  outline: 0;\n}\n.rcx-radio-button.disabled, .rcx-radio-button:disabled {\n  cursor: not-allowed;\n}\n.rcx-radio-button__input:disabled + .rcx-radio-button__fake, .rcx-radio-button.is-disabled .rcx-radio-button__input + .rcx-radio-button__fake {\n  cursor: not-allowed;\n}\n\n.rcx-radio-button__input:checked:disabled + .rcx-radio-button__fake, .rcx-radio-button.is-disabled .rcx-radio-button__input:checked + .rcx-radio-button__fake {\n  cursor: not-allowed;\n}\n\n.rcx-radio-button__fake {\n  border-radius: 9999px;\n  width: 1.25rem;\n}\nhtml:not([dir=\"rtl\"]) .rcx-radio-button__input:checked + .rcx-radio-button__fake::before{\n  left: 50%;\n}\n[dir=\"rtl\"] .rcx-radio-button__input:checked + .rcx-radio-button__fake::before{\n  right: 50%;\n}\n.rcx-radio-button__input:checked + .rcx-radio-button__fake::before {\n  position: absolute;\n  top: 50%;\n  inset-inline-start: 50%;\n  display: block;\n  width: 0.375rem;\n  height: 0.375rem;\n  content: \"\";\n  transform: translate(-50%, -50%);\n  border-radius: 9999px;\n  background-color: currentColor;\n}\n\n.rcx-select, .rcx-autocomplete {\n  position: relative;\n  align-items: center;\n}\n.rcx-select__item {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nhtml:not([dir=\"rtl\"]) .rcx-select__focus,html:not([dir=\"rtl\"])  .rcx-select__placeholder{\n  text-align: left;\n}\n[dir=\"rtl\"] .rcx-select__focus,[dir=\"rtl\"]  .rcx-select__placeholder{\n  text-align: right;\n}\n.rcx-select__focus, .rcx-select__placeholder {\n  display: inline-block;\n  min-width: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  text-align: start;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-decoration: none;\n  background: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  cursor: pointer;\n  outline: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rcx-select__focus.disabled, .rcx-select__focus:disabled, .rcx-select__placeholder.disabled, .rcx-select__placeholder:disabled {\n  cursor: not-allowed;\n}\n.rcx-select__addon {\n  cursor: pointer;\n  outline: 0;\n  padding: initial;\n}\n.rcx-select__addon.disabled, .rcx-select__addon:disabled {\n  cursor: not-allowed;\n}\n.rcx-select__wrapper {\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-width: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  opacity: 1;\n}\n.rcx-select__wrapper--hidden > .rcx-select__focus {\n  flex-shrink: 1;\n  width: 0;\n  transition: none;\n  opacity: 0;\n}\n.rcx-select:invalid, .rcx-autocomplete:invalid, .rcx-select.invalid, .invalid.rcx-autocomplete {\n  color: #f5455c;\n  color: var(--rcx-input-colors-invalid-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-select:invalid.rcx-input-box--placeholder-visible, .rcx-autocomplete:invalid.rcx-input-box--placeholder-visible, .rcx-select.invalid.rcx-input-box--placeholder-visible, .invalid.rcx-input-box--placeholder-visible.rcx-autocomplete {\n  color: #9ea2a8;\n  color: var(--rcx-input-colors-invalid-placeholder-color, var(--rcx-color-neutral-600, #9ea2a8));\n}\n.rcx-select:invalid:focus, .rcx-autocomplete:invalid:focus, .rcx-select:invalid.focus, .rcx-autocomplete:invalid.focus, .rcx-select.invalid:focus, .invalid.rcx-autocomplete:focus, .rcx-select.invalid.focus, .invalid.focus.rcx-autocomplete {\n  caret-color: #f5455c;\n  caret-color: var(--rcx-input-colors-invalid-focus-caret-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-select:invalid:active, .rcx-autocomplete:invalid:active, .rcx-select:invalid.active, .rcx-autocomplete:invalid.active, .rcx-select.invalid:active, .invalid.rcx-autocomplete:active, .rcx-select.invalid.active, .invalid.active.rcx-autocomplete {\n  caret-color: #9ea2a8;\n  caret-color: var(--rcx-input-colors-invalid-active-caret-color, var(--rcx-color-neutral-600, #9ea2a8));\n}\n*:disabled .rcx-select:invalid, *:disabled .rcx-autocomplete:invalid, .rcx-select:invalid:disabled, .rcx-autocomplete:invalid:disabled, .rcx-select:invalid.disabled, .rcx-autocomplete:invalid.disabled, *:disabled .rcx-select.invalid, *:disabled .invalid.rcx-autocomplete, .rcx-select.invalid:disabled, .invalid.rcx-autocomplete:disabled, .rcx-select.invalid.disabled, .invalid.disabled.rcx-autocomplete {\n  color: #2f343d;\n  color: var(--rcx-input-colors-invalid-disabled-color, var(--rcx-color-neutral-800, #2f343d));\n}\n.rcx-select:invalid + .rcx-input-box__addon, .rcx-autocomplete:invalid + .rcx-input-box__addon, .rcx-select:invalid + .rcx-select__addon, .rcx-autocomplete:invalid + .rcx-select__addon, .rcx-select.invalid + .rcx-input-box__addon, .invalid.rcx-autocomplete + .rcx-input-box__addon, .rcx-select.invalid + .rcx-select__addon, .invalid.rcx-autocomplete + .rcx-select__addon {\n  color: #f5455c;\n  color: var(--rcx-input-colors-invalid-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-input-box__wrapper.focus > .rcx-select:invalid, .rcx-input-box__wrapper.focus > .rcx-autocomplete:invalid, .rcx-input-box__wrapper.focus > .rcx-select.invalid, .rcx-input-box__wrapper.focus > .invalid.rcx-autocomplete {\n  caret-color: #f5455c;\n  caret-color: var(--rcx-input-colors-invalid-focus-caret-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-select:invalid:focus + .rcx-input-box__addon, .rcx-autocomplete:invalid:focus + .rcx-input-box__addon, .rcx-select:invalid:focus + .rcx-select__addon, .rcx-autocomplete:invalid:focus + .rcx-select__addon, .rcx-select:invalid.focus + .rcx-input-box__addon, .rcx-autocomplete:invalid.focus + .rcx-input-box__addon, .rcx-select:invalid.focus + .rcx-select__addon, .rcx-autocomplete:invalid.focus + .rcx-select__addon, .rcx-input-box__wrapper.focus > .rcx-select:invalid + .rcx-input-box__addon, .rcx-input-box__wrapper.focus > .rcx-autocomplete:invalid + .rcx-input-box__addon, .rcx-input-box__wrapper.focus > .rcx-select:invalid + .rcx-select__addon, .rcx-input-box__wrapper.focus > .rcx-autocomplete:invalid + .rcx-select__addon, .rcx-select.invalid:focus + .rcx-input-box__addon, .invalid.rcx-autocomplete:focus + .rcx-input-box__addon, .rcx-select.invalid:focus + .rcx-select__addon, .invalid.rcx-autocomplete:focus + .rcx-select__addon, .rcx-select.invalid.focus + .rcx-input-box__addon, .invalid.focus.rcx-autocomplete + .rcx-input-box__addon, .rcx-select.invalid.focus + .rcx-select__addon, .invalid.focus.rcx-autocomplete + .rcx-select__addon, .rcx-input-box__wrapper.focus > .rcx-select.invalid + .rcx-input-box__addon, .rcx-input-box__wrapper.focus > .invalid.rcx-autocomplete + .rcx-input-box__addon, .rcx-input-box__wrapper.focus > .rcx-select.invalid + .rcx-select__addon, .rcx-input-box__wrapper.focus > .invalid.rcx-autocomplete + .rcx-select__addon {\n  color: #f5455c;\n  color: var(--rcx-input-colors-invalid-focus-icon-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-input-box__wrapper.disabled > .rcx-select:invalid, .rcx-input-box__wrapper.disabled > .rcx-autocomplete:invalid, .rcx-input-box__wrapper.disabled > .rcx-select.invalid, .rcx-input-box__wrapper.disabled > .invalid.rcx-autocomplete {\n  color: #2f343d;\n  color: var(--rcx-input-colors-invalid-disabled-color, var(--rcx-color-neutral-800, #2f343d));\n}\n*:disabled .rcx-select:invalid + .rcx-input-box__addon, *:disabled .rcx-autocomplete:invalid + .rcx-input-box__addon, *:disabled .rcx-select:invalid + .rcx-select__addon, *:disabled .rcx-autocomplete:invalid + .rcx-select__addon, .rcx-select:invalid:disabled + .rcx-input-box__addon, .rcx-autocomplete:invalid:disabled + .rcx-input-box__addon, .rcx-select:invalid:disabled + .rcx-select__addon, .rcx-autocomplete:invalid:disabled + .rcx-select__addon, .rcx-select:invalid.disabled + .rcx-input-box__addon, .rcx-autocomplete:invalid.disabled + .rcx-input-box__addon, .rcx-select:invalid.disabled + .rcx-select__addon, .rcx-autocomplete:invalid.disabled + .rcx-select__addon, .rcx-input-box__wrapper.disabled > .rcx-select:invalid + .rcx-input-box__addon, .rcx-input-box__wrapper.disabled > .rcx-autocomplete:invalid + .rcx-input-box__addon, .rcx-input-box__wrapper.disabled > .rcx-select:invalid + .rcx-select__addon, .rcx-input-box__wrapper.disabled > .rcx-autocomplete:invalid + .rcx-select__addon, *:disabled .rcx-select.invalid + .rcx-input-box__addon, *:disabled .invalid.rcx-autocomplete + .rcx-input-box__addon, *:disabled .rcx-select.invalid + .rcx-select__addon, *:disabled .invalid.rcx-autocomplete + .rcx-select__addon, .rcx-select.invalid:disabled + .rcx-input-box__addon, .invalid.rcx-autocomplete:disabled + .rcx-input-box__addon, .rcx-select.invalid:disabled + .rcx-select__addon, .invalid.rcx-autocomplete:disabled + .rcx-select__addon, .rcx-select.invalid.disabled + .rcx-input-box__addon, .invalid.disabled.rcx-autocomplete + .rcx-input-box__addon, .rcx-select.invalid.disabled + .rcx-select__addon, .invalid.disabled.rcx-autocomplete + .rcx-select__addon, .rcx-input-box__wrapper.disabled > .rcx-select.invalid + .rcx-input-box__addon, .rcx-input-box__wrapper.disabled > .invalid.rcx-autocomplete + .rcx-input-box__addon, .rcx-input-box__wrapper.disabled > .rcx-select.invalid + .rcx-select__addon, .rcx-input-box__wrapper.disabled > .invalid.rcx-autocomplete + .rcx-select__addon {\n  color: #2f343d;\n  color: var(--rcx-input-colors-invalid-disabled-color, var(--rcx-color-neutral-800, #2f343d));\n}\n\n.rcx-skeleton {\n  display: block;\n  height: 1.2em;\n  -webkit-animation: rcx-skeleton__animation 1s linear 0s infinite running;\n          animation: rcx-skeleton__animation 1s linear 0s infinite running;\n  opacity: 0.1;\n  background-color: #2f343d;\n  background-color: var(--rcx-color-foreground-default, #2f343d);\n}\n.rcx-skeleton--text {\n  height: auto;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-block: 0;\n  transform: scale(1, 0.6);\n  transform-origin: 0 60%;\n  border-radius: 0.125rem;\n}\n.rcx-skeleton--text:empty::before {\n  content: \" \";\n}\n\n@-webkit-keyframes rcx-skeleton__animation {\n  0% {\n    opacity: 0.1;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0.1;\n  }\n}\n\n@keyframes rcx-skeleton__animation {\n  0% {\n    opacity: 0.1;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 0.1;\n  }\n}\n.rcx-table {\n  display: table;\n  width: 100%;\n  border-spacing: 0 0.125rem;\n  border-collapse: collapse;\n  background-color: white;\n  background-color: var(--rcx-color-surface, white);\n}\n.rcx-table--fixed {\n  table-layout: fixed;\n}\n.rcx-table__selection {\n  border-radius: 0.125rem;\n  background-color: #1d74f5;\n  background-color: var(--rcx-color-primary-500, #1d74f5);\n}\n.rcx-table__wrapper {\n  position: relative;\n}\n.rcx-table__head {\n  display: table-header-group;\n}\n.rcx-table__body {\n  display: table-row-group;\n}\n.rcx-table__foot {\n  display: table-footer-group;\n}\n.rcx-table--striped .rcx-table__row:nth-child(even) {\n  background-color: #f7f8fa;\n  background-color: var(--rcx-color-neutral-100, #f7f8fa);\n}\n.rcx-table--sticky .rcx-table__cell--header {\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  background-color: white;\n  background-color: var(--rcx-color-surface, white);\n}\n.rcx-table__row {\n  display: table-row;\n  background-color: white;\n  background-color: var(--rcx-color-surface, white);\n}\n.rcx-table__row--selected {\n  background-color: #e8f2ff;\n  background-color: var(--rcx-color-primary-100, #e8f2ff);\n}\n.rcx-table__row--selected.rcx-table__row--action:hover, .rcx-table__row--selected.rcx-table__row--action:focus {\n  background-color: #76b7fc;\n  background-color: var(--rcx-color-primary-300, #76b7fc);\n}\n.rcx-table__row--action:hover, .rcx-table__row--action:focus {\n  cursor: pointer;\n  outline: 0;\n  background-color: #f2f3f5;\n  background-color: var(--rcx-color-neutral-200, #f2f3f5);\n}\n.rcx-table__row--action:hover.disabled, .rcx-table__row--action:hover:disabled, .rcx-table__row--action:focus.disabled, .rcx-table__row--action:focus:disabled {\n  cursor: not-allowed;\n}\n.rcx-table__cell {\n  display: table-cell;\n  padding: 0.5rem;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  text-align: unset;\n  vertical-align: middle;\n  color: #6c727a;\n  color: var(--rcx-color-foreground-info, #6c727a);\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n}\n.rcx-table__cell--header {\n  position: relative;\n  letter-spacing: 0rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1rem;\n  color: #9ea2a8;\n  color: var(--rcx-color-foreground-hint, #9ea2a8);\n}\n.rcx-table__cell--header::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  inset-inline: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  content: \"\";\n  border-bottom: 0.125rem solid #eeeff1;\n  border-bottom: 0.125rem solid var(--rcx-color-neutral-300, #eeeff1);\n}\n.rcx-table__cell--clickable {\n  cursor: pointer;\n  outline: 0;\n}\n.rcx-table__cell--clickable.disabled, .rcx-table__cell--clickable:disabled {\n  cursor: not-allowed;\n}\nhtml:not([dir=\"rtl\"]) .rcx-table__cell--align-start{\n  text-align: left;\n}\n[dir=\"rtl\"] .rcx-table__cell--align-start{\n  text-align: right;\n}\n.rcx-table__cell--align-start {\n  text-align: start;\n}\nhtml:not([dir=\"rtl\"]) .rcx-table__cell--align-end{\n  text-align: right;\n}\n[dir=\"rtl\"] .rcx-table__cell--align-end{\n  text-align: left;\n}\n.rcx-table__cell--align-end {\n  text-align: end;\n}\n.rcx-table__cell--align-center {\n  text-align: center;\n}\n.rcx-table__cell--align-justify {\n  text-align: justify;\n}\n\n.rcx-tabs {\n  position: relative;\n  display: flex;\n}\n.rcx-tabs::after {\n  position: absolute;\n  z-index: -1;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  inset-inline: 0;\n  height: 0.125rem;\n  content: \"\";\n  background-color: #e4e7ea;\n  background-color: var(--rcx-tabs-color, var(--rcx-color-neutral-400, #e4e7ea));\n}\n\n.rcx-tabs__scroll-box {\n  position: relative;\n  overflow: auto;\n  margin-top: -0.25rem;\n  margin-bottom: -0.25rem;\n  margin-block: -0.25rem;\n  -ms-overflow-style: none;\n}\n.rcx-tabs__scroll-box::-webkit-scrollbar {\n  display: none;\n}\n\n.rcx-tabs__wrapper {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.rcx-tabs__item {\n  position: relative;\n  align-items: center;\n  flex: 0 0 auto;\n  min-height: 2.5rem;\n  padding: 0.375rem 1rem;\n  color: #9ea2a8;\n  color: var(--rcx-tabs-color, var(--rcx-color-neutral-600, #9ea2a8));\n  border-width: 0.125rem;\n  border-style: solid;\n  border-color: transparent;\n  background-color: transparent;\n  cursor: pointer;\n  outline: 0;\n  letter-spacing: 0rem;\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.375rem;\n}\n.rcx-tabs__item.disabled, .rcx-tabs__item:disabled {\n  cursor: not-allowed;\n}\n.rcx-tabs__item--selected {\n  padding: 0.25rem 1.125rem;\n  color: #1d74f5;\n  color: var(--rcx-tabs-selected-color, var(--rcx-color-primary-500, #1d74f5));\n  border-bottom-color: #1d74f5;\n  border-bottom-color: var(--rcx-tabs-selected-border-color, var(--rcx-color-primary-500, #1d74f5));\n  border-bottom-width: 0.25rem;\n  border-left-width: 0;\n  border-right-width: 0;\n  border-inline-width: 0;\n}\n.rcx-tabs__item.hover, .rcx-tabs__item:hover {\n  color: #6c727a;\n  color: var(--rcx-tabs-hover-border-color, var(--rcx-color-neutral-700, #6c727a));\n}\n.rcx-tabs__item.active, .rcx-tabs__item:active {\n  color: #2f343d;\n  color: var(--rcx-tabs-active-color, var(--rcx-color-neutral-800, #2f343d));\n}\n.rcx-tabs__item--disabled {\n  color: #cbced1;\n  color: var(--rcx-tabs-disabled-color, var(--rcx-color-neutral-500, #cbced1));\n}\n.js-focus-visible .rcx-tabs__item:focus.focus-visible, .js-focus-visible .rcx-tabs__item.focus.focus-visible {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-inline: 1rem;\n  border-color: #1d74f5;\n  border-color: var(--rcx-tabs-focus-border-color, var(--rcx-color-primary-500, #1d74f5));\n  border-radius: 0.125rem;\n  border-top-width: 0.125rem;\n  border-left-width: 0.125rem;\n  border-right-width: 0.125rem;\n  border-inline-width: 0.125rem;\n  box-shadow: 0 0 0 0.25rem #e8f2ff;\n  box-shadow: 0 0 0 0.25rem var(--rcx-tabs-focus-shadow-color, var(--rcx-color-primary-100, #e8f2ff));\n}\n\nhtml:not(.js-focus-visible) .rcx-tabs__item:focus, html:not(.js-focus-visible) .rcx-tabs__item:focus-within, html:not(.js-focus-visible) .rcx-tabs__item.focus, html:not(.js-focus-visible) .rcx-tabs__item.is-focused {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-inline: 1rem;\n  border-color: #1d74f5;\n  border-color: var(--rcx-tabs-focus-border-color, var(--rcx-color-primary-500, #1d74f5));\n  border-radius: 0.125rem;\n  border-top-width: 0.125rem;\n  border-left-width: 0.125rem;\n  border-right-width: 0.125rem;\n  border-inline-width: 0.125rem;\n  box-shadow: 0 0 0 0.25rem #e8f2ff;\n  box-shadow: 0 0 0 0.25rem var(--rcx-tabs-focus-shadow-color, var(--rcx-color-primary-100, #e8f2ff));\n}\n\n@media screen and (min-width: 48em) {\n  .rcx-tabs__wrapper {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n    margin-inline: 1.5rem;\n  }\n}\n.rcx-tag {\n  display: inline-block;\n  overflow: hidden;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.125rem 0.25rem;\n  white-space: nowrap;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  word-break: keep-all;\n  border-radius: 0.25rem;\n  letter-spacing: 0.0125rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  line-height: 0.75rem;\n}\n.rcx-tag--secondary {\n  color: #1d74f5;\n  color: var(--rcx-tag-colors-secondary-color, var(--rcx-color-foreground-primary, #1d74f5));\n  background-color: #e8f2ff;\n  background-color: var(--rcx-tag-colors-secondary-background-color, var(--rcx-color-primary-100, #e8f2ff));\n}\n.rcx-tag--primary {\n  color: white;\n  color: var(--rcx-tag-colors-primary-color, var(--rcx-color-foreground-alternative, white));\n  background-color: #1d74f5;\n  background-color: var(--rcx-tag-colors-primary-background-color, var(--rcx-color-primary-500, #1d74f5));\n}\n.rcx-tag--danger {\n  color: white;\n  color: var(--rcx-tag-colors-danger-color, var(--rcx-color-foreground-alternative, white));\n  background-color: #f5455c;\n  background-color: var(--rcx-tag-colors-danger-background-color, var(--rcx-color-danger-500, #f5455c));\n}\n.rcx-tag--warning {\n  color: white;\n  color: var(--rcx-tag-colors-warning-color, var(--rcx-color-foreground-alternative, white));\n  background-color: #f38c39;\n  background-color: var(--rcx-tag-colors-warning-background-color, var(--rcx-color-warning-alternative-500, #f38c39));\n}\n.rcx-tag--ghost {\n  color: white;\n  color: var(--rcx-tag-colors-ghost-color, var(--rcx-color-foreground-alternative, white));\n  background-color: #6c727a;\n  background-color: var(--rcx-tag-colors-ghost-background-color, var(--rcx-color-neutral-700, #6c727a));\n}\n.rcx-tag--disabled {\n  color: #9ea2a8;\n  color: var(--rcx-tag-colors-disabled-color, var(--rcx-color-foreground-hint, #9ea2a8));\n  background-color: #e4e7ea;\n  background-color: var(--rcx-tag-colors-disabled-background-color, var(--rcx-color-neutral-400, #e4e7ea));\n}\n.rcx-tag--round {\n  overflow: hidden;\n  text-align: center;\n  border-radius: 9999px;\n}\n.rcx-tag--clickable {\n  cursor: pointer;\n  outline: 0;\n}\n.rcx-tag--clickable.disabled, .rcx-tag--clickable:disabled {\n  cursor: not-allowed;\n}\n\n.rcx-throbber {\n  display: flex;\n  justify-content: center;\n  margin-top: -0.0625rem;\n  margin-bottom: -0.0625rem;\n  margin-block: -0.0625rem;\n}\n.rcx-throbber__circle {\n  margin-left: 0.0625rem;\n  margin-right: 0.0625rem;\n  margin-inline: 0.0625rem;\n  -webkit-animation: bounce 1.4s infinite ease-in-out both;\n          animation: bounce 1.4s infinite ease-in-out both;\n  border-radius: 9999px;\n  background-color: #1d74f5;\n  background-color: var(--rcx-color-primary-500, #1d74f5);\n}\n.rcx-throbber__circle--disabled {\n  background-color: #cbced1;\n  background-color: var(--rcx-color-neutral-500, #cbced1);\n}\n.rcx-throbber__circle--inherit-color {\n  background-color: currentColor;\n}\n\n@-webkit-keyframes bounce {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n\n@keyframes bounce {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n.rcx-tile {\n  display: block;\n  color: #2f343d;\n  color: var(--rcx-color-foreground-default, #2f343d);\n  border-radius: 0.125rem;\n  background-color: white;\n  background-color: var(--rcx-color-surface, white);\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n}\n.rcx-tile--elevation-0 {\n  box-shadow: none;\n}\n.rcx-tile--elevation-1 {\n  box-shadow: 0 0 12px 0 rgba(47, 52, 61, 0.1);\n  box-shadow: 0 0 12px 0 var(--rcx-color-neutral-800-10, rgba(47, 52, 61, 0.1));\n}\n.rcx-tile--elevation-2 {\n  box-shadow: 0 0 2px 0 rgba(47, 52, 61, 0.08), 0 0 12px 0 rgba(47, 52, 61, 0.12);\n  box-shadow: 0 0 2px 0 var(--rcx-color-neutral-800-8, rgba(47, 52, 61, 0.08)), 0 0 12px 0 var(--rcx-color-neutral-800-12, rgba(47, 52, 61, 0.12));\n}\n\n.rcx-toggle-switch {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle;\n  cursor: pointer;\n  outline: 0;\n}\n.rcx-toggle-switch.disabled, .rcx-toggle-switch:disabled {\n  cursor: not-allowed;\n}\n.rcx-toggle-switch__input:disabled + .rcx-toggle-switch__fake, .rcx-toggle-switch.is-disabled .rcx-toggle-switch__input + .rcx-toggle-switch__fake {\n  cursor: not-allowed;\n}\n\n.rcx-toggle-switch__input:checked:disabled + .rcx-toggle-switch__fake, .rcx-toggle-switch.is-disabled .rcx-toggle-switch__input:checked + .rcx-toggle-switch__fake {\n  cursor: not-allowed;\n}\n\n.rcx-toggle-switch__fake {\n  width: 2.5rem;\n  border-radius: 9999px;\n}\nhtml:not([dir=\"rtl\"]) .rcx-toggle-switch__input + .rcx-toggle-switch__fake::before{\n  left: 0;\n}\n[dir=\"rtl\"] .rcx-toggle-switch__input + .rcx-toggle-switch__fake::before{\n  right: 0;\n}\n.rcx-toggle-switch__input + .rcx-toggle-switch__fake::before {\n  position: absolute;\n  inset-inline-start: 0;\n  width: 1rem;\n  height: 1rem;\n  content: \"\";\n  border-radius: 9999px;\n  background-color: currentColor;\n}\nhtml:not([dir=\"rtl\"]) .rcx-toggle-switch__input:checked + .rcx-toggle-switch__fake::before{\n  left: calc(100% - 1rem);\n}\n[dir=\"rtl\"] .rcx-toggle-switch__input:checked + .rcx-toggle-switch__fake::before{\n  right: calc(100% - 1rem);\n}\n.rcx-toggle-switch__input:checked + .rcx-toggle-switch__fake::before {\n  inset-inline-start: calc(100% - 1rem);\n}\n\n.rcx-tooltip {\n  position: relative;\n  display: inline-block;\n  max-width: 15rem;\n  padding: 0.5rem 0.75rem;\n  word-break: break-word;\n  color: white;\n  color: var(--rcx-tooltip-text-color, var(--rcx-color-surface, white));\n  border-radius: 0.25rem;\n  background-color: #1f2329;\n  background-color: var(--rcx-tooltip-background-color, var(--rcx-color-neutral-900, #1f2329));\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.25rem;\n}\n.rcx-tooltip--dir-top::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  border-width: 0.3125rem;\n  border-color: transparent transparent #1f2329 #1f2329;\n  border-color: transparent transparent var(--rcx-tooltip-background-color, var(--rcx-color-neutral-900, #1f2329)) var(--rcx-tooltip-background-color, var(--rcx-color-neutral-900, #1f2329));\n  border-radius: 0 0 0 0.1875rem;\n  bottom: -0.25rem;\n  transform: rotate(-45deg);\n}\n.rcx-tooltip--dir-bottom::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  border-width: 0.3125rem;\n  border-color: transparent transparent #1f2329 #1f2329;\n  border-color: transparent transparent var(--rcx-tooltip-background-color, var(--rcx-color-neutral-900, #1f2329)) var(--rcx-tooltip-background-color, var(--rcx-color-neutral-900, #1f2329));\n  border-radius: 0 0 0 0.1875rem;\n  top: -0.25rem;\n  transform: rotate(135deg);\n}\nhtml:not([dir=\"rtl\"]) .rcx-tooltip--dir-left::after{\n  right: -0.25rem;\n}\n[dir=\"rtl\"] .rcx-tooltip--dir-left::after{\n  left: -0.25rem;\n}\n.rcx-tooltip--dir-left::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  border-width: 0.3125rem;\n  border-color: transparent transparent #1f2329 #1f2329;\n  border-color: transparent transparent var(--rcx-tooltip-background-color, var(--rcx-color-neutral-900, #1f2329)) var(--rcx-tooltip-background-color, var(--rcx-color-neutral-900, #1f2329));\n  border-radius: 0 0 0 0.1875rem;\n  top: 50%;\n  inset-inline-end: -0.25rem;\n  margin-top: -0.25rem;\n  transform: rotate(-135deg);\n}\nhtml:not([dir=\"rtl\"]) .rcx-tooltip--dir-right::after{\n  left: -0.25rem;\n}\n[dir=\"rtl\"] .rcx-tooltip--dir-right::after{\n  right: -0.25rem;\n}\n.rcx-tooltip--dir-right::after {\n  position: absolute;\n  box-sizing: border-box;\n  content: \" \";\n  border-width: 0.3125rem;\n  border-color: transparent transparent #1f2329 #1f2329;\n  border-color: transparent transparent var(--rcx-tooltip-background-color, var(--rcx-color-neutral-900, #1f2329)) var(--rcx-tooltip-background-color, var(--rcx-color-neutral-900, #1f2329));\n  border-radius: 0 0 0 0.1875rem;\n  top: 50%;\n  inset-inline-start: -0.25rem;\n  margin-top: -0.25rem;\n  transform: rotate(45deg);\n}\nhtml:not([dir=\"rtl\"]) .rcx-tooltip--pos-middle::after{\n  left: 50%;\n}\n[dir=\"rtl\"] .rcx-tooltip--pos-middle::after{\n  right: 50%;\n}\nhtml:not([dir=\"rtl\"]) .rcx-tooltip--pos-middle::after{\n  margin-left: -0.25rem;\n}\n[dir=\"rtl\"] .rcx-tooltip--pos-middle::after{\n  margin-right: -0.25rem;\n}\n.rcx-tooltip--pos-middle::after {\n  inset-inline-start: 50%;\n  -webkit-margin-start: -0.25rem;\n          margin-inline-start: -0.25rem;\n}\nhtml:not([dir=\"rtl\"]) .rcx-tooltip--pos-start::after{\n  left: 0.5rem;\n}\n[dir=\"rtl\"] .rcx-tooltip--pos-start::after{\n  right: 0.5rem;\n}\n.rcx-tooltip--pos-start::after {\n  inset-inline-start: 0.5rem;\n  margin: 0;\n}\nhtml:not([dir=\"rtl\"]) .rcx-tooltip--pos-end::after{\n  left: initial;\n}\n[dir=\"rtl\"] .rcx-tooltip--pos-end::after{\n  right: initial;\n}\nhtml:not([dir=\"rtl\"]) .rcx-tooltip--pos-end::after{\n  right: 0.5rem;\n}\n[dir=\"rtl\"] .rcx-tooltip--pos-end::after{\n  left: 0.5rem;\n}\n.rcx-tooltip--pos-end::after {\n  inset-inline-start: initial;\n  inset-inline-end: 0.5rem;\n  margin: 0;\n}\n\n.rcx-sidebar-item__title, .rcx-sidebar-item__subtitle, .rcx-sidebar-item__container, .rcx-sidebar-item__wrapper, .rcx-sidebar-item {\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  border-radius: 0.125rem;\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n}\n\n.rcx-sidebar-item--highlighted {\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.25rem;\n  color: white;\n  color: var(--rcx-sidebar-item-color-highlighted, var(--rcx-color-foreground-alternative, white));\n}\n\n.rcx-sidebar-topbar {\n  color: #9ea2a8;\n  color: var(--rcx-sidebar-item-color, var(--rcx-color-foreground-hint, #9ea2a8));\n}\n.rcx-sidebar-topbar--section {\n  padding-top: 0.25rem;\n}\n.rcx-sidebar-topbar__wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-block: 1rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-inline: 1rem;\n}\n.rcx-sidebar-topbar__title {\n  letter-spacing: 0rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.25rem;\n  color: #1f2329;\n  color: var(--rcx-color-neutral-900, #1f2329);\n}\nhtml:not([dir=\"rtl\"]) .rcx-sidebar-item{\n  padding-left: 1rem;\n}\n[dir=\"rtl\"] .rcx-sidebar-item{\n  padding-right: 1rem;\n}\nhtml:not([dir=\"rtl\"]) .rcx-sidebar-item{\n  padding-right: 0.5rem;\n}\n[dir=\"rtl\"] .rcx-sidebar-item{\n  padding-left: 0.5rem;\n}\n.rcx-sidebar-item {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-block: 0.25rem;\n  -webkit-padding-start: 1rem;\n          padding-inline-start: 1rem;\n  -webkit-padding-end: 0.5rem;\n          padding-inline-end: 0.5rem;\n  color: #9ea2a8;\n  color: var(--rcx-sidebar-item-color, var(--rcx-color-foreground-hint, #9ea2a8));\n}\n.rcx-sidebar-item__wrapper {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex: 1 0 100%;\n  margin-left: -0.125rem;\n  margin-right: -0.125rem;\n  margin-inline: -0.125rem;\n}\n.rcx-sidebar-item--clickable {\n  cursor: pointer;\n  outline: 0;\n}\n.rcx-sidebar-item--clickable.disabled, .rcx-sidebar-item--clickable:disabled {\n  cursor: not-allowed;\n}\n.js-focus-visible .rcx-sidebar-item--clickable:focus.focus-visible, .js-focus-visible .rcx-sidebar-item--clickable.focus.focus-visible {\n  color: #9ea2a8;\n  color: var(--rcx-sidebar-item-color-hover, var(--rcx-color-foreground-hint, #9ea2a8));\n  background-color: #2f343d;\n  background-color: var(--rcx-sidebar-item-background-color-hover, var(--rcx-color-neutral-800, #2f343d));\n}\n\nhtml:not(.js-focus-visible) .rcx-sidebar-item--clickable:focus, html:not(.js-focus-visible) .rcx-sidebar-item--clickable:focus-within, html:not(.js-focus-visible) .rcx-sidebar-item--clickable.focus, html:not(.js-focus-visible) .rcx-sidebar-item--clickable.is-focused {\n  color: #9ea2a8;\n  color: var(--rcx-sidebar-item-color-hover, var(--rcx-color-foreground-hint, #9ea2a8));\n  background-color: #2f343d;\n  background-color: var(--rcx-sidebar-item-background-color-hover, var(--rcx-color-neutral-800, #2f343d));\n}\n\n.rcx-sidebar-item--clickable:hover, .rcx-sidebar-item--clickable.hover, .rcx-sidebar-item--clickable.is-hovered {\n  box-shadow: none;\n  color: #9ea2a8;\n  color: var(--rcx-sidebar-item-color-hover, var(--rcx-color-foreground-hint, #9ea2a8));\n  background-color: #2f343d;\n  background-color: var(--rcx-sidebar-item-background-color-hover, var(--rcx-color-neutral-800, #2f343d));\n}\n.js-focus-visible .rcx-sidebar-item--clickable:focus.focus-visible, .js-focus-visible .rcx-sidebar-item--clickable.focus.focus-visible {\n  box-shadow: 0 0 0 0.25rem #1f2329 inset;\n  box-shadow: 0 0 0 0.25rem var(--rcx-sidebar-item-color-focus, var(--rcx-color-neutral-900, #1f2329)) inset;\n}\n\nhtml:not(.js-focus-visible) .rcx-sidebar-item--clickable:focus, html:not(.js-focus-visible) .rcx-sidebar-item--clickable:focus-within, html:not(.js-focus-visible) .rcx-sidebar-item--clickable.focus, html:not(.js-focus-visible) .rcx-sidebar-item--clickable.is-focused {\n  box-shadow: 0 0 0 0.25rem #1f2329 inset;\n  box-shadow: 0 0 0 0.25rem var(--rcx-sidebar-item-color-focus, var(--rcx-color-neutral-900, #1f2329)) inset;\n}\n\n.rcx-sidebar-item:active, .rcx-sidebar-item--selected {\n  color: #9ea2a8;\n  color: var(--rcx-sidebar-item-color-selected, var(--rcx-color-foreground-hint, #9ea2a8));\n  background-color: #f2f3f5;\n  background-color: var(--rcx-sidebar-item-background-color-selected, var(--rcx-color-neutral-200, #f2f3f5));\n}\n.rcx-sidebar-item__avatar {\n  flex: 0 0 auto;\n  margin-left: 0.125rem;\n  margin-right: 0.125rem;\n  margin-inline: 0.125rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.rcx-sidebar-item__container {\n  flex: 0 0 auto;\n  margin-left: 0.125rem;\n  margin-right: 0.125rem;\n  margin-inline: 0.125rem;\n}\n.rcx-sidebar-item__icon {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  width: 0.75rem;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  margin-inline: 0.25rem;\n}\n.rcx-sidebar-item__content {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-wrap: wrap;\n  flex: 1 1 100%;\n}\n.rcx-sidebar-item__title, .rcx-sidebar-item__subtitle {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n  flex: 1 1 1%;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  margin-inline: 0.25rem;\n}\n.rcx-sidebar-item__subtitle {\n  letter-spacing: 0rem;\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1rem;\n}\n.rcx-sidebar-item__time {\n  letter-spacing: 0.0125rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  line-height: 0.75rem;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  margin-inline: 0.25rem;\n}\n.rcx-sidebar-item__badge {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  margin-inline: 0.25rem;\n}\n.rcx-sidebar-item:hover .rcx-sidebar-item__menu-wraper, .rcx-sidebar-item.focus-within .rcx-sidebar-item__menu-wraper {\n  width: 1.25rem;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  margin-inline: 0.25rem;\n  opacity: 1;\n}\n.rcx-sidebar-item:focus-within .rcx-sidebar-item__menu-wraper {\n  width: 1.25rem;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  margin-inline: 0.25rem;\n  opacity: 1;\n}\n.rcx-sidebar-item__menu {\n  position: absolute;\n  transform: translateY(-50%);\n}\n.rcx-sidebar-item__menu-wraper {\n  flex-shrink: 0;\n  width: 0;\n  height: 100%;\n  opacity: 0;\n}\n.rcx-sidebar-title {\n  letter-spacing: 0rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  line-height: 1rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-block: 0.75rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-inline: 1rem;\n  color: #9ea2a8;\n  color: var(--rcx-color-foreground-hint, #9ea2a8);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 49:0-14 */
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 65:0-14 */
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 102:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 38:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 14:2-16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 12:0-14 */
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! default exports */
/*! export AsyncMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ConcurrentMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ContextConsumer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ContextProvider [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Element [provided] [no usage info] [missing usage info prevents renaming] */
/*! export ForwardRef [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Fragment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Lazy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Memo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Portal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Profiler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export StrictMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Suspense [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isAsyncMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isConcurrentMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isContextConsumer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isContextProvider [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isForwardRef [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFragment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isLazy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isMemo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isPortal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isProfiler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isStrictMode [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSuspense [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isValidElementType [provided] [no usage info] [missing usage info prevents renaming] */
/*! export typeOf [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! dynamic exports */
/*! export AsyncMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .AsyncMode */
/*! export ConcurrentMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .ConcurrentMode */
/*! export ContextConsumer [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .ContextConsumer */
/*! export ContextProvider [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .ContextProvider */
/*! export Element [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Element */
/*! export ForwardRef [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .ForwardRef */
/*! export Fragment [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Fragment */
/*! export Lazy [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Lazy */
/*! export Memo [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Memo */
/*! export Portal [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Portal */
/*! export Profiler [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Profiler */
/*! export StrictMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .StrictMode */
/*! export Suspense [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .Suspense */
/*! export isAsyncMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isAsyncMode */
/*! export isConcurrentMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isConcurrentMode */
/*! export isContextConsumer [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isContextConsumer */
/*! export isContextProvider [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isContextProvider */
/*! export isElement [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isElement */
/*! export isForwardRef [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isForwardRef */
/*! export isFragment [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isFragment */
/*! export isLazy [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isLazy */
/*! export isMemo [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isMemo */
/*! export isPortal [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isPortal */
/*! export isProfiler [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isProfiler */
/*! export isStrictMode [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isStrictMode */
/*! export isSuspense [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isSuspense */
/*! export isValidElementType [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .isValidElementType */
/*! export typeOf [provided] [no usage info] [provision prevents renaming (no use info)] -> ./node_modules/react-is/cjs/react-is.development.js .typeOf */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-keyed-flatten-children/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-keyed-flatten-children/index.js ***!
  \************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/* Returns React children into an array, flattening fragments. */
var react_1 = __webpack_require__(/*! react */ "react");
var react_is_1 = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
function flattenChildren(children, depth, keys) {
    if (depth === void 0) { depth = 0; }
    if (keys === void 0) { keys = []; }
    return react_1.Children.toArray(children).reduce(function (acc, node, nodeIndex) {
        if (react_is_1.isFragment(node)) {
            acc.push.apply(acc, flattenChildren(node.props.children, depth + 1, keys.concat(node.key || nodeIndex)));
        }
        else {
            if (react_1.isValidElement(node)) {
                acc.push(react_1.cloneElement(node, {
                    key: keys.concat(String(node.key)).join('.')
                }));
            }
            else if (typeof node === "string" || typeof node === "number") {
                acc.push(node);
            }
        }
        return acc;
    }, []);
}
exports.default = flattenChildren;


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 732:31-45 */
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__);
;
            

var refs = 0;
var update;
var options = {"injectType":"lazySingletonStyleTag","attributes":{"id":"fuselage-style"}};

options.insert = "head";
options.singleton = true;

var exported = {};

exported.locals = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1___default().locals) || {};
exported.use = function() {
  if (!(refs++)) {
    update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1___default()), options);
  }

  return exported;
};
exported.unuse = function() {
  if (refs > 0 && !--refs) {
    update();
    update = null;
  }
};



;
       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exported);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "@rocket.chat/fuselage-hooks":
/*!**********************************************!*\
  !*** external "@rocket.chat/fuselage-hooks" ***!
  \**********************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__rocket_chat_fuselage_hooks__;

/***/ }),

/***/ "@rocket.chat/icons":
/*!*************************************!*\
  !*** external "@rocket.chat/icons" ***!
  \*************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__rocket_chat_icons__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});
//# sourceMappingURL=fuselage.development.js.map