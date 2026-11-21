import { getPathBBox, getTotalLength, normalizePath, path2Curve } from '../../../src';

describe('test normalize path', () => {
  it('should use the current point for T after a non-quadratic segment', () => {
    expect(normalizePath('M0 0 L10 10 T30 0')).toEqual([
      ['M', 0, 0],
      ['L', 10, 10],
      ['Q', 10, 10, 30, 0],
    ]);
  });

  it('should reflect the second control point of C for S', () => {
    expect(normalizePath('M0 0 C0 10 0 10 10 10 S20 0 20 0')).toEqual([
      ['M', 0, 0],
      ['C', 0, 10, 0, 10, 10, 10],
      ['C', 20, 10, 20, 0, 20, 0],
    ]);
  });

  it('should use the current point for S after an arc', () => {
    expect(normalizePath('M0 0 A10 10 0 1 1 20 0 S30 10 40 0')).toEqual([
      ['M', 0, 0],
      ['A', 10, 10, 0, 1, 1, 20, 0],
      ['C', 20, 0, 30, 10, 40, 0],
    ]);
  });

  it('should use the current point for S after Q', () => {
    expect(normalizePath('M0 0 Q10 10 20 0 S30 10 40 0')).toEqual([
      ['M', 0, 0],
      ['Q', 10, 10, 20, 0],
      ['C', 20, 0, 30, 10, 40, 0],
    ]);
  });

  it('should keep reflecting through chains of S and T', () => {
    expect(normalizePath('M0 0 C0 10 10 10 10 0 S20 -10 20 0 S30 10 30 0')).toEqual([
      ['M', 0, 0],
      ['C', 0, 10, 10, 10, 10, 0],
      ['C', 10, -10, 20, -10, 20, 0],
      ['C', 20, 10, 30, 10, 30, 0],
    ]);
    expect(normalizePath('M0 0 Q10 10 20 0 T40 0 T60 0')).toEqual([
      ['M', 0, 0],
      ['Q', 10, 10, 20, 0],
      ['Q', 30, -10, 40, 0],
      ['Q', 50, 10, 60, 0],
    ]);
  });
});

describe('test commands after Z', () => {
  it('should start H, V, S and T after Z at the start of the subpath', () => {
    expect(normalizePath('M10 10 h5 v5 Z h10 V30')).toEqual([
      ['M', 10, 10],
      ['L', 15, 10],
      ['L', 15, 15],
      ['Z'],
      ['L', 20, 10],
      ['L', 20, 30],
    ]);
    expect(normalizePath('M10 10 h5 Z S30 20 40 10')).toEqual([
      ['M', 10, 10],
      ['L', 15, 10],
      ['Z'],
      ['C', 10, 10, 30, 20, 40, 10],
    ]);
    expect(normalizePath('M10 10 h5 Z T40 10')).toEqual([['M', 10, 10], ['L', 15, 10], ['Z'], ['Q', 10, 10, 40, 10]]);
  });

  it('should measure a path that keeps drawing after Z', () => {
    expect(getTotalLength('M10 10 h5 Z h10')).toBeCloseTo(20);
    expect(getPathBBox('M10 10 h5 v5 Z V30')).toEqual(getPathBBox('M10 10 h5 v5 Z M10 10 V30'));
  });
});

describe('test arc radii in path to curve', () => {
  it('should draw a zero radius arc as a straight line', () => {
    expect(path2Curve('M0 0 L100 0 A0 10 0 0 1 200 0')).toEqual([
      ['M', 0, 0],
      ['C', 50, 0, 100, 0, 100, 0],
      ['C', 150, 0, 200, 0, 200, 0],
    ]);
    expect(path2Curve('M0 0 A10 0 0 0 1 0 100')).toEqual([
      ['M', 0, 0],
      ['C', 0, 50, 0, 100, 0, 100],
    ]);
  });

  it('should use the absolute value of negative radii', () => {
    expect(path2Curve('M0 0 A-10 -10 0 0 1 20 0')).toEqual(path2Curve('M0 0 A10 10 0 0 1 20 0'));
    expect(path2Curve('M0 0 A-10 5 30 1 0 15 5')).toEqual(path2Curve('M0 0 A10 5 30 1 0 15 5'));
  });
});
