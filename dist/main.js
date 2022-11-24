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
    list: [
      (0,_getOnlyNeedData_getOnlyNeedData__WEBPACK_IMPORTED_MODULE_1__.getOnlyNeedData)(data.list[0]),
      (0,_getOnlyNeedData_getOnlyNeedData__WEBPACK_IMPORTED_MODULE_1__.getOnlyNeedData)(data.list[8]),
      (0,_getOnlyNeedData_getOnlyNeedData__WEBPACK_IMPORTED_MODULE_1__.getOnlyNeedData)(data.list[16]),
      (0,_getOnlyNeedData_getOnlyNeedData__WEBPACK_IMPORTED_MODULE_1__.getOnlyNeedData)(data.list[24]),
      (0,_getOnlyNeedData_getOnlyNeedData__WEBPACK_IMPORTED_MODULE_1__.getOnlyNeedData)(data.list[32]),
    ],
  };
  return weather;
};


/***/ }),

/***/ "./components/displayData/displayData.js":
/*!***********************************************!*\
  !*** ./components/displayData/displayData.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayData": () => (/* binding */ displayData)
/* harmony export */ });
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const img = new Set([
  "Clouds",
  "Drizzle",
  "Rain",
  "Snow",
  "Sunny",
  "Thunderstorm",
]);

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const displayData = (data) => {
  const day1 = data.list[0];

  const body = document.querySelector("body");
  body.style.backgroundImage = `url('./resources/img/${
    img.has(day1.weather.name) ? day1.weather.name : "Atmosphere"
  }.png')`;

  const weather = document.querySelector("h1");
  weather.textContent = capitalize(day1.weather.description);

  const city = document.querySelector("h2");
  city.textContent = data.name;

  const mainTemp = document.querySelector(".main_temp");
  mainTemp.textContent = day1.temp;
  mainTemp.innerHTML += "&deg;C";

  const feelsLikeTemp = document.querySelector(".secondary_temp_data");
  feelsLikeTemp.textContent = day1.feelsLike;
  feelsLikeTemp.innerHTML += "&deg;C";

  const windSpeed = document.querySelector(".secondary_wind_data");
  windSpeed.textContent = day1.windSpeed + "km/h";

  const humidity = document.querySelector(".secondary_humidity_data");
  humidity.textContent = day1.humidity + "%";

  for (let i = 1; i <= 4; i++) {
    const day = data.list[i];
    const dayDiv = document.querySelector(".week-info_day__" + i);
    const label = dayDiv.querySelector(".week-info_day_label");
    const weather = dayDiv.querySelector(".week-info_day_weather");
    const temperature = dayDiv.querySelector(".week-info_day_temperature");
    const icon = dayDiv.querySelector(".weather-icon");

    label.textContent = weekday[day.date.getDay()];
    weather.textContent = capitalize(day.weather.description);
    temperature.textContent = day.temp;
    temperature.innerHTML += "&deg;C";
    icon.src = `http://openweathermap.org/img/wn/${day.weather.icon}@2x.png`;
  }
};


/***/ }),

/***/ "./components/displayError/displayError.js":
/*!*************************************************!*\
  !*** ./components/displayError/displayError.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayError": () => (/* binding */ displayError)
/* harmony export */ });
const displayError = (error) => {
  if (error.message == "Failed to fetch") {
    document.querySelector(".content")?.classList.add("disabled");
    document.querySelector(".error_no-page")?.classList.add("disabled");
    document
      .querySelector(".error_no-connection")
      ?.classList.remove("disabled");
  } else {
    console.log(error);
    document.querySelector(".content")?.classList.add("disabled");
    document.querySelector(".error_no-connection")?.classList.add("disabled");
    document.querySelector(".error_no-page")?.classList.remove("disabled");
  }
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
    humidity: point.main.humidity,
    feelsLike: point.main.feels_like,
    weather: {
      name: point.weather[0].main === "Clear" ? "Sunny" : point.weather[0].main,
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
/* harmony import */ var _components_displayData_displayData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/displayData/displayData */ "./components/displayData/displayData.js");
/* harmony import */ var _components_displayError_displayError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/displayError/displayError */ "./components/displayError/displayError.js");
/* harmony import */ var _components_Weather_Weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Weather/Weather */ "./components/Weather/Weather.js");




const searchForm = document.querySelector(".search");

(0,_components_Weather_Weather__WEBPACK_IMPORTED_MODULE_2__.Weather)("Moscow")
  .then((weather) => {
    console.log(weather);
    document.querySelector(".error")?.classList.add("disabled");
    document.querySelector(".disabled")?.classList.remove("disabled");
    (0,_components_displayData_displayData__WEBPACK_IMPORTED_MODULE_0__.displayData)(weather, document.querySelector(".content"));
  })
  .catch((error) => (0,_components_displayError_displayError__WEBPACK_IMPORTED_MODULE_1__.displayError)(error));

searchForm.addEventListener("submit", (e) => {
  const searchInput = searchForm.querySelector("input");
  (0,_components_Weather_Weather__WEBPACK_IMPORTED_MODULE_2__.Weather)(searchInput.value)
    .then((weather) => {
      console.log(weather);
      document.querySelector(".error")?.classList.add("disabled");
      document.querySelector(".disabled")?.classList.remove("disabled");
      (0,_components_displayData_displayData__WEBPACK_IMPORTED_MODULE_0__.displayData)(weather, document.querySelector(".content"));
      searchInput.value = "";
    })
    .catch((error) => (0,_components_displayError_displayError__WEBPACK_IMPORTED_MODULE_1__.displayError)(error));
  e.preventDefault();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQ0E7O0FBRTlEO0FBQ1AscUJBQXFCLGlGQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLE1BQU0saUZBQWU7QUFDckIsTUFBTSxpRkFBZTtBQUNyQixNQUFNLGlGQUFlO0FBQ3JCLE1BQU0saUZBQWU7QUFDckIsTUFBTSxpRkFBZTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsbURBQW1ELGlCQUFpQjtBQUNwRTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0EsMERBQTBELEtBQUs7QUFDL0QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vRTtBQUNHO0FBQ2Y7O0FBRXhEOztBQUVBLG9FQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFXO0FBQ2YsR0FBRztBQUNILG9CQUFvQixtRkFBWTs7QUFFaEM7QUFDQTtBQUNBLEVBQUUsb0VBQU87QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0ZBQVc7QUFDakI7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCLG1GQUFZO0FBQ2xDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vY29tcG9uZW50cy9XZWF0aGVyL1dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9jb21wb25lbnRzL2Rpc3BsYXlEYXRhL2Rpc3BsYXlEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vY29tcG9uZW50cy9kaXNwbGF5RXJyb3IvZGlzcGxheUVycm9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vY29tcG9uZW50cy9nZXRGb3JlY2FzdERhdGEvZ2V0Rm9yZWNhc3REYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vY29tcG9uZW50cy9nZXRPbmx5TmVlZERhdGEvZ2V0T25seU5lZWREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Rm9yZWNhc3REYXRhIH0gZnJvbSBcIi4uL2dldEZvcmVjYXN0RGF0YS9nZXRGb3JlY2FzdERhdGFcIjtcbmltcG9ydCB7IGdldE9ubHlOZWVkRGF0YSB9IGZyb20gXCIuLi9nZXRPbmx5TmVlZERhdGEvZ2V0T25seU5lZWREYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBXZWF0aGVyID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEZvcmVjYXN0RGF0YShjaXR5KTtcbiAgY29uc3Qgd2VhdGhlciA9IHtcbiAgICBuYW1lOiBkYXRhLmNpdHkubmFtZSxcbiAgICBsaXN0OiBbXG4gICAgICBnZXRPbmx5TmVlZERhdGEoZGF0YS5saXN0WzBdKSxcbiAgICAgIGdldE9ubHlOZWVkRGF0YShkYXRhLmxpc3RbOF0pLFxuICAgICAgZ2V0T25seU5lZWREYXRhKGRhdGEubGlzdFsxNl0pLFxuICAgICAgZ2V0T25seU5lZWREYXRhKGRhdGEubGlzdFsyNF0pLFxuICAgICAgZ2V0T25seU5lZWREYXRhKGRhdGEubGlzdFszMl0pLFxuICAgIF0sXG4gIH07XG4gIHJldHVybiB3ZWF0aGVyO1xufTtcbiIsImNvbnN0IHdlZWtkYXkgPSBbXG4gIFwiU3VuZGF5XCIsXG4gIFwiTW9uZGF5XCIsXG4gIFwiVHVlc2RheVwiLFxuICBcIldlZG5lc2RheVwiLFxuICBcIlRodXJzZGF5XCIsXG4gIFwiRnJpZGF5XCIsXG4gIFwiU2F0dXJkYXlcIixcbl07XG5cbmNvbnN0IGltZyA9IG5ldyBTZXQoW1xuICBcIkNsb3Vkc1wiLFxuICBcIkRyaXp6bGVcIixcbiAgXCJSYWluXCIsXG4gIFwiU25vd1wiLFxuICBcIlN1bm55XCIsXG4gIFwiVGh1bmRlcnN0b3JtXCIsXG5dKTtcblxuY29uc3QgY2FwaXRhbGl6ZSA9ICh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlEYXRhID0gKGRhdGEpID0+IHtcbiAgY29uc3QgZGF5MSA9IGRhdGEubGlzdFswXTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi9yZXNvdXJjZXMvaW1nLyR7XG4gICAgaW1nLmhhcyhkYXkxLndlYXRoZXIubmFtZSkgPyBkYXkxLndlYXRoZXIubmFtZSA6IFwiQXRtb3NwaGVyZVwiXG4gIH0ucG5nJylgO1xuXG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG4gIHdlYXRoZXIudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplKGRheTEud2VhdGhlci5kZXNjcmlwdGlvbik7XG5cbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcbiAgY2l0eS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcblxuICBjb25zdCBtYWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl90ZW1wXCIpO1xuICBtYWluVGVtcC50ZXh0Q29udGVudCA9IGRheTEudGVtcDtcbiAgbWFpblRlbXAuaW5uZXJIVE1MICs9IFwiJmRlZztDXCI7XG5cbiAgY29uc3QgZmVlbHNMaWtlVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kYXJ5X3RlbXBfZGF0YVwiKTtcbiAgZmVlbHNMaWtlVGVtcC50ZXh0Q29udGVudCA9IGRheTEuZmVlbHNMaWtlO1xuICBmZWVsc0xpa2VUZW1wLmlubmVySFRNTCArPSBcIiZkZWc7Q1wiO1xuXG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kYXJ5X3dpbmRfZGF0YVwiKTtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gZGF5MS53aW5kU3BlZWQgKyBcImttL2hcIjtcblxuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kYXJ5X2h1bWlkaXR5X2RhdGFcIik7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gZGF5MS5odW1pZGl0eSArIFwiJVwiO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgIGNvbnN0IGRheSA9IGRhdGEubGlzdFtpXTtcbiAgICBjb25zdCBkYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlZWstaW5mb19kYXlfX1wiICsgaSk7XG4gICAgY29uc3QgbGFiZWwgPSBkYXlEaXYucXVlcnlTZWxlY3RvcihcIi53ZWVrLWluZm9fZGF5X2xhYmVsXCIpO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBkYXlEaXYucXVlcnlTZWxlY3RvcihcIi53ZWVrLWluZm9fZGF5X3dlYXRoZXJcIik7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkYXlEaXYucXVlcnlTZWxlY3RvcihcIi53ZWVrLWluZm9fZGF5X3RlbXBlcmF0dXJlXCIpO1xuICAgIGNvbnN0IGljb24gPSBkYXlEaXYucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWljb25cIik7XG5cbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHdlZWtkYXlbZGF5LmRhdGUuZ2V0RGF5KCldO1xuICAgIHdlYXRoZXIudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplKGRheS53ZWF0aGVyLmRlc2NyaXB0aW9uKTtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGRheS50ZW1wO1xuICAgIHRlbXBlcmF0dXJlLmlubmVySFRNTCArPSBcIiZkZWc7Q1wiO1xuICAgIGljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF5LndlYXRoZXIuaWNvbn1AMngucG5nYDtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBkaXNwbGF5RXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgaWYgKGVycm9yLm1lc3NhZ2UgPT0gXCJGYWlsZWQgdG8gZmV0Y2hcIikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKT8uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3Jfbm8tcGFnZVwiKT8uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5lcnJvcl9uby1jb25uZWN0aW9uXCIpXG4gICAgICA/LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpPy5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvcl9uby1jb25uZWN0aW9uXCIpPy5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvcl9uby1wYWdlXCIpPy5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0Rm9yZWNhc3REYXRhID0gYXN5bmMgZnVuY3Rpb24gKGNpdHkpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZsYW5nPWVuJnVuaXRzPW1ldHJpYyZhcHBpZD03NmM0OTMxNDc3Mjg5YzNkY2QxZTM3OTU3MmRkOThlNmAsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIjQwNFwiKTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0T25seU5lZWREYXRhID0gKHBvaW50KSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZGF0ZTogbmV3IERhdGUocG9pbnQuZHRfdHh0KSxcbiAgICB0ZW1wOiBwb2ludC5tYWluLnRlbXAsXG4gICAgd2luZFNwZWVkOiBwb2ludC53aW5kLnNwZWVkLFxuICAgIGh1bWlkaXR5OiBwb2ludC5tYWluLmh1bWlkaXR5LFxuICAgIGZlZWxzTGlrZTogcG9pbnQubWFpbi5mZWVsc19saWtlLFxuICAgIHdlYXRoZXI6IHtcbiAgICAgIG5hbWU6IHBvaW50LndlYXRoZXJbMF0ubWFpbiA9PT0gXCJDbGVhclwiID8gXCJTdW5ueVwiIDogcG9pbnQud2VhdGhlclswXS5tYWluLFxuICAgICAgZGVzY3JpcHRpb246IHBvaW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICBpY29uOiBwb2ludC53ZWF0aGVyWzBdLmljb24sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkaXNwbGF5RGF0YSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Rpc3BsYXlEYXRhL2Rpc3BsYXlEYXRhXCI7XG5pbXBvcnQgeyBkaXNwbGF5RXJyb3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9kaXNwbGF5RXJyb3IvZGlzcGxheUVycm9yXCI7XG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvV2VhdGhlci9XZWF0aGVyXCI7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaFwiKTtcblxuV2VhdGhlcihcIk1vc2Nvd1wiKVxuICAudGhlbigod2VhdGhlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIik/LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc2FibGVkXCIpPy5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgZGlzcGxheURhdGEod2VhdGhlciwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpKTtcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4gZGlzcGxheUVycm9yKGVycm9yKSk7XG5cbnNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IHNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBXZWF0aGVyKHNlYXJjaElucHV0LnZhbHVlKVxuICAgIC50aGVuKCh3ZWF0aGVyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIik/LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzYWJsZWRcIik/LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcbiAgICAgIGRpc3BsYXlEYXRhKHdlYXRoZXIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKSk7XG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBkaXNwbGF5RXJyb3IoZXJyb3IpKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=