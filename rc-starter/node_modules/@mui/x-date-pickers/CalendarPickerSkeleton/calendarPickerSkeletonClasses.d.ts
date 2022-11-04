export interface CalendarPickerSkeletonClasses {
    /** Styles applied to the root element. */
    root: string;
    /** Styles applied to the week element. */
    week: string;
    /** Styles applied to the day element. */
    daySkeleton: string;
}
export declare type CalendarPickerSkeletonClassKey = keyof CalendarPickerSkeletonClasses;
export declare const getCalendarPickerSkeletonUtilityClass: (slot: string) => string;
export declare const calendarPickerSkeletonClasses: CalendarPickerSkeletonClasses;
