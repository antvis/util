const each = require('../each');
const toArray = require('../toArray');

const union = function() {
  const result = new Set();
  let values = [];
  each(arguments, arg => {
    values = toArray(arg);
    each(values, val => {
      result.add(val);
    });
  });
  return Array.from(result);
};

module.exports = union;
