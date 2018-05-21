/**
 * �Ƿ�Ϊ����
 * @param  {*} fn ����
 * @return {Boolean}  �Ƿ���
 */

const isType = require('./isType');

const isFunction = function(value) {
  return isType(value, 'Function');
};

module.exports = isFunction;
