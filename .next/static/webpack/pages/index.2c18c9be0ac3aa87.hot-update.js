"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Form = function(param) {\n    var onSubmit = param.onSubmit;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), qNum = ref[0], setQNum = ref[1];\n    var points = 0;\n    /* explanation of points:\\\n  0 - 10  = city\n  10 - 20 = traveler\n  20+     = mountaineer\n  */ var stickers = [\n        function() {\n            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                className: \"absolute -top-20 -left-8 rotate-6 w-44 animate-pulse\",\n                src: \"/assets/images/Funny/face-1.png\",\n                alt: \"\",\n                __source: {\n                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                },\n                __self: _this1\n            }));\n        }\n    ];\n    var questions = [\n        {\n            q: 'Para que tu otimiza?',\n            a: [\n                function() {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"cursor-pointer\",\n                        onClick: function() {\n                            points += 2;\n                            setQNum(qNum + 1);\n                        },\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: \"A bagagem deve ser pr\\xe1tica e, para muitos casos de uso\"\n                    }));\n                },\n                function() {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"cursor-pointer\",\n                        onClick: function() {\n                            points += 1;\n                            setQNum(qNum + 1);\n                        },\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: \"Estilo, eu quero ser o mais legal\"\n                    }));\n                },\n                function() {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"cursor-pointer\",\n                        onClick: function() {\n                            points += 4;\n                            setQNum(qNum + 1);\n                        },\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: \"Durabilidade, deve resistir \\xe0 selva e \\xe0s montanhas\"\n                    }));\n                },\n                function() {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"cursor-pointer\",\n                        onClick: function() {\n                            points += 2;\n                            setQNum(qNum + 1);\n                        },\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: \"O tamanho importa 🍆 Preocupo-me mais com o tamanho da bagagem\"\n                    }));\n                }, \n            ]\n        },\n        {\n            q: 'Question 222!',\n            a: [\n                function() {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"cursor-pointer\",\n                        onClick: function() {\n                            points += 1;\n                            setQNum(qNum + 1);\n                        },\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: \"Option 1 q2\"\n                    }));\n                },\n                function() {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"cursor-pointer\",\n                        onClick: function() {\n                            points += 1;\n                            setQNum(qNum + 1);\n                        },\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: \"Option 2 q2\"\n                    }));\n                }, \n            ]\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n            lineNumber: 64,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            qNum === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        className: \"text-1xl font-bold text-green-dark\",\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Problemas para decidir? Vamos fazer um teste de personalidade\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }) : '',\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                className: \"text-3xl\",\n                __source: {\n                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: questions[qNum].q\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: questions[qNum].a.map(function(obj, i) {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"li\", {\n                        id: 'li' + qNum + i,\n                        className: \"pb-3\",\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 78,\n                            columnNumber: 15\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                className: \"text-red-600\",\n                                __source: {\n                                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 57\n                                },\n                                __self: _this1,\n                                children: i + 1 + ') '\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                __source: {\n                                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 109\n                                },\n                                __self: _this1,\n                                children: obj()\n                            })\n                        ]\n                    }));\n                })\n            }),\n            stickers[qNum]()\n        ]\n    }));\n};\n_s(Form, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sdUVBQ0hhLENBQUc7Ozs7Ozs7O1lBQ0RiLElBQUksS0FBSyxDQUFDLHlFQUNSYSxDQUFHOzs7Ozs7Ozt5RkFDSEMsQ0FBRTt3QkFBQ1QsU0FBUyxFQUFDLENBQW9DOzs7Ozs7O2tDQUFDLENBRW5EOzt5RkFDQ1UsQ0FBRTs7Ozs7Ozs7O2lCQUVELENBQUU7aUZBQ0hDLENBQUM7Z0JBQUNYLFNBQVMsRUFBQyxDQUFVOzs7Ozs7OzBCQUFFRyxTQUFTLENBQUNSLElBQUksRUFBRVMsQ0FBQzs7aUZBQ3pDTSxDQUFFOzs7Ozs7OztpRkFDRkUsQ0FBRTs7Ozs7OzswQkFDQVQsU0FBUyxDQUFDUixJQUFJLEVBQUVVLENBQUMsQ0FBQ1EsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFFQyxDQUFDLEVBQUksQ0FBQztvQkFDakMsTUFBTSx1RUFDSEMsQ0FBRTt3QkFBQ0MsRUFBRSxFQUFFLENBQUksTUFBR3RCLElBQUksR0FBR29CLENBQUM7d0JBQUVmLFNBQVMsRUFBQyxDQUFNOzs7Ozs7OztpR0FBRU0sQ0FBSTtnQ0FBQ04sU0FBUyxFQUFDLENBQWM7Ozs7Ozs7MENBQUVlLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBSTs7aUdBQVNULENBQUk7Ozs7Ozs7MENBQUVRLEdBQUc7Ozs7Z0JBRTVHLENBQUM7O1lBRUZoQixRQUFRLENBQUNILElBQUk7OztBQUd0QixDQUFDO0dBbEZZRixJQUFJO0tBQUpBLElBQUk7QUFtRmpCLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzP2ZiOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IHtcbiAgY29uc3QgW3FOdW0sIHNldFFOdW1dID0gdXNlU3RhdGUoMCk7XG4gIGxldCBwb2ludHMgPSAwO1xuICAvKiBleHBsYW5hdGlvbiBvZiBwb2ludHM6XFxcbiAgMCAtIDEwICA9IGNpdHlcbiAgMTAgLSAyMCA9IHRyYXZlbGVyXG4gIDIwKyAgICAgPSBtb3VudGFpbmVlclxuICAqL1xuXG4gIGNvbnN0IHN0aWNrZXJzID0gW1xuICAgICgoKSA9PiB7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdhYnNvbHV0ZSAtdG9wLTIwIC1sZWZ0LTggcm90YXRlLTYgdy00NCBhbmltYXRlLXB1bHNlJyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9GdW5ueS9mYWNlLTEucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgIClcbiAgICB9KVxuICBdO1xuXG4gIGNvbnN0IHF1ZXN0aW9ucyA9IFtcbiAgICB7XG4gICAgICBxOiAnUGFyYSBxdWUgdHUgb3RpbWl6YT8nLFxuICAgICAgYTogW1xuICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4ge3BvaW50cyArPSAyOyBzZXRRTnVtKHFOdW0gKyAxKX19PkEgYmFnYWdlbSBkZXZlIHNlciBwcsOhdGljYSBlLCBwYXJhIG11aXRvcyBjYXNvcyBkZSB1c288L3NwYW4+XG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHtwb2ludHMgKz0gMTsgc2V0UU51bShxTnVtICsgMSl9fT5Fc3RpbG8sIGV1IHF1ZXJvIHNlciBvIG1haXMgbGVnYWw8L3NwYW4+XG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHtwb2ludHMgKz0gNDsgc2V0UU51bShxTnVtICsgMSl9fT5EdXJhYmlsaWRhZGUsIGRldmUgcmVzaXN0aXIgw6Agc2VsdmEgZSDDoHMgbW9udGFuaGFzPC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiB7cG9pbnRzICs9IDI7IHNldFFOdW0ocU51bSArIDEpfX0+TyB0YW1hbmhvIGltcG9ydGEg8J+NhiBQcmVvY3Vwby1tZSBtYWlzIGNvbSBvIHRhbWFuaG8gZGEgYmFnYWdlbTwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgcTogJ1F1ZXN0aW9uIDIyMiEnLFxuICAgICAgYTogW1xuICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4ge3BvaW50cyArPSAxOyBzZXRRTnVtKHFOdW0gKyAxKX19Pk9wdGlvbiAxIHEyPC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiB7cG9pbnRzICs9IDE7IHNldFFOdW0ocU51bSArIDEpfX0+T3B0aW9uIDIgcTI8L3NwYW4+XG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgIF1cbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cU51bSA9PT0gMCA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMXhsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLWRhcmtcIj5cbiAgICAgICAgICBQcm9ibGVtYXMgcGFyYSBkZWNpZGlyPyBWYW1vcyBmYXplciB1bSB0ZXN0ZSBkZSBwZXJzb25hbGlkYWRlXG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAnJ31cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LTN4bCc+e3F1ZXN0aW9uc1txTnVtXS5xfTwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cXVlc3Rpb25zW3FOdW1dLmEubWFwKChvYmosIGkpID0+e1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8bGkgaWQ9eydsaScgKyBxTnVtICsgaX0gY2xhc3NOYW1lPSdwYi0zJz48c3BhbiBjbGFzc05hbWU9J3RleHQtcmVkLTYwMCc+e2kgKyAxICsgJykgJ308L3NwYW4+PHNwYW4+e29iaigpfTwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7c3RpY2tlcnNbcU51bV0oKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb3JtIiwib25TdWJtaXQiLCJxTnVtIiwic2V0UU51bSIsInBvaW50cyIsInN0aWNrZXJzIiwiaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwicXVlc3Rpb25zIiwicSIsImEiLCJzcGFuIiwib25DbGljayIsImRpdiIsImgzIiwiYnIiLCJwIiwidWwiLCJtYXAiLCJvYmoiLCJpIiwibGkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form.js\n");

/***/ })

});