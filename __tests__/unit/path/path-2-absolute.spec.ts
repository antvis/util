import { path2Absolute, PathArray } from '../../../src';

describe('path to absolute', () => {
  it('commands: m, l, h, v', () => {
    const str: PathArray = [
      ['M', 10, 10],
      ['L', 100, 100],
      ['l', 10, 10],
      ['h', 20],
      ['v', 20],
    ];
    const arr = path2Absolute(str);
    expect(arr).toEqual([
      ['M', 10, 10],
      ['L', 100, 100],
      ['L', 110, 110],
      ['H', 130],
      ['V', 130],
    ]);
    expect(path2Absolute(arr)).toEqual(arr);
  });

  it('commands: c, q', () => {
    const str = 'M 10 10 q 20 20 30 30 c 35 35 45 43 50 50 z';
    const arr = path2Absolute(str);
    expect(arr).toEqual([['M', 10, 10], ['Q', 30, 30, 40, 40], ['C', 75, 75, 85, 83, 90, 90], ['Z']]);
  });

  it('commands: a', () => {
    const str = 'M 10, 10 a 20, 20, 0, 0, 0, 30, 30 A 30 30 0 0 1 50 50';
    const arr = path2Absolute(str);
    expect(arr).toEqual([
      ['M', 10, 10],
      ['A', 20, 20, 0, 0, 0, 40, 40],
      ['A', 30, 30, 0, 0, 1, 50, 50],
    ]);
  });

  it('commands: s', () => {
    const str1 = 'M10 80 Q 52.5 10, 95 80 T 180 80';
    const str2 = 'M10 80 Q 52.5 10, 95 80 Q 137.5 150 180 80';

    expect(path2Absolute(str1)).toEqual([
      ['M', 10, 80],
      ['Q', 52.5, 10, 95, 80],
      ['T', 180, 80],
    ]);
    expect(path2Absolute(str2)).toEqual([
      ['M', 10, 80],
      ['Q', 52.5, 10, 95, 80],
      ['Q', 137.5, 150, 180, 80],
    ]);
  });

  it('commands: t', () => {
    const str1 = 'M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80';
    const str2 = 'M10 80 C 40 10, 65 10, 95 80  C 125 150, 150 150, 180 80';
    expect(path2Absolute(str1)).toEqual([
      ['M', 10, 80],
      ['C', 40, 10, 65, 10, 95, 80],
      ['S', 150, 150, 180, 80],
    ]);
    expect(path2Absolute(str2)).toEqual([
      ['M', 10, 80],
      ['C', 40, 10, 65, 10, 95, 80],
      ['C', 125, 150, 150, 150, 180, 80],
    ]);
  });

  it('commands: m', () => {
    const str: PathArray = [
      ['M', 10, 10],
      ['m', 10, 10],
      ['L', 100, 100],
      ['l', 10, 10],
      ['h', 20],
      ['v', 20],
    ];
    const arr = path2Absolute(str);
    expect(arr).toEqual([
      ['M', 10, 10],
      ['M', 20, 20],
      ['L', 100, 100],
      ['L', 110, 110],
      ['H', 130],
      ['V', 130],
    ]);
  });
});
