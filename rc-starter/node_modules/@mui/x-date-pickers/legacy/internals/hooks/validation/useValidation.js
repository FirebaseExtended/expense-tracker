import * as React from 'react';
import { useUtils } from '../useUtils';
export function useValidation(props, validate, isSameError) {
  var value = props.value,
      onError = props.onError;
  var utils = useUtils();
  var previousValidationErrorRef = React.useRef(null);
  var validationError = validate(utils, value, props);
  React.useEffect(function () {
    if (onError && !isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }

    previousValidationErrorRef.current = validationError;
  }, [isSameError, onError, previousValidationErrorRef, validationError, value]);
  return validationError;
}