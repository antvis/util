const isPlainObject = require('./type/isPlainObject');
const isArray = require('./type/isArray');
const toArray = require('./toArray');

const MAX_MIX_LEVEL = 5;

function _deepMix(dist, src, level, maxLevel) {
  level = level || 0;
  maxLevel = maxLevel || MAX_MIX_LEVEL;
  for (const key in src) {
    if (src.hasOwnProperty(key)) {
      const value = src[key];
      if (value !== null && isPlainObject(value)) {
        if (!isPlainObject(dist[key])) {
          dist[key] = {};
        }
        if (level < maxLevel) {
          _deepMix(dist[key], value, level + 1, maxLevel);
        } else {
          dist[key] = src[key];
        }
      } else if (isArray(value)) {
        dist[key] = [];
        dist[key] = dist[key].concat(value);
      } else if (value !== undefined) {
        dist[key] = value;
      }
    }
  }
}

const deepMix = function() {
  const args = toArray(arguments);
  const dist = args[0];
  for (let i = 1; i < args.length; i++) {
    _deepMix(dist, args[i]);
  }
  return dist;
};

module.exports = deepMix;
