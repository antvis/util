import type { PathArray } from '../../../src';
import { getDrawDirection } from '../../../src/path/util/get-draw-direction';
import { equalizeSegments } from '../../../src/path/util/equalize-segments';
import { getRotatedCurve } from '../../../src/path/util/get-rotated-curve';

describe('equalize segments', () => {
  it('should calc draw direction correctly', () => {
    const rotated = getRotatedCurve(
      [
        ['M', -100, 100],
        [
          'C',
          -99.99999999999999,
          176.98003589195008,
          -16.66666666666667,
          225.09255832441892,
          49.999999999999986,
          186.60254037844388,
        ],
        ['C', 80.9401076758503, 168.73926088303568, 100, 135.72655899081636, 100, 100],
        ['C', 100, 23.01996410804992, 16.66666666666668, -25.092558324418903, -49.99999999999998, 13.397459621556123],
        ['C', -80.94010767585029, 31.2607391169643, -100, 64.27344100918364, -100, 100],
        ['C', -100, 100, -100, 100, -100, 100],
      ],
      [
        ['M', -100, 100],
        [
          'C',
          -99.99999999999999,
          176.98003589195008,
          -16.66666666666667,
          225.09255832441892,
          49.999999999999986,
          186.60254037844388,
        ],
        ['C', 80.9401076758503, 168.73926088303568, 100, 135.72655899081636, 100, 100],
        ['C', 100, 23.01996410804992, 16.66666666666668, -25.092558324418903, -49.99999999999998, 13.397459621556123],
        ['C', -80.94010767585029, 31.2607391169643, -100, 64.27344100918364, -100, 100],
        ['C', -100, 100, -100, 100, -100, 100],
      ],
    );

    expect(rotated).toEqual([
      ['M', -100, 100],
      [
        'C',
        -99.99999999999999,
        176.98003589195008,
        -16.66666666666667,
        225.09255832441892,
        49.999999999999986,
        186.60254037844388,
      ],
      ['C', 80.9401076758503, 168.73926088303568, 100, 135.72655899081636, 100, 100],
      ['C', 100, 23.01996410804992, 16.66666666666668, -25.092558324418903, -49.99999999999998, 13.397459621556123],
      ['C', -80.94010767585029, 31.2607391169643, -100, 64.27344100918364, -100, 100],
      ['C', -100, 100, -100, 100, -100, 100],
    ]);
  });

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
  it('should not recurse infinitely if segments cannot be split', () => {
    const path1: PathArray = [
      ['M', 0, 0],
      ['L', 1, 1], // 非常短的线段，不满足 split 条件
    ];
    const path2: PathArray = [
      ['M', 0, 0],
      ['L', 10, 10],
      ['L', 20, 20],
      ['L', 30, 30],
    ];

    const result = equalizeSegments(path1, path2);
    // 不是一定相等，因为可能无法拆分，重点是不会死循环
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
  });
  it('should split cubic bezier curves correctly', () => {
    const path1: PathArray = [
      ['M', 0, 0],
      ['C', 30, 30, 60, 30, 100, 0],
    ];
    const path2: PathArray = [
      ['M', 0, 0],
      ['C', 20, 20, 40, 20, 60, 0],
      ['C', 70, -20, 90, -20, 100, 0],
    ];

    const result = equalizeSegments(path1, path2);
    expect(result[0].length).toBe(result[1].length);
  });
  it('should equalizeSegments for complex multi-segment paths', () => {
    const path1: PathArray = [
      ['M', 0, 0],
      ['L', 50, 0],
      ['C', 60, 10, 70, 10, 80, 0],
    ];
    const path2: PathArray = [
      ['M', 0, 0],
      ['L', 20, 0],
      ['L', 40, 0],
      ['L', 60, 0],
      ['C', 65, 5, 75, 5, 80, 0],
    ];

    const result = equalizeSegments(path1, path2);
    expect(result[0].length).toBe(result[1].length);
  });
  it('should terminate recursion at max depth', () => {
    const path1: PathArray = [
      ['M', 0, 0],
      ['L', 1, 1],
    ];
    // @ts-ignore
    const path2: PathArray = Array.from({ length: 20 }, (_, i) => ['L', i, i + 1]) as PathArray;
    path2.unshift(['M', 0, 0]);

    const result = equalizeSegments(path1, path2);
    expect(result.length).toBe(2);
  });
});
