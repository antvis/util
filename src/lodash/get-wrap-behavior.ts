
/**
 * 获取封装的事件
 * @protected
 * @param  {Object} obj   对象
 * @param  {String} action 事件名称
 * @return {Function}        返回事件处理函数
 */
function getWrapBehavior(obj: object, action: string): Function {
  return obj['_wrap_' + action];
}

export default getWrapBehavior;
