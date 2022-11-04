import * as React from 'react';
import { SxProps } from '@mui/system';
import { ButtonBaseProps } from '@mui/material/ButtonBase';
import { Theme } from '@mui/material/styles';
import { ExtendMui } from '../internals/models/helpers';
import { PickerSelectionState } from '../internals/hooks/usePickerState';
import { PickersDayClasses } from './pickersDayClasses';
export interface PickersDayProps<TDate> extends ExtendMui<ButtonBaseProps> {
    /**
     * If `true`, `onChange` is fired on click even if the same date is selected.
     * @default false
     */
    allowSameDateSelection?: boolean;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<PickersDayClasses>;
    /**
     * The date to show.
     */
    day: TDate;
    /**
     * If `true`, renders as disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * If `true`, todays date is rendering without highlighting with circle.
     * @default false
     */
    disableHighlightToday?: boolean;
    /**
     * If `true`, days are rendering without margin. Useful for displaying linked range of days.
     * @default false
     */
    disableMargin?: boolean;
    isAnimating?: boolean;
    onDayFocus?: (day: TDate) => void;
    onDaySelect: (day: TDate, isFinish: PickerSelectionState) => void;
    /**
     * If `true`, day is outside of month and will be hidden.
     */
    outsideCurrentMonth: boolean;
    /**
     * If `true`, renders as selected.
     * @default false
     */
    selected?: boolean;
    /**
     * If `true`, days that have `outsideCurrentMonth={true}` are displayed.
     * @default false
     */
    showDaysOutsideCurrentMonth?: boolean;
    /**
     * If `true`, renders as today date.
     * @default false
     */
    today?: boolean;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
}
declare type PickersDayComponent = (<TDate>(props: PickersDayProps<TDate> & React.RefAttributes<HTMLButtonElement>) => JSX.Element) & {
    propTypes?: any;
};
export declare const areDayPropsEqual: (prevProps: PickersDayProps<any>, nextProps: PickersDayProps<any>) => boolean;
/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/components/x/react-date-pickers/date-picker/)
 *
 * API:
 *
 * - [PickersDay API](https://mui.com/api/pickers-day/)
 */
export declare const PickersDay: PickersDayComponent;
export {};
