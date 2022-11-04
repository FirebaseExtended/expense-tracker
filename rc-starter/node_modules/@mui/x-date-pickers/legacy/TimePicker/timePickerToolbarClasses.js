import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export function getTimePickerToolbarUtilityClass(slot) {
  return generateUtilityClass('PrivateTimePickerToolbar', slot);
}
export var timePickerToolbarClasses = generateUtilityClasses('PrivateTimePickerToolbar', ['separator', 'hourMinuteLabel', 'hourMinuteLabelLandscape', 'hourMinuteLabelReverse', 'ampmSelection', 'ampmLandscape', 'ampmLabel', 'penIconLandscape']);