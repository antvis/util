import isNil from './is-nil';

/**
 * @param {Array} arr The array to iterate over.
 * @return {*} Returns the maximum value.
 * @example
 *
 * max([1, 2]);
 * // => 2
 *
 * max([]);
 * // => undefined
 *
 * const data = new Array(1250010).fill(1).map((d,idx) => idx);
 *
 * max(data);
 * // => 1250010
 * // Math.max(...data) will encounter "Maximum call stack size exceeded" error
 */
export default function max(arr: number[]): number | undefined {
  const length = arr.length;
  if (length === 0) return undefined;
  let max = arr[0];

  const isNonNumber = (value: number) => isNil(value) || isNaN(value);
  if (isNonNumber(max)) return undefined;

  for (let i = 1; i < length; i++) {
    if (isNonNumber(arr[i])) return undefined;
    if (arr[i] > max) max = arr[i];
  }

  return max;
}
