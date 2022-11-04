import * as React from 'react';
import { MuiPickersAdapterContext } from '../../LocalizationProvider/LocalizationProvider';

const useLocalizationContext = () => {
  const localization = React.useContext(MuiPickersAdapterContext);

  if (localization === null) {
    throw new Error('MUI: Can not find utils in context. It looks like you forgot to wrap your component in LocalizationProvider, or pass dateAdapter prop directly.');
  }

  return localization;
};

export const useUtils = () => useLocalizationContext().utils;
export const useDefaultDates = () => useLocalizationContext().defaultDates;
export const useNow = () => {
  const utils = useUtils();
  const now = React.useRef(utils.date());
  return now.current;
};