import each from './each';
import isArray from './is-array';
import isPlainObject from './is-plain-object';

const reduce = function<T, G>(arr: G[], fn: (result: T, data: G, idx: number) => T, init: T) {
  if (!isArray(arr) && !isPlainObject(arr)) {
    return arr;
  }
  let result = init;
  each(arr, (data, i) => {
    result = fn(result, data, i);
  });
  return result;
};

export default reduce;
