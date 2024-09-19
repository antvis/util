import { isNull } from '../../../src/lodash';

describe('isNull', () => {
  it('null', () => {
    expect(isNull(null)).toBe(true);
  });

  it('not null', () => {
    expect(isNull(0)).toBe(false);
    expect(isNull(123)).toBe(false);
    expect(isNull('')).toBe(false);
    expect(isNull('abc')).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull({})).toBe(false);
    expect(isNull(undefined)).toBe(false);
  });
});
