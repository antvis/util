const toString = require('../toString');

const lowerCase = function(str) {
  return toString(str).toLowerCase();
};

module.exports = lowerCase;
