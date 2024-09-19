import { isFunction } from '../../../src/lodash';

describe('isFunction', () => {
  it('function', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(new Function())).toBe(true);
  });

  it('not function', () => {
    expect(isFunction(0)).toBe(false);
    expect(isFunction(123)).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction('abc')).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
  });
});
