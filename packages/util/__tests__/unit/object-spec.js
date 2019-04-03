const expect = require('chai').expect;
import * as util from '../../src';

const deepMix = util.deepMix;
const mix = util.mix;
const objectUtils = util;

describe('object utils', () => {
  it('mix', function() {
    const a = { a: 123 },
      b = { b: 'b' };

    mix(a, b);
    expect(a.b).to.equal(b.b);

    const test = {
      a: 1,
      b: [ 1, 2, 'c' ],
      c: { x: 1, y: 2 },
    };

    const testMix = deepMix({}, test, {
      e: {
        f: 1,
        g: 3,
      },
      b: [ 3 ],
    });

    expect(testMix.a).to.equal(1);
    expect(testMix.b.length).to.equal(1);
  });

  it('deepMix circle', function() {
    const a = { a1: 123, a2: 234 };
    const b = { b1: 222, b2: a };

    a.a3 = b;
    const obj = deepMix({}, b);
    expect(obj.b2).not.to.equal(a);
  });

  it('deepMix prototype', function() {
    const A = function(a) {
        this.a = a;
      },
      b = { b: 'b' };

    A.prototype.c = 'c';
    const a = new A('123');

    deepMix(b, a);
    expect(b.c).to.be.undefined;
  });

  it('forIn', function() {
    expect(objectUtils.forIn).to.equal(util.each);
  });

  it('has', function() {
    const a = { a1: 123, a2: 234 };
    expect(objectUtils.has(a, 'a1')).to.equal(true);
  });

  it('hasKey', function() {
    expect(objectUtils.hasKey).to.equal(objectUtils.has);
  });

  it('hasValue', function() {
    const a = { a1: 123, a2: 234 };
    expect(objectUtils.hasValue(a, 123)).to.equal(true);
    expect(objectUtils.hasValue(a, 12)).to.equal(false);
  });

  it('isMatch', function() {
    const a = { a1: 123, a2: 234 };
    expect(objectUtils.isMatch(a, { a1: 123 })).to.equal(true);
    expect(objectUtils.isMatch(a, { a1: 12 })).to.equal(false);
  });

  it('keys', function() {
    const a = { a1: 123, a2: 234 };
    expect(objectUtils.keys(a)).to.eql([ 'a1', 'a2' ]);
  });

  it('values', function() {
    expect(objectUtils.values).to.equal(util.values);
  });
});

