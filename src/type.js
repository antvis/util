const toString = {}.toString;
const objectProto = Object.prototype;
const isType = (value, type) => toString.call(value) === '[object ' + type + ']';

function isNull(value) {
  return value === null;
}
function isUndefined(value) {
  return value === undefined;
}
function isObject(value) {
    /**
     * isObject({}) => true
     * isObject([1, 2, 3]) => true
     * isObject(Function) => true
     * isObject(null) => false
     */
    const type = typeof value;
    return value !== null && type === 'object' || type === 'function';
}
function isObjectLike(value) {
    /**
     * isObjectLike({}) => true
     * isObjectLike([1, 2, 3]) => true
     * isObjectLike(Function) => false
     * isObjectLike(null) => false
     */
    return typeof value === 'object' && value !== null;
}

const checkType = {
  getType(value) {
    return toString.call(value).replace(/^\[object /, '').replace(/\]$/, '');
  },
  isArray: Array.isArray ? Array.isArray : value => isType(value, 'Array'),
  isArrayLike(value) {
    /**
     * isArrayLike([1, 2, 3]) => true
     * isArrayLike(document.body.children) => true
     * isArrayLike('abc') => true
     * isArrayLike(Function) => false
     */
    return value !== null && typeof value !== 'function' && isFinite(value.length);
  }
  // isFinite,
  isNil(value) {
    /**
     * isNil(null) => true
     * isNil() => true
     */
    return isUndefined(value) || isNull(value);
  },
  isNull,
  isType,
  isObject,
  isObjectLike,
  isPlainObject(value) {
    /**
     * isObjectLike(new Foo) => false
     * isObjectLike([1, 2, 3]) => false
     * isObjectLike({ x: 0, y: 0 }) => true
     * isObjectLike(Object.create(null)) => true
     */
    if (!isObjectLike(value) || !isType(value, 'Object')) {
      return false;
    }
    if (Object.getPrototypeOf(value) === null) {
      return true;
    }
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
  },
  isPrototype(value) {
    const Ctor = value && value.constructor;
    const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto;
    return value === proto;
  },
  isUndefined,
};

// common types
[
  'Arguments',
  'Boolean',
  'Date',
  'Error',
  'Function',
  'Number',
  'RegExp',
  'String'
].forEach(function(type){
  checkType['is' + type] = function(value) {
    return isType(value, type);
  };
});

module.exports = checkType;
