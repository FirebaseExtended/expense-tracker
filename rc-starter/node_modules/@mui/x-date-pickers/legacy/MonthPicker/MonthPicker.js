import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "date", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "onMonthChange", "readOnly"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/material';
import { PickersMonth } from './PickersMonth';
import { useUtils, useNow } from '../internals/hooks/useUtils';
import { getMonthPickerUtilityClass } from './monthPickerClasses';
import { jsx as _jsx } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes;
  var slots = {
    root: ['root']
  };
  return composeClasses(slots, getMonthPickerUtilityClass, classes);
};

var MonthPickerRoot = styled('div', {
  name: 'MuiMonthPicker',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})({
  width: 310,
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'stretch',
  margin: '0 4px'
});
export var MonthPicker = /*#__PURE__*/React.forwardRef(function MonthPicker(inProps, ref) {
  var props = useThemeProps({
    props: inProps,
    name: 'MuiMonthPicker'
  });

  var className = props.className,
      date = props.date,
      disabled = props.disabled,
      disableFuture = props.disableFuture,
      disablePast = props.disablePast,
      maxDate = props.maxDate,
      minDate = props.minDate,
      onChange = props.onChange,
      onMonthChange = props.onMonthChange,
      readOnly = props.readOnly,
      other = _objectWithoutProperties(props, _excluded);

  var ownerState = props;
  var classes = useUtilityClasses(ownerState);
  var utils = useUtils();
  var now = useNow();
  var currentMonth = utils.getMonth(date || now);

  var shouldDisableMonth = function shouldDisableMonth(month) {
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
    var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
    return isBeforeFirstEnabled || isAfterLastEnabled;
  };

  var onMonthSelect = function onMonthSelect(month) {
    if (readOnly) {
      return;
    }

    var newDate = utils.setMonth(date || now, month);
    onChange(newDate, 'finish');

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  };

  return /*#__PURE__*/_jsx(MonthPickerRoot, _extends({
    ref: ref,
    className: clsx(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: utils.getMonthArray(date || now).map(function (month) {
      var monthNumber = utils.getMonth(month);
      var monthText = utils.format(month, 'monthShort');
      return /*#__PURE__*/_jsx(PickersMonth, {
        value: monthNumber,
        selected: monthNumber === currentMonth,
        onSelect: onMonthSelect,
        disabled: disabled || shouldDisableMonth(month),
        children: monthText
      }, monthText);
    })
  }));
});
process.env.NODE_ENV !== "production" ? MonthPicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * className applied to the root element.
   */
  className: PropTypes.string,

  /**
   * Date value for the MonthPicker
   */
  date: PropTypes.any,

  /**
   * If `true` picker is disabled
   */
  disabled: PropTypes.bool,

  /**
   * If `true` future days are disabled.
   */
  disableFuture: PropTypes.bool,

  /**
   * If `true` past days are disabled.
   */
  disablePast: PropTypes.bool,

  /**
   * Maximal selectable date.
   */
  maxDate: PropTypes.any.isRequired,

  /**
   * Minimal selectable date.
   */
  minDate: PropTypes.any.isRequired,

  /**
   * Callback fired on date change.
   */
  onChange: PropTypes.func.isRequired,
  onMonthChange: PropTypes.func,

  /**
   * If `true` picker is readonly
   */
  readOnly: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;