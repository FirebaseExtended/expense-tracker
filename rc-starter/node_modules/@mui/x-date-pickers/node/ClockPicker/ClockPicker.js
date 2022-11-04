"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClockPicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("@mui/utils");

var _styles = require("@mui/material/styles");

var _material = require("@mui/material");

var _Clock = require("./Clock");

var _utils2 = require("../internals/utils/utils");

var _useUtils = require("../internals/hooks/useUtils");

var _ClockNumbers = require("./ClockNumbers");

var _PickersArrowSwitcher = require("../internals/components/PickersArrowSwitcher");

var _timeUtils = require("../internals/utils/time-utils");

var _useViews = require("../internals/hooks/useViews");

var _dateHelpersHooks = require("../internals/hooks/date-helpers-hooks");

var _clockPickerClasses = require("./clockPickerClasses");

var _PickerViewRoot = require("../internals/components/PickerViewRoot");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    arrowSwitcher: ['arrowSwitcher']
  };
  return (0, _material.unstable_composeClasses)(slots, _clockPickerClasses.getClockPickerUtilityClass, classes);
};

const ClockPickerRoot = (0, _styles.styled)(_PickerViewRoot.PickerViewRoot, {
  name: 'MuiClockPicker',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex',
  flexDirection: 'column'
});
const ClockPickerArrowSwitcher = (0, _styles.styled)(_PickersArrowSwitcher.PickersArrowSwitcher, {
  name: 'MuiClockPicker',
  slot: 'ArrowSwitcher',
  overridesResolver: (props, styles) => styles.arrowSwitcher
})({
  position: 'absolute',
  right: 12,
  top: 15
});

const defaultGetClockLabelText = (view, time, adapter) => `Select ${view}. ${time === null ? 'No time selected' : `Selected time is ${adapter.format(time, 'fullTime')}`}`;

const defaultGetMinutesClockNumberText = minutes => `${minutes} minutes`;

const defaultGetHoursClockNumberText = hours => `${hours} hours`;

const defaultGetSecondsClockNumberText = seconds => `${seconds} seconds`;

/**
 *
 * API:
 *
 * - [ClockPicker API](https://mui.com/api/clock-picker/)
 */
const ClockPicker = /*#__PURE__*/React.forwardRef(function ClockPicker(inProps, ref) {
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiClockPicker'
  });
  const {
    ampm = false,
    ampmInClock = false,
    autoFocus,
    components,
    componentsProps,
    date,
    disableIgnoringDatePartForTimeValidation = false,
    getClockLabelText = defaultGetClockLabelText,
    getHoursClockNumberText = defaultGetHoursClockNumberText,
    getMinutesClockNumberText = defaultGetMinutesClockNumberText,
    getSecondsClockNumberText = defaultGetSecondsClockNumberText,
    leftArrowButtonText = 'open previous view',
    maxTime,
    minTime,
    minutesStep = 1,
    rightArrowButtonText = 'open next view',
    shouldDisableTime,
    showViewSwitcher,
    onChange,
    view,
    views = ['hours', 'minutes'],
    openTo,
    onViewChange,
    className
  } = props;
  const {
    openView,
    setOpenView,
    nextView,
    previousView,
    handleChangeAndOpenNext
  } = (0, _useViews.useViews)({
    view,
    views,
    openTo,
    onViewChange,
    onChange
  });
  const now = (0, _useUtils.useNow)();
  const utils = (0, _useUtils.useUtils)();
  const midnight = utils.setSeconds(utils.setMinutes(utils.setHours(now, 0), 0), 0);
  const dateOrMidnight = date || midnight;
  const {
    meridiemMode,
    handleMeridiemChange
  } = (0, _dateHelpersHooks.useMeridiemMode)(dateOrMidnight, ampm, handleChangeAndOpenNext);
  const isTimeDisabled = React.useCallback((rawValue, viewType) => {
    if (date === null) {
      return false;
    }

    const validateTimeValue = getRequestedTimePoint => {
      const isAfterComparingFn = (0, _timeUtils.createIsAfterIgnoreDatePart)(disableIgnoringDatePartForTimeValidation, utils);
      return Boolean(minTime && isAfterComparingFn(minTime, getRequestedTimePoint('end')) || maxTime && isAfterComparingFn(getRequestedTimePoint('start'), maxTime) || shouldDisableTime && shouldDisableTime(rawValue, viewType));
    };

    switch (viewType) {
      case 'hours':
        {
          const hoursWithMeridiem = (0, _timeUtils.convertValueToMeridiem)(rawValue, meridiemMode, ampm);
          return validateTimeValue(when => (0, _utils2.pipe)(currentDate => utils.setHours(currentDate, hoursWithMeridiem), dateWithHours => utils.setMinutes(dateWithHours, when === 'start' ? 0 : 59), dateWithMinutes => utils.setSeconds(dateWithMinutes, when === 'start' ? 0 : 59))(date));
        }

      case 'minutes':
        return validateTimeValue(when => (0, _utils2.pipe)(currentDate => utils.setMinutes(currentDate, rawValue), dateWithMinutes => utils.setSeconds(dateWithMinutes, when === 'start' ? 0 : 59))(date));

      case 'seconds':
        return validateTimeValue(() => utils.setSeconds(date, rawValue));

      default:
        throw new Error('not supported');
    }
  }, [ampm, date, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, shouldDisableTime, utils]);
  const selectedId = (0, _utils.unstable_useId)();
  const viewProps = React.useMemo(() => {
    switch (openView) {
      case 'hours':
        {
          const handleHoursChange = (value, isFinish) => {
            const valueWithMeridiem = (0, _timeUtils.convertValueToMeridiem)(value, meridiemMode, ampm);
            handleChangeAndOpenNext(utils.setHours(dateOrMidnight, valueWithMeridiem), isFinish);
          };

          return {
            onChange: handleHoursChange,
            value: utils.getHours(dateOrMidnight),
            children: (0, _ClockNumbers.getHourNumbers)({
              date,
              utils,
              ampm,
              onChange: handleHoursChange,
              getClockNumberText: getHoursClockNumberText,
              isDisabled: value => isTimeDisabled(value, 'hours'),
              selectedId
            })
          };
        }

      case 'minutes':
        {
          const minutesValue = utils.getMinutes(dateOrMidnight);

          const handleMinutesChange = (value, isFinish) => {
            handleChangeAndOpenNext(utils.setMinutes(dateOrMidnight, value), isFinish);
          };

          return {
            value: minutesValue,
            onChange: handleMinutesChange,
            children: (0, _ClockNumbers.getMinutesNumbers)({
              utils,
              value: minutesValue,
              onChange: handleMinutesChange,
              getClockNumberText: getMinutesClockNumberText,
              isDisabled: value => isTimeDisabled(value, 'minutes'),
              selectedId
            })
          };
        }

      case 'seconds':
        {
          const secondsValue = utils.getSeconds(dateOrMidnight);

          const handleSecondsChange = (value, isFinish) => {
            handleChangeAndOpenNext(utils.setSeconds(dateOrMidnight, value), isFinish);
          };

          return {
            value: secondsValue,
            onChange: handleSecondsChange,
            children: (0, _ClockNumbers.getMinutesNumbers)({
              utils,
              value: secondsValue,
              onChange: handleSecondsChange,
              getClockNumberText: getSecondsClockNumberText,
              isDisabled: value => isTimeDisabled(value, 'seconds'),
              selectedId
            })
          };
        }

      default:
        throw new Error('You must provide the type for ClockView');
    }
  }, [openView, utils, date, ampm, getHoursClockNumberText, getMinutesClockNumberText, getSecondsClockNumberText, meridiemMode, handleChangeAndOpenNext, dateOrMidnight, isTimeDisabled, selectedId]);
  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ClockPickerRoot, {
    ref: ref,
    className: (0, _clsx.default)(classes.root, className),
    ownerState: ownerState,
    children: [showViewSwitcher && /*#__PURE__*/(0, _jsxRuntime.jsx)(ClockPickerArrowSwitcher, {
      className: classes.arrowSwitcher,
      leftArrowButtonText: leftArrowButtonText,
      rightArrowButtonText: rightArrowButtonText,
      components: components,
      componentsProps: componentsProps,
      onLeftClick: () => setOpenView(previousView),
      onRightClick: () => setOpenView(nextView),
      isLeftDisabled: !previousView,
      isRightDisabled: !nextView,
      ownerState: ownerState
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Clock.Clock, (0, _extends2.default)({
      autoFocus: autoFocus,
      date: date,
      ampmInClock: ampmInClock,
      type: openView,
      ampm: ampm,
      getClockLabelText: getClockLabelText,
      minutesStep: minutesStep,
      isTimeDisabled: isTimeDisabled,
      meridiemMode: meridiemMode,
      handleMeridiemChange: handleMeridiemChange,
      selectedId: selectedId
    }, viewProps))]
  });
});
exports.ClockPicker = ClockPicker;
process.env.NODE_ENV !== "production" ? ClockPicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------

  /**
   * 12h/24h view for hour selection clock.
   * @default false
   */
  ampm: _propTypes.default.bool,

  /**
   * Display ampm controls under the clock (instead of in the toolbar).
   * @default false
   */
  ampmInClock: _propTypes.default.bool,

  /**
   * Set to `true` if focus should be moved to clock picker.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes.default.object,
  className: _propTypes.default.string,

  /**
   * The components used for each slot.
   * Either a string to use a HTML element or a component.
   */
  components: _propTypes.default.object,

  /**
   * The props used for each slot inside.
   */
  componentsProps: _propTypes.default.object,

  /**
   * Selected date @DateIOType.
   */
  date: _propTypes.default.any,

  /**
   * Do not ignore date part when validating min/max time.
   * @default false
   */
  disableIgnoringDatePartForTimeValidation: _propTypes.default.bool,

  /**
   * Accessible text that helps user to understand which time and view is selected.
   * @param {ClockPickerView} view The current view rendered.
   * @param {TDate | null} time The current time.
   * @param {MuiPickersAdapter<TDate>} adapter The current date adapter.
   * @returns {string} The clock label.
   * @default <TDate extends any>(
   *   view: ClockView,
   *   time: TDate | null,
   *   adapter: MuiPickersAdapter<TDate>,
   * ) =>
   *   `Select ${view}. ${
   *     time === null ? 'No time selected' : `Selected time is ${adapter.format(time, 'fullTime')}`
   *   }`
   */
  getClockLabelText: _propTypes.default.func,

  /**
   * Get clock number aria-text for hours.
   * @param {string} hours The hours to format.
   * @returns {string} the formatted hours text.
   * @default (hours: string) => `${hours} hours`
   */
  getHoursClockNumberText: _propTypes.default.func,

  /**
   * Get clock number aria-text for minutes.
   * @param {string} minutes The minutes to format.
   * @returns {string} the formatted minutes text.
   * @default (minutes: string) => `${minutes} minutes`
   */
  getMinutesClockNumberText: _propTypes.default.func,

  /**
   * Get clock number aria-text for seconds.
   * @param {string} seconds The seconds to format.
   * @returns {string} the formatted seconds text.
   * @default (seconds: string) => `${seconds} seconds`
   */
  getSecondsClockNumberText: _propTypes.default.func,

  /**
   * Left arrow icon aria-label text.
   * @default 'open previous view'
   */
  leftArrowButtonText: _propTypes.default.string,

  /**
   * Max time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  maxTime: _propTypes.default.any,

  /**
   * Min time acceptable time.
   * For input validation date part of passed object will be ignored if `disableIgnoringDatePartForTimeValidation` not specified.
   */
  minTime: _propTypes.default.any,

  /**
   * Step over minutes.
   * @default 1
   */
  minutesStep: _propTypes.default.number,

  /**
   * On change callback @DateIOType.
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * Callback fired on view change.
   * @param {ClockPickerView} view The new view.
   */
  onViewChange: _propTypes.default.func,

  /**
   * Initially open view.
   * @default 'hours'
   */
  openTo: _propTypes.default.oneOf(['hours', 'minutes', 'seconds']),

  /**
   * Right arrow icon aria-label text.
   * @default 'open next view'
   */
  rightArrowButtonText: _propTypes.default.string,

  /**
   * Dynamically check if time is disabled or not.
   * If returns `false` appropriate time point will ot be acceptable.
   * @param {number} timeValue The value to check.
   * @param {ClockPickerView} clockType The clock type of the timeValue.
   * @returns {boolean} Returns `true` if the time should be disabled
   */
  shouldDisableTime: _propTypes.default.func,
  showViewSwitcher: _propTypes.default.bool,

  /**
   * Controlled open view.
   */
  view: _propTypes.default.oneOf(['hours', 'minutes', 'seconds']),

  /**
   * Views for calendar picker.
   * @default ['hours', 'minutes']
   */
  views: _propTypes.default.arrayOf(_propTypes.default.oneOf(['hours', 'minutes', 'seconds']).isRequired)
} : void 0;