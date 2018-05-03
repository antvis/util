const checkType = require('./type');
const toArray = require('./toArray');
const objectUtil = require('./object');

const mix = objectUtil.mix;

const classUtil = {
  extend(subclass, superclass, overrides, staticOverrides) {
    // 如果只提供父类构造函数，则自动生成子类构造函数
    if (!checkType.isFunction(superclass)) {
      overrides = superclass;
      superclass = subclass;
      subclass = function() {};
    }

    const create = Object.create ?
      function(proto, c) {
        return Object.create(proto, {
          constructor: {
            value: c
          }
        });
      } :
      function(proto, c) {
        function Tmp() {}
        Tmp.prototype = proto;
        const o = new Tmp();
        o.constructor = c;
        return o;
      };

    const superObj = create(superclass.prototype, subclass); // new superclass(),//实例化父类作为子类的prototype
    subclass.prototype = mix(superObj, subclass.prototype); // 指定子类的prototype
    subclass.superclass = create(superclass.prototype, superclass);
    mix(superObj, overrides);
    mix(subclass, staticOverrides);
    return subclass;
  },

  augment(c) {
    const args = toArray(arguments);
    for (let i = 1; i < args.length; i++) {
      let obj = args[i];
      if (checkType.isFunction(obj)) {
        obj = obj.prototype;
      }
      mix(c.prototype, obj);
    }
  },
};

module.exports = classUtil;
