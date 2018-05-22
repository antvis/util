const expect = require('chai').expect;
const objectUtil = require('../../src/object');

describe('object utils', () => {
  it('mix', function() {
    const a = { a: 123 },
      b = { b: 'b' };

    objectUtil.mix(a, b);
    expect(a.b).to.equal(b.b);

    const test = {
      a: 1,
      b: [ 1, 2, 'c' ],
      c: { x: 1, y: 2 }
    };

    const testMix = objectUtil.deepMix({}, test, {
      e: {
        f: 1,
        g: 3
      },
      b: [ 3 ]
    });

    expect(testMix.a).to.equal(1);
    expect(testMix.b.length).to.equal(1);
  });

  it('deepMix circle', function() {
    const a = { a1: 123, a2: 234 };
    const b = { b1: 222, b2: a };

    a.a3 = b;
    const obj = objectUtil.deepMix({}, b);
    expect(obj.b2).not.to.equal(a);
  });

  it('deepMix prototype', function() {
    const A = function(a) {
        this.a = a;
      },
      b = { b: 'b' };

    A.prototype.c = 'c';
    const a = new A('123');

    objectUtil.deepMix(b, a);
    expect(b.c).to.be.undefined;
  });
});

