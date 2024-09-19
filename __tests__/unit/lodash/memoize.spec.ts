import { memoize } from '../../../src/lodash';

describe('memoize', () => {
  it('memoize', () => {
    const fn = jest.fn((a: number, b: number) => a + b);
    const memoizedFn = memoize(fn);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(memoizedFn(1, 2)).toBe(3);
    expect(fn).toBeCalledTimes(1);
  });

  it('memoize with resolver', () => {
    const fn = jest.fn((a: number, b: number) => a + b);
    const memoizedFn = memoize(fn, (...args) => args.join(','));

    expect(memoizedFn(1, 2)).toBe(3);
    expect(memoizedFn(1, 2)).toBe(3);
    expect(fn).toBeCalledTimes(1);
  });

  it('memoize with maxSize', () => {
    const fn = jest.fn((a: number, b: number) => a + b);
    const memoizedFn = memoize(fn, undefined, 1);

    expect(memoizedFn(1, 2)).toBe(3);
    expect(memoizedFn(1, 2)).toBe(3);
    expect(fn).toBeCalledTimes(1);

    expect(memoizedFn(2, 3)).toBe(5);
    expect(memoizedFn(2, 3)).toBe(5);
    expect(fn).toBeCalledTimes(2);
  });
});
