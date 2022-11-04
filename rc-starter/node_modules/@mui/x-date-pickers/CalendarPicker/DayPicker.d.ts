import * as React from 'react';
import { PickersDayProps } from '../PickersDay/PickersDay';
import { PickerOnChangeFn } from '../internals/hooks/useViews';
import { SlideDirection, SlideTransitionProps } from './PickersSlideTransition';
export interface ExportedCalendarProps<TDate> extends Pick<PickersDayProps<TDate>, 'disableHighlightToday' | 'showDaysOutsideCurrentMonth' | 'allowSameDateSelection'> {
    autoFocus?: boolean;
    /**
     * If `true` renders `LoadingComponent` in calendar instead of calendar view.
     * Can be used to preload information and show it in calendar.
     * @default false
     */
    loading?: boolean;
    /**
     * Calendar onChange.
     */
    onChange: PickerOnChangeFn<TDate>;
    /**
     * Custom renderer for day. Check the [PickersDay](https://mui.com/api/pickers-day/) component.
     * @param {TDate} day The day to render.
     * @param {Array<TDate | null>} selectedDates The dates currently selected.
     * @param {PickersDayProps<TDate>} pickersDayProps The props of the day to render.
     * @returns {JSX.Element} The element representing the day.
     */
    renderDay?: (day: TDate, selectedDates: Array<TDate | null>, pickersDayProps: PickersDayProps<TDate>) => JSX.Element;
    /**
     * Component displaying when passed `loading` true.
     * @returns {React.ReactNode} The node to render when loading.
     * @default () => "..."
     */
    renderLoading?: () => React.ReactNode;
}
export interface PickersCalendarProps<TDate> extends ExportedCalendarProps<TDate> {
    autoFocus?: boolean;
    className?: string;
    currentMonth: TDate;
    date: TDate | [TDate | null, TDate | null] | null;
    disabled?: boolean;
    focusedDay: TDate | null;
    isDateDisabled: (day: TDate) => boolean;
    isMonthSwitchingAnimating: boolean;
    onFocusedDayChange: (newFocusedDay: TDate) => void;
    onMonthSwitchingAnimationEnd: () => void;
    readOnly?: boolean;
    reduceAnimations: boolean;
    slideDirection: SlideDirection;
    TransitionProps?: Partial<SlideTransitionProps>;
}
/**
 * @ignore - do not document.
 */
export declare function DayPicker<TDate>(props: PickersCalendarProps<TDate>): JSX.Element;
