import * as React from 'react';
import { ParseableDate } from '../internals/models/parseableDate';
import { ExportedClockPickerProps } from '../ClockPicker/ClockPicker';
import { ValidationProps } from '../internals/hooks/validation/useValidation';
import { TimeValidationError } from '../internals/hooks/validation/useTimeValidation';
import { BasePickerProps } from '../internals/models/props/basePickerProps';
import { BaseToolbarProps } from '../internals/models/props/baseToolbarProps';
import { ExportedDateInputProps } from '../internals/components/PureDateInput';
import { ClockPickerView } from '../internals/models';
export interface BaseTimePickerProps<TDate> extends ExportedClockPickerProps<TDate>, BasePickerProps<ParseableDate<TDate>, TDate | null>, ValidationProps<TimeValidationError, ParseableDate<TDate>>, ExportedDateInputProps<ParseableDate<TDate>, TDate | null> {
    /**
     * Callback fired on view change.
     * @param {ClockPickerView} view The new view.
     */
    onViewChange?: (view: ClockPickerView) => void;
    /**
     * First view to show.
     */
    openTo?: ClockPickerView;
    /**
     * Component that will replace default toolbar renderer.
     * @default TimePickerToolbar
     */
    ToolbarComponent?: React.JSXElementConstructor<BaseToolbarProps<TDate | null>>;
    /**
     * Mobile picker title, displaying in the toolbar.
     * @default 'Select time'
     */
    toolbarTitle?: React.ReactNode;
    /**
     * Array of views to show.
     */
    views?: readonly ClockPickerView[];
}
declare type DefaultizedProps<Props> = Props & {
    inputFormat: string;
};
export declare function useTimePickerDefaultizedProps<TDate, Props extends BaseTimePickerProps<TDate>>({ ampm, components, inputFormat, openTo, views, ...other }: Props, name: string): DefaultizedProps<Props> & Required<Pick<BaseTimePickerProps<TDate>, 'openTo' | 'views'>>;
export {};
