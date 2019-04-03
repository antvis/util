import each from './each';
import isArray from './is-array';
import isFunction from './is-function';
/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
export default <T>(arr: T[], fn: ((v: T) => number) | string): T | undefined => {
  if (!isArray(arr)) {
    return undefined;
  }
  let max = arr[0];
  let maxData;
  if (isFunction(fn)) {
    maxData = fn(arr[0]);
  } else {
    maxData = arr[0][fn];
  }
  let data;
  each(arr, val => {
    if (isFunction(fn)) {
      data = fn(val);
    } else {
      data = val[fn];
    }
    if (data > maxData) {
      max = val;
      maxData = data;
    }
  });
  return max;
};
