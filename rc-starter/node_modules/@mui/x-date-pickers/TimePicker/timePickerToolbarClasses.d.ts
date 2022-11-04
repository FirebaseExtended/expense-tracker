export interface TimePickerToolbarClasses {
    separator: string;
    hourMinuteLabel: string;
    hourMinuteLabelLandscape: string;
    hourMinuteLabelReverse: string;
    ampmSelection: string;
    ampmLandscape: string;
    ampmLabel: string;
    penIconLandscape: string;
}
export declare type TimePickerToolbarClassKey = keyof TimePickerToolbarClasses;
export declare function getTimePickerToolbarUtilityClass(slot: string): string;
export declare const timePickerToolbarClasses: TimePickerToolbarClasses;
