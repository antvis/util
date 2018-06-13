const isType = require('./isType');

const isDate = function(value) {
  return isType(value, 'Date');
};

module.exports = isDate;
