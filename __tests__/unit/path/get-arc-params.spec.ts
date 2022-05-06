import { getArcParams } from '../../../src';

function toBe(v1, v2) {
  return Math.abs(v1 - v2) < 0.001;
}

describe('test arcs', () => {
  it('test arc params', () => {
    const params = getArcParams([100, 100], ['A', 10, 10, 0, 1, 1, 120, 120]);
    expect(toBe(params.cx, 110)).toBe(true);
    expect(toBe(params.cy, 110)).toBe(true);
    expect(toBe(params.rx, 10 * Math.sqrt(2))).toBe(true);
    expect(toBe(params.ry, 10 * Math.sqrt(2))).toBe(true);
    expect(toBe(params.endAngle - params.startAngle, Math.PI)).toBe(true);

    const params1 = getArcParams([100, 100], ['A', 20, 10, 90, 1, 1, 120, 100]);
    expect(toBe(params1.cx, 110)).toBe(true);
    expect(toBe(params1.cy, 100)).toBe(true);
    expect(toBe(params1.rx, 20)).toBe(true);
    expect(toBe(params1.ry, 10)).toBe(true);
  });
});
