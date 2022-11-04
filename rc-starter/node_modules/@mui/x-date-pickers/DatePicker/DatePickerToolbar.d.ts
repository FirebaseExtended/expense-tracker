import * as React from 'react';
import { BaseToolbarProps } from '../internals/models/props/baseToolbarProps';
declare type DatePickerToolbarComponent = (<TDate>(props: BaseToolbarProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
/**
 * @ignore - internal component.
 */
export declare const DatePickerToolbar: DatePickerToolbarComponent;
export {};
