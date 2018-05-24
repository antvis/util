const isNumber = require('../type/isNumber');

const isInteger = Number.isInteger ? Number.isInteger : function(num) {
  return isNumber(num) && num % 1 === 0;
};

module.exports = isInteger;
