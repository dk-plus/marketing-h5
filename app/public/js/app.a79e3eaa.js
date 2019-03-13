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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Utils = function () {

  var _e = {};

  // 获取url查询参数
  _e.getUrlParams = function () {

    var _parem = {};
    var url = window.location.href;
    var params = url && url.split('?').length > 0 && url.split('?')[1] && url.split('?')[1].split('#').length > 0 && url.split('?')[1].split('#')[0];

    if (!params) {
      return;
    }

    params.split('&').forEach(function (pair, index) {
      var key = pair.split('=')[0];
      var value = pair.split('=')[1];
      _parem[key] = value;
    });

    return _parem;
  };

  // 设置url参数
  _e.setUrlParams = function (obj) {
    var url = window.location.href;
    var hash = url.split('#')[1];
    var keys = Object.keys(obj);
    var parems = '';
    var _parems = '';

    keys.forEach(function (key, index) {
      var begin = '&';
      if (index === 0) {
        begin = url.split('#')[0].indexOf('?') < 0 ? '?' : '&';
      }
      parems += '' + begin + key + '=' + obj[key];
    });

    _parems = decodeURIComponent(parems);
    if (!hash) {
      window.location.href = '' + url.split('#')[0] + _parems;
    } else {
      window.location.href = '' + url.split('#')[0] + _parems + '#' + hash;
    }
  };

  // 判断是否数组
  _e.isArray = function (arr) {
    if (Array.isArray) {
      return Array.isArray(arr);
    }
    return Object.prototype.toString.call(arr);
  };

  return _e;
}();

module.exports = Utils;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Render = __webpack_require__(3);
var Utils = __webpack_require__(15);

!function () {
  console.log('%cdkplus-', '\n    background: #cacaca;\n    padding: 0 5px;\n    border-radius: 50px 150px 10px 50px;\n    font-size: 14px;\n    color: #fff;\n  ');
  console.log('%cdev-pro', '\n    background: #16c716;\n    padding: 0 5px;\n    border-radius: 10px 10px 50px 50px;\n    font-size: 14px;\n    color: #fff;\n  ');

  Render.init();
}();

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: D:\\毕业设计\\marketing-h5\\webpack_src\\src\\modules\\app\\index\\render.js: Unexpected token (38:6)\n\n\u001b[0m \u001b[90m 36 | \u001b[39m    console\u001b[33m.\u001b[39mlog(\u001b[32m'render init...'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 37 | \u001b[39m    \u001b[33mApi\u001b[39m\u001b[33m.\u001b[39mproxyGet(\u001b[32m'test'\u001b[39m\u001b[33m,\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 38 | \u001b[39m      \u001b[33m...\u001b[39mquery\n \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 39 | \u001b[39m    }\u001b[33m,\u001b[39m res \u001b[33m=>\u001b[39m {\n \u001b[90m 40 | \u001b[39m      render()\u001b[33m;\u001b[39m\n \u001b[90m 41 | \u001b[39m      console\u001b[33m.\u001b[39mlog(\u001b[32m'hi'\u001b[39m\u001b[33m,\u001b[39mres)\u001b[0m\n");

/***/ })

/******/ });