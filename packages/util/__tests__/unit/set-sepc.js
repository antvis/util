import { expect } from 'chai';
import { set } from '../../src';

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

describe('set', () => {
  it('set', () => {
    expect(set(obj, 'zero', true)).to.be.equal(obj);
    expect(set(obj, 'zero', true).zero).to.be.equal(true);


    expect(set(obj, 'a.b.c', { hello: 'world' })).to.be.equal(obj);

    expect(obj.a.b.c).to.be.eql({ hello: 'world' });

    set(obj, 'one.a.b.c', { d: 1 });

    expect(obj.one.a.b.c).to.be.eql({ d: 1 });
  });
});
