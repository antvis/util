
const checkType = require('./type');

function toArray(value) {
  return checkType.isArrayLike(value) ? Array.prototype.slice.call(value) : [];
}

module.exports = toArray;
