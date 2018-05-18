const isArray = require('./type/isArray');

const clone =  function(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  var rst;
  if (isArray(obj)) {
    rst = [];
    for (var i = 0, l = obj.length; i < l; i++) {
      if (typeof obj[i] === 'object' && obj[i] != null) {
        rst[i] = Util.clone(obj[i]);
      } else {
        rst[i] = obj[i];
      }
    }
  } else {
    rst = {};
    for (var k in obj) {
      if (typeof obj[k] === 'object' && obj[k] != null) {
        rst[k] = Util.clone(obj[k]);
      } else {
        rst[k] = obj[k];
      }
    }
  }

  return rst;
}