import * as React from 'react';
import { ExportedClockPickerProps } from '../ClockPicker/ClockPicker';
import { ExportedCalendarPickerProps } from '../CalendarPicker/CalendarPicker';
import { DateTimeValidationError } from '../internals/hooks/validation/useDateTimeValidation';
import { ValidationProps } from '../internals/hooks/validation/useValidation';
import { ParseableDate } from '../internals/models/parseableDate';
import { BasePickerProps } from '../internals/models/props/basePickerProps';
import { BaseToolbarProps } from '../internals/models/props/baseToolbarProps';
import { ExportedDateInputProps } from '../internals/components/PureDateInput';
import { CalendarOrClockPickerView } from '../internals/models';
export interface BaseDateTimePickerProps<TDate> extends ExportedClockPickerProps<TDate>, ExportedCalendarPickerProps<TDate>, BasePickerProps<ParseableDate<TDate>, TDate | null>, ValidationProps<DateTimeValidationError, ParseableDate<TDate>>, ExportedDateInputProps<ParseableDate<TDate>, TDate | null> {
    /**
     * The components used for each slot.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components?: ExportedCalendarPickerProps<TDate>['components'] & ExportedDateInputProps<ParseableDate<TDate>, TDate | null>['components'];
    /**
     * To show tabs.
     */
    hideTabs?: boolean;
    /**
     * Date tab icon.
     */
    dateRangeIcon?: React.ReactNode;
    /**
     * Time tab icon.
     */
    timeIcon?: React.ReactNode;
    /**
     * Minimal selectable moment of time with binding to date, to set min time in each day use `minTime`.
     */
    minDateTime?: TDate;
    /**
     * Minimal selectable moment of time with binding to date, to set max time in each day use `maxTime`.
     */
    maxDateTime?: TDate;
    /**
     * Callback fired on view change.
     * @param {CalendarOrClockPickerView} view The new view.
     */
    onViewChange?: (view: CalendarOrClockPickerView) => void;
    /**
     * First view to show.
     */
    openTo?: CalendarOrClockPickerView;
    /**
     * Component that will replace default toolbar renderer.
     * @default DateTimePickerToolbar
     */
    ToolbarComponent?: React.JSXElementConstructor<BaseToolbarProps<TDate | null>>;
    /**
     * Mobile picker title, displaying in the toolbar.
     * @default 'Select date & time'
     */
    toolbarTitle?: React.ReactNode;
    /**
     * Date format, that is displaying in toolbar.
     */
    toolbarFormat?: string;
    /**
     * Array of views to show.
     */
    views?: readonly CalendarOrClockPickerView[];
}
declare type DefaultizedProps<Props> = Props & {
    inputFormat: string;
};
export declare function useDateTimePickerDefaultizedProps<TDate, Props extends BaseDateTimePickerProps<TDate>>({ ampm, inputFormat, maxDate: maxDateProp, maxDateTime, maxTime, minDate: minDateProp, minDateTime, minTime, openTo, orientation, views, ...other }: Props, name: string): DefaultizedProps<Props> & Required<Pick<BaseDateTimePickerProps<TDate>, 'openTo' | 'views'>>;
export {};
