import * as React from 'react';
declare const classes: Record<"root" | "selected", string>;
export interface MonthProps {
    children: React.ReactNode;
    disabled?: boolean;
    onSelect: (value: any) => void;
    selected?: boolean;
    value: any;
}
export declare type PickersMonthClassKey = keyof typeof classes;
/**
 * @ignore - do not document.
 */
export declare const PickersMonth: React.FC<MonthProps>;
export {};
