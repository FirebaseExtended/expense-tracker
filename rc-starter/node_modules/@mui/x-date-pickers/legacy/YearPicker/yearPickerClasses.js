import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export function getYearPickerUtilityClass(slot) {
  return generateUtilityClass('MuiYearPicker', slot);
}
export var yearPickerClasses = generateUtilityClasses('MuiYearPicker', ['root']);