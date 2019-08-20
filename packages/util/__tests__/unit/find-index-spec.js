const expect = require('chai').expect;
import { findIndex } from '../../src';

describe('findIndex', () => {
  it('findIndex', () => {
    expect(findIndex([ 1, 2, 3 ], (item) => item > 2)).to.eql(2);
    expect(findIndex([ 1, 2, 3 ], (item) => item < 10)).to.eql(0);
    expect(findIndex([ 1, 2, 3 ], (item) => item < 1)).to.eql(-1);
  });
});
