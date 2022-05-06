import { isPointInPolygon } from '../../../src';

describe('point in polygon', () => {
  it('in polygon', () => {
    const points = [
      [ 0, 0 ],
      [ 0, 100 ],
      [ 30, 100 ],
      [ 30, 0 ]
    ];

    expect(isPointInPolygon(points, 0, 0)).toEqual(true); // 顶点
    expect(isPointInPolygon(points, 0, 10)).toEqual(true); // 边上
    expect(isPointInPolygon(points, 0, -1)).toEqual(false); // 顶点

    expect(isPointInPolygon(points, 10, 10)).toEqual(true); // 边上
    expect(isPointInPolygon(points, 30, 0)).toEqual(true);
    expect(isPointInPolygon(points, 30, 10)).toEqual(true);
  });

  it('other polygon', () => {
    const points = [
      [ 0, 0 ],
      [ 100, 0 ],
      [ 0, 100 ],
      [ 100, 100 ]
    ];
    expect(isPointInPolygon(points, 50, 50)).toEqual(true);
    expect(isPointInPolygon(points, 50, 40)).toEqual(true);
    expect(isPointInPolygon(points, 40, 50)).toEqual(false);
  });
});

