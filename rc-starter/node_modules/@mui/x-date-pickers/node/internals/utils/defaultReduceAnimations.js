"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultReduceAnimations = void 0;
const defaultReduceAnimations = typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent);
exports.defaultReduceAnimations = defaultReduceAnimations;