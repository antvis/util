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
