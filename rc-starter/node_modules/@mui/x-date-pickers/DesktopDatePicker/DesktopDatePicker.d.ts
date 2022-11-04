import * as React from 'react';
import { BaseDatePickerProps } from '../DatePicker/shared';
import { DesktopWrapperProps } from '../internals/components/wrappers/DesktopWrapper';
export interface DesktopDatePickerProps<TDate = unknown> extends BaseDatePickerProps<TDate>, DesktopWrapperProps {
}
declare type DesktopDatePickerComponent = (<TDate>(props: DesktopDatePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/components/x/react-date-pickers/date-picker/)
 *
 * API:
 *
 * - [DesktopDatePicker API](https://mui.com/api/desktop-date-picker/)
 */
export declare const DesktopDatePicker: DesktopDatePickerComponent;
export {};
