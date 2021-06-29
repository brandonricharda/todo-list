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

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _newProjectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProjectForm */ \"./src/newProjectForm.js\");\n\n\nconst domController = (function() {\n    // select new project and new task buttons\n    let newProjectButton = document.getElementById(\"new-project-button\");\n    let newTaskButton = document.getElementById(\"new-task-button\");\n    // activate new project and new task buttons\n    newProjectButton.addEventListener(\"click\", function() {\n        (0,_newProjectForm__WEBPACK_IMPORTED_MODULE_0__.default)().showForm();\n    });\n    newTaskButton.addEventListener(\"click\", function() {\n        console.log(\"New task button clicked!\");\n    });\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domController);\n\n//# sourceURL=webpack://todo-list/./src/domController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController */ \"./src/domController.js\");\n\n\n// activate the default DOM controls (i.e. New Project and New Task buttons)\n(0,_domController__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/newProjectForm.js":
/*!*******************************!*\
  !*** ./src/newProjectForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst newProjectForm = (function() {\n\n    let projectFormContainer = document.getElementById(\"project-form-container\");\n\n    return {\n        hideForm: function() {\n            projectFormContainer.innerHTML = \"\";\n        },\n        showForm: function() {\n            this.hideForm();\n            // create new project form elements\n            let projectNameInput = document.createElement(\"input\");\n            projectNameInput.setAttribute(\"id\", \"project-name-input\");\n            projectNameInput.setAttribute(\"class\", \"flex-1\");\n            projectNameInput.setAttribute(\"placeholder\", \"Project Name\");\n            let projectSubmitButton = document.createElement(\"button\");\n            projectSubmitButton.innerHTML = \"Create\";\n            projectSubmitButton.setAttribute(\"id\", \"project-submit-button\");\n            projectSubmitButton.setAttribute(\"class\", \"flex-1 flat-button is-green has-white-text\");\n            // add new project form elements to DOM\n            projectFormContainer.appendChild(projectNameInput);\n            projectFormContainer.appendChild(projectSubmitButton);\n        }\n    }\n\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectForm);\n\n//# sourceURL=webpack://todo-list/./src/newProjectForm.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;