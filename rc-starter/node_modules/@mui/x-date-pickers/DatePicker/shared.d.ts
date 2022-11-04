import * as React from 'react';
import { ParseableDate } from '../internals/models/parseableDate';
import { OverrideParseableDateProps } from '../internals/hooks/date-helpers-hooks';
import { CalendarPickerView } from '../internals/models';
import { ExportedCalendarPickerProps } from '../CalendarPicker/CalendarPicker';
import { DateValidationError } from '../internals/hooks/validation/useDateValidation';
import { ValidationProps } from '../internals/hooks/validation/useValidation';
import { ExportedDateInputProps } from '../internals/components/PureDateInput';
import { BasePickerProps } from '../internals/models/props/basePickerProps';
import { BaseToolbarProps } from '../internals/models/props/baseToolbarProps';
export interface BaseDatePickerProps<TDate> extends ExportedCalendarPickerProps<TDate>, BasePickerProps<ParseableDate<TDate>, TDate | null>, ValidationProps<DateValidationError, ParseableDate<TDate>>, ExportedDateInputProps<ParseableDate<TDate>, TDate | null> {
    /**
     * The components used for each slot.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components?: OverrideParseableDateProps<TDate, ExportedCalendarPickerProps<TDate>, 'minDate' | 'maxDate'>['components'] & ExportedDateInputProps<ParseableDate<TDate>, TDate | null>['components'];
    /**
     * Callback fired on view change.
     * @param {CalendarPickerView} view The new view.
     */
    onViewChange?: (view: CalendarPickerView) => void;
    /**
     * First view to show.
     */
    openTo?: CalendarPickerView;
    /**
     * Component that will replace default toolbar renderer.
     * @default DatePickerToolbar
     */
    ToolbarComponent?: React.JSXElementConstructor<BaseToolbarProps<TDate | null>>;
    /**
     * Mobile picker title, displaying in the toolbar.
     * @default 'Select date'
     */
    toolbarTitle?: React.ReactNode;
    /**
     * Array of views to show.
     */
    views?: readonly CalendarPickerView[];
}
export declare const isYearOnlyView: (views: readonly CalendarPickerView[]) => views is readonly "year"[];
export declare const isYearAndMonthViews: (views: readonly CalendarPickerView[]) => views is readonly ("month" | "year")[];
export declare type DefaultizedProps<Props> = Props & {
    inputFormat: string;
};
export declare function useDatePickerDefaultizedProps<TDate, Props extends BaseDatePickerProps<TDate>>({ openTo, views, minDate: minDateProp, maxDate: maxDateProp, ...other }: Props, name: string): DefaultizedProps<Props> & Required<Pick<BaseDatePickerProps<unknown>, 'openTo' | 'views'>>;
