/**
 * �ж��Ƿ�����
 * @return {Boolean} �Ƿ�����
 */
const isType = require('./isType');

const isNumber = function(value) {
  return isType(value, 'Number');
};
module.exports = isNumber;
