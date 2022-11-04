"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarPicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _MonthPicker = require("../MonthPicker/MonthPicker");

var _useCalendarState = require("./useCalendarState");

var _useUtils = require("../internals/hooks/useUtils");

var _PickersFadeTransitionGroup = require("./PickersFadeTransitionGroup");

var _DayPicker = require("./DayPicker");

var _useViews = require("../internals/hooks/useViews");

var _PickersCalendarHeader = require("./PickersCalendarHeader");

var _YearPicker = require("../YearPicker/YearPicker");

var _dateUtils = require("../internals/utils/date-utils");

var _PickerViewRoot = require("../internals/components/PickerViewRoot");

var _defaultReduceAnimations = require("../internals/utils/defaultReduceAnimations");

var _calendarPickerClasses = require("./calendarPickerClasses");

var _jsxRuntime = require("react/jsx-runtime");

const _excluded = ["autoFocus", "onViewChange", "date", "disableFuture", "disablePast", "defaultCalendarMonth", "loading", "maxDate", "minDate", "onChange", "onMonthChange", "reduceAnimations", "renderLoading", "shouldDisableDate", "shouldDisableYear", "view", "views", "openTo", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    viewTransitionContainer: ['viewTransitionContainer']
  };
  return (0, _material.unstable_composeClasses)(slots, _calendarPickerClasses.getCalendarPickerUtilityClass, classes);
};

const CalendarPickerRoot = (0, _styles.styled)(_PickerViewRoot.PickerViewRoot, {
  name: 'MuiCalendarPicker',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex',
  flexDirection: 'column'
});
const CalendarPickerViewTransitionContainer = (0, _styles.styled)(_PickersFadeTransitionGroup.PickersFadeTransitionGroup, {
  name: 'MuiCalendarPicker',
  slot: 'ViewTransitionContainer',
  overridesResolver: (props, styles) => styles.viewTransitionContainer
})({
  overflowY: 'auto'
});

/**
 *
 * Demos:
 *
 * - [Date Picker](https://mui.com/components/x/react-date-pickers/date-picker/)
 *
 * API:
 *
 * - [CalendarPicker API](https://mui.com/api/calendar-picker/)
 */
const CalendarPicker = /*#__PURE__*/React.forwardRef(function CalendarPicker(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiCalendarPicker'
  });
  const {
    autoFocus,
    onViewChange,
    date,
    disableFuture = false,
    disablePast = false,
    defaultCalendarMonth,
    loading = false,
    maxDate: maxDateProp,
    minDate: minDateProp,
    onChange,
    onMonthChange,
    reduceAnimations = _defaultReduceAnimations.defaultReduceAnimations,
    renderLoading = () => /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: "..."
    }),
    shouldDisableDate,
    shouldDisableYear,
    view,
    views = ['year', 'day'],
    openTo = 'day',
    className
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const utils = (0, _useUtils.useUtils)();
  const defaultDates = (0, _useUtils.useDefaultDates)();
  const minDate = minDateProp != null ? minDateProp : defaultDates.minDate;
  const maxDate = maxDateProp != null ? maxDateProp : defaultDates.maxDate;
  const {
    openView,
    setOpenView
  } = (0, _useViews.useViews)({
    view,
    views,
    openTo,
    onChange,
    onViewChange
  });
  const {
    calendarState,
    changeFocusedDay,
    changeMonth,
    isDateDisabled,
    handleChangeMonth,
    onMonthSwitchingAnimationEnd
  } = (0, _useCalendarState.useCalendarState)({
    date,
    defaultCalendarMonth,
    reduceAnimations,
    onMonthChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture
  });
  React.useEffect(() => {
    if (date && isDateDisabled(date)) {
      const closestEnabledDate = (0, _dateUtils.findClosestEnabledDate)({
        utils,
        date,
        minDate,
        maxDate,
        disablePast,
        disableFuture,
        shouldDisableDate: isDateDisabled
      });
      onChange(closestEnabledDate, 'partial');
    } // This call is too expensive to run it on each prop change.
    // So just ensure that we are not rendering disabled as selected on mount.

  }, []); // eslint-disable-line

  React.useEffect(() => {
    if (date) {
      changeMonth(date);
    }
  }, [date]); // eslint-disable-line

  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const monthPickerProps = {
    className,
    date,
    disabled: other.disabled,
    disablePast,
    disableFuture,
    onChange,
    minDate,
    maxDate,
    onMonthChange,
    readOnly: other.readOnly
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(CalendarPickerRoot, {
    ref: ref,
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PickersCalendarHeader.PickersCalendarHeader, (0, _extends2.default)({}, other, {
      views: views,
      openView: openView,
      currentMonth: calendarState.currentMonth,
      onViewChange: setOpenView,
      onMonthChange: (newMonth, direction) => handleChangeMonth({
        newMonth,
        direction
      }),
      minDate: minDate,
      maxDate: maxDate,
      disablePast: disablePast,
      disableFuture: disableFuture,
      reduceAnimations: reduceAnimations
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(CalendarPickerViewTransitionContainer, {
      reduceAnimations: reduceAnimations,
      className: classes.viewTransitionContainer,
      transKey: openView,
      ownerState: ownerState,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [openView === 'year' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_YearPicker.YearPicker, (0, _extends2.default)({}, other, {
          autoFocus: autoFocus,
          date: date,
          onChange: onChange,
          minDate: minDate,
          maxDate: maxDate,
          disableFuture: disableFuture,
          disablePast: disablePast,
          isDateDisabled: isDateDisabled,
          shouldDisableYear: shouldDisableYear,
          onFocusedDayChange: changeFocusedDay
        })), openView === 'month' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_MonthPicker.MonthPicker, (0, _extends2.default)({}, monthPickerProps)), openView === 'day' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_DayPicker.DayPicker, (0, _extends2.default)({}, other, calendarState, {
          autoFocus: autoFocus,
          onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
          onFocusedDayChange: changeFocusedDay,
          reduceAnimations: reduceAnimations,
          date: date,
          onChange: onChange,
          isDateDisabled: isDateDisabled,
          loading: loading,
          renderLoading: renderLoading
        }))]
      })
    })]
  });
});
exports.CalendarPicker = CalendarPicker;
process.env.NODE_ENV !== "production" ? CalendarPicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * If `true`, `onChange` is fired on click even if the same date is selected.
   * @default false
   */
  allowSameDateSelection: _propTypes.default.bool,
  autoFocus: _propTypes.default.bool,
  classes: _propTypes.default.object,
  className: _propTypes.default.string,

  /**
   * The components used for each slot.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes.default.object,

  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: _propTypes.default.object,
  date: _propTypes.default.any,

  /**
   * Default calendar month displayed when `value={null}`.
   */
  defaultCalendarMonth: _propTypes.default.any,

  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: _propTypes.default.bool,

  /**
   * @default false
   */
  disableFuture: _propTypes.default.bool,

  /**
   * If `true`, todays date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: _propTypes.default.bool,

  /**
   * @default false
   */
  disablePast: _propTypes.default.bool,

  /**
   * Get aria-label text for switching between views button.
   * @param {CalendarPickerView} currentView The view from which we want to get the button text.
   * @returns {string} The label of the view.
   */
  getViewSwitchingButtonText: _propTypes.default.func,

  /**
   * Left arrow icon aria-label text.
   */
  leftArrowButtonText: _propTypes.default.string,

  /**
   * If `true` renders `LoadingComponent` in calendar instead of calendar view.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: _propTypes.default.bool,

  /**
   * Max selectable date. @DateIOType
   */
  maxDate: _propTypes.default.any,

  /**
   * Min selectable date. @DateIOType
   */
  minDate: _propTypes.default.any,

  /**
   * Callback fired on date change
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * Callback firing on month change. @DateIOType
   * @param {TDate} month The new month.
   */
  onMonthChange: _propTypes.default.func,

  /**
   * Callback fired on view change.
   * @param {CalendarPickerView} view The new view.
   */
  onViewChange: _propTypes.default.func,

  /**
   * Callback firing on year change @DateIOType.
   * @param {TDate} year The new year.
   */
  onYearChange: _propTypes.default.func,

  /**
   * Initially open view.
   * @default 'day'
   */
  openTo: _propTypes.default.oneOf(['day', 'month', 'year']),

  /**
   * Make picker read only.
   * @default false
   */
  readOnly: _propTypes.default.bool,

  /**
   * Disable heavy animations.
   * @default typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent)
   */
  reduceAnimations: _propTypes.default.bool,

  /**
   * Custom renderer for day. Check the [PickersDay](https://mui.com/api/pickers-day/) component.
   * @param {TDate} day The day to render.
   * @param {Array<TDate | null>} selectedDates The dates currently selected.
   * @param {PickersDayProps<TDate>} pickersDayProps The props of the day to render.
   * @returns {JSX.Element} The element representing the day.
   */
  renderDay: _propTypes.default.func,

  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: _propTypes.default.func,

  /**
   * Right arrow icon aria-label text.
   */
  rightArrowButtonText: _propTypes.default.string,

  /**
   * Disable specific date. @DateIOType
   * @param {TDate} day The date to check.
   * @returns {boolean} If `true` the day will be disabled.
   */
  shouldDisableDate: _propTypes.default.func,

  /**
   * Disable specific years dynamically.
   * Works like `shouldDisableDate` but for year selection view @DateIOType.
   * @param {TDate} year The year to test.
   * @returns {boolean} Return `true` if the year should be disabled.
   */
  shouldDisableYear: _propTypes.default.func,

  /**
   * If `true`, days that have `outsideCurrentMonth={true}` are displayed.
   * @default false
   */
  showDaysOutsideCurrentMonth: _propTypes.default.bool,

  /**
   * Controlled open view.
   */
  view: _propTypes.default.oneOf(['day', 'month', 'year']),

  /**
   * Views for calendar picker.
   * @default ['year', 'day']
   */
  views: _propTypes.default.arrayOf(_propTypes.default.oneOf(['day', 'month', 'year']).isRequired)
} : void 0;