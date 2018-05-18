/*
* _.isEmpty(null);      // => true
*
* _.isEmpty(true);      // => true
*
* _.isEmpty(1);         // => true
*
* _.isEmpty([1, 2, 3]); // => false
*
* _.isEmpty({ 'a': 1 }); // => false
*/

const isArrayLike = require('./isArrayLike');
const isArray = require('./isArray');

const objectProto = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty;

isEmpty = function(value) {
    if (value == null) {
        return true;
    }
    if (isArrayLike(value) &&
        (isArray(value) || typeof value == 'string' || typeof value.splice == 'function')) {
        return !value.length;
    }
    for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
            return false;
        }
    }
    return true;
};
module.exports = isEmpty;