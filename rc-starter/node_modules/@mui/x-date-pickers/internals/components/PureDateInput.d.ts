import * as React from 'react';
import { TextFieldProps as MuiTextFieldPropsType } from '@mui/material/TextField';
import { IconButtonProps } from '@mui/material/IconButton';
import { InputAdornmentProps } from '@mui/material/InputAdornment';
import { ParseableDate } from '../models/parseableDate';
import { MuiPickersAdapter } from '../models';
export declare type MuiTextFieldProps = MuiTextFieldPropsType | Omit<MuiTextFieldPropsType, 'variant'>;
export interface DateInputProps<TInputValue = ParseableDate<unknown>, TDateValue = unknown> {
    /**
     * Regular expression to detect "accepted" symbols.
     * @default /\dap/gi
     */
    acceptRegex?: RegExp;
    /**
     * The components used for each slot.
     * Either a string to use a HTML element or a component.
     */
    components?: {
        OpenPickerIcon?: React.ElementType;
    };
    disabled?: boolean;
    /**
     * Disable mask on the keyboard, this should be used rarely. Consider passing proper mask for your format.
     * @default false
     */
    disableMaskedInput?: boolean;
    /**
     * Do not render open picker button (renders only text field with validation).
     * @default false
     */
    disableOpenPicker?: boolean;
    /**
     * Get aria-label text for control that opens picker dialog. Aria-label text must include selected date. @DateIOType
     * @default (value, utils) => `Choose date, selected date is ${utils.format(utils.date(value), 'fullDate')}`
     * @param {ParseableDate<TDateValue>} value The date from which we want to add an aria-text.
     * @param {MuiPickersAdapter<TDateValue>} utils The utils to manipulate the date.
     * @returns {string} The aria-text to render inside the dialog.
     */
    getOpenDialogAriaText?: (value: ParseableDate<TDateValue>, utils: MuiPickersAdapter<TDateValue>) => string;
    ignoreInvalidInputs?: boolean;
    /**
     * Props to pass to keyboard input adornment.
     */
    InputAdornmentProps?: Partial<InputAdornmentProps>;
    inputFormat: string;
    InputProps?: MuiTextFieldProps['InputProps'];
    /**
     * Pass a ref to the `input` element.
     */
    inputRef?: React.Ref<HTMLInputElement>;
    label?: MuiTextFieldProps['label'];
    /**
     * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
     */
    mask?: string;
    onBlur?: () => void;
    onChange: (date: TDateValue, keyboardInputValue?: string) => void;
    open: boolean;
    openPicker: () => void;
    /**
     * Props to pass to keyboard adornment button.
     */
    OpenPickerButtonProps?: Partial<IconButtonProps>;
    rawValue: TInputValue;
    readOnly?: boolean;
    /**
     * The `renderInput` prop allows you to customize the rendered input.
     * The `props` argument of this render prop contains props of [TextField](https://mui.com/api/text-field/#textfield-api) that you need to forward.
     * Pay specific attention to the `ref` and `inputProps` keys.
     * @example ```jsx
     * renderInput={props => <TextField {...props} />}
     * ````
     * @param {MuiTextFieldPropsType} props The props of the input.
     * @returns {React.ReactNode} The node to render as the input.
     */
    renderInput: (props: MuiTextFieldPropsType) => React.ReactElement;
    /**
     * Custom formatter to be passed into Rifm component.
     * @param {string} str The un-formatted string.
     * @returns {string} The formatted string.
     */
    rifmFormatter?: (str: string) => string;
    TextFieldProps?: Partial<MuiTextFieldProps>;
    validationError?: boolean;
}
export declare type ExportedDateInputProps<TInputValue, TDateValue> = Omit<DateInputProps<TInputValue, TDateValue>, 'inputFormat' | 'inputValue' | 'onBlur' | 'onChange' | 'open' | 'openPicker' | 'rawValue' | 'TextFieldProps' | 'validationError'>;
export declare const PureDateInput: React.ForwardRefExoticComponent<DateInputProps<unknown, unknown> & React.RefAttributes<HTMLDivElement>>;
