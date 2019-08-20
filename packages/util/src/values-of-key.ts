import each from './each';
import isArray from './is-array';
import isNil from './is-nil';

export default (data: any[], name: string): any[] => {
  const rst = [];
  const tmpMap = {};

  data.forEach(obj => {
    let value = obj[name] as string[];

    if (!isNil(value)) {
      // flatten
      if (!isArray(value)) {
        value = [ value ];
      }
      each(value, val => {
        // unique
        if (!tmpMap[val]) {
          rst.push(val);
          tmpMap[val] = true;
        }
      });
    }
  });
  return rst;
};
