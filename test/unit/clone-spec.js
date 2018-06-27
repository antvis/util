const expect = require('chai').expect;
const clone = require('../../src').clone;

describe('clone', () => {
  it('clone primitive array', () => {
    const a = [ 1, 2, 3 ];
    const b = clone(a);
    expect(Array.isArray(b)).to.be.true;
    expect(b.length).to.equal(3);
    a[2] = 0;
    expect(b[2]).to.equal(3);
  });

  it('clone complex array', () => {
    const a = [[ 1, 2 ], { a: 1, b: 2 }];
    const b = clone(a);
    expect(Array.isArray(b)).to.be.true;
    expect(b.length).to.equal(2);
    a[1] = [ 0 ];
    expect(b[1].a).not.to.be.undefined;
  });

  it('clone null', () => {
    const a = clone(null);
    expect(a === null).to.be.true;
    const b = clone(undefined);
    expect(b === undefined).to.be.true;
  });

  it('clone object', () => {
    const a = { a: '1', b: 2, c: [ 123 ], d: {} };
    const b = clone(a);
    expect(b.a).to.equal('1');
    expect(Array.isArray(b.c)).to.be.true;
    a.d = 4;
    expect(typeof b.d).to.equal('object');
  });
});
