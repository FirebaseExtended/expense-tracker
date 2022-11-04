import * as React from 'react';
import { DateInputProps, MuiTextFieldProps } from '../components/PureDateInput';
declare type MaskedInputProps = Omit<DateInputProps, 'adornmentPosition' | 'disableOpenPicker' | 'getOpenDialogAriaText' | 'InputAdornmentProps' | 'InputProps' | 'open' | 'openPicker' | 'OpenPickerButtonProps' | 'renderInput'> & {
    inputProps?: Partial<React.HTMLProps<HTMLInputElement>>;
};
export declare const useMaskedInput: ({ acceptRegex, disabled, disableMaskedInput, ignoreInvalidInputs, inputFormat, inputProps, label, mask, onChange, rawValue, readOnly, rifmFormatter, TextFieldProps, validationError, }: MaskedInputProps) => MuiTextFieldProps;
export {};
