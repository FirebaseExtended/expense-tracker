import * as React from 'react';
declare type DateRangePickerComponent = (<TDate>(props: DateRangePickerProps & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
/**
 * @ignore - do not document.
 */
declare const DateRangePicker: DateRangePickerComponent;
export default DateRangePicker;
export declare type DateRangePickerProps = Record<any, any>;
export declare type DateRange<TDate> = [TDate | null, TDate | null];
