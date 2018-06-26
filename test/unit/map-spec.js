const expect = require('chai').expect;
const map = require('../../src').map;

describe('map', () => {
  it('map array', () => {
    const a = [ 1, 2, 3 ];
    const b = map(a, item => { return ++item; });
    expect(a.length).to.equal(3);
    expect(b.length).to.equal(3);
    expect(a[0]).to.equal(1);
    expect(b[0]).to.equal(2);

    const c = map(null, item => { return ++item; });
    expect(c).to.equal(null);
  });
});
