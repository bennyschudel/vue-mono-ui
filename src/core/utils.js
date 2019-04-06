export { default as isPlainObject } from 'lodash/isPlainObject';
export { default as upperFirst } from 'lodash/upperFirst';
export { default as cloneDeep } from 'lodash/cloneDeep';
export { default as isNil } from 'lodash/isNil';

function clamp(value, min, max) {
  return max > min
    ? Math.max(Math.min(value, max), min)
    : Math.max(Math.min(value, min), max);
}

export { clamp };
