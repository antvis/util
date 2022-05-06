import { getLineIntersect } from '../../../src';

describe('line intersect', () => {
  it('no intersect', () => {
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 120, y: 0 }, { x: 150, y: 0 })).toBe(null);
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 120, y: -20 }, { x: 120, y: 10 })).toBe(null);
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 150, y: 0 }, { x: 120, y: 0 })).toBe(null);

    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 150, y: 0 }, { x: 150, y: 0 })).toBe(null);

  });

  it('intersect', () => {
    // 端点相交
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 0 }, { x: 150, y: 10 })).toEqual({ x: 100, y: 0 });
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 50, y: -50 }, { x: 50, y: 0 })).toEqual({ x: 50, y: 0 });
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 50, y: -50 }, { x: 50, y: 50 })).toEqual({ x: 50, y: 0 });
  });

});
