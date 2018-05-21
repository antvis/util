const expect = require('chai').expect;
const assign = require('../../src/assign');

describe('assign', () => {
  it('assign primitive types', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: '1', b: '2' };
    const dist = assign({}, obj1, obj2);
    expect(Object.keys(dist).length).to.equal(3);
    expect(dist.a).to.equal('1');
    expect(dist.b).to.equal('2');
    expect(dist.c).to.equal(3);
  });

  it('assign object', () => {
    const obj1 = { a: [ 1, 2 ], b: { a: 1, b: 2 } };
    const obj2 = { a: [ 1, 2, 3 ], b: { a: 2 }, c: [ 2, 3 ] };
    const obj3 = { a: [ 2, 3 ], b: { b: 3 } };
    const dist = assign({}, obj1, obj2, obj3);
    console.log(dist);
    expect(Object.keys(dist).length).to.equal(3);
    expect(dist.a.length).to.equal(2);
    expect(dist.b.a).to.be.undefined;
    expect(dist.b.b).to.equal(3);
    expect(dist.c.length).to.equal(2);
    obj3.b = { b: 4 };
    expect(dist.b.b).to.equals(3);
  });
});
