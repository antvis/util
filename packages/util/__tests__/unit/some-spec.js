const expect = require('chai').expect;
import { some } from '../../src';

describe('some', () => {
  it('some', () => {
    expect(some([ 1, 2, 3 ], (item) => item > 2)).to.eql(true);
    expect(some([ 1, 2, 3 ], (item) => item < 10)).to.eql(true);
    expect(some([ 1, 2, 3 ], (item) => item > 10)).to.eql(false);
  });
});
