"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateTime = exports.useTimeValidation = void 0;

var _timeUtils = require("../../utils/time-utils");

var _useValidation = require("./useValidation");

const validateTime = (utils, value, {
  minTime,
  maxTime,
  shouldDisableTime,
  disableIgnoringDatePartForTimeValidation
}) => {
  const date = utils.date(value);
  const isAfterComparingFn = (0, _timeUtils.createIsAfterIgnoreDatePart)(Boolean(disableIgnoringDatePartForTimeValidation), utils);

  if (value === null) {
    return null;
  }

  switch (true) {
    case !utils.isValid(value):
      return 'invalidDate';

    case Boolean(minTime && isAfterComparingFn(minTime, date)):
      return 'minTime';

    case Boolean(maxTime && isAfterComparingFn(date, maxTime)):
      return 'maxTime';

    case Boolean(shouldDisableTime && shouldDisableTime(utils.getHours(date), 'hours')):
      return 'shouldDisableTime-hours';

    case Boolean(shouldDisableTime && shouldDisableTime(utils.getMinutes(date), 'minutes')):
      return 'shouldDisableTime-minutes';

    case Boolean(shouldDisableTime && shouldDisableTime(utils.getSeconds(date), 'seconds')):
      return 'shouldDisableTime-seconds';

    default:
      return null;
  }
};

exports.validateTime = validateTime;

const isSameTimeError = (a, b) => a === b;

const useTimeValidation = props => (0, _useValidation.useValidation)(props, validateTime, isSameTimeError);

exports.useTimeValidation = useTimeValidation;