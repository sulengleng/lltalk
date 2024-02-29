"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var formatToFixed = function formatToFixed(money) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return (Math.round((parseFloat(money) + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals)).toFixed(decimals);
};
var Format = {
  // 格式化金额展示： 12341234.246 -> $ 12,341,234.25
  formatMoney: function formatMoney(money) {
    var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var decimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    return formatToFixed(money, decimals).replace(/\B(?=(\d{3})+\b)/g, ",").replace(/^/, "".concat(symbol));
  }
};
var _default = exports["default"] = Format;