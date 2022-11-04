import * as React from 'react';
import { PickerStaticWrapperClasses } from './pickerStaticWrapperClasses';
export interface PickerStaticWrapperProps {
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<PickerStaticWrapperClasses>;
    /**
     * Force static wrapper inner components to be rendered in mobile or desktop mode.
     */
    displayStaticWrapperAs: 'desktop' | 'mobile';
}
export declare function PickerStaticWrapper(inProps: PickerStaticWrapperProps): JSX.Element;
