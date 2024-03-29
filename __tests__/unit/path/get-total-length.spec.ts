import { getTotalLength, PathArray } from '../../../src';
import { parsePathString } from '../../../src/path/parser/parse-path-string';
import { getCirclePath } from './util';

describe('get total length', () => {
  it('should calc the length of rect correctly', () => {
    const str: PathArray = [['M', 0, 0], ['L', 100, 0], ['L', 100, 100], ['L', 0, 100], ['Z']];
    const length = getTotalLength(str);

    expect(length).toEqual(400);
  });

  it('should calc the length of path correctly', () => {
    const str: PathArray = [
      ['M', 0, 0],
      ['L', 100, 0],
      ['L', 100, 100],
      ['L', 0, 100],
    ];
    const length = getTotalLength(str);

    expect(length).toEqual(300);
  });

  it('should calc the length of circle correctly', () => {
    const length = getTotalLength(getCirclePath(0, 0, 100, 100));

    expect(length).toBeCloseTo(628.0314749153262); // 2 * Math.PI * 100
  });

  it('should calc the length of rounded rect correctly', () => {
    const length = getTotalLength(
      parsePathString('M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z') as PathArray,
    );
    expect(length).toBeCloseTo(60.56493518777911);
  });

  it('should calc the length of rounded rect correctly', () => {
    const length = getTotalLength(
      parsePathString('M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z') as PathArray,
    );

    expect(length).toBeCloseTo(60.56493518777911);
  });

  it('should calc the length of Q commands correctly', () => {
    const reversed: PathArray = [
      ['M', 190, 50],
      ['Q', 175, 75, 160, 50],
      ['Q', 145, 25, 130, 50],
      ['Q', 115, 75, 100, 50],
      ['Q', 85, 25, 70, 50],
      ['Q', 55, 75, 40, 50],
      ['Q', 25, 25, 10, 50],
    ];
    const length = getTotalLength(reversed);
    expect(length).toBeCloseTo(243.8244865343346);
  });
});
