import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export function getMonthPickerUtilityClass(slot) {
  return generateUtilityClass('MuiMonthPicker', slot);
}
export var monthPickerClasses = generateUtilityClasses('MuiMonthPicker', ['root']);