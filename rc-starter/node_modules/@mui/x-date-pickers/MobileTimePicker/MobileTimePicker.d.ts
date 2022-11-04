import * as React from 'react';
import { BaseTimePickerProps } from '../TimePicker/shared';
import { MobileWrapperProps } from '../internals/components/wrappers/MobileWrapper';
export interface MobileTimePickerProps<TDate = unknown> extends BaseTimePickerProps<TDate>, MobileWrapperProps {
}
declare type MobileTimePickerComponent = (<TDate>(props: MobileTimePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes?: any;
};
/**
 *
 * Demos:
 *
 * - [Time Picker](https://mui.com/components/x/react-date-pickers/time-picker/)
 *
 * API:
 *
 * - [MobileTimePicker API](https://mui.com/api/mobile-time-picker/)
 */
export declare const MobileTimePicker: MobileTimePickerComponent;
export {};
