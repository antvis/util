const expect = require('chai').expect;
import intersect from '../../src/is-polygons-intersect';

describe('test intersect', () => {
  const points = [
    [ 0, 0 ],
    [ 0, 100 ],
    [ 20, 100 ],
    [ 20, 0 ]
  ];

  it('length < 2', () => {
    expect(intersect(points, [])).eql(false);
    expect(intersect([], points)).eql(false);
    expect(intersect([ [ 0, 0 ] ], points)).eql(false);
  });

  it('length = 2', () => {
    const points1 = [
      [ 0, 0 ],
      [ 20, 0 ]
    ];
    expect(intersect(points, points1)).eql(true);
  });

  it('no intersect', () => {
    const points1 = [
      [ 10, 120 ],
      [ 10, 120 ],
      [ 30, 98 ]
    ];
    expect(intersect(points, points1)).eql(false);
    expect(intersect(points1, points)).eql(false);
  });

  it('intersect', () => {
    const points1 = [
      [ 10, 120 ],
      [ 10, 120 ],
      [ 30, 98 ],
      [ -10, 98 ],
    ];
    expect(intersect(points, points1)).eql(true);
    expect(intersect(points1, points)).eql(true);
  });

  it('one in one', () => {
    const points1 = [
      [ 1, 10 ],
      [ 8, 20 ],
      [ 14, 10 ],
    ];
    expect(intersect(points, points1)).eql(true);
    expect(intersect(points1, points)).eql(true);
  });
});
