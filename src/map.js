const each = require('./each');

const map = function(arr, func) {
  const result = [];
  each(arr, function(value, index) {
    result.push(func(value, index));
  });
  return result;
};

module.exports = map;
