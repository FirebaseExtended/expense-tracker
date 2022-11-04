import { ParseableDate } from '../models/parseableDate';
import { PickerOnChangeFn } from './useViews';
export declare type OverrideParseableDateProps<TDate, TProps, TKey extends keyof TProps> = Omit<TProps, TKey> & Partial<Record<TKey, ParseableDate<TDate>>>;
interface MonthValidationOptions<TDate> {
    disablePast?: boolean;
    disableFuture?: boolean;
    minDate: TDate;
    maxDate: TDate;
}
export declare function useNextMonthDisabled<TDate>(month: TDate, { disableFuture, maxDate }: Pick<MonthValidationOptions<TDate>, 'disableFuture' | 'maxDate'>): boolean;
export declare function usePreviousMonthDisabled<TDate>(month: TDate, { disablePast, minDate }: Pick<MonthValidationOptions<TDate>, 'disablePast' | 'minDate'>): boolean;
export declare function useMeridiemMode<TDate>(date: TDate, ampm: boolean | undefined, onChange: PickerOnChangeFn<TDate>): {
    meridiemMode: "am" | "pm" | null;
    handleMeridiemChange: (mode: 'am' | 'pm') => void;
};
export {};
