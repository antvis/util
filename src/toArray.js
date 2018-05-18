
const isArrayLike = require('./type/isArray');

function toArray(value) {
  return isArrayLike(value) ? Array.prototype.slice.call(value) : [];
}

module.exports = toArray;
