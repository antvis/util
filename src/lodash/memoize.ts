class FLRUCache<K, V> {
  private cache: Map<K, V>;
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = Math.max(capacity, 1);
    this.cache = new Map<K, V>();
  }

  // 获取缓存中的值，并更新使用顺序
  get(key: K): V | undefined {
    if (!this.cache.has(key)) {
      return undefined;
    }

    // 先删除再插入，以便更新顺序
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  // 设置缓存值，更新使用顺序，并维护缓存大小
  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      // 如果 key 已存在，更新值并重新设置顺序
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // 容量已满，移除最久未使用的键值对
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  // 检查是否存在指定的 key
  has(key: K): boolean {
    return this.cache.has(key);
  }

  // 获取当前缓存大小
  size(): number {
    return this.cache.size;
  }

  // 清空缓存
  clear(): void {
    this.cache.clear();
  }
}

const CacheMap = new Map<Function, FLRUCache<any, any>>();

/**
 * 缓存函数的计算结果，避免重复计算
 * @example
 * _.memoize(calColor);
 * _.memoize(calColor, (...args) => args[0]);
 * @param fn 缓存的函数
 * @param resolver 生成缓存 key 的函数
 * @param maxSize lru 缓存的大小
 */
export default function memoize<T extends Function>(fn: T, resolver?: (...args: any[]) => string, maxSize = 128) {
  const memoized = function (...args) {
    // 使用方法构造 key，如果不存在 resolver，则直接取第一个参数作为 key
    const key = resolver ? resolver.apply(this, args) : args[0];
    if (!CacheMap.has(fn)) CacheMap.set(fn, new FLRUCache(maxSize));
    const cache = CacheMap.get(fn);

    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };

  return memoized as unknown as T;
}
