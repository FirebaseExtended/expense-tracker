"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDate = exports.useDateValidation = void 0;

var _useValidation = require("./useValidation");

const validateDate = (utils, value, {
  disablePast,
  disableFuture,
  minDate,
  maxDate,
  shouldDisableDate
}) => {
  const now = utils.date();
  const date = utils.date(value);

  if (date === null) {
    return null;
  }

  switch (true) {
    case !utils.isValid(value):
      return 'invalidDate';

    case Boolean(shouldDisableDate && shouldDisableDate(date)):
      return 'shouldDisableDate';

    case Boolean(disableFuture && utils.isAfterDay(date, now)):
      return 'disableFuture';

    case Boolean(disablePast && utils.isBeforeDay(date, now)):
      return 'disablePast';

    case Boolean(minDate && utils.isBeforeDay(date, minDate)):
      return 'minDate';

    case Boolean(maxDate && utils.isAfterDay(date, maxDate)):
      return 'maxDate';

    default:
      return null;
  }
};

exports.validateDate = validateDate;

const isSameDateError = (a, b) => a === b;

const useDateValidation = props => (0, _useValidation.useValidation)(props, validateDate, isSameDateError);

exports.useDateValidation = useDateValidation;