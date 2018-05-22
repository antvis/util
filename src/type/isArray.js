const isType = require('./isType');

const isArray = Array.isArray ? Array.isArray : value => isType(value, 'Array');

module.exports = isArray;
