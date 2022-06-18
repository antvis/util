import type { PathArray } from '../../../src';
import { getDrawDirection } from '../../../src/path/util/get-draw-direction';
import { equalizeSegments } from '../../../src/path/util/equalize-segments';

describe('get path bbox', () => {
  it('should calc draw direction correctly', () => {
    expect(
      getDrawDirection([
        ['M', 0, 0],
        ['L', 100, 100],
      ]),
    ).toBeTruthy();

    expect(
      getDrawDirection([
        ['M', 0, 0],
        ['L', -100, -100],
      ]),
    ).toBeTruthy();

    expect(getDrawDirection([['M', 0, 0], ['L', 100, 100], ['L', 0, 100], ['Z']])).toBeTruthy();

    expect(getDrawDirection([['M', 0, 0], ['L', 0, 100], ['L', 100, 100], ['Z']])).toBeFalsy();
  });

  it('should equalizeSegments correctly', () => {
    const path1: PathArray = [
      ['M', 0, 0],
      ['L', 100, 100],
    ];
    const path2: PathArray = [
      ['M', 0, 0],
      ['L', -100, -100],
    ];
    expect(equalizeSegments(path1, path2)).toEqual([
      [
        ['M', 0, 0],
        ['L', 100, 100],
      ],
      [
        ['M', 0, 0],
        ['L', -100, -100],
      ],
    ]);
  });
});
