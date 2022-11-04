import * as React from 'react';
import { BaseToolbarProps } from '../models/props/baseToolbarProps';
export interface PickersToolbarProps<TDate> extends Pick<BaseToolbarProps<TDate>, 'getMobileKeyboardInputViewButtonText' | 'isMobileKeyboardViewOpen' | 'toggleMobileKeyboardView'> {
    className?: string;
    viewType?: 'calendar' | 'clock';
    isLandscape: boolean;
    landscapeDirection?: 'row' | 'column';
    penIconClassName?: string;
    toolbarTitle: React.ReactNode;
}
declare type PickersToolbarComponent = (<TDate>(props: React.PropsWithChildren<PickersToolbarProps<TDate>> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
export declare const PickersToolbar: PickersToolbarComponent;
export {};
