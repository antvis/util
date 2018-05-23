const isString = require('../type/isString');
const upperCase = require('./upperCase');

const upperFirst = function(value) {
  if (!isString(value)) {
    return value;
  }
  return upperCase(value.charAt(0)) + value.substring(1);
};

module.exports = upperFirst;
