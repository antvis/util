const isString = require('../type/isString');

const upperCase = function(str) {
  if (!isString(str)) {
    return str;
  }
  return str.toString().toUpperCase();
};

module.exports = upperCase;
