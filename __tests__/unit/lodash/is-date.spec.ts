import { isDate } from '../../../src/lodash';

describe('isDate', () => {
  it('date', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date('2024'))).toBe(true);
  });

  it('not date', () => {
    expect(isDate(0)).toBe(false);
    expect(isDate(123)).toBe(false);
    expect(isDate('')).toBe(false);
    expect(isDate('abc')).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
  });
});
