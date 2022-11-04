"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCalendarPickerUtilityClass = exports.calendarPickerClasses = void 0;

var _material = require("@mui/material");

const getCalendarPickerUtilityClass = slot => (0, _material.generateUtilityClass)('MuiCalendarPicker', slot);

exports.getCalendarPickerUtilityClass = getCalendarPickerUtilityClass;
const calendarPickerClasses = (0, _material.generateUtilityClasses)('MuiCalendarPicker', ['root', 'viewTransitionContainer']);
exports.calendarPickerClasses = calendarPickerClasses;