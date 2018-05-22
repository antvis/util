const isNil = require('../type/isNil');
const isArray = require('../type/isArray');

const firstValue = function(data, name) {
  let rst = null;
  for (let i = 0; i < data.length; i++) {
    const obj = data[i];
    const value = obj[name];
    if (!isNil(value)) {
      if (isArray(value)) {
        rst = value[0];
      } else {
        rst = value;
      }
      break;
    }
  }
  return rst;
};

module.exports = firstValue;
