const expect = require('chai').expect;
import { every } from '../../src';

describe('every', () => {
  it('every', () => {
    expect(every([ 1, 2, 3 ], (item) => item > 2)).to.eql(false);
    expect(every([ 1, 2, 3 ], (item) => item < 10)).to.eql(true);
    expect(every([ 1, 2, 3 ], (item) => item > 10)).to.eql(false);
  });
});
