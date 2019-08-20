import each from './each';
import isArrayLike from './is-array-like';

const filter = function <T>(arr: T[], func: (v: T, idx: number) => boolean): T[] {
  if (!isArrayLike(arr)) {
    return arr;
  }
  const result: T[] = [];
  each(arr, function(value, index) {
    if (func(value, index)) {
      result.push(value);
    }
  });
  return result;
};

export default filter;
