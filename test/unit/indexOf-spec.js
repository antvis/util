const expect = require('chai').expect;
const indexOf = require('../../src/indexOf');

describe('indexOf', () => {
  it('null', () => {
    expect(indexOf(null, '123')).to.equal(-1);
  });

  it('array index', () => {
    const a = [ 1, '2', { a: 3 }];
    expect(indexOf(a, 1)).to.equal(0);
    expect(indexOf(a, '1')).to.equal(-1);
    expect(indexOf(a, '2')).to.equal(1);
  });
});
