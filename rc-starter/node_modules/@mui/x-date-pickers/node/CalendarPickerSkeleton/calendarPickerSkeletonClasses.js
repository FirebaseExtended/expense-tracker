"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCalendarPickerSkeletonUtilityClass = exports.calendarPickerSkeletonClasses = void 0;

var _material = require("@mui/material");

const getCalendarPickerSkeletonUtilityClass = slot => (0, _material.generateUtilityClass)('MuiCalendarPickerSkeleton', slot);

exports.getCalendarPickerSkeletonUtilityClass = getCalendarPickerSkeletonUtilityClass;
const calendarPickerSkeletonClasses = (0, _material.generateUtilityClasses)('MuiCalendarPickerSkeleton', ['root', 'week', 'daySkeleton']);
exports.calendarPickerSkeletonClasses = calendarPickerSkeletonClasses;