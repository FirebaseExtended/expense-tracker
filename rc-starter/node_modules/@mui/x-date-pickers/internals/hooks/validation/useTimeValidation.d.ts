import { ValidationProps, Validator } from './useValidation';
import { ClockPickerView } from '../../models';
export interface ExportedTimeValidationProps<TDate> {
    /**
     * Min time acceptable time.
     * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
     */
    minTime?: TDate;
    /**
     * Max time acceptable time.
     * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
     */
    maxTime?: TDate;
    /**
     * Dynamically check if time is disabled or not.
     * If returns `false` appropriate time point will ot be acceptable.
     * @param {number} timeValue The value to check.
     * @param {ClockPickerView} clockType The clock type of the timeValue.
     * @returns {boolean} Returns `true` if the time should be disabled
     */
    shouldDisableTime?: (timeValue: number, clockType: ClockPickerView) => boolean;
    /**
     * Do not ignore date part when validating min/max time.
     * @default false
     */
    disableIgnoringDatePartForTimeValidation?: boolean;
}
export interface TimeValidationProps<TDate> extends ExportedTimeValidationProps<TDate>, ValidationProps<TimeValidationError, TDate> {
}
export declare type TimeValidationError = 'invalidDate' | 'minTime' | 'maxTime' | 'shouldDisableTime-hours' | 'shouldDisableTime-minutes' | 'shouldDisableTime-seconds' | null;
export declare const validateTime: Validator<any, TimeValidationProps<any>>;
export declare const useTimeValidation: <TDate>(props: TimeValidationProps<TDate> & ValidationProps<TimeValidationError, TDate>) => TimeValidationError;
