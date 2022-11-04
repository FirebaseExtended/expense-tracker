import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export function getStaticWrapperUtilityClass(slot) {
  return generateUtilityClass('MuiPickerStaticWrapper', slot);
}
export const pickerStaticWrapperClasses = generateUtilityClasses('MuiPickerStaticWrapper', ['root']);