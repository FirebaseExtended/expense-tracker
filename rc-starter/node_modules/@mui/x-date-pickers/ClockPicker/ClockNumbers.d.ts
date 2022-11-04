/// <reference types="react" />
import { MuiPickersAdapter } from '../internals/models';
import { PickerSelectionState } from '../internals/hooks/usePickerState';
interface GetHourNumbersOptions<TDate> {
    ampm: boolean;
    date: TDate;
    getClockNumberText: (hour: string) => string;
    isDisabled: (value: number) => boolean;
    onChange: (value: number, isFinish?: PickerSelectionState) => void;
    /**
     * DOM id that the selected option should have
     * Should only be `undefined` on the server
     */
    selectedId: string | undefined;
    utils: MuiPickersAdapter<TDate>;
}
/**
 * @ignore - internal component.
 */
export declare const getHourNumbers: <TDate extends unknown>({ ampm, date, getClockNumberText, isDisabled, selectedId, utils, }: GetHourNumbersOptions<TDate>) => JSX.Element[];
export declare const getMinutesNumbers: <TDate extends unknown>({ utils, value, isDisabled, getClockNumberText, selectedId, }: Omit<GetHourNumbersOptions<TDate>, "date" | "ampm"> & {
    value: number;
}) => JSX.Element[];
export {};
