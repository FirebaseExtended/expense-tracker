import * as React from 'react';
import { ExportedCalendarProps } from './DayPicker';
import { PickerOnChangeFn } from '../internals/hooks/useViews';
import { ExportedCalendarHeaderProps } from './PickersCalendarHeader';
import { ExportedYearPickerProps } from '../YearPicker/YearPicker';
import { CalendarPickerView } from '../internals/models';
import { CalendarPickerClasses } from './calendarPickerClasses';
export interface CalendarPickerProps<TDate> extends ExportedCalendarProps<TDate>, ExportedYearPickerProps<TDate>, ExportedCalendarHeaderProps<TDate> {
    className?: string;
    classes?: Partial<CalendarPickerClasses>;
    date: TDate | null;
    /**
     * Default calendar month displayed when `value={null}`.
     */
    defaultCalendarMonth?: TDate;
    /**
     * If `true`, the picker and text field are disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * @default false
     */
    disableFuture?: boolean;
    /**
     * @default false
     */
    disablePast?: boolean;
    /**
     * Max selectable date. @DateIOType
     */
    maxDate?: TDate;
    /**
     * Min selectable date. @DateIOType
     */
    minDate?: TDate;
    /**
     * Callback fired on view change.
     * @param {CalendarPickerView} view The new view.
     */
    onViewChange?: (view: CalendarPickerView) => void;
    /**
     * Callback fired on date change
     */
    onChange: PickerOnChangeFn<TDate>;
    /**
     * Callback firing on month change. @DateIOType
     * @param {TDate} month The new month.
     */
    onMonthChange?: (month: TDate) => void;
    /**
     * Initially open view.
     * @default 'day'
     */
    openTo?: CalendarPickerView;
    /**
     * Make picker read only.
     * @default false
     */
    readOnly?: boolean;
    /**
     * Disable heavy animations.
     * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
     */
    reduceAnimations?: boolean;
    /**
     * Component displaying when passed `loading` true.
     * @returns {React.ReactNode} The node to render when loading.
     * @default () => <span data-mui-test="loading-progress">...</span>
     */
    renderLoading?: () => React.ReactNode;
    /**
     * Disable specific date. @DateIOType
     * @param {TDate} day The date to check.
     * @returns {boolean} If `true` the day will be disabled.
     */
    shouldDisableDate?: (day: TDate) => boolean;
    /**
     * Controlled open view.
     */
    view?: CalendarPickerView;
    /**
     * Views for calendar picker.
     * @default ['year', 'day']
     */
    views?: readonly CalendarPickerView[];
}
export declare type ExportedCalendarPickerProps<TDate> = Omit<CalendarPickerProps<TDate>, 'date' | 'view' | 'views' | 'openTo' | 'onChange' | 'changeView' | 'slideDirection' | 'currentMonth' | 'className' | 'classes'>;
declare type CalendarPickerComponent = (<TDate>(props: CalendarPickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/components/x/react-date-pickers/date-picker/)
 *
 * API:
 *
 * - [CalendarPicker API](https://mui.com/api/calendar-picker/)
 */
declare const CalendarPicker: CalendarPickerComponent;
export { CalendarPicker };
