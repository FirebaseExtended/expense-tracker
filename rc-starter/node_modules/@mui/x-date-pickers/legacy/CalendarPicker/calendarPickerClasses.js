import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export var getCalendarPickerUtilityClass = function getCalendarPickerUtilityClass(slot) {
  return generateUtilityClass('MuiCalendarPicker', slot);
};
export var calendarPickerClasses = generateUtilityClasses('MuiCalendarPicker', ['root', 'viewTransitionContainer']);