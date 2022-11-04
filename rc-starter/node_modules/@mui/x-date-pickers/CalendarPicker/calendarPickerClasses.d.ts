export interface CalendarPickerClasses {
    /** Styles applied to the root element. */
    root: string;
    /** Styles applied to the transition group element. */
    viewTransitionContainer: string;
}
export declare type CalendarPickerClassKey = keyof CalendarPickerClasses;
export declare const getCalendarPickerUtilityClass: (slot: string) => string;
export declare const calendarPickerClasses: CalendarPickerClasses;
