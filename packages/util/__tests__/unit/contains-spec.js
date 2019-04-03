const expect = require('chai').expect;
import { contains } from '../../src';

describe('contains', () => {
  it('arr', () => {
    expect(contains([ 1, 2, 3 ], 1)).to.equal(true);
    expect(contains([ 1, 2, 3 ], 4)).to.equal(false);
  });
  it('string', () => {
    expect(contains('abc', 'ab')).to.equal(true);
    expect(contains('abc', 'd')).to.equal(false);
  });
});
