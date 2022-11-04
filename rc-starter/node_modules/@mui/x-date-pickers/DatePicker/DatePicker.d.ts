import * as React from 'react';
import { DesktopDatePickerProps } from '../DesktopDatePicker';
import { MobileDatePickerProps } from '../MobileDatePicker';
export interface DatePickerProps<TDate = unknown> extends DesktopDatePickerProps<TDate>, MobileDatePickerProps<TDate> {
    /**
     * CSS media query when `Mobile` mode will be changed to `Desktop`.
     * @default '@media (pointer: fine)'
     * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
     */
    desktopModeMediaQuery?: string;
}
declare type DatePickerComponent = (<TDate>(props: DatePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/components/x/react-date-pickers/date-picker/)
 * - [Pickers](https://mui.com/x/react-date-pickers/)
 *
 * API:
 *
 * - [DatePicker API](https://mui.com/api/date-picker/)
 */
export declare const DatePicker: DatePickerComponent;
export {};
