const expect = require('chai').expect;
import { memoize, uniqueId } from '../../src';

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

    const mUniqueId = memoize(uniqueId);
    expect(uniqueId('key')).not.to.equal(uniqueId('key'));
    expect(mUniqueId('key')).to.equal(mUniqueId('key'));
  });

  it('memoize object key', () => {
    const mUniqueId = memoize(uniqueId);

    const a = {};
    const b = {};

    expect(mUniqueId(a)).not.to.equal(mUniqueId(b));
    expect(mUniqueId(a)).to.equal(mUniqueId(a));
  });

  it('memoize resolver', () => {
    const mmax = memoize(max, (...args) => args.join('-'));
    expect(mmax(5, 2, 3, 4)).to.equal(5);

    expect(mmax(5, 6, 7)).to.equal(7);
  });
});
