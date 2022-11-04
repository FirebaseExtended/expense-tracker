"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSecondsInDay = exports.getMeridiem = exports.createIsAfterIgnoreDatePart = exports.convertValueToMeridiem = exports.convertToMeridiem = void 0;

const getMeridiem = (date, utils) => {
  if (!date) {
    return null;
  }

  return utils.getHours(date) >= 12 ? 'pm' : 'am';
};

exports.getMeridiem = getMeridiem;

const convertValueToMeridiem = (value, meridiem, ampm) => {
  if (ampm) {
    const currentMeridiem = value >= 12 ? 'pm' : 'am';

    if (currentMeridiem !== meridiem) {
      return meridiem === 'am' ? value - 12 : value + 12;
    }
  }

  return value;
};

exports.convertValueToMeridiem = convertValueToMeridiem;

const convertToMeridiem = (time, meridiem, ampm, utils) => {
  const newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
  return utils.setHours(time, newHoursAmount);
};

exports.convertToMeridiem = convertToMeridiem;

const getSecondsInDay = (date, utils) => {
  return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
};

exports.getSecondsInDay = getSecondsInDay;

const createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, utils) => (dateLeft, dateRight) => {
  if (disableIgnoringDatePartForTimeValidation) {
    return utils.isAfter(dateLeft, dateRight);
  }

  return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
};

exports.createIsAfterIgnoreDatePart = createIsAfterIgnoreDatePart;