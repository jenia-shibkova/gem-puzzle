/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".button {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none; }\n\n.popup {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  z-index: 5;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.popup__content {\n  width: 400px;\n  height: 400px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  background-color: RGB(240, 240, 248);\n  border-radius: 15%;\n  padding: 40px; }\n\n.popup__title {\n  text-align: center;\n  font-weight: 700;\n  font-size: 20px; }\n\n.popup__result-value {\n  text-align: center;\n  font-weight: 400; }\n\n.popup__button {\n  margin-top: auto; }\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\r\n   ========================================================================== */\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\r\n   ========================================================================== */\n/**\r\n * Remove the margin in all browsers.\r\n */\nbody {\n  margin: 0; }\n\n/**\r\n * Render the `main` element consistently in IE.\r\n */\nmain {\n  display: block; }\n\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\nimg {\n  border-style: none; }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\r\n * Correct the padding in Firefox.\r\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\r\n   ========================================================================== */\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\ndetails {\n  display: block; }\n\n/*\r\n * Add the correct display in all browsers.\r\n */\nsummary {\n  display: list-item; }\n\n/* Misc\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 10+.\r\n */\ntemplate {\n  display: none; }\n\n/**\r\n * Add the correct display in IE 10.\r\n */\n[hidden] {\n  display: none; }\n\n.game {\n  background: RGB(240, 240, 248);\n  display: grid;\n  grid-gap: 6px;\n  padding: 10px;\n  justify-content: center;\n  align-content: center;\n  width: 50%;\n  margin: 0 auto; }\n\n.game--3x3 {\n  grid-template-columns: repeat(3, 80px);\n  grid-template-rows: repeat(3, 80px); }\n\n.game--3x3 .game__cell-content {\n  line-height: 80px; }\n\n.game--4x4 {\n  grid-template-columns: repeat(4, 60px);\n  grid-template-rows: repeat(4, 60px);\n  width: 40%; }\n\n.game--4x4 .game__cell-content {\n  line-height: 60px; }\n\n.game--5x5 {\n  grid-template-columns: repeat(5, 50px);\n  grid-template-rows: repeat(5, 50px);\n  width: 50%; }\n\n.game--5x5 .game__cell-content {\n  line-height: 50px; }\n\n.game--6x6 {\n  grid-template-columns: repeat(6, 40px);\n  grid-template-rows: repeat(6, 40px); }\n\n.game--6x6 .game__cell-content {\n  line-height: 40px; }\n\n.game--7x7 {\n  grid-template-columns: repeat(7, 40px);\n  grid-template-rows: repeat(7, 40px); }\n\n.game--7x7 .game__cell-content {\n  line-height: 40px; }\n\n.game--8x8 {\n  grid-template-columns: repeat(8, 30px);\n  grid-template-rows: repeat(8, 30px); }\n\n.game--8x8 .game__cell-content {\n  line-height: 30px; }\n\n.game__cell {\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n  transition: all 0.7s; }\n\n.game__cell:hover {\n  cursor: grab; }\n\n.game__cell-content {\n  display: inline-block;\n  margin: 0 auto;\n  font-weight: 700;\n  vertical-align: middle;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Chrome/Safari/Opera */\n  -khtml-user-select: none;\n  /* Konqueror */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\r\n                                  not supported by any browser */ }\n\n.game__cell-content:hover {\n  background-color: RGB(253, 153, 42);\n  color: #ffffff;\n  border-radius: 50%; }\n\n@media (max-width: 760px) {\n  .game--6x6 {\n    width: 100%; }\n  .game--4x4 {\n    width: 100%; } }\n\n@media (max-width: 700px) {\n  .game--7x7 {\n    width: 100%; } }\n\n@media (max-width: 600px) {\n  .game--5x5 {\n    width: 100%; } }\n\n@media (max-width: 475px) {\n  .game {\n    width: 100%; } }\n\n.main-buttons {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 20px; }\n\n.main-buttons__button {\n  padding: 8px;\n  background-color: RGB(68, 85, 141);\n  margin-bottom: 4px;\n  margin-right: 4px;\n  border-radius: 5px;\n  color: #ffffff; }\n\n.main-buttons__button--stop {\n  background-color: RGB(57, 58, 86); }\n\n.main-buttons__button:hover,\n.main-buttons__button:active {\n  background-color: RGB(253, 153, 42);\n  color: RGB(36, 38, 61); }\n\n.game-status {\n  text-align: center; }\n\n.game-status__moves-amount,\n.game-status__time-min,\n.game-status__time-sec {\n  color: RGB(253, 153, 42);\n  font-weight: 700; }\n\n.game-status__moves-amount {\n  margin-right: 10px; }\n\n.size-buttons {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap; }\n\n.size-buttons__button {\n  color: RGB(36, 38, 61);\n  font-weight: 700;\n  text-decoration: underline; }\n\n.size-buttons__button:hover,\n.size-buttons__button:active {\n  color: RGB(253, 153, 42); }\n\n@media (max-width: 375px) {\n  .size-buttons__label {\n    width: 100%;\n    display: inline-block;\n    margin-bottom: 10px;\n    text-align: center; } }\n\n.game-size {\n  text-align: center; }\n\n.game-size__value {\n  color: RGB(253, 153, 42);\n  font-weight: 700; }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: \"Roboto\", \"Arial\", sans-serif;\n  font-weight: 400; }\n\n.wrapper {\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative; }\n\n.invisible {\n  display: none; }\n\n.hovered {\n  background-color: RGBA(68, 85, 141, 0.5); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
    var nonce =  true ? __webpack_require__.nc : undefined;

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

  if (sourceMap && btoa) {
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

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/main.scss */ "./src/assets/scss/main.scss");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");




const app = new _js_app__WEBPACK_IMPORTED_MODULE_1__["default"]();
app.start();


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");


class App {
  constructor() {
    this.state = {
      size: '4x4',
      counter: 0,
      time: {
        min: '00',
        sec: '00'
      }
    };
    this.gameKeys = [
      '012345678',
      '123456780',
      '147258360',
      '741852063',
      '761852043',
      '0123456789101112131415',
      '1234567891011121314150',
      '1234567891011121314151617181920212223240',
      '0123456789101112131415161718192021222324',
      '01234567891011121314151617181920212223242526272829303132333435',
      '12345678910111213141516171819202122232425262728293031323334350',
      '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748',
      '1234567891011121314151617181920212223242526272829303132333435363738394041424344454647480',
      '0123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263',
      '1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162630',
    ]    
  }
  
  getTemplate() {
    return `<main class="wrapper">
    <div class="main-buttons">
      <button id="restart" class="main-buttons__button button">Размешать и начать</button>
      <button class="main-buttons__button main-buttons__button--stop button">Стоп</button>
      <button class="main-buttons__button button">Сохранить</button>
      <button id="results" class="main-buttons__button button">Результаты</button>
    </div>
    <p class="game-status">
      <span class="game-status__moves-label">Ходов</span>
      <span class="game-status__moves-amount">0</span>
      <span class="game-status__time-label">Время</span>
      <span class="game-status__time-min">${this.state.time.min}</span> :
      <span class="game-status__time-sec">${this.state.time.sec}</span>
    </p>
    <div class="game-wrapper"></div>    
    <p class="game-size">
      <span class="game-size__label">Размер поля</span>
      <span class="game-size__value">${this.state.size}</span>
    </p>
    <div class="size-buttons">
      <span class="size-buttons__label">Другие размеры</span>
      <button class="size-buttons__button button">3x3</button>
      <button class="size-buttons__button button">4x4</button>
      <button class="size-buttons__button button">5x5</button>
      <button class="size-buttons__button button">6x6</button>
      <button class="size-buttons__button button">7x7</button>
      <button class="size-buttons__button button">8x8</button>
    </div>`;
  }

  getGameGridTemplate() {
    return `<div class="game game--${this.state.size}"></div>`;
  }

  getCellTemplate(data) {
    return `<div class="game__cell"><span class="game__cell-content" draggable="true">${data}</span></div>`;
  }

  getEmptyCellTemplate() {
    return `<div class="game__cell empty"></div>`;
  }

  // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;

      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }
  
  getGameGridElements() {
    let elementsValue = Math.pow(this.state.size[0], 2);
    const arrayOfCellValue = [];

    for (let i = 1; i < elementsValue; i++) {
      arrayOfCellValue.push(i);       
    }

    const shuffleElements = this.shuffle(arrayOfCellValue);
    const elementsTemplate = document.createDocumentFragment();

    shuffleElements.forEach((element) => {
      const cellTemplate = this.getCellTemplate(element);      
      const cell = this.createElement(cellTemplate);
      elementsTemplate.appendChild(cell);
    });
    
    const emptyCell = this.createElement(this.getEmptyCellTemplate());
    elementsTemplate.appendChild(emptyCell);

    return elementsTemplate;
  }

  createElement(data) {
    const template = data;
    const newElement = document.createElement('template');
    newElement.innerHTML = template;
    return newElement.content.children[0];
  }

  moveHandler() {
    const gameGrid = document.querySelector('.game');
    const cells = document.querySelectorAll('.game__cell');
    let dragElement = null;
    let cell = null;
    let active = null;
    
    function dragStart({ target }) {
      active = target;
      dragElement = target.cloneNode(true);
      cell = target.parentNode;

      setTimeout(() => {
        target.classList.add('invisible');
      }, 0);      
    }

    function dragEnd() {
    }

    function dragOver(event) {
      event.preventDefault();
      const { target } = event;
      if (!target.classList.contains('empty')) return;
    }

    function dragEnter(event) {
      event.preventDefault();
      const { target } = event;
      target.classList.add('hovered');
    }

    function dragLeave({ target }) {
      target.classList.remove('hovered');
    }
    
    function dragDrop({ target }) {
      target.classList.remove('hovered');

      if (!target.classList.contains('empty')) {
        active.classList.remove('invisible');
        return;
      }

      target.appendChild(dragElement);      
      cell.innerHTML = '';

      target.classList.remove('empty');
      cell.classList.add('empty');

      this.increaseCounter();
      this.checkGame();
    }

    for(const cell of cells) {
      cell.addEventListener('dragover', dragOver);
      cell.addEventListener('dragenter', dragEnter);
      cell.addEventListener('dragleave', dragLeave);
      cell.addEventListener('drop', dragDrop.bind(this));
    }

    gameGrid.addEventListener('dragstart', dragStart);
    gameGrid.addEventListener('dragend', dragEnd);
  }
  
  increaseCounter() {
    const counter = document.querySelector('.game-status__moves-amount');

    this.state.counter += 1;
    counter.innerHTML = this.state.counter;
  }

  switchGridSize() {
    const buttonWrapper = document.querySelector('.size-buttons');    

    function switchSize ({ target }) {
      if (!target.classList.contains('button')) return;

      const gameSize = document.querySelector('.game-size__value');
      const gameWrapper = document.querySelector('.game-wrapper');

      const currentValue = target.innerHTML;

      this.state.size = currentValue;
      gameSize.innerHTML = target.innerHTML;
      gameWrapper.innerHTML = '';

      const gridWrapper = this.createElement(this.getGameGridTemplate());
      const gridCells = this.getGameGridElements();

      gridWrapper.appendChild(gridCells);
      gameWrapper.appendChild(gridWrapper);
      
      this.resetCounter();
      this.resetTime();
      this.moveHandler();
    }

    buttonWrapper.addEventListener('click', switchSize.bind(this));
  }

  resetCounter() {    
    const counter = document.querySelector('.game-status__moves-amount');
    this.state.counter = 0;
    counter.innerHTML = this.state.counter;
  }

  resetTime() {    
    const min = document.querySelector('.game-status__time-min');
    const sec = document.querySelector('.game-status__time-sec');

    this.state.time.min = '00';
    this.state.time.sec = '00';

    min.innerHTML = this.state.time.min;
    sec.innerHTML = this.state.time.sec;
  }
  
  onButtonClick() {
    function onClick({ target }) {
      if (target.id === 'restart') {
        document.body.innerHTML = '';
        this.state.counter = 0;
        this.start();
      }

      if (target.id === 'results') {
        this.showResults();
      }
    } 
    
    document.querySelector('.main-buttons').addEventListener('click', onClick.bind(this));
  }

  checkGame() {
    const elements = document.querySelectorAll('.game__cell-content');
    const empty = document.querySelector('.empty');
    let result = [];
    
    const nextElement = empty.nextSibling;

    if (!nextElement) {
      elements.forEach((element) => {
        result.push(element.innerHTML);                     
      }); 
      result.push(0);
    } else {
      const nextValue = nextElement.querySelector('span').innerHTML;

      elements.forEach((element, index) => {
        result.push(element.innerHTML);
        if (elements[index + 1]) {
          if (elements[index + 1].innerHTML === nextValue) {
            result.push(0);
          }
        }      
      });
    }    

    let str = result.join('');
    
    if (this.gameKeys.includes(str)) {
      this.popupAction();
      this.saveResultValue();
    } else {
      console.log('try again')
    }
  }

  popupAction() {  
    const template = `<div class='popup'>
          <div class='popup__content'>      
            <p class='popup__title'>
              «Ура! Вы решили головоломку за ${this.state.time.min}:${this.state.time.sec}
               и ${this.state.counter} ходов»
            </p>
           
            <button class='button popup__button'>OK</button>
          </div>
        </div>`;
  
    const contentWrapper = document.querySelector('main');
    const popup = this.createElement(template);
  
    contentWrapper.appendChild(popup);
    this.closePopup();
  } 

  restart() {
    document.body.innerHTML = '';
    this.state.counter = 0;
    this.state.time.min = '00';
    this.state.time.sec = '00';
    this.start();
  }
  
  saveResultValue() {
    const result = `Ходов ${this.state.counter} Время ${this.state.time.min} : ${this.state.time.sec}`;
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].saveResult(result);
  }

  showResults() {
    const storedResults = JSON.parse(localStorage.getItem('results'));
    let resultTemplate;

    let emptyValue = `<p class='popup__result-value'>Пусто</p>`;
    const fragment = document.createDocumentFragment();

    const template = `<div class='popup'>
          <div class='popup__content'>      
            <div class='popup__results'></div>           
            <button class='button popup__button'>OK</button>
          </div>
        </div>`;    
    
    const contentWrapper = document.querySelector('main');
    const popup = this.createElement(template);

    if (!storedResults) {
      const empty = this.createElement(emptyValue);
      popup.querySelector('.popup__results').appendChild(empty);
    } else {
      storedResults.forEach((item) => {
        resultTemplate = `<p class='popup__result-value'>${item}</p>`;
        const element = this.createElement(resultTemplate);
        fragment.appendChild(element);
      });       

      popup.querySelector('.popup__results').appendChild(fragment);     
    }
  
    contentWrapper.appendChild(popup);    
    this.closePopup();    
  }

  closePopup() {
    document.querySelector('.popup__button').addEventListener('click', () => {
      const popup = document.querySelector('.popup');
      document.querySelector('main').removeChild(popup); 
      this.restart();    
    });       
  }

  start() {
    const appTemplate = this.getTemplate();
    const app = this.createElement(appTemplate);  
    const gameWrapper = app.querySelector('.game-wrapper');
    const gridWrapper = this.createElement(this.getGameGridTemplate());
    const gridCells = this.getGameGridElements();

    gridWrapper.appendChild(gridCells);
    gameWrapper.appendChild(gridWrapper);
    document.body.appendChild(app);

    this.moveHandler();
    this.switchGridSize();
    this.onButtonClick();
  } 
}


/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const saveResult = (data) => {
  const storedResults = JSON.parse(localStorage.getItem('results'));

  if (!storedResults) {    
    const results = [];
    results.push(data);
    localStorage.setItem('results', JSON.stringify(results));
  } else {
    if (storedResults.length >= 10) {
      storedResults.push(data);
      storedResults.reverse();
      const newResults = storedResults.slice(0, 10);
      localStorage.setItem('results', JSON.stringify(newResults));
    } else {
      storedResults.push(data);
      localStorage.setItem('results', JSON.stringify(storedResults));
    }
  }   
};

const UTILS = {
  saveResult
};

/* harmony default export */ __webpack_exports__["default"] = (UTILS);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map