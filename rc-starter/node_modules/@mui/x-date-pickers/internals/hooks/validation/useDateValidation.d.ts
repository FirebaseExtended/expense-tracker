import { ValidationProps, Validator } from './useValidation';
export interface ExportedDateValidationProps<TDate> {
    /**
     * Disable past dates.
     * @default false
     */
    disablePast?: boolean;
    /**
     * Disable future dates.
     * @default false
     */
    disableFuture?: boolean;
    /**
     * Min selectable date. @DateIOType
     * @default Date(1900-01-01)
     */
    minDate?: TDate;
    /**
     * Max selectable date. @DateIOType
     * @default Date(2099-31-12)
     */
    maxDate?: TDate;
    /**
     * Disable specific date. @DateIOType
     * @param {TDate} day The date to test.
     * @returns {boolean} Return `true` if the date should be disabled.
     */
    shouldDisableDate?: (day: TDate) => boolean;
}
export interface DateValidationProps<TDate> extends ValidationProps<DateValidationError, TDate>, ExportedDateValidationProps<TDate> {
}
export declare type DateValidationError = 'invalidDate' | 'shouldDisableDate' | 'disableFuture' | 'disablePast' | 'minDate' | 'maxDate' | null;
export declare const validateDate: Validator<any, DateValidationProps<any>>;
export declare const useDateValidation: <TDate>(props: DateValidationProps<TDate> & ValidationProps<DateValidationError, TDate>) => DateValidationError;
