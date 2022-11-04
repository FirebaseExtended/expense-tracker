import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export function getYearPickerUtilityClass(slot) {
  return generateUtilityClass('MuiYearPicker', slot);
}
export const yearPickerClasses = generateUtilityClasses('MuiYearPicker', ['root']);