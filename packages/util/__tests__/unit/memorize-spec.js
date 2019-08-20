const expect = require('chai').expect;
import { memoize } from '../../src';

function max(...args) {
  return Math.max(...args);
}

describe('memoize', () => {
  it('memoize function', () => {
    expect(() => {
      memoize('12');
    }).to.throw();
  });

  it('memoize no resolver', () => {
    const mmax = memoize(max);
    expect(mmax(5, 2, 3, 4)).to.equal(5);
    // 因为 以 5 为 key，所以最大值都一样
    expect(mmax(5, 2, 3, 4)).to.equal(mmax(5, 6, 7));
  });

  it('memoize resolver', () => {
    const mmax = memoize(max, (...args) => args.join('-'));
    expect(mmax(5, 2, 3, 4)).to.equal(5);

    expect(mmax(5, 6, 7)).to.equal(7);
  });
});
