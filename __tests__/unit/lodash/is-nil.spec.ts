import { isNil } from '../../../src/lodash';

describe('isNil', () => {
  it('nil', () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });

  it('not nil', () => {
    expect(isNil(0)).toBe(false);
    expect(isNil(123)).toBe(false);
    expect(isNil('')).toBe(false);
    expect(isNil('abc')).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil({})).toBe(false);
  });
});
