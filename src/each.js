const isObject = require('./type/isObject');
const each = function(elements, func) {
  if (!elements) {
    return;
  }
  let rst;
  if (isObject(elements)) {
    for (const k in elements) {
      if (elements.hasOwnProperty(k)) {
        rst = func(elements[k], k);
        if (rst === false) {
          break;
        }
      }
    }
  } else if (elements.length) {
    for (let i = 0; i < elements.length; i++) {
      rst = func(elements[i], i);
      if (rst === false) {
        break;
      }
    }
  }
};

module.exports = each;
