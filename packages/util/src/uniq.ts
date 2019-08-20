import contains from './contains';
import each from './each';

const uniq = function(arr) {
  const resultArr = [];
  each(arr, item => {
    if (!contains(resultArr, item)) {
      resultArr.push(item);
    }
  });
  return resultArr;
};

export default uniq;
