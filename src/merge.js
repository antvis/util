const isArray = require('./type/isArray');
const isObject = require('./type/isObject');

const MAX_LEVEL = 5;
const merge = function(dst, src, level) {
  level = level || 0;
  for (var k in src) {
    if (src.hasOwnProperty(k)) {
      var value = src[k];
      if (value !== null && isObject(value)) {
        if (!isObject(dst[k])) {
          dst[k] = {};
        }
        if (level < MAX_LEVEL) {
          merge(dst[k], src[k], level + 1);
        } else {
          dst[k] = src[k];
        }
      } else if (isArray(value)) {
        dst[k] = [];
        }
        dst[k] = dst[k].concat(value);
      } else if (value !== undefined) {
        dst[k] = src[k];
      }
    }
  }
};

module.exports = merge;