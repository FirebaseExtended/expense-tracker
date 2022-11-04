import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
const _excluded = ["className"];
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Skeleton from '@mui/material/Skeleton';
import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/material';
import { DAY_SIZE, DAY_MARGIN } from '../internals/constants/dimensions';
import { getCalendarPickerSkeletonUtilityClass } from './calendarPickerSkeletonClasses';
import { jsx as _jsx } from "react/jsx-runtime";

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    week: ['week'],
    daySkeleton: ['daySkeleton']
  };
  return composeClasses(slots, getCalendarPickerSkeletonUtilityClass, classes);
};

const CalendarPickerSkeletonRoot = styled('div', {
  name: 'MuiCalendarPickerSkeleton',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  alignSelf: 'start'
});
const CalendarPickerSkeletonWeek = styled('div', {
  name: 'MuiCalendarPickerSkeleton',
  slot: 'Week',
  overridesResolver: (props, styles) => styles.week
})({
  margin: `${DAY_MARGIN}px 0`,
  display: 'flex',
  justifyContent: 'center'
});
const CalendarPickerSkeletonDay = styled(Skeleton, {
  name: 'MuiCalendarPickerSkeleton',
  slot: 'Day',
  overridesResolver: (props, styles) => styles.daySkeleton
})(({
  ownerState
}) => _extends({
  margin: `0 ${DAY_MARGIN}px`
}, ownerState.day === 0 && {
  visibility: 'hidden'
}));
CalendarPickerSkeletonDay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: PropTypes.shape({
    day: PropTypes.number.isRequired
  }).isRequired
};
const monthMap = [[0, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0]];
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
  const _useThemeProps = useThemeProps({
    props,
    name: 'MuiCalendarPickerSkeleton'
  }),
        {
    className
  } = _useThemeProps,
        other = _objectWithoutPropertiesLoose(_useThemeProps, _excluded);

  const classes = useUtilityClasses(props);
  return /*#__PURE__*/_jsx(CalendarPickerSkeletonRoot, _extends({
    className: clsx(classes.root, className)
  }, other, {
    children: monthMap.map((week, index) => /*#__PURE__*/_jsx(CalendarPickerSkeletonWeek, {
      className: classes.week,
      children: week.map((day, index2) => /*#__PURE__*/_jsx(CalendarPickerSkeletonDay, {
        variant: "circular",
        width: DAY_SIZE,
        height: DAY_SIZE,
        className: classes.daySkeleton,
        ownerState: {
          day
        }
      }, index2))
    }, index))
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