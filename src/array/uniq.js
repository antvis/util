const contains = require('./contains');

const uniq = function(arr) {
  const resultArr = [];
  arr.forEach(item => {
    if (!contains(resultArr, item)) {
      resultArr.push(item);
    }
  });
  return resultArr;
};

module.exports = uniq;
