import { normalizePath, path2Curve } from '../../../src';

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
