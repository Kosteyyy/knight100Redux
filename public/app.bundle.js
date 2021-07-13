/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _Knight100Game_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Knight100Game.jsx */ \"./src/Knight100Game.jsx\");\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Knight100Game_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null);\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null), document.getElementById('root'));\n\n//# sourceURL=webpack://knight100/./src/App.jsx?");

/***/ }),

/***/ "./src/Board.jsx":
/*!***********************!*\
  !*** ./src/Board.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Knight_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Knight.jsx */ \"./src/Knight.jsx\");\n/* harmony import */ var _Square_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Square.jsx */ \"./src/Square.jsx\");\n\n\n\n\nfunction renderSquare(i, [knightX, knightY], moveKnight, moveNumber) {\n  const x = i % 10;\n  const y = Math.floor(i / 10);\n  const dark = (x + y) % 2 === 1;\n  const isKnightThere = i === knightX + knightY * 10; // to change font-size when board size change get width of board\n\n  let appWidth = document.getElementById('knight100-container').offsetWidth;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"square\",\n    key: i,\n    onClick: () => moveKnight(x, y)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"square-inner-element\",\n    style: {\n      fontSize: appWidth / 14\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Square_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {\n    dark: dark\n  }, isKnightThere ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Knight_jsx__WEBPACK_IMPORTED_MODULE_1__.default, null) : moveNumber)));\n}\n\nfunction Board({\n  knightPosition,\n  moveKnight,\n  movesField\n}) {\n  const squares = [];\n\n  for (let i = 0; i < 100; i++) {\n    squares.push(renderSquare(i, knightPosition, moveKnight, movesField[i]));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"board\"\n  }, squares);\n}\n\n//# sourceURL=webpack://knight100/./src/Board.jsx?");

/***/ }),

/***/ "./src/Knight.jsx":
/*!************************!*\
  !*** ./src/Knight.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Knight)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction Knight() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"knight\"\n  }, \"\\u2658\");\n}\n\n//# sourceURL=webpack://knight100/./src/Knight.jsx?");

/***/ }),

/***/ "./src/Knight100Game.jsx":
/*!*******************************!*\
  !*** ./src/Knight100Game.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Knight100Game)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Board_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board.jsx */ \"./src/Board.jsx\");\n/* harmony import */ var _Start_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Start.jsx */ \"./src/Start.jsx\");\n/* harmony import */ var _Restart_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Restart.jsx */ \"./src/Restart.jsx\");\n/* harmony import */ var _appstyles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appstyles.css */ \"./src/appstyles.css\");\n\n\n\n\n\nfunction Knight100Game() {\n  const [gameStatus, setGameStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"start\");\n  const [knightPosition, setKnightPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0, 0]);\n  let emptyArray = new Array(100);\n  const [movesField, setMovesField] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(emptyArray);\n  const [moveCount, setMoveCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (moveCount === 100) {\n      setGameStatus(\"win\");\n    } else if (cantMove()) {\n      setGameStatus(\"lost\");\n    }\n\n    ;\n  }, [knightPosition]);\n\n  const restartGame = () => {\n    setMovesField(emptyArray);\n    setKnightPosition([0, 0]);\n    setMoveCount(1);\n    setGameStatus(\"play\");\n  };\n\n  const canKnightMove = (ToX, ToY) => {\n    if (movesField[getSquareIndex([ToX, ToY])] > 0) return false;\n    const difX = Math.abs(ToX - knightPosition[0]);\n    const difY = Math.abs(ToY - knightPosition[1]);\n    return difX === 2 && difY === 1 || difX === 1 && difY === 2;\n  };\n\n  const getSquareIndex = ([x, y]) => x + y * 10;\n\n  const cantMove = () => {\n    let possiblemoves = 0;\n\n    for (let i = 0; i < 100; i++) {\n      const x = i % 10;\n      const y = Math.floor(i / 10);\n\n      if (canKnightMove(x, y)) {\n        possiblemoves++;\n      }\n\n      ;\n    }\n\n    return possiblemoves === 0;\n  };\n\n  const moveKnight = (ToX, ToY) => {\n    if (canKnightMove(ToX, ToY)) {\n      setMoveCount(moveCount + 1);\n      let tempArray = [...movesField];\n      tempArray[getSquareIndex([...knightPosition])] = moveCount;\n      setMovesField(tempArray);\n      setKnightPosition([ToX, ToY]);\n    }\n\n    return true;\n  };\n\n  const renderGame = () => {\n    switch (gameStatus) {\n      case \"start\":\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Start_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {\n          setGameStatus: setGameStatus\n        });\n\n      case \"play\":\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Board_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {\n          knightPosition: knightPosition,\n          moveKnight: moveKnight,\n          movesField: movesField\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Restart_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n          restart: restartGame\n        }));\n\n      case \"win\":\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Board_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {\n          knightPosition: knightPosition,\n          moveKnight: moveKnight,\n          movesField: movesField\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n          className: \"win\"\n        }, \"\\u0412\\u044B \\u043F\\u043E\\u0431\\u0435\\u0434\\u0438\\u043B\\u0438!!!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Restart_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n          restart: restartGame\n        }));\n\n      case \"lost\":\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Board_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {\n          knightPosition: knightPosition,\n          moveKnight: moveKnight,\n          movesField: movesField\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n          className: \"lost\"\n        }, \"\\u0412\\u044B \\u043F\\u0440\\u043E\\u0438\\u0433\\u0440\\u0430\\u043B\\u0438!!!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Restart_jsx__WEBPACK_IMPORTED_MODULE_3__.default, {\n          restart: restartGame\n        }));\n\n      default:\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Board_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {\n          knightPosition: knightPosition,\n          moveKnight: moveKnight,\n          movesField: movesField\n        });\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"knight100-container\"\n  }, renderGame(), \" \");\n}\n\n//# sourceURL=webpack://knight100/./src/Knight100Game.jsx?");

/***/ }),

/***/ "./src/Restart.jsx":
/*!*************************!*\
  !*** ./src/Restart.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Restart)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction Restart({\n  restart\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"start-button\",\n    onClick: restart\n  }, \"\\u041D\\u0430\\u0447\\u0430\\u0442\\u044C \\u0437\\u0430\\u043D\\u043E\\u0432\\u043E\");\n}\n\n//# sourceURL=webpack://knight100/./src/Restart.jsx?");

/***/ }),

/***/ "./src/Square.jsx":
/*!************************!*\
  !*** ./src/Square.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Square)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction Square({\n  dark,\n  children\n}) {\n  const fill = dark ? \"#cc6600\" : \"white\";\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      backgroundColor: fill,\n      widgh: \"100%\",\n      height: \"100%\"\n    }\n  }, children);\n}\n\n//# sourceURL=webpack://knight100/./src/Square.jsx?");

/***/ }),

/***/ "./src/Start.jsx":
/*!***********************!*\
  !*** ./src/Start.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Start)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction Start({\n  setGameStatus\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"\\u0414\\u043E\\u0431\\u0440\\u043E \\u043F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C \\u0432 \\u0438\\u0433\\u0440\\u0443 100 \\u0445\\u043E\\u0434\\u043E\\u0432 \\u043A\\u043E\\u043D\\u0451\\u043C\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"\\u0412\\u0430\\u0448\\u0430 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0430 - \\u0434\\u0435\\u043B\\u0430\\u044F \\u0445\\u043E\\u0434\\u044B \\u043A\\u043E\\u043D\\u0451\\u043C \\u043F\\u0440\\u043E\\u0439\\u0442\\u0438 \\u0432\\u0441\\u0435 100 \\u043A\\u043B\\u0435\\u0442\\u043E\\u043A\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"start-button\",\n    onClick: () => setGameStatus(\"play\")\n  }, \"\\u0421\\u0442\\u0430\\u0440\\u0442\"));\n}\n\n//# sourceURL=webpack://knight100/./src/Start.jsx?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/appstyles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/appstyles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".win {\\r\\n\\tcolor:  green;\\r\\n}\\r\\n.lost {\\r\\n\\tcolor: red;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://knight100/./src/appstyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/appstyles.css":
/*!***************************!*\
  !*** ./src/appstyles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_appstyles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./appstyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/appstyles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_appstyles_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_appstyles_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_appstyles_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_appstyles_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://knight100/./src/appstyles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkknight100"] = self["webpackChunkknight100"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/App.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;