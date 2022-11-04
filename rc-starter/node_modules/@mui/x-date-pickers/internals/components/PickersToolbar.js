import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import clsx from 'clsx';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { generateUtilityClasses } from '@mui/material';
import { Pen, Calendar, Clock } from './icons';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const classes = generateUtilityClasses('PrivatePickersToolbar', ['root', 'dateTitleContainer']);
const PickersToolbarRoot = styled('div')(({
  theme,
  ownerState
}) => _extends({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 3)
}, ownerState.isLandscape && {
  height: 'auto',
  maxWidth: 160,
  padding: 16,
  justifyContent: 'flex-start',
  flexWrap: 'wrap'
}));
const PickersToolbarGrid = styled(Grid)({
  flex: 1
});

const getViewTypeIcon = viewType => viewType === 'clock' ? /*#__PURE__*/_jsx(Clock, {
  color: "inherit"
}) : /*#__PURE__*/_jsx(Calendar, {
  color: "inherit"
});

function defaultGetKeyboardInputSwitchingButtonText(isKeyboardInputOpen, viewType) {
  return isKeyboardInputOpen ? `text input view is open, go to ${viewType} view` : `${viewType} view is open, go to text input view`;
}

export const PickersToolbar = /*#__PURE__*/React.forwardRef(function PickersToolbar(props, ref) {
  const {
    children,
    className,
    getMobileKeyboardInputViewButtonText = defaultGetKeyboardInputSwitchingButtonText,
    isLandscape,
    isMobileKeyboardViewOpen,
    landscapeDirection = 'column',
    penIconClassName,
    toggleMobileKeyboardView,
    toolbarTitle,
    viewType = 'calendar'
  } = props;
  const ownerState = props;
  return /*#__PURE__*/_jsxs(PickersToolbarRoot, {
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    children: [/*#__PURE__*/_jsx(Typography, {
      color: "text.secondary",
      variant: "overline",
      children: toolbarTitle
    }), /*#__PURE__*/_jsxs(PickersToolbarGrid, {
      container: true,
      justifyContent: "space-between",
      className: classes.dateTitleContainer,
      direction: isLandscape ? landscapeDirection : 'row',
      alignItems: isLandscape ? 'flex-start' : 'flex-end',
      children: [children, /*#__PURE__*/_jsx(IconButton, {
        onClick: toggleMobileKeyboardView,
        className: penIconClassName,
        color: "inherit",
        "aria-label": getMobileKeyboardInputViewButtonText(isMobileKeyboardViewOpen, viewType),
        children: isMobileKeyboardViewOpen ? getViewTypeIcon(viewType) : /*#__PURE__*/_jsx(Pen, {
          color: "inherit"
        })
      })]
    })]
  });
});