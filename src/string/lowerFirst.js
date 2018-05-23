const isString = require('../type/isString');
const lowerCase = require('./lowerCase');

const lowerFirst = function(value) {
  if (!isString(value)) {
    return value;
  }
  return lowerCase(value.charAt(0)) + value.substring(1);
};

module.exports = lowerFirst;
