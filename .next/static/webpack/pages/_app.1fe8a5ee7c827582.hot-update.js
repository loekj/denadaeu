"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\n// document.getElementById(\"z1\").style.zIndex = \"0\";\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), pageURL = ref[0], setPageURL = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isNativeShare = ref1[0], setNativeShare = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // console.log('in useeffect')\n        setPageURL(window.location.href);\n        if (globalThis.navigator) {\n            setNativeShare(true);\n        } else {\n        // console.log('meh')\n        }\n        aos__WEBPACK_IMPORTED_MODULE_3___default().init({\n            easing: \"ease-out-cubic\",\n            once: true,\n            offset: 50\n        });\n    }, [\n        globalThis.window,\n        globalThis.navigator\n    ]);\n    var mobileFn = function() {\n        console.log('in mobile ffnnnn');\n        var a = __webpack_require__.g.window.navigator.userAgent || __webpack_require__.g.window.navigator.vendor || __webpack_require__.g.window.opera;\n        if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4))) {\n            window.alert('Dispon\\xedvel apenas para desktop / laptop!');\n            window.location = 'https://www.google.com';\n        } else {\n            console.log('not on mobile');\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        __source: {\n            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/pages/_app.js\",\n            lineNumber: 47,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            isNativeShare ? mobileFn() : console.log('not loaded yet'),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n            }, pageProps, {\n                __source: {\n                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/pages/_app.js\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                },\n                __self: this\n            }))\n        ]\n    }));\n}\n_s(MyApp, \"hM5kSpP3esBNgrQqscvzLNNNt6w=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDcEI7QUFFVDtBQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpCLEVBQW9EO1NBQzNDSSxLQUFLLENBQUMsS0FBd0IsRUFBRSxDQUFDO1FBQXpCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTOztJQUNuQyxHQUFLLENBQXlCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFsQ0ssT0FBTyxHQUFnQkwsR0FBWSxLQUExQk0sVUFBVSxHQUFJTixHQUFZO0lBQzFDLEdBQUssQ0FBbUNBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQS9DTyxhQUFhLEdBQW9CUCxJQUFlLEtBQWpDUSxjQUFjLEdBQUlSLElBQWU7SUFDdkRELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBOEI7UUFDOUJPLFVBQVUsQ0FBQ0csTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUk7UUFDL0IsRUFBRSxFQUFFQyxVQUFVLENBQUNDLFNBQVMsRUFBRSxDQUFDO1lBQ3pCTCxjQUFjLENBQUMsSUFBSTtRQUNyQixDQUFDLE1BQU0sQ0FBQztRQUNOLEVBQXFCO1FBQ3ZCLENBQUM7UUFFRFAsK0NBQVEsQ0FBQyxDQUFDO1lBQ1JjLE1BQU0sRUFBRSxDQUFnQjtZQUN4QkMsSUFBSSxFQUFFLElBQUk7WUFDVkMsTUFBTSxFQUFFLEVBQUU7UUFDWixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNMO1FBQUFBLFVBQVUsQ0FBQ0gsTUFBTTtRQUFFRyxVQUFVLENBQUNDLFNBQVM7SUFBQSxDQUFDO0lBRTVDLEdBQUssQ0FBQ0ssUUFBUSxHQUFHLFFBQ25CLEdBRHlCLENBQUM7UUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWtCO1FBQzlCLEdBQUssQ0FBQ0MsQ0FBQyxHQUFHQyxxQkFBTSxDQUFDYixNQUFNLENBQUNJLFNBQVMsQ0FBQ1UsU0FBUyxJQUFJRCxxQkFBTSxDQUFDYixNQUFNLENBQUNJLFNBQVMsQ0FBQ1csTUFBTSxJQUFJRixxQkFBTSxDQUFDYixNQUFNLENBQUNnQixLQUFLO1FBQ2xHLEVBQUUsNlRBQzZUQyxJQUFJLENBQzNUTCxDQUFDLCtrREFFcWtESyxJQUFJLENBQzFrREwsQ0FBQyxDQUFDTSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFFbkIsQ0FBQztZQUNEbEIsTUFBTSxDQUFDbUIsS0FBSyxDQUFDLENBQTBDO1lBQ3ZEbkIsTUFBTSxDQUFDQyxRQUFRLEdBQUcsQ0FBd0I7UUFDNUMsQ0FBQyxNQUFNLENBQUM7WUFDTlMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZTtRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sdUVBQ0h0Qix1REFBYzs7Ozs7Ozs7WUFDWlMsYUFBYSxHQUFHVyxRQUFRLEtBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFnQjtpRkFDM0JqQixTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztHQTNDUUYsS0FBSztLQUFMQSxLQUFLO0FBNkNkLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5cbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xuaW1wb3J0IFwiYW9zL2Rpc3QvYW9zLmNzc1wiO1xuXG5cblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6MVwiKS5zdHlsZS56SW5kZXggPSBcIjBcIjtcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbcGFnZVVSTCwgc2V0UGFnZVVSTF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTmF0aXZlU2hhcmUsIHNldE5hdGl2ZVNoYXJlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW4gdXNlZWZmZWN0JylcbiAgICBzZXRQYWdlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICBpZiAoZ2xvYmFsVGhpcy5uYXZpZ2F0b3IpIHtcbiAgICAgIHNldE5hdGl2ZVNoYXJlKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbWVoJylcbiAgICB9XG5cbiAgICBBT1MuaW5pdCh7XG4gICAgICBlYXNpbmc6IFwiZWFzZS1vdXQtY3ViaWNcIixcbiAgICAgIG9uY2U6IHRydWUsXG4gICAgICBvZmZzZXQ6IDUwLFxuICAgIH0pO1xuICB9LCBbZ2xvYmFsVGhpcy53aW5kb3csIGdsb2JhbFRoaXMubmF2aWdhdG9yXSk7XG5cbiAgY29uc3QgbW9iaWxlRm4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2luIG1vYmlsZSBmZm5ubm4nKVxuICAgIGNvbnN0IGEgPSBnbG9iYWwud2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgZ2xvYmFsLndpbmRvdy5uYXZpZ2F0b3IudmVuZG9yIHx8IGdsb2JhbC53aW5kb3cub3BlcmE7XG4gICAgICBpZiAoXG4gICAgICAgICAgLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoXG4gICAgICAgICAgICAgIGFcbiAgICAgICAgICApIHx8XG4gICAgICAgICAgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChcbiAgICAgICAgICAgICAgYS5zdWJzdHIoMCwgNClcbiAgICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgd2luZG93LmFsZXJ0KCdEaXNwb27DrXZlbCBhcGVuYXMgcGFyYSBkZXNrdG9wIC8gbGFwdG9wIScpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICdodHRwczovL3d3dy5nb29nbGUuY29tJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vdCBvbiBtb2JpbGUnKVxuICAgICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAge2lzTmF0aXZlU2hhcmUgPyBtb2JpbGVGbigpXG4gICAgOiBjb25zb2xlLmxvZygnbm90IGxvYWRlZCB5ZXQnKSB9XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBT1MiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInBhZ2VVUkwiLCJzZXRQYWdlVVJMIiwiaXNOYXRpdmVTaGFyZSIsInNldE5hdGl2ZVNoYXJlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZ2xvYmFsVGhpcyIsIm5hdmlnYXRvciIsImluaXQiLCJlYXNpbmciLCJvbmNlIiwib2Zmc2V0IiwibW9iaWxlRm4iLCJjb25zb2xlIiwibG9nIiwiYSIsImdsb2JhbCIsInVzZXJBZ2VudCIsInZlbmRvciIsIm9wZXJhIiwidGVzdCIsInN1YnN0ciIsImFsZXJ0IiwiRnJhZ21lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});