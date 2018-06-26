const expect = require('chai').expect;
const pick = require('../../src').pick;

describe('pick', () => {
  it('pick object', () => {
    const object = { a: 1, b: '2', c: 3 };
    const result = pick(object, [ 'a', 'c' ]);
    expect(typeof result).to.equal('object');
    expect(result.a).to.equal(1);
    expect(result.c).to.equal(3);
    expect(result.b).to.be.undefined;
  });

  it('pick arr', () => {
    const arr = [ 1, 2, 3 ];
    const result = pick(arr, [ 'a', 'c' ]);
    expect(result.a).to.be.undefined;
  });
});
