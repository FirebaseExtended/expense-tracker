import * as React from 'react';
import { ButtonProps } from '@mui/material/Button';
import { TypographyProps } from '@mui/material/Typography';
import { ExtendMui } from '../models/helpers';
export interface PickersToolbarButtonProps extends ExtendMui<ButtonProps, 'value' | 'variant'> {
    align?: TypographyProps['align'];
    selected: boolean;
    typographyClassName?: string;
    value: React.ReactNode;
    variant: TypographyProps['variant'];
}
export declare const PickersToolbarButton: React.FunctionComponent<PickersToolbarButtonProps>;
