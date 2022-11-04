import { createIsAfterIgnoreDatePart } from '../../utils/time-utils';
import { useValidation } from './useValidation';
export const validateTime = (utils, value, {
  minTime,
  maxTime,
  shouldDisableTime,
  disableIgnoringDatePartForTimeValidation
}) => {
  const date = utils.date(value);
  const isAfterComparingFn = createIsAfterIgnoreDatePart(Boolean(disableIgnoringDatePartForTimeValidation), utils);

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

const isSameTimeError = (a, b) => a === b;

export const useTimeValidation = props => useValidation(props, validateTime, isSameTimeError);