const each = require('./each');
const isArrayLike = require('./type/isArrayLike');

const filter = function(arr, func) {
  if (!isArrayLike(arr)) {
    return arr;
  }
  const result = [];
  each(arr, function(value, index) {
    if (func(value, index)) {
      result.push(value);
    }
  });
  return result;
};

module.exports = filter;
