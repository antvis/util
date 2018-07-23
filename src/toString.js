const isNil = require('./type/isNil');

function toString(value) {
  if (isNil(value)) return '';
  return value.toString();
}

module.exports = toString;
