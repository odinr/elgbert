(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./src/examples/callback_1.ts":
/*!************************************!*\
  !*** ./src/examples/callback_1.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst randomInt = (min, max) => {\n    return Math.floor(Math.random() * max - min) + min;\n};\nconst workDuration = () => randomInt(100, 500);\nconst fetch = (ingredient) => {\n    return setTimeout(() => {\n        console.log(`Fetched: ${ingredient}`);\n        return ingredient;\n    }, workDuration());\n};\nconst apply = (dish, ingredient) => {\n    setTimeout(() => {\n        dish.ingredients.push(ingredient);\n        console.log(`Applied: ${ingredient}`);\n    }, workDuration());\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n    const hamburger = {\n        name: \"🍔 Hamburger\",\n        ingredients: new Array()\n    };\n    apply(hamburger, fetch('🍞Bun'));\n    apply(hamburger, fetch('🥩Patty'));\n    apply(hamburger, fetch('🧀Chesse'));\n    apply(hamburger, fetch('🥓Bacon'));\n    apply(hamburger, fetch('🍞Bun'));\n    return hamburger;\n});\n\n\n//# sourceURL=webpack:///./src/examples/callback_1.ts?");

/***/ })

}]);