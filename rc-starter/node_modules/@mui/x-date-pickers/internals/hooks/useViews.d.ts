import { PickerSelectionState } from './usePickerState';
import { CalendarOrClockPickerView } from '../models';
export declare type PickerOnChangeFn<TDate> = (date: TDate | null, selectionState?: PickerSelectionState) => void;
interface UseViewsOptions<TDate, View extends CalendarOrClockPickerView> {
    onChange: PickerOnChangeFn<TDate>;
    onViewChange?: (newView: View) => void;
    openTo?: View;
    view: View | undefined;
    views: readonly View[];
}
export declare function useViews<TDate, View extends CalendarOrClockPickerView>({ onChange, onViewChange, openTo, view, views, }: UseViewsOptions<TDate, View>): {
    handleChangeAndOpenNext: PickerOnChangeFn<TDate>;
    nextView: View;
    previousView: View;
    openNext: () => void;
    openView: View;
    setOpenView: (newView: View) => void;
};
export {};
