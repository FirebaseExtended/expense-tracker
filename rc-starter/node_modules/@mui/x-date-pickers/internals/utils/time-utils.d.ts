import { MuiPickersAdapter } from '../models';
declare type Meridiem = 'am' | 'pm' | null;
export declare const getMeridiem: <TDate>(date: TDate, utils: MuiPickersAdapter<TDate>) => Meridiem;
export declare const convertValueToMeridiem: (value: number, meridiem: Meridiem, ampm: boolean) => number;
export declare const convertToMeridiem: <TDate>(time: TDate, meridiem: 'am' | 'pm', ampm: boolean, utils: MuiPickersAdapter<TDate>) => TDate;
export declare const getSecondsInDay: <TDate>(date: TDate, utils: MuiPickersAdapter<TDate>) => number;
export declare const createIsAfterIgnoreDatePart: <TDate>(disableIgnoringDatePartForTimeValidation: boolean, utils: MuiPickersAdapter<TDate>) => (dateLeft: TDate, dateRight: TDate) => boolean;
export {};
