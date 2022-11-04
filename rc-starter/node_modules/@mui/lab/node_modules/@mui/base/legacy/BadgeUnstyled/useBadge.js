import { usePreviousProps } from '@mui/utils';
export default function useBadge(props) {
  var badgeContentProp = props.badgeContent,
      _props$invisible = props.invisible,
      invisibleProp = _props$invisible === void 0 ? false : _props$invisible,
      _props$max = props.max,
      maxProp = _props$max === void 0 ? 99 : _props$max,
      _props$showZero = props.showZero,
      showZero = _props$showZero === void 0 ? false : _props$showZero;
  var prevProps = usePreviousProps({
    badgeContent: badgeContentProp,
    max: maxProp
  });
  var invisible = invisibleProp;

  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }

  var _ref = invisible ? prevProps : props,
      badgeContent = _ref.badgeContent,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? maxProp : _ref$max;

  var displayValue = badgeContent && Number(badgeContent) > max ? "".concat(max, "+") : badgeContent;
  return {
    badgeContent: badgeContent,
    invisible: invisible,
    max: max,
    displayValue: displayValue
  };
}