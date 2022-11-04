import { createIsAfterIgnoreDatePart } from '../../utils/time-utils';
import { useValidation } from './useValidation';
export var validateTime = function validateTime(utils, value, _ref) {
  var minTime = _ref.minTime,
      maxTime = _ref.maxTime,
      shouldDisableTime = _ref.shouldDisableTime,
      disableIgnoringDatePartForTimeValidation = _ref.disableIgnoringDatePartForTimeValidation;
  var date = utils.date(value);
  var isAfterComparingFn = createIsAfterIgnoreDatePart(Boolean(disableIgnoringDatePartForTimeValidation), utils);

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

var isSameTimeError = function isSameTimeError(a, b) {
  return a === b;
};

export var useTimeValidation = function useTimeValidation(props) {
  return useValidation(props, validateTime, isSameTimeError);
};