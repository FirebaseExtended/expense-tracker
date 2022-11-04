import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["className"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Skeleton from '@mui/material/Skeleton';
import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/material';
import { DAY_SIZE, DAY_MARGIN } from '../internals/constants/dimensions';
import { getCalendarPickerSkeletonUtilityClass } from './calendarPickerSkeletonClasses';
import { jsx as _jsx } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var classes = ownerState.classes;
  var slots = {
    root: ['root'],
    week: ['week'],
    daySkeleton: ['daySkeleton']
  };
  return composeClasses(slots, getCalendarPickerSkeletonUtilityClass, classes);
};

var CalendarPickerSkeletonRoot = styled('div', {
  name: 'MuiCalendarPickerSkeleton',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})({
  alignSelf: 'start'
});
var CalendarPickerSkeletonWeek = styled('div', {
  name: 'MuiCalendarPickerSkeleton',
  slot: 'Week',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.week;
  }
})({
  margin: "".concat(DAY_MARGIN, "px 0"),
  display: 'flex',
  justifyContent: 'center'
});
var CalendarPickerSkeletonDay = styled(Skeleton, {
  name: 'MuiCalendarPickerSkeleton',
  slot: 'Day',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.daySkeleton;
  }
})(function (_ref) {
  var ownerState = _ref.ownerState;
  return _extends({
    margin: "0 ".concat(DAY_MARGIN, "px")
  }, ownerState.day === 0 && {
    visibility: 'hidden'
  });
});
CalendarPickerSkeletonDay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: PropTypes.shape({
    day: PropTypes.number.isRequired
  }).isRequired
};
var monthMap = [[0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0]];
/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/components/x/react-date-pickers/date-picker/)
 *
 * API:
 *
 * - [CalendarPickerSkeleton API](https://mui.com/api/calendar-picker-skeleton/)
 */

function CalendarPickerSkeleton(props) {
  var _useThemeProps = useThemeProps({
    props: props,
    name: 'MuiCalendarPickerSkeleton'
  }),
      className = _useThemeProps.className,
      other = _objectWithoutProperties(_useThemeProps, _excluded);

  var classes = useUtilityClasses(props);
  return /*#__PURE__*/_jsx(CalendarPickerSkeletonRoot, _extends({
    className: clsx(classes.root, className)
  }, other, {
    children: monthMap.map(function (week, index) {
      return /*#__PURE__*/_jsx(CalendarPickerSkeletonWeek, {
        className: classes.week,
        children: week.map(function (day, index2) {
          return /*#__PURE__*/_jsx(CalendarPickerSkeletonDay, {
            variant: "circular",
            width: DAY_SIZE,
            height: DAY_SIZE,
            className: classes.daySkeleton,
            ownerState: {
              day: day
            }
          }, index2);
        })
      }, index);
    })
  }));
}

process.env.NODE_ENV !== "production" ? CalendarPickerSkeleton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
export { CalendarPickerSkeleton };