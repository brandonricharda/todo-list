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

/***/ "./src/displayProjectTasks.js":
/*!************************************!*\
  !*** ./src/displayProjectTasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTask.js */ \"./src/displayTask.js\");\n\n\nconst displayProjectTasks = (function(project) {\n    let taskListContainer = document.getElementById(\"task-list\");\n    taskListContainer.innerHTML = \"\";\n    project.tasks.forEach(function(task) {\n        (0,_displayTask_js__WEBPACK_IMPORTED_MODULE_0__.default)(taskListContainer, task);\n    });\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayProjectTasks);\n\n//# sourceURL=webpack://todo-list/./src/displayProjectTasks.js?");

/***/ }),

/***/ "./src/displayTask.js":
/*!****************************!*\
  !*** ./src/displayTask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayTask = (function(container, task) {\n\n    let taskContainer = document.createElement(\"div\");\n    taskContainer.setAttribute(\"class\", \"task flex flex-vertical-center is-grey-on-hover pl-20\");\n\n    let taskMetadataContainer = document.createElement(\"div\");\n    taskMetadataContainer.setAttribute(\"class\", \"task-metadata flex-10 flex-column flex\");\n\n    let taskName = document.createElement(\"h3\");\n    taskName.innerHTML = task.name;\n    taskMetadataContainer.appendChild(taskName);\n\n    let taskDueDate = document.createElement(\"p\");\n    taskDueDate.innerHTML = task.dueDate;\n    taskMetadataContainer.appendChild(taskDueDate);\n\n    taskContainer.appendChild(taskMetadataContainer);\n\n    let taskCompleteButton = document.createElement(\"button\");\n    taskCompleteButton.innerHTML = \"Complete\";\n    taskCompleteButton.setAttribute(\"class\", \"flex-1 flat-button has-text-centered-mobile has-pointer squared-35 is-green has-white-text width-60-mobile\");\n    taskContainer.appendChild(taskCompleteButton);\n\n    let taskInfoButton = document.createElement(\"button\");\n    taskInfoButton.innerHTML = \"Info\";\n    taskInfoButton.setAttribute(\"class\", \"is-orange flex-1 flat-button has-text-centered-mobile has-pointer squared-35 has-white-text width-60-mobile\");\n    taskContainer.appendChild(taskInfoButton);\n\n    let taskDeleteButton = document.createElement(\"button\");\n    taskDeleteButton.innerHTML = \"Delete\";\n    taskDeleteButton.setAttribute(\"class\", \"is-red flex-1 flat-button has-text-centered-mobile has-pointer squared-35 has-white-text width-60-mobile mr-20 mr-0-mobile\");\n    taskContainer.appendChild(taskDeleteButton);\n\n    container.appendChild(taskContainer);\n    \n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTask);\n\n//# sourceURL=webpack://todo-list/./src/displayTask.js?");

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _newProjectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProjectForm */ \"./src/newProjectForm.js\");\n/* harmony import */ var _displayProjectTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayProjectTasks */ \"./src/displayProjectTasks.js\");\n/* harmony import */ var _newTaskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newTaskForm */ \"./src/newTaskForm.js\");\n\n\n\n\n\nconst domController = (function() {\n\n    let newProjectButton = document.getElementById(\"new-project-button\");\n    let newTaskButton = document.getElementById(\"new-task-button\");\n    let projectList = document.getElementById(\"project-list\");\n    let currentProject = null;\n\n    let displayLibrary = function(library) {\n        // empty the projectList before populating it again\n        projectList.innerHTML = \"\";\n\n        library.projects.forEach(function(project) {\n\n            let projectButton = document.createElement(\"button\");\n\n            projectButton.addEventListener(\"click\", function() {\n                (0,_displayProjectTasks__WEBPACK_IMPORTED_MODULE_2__.default)(project);\n                currentProject = project;\n            });\n\n            projectButton.innerHTML = project.name;\n            projectButton.setAttribute(\"class\", \"flat-button has-text-centered-mobile has-text-left-desktop has-white-text-on-hover has-pointer is-blue-on-hover transparent-background pl-20 pt-20 pb-20 font-size-20\");\n            projectList.appendChild(projectButton);\n\n        });\n    }\n\n    // activate new project button\n    newProjectButton.addEventListener(\"click\", function() {\n        let form = (0,_newProjectForm__WEBPACK_IMPORTED_MODULE_1__.default)();\n        form.showForm();\n        form.submitButton.addEventListener(\"click\", function() {\n            let project = ___WEBPACK_IMPORTED_MODULE_0__.objectCreationControls.createNewProject(form.returnValue());\n            displayLibrary(___WEBPACK_IMPORTED_MODULE_0__.objectCreationControls.projectLibrary);\n            currentProject = project;\n            (0,_displayProjectTasks__WEBPACK_IMPORTED_MODULE_2__.default)(currentProject);\n            form.hideForm();\n        });\n    });\n\n    newTaskButton.addEventListener(\"click\", function() {\n        let form = (0,_newTaskForm__WEBPACK_IMPORTED_MODULE_3__.default)();\n        form.showForm();\n        form.submitButton.addEventListener(\"click\", function() {\n            ___WEBPACK_IMPORTED_MODULE_0__.objectCreationControls.createNewTask(form.returnValue(), currentProject);\n            (0,_displayProjectTasks__WEBPACK_IMPORTED_MODULE_2__.default)(currentProject);\n            form.hideForm();\n        });\n    });\n\n    return {\n        displayLibrary\n    }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domController);\n\n//# sourceURL=webpack://todo-list/./src/domController.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emptyContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptyContainer */ \"./src/emptyContainer.js\");\n\n\nconst newProjectForm = (function() {\n\n    let container = document.getElementById(\"project-form-container\");\n    let nameInput = document.createElement(\"input\");\n    let submitButton = document.createElement(\"button\");\n    let hideButton = document.createElement(\"button\");\n\n    return {\n        showForm: function() {\n            // before adding a new form, make sure the container is empty (aka hide form)\n            container.innerHTML = \"\";\n\n            nameInput.setAttribute(\"id\", \"project-name-input\");\n            nameInput.setAttribute(\"class\", \"flex-1 lh-50 has-text-centered borderless\");\n            nameInput.setAttribute(\"placeholder\", \"Project Name\");\n\n            submitButton.innerHTML = \"Create\";\n            submitButton.setAttribute(\"class\", \"flex-1 flat-button is-green has-white-text has-pointer ml-20-mobile mr-20-mobile\");\n            submitButton.setAttribute(\"id\", \"submit-button\");\n\n            hideButton.innerHTML = \"Cancel\";\n            hideButton.setAttribute(\"class\", \"flex-1 flat-button is-red has-white-text has-pointer ml-20-mobile mr-20-mobile\");\n\n            container.appendChild(nameInput);\n            container.appendChild(submitButton);\n            container.appendChild(hideButton);\n\n            hideButton.addEventListener(\"click\", function() {\n                container.innerHTML = \"\";\n            });\n\n        },\n        hideForm: function() {\n            (0,_emptyContainer__WEBPACK_IMPORTED_MODULE_0__.default)(container);\n        },\n        returnValue: function() {\n            return nameInput.value;\n        },\n        submitButton\n    }\n\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectForm);\n\n//# sourceURL=webpack://todo-list/./src/newProjectForm.js?");

/***/ }),

/***/ "./src/newTaskForm.js":
/*!****************************!*\
  !*** ./src/newTaskForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emptyContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptyContainer */ \"./src/emptyContainer.js\");\n\n\nconst newTaskForm = (function() {\n\n    let container = document.getElementById(\"task-form-container\");\n    let nameInput = document.createElement(\"input\");\n    let descriptionInput = document.createElement(\"input\");\n    let dueDateInput = document.createElement(\"input\");\n    let priorityInput = document.createElement(\"input\");\n    let statusInput = document.createElement(\"input\");\n    let submitButton = document.createElement(\"button\");\n    let hideButton = document.createElement(\"button\");\n\n    return {\n        showForm: function() {\n            // before adding a new form, make sure the container is empty (aka hide form)\n            container.innerHTML = \"\";\n\n            nameInput.setAttribute(\"id\", \"task-name-input\");\n            nameInput.setAttribute(\"class\", \"flex-1 lh-50 has-text-centered borderless no-outline mt-20-mobile\");\n            nameInput.setAttribute(\"placeholder\", \"Task Name\");\n\n            descriptionInput.setAttribute(\"id\", \"task-description-input\");\n            descriptionInput.setAttribute(\"class\", \"flex-1 lh-50 has-text-centered borderless no-outline\");\n            descriptionInput.setAttribute(\"placeholder\", \"Task Description\");\n\n            dueDateInput.setAttribute(\"id\", \"task-due-date-input\");\n            dueDateInput.setAttribute(\"class\", \"flex-1 lh-50 has-text-centered borderless no-outline\");\n            dueDateInput.setAttribute(\"placeholder\", \"Due Date\");\n\n            priorityInput.setAttribute(\"id\", \"task-priority-input\");\n            priorityInput.setAttribute(\"class\", \"flex-1 lh-50 has-text-centered borderless no-outline\");\n            priorityInput.setAttribute(\"placeholder\", \"Priority\");\n\n            statusInput.setAttribute(\"id\", \"task-status-input\");\n            statusInput.setAttribute(\"class\", \"flex-1 lh-50 has-text-centered borderless no-outline\");\n            statusInput.setAttribute(\"placeholder\", \"Status\");\n\n            submitButton.innerHTML = \"Create\";\n            submitButton.setAttribute(\"class\", \"flex-1 flat-button is-green has-white-text has-pointer ml-20-mobile mr-20-mobile lh-50\");\n            submitButton.setAttribute(\"id\", \"submit-button\");\n\n            hideButton.innerHTML = \"Cancel\";\n            hideButton.setAttribute(\"class\", \"flex-1 flat-button is-red has-white-text has-pointer ml-20-mobile mr-20-mobile lh-50\");\n\n            container.appendChild(nameInput);\n            container.appendChild(descriptionInput);\n            container.appendChild(dueDateInput);\n            container.appendChild(priorityInput);\n            container.appendChild(statusInput);\n            container.appendChild(submitButton);\n            container.appendChild(hideButton);\n\n            hideButton.addEventListener(\"click\", function() {\n                container.innerHTML = \"\";\n            });\n        },\n        hideForm: function() {\n            (0,_emptyContainer__WEBPACK_IMPORTED_MODULE_0__.default)(container);\n        },\n        returnValue: function() {\n            return {\n                Name: nameInput.value,\n                Description: descriptionInput.value,\n                DueDate: dueDateInput.value,\n                Priority: priorityInput.value,\n                Status: statusInput.value\n            }\n        },\n        submitButton\n    }\n\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTaskForm);\n\n//# sourceURL=webpack://todo-list/./src/newTaskForm.js?");

/***/ }),

/***/ "./src/objectCreationController.js":
/*!*****************************************!*\
  !*** ./src/objectCreationController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectLibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectLibrary */ \"./src/projectLibrary.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\nconst objectCreationController = (function() {\n    let projectLibrary = new _projectLibrary__WEBPACK_IMPORTED_MODULE_2__.default();\n    return {\n        createNewProject: function(name) { \n            if (name == \"\") { return false };\n            let project = new _project__WEBPACK_IMPORTED_MODULE_1__.default(name);\n            projectLibrary.addProject(project);\n            ___WEBPACK_IMPORTED_MODULE_0__.domControls.displayLibrary(projectLibrary);\n            return project;\n        },\n        createNewTask: function(taskParams, project) {\n            let name = taskParams.Name;\n            if (name == \"\") { return false };\n            let description = taskParams.Description;\n            let dueDate = taskParams.DueDate;\n            let priority = taskParams.Priority;\n            let status = taskParams.Status;\n            let task = new _task__WEBPACK_IMPORTED_MODULE_3__.default(name, description, dueDate, priority, status);\n            project.tasks.push(task);\n            ___WEBPACK_IMPORTED_MODULE_0__.domControls.displayLibrary(projectLibrary);\n        },\n        projectLibrary\n    }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (objectCreationController);\n\n//# sourceURL=webpack://todo-list/./src/objectCreationController.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectLibrary.js":
/*!*******************************!*\
  !*** ./src/projectLibrary.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ProjectLibrary {\n\n    constructor() { this.projects = [] }\n\n    addProject(project) {\n        this.projects.push(project);\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectLibrary);\n\n//# sourceURL=webpack://todo-list/./src/projectLibrary.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n    constructor(name, description, dueDate, priority, status) {\n        this.name = name;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.status = status;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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