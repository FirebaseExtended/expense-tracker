import * as React from 'react';
import { MuiPickersAdapterContext } from '../../LocalizationProvider/LocalizationProvider';

var useLocalizationContext = function useLocalizationContext() {
  var localization = React.useContext(MuiPickersAdapterContext);

  if (localization === null) {
    throw new Error('MUI: Can not find utils in context. It looks like you forgot to wrap your component in LocalizationProvider, or pass dateAdapter prop directly.');
  }

  return localization;
};

export var useUtils = function useUtils() {
  return useLocalizationContext().utils;
};
export var useDefaultDates = function useDefaultDates() {
  return useLocalizationContext().defaultDates;
};
export var useNow = function useNow() {
  var utils = useUtils();
  var now = React.useRef(utils.date());
  return now.current;
};