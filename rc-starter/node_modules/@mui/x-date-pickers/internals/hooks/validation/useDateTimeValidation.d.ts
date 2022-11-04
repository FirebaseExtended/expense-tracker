import { ValidationProps, Validator } from './useValidation';
import { DateValidationError, ExportedDateValidationProps } from './useDateValidation';
import { TimeValidationError, ExportedTimeValidationProps } from './useTimeValidation';
export interface DateTimeValidationProps<TDate> extends ExportedDateValidationProps<TDate>, ExportedTimeValidationProps<TDate>, ValidationProps<DateTimeValidationError, TDate> {
}
export declare const validateDateTime: Validator<any, DateTimeValidationProps<any>>;
export declare type DateTimeValidationError = DateValidationError | TimeValidationError;
export declare function useDateTimeValidation<TDate>(props: DateTimeValidationProps<TDate> & ValidationProps<DateTimeValidationError, TDate>): DateTimeValidationError;
