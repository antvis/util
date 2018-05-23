const isNumber = require('../type/isNumber');

const isNagative = function(num) {
  return isNumber(num) && num < 0;
};

module.exports = isNagative;
