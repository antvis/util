const indexOf = require('./indexOf');

const remove = function(arr, obj) {
  const index = indexOf(arr, obj);
  if (index !== -1) {
    arr.splice(index, 1);
  }
};

module.exports = remove;
