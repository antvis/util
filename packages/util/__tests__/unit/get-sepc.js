const expect = require('chai').expect;
import { get } from '../../src';

const obj = {
  undef: undefined,
  zero: 0,
  one: 1,
  n: null,
  f: false,
  a: {
    two: 2,
    b: {
      three: 3,
      c: {
        four: 4,
      },
    },
  },
};

describe('get', () => {
  it('get', () => {
    expect(get(obj, 'zero')).to.be.equal(0);
    expect(get(obj, 'undef', 1)).to.be.equal(1);
    expect(get(obj, 'a.two')).to.be.equal(2);

    expect(get(obj, 'a.b.three')).to.be.equal(3);

    expect(get(obj, 'a.b.c.d', 4)).to.be.equal(4);
  });
});
