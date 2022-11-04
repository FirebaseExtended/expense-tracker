"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimePickerTabs = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Tab = _interopRequireDefault(require("@mui/material/Tab"));

var _Tabs = _interopRequireWildcard(require("@mui/material/Tabs"));

var _styles = require("@mui/material/styles");

var _icons = require("../internals/components/icons");

var _WrapperVariantContext = require("../internals/components/wrappers/WrapperVariantContext");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const viewToTab = openView => {
  if (['day', 'month', 'year'].includes(openView)) {
    return 'date';
  }

  return 'time';
};

const tabToView = tab => {
  if (tab === 'date') {
    return 'day';
  }

  return 'hours';
};

const DateTimePickerTabsRoot = (0, _styles.styled)(_Tabs.default)(({
  ownerState,
  theme
}) => (0, _extends2.default)({
  boxShadow: `0 -1px 0 0 inset ${theme.palette.divider}`
}, ownerState.wrapperVariant === 'desktop' && {
  order: 1,
  boxShadow: `0 1px 0 0 inset ${theme.palette.divider}`,
  [`& .${_Tabs.tabsClasses.indicator}`]: {
    bottom: 'auto',
    top: 0
  }
}));
/**
 * @ignore - internal component.
 */

const DateTimePickerTabs = props => {
  const {
    dateRangeIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.DateRange, {}),
    onChange,
    timeIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.Time, {}),
    view
  } = props;
  const wrapperVariant = React.useContext(_WrapperVariantContext.WrapperVariantContext);
  const ownerState = (0, _extends2.default)({}, props, {
    wrapperVariant
  });

  const handleChange = (event, value) => {
    onChange(tabToView(value));
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(DateTimePickerTabsRoot, {
    ownerState: ownerState,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
      value: "date",
      "aria-label": "pick date",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
        children: dateRangeIcon
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
      value: "time",
      "aria-label": "pick time",
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
        children: timeIcon
      })
    })]
  });
};

exports.DateTimePickerTabs = DateTimePickerTabs;