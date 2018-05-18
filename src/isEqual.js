const isObjectLike = require('./type/isObjectLike');

const isEqual = function(value, other) {
  if (value === other) {
    return true;
  }
  if(value === null || other === null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
};

module.exports = isEqual;