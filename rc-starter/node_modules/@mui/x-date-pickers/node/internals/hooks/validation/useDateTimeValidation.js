"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDateTimeValidation = useDateTimeValidation;
exports.validateDateTime = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _useValidation = require("./useValidation");

var _useDateValidation = require("./useDateValidation");

var _useTimeValidation = require("./useTimeValidation");

const _excluded = ["minDate", "maxDate", "disableFuture", "shouldDisableDate", "disablePast"];

const validateDateTime = (utils, value, _ref) => {
  let {
    minDate,
    maxDate,
    disableFuture,
    shouldDisableDate,
    disablePast
  } = _ref,
      timeValidationProps = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  const dateValidationResult = (0, _useDateValidation.validateDate)(utils, value, {
    minDate,
    maxDate,
    disableFuture,
    shouldDisableDate,
    disablePast
  });

  if (dateValidationResult !== null) {
    return dateValidationResult;
  }

  return (0, _useTimeValidation.validateTime)(utils, value, timeValidationProps);
};

exports.validateDateTime = validateDateTime;

const isSameDateTimeError = (a, b) => a === b;

function useDateTimeValidation(props) {
  return (0, _useValidation.useValidation)(props, validateDateTime, isSameDateTimeError);
}