import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export var getCalendarPickerSkeletonUtilityClass = function getCalendarPickerSkeletonUtilityClass(slot) {
  return generateUtilityClass('MuiCalendarPickerSkeleton', slot);
};
export var calendarPickerSkeletonClasses = generateUtilityClasses('MuiCalendarPickerSkeleton', ['root', 'week', 'daySkeleton']);