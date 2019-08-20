const expect = require('chai').expect;
import * as classUtil from '../../src';

describe('class', () => {
  it('extend', () => {
    const foo = function() {
      foo.superclass.constructor.call(this);
    };
    const bar = function() {
      this.a = 0;
      this.init = function() {
      };
    };
    const boo = classUtil.extend(foo, bar);
    const dist = new boo();
    expect(dist.a).to.equal(0);
    expect(typeof dist.init).to.equal('function');
  });

  it('augment', () => {
    const A = function(a) {
        this.a = a;
      },
      b = { b: 'b' },
      B = function(b) {
        this.b = b;
      };

    A.prototype.c = 'c';
    B.prototype.b1 = 'b1';

    classUtil.augment(A, b, B);

    const a = new A('a');
    expect(a.a).to.equal('a');
    expect(a.b).to.equal('b');
    expect(a.c).to.equal('c');
    expect(a.b1).to.equal('b1');
  });
});
