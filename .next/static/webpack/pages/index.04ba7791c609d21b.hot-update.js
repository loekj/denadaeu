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

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form */ \"./components/Form.js\");\n/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! focus-trap-react */ \"./node_modules/focus-trap-react/dist/focus-trap-react.js\");\n/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar Modal = function(param) {\n    var onClickOutside = param.onClickOutside, onKeyDown = param.onKeyDown, modalRef = param.modalRef, //   buttonRef,\n    //   closeModal,\n    onSubmit = param.onSubmit;\n    return(/*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(// <FocusTrap>\n    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"aside\", {\n        tag: \"aside\",\n        role: \"dialog\",\n        tabIndex: \"-1\",\n        \"aria-modal\": \"true\",\n        className: \"modal-cover\",\n        onClick: onClickOutside,\n        onKeyDown: onKeyDown,\n        __source: {\n            fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Modal.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"modal-area\",\n            ref: modalRef,\n            __source: {\n                fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Modal.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"modal-body\",\n                __source: {\n                    fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Modal.js\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Form__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                    onSubmit: onSubmit,\n                    __source: {\n                        fileName: \"/Users/loekjanssen/Downloads/De Nada Eu/denadaeu/components/Modal.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    },\n                    __self: _this\n                })\n            })\n        })\n    }), document.body));\n};\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBQ0g7QUFDVzs7QUFDakMsR0FBSyxDQUFDSSxLQUFLLEdBQUcsUUFDakIsUUFNRSxDQUFDO1FBTkxDLGNBQWMsU0FBZEEsY0FBYyxFQUNkQyxTQUFTLFNBQVRBLFNBQVMsRUFDVEMsUUFBUSxTQUFSQSxRQUFRLEVBQ1YsRUFBZTtJQUNmLEVBQWdCO0lBQ2RDLFFBQVEsU0FBUkEsUUFBUTtJQUVSLE1BQU0sZUFBQ1AsNkRBQXFCLENBQzFCLEVBQWM7eUVBQ1hTLENBQUs7UUFDSkMsR0FBRyxFQUFDLENBQU87UUFDWEMsSUFBSSxFQUFDLENBQVE7UUFDYkMsUUFBUSxFQUFDLENBQUk7UUFDYkMsQ0FBVSxhQUFDLENBQU07UUFDakJDLFNBQVMsRUFBQyxDQUFhO1FBQ3ZCQyxPQUFPLEVBQUVYLGNBQWM7UUFDdkJDLFNBQVMsRUFBRUEsU0FBUzs7Ozs7Ozt1RkFFbkJXLENBQUc7WUFBQ0YsU0FBUyxFQUFDLENBQVk7WUFBQ0csR0FBRyxFQUFFWCxRQUFROzs7Ozs7OzJGQWV0Q1UsQ0FBRztnQkFBQ0YsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7K0ZBQ3hCYix1Q0FBSTtvQkFBQ00sUUFBUSxFQUFFQSxRQUFROzs7Ozs7Ozs7O1FBSWhDVyxRQUFRLENBQUNDLElBQUk7QUFFakIsQ0FBQztLQXpDWWhCLEtBQUs7QUEyQ2xCLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC5qcz8wMjgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi9Gb3JtJztcclxuaW1wb3J0IEZvY3VzVHJhcCBmcm9tICdmb2N1cy10cmFwLXJlYWN0JztcclxuZXhwb3J0IGNvbnN0IE1vZGFsID0gKHtcclxuICBvbkNsaWNrT3V0c2lkZSxcclxuICBvbktleURvd24sXHJcbiAgbW9kYWxSZWYsXHJcbi8vICAgYnV0dG9uUmVmLFxyXG4vLyAgIGNsb3NlTW9kYWwsXHJcbiAgb25TdWJtaXRcclxufSkgPT4ge1xyXG4gIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXHJcbiAgICAvLyA8Rm9jdXNUcmFwPlxyXG4gICAgICA8YXNpZGVcclxuICAgICAgICB0YWc9XCJhc2lkZVwiXHJcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgdGFiSW5kZXg9XCItMVwiXHJcbiAgICAgICAgYXJpYS1tb2RhbD1cInRydWVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLWNvdmVyXCJcclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrT3V0c2lkZX1cclxuICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYXJlYVwiIHJlZj17bW9kYWxSZWZ9PlxyXG4gICAgICAgICAgey8qIDxidXR0b25cclxuICAgICAgICAgICAgcmVmPXtidXR0b25SZWZ9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBNb2RhbFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNsb3NlLW1vZGFsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiX21vZGFsLWNsb3NlXCJcclxuICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJjbG9zZS1tb2RhbFwiIGNsYXNzTmFtZT1cIl9oaWRlLXZpc3VhbFwiPlxyXG4gICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJfbW9kYWwtY2xvc2UtaWNvblwiIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTSAxMCwxMCBMIDMwLDMwIE0gMzAsMTAgTCAxMCwzMFwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FzaWRlPixcclxuICAgIGRvY3VtZW50LmJvZHlcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiRm9ybSIsIkZvY3VzVHJhcCIsIk1vZGFsIiwib25DbGlja091dHNpZGUiLCJvbktleURvd24iLCJtb2RhbFJlZiIsIm9uU3VibWl0IiwiY3JlYXRlUG9ydGFsIiwiYXNpZGUiLCJ0YWciLCJyb2xlIiwidGFiSW5kZXgiLCJhcmlhLW1vZGFsIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRpdiIsInJlZiIsImRvY3VtZW50IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Modal.js\n");

/***/ })

});