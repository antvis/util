const isFunction = require('./type/isFunction');
const toArray = require('./toArray');
const mix = require('./mix');

const augment = function(c) {
  const args = toArray(arguments);
  for (let i = 1; i < args.length; i++) {
    let obj = args[i];
    if (isFunction(obj)) {
      obj = obj.prototype;
    }
    mix(c.prototype, obj);
  }
};

module.exports = augment;
