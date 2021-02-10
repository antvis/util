import each from './each';
import isArray from './is-array';

/**
 * @param {Array} arr The array to iterate over.
 * @return {*} Returns the minimum value.
 * @example
 *
 * min([1, 2]);
 * // => 1
 *
 * min([]);
 * // => undefined
 *
 * const data = new Array(1250010).fill(1).map((d,idx) => idx);
 *
 * min(data);
 * // => 1250010
 * // Math.min(...data) will encounter "Maximum call stack size exceeded" error
 */
export default (arr: number[]): number | undefined => {
  if (!isArray(arr)) {
    return undefined;
  }
  let min = arr[0];
  each(arr, (val) => {
    if (val < min) {
      min = val;
    }
  });
  return min;
};
