import { isArray } from '../../../src/lodash';

describe('isArray', () => {
  it('array literal', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
  });

  it('array object', () => {
    expect(isArray(new Array(10))).toBe(true);
    expect(isArray(new Array(10).fill(0))).toBe(true);
  });

  it('not array', () => {
    expect(isArray(0)).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray('abc')).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
  });
});
