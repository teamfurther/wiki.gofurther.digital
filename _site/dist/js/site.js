/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/site.js":
/*!************************!*\
  !*** ./src/js/site.js ***!
  \************************/
/***/ (() => {

eval("/*\n * SIDEBAR\n */\nvar sidebar = new function () {\n  this.navItems = document.querySelector('.nav__item');\n  this.sidebar = document.querySelector('.sidebar');\n  this.toggle = document.querySelector('.sidebar__toggle');\n\n  // toggle mobile navbar\n  function toggle() {\n    sidebar.sidebar.classList.toggle('is-open');\n    sidebar.toggle.classList.toggle('is-active');\n  }\n  this.toggle.addEventListener('click', toggle);\n\n  // close navbar if item clicked\n  function close() {\n    sidebar.sidebar.classList.remove('is-open');\n    sidebar.toggle.classList.remove('is-active');\n  }\n  if (this.navItems && this.navItems.length > 0) {\n    Array.prototype.forEach.call(this.navItems, function (item) {\n      item.addEventListener('click', close);\n    }.bind(this));\n  }\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2l0ZS5qcy5qcyIsIm5hbWVzIjpbInNpZGViYXIiLCJuYXZJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZSIsImNsYXNzTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsInJlbW92ZSIsImxlbmd0aCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJpdGVtIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lraS5nb2Z1cnRoZXIuZGlnaXRhbC8uL3NyYy9qcy9zaXRlLmpzPzgxYTYiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNJREVCQVJcbiAqL1xubGV0IHNpZGViYXIgPSBuZXcgZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5uYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2l0ZW0nKTtcbiAgICB0aGlzLnNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIHRoaXMudG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3RvZ2dsZScpO1xuXG4gICAgLy8gdG9nZ2xlIG1vYmlsZSBuYXZiYXJcbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgIHNpZGViYXIuc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XG4gICAgICAgIHNpZGViYXIudG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSk7XG5cbiAgICAvLyBjbG9zZSBuYXZiYXIgaWYgaXRlbSBjbGlja2VkXG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIHNpZGViYXIuc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgICAgIHNpZGViYXIudG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5uYXZJdGVtcyAmJiB0aGlzLm5hdkl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLm5hdkl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxPQUFPLEdBQUcsSUFBSSxZQUFXO0VBQ3pCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDcEQsSUFBSSxDQUFDSCxPQUFPLEdBQUdFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsQ0FBQztFQUNqRCxJQUFJLENBQUNDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7O0VBRXhEO0VBQ0EsU0FBU0MsTUFBTSxHQUFHO0lBQ2RKLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDSyxTQUFTLENBQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDM0NKLE9BQU8sQ0FBQ0ksTUFBTSxDQUFDQyxTQUFTLENBQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7RUFDaEQ7RUFDQSxJQUFJLENBQUNBLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFRixNQUFNLENBQUM7O0VBRTdDO0VBQ0EsU0FBU0csS0FBSyxHQUFHO0lBQ2JQLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDSyxTQUFTLENBQUNHLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDM0NSLE9BQU8sQ0FBQ0ksTUFBTSxDQUFDQyxTQUFTLENBQUNHLE1BQU0sQ0FBQyxXQUFXLENBQUM7RUFDaEQ7RUFDQSxJQUFJLElBQUksQ0FBQ1AsUUFBUSxJQUFJLElBQUksQ0FBQ0EsUUFBUSxDQUFDUSxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQzNDQyxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDWixRQUFRLEVBQUUsVUFBVWEsSUFBSSxFQUFFO01BQ3hEQSxJQUFJLENBQUNSLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsS0FBSyxDQUFDO0lBQ3pDLENBQUMsQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2pCO0FBQ0osQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/js/site.js\n");

/***/ }),

/***/ "./src/sass/site.scss":
/*!****************************!*\
  !*** ./src/sass/site.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9zaXRlLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2lraS5nb2Z1cnRoZXIuZGlnaXRhbC8uL3NyYy9zYXNzL3NpdGUuc2Nzcz8yODM5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sass/site.scss\n");

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
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 			"/dist/js/site": 0,
/******/ 			"dist/css/site": 0
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
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwiki_gofurther_digital"] = self["webpackChunkwiki_gofurther_digital"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/site"], () => (__webpack_require__("./src/js/site.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/site"], () => (__webpack_require__("./src/sass/site.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;