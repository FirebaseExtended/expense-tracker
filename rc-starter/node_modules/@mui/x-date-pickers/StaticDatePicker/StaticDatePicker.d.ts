import * as React from 'react';
import { BaseDatePickerProps } from '../DatePicker/shared';
import { PickerStaticWrapperProps } from '../internals/components/PickerStaticWrapper/PickerStaticWrapper';
export interface StaticDatePickerProps<TDate = unknown> extends BaseDatePickerProps<TDate> {
    /**
     * Force static wrapper inner components to be rendered in mobile or desktop mode.
     * @default 'mobile'
     */
    displayStaticWrapperAs?: PickerStaticWrapperProps['displayStaticWrapperAs'];
}
declare type StaticDatePickerComponent = (<TDate>(props: StaticDatePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
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
 * - [StaticDatePicker API](https://mui.com/api/static-date-picker/)
 */
export declare const StaticDatePicker: StaticDatePickerComponent;
export {};
