"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clockPickerClasses = void 0;
exports.getClockPickerUtilityClass = getClockPickerUtilityClass;

var _material = require("@mui/material");

function getClockPickerUtilityClass(slot) {
  return (0, _material.generateUtilityClass)('MuiClockPicker', slot);
}

const clockPickerClasses = (0, _material.generateUtilityClasses)('MuiClockPicker', ['root', 'arrowSwitcher']);
exports.clockPickerClasses = clockPickerClasses;