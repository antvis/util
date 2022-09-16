import { isPolygonsIntersect } from '../../../src/math';

describe('is polygons intersect', () => {
  const points = [
    [0, 0],
    [0, 100],
    [20, 100],
    [20, 0],
  ];

  it('length < 2', () => {
    expect(isPolygonsIntersect(points, [])).toEqual(false);
    expect(isPolygonsIntersect([], points)).toEqual(false);
    expect(isPolygonsIntersect([[0, 0]], points)).toEqual(false);
  });

  it('length = 2', () => {
    const points1 = [
      [0, 0],
      [20, 0],
    ];
    expect(isPolygonsIntersect(points, points1)).toEqual(true);
  });

  it('no intersect', () => {
    const points1 = [
      [10, 120],
      [10, 120],
      [30, 98],
    ];
    expect(isPolygonsIntersect(points, points1)).toEqual(false);
    expect(isPolygonsIntersect(points1, points)).toEqual(false);
  });

  it('intersect', () => {
    const points1 = [
      [10, 120],
      [10, 120],
      [30, 98],
      [-10, 98],
    ];
    expect(isPolygonsIntersect(points, points1)).toEqual(true);
    expect(isPolygonsIntersect(points1, points)).toEqual(true);
  });

  it('one in one', () => {
    const points1 = [
      [1, 10],
      [8, 20],
      [14, 10],
    ];
    expect(isPolygonsIntersect(points, points1)).toEqual(true);
    expect(isPolygonsIntersect(points1, points)).toEqual(true);
  });
});
