import * as React from 'react';
import { ClockPickerView } from '../internals/models';
export interface ClockPointerProps extends React.HTMLAttributes<HTMLDivElement> {
    hasSelected: boolean;
    isInner: boolean;
    type: ClockPickerView;
    value: number;
}
/**
 * @ignore - internal component.
 * TODO: Remove class
 */
export declare class ClockPointer extends React.Component<ClockPointerProps> {
    static getDerivedStateFromProps: (nextProps: ClockPointerProps, state: ClockPointer['state']) => {
        toAnimateTransform: boolean;
        previousType: ClockPickerView;
    };
    state: {
        toAnimateTransform: boolean;
        previousType: undefined;
    };
    render(): JSX.Element;
}
