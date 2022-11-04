"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMonthPickerUtilityClass = getMonthPickerUtilityClass;
exports.monthPickerClasses = void 0;

var _material = require("@mui/material");

function getMonthPickerUtilityClass(slot) {
  return (0, _material.generateUtilityClass)('MuiMonthPicker', slot);
}

const monthPickerClasses = (0, _material.generateUtilityClasses)('MuiMonthPicker', ['root']);
exports.monthPickerClasses = monthPickerClasses;