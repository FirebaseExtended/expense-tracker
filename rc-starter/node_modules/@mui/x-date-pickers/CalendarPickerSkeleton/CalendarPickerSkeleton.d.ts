import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { CalendarPickerSkeletonClasses } from './calendarPickerSkeletonClasses';
declare type HTMLDivProps = JSX.IntrinsicElements['div'];
export interface CalendarPickerSkeletonProps extends HTMLDivProps {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<CalendarPickerSkeletonClasses>;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
    ref?: React.Ref<HTMLDivElement>;
}
/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/components/x/react-date-pickers/date-picker/)
 *
 * API:
 *
 * - [CalendarPickerSkeleton API](https://mui.com/api/calendar-picker-skeleton/)
 */
declare function CalendarPickerSkeleton(props: CalendarPickerSkeletonProps): JSX.Element;
declare namespace CalendarPickerSkeleton {
    var propTypes: any;
}
export { CalendarPickerSkeleton };
