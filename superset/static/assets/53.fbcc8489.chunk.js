(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/EventFlow.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/EventFlow.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventFlow; });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-ui/event-flow */ \"./node_modules/@data-ui/event-flow/build/index.js\");\n/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ \"./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js\");\n\n\n/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\nfunction EventFlow({\n  data,\n  initialMinEventCount,\n  height = 400,\n  width = 400\n}) {\n  if (data) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2__[\"App\"], {\n      width: width,\n      height: height,\n      data: data,\n      initialMinEventCount: initialMinEventCount,\n      initialShowControls: false\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: {\n      height,\n      width\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"t\"])('Sorry, there appears to be no data')));\n}\nEventFlow.propTypes = {\n  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired,\n  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,\n  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,\n  initialMinEventCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN1cGVyc2V0LXVpL2xlZ2FjeS1wbHVnaW4tY2hhcnQtZXZlbnQtZmxvdy9lc20vRXZlbnRGbG93LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzdXBlcnNldC11aS9sZWdhY3ktcGx1Z2luLWNoYXJ0LWV2ZW50LWZsb3cvZXNtL0V2ZW50Rmxvdy5qcz9iMjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfcHQgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuLyoqXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcCBhcyBFdmVudEZsb3dBcHAgfSBmcm9tICdAZGF0YS11aS9ldmVudC1mbG93JztcbmltcG9ydCB7IHQgfSBmcm9tICdAc3VwZXJzZXQtdWkvY29yZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudEZsb3coe1xuICBkYXRhLFxuICBpbml0aWFsTWluRXZlbnRDb3VudCxcbiAgaGVpZ2h0ID0gNDAwLFxuICB3aWR0aCA9IDQwMFxufSkge1xuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFdmVudEZsb3dBcHAsIHtcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGluaXRpYWxNaW5FdmVudENvdW50OiBpbml0aWFsTWluRXZlbnRDb3VudCxcbiAgICAgIGluaXRpYWxTaG93Q29udHJvbHM6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aFxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgdCgnU29ycnksIHRoZXJlIGFwcGVhcnMgdG8gYmUgbm8gZGF0YScpKSk7XG59XG5FdmVudEZsb3cucHJvcFR5cGVzID0ge1xuICBkYXRhOiBfcHQuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaGVpZ2h0OiBfcHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBfcHQubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGluaXRpYWxNaW5FdmVudENvdW50OiBfcHQubnVtYmVyLmlzUmVxdWlyZWRcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/EventFlow.js\n");

/***/ })

}]);