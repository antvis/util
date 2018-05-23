const isNumber = require('../type/isNumber');

const isPositive = function(num) {
  return isNumber(num) && num > 0;
};

module.exports = isPositive;
