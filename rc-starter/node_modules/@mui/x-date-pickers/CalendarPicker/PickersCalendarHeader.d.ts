import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { SlideDirection } from './PickersSlideTransition';
import { ExportedDateValidationProps } from '../internals/hooks/validation/useDateValidation';
import { ExportedArrowSwitcherProps } from '../internals/components/PickersArrowSwitcher';
import { CalendarPickerView } from '../internals/models';
export declare type ExportedCalendarHeaderProps<TDate> = Pick<PickersCalendarHeaderProps<TDate>, 'components' | 'componentsProps' | 'getViewSwitchingButtonText' | 'leftArrowButtonText' | 'rightArrowButtonText'>;
export interface PickersCalendarHeaderComponentsPropsOverrides {
}
export interface PickersCalendarHeaderProps<TDate> extends ExportedArrowSwitcherProps, Omit<ExportedDateValidationProps<TDate>, 'shouldDisableDate'> {
    /**
     * The components used for each slot.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components?: ExportedArrowSwitcherProps['components'] & {
        SwitchViewButton?: React.ElementType;
        SwitchViewIcon?: React.ElementType;
    };
    /**
     * The props used for each slot inside.
     * @default {}
     */
    componentsProps?: ExportedArrowSwitcherProps['componentsProps'] & {
        switchViewButton?: React.ComponentPropsWithRef<typeof IconButton> & PickersCalendarHeaderComponentsPropsOverrides;
    };
    currentMonth: TDate;
    disabled?: boolean;
    views: readonly CalendarPickerView[];
    /**
     * Get aria-label text for switching between views button.
     * @param {CalendarPickerView} currentView The view from which we want to get the button text.
     * @returns {string} The label of the view.
     */
    getViewSwitchingButtonText?: (currentView: CalendarPickerView) => string;
    onMonthChange: (date: TDate, slideDirection: SlideDirection) => void;
    openView: CalendarPickerView;
    reduceAnimations: boolean;
    onViewChange?: (view: CalendarPickerView) => void;
}
/**
 * @ignore - do not document.
 */
export declare function PickersCalendarHeader<TDate>(props: PickersCalendarHeaderProps<TDate>): JSX.Element | null;
