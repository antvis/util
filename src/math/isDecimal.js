const isNumber = require('../type/isNumber');

const isDecimal = function(num) {
  return isNumber(num) && num % 1 !== 0;
};

module.exports = isDecimal;
