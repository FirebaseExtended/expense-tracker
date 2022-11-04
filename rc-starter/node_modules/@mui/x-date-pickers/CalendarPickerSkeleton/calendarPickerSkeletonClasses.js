import { generateUtilityClass, generateUtilityClasses } from '@mui/material';
export const getCalendarPickerSkeletonUtilityClass = slot => generateUtilityClass('MuiCalendarPickerSkeleton', slot);
export const calendarPickerSkeletonClasses = generateUtilityClasses('MuiCalendarPickerSkeleton', ['root', 'week', 'daySkeleton']);