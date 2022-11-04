import * as React from 'react';
import { PickerSelectionState } from '../internals/hooks/usePickerState';
import { useMeridiemMode } from '../internals/hooks/date-helpers-hooks';
import { ClockPickerView, MuiPickersAdapter } from '../internals/models';
export interface ClockProps<TDate> extends ReturnType<typeof useMeridiemMode> {
    ampm: boolean;
    ampmInClock: boolean;
    autoFocus?: boolean;
    children: readonly React.ReactNode[];
    date: TDate | null;
    getClockLabelText: (view: ClockPickerView, time: TDate | null, adapter: MuiPickersAdapter<TDate>) => string;
    isTimeDisabled: (timeValue: number, type: ClockPickerView) => boolean;
    minutesStep?: number;
    onChange: (value: number, isFinish?: PickerSelectionState) => void;
    /**
     * DOM id that the selected option should have
     * Should only be `undefined` on the server
     */
    selectedId: string | undefined;
    type: ClockPickerView;
    value: number;
}
/**
 * @ignore - internal component.
 */
export declare function Clock<TDate>(props: ClockProps<TDate>): JSX.Element;
