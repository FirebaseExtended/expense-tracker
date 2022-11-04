import * as React from 'react';
import { PickerOnChangeFn } from '../internals/hooks/useViews';
import { ExportedTimeValidationProps } from '../internals/hooks/validation/useTimeValidation';
import { ClockPickerView, MuiPickersAdapter } from '../internals/models';
import { ClockPickerClasses } from './clockPickerClasses';
export interface ClockPickerComponentsPropsOverrides {
}
export interface ExportedClockPickerProps<TDate> extends ExportedTimeValidationProps<TDate> {
    /**
     * 12h/24h view for hour selection clock.
     * @default false
     */
    ampm?: boolean;
    /**
     * Step over minutes.
     * @default 1
     */
    minutesStep?: number;
    /**
     * Display ampm controls under the clock (instead of in the toolbar).
     * @default false
     */
    ampmInClock?: boolean;
    /**
     * Accessible text that helps user to understand which time and view is selected.
     * @param {ClockPickerView} view The current view rendered.
     * @param {TDate | null} time The current time.
     * @param {MuiPickersAdapter<TDate>} adapter The current date adapter.
     * @returns {string} The clock label.
     * @default <TDate extends any>(
     *   view: ClockView,
     *   time: TDate | null,
     *   adapter: MuiPickersAdapter<TDate>,
     * ) =>
     *   `Select ${view}. ${
     *     time === null ? 'No time selected' : `Selected time is ${adapter.format(time, 'fullTime')}`
     *   }`
     */
    getClockLabelText?: (view: ClockPickerView, time: TDate | null, adapter: MuiPickersAdapter<TDate>) => string;
}
export interface ClockPickerProps<TDate> extends ExportedClockPickerProps<TDate> {
    className?: string;
    /**
     * Set to `true` if focus should be moved to clock picker.
     */
    autoFocus?: boolean;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ClockPickerClasses>;
    /**
     * The components used for each slot.
     * Either a string to use a HTML element or a component.
     */
    components?: {
        LeftArrowButton?: React.ElementType;
        LeftArrowIcon?: React.ElementType;
        RightArrowButton?: React.ElementType;
        RightArrowIcon?: React.ElementType;
    };
    /**
     * The props used for each slot inside.
     */
    componentsProps?: {
        leftArrowButton?: React.SVGAttributes<SVGSVGElement> & ClockPickerComponentsPropsOverrides;
        rightArrowButton?: React.SVGAttributes<SVGSVGElement> & ClockPickerComponentsPropsOverrides;
    };
    /**
     * Selected date @DateIOType.
     */
    date: TDate | null;
    /**
     * Get clock number aria-text for hours.
     * @param {string} hours The hours to format.
     * @returns {string} the formatted hours text.
     * @default (hours: string) => `${hours} hours`
     */
    getHoursClockNumberText?: (hours: string) => string;
    /**
     * Get clock number aria-text for minutes.
     * @param {string} minutes The minutes to format.
     * @returns {string} the formatted minutes text.
     * @default (minutes: string) => `${minutes} minutes`
     */
    getMinutesClockNumberText?: (minutes: string) => string;
    /**
     * Get clock number aria-text for seconds.
     * @param {string} seconds The seconds to format.
     * @returns {string} the formatted seconds text.
     * @default (seconds: string) => `${seconds} seconds`
     */
    getSecondsClockNumberText?: (seconds: string) => string;
    /**
     * Left arrow icon aria-label text.
     * @default 'open previous view'
     */
    leftArrowButtonText?: string;
    /**
     * On change callback @DateIOType.
     */
    onChange: PickerOnChangeFn<TDate>;
    /**
     * Right arrow icon aria-label text.
     * @default 'open next view'
     */
    rightArrowButtonText?: string;
    showViewSwitcher?: boolean;
    /**
     * Controlled open view.
     */
    view?: ClockPickerView;
    /**
     * Views for calendar picker.
     * @default ['hours', 'minutes']
     */
    views?: readonly ClockPickerView[];
    /**
     * Callback fired on view change.
     * @param {ClockPickerView} view The new view.
     */
    onViewChange?: (view: ClockPickerView) => void;
    /**
     * Initially open view.
     * @default 'hours'
     */
    openTo?: ClockPickerView;
}
declare type ClockPickerComponent = (<TDate>(props: ClockPickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
/**
 *
 * API:
 *
 * - [ClockPicker API](https://mui.com/api/clock-picker/)
 */
export declare const ClockPicker: ClockPickerComponent;
export {};
