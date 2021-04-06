/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_accordions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/accordions */ "./src/js/components/accordions.js");
/* harmony import */ var _components_countDownTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/countDownTimer */ "./src/js/components/countDownTimer.js");

 // import dropdown from "./components/dropdown";
// import tabs from "./components/tabs";
// window.onload = function () {
//     accordions.init();
//     countDown.init();
//     // dropdown.init();
//     // tabs.init();
// }

window.addEventListener('load', _components_countDownTimer__WEBPACK_IMPORTED_MODULE_1__.default.init);

/***/ }),

/***/ "./src/js/components/accordions.js":
/*!*****************************************!*\
  !*** ./src/js/components/accordions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var accordions = {
  init: function init() {
    this.accordions = document.querySelectorAll(".accordion-group");
    var accordionsBtns = document.querySelectorAll(".accordion-group .accordion-button");

    if (!this.accordions.length) {
      return;
    }

    this.registerEvents();
  },
  registerEvents: function registerEvents() {
    var _this = this;

    Array.prototype.slice.call(this.accordions).map(function (group, index) {
      var accordionHeading = group.querySelector('.accordion-heading');
      var accordionPanel = group.querySelector('.accordion-detail');
      accordionHeading.setAttribute('id', 'accordionHeader' + index);
      accordionPanel.setAttribute('id', 'accordionPanel' + index);
      accordionPanel.setAttribute('aria-labeledby', 'accordionHeader' + index);
      group.addEventListener("click", _this.toggleAccordian);
    });
  },
  toggleAccordian: function toggleAccordian() {
    var button = this.querySelector('.accordion-button');
    var expandedState = false;

    if (this.classList.contains("is-expanded")) {
      expandedState = false;
      this.classList.remove("is-expanded");
      button.classList.remove('active');
    } else {
      expandedState = true;
      this.classList.add("is-expanded");
      button.classList.add('active');
    }

    accordion.setAnimateVisibility(expandedState, this);
    accordion.setAriaState(expandedState, this);
  },
  setAriaState: function setAriaState(openState, group) {
    openState === false ? group.setAttribute("aria-expanded", "false") : group.setAttribute("aria-expanded", "true");
  },
  setAnimateVisibility: function setAnimateVisibility(openState, group) {
    var thisDetail = group.querySelector('.accordion-detail');

    if (openState === false) {
      thisDetail.classList.remove('animate-visibility');
    } else {
      setTimeout(function () {
        thisDetail.classList.add('animate-visibility');
      }, 10);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordions); // window.addEventListener('load', () => {
//     dropDown.init();
//     accordion.init();
//     countdownTimer.init();
//     tab.init();
// })

/***/ }),

/***/ "./src/js/components/countDownTimer.js":
/*!*********************************************!*\
  !*** ./src/js/components/countDownTimer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var countDownTimer = {
  init: function init() {
    var _this = this;

    this.timers = Array.prototype.slice.call(document.querySelectorAll('.countdown__container'));

    if (!this.timers) {
      return;
    }

    this.timers.forEach(function (timer) {
      _this.time = timer;
      countDownTimer.count(_this.time);
    });
  },
  count: function count(root) {
    var pendulum;
    var targetDate;
    var eleDate = root.getAttribute('data-countdown');

    if (eleDate === '') {
      var d = new Date();
      targetDate = d.setDate(d.getDate() + 1);
    } else {
      targetDate = new Date(eleDate);
    }

    pendulum = setInterval(function () {
      var current = Date.now();
      var diff = targetDate - current;

      if (diff < 0) {
        clearTimeout(pendulum);
      }

      countDownTimer.logTime(diff, root);
    }, 1000);
  },
  logTime: function logTime(diff, root) {
    var dayDisplay = root.querySelector('.countdown__days');
    var hourDisplay = root.querySelector('.countdown__hours');
    var minsDisplay = root.querySelector('.countdown__mins');
    var secsDisplay = root.querySelector('.countdown__secs');
    var days = Math.floor(diff / 1000 / 60 / 60 / 24);
    var hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    var mins = Math.floor(diff / 1000 / 60) % 60;
    var secs = Math.floor(diff / 1000) % 60;
    dayDisplay.textContent = "".concat(days < 10 ? 0 : '').concat(days, " :");
    hourDisplay.textContent = "".concat(hours < 10 ? 0 : '').concat(hours, " :");
    minsDisplay.textContent = "".concat(mins < 10 ? 0 : '').concat(mins, " :");
    secsDisplay.textContent = "".concat(secs < 10 ? 0 : '').concat(secs);

    if (diff < 0) {
      dayDisplay.textContent = "00 :";
      hourDisplay.textContent = "00 :";
      minsDisplay.textContent = "00 :";
      secsDisplay.textContent = "00";
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countDownTimer);

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			"/dist/js/app": 0,
/******/ 			"dist/css/app": 0
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
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkUI_components"] = self["webpackChunkUI_components"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/app"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;