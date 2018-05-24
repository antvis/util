const isString = require('../type/isString');

const lowerCase = function(str) {
  if (!isString(str)) {
    return str;
  }
  return str.toString().toLowerCase();
};

module.exports = lowerCase;
