import { path2Curve } from '../../../src';

function getCirclePath(cx, cy, rx, ry) {
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

describe('test path to curve', () => {
  it('should keep Z', () => {
    const [pathArray, zCommandIndexes] = path2Curve('M 10,10 L -10,0 L 10,-10 Z M 10,10 L -10,0 L 10,-10 Z', true);
    expect(pathArray).toEqual([
      ['M', 10, 10],
      ['C', 10, 10, -10, 0, -10, 0],
      ['C', -10, 0, 10, -10, 10, -10],
      ['C', 10, -10, 10, 10, 10, 10],
      ['M', 10, 10],
      ['C', 10, 10, -10, 0, -10, 0],
      ['C', -10, 0, 10, -10, 10, -10],
      ['C', 10, -10, 10, 10, 10, 10],
    ]);
    expect(zCommandIndexes).toEqual([3, 7]);
  });

  it('should convert invalid arc', () => {
    const pathArray = path2Curve([
      ['M', 0, 0],
      ['A', 0, 0, 0, 1, 0, 0, 0],
      ['A', 0, 0, 0, 1, 0, 0, 0],
    ]);
    expect(pathArray).toEqual([
      ['M', 0, 0],
      ['C', 0, 0, 0, 0, 0, 0],
      ['C', 0, 0, 0, 0, 0, 0],
    ]);
  });

  it('should parse Line correctly', () => {
    expect(
      path2Curve([
        ['M', 0, 0],
        ['L', 100, 100],
      ]),
    ).toEqual([
      ['M', 0, 0],
      ['C', 0, 0, 100, 100, 100, 100],
    ]);
  });

  it('should parse Circle correctly', () => {
    expect(path2Curve(getCirclePath(0, 0, 100, 100) as any)).toEqual([
      ['M', -100, 100],
      ['C', -99.99999999999999, 155.19150244940002, -55.19150244939999, 200, 6.123233995736766e-15, 200],
      ['C', 55.19150244940001, 200, 100, 155.1915024494, 100, 100],
      ['C', 100, 44.8084975506, 55.19150244940001, 0, 6.123233995736766e-15, 0],
      ['C', -55.19150244939999, 0, -99.99999999999999, 44.80849755059999, -100, 99.99999999999999],
      ['C', -100, 99.99999999999999, -100, 100, -100, 100],
    ]);

    const [pathArray, zCommandIndexes] = path2Curve(getCirclePath(0, 0, 100, 100) as any, true);
    expect(pathArray).toEqual([
      ['M', -100, 100],
      ['C', -99.99999999999999, 155.19150244940002, -55.19150244939999, 200, 6.123233995736766e-15, 200],
      ['C', 55.19150244940001, 200, 100, 155.1915024494, 100, 100],
      ['C', 100, 44.8084975506, 55.19150244940001, 0, 6.123233995736766e-15, 0],
      ['C', -55.19150244939999, 0, -99.99999999999999, 44.80849755059999, -100, 99.99999999999999],
      ['C', -100, 99.99999999999999, -100, 100, -100, 100],
    ]);

    expect(zCommandIndexes).toEqual([5]);
  });
});
