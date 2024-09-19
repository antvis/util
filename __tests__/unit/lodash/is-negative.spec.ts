import { isNegative } from '../../../src/lodash';

describe('isNegative', () => {
  it('negative', () => {
    expect(isNegative(-1)).toBe(true);
    expect(isNegative(-0.1)).toBe(true);
    expect(isNegative(-0.123)).toBe(true);
    expect(isNegative(-0.123456789)).toBe(true);
    expect(isNegative(-0.1234567890123456789)).toBe(true);
    expect(isNegative(-0.12345678901234567890123456789)).toBe(true);
    expect(isNegative(-0.123456789012345678901234567890123456789)).toBe(true);
  });

  it('not negative', () => {
    expect(isNegative(0)).toBe(false);
    expect(isNegative(1)).toBe(false);
    expect(isNegative(0.1)).toBe(false);
    expect(isNegative(0.123)).toBe(false);
    expect(isNegative(0.123456789)).toBe(false);
    expect(isNegative(0.1234567890123456789)).toBe(false);
    expect(isNegative(0.12345678901234567890123456789)).toBe(false);
    expect(isNegative(0.123456789012345678901234567890123456789)).toBe(false);
  });
});
