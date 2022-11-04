/// <reference types="react" />
import { BaseToolbarProps } from '../internals/models/props/baseToolbarProps';
import { TimePickerToolbarClasses } from './timePickerToolbarClasses';
export interface TimePickerToolbarProps<TDate> extends BaseToolbarProps<TDate> {
    classes?: Partial<TimePickerToolbarClasses>;
}
/**
 * @ignore - internal component.
 */
export declare const TimePickerToolbar: <TDate extends unknown>(props: BaseToolbarProps<TDate>) => JSX.Element;
