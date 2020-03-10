import getLineIntersect from '../../src/get-line-intersect';
const expect = require('chai').expect;

describe('line intersect', () => {
  it('no intersect', () => {
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 120, y: 0 }, { x: 150, y: 0 })).eql(null);
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 120, y: -20 }, { x: 120, y: 10 })).eql(null);
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 150, y: 0 }, { x: 120, y: 0 })).eql(null);

    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 150, y: 0 }, { x: 150, y: 0 })).eql(null);

  });

  it('intersect', () => {
    // 端点相交
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 0 }, { x: 150, y: 10 })).eql({ x: 100, y: 0 });
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 50, y: -50 }, { x: 50, y: 0 })).eql({ x: 50, y: 0 });
    expect(getLineIntersect({ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 50, y: -50 }, { x: 50, y: 50 })).eql({ x: 50, y: 0 });
  });

});
