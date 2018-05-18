const checkType =  {
    getType: require('./getType'),
    isArray: require('./isArray'),
    isArrayLike: require('./isArrayLike'),
    isBoolean: require('./isBoolean'),
    isEmpty: require('./isEmpty'),
    isFunction: require('./isFunction'),
    isNil: require('./isNil'),
    isNull: require('./isNull'),
    isNumber: require('./isNumber'),
    isObject: require('./isObject'),
    isObjectLike: require('./isObjectLike'),
    isPlainObject: require('./isPlainObject'),
    isPrototype: require('./isPrototype'),
    isType: require('./isType'),
    isUndefined: require('./isUndefined')
};

[
    'Arguments',
    'Date',
    'Error',
    'RegExp',
    'String'
].forEach(function(type){
    checkType['is' + type] = function(value) {
        return this.isType(value, type);
    };
});

module.exports = checkType;