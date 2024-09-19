import { isFinite } from '../../../src/lodash';

describe('isFinite', () => {
  it('finite', () => {
    expect(isFinite(0)).toBe(true);
    expect(isFinite(123)).toBe(true);
    expect(isFinite(0.1)).toBe(true);
    expect(isFinite(0.123)).toBe(true);
    expect(isFinite(0.123456789)).toBe(true);
    expect(isFinite(0.1234567890123456789)).toBe(true);
    expect(isFinite(0.12345678901234567890123456789)).toBe(true);
    expect(isFinite(0.123456789012345678901234567890123456789)).toBe(true);
  });

  it('not finite', () => {
    expect(isFinite(Infinity)).toBe(false);
    expect(isFinite(-Infinity)).toBe(false);
    expect(isFinite(NaN)).toBe(false);
  });
});
