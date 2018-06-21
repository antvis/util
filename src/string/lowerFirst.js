const isString = require('../type/isString');

const lowerFirst = function(value) {
  if (!isString(value)) {
    return value;
  }
  return value.charAt(0).toLowerCase() + value.substring(1);
};

module.exports = lowerFirst;
