export var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
  var date = _ref.date,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      shouldDisableDate = _ref.shouldDisableDate,
      utils = _ref.utils;
  var today = utils.startOfDay(utils.date());

  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }

  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }

  var forward = date;
  var backward = date;

  if (utils.isBefore(date, minDate)) {
    forward = utils.date(minDate);
    backward = null;
  }

  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = utils.date(maxDate);
    }

    forward = null;
  }

  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }

    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }

    if (forward) {
      if (!shouldDisableDate(forward)) {
        return forward;
      }

      forward = utils.addDays(forward, 1);
    }

    if (backward) {
      if (!shouldDisableDate(backward)) {
        return backward;
      }

      backward = utils.addDays(backward, -1);
    }
  }

  return today;
};
export var parsePickerInputValue = function parsePickerInputValue(utils, value) {
  var parsedValue = utils.date(value);
  return utils.isValid(parsedValue) ? parsedValue : null;
};