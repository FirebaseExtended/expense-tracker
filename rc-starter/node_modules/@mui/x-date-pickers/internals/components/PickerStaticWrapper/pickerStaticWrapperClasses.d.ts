export interface PickerStaticWrapperClasses {
    /** Styles applied to the root element. */
    root: string;
}
export declare type PickerStaticWrapperClassKey = keyof PickerStaticWrapperClasses;
export declare function getStaticWrapperUtilityClass(slot: string): string;
export declare const pickerStaticWrapperClasses: PickerStaticWrapperClasses;
