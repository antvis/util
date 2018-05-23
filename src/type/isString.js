const isType = require('./isType');

const isString = function(str) {
  return isType(str, 'String');
};

module.exports = isString;
