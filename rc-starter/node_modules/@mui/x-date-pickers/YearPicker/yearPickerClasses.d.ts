export interface YearPickerClasses {
    /** Styles applied to the root element. */
    root?: string;
}
export declare type YearPickerClassKey = keyof YearPickerClasses;
export declare function getYearPickerUtilityClass(slot: string): string;
export declare const yearPickerClasses: Record<"root", string>;
