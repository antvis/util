export default function uniq(arr: any[], cache = new Map()) {
  const r = [];

  if (Array.isArray(arr)) {
    for (const item of arr) {
      // 加一个 cache，提升性能
      if (!cache.has(item)) {
        r.push(item);
        cache.set(item, true);
      }
    }
  }
  return r;
}
