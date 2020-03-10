import isInPolygon from '../../src/point-in-polygon';
const expect = require('chai').expect;

describe('point in polygon', () => {
  it('in polygon', () => {
    const points = [
      [ 0, 0 ],
      [ 0, 100 ],
      [ 30, 100 ],
      [ 30, 0 ]
    ];

    expect(isInPolygon(points, 0, 0)).eql(true); // 顶点
    expect(isInPolygon(points, 0, 10)).eql(true); // 边上
    expect(isInPolygon(points, 0, -1)).eql(false); // 顶点

    expect(isInPolygon(points, 10, 10)).eql(true); // 边上
    expect(isInPolygon(points, 30, 0)).eql(true);
    expect(isInPolygon(points, 30, 10)).eql(true);
  });

  it('other polygon', () => {
    const points = [
      [ 0, 0 ],
      [ 100, 0 ],
      [ 0, 100 ],
      [ 100, 100 ]
    ];
    expect(isInPolygon(points, 50, 50)).eql(true);
    expect(isInPolygon(points, 50, 40)).eql(true);
    expect(isInPolygon(points, 40, 50)).eql(false);
  });
});

