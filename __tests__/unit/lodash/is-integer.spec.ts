import { isInteger } from '../../../src/lodash';

describe('isInteger', () => {
  it('integer', () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(123)).toBe(true);
    expect(isInteger(-123)).toBe(true);
  });

  it('not integer', () => {
    expect(isInteger(0.1)).toBe(false);
    expect(isInteger(0.123)).toBe(false);
    expect(isInteger(0.123456789)).toBe(false);
    expect(isInteger(0.1234567890123456789)).toBe(false);
    expect(isInteger(0.12345678901234567890123456789)).toBe(false);
    expect(isInteger(0.123456789012345678901234567890123456789)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
  });
});
