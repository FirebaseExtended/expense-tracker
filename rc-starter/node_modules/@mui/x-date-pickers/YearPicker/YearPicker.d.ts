/// <reference types="react" />
import { PickerOnChangeFn } from '../internals/hooks/useViews';
import { YearPickerClasses } from './yearPickerClasses';
export interface ExportedYearPickerProps<TDate> {
    /**
     * Callback firing on year change @DateIOType.
     * @param {TDate} year The new year.
     */
    onYearChange?: (year: TDate) => void;
    /**
     * Disable specific years dynamically.
     * Works like `shouldDisableDate` but for year selection view @DateIOType.
     * @param {TDate} year The year to test.
     * @returns {boolean} Return `true` if the year should be disabled.
     */
    shouldDisableYear?: (year: TDate) => boolean;
}
export interface YearPickerProps<TDate> extends ExportedYearPickerProps<TDate> {
    autoFocus?: boolean;
    className?: string;
    classes?: YearPickerClasses;
    date: TDate | null;
    disabled?: boolean;
    disableFuture?: boolean | null;
    disablePast?: boolean | null;
    isDateDisabled: (day: TDate) => boolean;
    minDate: TDate;
    maxDate: TDate;
    onChange: PickerOnChangeFn<TDate>;
    onFocusedDayChange?: (day: TDate) => void;
    readOnly?: boolean;
}
declare type YearPickerComponent = (<TDate>(props: YearPickerProps<TDate>) => JSX.Element) & {
    propTypes?: any;
};
export declare const YearPicker: YearPickerComponent;
export {};
