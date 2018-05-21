const expect = require('chai').expect;
const classUtil = require('../../src/class');

describe('class', () => {
  it('extend', () => {
    const foo = function() {
      foo.superclass.constructor.call(this);
    };
    const bar = function() {
      this.a = 0;
      this.init = function() {};
    };
    const boo = classUtil.extend(foo, bar);
    const dist = new boo();
    expect(dist.a).to.equal(0);
    expect(typeof dist.init).to.equal('function');
  });

  it('augment', () => {
    const foo = function() {};
    classUtil.augment(foo, {
      a: 0,
      b() {
        this.a = 1;
      }
    });
    const dist = new foo();
    expect(dist.a).to.equal(0);
    expect(dist.b).not.to.be.undefined;
  });
});
