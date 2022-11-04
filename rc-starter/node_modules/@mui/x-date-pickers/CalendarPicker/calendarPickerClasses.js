import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export const getCalendarPickerUtilityClass = slot => generateUtilityClass('MuiCalendarPicker', slot);
export const calendarPickerClasses = generateUtilityClasses('MuiCalendarPicker', ['root', 'viewTransitionContainer']);