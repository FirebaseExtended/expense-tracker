"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStaticWrapperUtilityClass = getStaticWrapperUtilityClass;
exports.pickerStaticWrapperClasses = void 0;

var _material = require("@mui/material");

function getStaticWrapperUtilityClass(slot) {
  return (0, _material.generateUtilityClass)('MuiPickerStaticWrapper', slot);
}

const pickerStaticWrapperClasses = (0, _material.generateUtilityClasses)('MuiPickerStaticWrapper', ['root']);
exports.pickerStaticWrapperClasses = pickerStaticWrapperClasses;