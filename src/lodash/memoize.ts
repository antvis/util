import isFunction from './is-function';

function flru(max: number) {
  let num, curr, prev;
  const limit = max || 1;

  function keep(key, value) {
    if (++num > limit) {
      prev = curr;
      reset(1);
      ++num;
    }
    curr[key] = value;
  }

  function reset(isPartial?: number) {
    num = 0;
    curr = Object.create(null);
    isPartial || (prev = Object.create(null));
  }

  reset();

  return {
    clear: reset,
    has: function (key) {
      return curr[key] !== void 0 || prev[key] !== void 0;
    },
    get: function (key) {
      var val = curr[key];
      if (val !== void 0) return val;
      if ((val = prev[key]) !== void 0) {
        keep(key, val);
        return val;
      }
    },
    set: function (key, value) {
      if (curr[key] !== void 0) {
        curr[key] = value;
      } else {
        keep(key, value);
      }
    },
  };
}

/**
 * _.memoize(calColor);
 * _.memoize(calColor, (...args) => args[0]);
 * @param f
 * @param resolver
 * @param maxSize lru maxSize
 */
export default (f: Function, resolver?: (...args: any[]) => string, maxSize = 128) => {
  if (!isFunction(f)) {
    throw new TypeError('Expected a function');
  }

  const memoized = function (...args) {
    // 使用方法构造 key，如果不存在 resolver，则直接取第一个参数作为 key
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = f.apply(this, args);
    // 缓存起来
    cache.set(key, result);
    return result;
  };

  memoized.cache = flru(maxSize);

  return memoized;
};
