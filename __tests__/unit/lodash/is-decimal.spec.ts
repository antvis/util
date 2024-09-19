import { isDecimal } from '../../../src/lodash';

describe('isDecimal', () => {
  it('decimal', () => {
    expect(isDecimal(0.1)).toBe(true);
    expect(isDecimal(0.123)).toBe(true);
    expect(isDecimal(0.123456789)).toBe(true);
    expect(isDecimal(0.1234567890123456789)).toBe(true);
    expect(isDecimal(0.12345678901234567890123456789)).toBe(true);
    expect(isDecimal(0.123456789012345678901234567890123456789)).toBe(true);
  });

  it('not decimal', () => {
    expect(isDecimal(0)).toBe(false);
    expect(isDecimal(123)).toBe(false);
    expect(isDecimal('')).toBe(false);
    expect(isDecimal('abc')).toBe(false);
    expect(isDecimal([])).toBe(false);
    expect(isDecimal({})).toBe(false);
    expect(isDecimal(null)).toBe(false);
    expect(isDecimal(undefined)).toBe(false);
  });
});
