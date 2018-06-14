const isArray = require('../type/isArray');
const each = require('../each');

const hasOwnProperty = Object.prototype.hasOwnProperty;

const union = function() {
  const temp = {};
  const result = [];
  each(arguments, arg => {
    if (isArray(arg)) {
      each(arg, item => {
        if (!hasOwnProperty.call(temp, item)) {
          temp[item] = item;
        }
      });
    }
  });
  each(temp, v => {
    result.push(v);
  });
  return result;
};

module.exports = union;
