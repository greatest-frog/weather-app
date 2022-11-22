/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/Weather/Weather.js":
/*!***************************************!*\
  !*** ./components/Weather/Weather.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Weather": () => (/* binding */ Weather)
/* harmony export */ });
/* harmony import */ var _getForecastData_getForecastData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getForecastData/getForecastData */ "./components/getForecastData/getForecastData.js");
/* harmony import */ var _getOnlyNeedData_getOnlyNeedData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getOnlyNeedData/getOnlyNeedData */ "./components/getOnlyNeedData/getOnlyNeedData.js");



const Weather = async (city) => {
  const data = await (0,_getForecastData_getForecastData__WEBPACK_IMPORTED_MODULE_0__.getForecastData)(city);
  const weather = {
    name: data.city.name,
    list: data.list.map((point) => (0,_getOnlyNeedData_getOnlyNeedData__WEBPACK_IMPORTED_MODULE_1__.getOnlyNeedData)(point)),
  };
  return weather;
};


/***/ }),

/***/ "./components/getForecastData/getForecastData.js":
/*!*******************************************************!*\
  !*** ./components/getForecastData/getForecastData.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getForecastData": () => (/* binding */ getForecastData)
/* harmony export */ });
const getForecastData = async function (city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&appid=76c4931477289c3dcd1e379572dd98e6`,
    { mode: "cors" }
  );
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error("404");
  }
  return data;
};


/***/ }),

/***/ "./components/getOnlyNeedData/getOnlyNeedData.js":
/*!*******************************************************!*\
  !*** ./components/getOnlyNeedData/getOnlyNeedData.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOnlyNeedData": () => (/* binding */ getOnlyNeedData)
/* harmony export */ });
const getOnlyNeedData = (point) => {
  const data = {
    date: new Date(point.dt_txt),
    temp: point.main.temp,
    windSpeed: point.wind.speed,
    weather: {
      name: point.weather[0].main,
      description: point.weather[0].description,
      icon: point.weather[0].icon,
    },
  };
  return data;
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Weather_Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Weather/Weather */ "./components/Weather/Weather.js");


const searchForm = document.querySelector(".search");

(0,_components_Weather_Weather__WEBPACK_IMPORTED_MODULE_0__.Weather)("Moscow").then((weather) => {
  console.log(weather);
});

searchForm.addEventListener("submit", (e) => {
  const searchInput = searchForm.querySelector("input");
  (0,_components_Weather_Weather__WEBPACK_IMPORTED_MODULE_0__.Weather)(searchInput.value)
    .then((weather) => {
      console.log(weather);
    })
    .catch((error) => console.log(error));
  e.preventDefault();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQ0E7O0FBRTlEO0FBQ1AscUJBQXFCLGlGQUFlO0FBQ3BDO0FBQ0E7QUFDQSxtQ0FBbUMsaUZBQWU7QUFDbEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0EsMERBQTBELEtBQUs7QUFDL0QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ053RDs7QUFFeEQ7O0FBRUEsb0VBQU87QUFDUDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsb0VBQU87QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9jb21wb25lbnRzL1dlYXRoZXIvV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL2NvbXBvbmVudHMvZ2V0Rm9yZWNhc3REYXRhL2dldEZvcmVjYXN0RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL2NvbXBvbmVudHMvZ2V0T25seU5lZWREYXRhL2dldE9ubHlOZWVkRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEZvcmVjYXN0RGF0YSB9IGZyb20gXCIuLi9nZXRGb3JlY2FzdERhdGEvZ2V0Rm9yZWNhc3REYXRhXCI7XG5pbXBvcnQgeyBnZXRPbmx5TmVlZERhdGEgfSBmcm9tIFwiLi4vZ2V0T25seU5lZWREYXRhL2dldE9ubHlOZWVkRGF0YVwiO1xuXG5leHBvcnQgY29uc3QgV2VhdGhlciA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRGb3JlY2FzdERhdGEoY2l0eSk7XG4gIGNvbnN0IHdlYXRoZXIgPSB7XG4gICAgbmFtZTogZGF0YS5jaXR5Lm5hbWUsXG4gICAgbGlzdDogZGF0YS5saXN0Lm1hcCgocG9pbnQpID0+IGdldE9ubHlOZWVkRGF0YShwb2ludCkpLFxuICB9O1xuICByZXR1cm4gd2VhdGhlcjtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0Rm9yZWNhc3REYXRhID0gYXN5bmMgZnVuY3Rpb24gKGNpdHkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZsYW5nPWVuJnVuaXRzPW1ldHJpYyZhcHBpZD03NmM0OTMxNDc3Mjg5YzNkY2QxZTM3OTU3MmRkOThlNmAsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIjQwNFwiKTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0T25seU5lZWREYXRhID0gKHBvaW50KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZGF0ZTogbmV3IERhdGUocG9pbnQuZHRfdHh0KSxcbiAgICB0ZW1wOiBwb2ludC5tYWluLnRlbXAsXG4gICAgd2luZFNwZWVkOiBwb2ludC53aW5kLnNwZWVkLFxuICAgIHdlYXRoZXI6IHtcbiAgICAgIG5hbWU6IHBvaW50LndlYXRoZXJbMF0ubWFpbixcbiAgICAgIGRlc2NyaXB0aW9uOiBwb2ludC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgaWNvbjogcG9pbnQud2VhdGhlclswXS5pY29uLFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBkYXRhO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dlYXRoZXIvV2VhdGhlclwiO1xuXG5jb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hcIik7XG5cbldlYXRoZXIoXCJNb3Njb3dcIikudGhlbigod2VhdGhlcikgPT4ge1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbn0pO1xuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBzZWFyY2hGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgV2VhdGhlcihzZWFyY2hJbnB1dC52YWx1ZSlcbiAgICAudGhlbigod2VhdGhlcikgPT4ge1xuICAgICAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==