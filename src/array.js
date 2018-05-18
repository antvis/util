const isArrayLike = require('./type/isArrayLike');

const arrayProto = Array.prototype;
const slice = arrayProto.slice;
const indexOf = arrayProto.indexOf;
const splice = arrayProto.splice;

function contains(arr, value) {
  return indexOf.call(arr, value) > -1;
}

function uniq(arr) {
  const resultArr = [];
  arr.forEach(item => {
    if (!contains(resultArr)) {
      resultArr.push(item);
    }
  });
  return resultArr;
}

function pull(arr) {
  /**
   * const arr = [ 'a', 'b', 'c', 'a', 'b', 'c' ]
   * pull(arr, 'a', 'c')
   * console.log(arr) // => [ 'b', 'b' ]
   */
  const values = slice.call(arguments, 1);
  for (let i = 0; i < values.length; i ++) {
    const value = values[i];
    let fromIndex = -1;
    while (fromIndex = indexOf.call(arr, value) > -1) {
      splice.call(arr, fromIndex, 1);
    }
  }
  return arr;
}

function pullAt(arr, indexes) {
  let length = arr ? indexes.length : 0;
  const last = length - 1;

  while (length--) {
    let previous;
    const index = indexes[length];
    if (length === last || index !== previous) {
      previous = index;
      splice.call(arr, index, 1);
    }
  }
  return arr;
}

function remove(arr, predicate) {
  /**
   * const arr = [1, 2, 3, 4]
   * const evens = remove(arr, n => n % 2 == 0)
   * console.log(arr) // => [1, 3]
   * console.log(evens) // => [2, 4]
   */
  const result = [];
  if (!isArrayLike(arr)) {
    return result;
  }
  let i = -1;
  const indexes = [];
  const length = arr.length;

  while (++i < length) {
    const value = arr[i];
    if (predicate(value, i, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  pullAt(arr, indexes);
  return result;
}

const arrayUtil = {
  contains,
  pull,
  pullAll: pull,
  pullAt,
  remove,
  uniq,
};

module.exports = arrayUtil;
