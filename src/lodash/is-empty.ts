import isNil from './is-nil';
import isArrayLike from './is-array-like';
import getType from './get-type';
import isPrototype from './is-prototype';

const hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(value: any): boolean {
  /**
   * isEmpty(null) => true
   * isEmpty() => true
   * isEmpty(true) => true
   * isEmpty(1) => true
   * isEmpty([1, 2, 3]) => false
   * isEmpty('abc') => false
   * isEmpty({ a: 1 }) => false
   */
  if (isNil(value)) {
    return true;
  }
  if (isArrayLike(value)) {
    return !value.length;
  }
  const type = getType(value);
  if (type === 'Map' || type === 'Set') {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !Object.keys(value).length;
  }
  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

export default isEmpty;
