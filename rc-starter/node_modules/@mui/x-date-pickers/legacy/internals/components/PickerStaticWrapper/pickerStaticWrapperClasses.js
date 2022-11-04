import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export function getStaticWrapperUtilityClass(slot) {
  return generateUtilityClass('MuiPickerStaticWrapper', slot);
}
export var pickerStaticWrapperClasses = generateUtilityClasses('MuiPickerStaticWrapper', ['root']);