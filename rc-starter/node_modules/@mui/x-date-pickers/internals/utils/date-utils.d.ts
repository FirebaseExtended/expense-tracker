import { MuiPickersAdapter } from '../models';
interface FindClosestDateParams<TDate> {
    date: TDate;
    disableFuture: boolean;
    disablePast: boolean;
    maxDate: TDate;
    minDate: TDate;
    shouldDisableDate: (date: TDate) => boolean;
    utils: MuiPickersAdapter<TDate>;
}
export declare const findClosestEnabledDate: <TDate>({ date, disableFuture, disablePast, maxDate, minDate, shouldDisableDate, utils, }: FindClosestDateParams<TDate>) => TDate;
export declare const parsePickerInputValue: <TDate>(utils: MuiPickersAdapter<TDate>, value: TDate) => TDate | null;
export {};
