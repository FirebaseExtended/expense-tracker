import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export function getClockPickerUtilityClass(slot) {
  return generateUtilityClass('MuiClockPicker', slot);
}
export var clockPickerClasses = generateUtilityClasses('MuiClockPicker', ['root', 'arrowSwitcher']);