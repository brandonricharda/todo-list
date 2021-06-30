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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _emptyContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emptyContainer */ \"./src/emptyContainer.js\");\n/* harmony import */ var _newProjectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProjectForm */ \"./src/newProjectForm.js\");\n\n\n\n\nconst domController = (function() {\n\n    let newProjectButton = document.getElementById(\"new-project-button\");\n    let newTaskButton = document.getElementById(\"new-task-button\");\n    let projectList = document.getElementById(\"project-list\");\n\n    // activate new project button\n    newProjectButton.addEventListener(\"click\", function() {\n        let form = (0,_newProjectForm__WEBPACK_IMPORTED_MODULE_2__.default)();\n        form.showForm();\n        form.submitButton.addEventListener(\"click\", function() {\n            ___WEBPACK_IMPORTED_MODULE_0__.objectCreationControls.createNewProject(form.returnValue());\n            form.hideForm();\n        });\n    });\n\n    newTaskButton.addEventListener(\"click\", function() {\n        console.log(\"New task button clicked!\");\n    });\n\n    return {\n        displayLibrary: function(library) {\n            // empty the projectList before populating it again\n            projectList.innerHTML = \"\";\n            library.projects.forEach( function(project) {\n                let projectButton = document.createElement(\"button\");\n                projectButton.innerHTML = project.name;\n                projectButton.setAttribute(\"class\", \"flat-button has-text-centered-mobile has-text-left-desktop has-white-text-on-hover has-pointer is-blue-on-hover transparent-background pl-20 pt-20 pb-20 font-size-20\");\n                projectList.appendChild(projectButton);\n            });\n        }\n    }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domController);\n\n//# sourceURL=webpack://todo-list/./src/domController.js?");

/***/ }),

/***/ "./src/emptyContainer.js":
/*!*******************************!*\
  !*** ./src/emptyContainer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet emptyContainer = function(container) {\n    container.innerHTML = \"\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emptyContainer);\n\n//# sourceURL=webpack://todo-list/./src/emptyContainer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"objectCreationControls\": () => (/* binding */ objectCreationControls),\n/* harmony export */   \"domControls\": () => (/* binding */ domControls)\n/* harmony export */ });\n/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController */ \"./src/domController.js\");\n/* harmony import */ var _objectCreationController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectCreationController */ \"./src/objectCreationController.js\");\n\n\n\n// activate the default DOM controls (i.e. New Project and New Task buttons)\nlet domControls = (0,_domController__WEBPACK_IMPORTED_MODULE_0__.default)();\n// activate the object creation controller\nlet objectCreationControls = (0,_objectCreationController__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/newProjectForm.js":
/*!*******************************!*\
  !*** ./src/newProjectForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emptyContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptyContainer */ \"./src/emptyContainer.js\");\n\n\nconst newProjectForm = (function() {\n\n    let container = document.getElementById(\"project-form-container\");\n    let nameInput = document.createElement(\"input\");\n    let submitButton = document.createElement(\"button\");\n    let hideButton = document.createElement(\"button\");\n\n    return {\n        showForm: function() {\n            // before adding a new form, make sure the container is empty (aka hide form)\n            (0,_emptyContainer__WEBPACK_IMPORTED_MODULE_0__.default)(container);\n\n            nameInput.setAttribute(\"id\", \"project-name-input\");\n            nameInput.setAttribute(\"class\", \"flex-1\");\n            nameInput.setAttribute(\"placeholder\", \"Project Name\");\n\n            submitButton.innerHTML = \"Create\";\n            submitButton.setAttribute(\"class\", \"flex-1 flat-button is-green has-white-text has-pointer\");\n            submitButton.setAttribute(\"id\", \"submit-button\");\n\n            hideButton.innerHTML = \"Cancel\";\n            hideButton.setAttribute(\"class\", \"flex-1 flat-button is-red has-white-text has-pointer\");\n\n            container.appendChild(nameInput);\n            container.appendChild(submitButton);\n            container.appendChild(hideButton);\n\n            hideButton.addEventListener(\"click\", function() {\n                (0,_emptyContainer__WEBPACK_IMPORTED_MODULE_0__.default)(container);\n            });\n\n        },\n        hideForm: function() {\n            (0,_emptyContainer__WEBPACK_IMPORTED_MODULE_0__.default)(container);\n        },\n        returnValue: function() {\n            return nameInput.value;\n        },\n        submitButton\n    }\n\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectForm);\n\n//# sourceURL=webpack://todo-list/./src/newProjectForm.js?");

/***/ }),

/***/ "./src/objectCreationController.js":
/*!*****************************************!*\
  !*** ./src/objectCreationController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectLibrary */ \"./src/projectLibrary.js\");\n\n\n\n\nconst objectCreationController = (function() {\n    let projectLibrary = new _projectLibrary__WEBPACK_IMPORTED_MODULE_2__.default();\n    return {\n        createNewProject: function(name) { \n            if (name == \"\") { return false };\n            let project = new _project__WEBPACK_IMPORTED_MODULE_1__.default(name);\n            projectLibrary.addProject(project);\n            ___WEBPACK_IMPORTED_MODULE_0__.domControls.displayLibrary(projectLibrary);\n        },\n        projectLibrary\n    }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectCreationController);\n\n//# sourceURL=webpack://todo-list/./src/objectCreationController.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectLibrary.js":
/*!*******************************!*\
  !*** ./src/projectLibrary.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ProjectLibrary {\n\n    constructor() { this.projects = [] }\n\n    addProject(project) {\n        this.projects.push(project);\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectLibrary);\n\n//# sourceURL=webpack://todo-list/./src/projectLibrary.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;