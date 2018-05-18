const indexOf = function(arr, obj) {
  var m = Array.prototype.indexOf;
  if (m) {
    return m.call(arr, obj);
  }
  var index = -1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === obj) {
      index = i;
      break;
    }
  }
  return index;
};

module.exports = indexOf;