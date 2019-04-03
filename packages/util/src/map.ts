import each from './each';
import isArrayLike from './is-array-like';

const map = <T, G> (arr: T[], func: (v: T, idx: number) => G): G[] => {
  if (!isArrayLike(arr)) {
    // @ts-ignore
    return arr;
  }
  const result: G[] = [];

  each(arr, function(value: any, index: number) {
    result.push(func(value, index));
  });
  return result;
};

export default map;
