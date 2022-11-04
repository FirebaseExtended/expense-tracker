import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass('PrivateTimePickerToolbar', slot);
}
export const timePickerToolbarClasses = generateUtilityClasses('PrivateTimePickerToolbar', ['separator', 'hourMinuteLabel', 'hourMinuteLabelLandscape', 'hourMinuteLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel', 'penIconLandscape']);