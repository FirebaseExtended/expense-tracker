import * as React from 'react';
import { CalendarOrClockPickerView } from '../internals/models';
export interface DateTimePickerTabsProps {
    dateRangeIcon?: React.ReactNode;
    onChange: (view: CalendarOrClockPickerView) => void;
    timeIcon?: React.ReactNode;
    view: CalendarOrClockPickerView;
}
/**
 * @ignore - internal component.
 */
export declare const DateTimePickerTabs: (props: DateTimePickerTabsProps) => JSX.Element;
