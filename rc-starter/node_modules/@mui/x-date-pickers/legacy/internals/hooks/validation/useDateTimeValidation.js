import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["minDate", "maxDate", "disableFuture", "shouldDisableDate", "disablePast"];
import { useValidation } from './useValidation';
import { validateDate } from './useDateValidation';
import { validateTime } from './useTimeValidation';
export var validateDateTime = function validateDateTime(utils, value, _ref) {
  var minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      shouldDisableDate = _ref.shouldDisableDate,
      disablePast = _ref.disablePast,
      timeValidationProps = _objectWithoutProperties(_ref, _excluded);

  var dateValidationResult = validateDate(utils, value, {
    minDate: minDate,
    maxDate: maxDate,
    disableFuture: disableFuture,
    shouldDisableDate: shouldDisableDate,
    disablePast: disablePast
  });

  if (dateValidationResult !== null) {
    return dateValidationResult;
  }

  return validateTime(utils, value, timeValidationProps);
};

var isSameDateTimeError = function isSameDateTimeError(a, b) {
  return a === b;
};

export function useDateTimeValidation(props) {
  return useValidation(props, validateDateTime, isSameDateTimeError);
}