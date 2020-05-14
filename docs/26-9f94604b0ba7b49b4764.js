(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./src/pages/intro/tick-example.ts":
/*!*****************************************!*\
  !*** ./src/pages/intro/tick-example.ts ***!
  \*****************************************/
/*! exports provided: render, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ \"./node_modules/lit-html/lit-html.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ \"./src/components/index.ts\");\n/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ \"./node_modules/lit-element/lit-element.js\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst highlights = [\n    [[18, 18]],\n    [[9, 12]],\n];\nlet CodePageTickExample = class CodePageTickExample extends _components__WEBPACK_IMPORTED_MODULE_1__[\"PageElement\"] {\n    renderMain() {\n        const highlight = highlights[this.step - 1];\n        if (this.step === this.steps) {\n            requestAnimationFrame(() => this.CodeRunner.run());\n        }\n        const runCode = () => __awaiter(this, void 0, void 0, function* () {\n            const { Component } = yield __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ../../examples/tick */ \"./src/examples/tick.ts\"));\n            (new Component).render();\n            yield new Promise(r => setTimeout(r, 100));\n            return \"👍🏻 Render complete\";\n        });\n        return lit_html__WEBPACK_IMPORTED_MODULE_0__[\"html\"] `\n            <mdc-grid-cell span=\"12\">\n                <cwc-code-highlight theme=\"light\" src=\"./examples/tick.ts\" .highlight=\"${highlight}\"></cwc-code-highlight>\n                <p>A common mistake is trying to access the state before nextTick</p>\n                <cwc-code-runner .execute=\"${runCode}\"></cwc-code-runner>\n            </mdc-grid-cell>\n        `;\n    }\n};\n__decorate([\n    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__[\"query\"])('cwc-code-runner')\n], CodePageTickExample.prototype, \"CodeRunner\", void 0);\nCodePageTickExample = __decorate([\n    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__[\"customElement\"])('cwc-learn-page-code-tick-example')\n], CodePageTickExample);\nconst render = lit_html__WEBPACK_IMPORTED_MODULE_0__[\"html\"] `<cwc-learn-page-code-tick-example steps=\"${highlights.length + 1}\">\n    <div slot=\"header\">\n        <h1>TICK - example</h1>\n    </div>\n</cwc-learn-page-code-tick-example>`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n\n//# sourceURL=webpack:///./src/pages/intro/tick-example.ts?");

/***/ })

}]);