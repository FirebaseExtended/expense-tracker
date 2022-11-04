"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPickersDayUtilityClass = getPickersDayUtilityClass;
exports.pickersDayClasses = void 0;

var _material = require("@mui/material");

function getPickersDayUtilityClass(slot) {
  return (0, _material.generateUtilityClass)('MuiPickersDay', slot);
}

const pickersDayClasses = (0, _material.generateUtilityClasses)('MuiPickersDay', ['root', 'dayWithMargin', 'dayOutsideMonth', 'hiddenDaySpacingFiller', 'today', 'selected', 'disabled']);
exports.pickersDayClasses = pickersDayClasses;