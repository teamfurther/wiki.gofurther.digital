/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("/*\n * SIDEBAR\n */\nvar sidebar = new function () {\n    this.navItems = document.querySelector('.nav__item');\n    this.sidebar = document.querySelector('.sidebar');\n    this.toggle = document.querySelector('.sidebar__toggle');\n\n    // toggle mobile navbar\n    function toggle() {\n        sidebar.sidebar.classList.toggle('is-open');\n        sidebar.toggle.classList.toggle('is-active');\n    }\n    this.toggle.addEventListener('click', toggle);\n\n    // close navbar if item clicked\n    function close() {\n        sidebar.sidebar.classList.remove('is-open');\n        sidebar.toggle.classList.remove('is-active');\n    }\n    if (this.navItems && this.navItems.length > 0) {\n        Array.prototype.forEach.call(this.navItems, function (item) {\n            item.addEventListener('click', close);\n        }.bind(this));\n    }\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2l0ZS5qcz8wNmI0Il0sIm5hbWVzIjpbInNpZGViYXIiLCJuYXZJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZSIsImNsYXNzTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsInJlbW92ZSIsImxlbmd0aCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJpdGVtIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBLElBQUlBLFVBQVUsSUFBSSxZQUFXO0FBQ3pCLFNBQUtDLFFBQUwsR0FBZ0JDLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBaEI7QUFDQSxTQUFLSCxPQUFMLEdBQWVFLFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBY0YsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBZDs7QUFFQTtBQUNBLGFBQVNDLE1BQVQsR0FBa0I7QUFDZEosZ0JBQVFBLE9BQVIsQ0FBZ0JLLFNBQWhCLENBQTBCRCxNQUExQixDQUFpQyxTQUFqQztBQUNBSixnQkFBUUksTUFBUixDQUFlQyxTQUFmLENBQXlCRCxNQUF6QixDQUFnQyxXQUFoQztBQUNIO0FBQ0QsU0FBS0EsTUFBTCxDQUFZRSxnQkFBWixDQUE2QixPQUE3QixFQUFzQ0YsTUFBdEM7O0FBRUE7QUFDQSxhQUFTRyxLQUFULEdBQWlCO0FBQ2JQLGdCQUFRQSxPQUFSLENBQWdCSyxTQUFoQixDQUEwQkcsTUFBMUIsQ0FBaUMsU0FBakM7QUFDQVIsZ0JBQVFJLE1BQVIsQ0FBZUMsU0FBZixDQUF5QkcsTUFBekIsQ0FBZ0MsV0FBaEM7QUFDSDtBQUNELFFBQUksS0FBS1AsUUFBTCxJQUFpQixLQUFLQSxRQUFMLENBQWNRLE1BQWQsR0FBdUIsQ0FBNUMsRUFBK0M7QUFDM0NDLGNBQU1DLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUE2QixLQUFLWixRQUFsQyxFQUE0QyxVQUFVYSxJQUFWLEVBQWdCO0FBQ3hEQSxpQkFBS1IsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JDLEtBQS9CO0FBQ0gsU0FGMkMsQ0FFMUNRLElBRjBDLENBRXJDLElBRnFDLENBQTVDO0FBR0g7QUFDSixDQXRCYSxFQUFkIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU0lERUJBUlxuICovXG5sZXQgc2lkZWJhciA9IG5ldyBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9faXRlbScpO1xuICAgIHRoaXMuc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgdGhpcy50b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdG9nZ2xlJyk7XG5cbiAgICAvLyB0b2dnbGUgbW9iaWxlIG5hdmJhclxuICAgIGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICAgICAgc2lkZWJhci5zaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLW9wZW4nKTtcbiAgICAgICAgc2lkZWJhci50b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlKTtcblxuICAgIC8vIGNsb3NlIG5hdmJhciBpZiBpdGVtIGNsaWNrZWRcbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgc2lkZWJhci5zaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcbiAgICAgICAgc2lkZWJhci50b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLm5hdkl0ZW1zICYmIHRoaXMubmF2SXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHRoaXMubmF2SXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvc2l0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zaXRlLnNjc3M/ZTljNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL3NpdGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);