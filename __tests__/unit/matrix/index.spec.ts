import { vec2, mat3 } from 'gl-matrix';
import { transform, direction, angleTo } from '../../../src';

describe('Matrix', () => {
  it('direction(v1, v2)', () => {
    const v1 = vec2.fromValues(0, 1) as any;
    const v2 = vec2.fromValues(1, 0) as any;
    const direct = direction(v1, v2);
    expect(direct < 0).toBe(true);
  });

  it('angleTo(v1, v2)', () => {
    const v1 = vec2.fromValues(0, -1) as any;
    const v2 = vec2.fromValues(1, 0) as any;
    const angle = angleTo(v1, v2);
    expect(angle).toBeCloseTo(Math.PI / 2);
  });

  it('angleTo(v1, v2, true)', () => {
    const v1 = vec2.fromValues(0, 1) as any;
    const v2 = vec2.fromValues(-1, 0) as any;
    const angle = angleTo(v1, v2, true);
    expect(angle).toBeCloseTo((Math.PI / 2) * 3);
  });
});

describe('transform', () => {
  const m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  it('translate', () => {
    const matrix = transform(m, [['t', 100, 100]]);
    expect(matrix).toEqual([1, 0, 0, 0, 1, 0, 100, 100, 1]);
    const matrix1 = transform(null, [['t', 100, 100]]);
    expect(matrix1).toEqual([1, 0, 0, 0, 1, 0, 100, 100, 1]);
  });

  it('rotate', () => {
    const matrix = transform(m, [['r', Math.PI]]);
    expect(matrix[0]).toBe(-1);
    expect(matrix[4]).toBe(-1);
  });

  it('scale', () => {
    const matrix = transform(m, [['s', 2, 3]]);
    expect(matrix).toEqual([2, 0, 0, 0, 3, 0, 0, 0, 1]);
  });

  it('matrix', () => {
    const m1 = [2, 0, 0, 0, 3, 0, 0, 0, 1];
    const matrix = transform(m, [['m', m1]]);
    expect(matrix).toEqual(m1);
  });

  it('center rotate', () => {
    const radian = Math.PI / 4;
    const matrix = transform(null, [
      ['t', -40, -40],
      ['r', radian],
      ['t', 50, 50],
    ]);

    let out = [] as any;
    out = mat3.translate(out, m as any, [50, 50]);
    out = mat3.rotate(out, out, radian);
    out = mat3.translate(out, out, [-40, -40]);

    expect(matrix).toEqual(out);

    const m1 = [2, 0, 0, 0, 3, 0, 0, 0, 1];
    const matrix1 = transform(null, [
      ['m', m1],
      ['m', matrix],
    ]);

    let out1 = [] as any;
    out1 = mat3.multiply(out1, matrix as any, m1 as any);

    expect(matrix1).toEqual(out1);
  });
});
