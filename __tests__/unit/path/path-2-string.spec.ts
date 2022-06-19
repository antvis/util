import { path2String, PathArray } from '../../../src';

describe('path to string', () => {
  it('should stringify path correctly.', () => {
    const str: PathArray = [
      ['M', 10, 10],
      ['L', 100, 100],
      ['l', 10, 10],
      ['h', 20],
      ['v', 20],
    ];
    expect(path2String(str)).toEqual('M10 10L100 100l10 10h20v20');
    expect(path2String(str, 'off')).toEqual('M10 10L100 100l10 10h20v20');
    expect(path2String(str, 2)).toEqual('M10 10L100 100l10 10h20v20');

    function getCirclePath(cx: number, cy: number, rx: number, ry: number): PathArray {
      return [
        // ['M', cx, cy - ry],
        // ['A', rx, ry, 0, 1, 1, cx, cy + ry],
        // ['A', rx, ry, 0, 1, 1, cx, cy - ry],
        ['M', cx - rx, ry],
        ['A', rx, ry, 0, 1, 0, cx + rx, ry],
        ['A', rx, ry, 0, 1, 0, cx - rx, ry],
        ['Z'],
      ];
    }
    expect(path2String(getCirclePath(0, 0, 100, 100))).toEqual(
      'M-100 100A100 100 0 1 0 100 100A100 100 0 1 0 -100 100Z',
    );

    expect(
      path2String(
        [
          ['M', 2, 4],
          ['A', 2, 2, 0, 0, 0, 0, 6],
          ['V', 12],
          ['A', 2, 2, 0, 0, 0, 2, 14],
          ['H', 14],
          ['A', 2, 2, 0, 0, 0, 16, 12],
          ['V', 6],
          ['A', 2, 2, 0, 0, 0, 14, 4],
          ['H', 12.828],
          ['A', 2, 2, 0, 0, 1, 11.414, 3.414],
          ['L', 10.586, 2.5860000000000003],
          ['A', 2, 2, 0, 0, 0, 9.172, 2.0000000000000004],
          ['H', 6.828000000000001],
          ['A', 2, 2, 0, 0, 0, 5.4140000000000015, 2.5860000000000003],
          ['L', 4.586000000000001, 3.414],
          ['A', 2, 2, 0, 0, 1, 3.1720000000000015, 4],
          ['H', 2.0000000000000018],
          ['Z'],
          ['M', 10.5, 8.5],
          ['A', 2.5, 2.5, 0, 0, 0, 5.5, 8.5],
          ['A', 2.5, 2.5, 0, 1, 0, 10.5, 8.5],
          ['Z'],
          ['M', 2.5, 6],
          ['A', 0.5, 0.5, 0, 0, 1, 2.5, 5],
          ['A', 0.5, 0.5, 0, 1, 1, 2.5, 6],
          ['Z'],
          ['M', 11.5, 8.5],
          ['A', 3.5, 3.5, 0, 1, 1, 4.5, 8.5],
          ['A', 3.5, 3.5, 0, 0, 1, 11.5, 8.5],
          ['Z'],
        ],
        3,
      ),
    ).toEqual(
      'M2 4A2 2 0 0 0 0 6V12A2 2 0 0 0 2 14H14A2 2 0 0 0 16 12V6A2 2 0 0 0 14 4H12.828A2 2 0 0 1 11.414 3.414L10.586 2.586A2 2 0 0 0 9.172 2H6.828A2 2 0 0 0 5.414 2.586L4.586 3.414A2 2 0 0 1 3.172 4H2ZM10.5 8.5A2.5 2.5 0 0 0 5.5 8.5A2.5 2.5 0 1 0 10.5 8.5ZM2.5 6A0.5 0.5 0 0 1 2.5 5A0.5 0.5 0 1 1 2.5 6ZM11.5 8.5A3.5 3.5 0 1 1 4.5 8.5A3.5 3.5 0 0 1 11.5 8.5Z',
    );
  });

  it('should stringify path with precision correctly.', () => {
    const str: PathArray = [
      ['M', 10.02, 10.003],
      ['L', 100, 100],
      ['l', 10, 10],
      ['h', 20],
      ['v', 20.123],
    ];
    expect(path2String(str)).toEqual('M10.02 10.003L100 100l10 10h20v20.123');
    expect(path2String(str, 2)).toEqual('M10.02 10L100 100l10 10h20v20.12');
    expect(path2String(str, 3)).toEqual('M10.02 10.003L100 100l10 10h20v20.123');
    expect(path2String(str, 10)).toEqual('M10.02 10.003L100 100l10 10h20v20.123');
  });
});
