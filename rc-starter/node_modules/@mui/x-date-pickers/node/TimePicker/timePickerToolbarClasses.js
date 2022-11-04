"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimePickerToolbarUtilityClass = getTimePickerToolbarUtilityClass;
exports.timePickerToolbarClasses = void 0;

var _material = require("@mui/material");

function getTimePickerToolbarUtilityClass(slot) {
  return (0, _material.generateUtilityClass)('PrivateTimePickerToolbar', slot);
}

const timePickerToolbarClasses = (0, _material.generateUtilityClasses)('PrivateTimePickerToolbar', ['separator', 'hourMinuteLabel', 'hourMinuteLabelLandscape', 'hourMinuteLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel', 'penIconLandscape']);
exports.timePickerToolbarClasses = timePickerToolbarClasses;