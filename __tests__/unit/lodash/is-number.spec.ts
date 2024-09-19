import { isNumber } from '../../../src/lodash';

describe('isNumber', () => {
  it('number', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(123)).toBe(true);
    expect(isNumber(0.1)).toBe(true);
    expect(isNumber(123.4)).toBe(true);
    expect(isNumber(-0)).toBe(true);
    expect(isNumber(-123)).toBe(true);
    expect(isNumber(-0.1)).toBe(true);
    expect(isNumber(-123.4)).toBe(true);
  });

  it('not number', () => {
    expect(isNumber('')).toBe(false);
    expect(isNumber('abc')).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
  });
});
