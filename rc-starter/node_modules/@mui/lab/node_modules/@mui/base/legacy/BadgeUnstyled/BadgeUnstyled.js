import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import composeClasses from '../composeClasses';
import appendOwnerState from '../utils/appendOwnerState';
import useBadge from './useBadge';
import { getBadgeUtilityClass } from './badgeUnstyledClasses';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var useUtilityClasses = function useUtilityClasses(ownerState) {
  var invisible = ownerState.invisible;
  var slots = {
    root: ['root'],
    badge: ['badge', invisible && 'invisible']
  };
  return composeClasses(slots, getBadgeUtilityClass, undefined);
};

var BadgeUnstyled = /*#__PURE__*/React.forwardRef(function BadgeUnstyled(props, ref) {
  var badgeContentProp = props.badgeContent,
      component = props.component,
      children = props.children,
      className = props.className,
      _props$components = props.components,
      components = _props$components === void 0 ? {} : _props$components,
      _props$componentsProp = props.componentsProps,
      componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
      invisibleProp = props.invisible,
      _props$max = props.max,
      maxProp = _props$max === void 0 ? 99 : _props$max,
      _props$showZero = props.showZero,
      showZero = _props$showZero === void 0 ? false : _props$showZero,
      other = _objectWithoutProperties(props, ["badgeContent", "component", "children", "className", "components", "componentsProps", "invisible", "max", "showZero"]);

  var _useBadge = useBadge(_extends({}, props, {
    max: maxProp
  })),
      badgeContent = _useBadge.badgeContent,
      max = _useBadge.max,
      displayValue = _useBadge.displayValue,
      invisible = _useBadge.invisible;

  var ownerState = _extends({}, props, {
    badgeContent: badgeContent,
    invisible: invisible,
    max: max,
    showZero: showZero
  });

  var classes = useUtilityClasses(ownerState);
  var Root = component || components.Root || 'span';
  var rootProps = appendOwnerState(Root, _extends({}, other, componentsProps.root), ownerState);
  var Badge = components.Badge || 'span';
  var badgeProps = appendOwnerState(Badge, componentsProps.badge, ownerState);
  return /*#__PURE__*/_jsxs(Root, _extends({}, rootProps, {
    ref: ref
  }, other, {
    className: clsx(classes.root, rootProps.className, className),
    children: [children, /*#__PURE__*/_jsx(Badge, _extends({}, badgeProps, {
      className: clsx(classes.badge, badgeProps.className),
      children: displayValue
    }))]
  }));
});
process.env.NODE_ENV !== "production" ? BadgeUnstyled.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content rendered within the badge.
   */
  badgeContent: PropTypes.node,

  /**
   * The badge will be added relative to this node.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Badge: PropTypes.elementType,
    Root: PropTypes.elementType
  }),

  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    badge: PropTypes.object,
    root: PropTypes.object
  }),

  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: PropTypes.bool,

  /**
   * Max count to show.
   * @default 99
   */
  max: PropTypes.number,

  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: PropTypes.bool
} : void 0;
export default BadgeUnstyled;