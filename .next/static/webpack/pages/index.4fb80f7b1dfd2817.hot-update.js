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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Form\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Form = function(param) {\n    var onSubmit = param.onSubmit;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), qNum = ref[0], setQNum = ref[1];\n    var points = 0;\n    /* explanation of points:\\\n  0 - 10  = city\n  10 - 20 = traveler\n  20+     = mountaineer\n  */ var questions = [\n        {\n            q: 'Para que tu otimizas?',\n            a: [\n                function() {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"cursor-pointer\",\n                        onClick: function() {\n                            points += 1;\n                            setQNum(qNum + 1);\n                        },\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: \"Option 1\"\n                    }));\n                },\n                function() {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"cursor-pointer\",\n                        onClick: function() {\n                            points += 1;\n                            setQNum(qNum + 1);\n                        },\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: \"Option 2\"\n                    }));\n                },\n                function() {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"cursor-pointer\",\n                        onClick: function() {\n                            points += 1;\n                            setQNum(qNum + 1);\n                        },\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: \"Option 3\"\n                    }));\n                }, \n            ]\n        },\n        {\n            q: 'Question 222!',\n            a: [\n                function() {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"cursor-pointer\",\n                        onClick: function() {\n                            points += 1;\n                            setQNum(qNum + 1);\n                        },\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: \"Option 1 q2\"\n                    }));\n                },\n                function() {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                        className: \"cursor-pointer\",\n                        onClick: function() {\n                            points += 1;\n                            setQNum(qNum + 1);\n                        },\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        },\n                        __self: _this1,\n                        children: \"Option 2 q2\"\n                    }));\n                }, \n            ]\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n            lineNumber: 51,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            qNum === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                className: \"text-2xl font-bold text-green-dark\",\n                __source: {\n                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: \"Problemas para decidir? Vamos fazer um teste de personalidade\"\n            }) : '',\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                className: \"text-lg\",\n                __source: {\n                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: questions[qNum].q\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                __source: {\n                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: questions[qNum].a.map(function(obj, i) {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                        id: 'li' + i,\n                        __source: {\n                            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Form.js\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        },\n                        __self: _this1,\n                        children: obj()\n                    }));\n                })\n            })\n        ]\n    }));\n};\n_s(Form, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsRUFBRSxDQUFJLE1BQUdGLENBQUM7Ozs7Ozs7a0NBQUdELEdBQUc7O2dCQUUxQixDQUFDOzs7O0FBSVgsQ0FBQztHQWpFWWpCLElBQUk7S0FBSkEsSUFBSTtBQWtFakIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm0uanM/ZmI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4ge1xuICBjb25zdCBbcU51bSwgc2V0UU51bV0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IHBvaW50cyA9IDA7XG4gIC8qIGV4cGxhbmF0aW9uIG9mIHBvaW50czpcXFxuICAwIC0gMTAgID0gY2l0eVxuICAxMCAtIDIwID0gdHJhdmVsZXJcbiAgMjArICAgICA9IG1vdW50YWluZWVyXG4gICovXG5cbiAgY29uc3QgcXVlc3Rpb25zID0gW1xuICAgIHtcbiAgICAgIHE6ICdQYXJhIHF1ZSB0dSBvdGltaXphcz8nLFxuICAgICAgYTogW1xuICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4ge3BvaW50cyArPSAxOyBzZXRRTnVtKHFOdW0gKyAxKX19Pk9wdGlvbiAxPC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiB7cG9pbnRzICs9IDE7IHNldFFOdW0ocU51bSArIDEpfX0+T3B0aW9uIDI8L3NwYW4+XG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHtwb2ludHMgKz0gMTsgc2V0UU51bShxTnVtICsgMSl9fT5PcHRpb24gMzwvc3Bhbj5cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgcTogJ1F1ZXN0aW9uIDIyMiEnLFxuICAgICAgYTogW1xuICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4ge3BvaW50cyArPSAxOyBzZXRRTnVtKHFOdW0gKyAxKX19Pk9wdGlvbiAxIHEyPC9zcGFuPlxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiB7cG9pbnRzICs9IDE7IHNldFFOdW0ocU51bSArIDEpfX0+T3B0aW9uIDIgcTI8L3NwYW4+XG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgIF1cbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cU51bSA9PT0gMCA/IChcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLWRhcmtcIj5cbiAgICAgICAgICBQcm9ibGVtYXMgcGFyYSBkZWNpZGlyPyBWYW1vcyBmYXplciB1bSB0ZXN0ZSBkZSBwZXJzb25hbGlkYWRlXG4gICAgICAgIDwvaDM+XG4gICAgICApIDogJyd9XG4gICAgICA8YnIgLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWxnJz57cXVlc3Rpb25zW3FOdW1dLnF9PC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3F1ZXN0aW9uc1txTnVtXS5hLm1hcCgob2JqLCBpKSA9PntcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPGxpIGlkPXsnbGknICsgaX0+e29iaigpfTwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIm9uU3VibWl0IiwicU51bSIsInNldFFOdW0iLCJwb2ludHMiLCJxdWVzdGlvbnMiLCJxIiwiYSIsInNwYW4iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGl2IiwiaDMiLCJiciIsInAiLCJ1bCIsIm1hcCIsIm9iaiIsImkiLCJsaSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Form.js\n");

/***/ })

});