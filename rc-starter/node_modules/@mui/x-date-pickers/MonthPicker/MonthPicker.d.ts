import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { PickerOnChangeFn } from '../internals/hooks/useViews';
import { MonthPickerClasses } from './monthPickerClasses';
export interface MonthPickerProps<TDate> {
    /**
     * className applied to the root element.
     */
    className?: string;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<MonthPickerClasses>;
    /** Date value for the MonthPicker */
    date: TDate | null;
    /** If `true` picker is disabled */
    disabled?: boolean;
    /** If `true` past days are disabled. */
    disablePast?: boolean | null;
    /** If `true` future days are disabled. */
    disableFuture?: boolean | null;
    /** Minimal selectable date. */
    minDate: TDate;
    /** Maximal selectable date. */
    maxDate: TDate;
    /** Callback fired on date change. */
    onChange: PickerOnChangeFn<TDate>;
    onMonthChange?: (date: TDate) => void | Promise<void>;
    /** If `true` picker is readonly */
    readOnly?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
}
declare type MonthPickerComponent = (<TDate>(props: MonthPickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
export declare const MonthPicker: MonthPickerComponent;
export {};
