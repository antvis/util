const each = require('../each');
const isNil = require('../type/isNil');
const isArray = require('../type/isArray');

const values = function(data, name) {
  const rst = [];
  const tmpMap = {};
  for (let i = 0; i < data.length; i++) {
    const obj = data[i];
    let value = obj[name];
    if (!isNil(value)) {
      if (!isArray(value)) {
        value = [ value ];
      }
      each(value, val => {
        if (!tmpMap[val]) {
          rst.push(val);
          tmpMap[val] = true;
        }
      });
    }
  }
  return rst;
};

module.exports = values;
