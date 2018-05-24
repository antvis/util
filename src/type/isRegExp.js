const isType = require('./isType');

const isRegExp = function(str) {
  return isType(str, 'RegExp');
};

module.exports = isRegExp;
