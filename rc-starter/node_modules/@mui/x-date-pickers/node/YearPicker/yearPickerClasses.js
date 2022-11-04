"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getYearPickerUtilityClass = getYearPickerUtilityClass;
exports.yearPickerClasses = void 0;

var _material = require("@mui/material");

function getYearPickerUtilityClass(slot) {
  return (0, _material.generateUtilityClass)('MuiYearPicker', slot);
}

const yearPickerClasses = (0, _material.generateUtilityClasses)('MuiYearPicker', ['root']);
exports.yearPickerClasses = yearPickerClasses;