import { isOdd } from '../../../src/lodash';

describe('isOdd', () => {
  it('odd', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(5)).toBe(true);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(9)).toBe(true);
    expect(isOdd(11)).toBe(true);
    expect(isOdd(13)).toBe(true);
    expect(isOdd(15)).toBe(true);
    expect(isOdd(17)).toBe(true);
    expect(isOdd(19)).toBe(true);
  });

  it('not odd', () => {
    expect(isOdd(0)).toBe(false);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
    expect(isOdd(6)).toBe(false);
    expect(isOdd(8)).toBe(false);
    expect(isOdd(10)).toBe(false);
    expect(isOdd(12)).toBe(false);
    expect(isOdd(14)).toBe(false);
    expect(isOdd(16)).toBe(false);
    expect(isOdd(18)).toBe(false);
    expect(isOdd(20)).toBe(false);
  });
});
