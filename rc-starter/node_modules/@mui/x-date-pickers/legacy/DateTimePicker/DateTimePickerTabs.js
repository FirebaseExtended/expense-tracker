import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import { Time, DateRange } from '../internals/components/icons';
import { WrapperVariantContext } from '../internals/components/wrappers/WrapperVariantContext';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var viewToTab = function viewToTab(openView) {
  if (['day', 'month', 'year'].includes(openView)) {
    return 'date';
  }

  return 'time';
};

var tabToView = function tabToView(tab) {
  if (tab === 'date') {
    return 'day';
  }

  return 'hours';
};

var DateTimePickerTabsRoot = styled(Tabs)(function (_ref) {
  var ownerState = _ref.ownerState,
      theme = _ref.theme;
  return _extends({
    boxShadow: "0 -1px 0 0 inset ".concat(theme.palette.divider)
  }, ownerState.wrapperVariant === 'desktop' && _defineProperty({
    order: 1,
    boxShadow: "0 1px 0 0 inset ".concat(theme.palette.divider)
  }, "& .".concat(tabsClasses.indicator), {
    bottom: 'auto',
    top: 0
  }));
});
/**
 * @ignore - internal component.
 */

export var DateTimePickerTabs = function DateTimePickerTabs(props) {
  var _props$dateRangeIcon = props.dateRangeIcon,
      dateRangeIcon = _props$dateRangeIcon === void 0 ? /*#__PURE__*/_jsx(DateRange, {}) : _props$dateRangeIcon,
      onChange = props.onChange,
      _props$timeIcon = props.timeIcon,
      timeIcon = _props$timeIcon === void 0 ? /*#__PURE__*/_jsx(Time, {}) : _props$timeIcon,
      view = props.view;
  var wrapperVariant = React.useContext(WrapperVariantContext);

  var ownerState = _extends({}, props, {
    wrapperVariant: wrapperVariant
  });

  var handleChange = function handleChange(event, value) {
    onChange(tabToView(value));
  };

  return /*#__PURE__*/_jsxs(DateTimePickerTabsRoot, {
    ownerState: ownerState,
    variant: "fullWidth",
    value: viewToTab(view),
    onChange: handleChange,
    children: [/*#__PURE__*/_jsx(Tab, {
      value: "date",
      "aria-label": "pick date",
      icon: /*#__PURE__*/_jsx(React.Fragment, {
        children: dateRangeIcon
      })
    }), /*#__PURE__*/_jsx(Tab, {
      value: "time",
      "aria-label": "pick time",
      icon: /*#__PURE__*/_jsx(React.Fragment, {
        children: timeIcon
      })
    })]
  });
};