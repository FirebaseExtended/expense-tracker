import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export function getClockPickerUtilityClass(slot) {
  return generateUtilityClass('MuiClockPicker', slot);
}
export const clockPickerClasses = generateUtilityClasses('MuiClockPicker', ['root', 'arrowSwitcher']);