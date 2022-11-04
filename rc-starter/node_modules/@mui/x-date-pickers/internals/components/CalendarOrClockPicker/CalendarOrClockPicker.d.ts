import * as React from 'react';
import { ExportedClockPickerProps } from '../../../ClockPicker/ClockPicker';
import { ExportedCalendarPickerProps } from '../../../CalendarPicker/CalendarPicker';
import { WrapperVariant } from '../wrappers/WrapperVariantContext';
import { DateInputPropsLike } from '../wrappers/WrapperProps';
import { PickerSelectionState } from '../../hooks/usePickerState';
import { BasePickerProps } from '../../models/props/basePickerProps';
import { CalendarOrClockPickerView } from '../../models';
export interface ExportedCalendarOrClockPickerProps<View extends CalendarOrClockPickerView> extends Omit<BasePickerProps<unknown, unknown>, 'value' | 'onChange'>, Omit<ExportedCalendarPickerProps<unknown>, 'onViewChange' | 'openTo' | 'view'>, ExportedClockPickerProps<unknown> {
    dateRangeIcon?: React.ReactNode;
    /**
     * Callback fired on view change.
     * @param {View} view The new view.
     */
    onViewChange?: (view: View) => void;
    /**
     * First view to show.
     */
    openTo: View;
    timeIcon?: React.ReactNode;
    /**
     * Array of views to show.
     */
    views: readonly View[];
}
export interface CalendarOrClockPickerProps<View extends CalendarOrClockPickerView> extends ExportedCalendarOrClockPickerProps<View> {
    autoFocus?: boolean;
    date: any;
    DateInputProps: DateInputPropsLike;
    isMobileKeyboardViewOpen: boolean;
    onDateChange: (date: any, currentWrapperVariant: WrapperVariant, isFinish?: PickerSelectionState) => void;
    toggleMobileKeyboardView: () => void;
}
export declare const MobileKeyboardInputView: import("@emotion/styled").StyledComponent<import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare function CalendarOrClockPicker<View extends CalendarOrClockPickerView>(props: CalendarOrClockPickerProps<View>): JSX.Element;
