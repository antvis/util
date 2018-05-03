const checkType = require('./type');
const hasOwnProperty = Object.prototype.hasOwnProperty

function isEmpty(value) {
  /**
   * isEmpty(null) => true
   * isEmpty() => true
   * isEmpty(true) => true
   * isEmpty(1) => true
   * isEmpty([1, 2, 3]) => false
   * isEmpty('abc') => false
   * isEmpty({ a: 1 }) => false
   */
  if (checkType.isNil(value)) {
    return true;
  }
  if (checkType.isArrayLike(value)) {
    return !value.length;
  }
  const type = checkType.getType(value);
  if (type === 'Map' || type === 'Set') {
    return !value.size;
  }
  if (checkType.isPrototype(value)) {
    return !Object.keys(value).length;
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;
