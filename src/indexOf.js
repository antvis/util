const indexOf = function(arr, obj) {
  const m = Array.prototype.indexOf;
  if (m) {
    return m.call(arr, obj);
  }
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === obj) {
      index = i;
      break;
    }
  }
  return index;
};

module.exports = indexOf;
