export interface ClockPickerClasses {
    /** Styles applied to the root element. */
    root: string;
    /** Styles applied to the arrowSwitcher element. */
    arrowSwitcher: string;
}
export declare type ClockPickerClassKey = keyof ClockPickerClasses;
export declare function getClockPickerUtilityClass(slot: string): string;
export declare const clockPickerClasses: ClockPickerClasses;
