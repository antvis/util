const isType = require('./isType');

const checkType = {
  getType: require('./getType'),
  isArray: require('./isArray'),
  isArrayLike: require('./isArrayLike'),
  isBoolean: require('./isBoolean'),
  isFunction: require('./isFunction'),
  isNil: require('./isNil'),
  isNull: require('./isNull'),
  isNumber: require('./isNumber'),
  isObject: require('./isObject'),
  isObjectLike: require('./isObjectLike'),
  isPlainObject: require('./isPlainObject'),
  isPrototype: require('./isPrototype'),
  isType,
  isUndefined: require('./isUndefined'),
  isString: require('./isString'),
  isRegExp: require('./isRegExp')
};

[
  'Arguments',
  'Date',
  'Error'
].forEach(function(type) {
  checkType['is' + type] = function(value) {
    return isType(value, type);
  };
});

module.exports = checkType;
