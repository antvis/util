import { isNumber } from '../../../src/lodash';

describe('isNumber', () => {
  it('number literal', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(123)).toBe(true);
    expect(isNumber(0.1)).toBe(true);
    expect(isNumber(123.4)).toBe(true);
    expect(isNumber(-0)).toBe(true);
    expect(isNumber(-123)).toBe(true);
    expect(isNumber(-0.1)).toBe(true);
    expect(isNumber(-123.4)).toBe(true);
  });

  it('number object', () => {
    expect(isNumber(new Number(0))).toBe(false);
    expect(isNumber(new Number(123))).toBe(false);
    expect(isNumber(new Number(0.1))).toBe(false);
    expect(isNumber(new Number(123.4))).toBe(false);
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
