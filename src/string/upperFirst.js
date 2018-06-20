const isString = require('../type/isString');

const upperFirst = function(value) {
  if (!isString(value)) {
    return value;
  }
  return value.charAt(0).toUpperCase() + value.substring(1);
};

module.exports = upperFirst;
