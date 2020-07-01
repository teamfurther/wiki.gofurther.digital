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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/site.js":
/*!************************!*\
  !*** ./src/js/site.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * SIDEBAR\n */\nvar sidebar = new function () {\n  this.navItems = document.querySelector('.nav__item');\n  this.sidebar = document.querySelector('.sidebar');\n  this.toggle = document.querySelector('.sidebar__toggle'); // toggle mobile navbar\n\n  function toggle() {\n    sidebar.sidebar.classList.toggle('is-open');\n    sidebar.toggle.classList.toggle('is-active');\n  }\n\n  this.toggle.addEventListener('click', toggle); // close navbar if item clicked\n\n  function close() {\n    sidebar.sidebar.classList.remove('is-open');\n    sidebar.toggle.classList.remove('is-active');\n  }\n\n  if (this.navItems && this.navItems.length > 0) {\n    Array.prototype.forEach.call(this.navItems, function (item) {\n      item.addEventListener('click', close);\n    }.bind(this));\n  }\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2l0ZS5qcz8yOGYwIl0sIm5hbWVzIjpbInNpZGViYXIiLCJuYXZJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZSIsImNsYXNzTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsInJlbW92ZSIsImxlbmd0aCIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJpdGVtIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBLElBQUlBLE9BQU8sR0FBRyxJQUFJLFlBQVc7QUFDekIsT0FBS0MsUUFBTCxHQUFnQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWhCO0FBQ0EsT0FBS0gsT0FBTCxHQUFlRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZjtBQUNBLE9BQUtDLE1BQUwsR0FBY0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFkLENBSHlCLENBS3pCOztBQUNBLFdBQVNDLE1BQVQsR0FBa0I7QUFDZEosV0FBTyxDQUFDQSxPQUFSLENBQWdCSyxTQUFoQixDQUEwQkQsTUFBMUIsQ0FBaUMsU0FBakM7QUFDQUosV0FBTyxDQUFDSSxNQUFSLENBQWVDLFNBQWYsQ0FBeUJELE1BQXpCLENBQWdDLFdBQWhDO0FBQ0g7O0FBQ0QsT0FBS0EsTUFBTCxDQUFZRSxnQkFBWixDQUE2QixPQUE3QixFQUFzQ0YsTUFBdEMsRUFWeUIsQ0FZekI7O0FBQ0EsV0FBU0csS0FBVCxHQUFpQjtBQUNiUCxXQUFPLENBQUNBLE9BQVIsQ0FBZ0JLLFNBQWhCLENBQTBCRyxNQUExQixDQUFpQyxTQUFqQztBQUNBUixXQUFPLENBQUNJLE1BQVIsQ0FBZUMsU0FBZixDQUF5QkcsTUFBekIsQ0FBZ0MsV0FBaEM7QUFDSDs7QUFDRCxNQUFJLEtBQUtQLFFBQUwsSUFBaUIsS0FBS0EsUUFBTCxDQUFjUSxNQUFkLEdBQXVCLENBQTVDLEVBQStDO0FBQzNDQyxTQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUE2QixLQUFLWixRQUFsQyxFQUE0QyxVQUFVYSxJQUFWLEVBQWdCO0FBQ3hEQSxVQUFJLENBQUNSLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCQyxLQUEvQjtBQUNILEtBRjJDLENBRTFDUSxJQUYwQyxDQUVyQyxJQUZxQyxDQUE1QztBQUdIO0FBQ0osQ0F0QmEsRUFBZCIsImZpbGUiOiIuL3NyYy9qcy9zaXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNJREVCQVJcbiAqL1xubGV0IHNpZGViYXIgPSBuZXcgZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5uYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2l0ZW0nKTtcbiAgICB0aGlzLnNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIHRoaXMudG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3RvZ2dsZScpO1xuXG4gICAgLy8gdG9nZ2xlIG1vYmlsZSBuYXZiYXJcbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICAgIHNpZGViYXIuc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1vcGVuJyk7XG4gICAgICAgIHNpZGViYXIudG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSk7XG5cbiAgICAvLyBjbG9zZSBuYXZiYXIgaWYgaXRlbSBjbGlja2VkXG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIHNpZGViYXIuc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgICAgIHNpZGViYXIudG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5uYXZJdGVtcyAmJiB0aGlzLm5hdkl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0aGlzLm5hdkl0ZW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/site.js\n");

/***/ }),

/***/ "./src/sass/site.scss":
/*!****************************!*\
  !*** ./src/sass/site.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zaXRlLnNjc3M/OGU1YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3NyYy9zYXNzL3NpdGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sass/site.scss\n");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/site.js ./src/sass/site.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Volumes/Further/projects/wiki.gofurther.digital/src/js/site.js */"./src/js/site.js");
module.exports = __webpack_require__(/*! /Volumes/Further/projects/wiki.gofurther.digital/src/sass/site.scss */"./src/sass/site.scss");


/***/ })

/******/ });