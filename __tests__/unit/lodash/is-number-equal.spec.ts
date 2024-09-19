import { isNumberEqual } from '../../../src/lodash';

describe('isNumberEqual', () => {
  it('equal', () => {
    expect(isNumberEqual(0, 0)).toBe(true);
    expect(isNumberEqual(1, 1)).toBe(true);
    expect(isNumberEqual(0.1, 0.1)).toBe(true);
    expect(isNumberEqual(0.123, 0.123)).toBe(true);
    expect(isNumberEqual(0.123456789, 0.123456789)).toBe(true);
    expect(isNumberEqual(0.1234567890123456789, 0.1234567890123456789)).toBe(true);
    expect(isNumberEqual(0.12345678901234567890123456789, 0.12345678901234567890123456789)).toBe(true);
    expect(isNumberEqual(0.123456789012345678901234567890123456789, 0.123456789012345678901234567890123456789)).toBe(
      true,
    );
  });

  it('not equal', () => {
    expect(isNumberEqual(0, 1)).toBe(false);
    expect(isNumberEqual(1, 0)).toBe(false);
    expect(isNumberEqual(0.1, 0.2)).toBe(false);
    expect(isNumberEqual(0.123, 0.124)).toBe(false);
    expect(isNumberEqual(0.123456789, 0.123456788, 0.0000000001)).toBe(false);
  });
});
