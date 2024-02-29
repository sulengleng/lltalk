"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EmptyCard;
var _react = require("@phosphor-icons/react");
var _jsxRuntime = require("react/jsx-runtime");
function EmptyCard() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "text-center py-10",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "w-full flex justify-center items-center  space-x-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Coffee, {
        size: 30,
        className: "text-gray-600 font-light"
      }), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "text-2xl text-gray-600 font-light ",
        children: "\u6682\u65E0\u6570\u636E"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "text-gray-600 mt-3 font-light",
      children: "No Content To Show"
    })]
  });
}