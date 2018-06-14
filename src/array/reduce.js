const isArray = require('../type/isArray');
const isPlainObject = require('../type/isPlainObject');
const each = require('../each');

const reduce = function(arr, fn, init) {
  if (!isArray(arr) && !isPlainObject(arr)) {
    return arr;
  }
  let result = init;
  each(arr, (data, i) => {
    result = fn(result, data, i);
  });
  return result;
};

module.exports = reduce;
