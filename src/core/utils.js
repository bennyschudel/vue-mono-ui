export { default as isPlainObject } from 'lodash/isPlainObject';

function clamp(value, min, max) {
  return max > min
    ? Math.max(Math.min(value, max), min)
    : Math.max(Math.min(value, min), max);
}

export { clamp };
