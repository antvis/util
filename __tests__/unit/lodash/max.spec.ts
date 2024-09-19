import { max } from '../../../src/lodash';

describe('max', () => {
  it('max', () => {
    expect(max([1, 2, 3])).toBe(3);
    expect(max([3, 2, 1])).toBe(3);
    expect(max([1, 3, 2])).toBe(3);
    expect(max([-Infinity, 0])).toBe(0);
    expect(max([-Infinity, -Infinity])).toBe(-Infinity);
    expect(max([-Infinity, 0, Infinity])).toBe(Infinity);
  });

  it('empty', () => {
    expect(max([])).toBe(undefined);
    expect(max([NaN])).toBe(undefined);
    expect(max([1, 2, NaN])).toBe(undefined);
  });
});
