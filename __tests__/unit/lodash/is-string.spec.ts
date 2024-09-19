import { isString } from '../../../src/lodash';

describe('isString', () => {
  it('string literal', () => {
    expect(isString('')).toBe(true);
    expect(isString('abc')).toBe(true);
    expect(isString('123')).toBe(true);
  });

  it('string object', () => {
    expect(isString(new String(''))).toBe(false);
    expect(isString(new String('abc'))).toBe(false);
    expect(isString(new String('123'))).toBe(false);
  });

  it('not string', () => {
    expect(isString(0)).toBe(false);
    expect(isString(123)).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
  });
});
