import { isEven } from '../../../src/lodash';

describe('isEven', () => {
  it('even', () => {
    expect(isEven(0)).toBe(true);
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(6)).toBe(true);
    expect(isEven(8)).toBe(true);
    expect(isEven(10)).toBe(true);
    expect(isEven(12)).toBe(true);
    expect(isEven(14)).toBe(true);
    expect(isEven(16)).toBe(true);
    expect(isEven(18)).toBe(true);
    expect(isEven(20)).toBe(true);
  });

  it('not even', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
    expect(isEven(7)).toBe(false);
    expect(isEven(9)).toBe(false);
    expect(isEven(11)).toBe(false);
    expect(isEven(13)).toBe(false);
    expect(isEven(15)).toBe(false);
    expect(isEven(17)).toBe(false);
    expect(isEven(19)).toBe(false);
    expect(isEven(21)).toBe(false);
  });
});
