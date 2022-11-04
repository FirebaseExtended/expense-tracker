import * as React from 'react';
import { useUtils } from '../useUtils';
export function useValidation(props, validate, isSameError) {
  const {
    value,
    onError
  } = props;
  const utils = useUtils();
  const previousValidationErrorRef = React.useRef(null);
  const validationError = validate(utils, value, props);
  React.useEffect(() => {
    if (onError && !isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }

    previousValidationErrorRef.current = validationError;
  }, [isSameError, onError, previousValidationErrorRef, validationError, value]);
  return validationError;
}