const isNumber = require('../type/isNumber');

const isEven = function(num) {
  return isNumber(num) && num % 2 === 0;
};

module.exports = isEven;
