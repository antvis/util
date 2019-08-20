const expect = require('chai').expect;
import { flatten } from '../../src';

describe('flatten', () => {
  it('flatten', () => {
    const arr = [ 1, [ 2, [ 3, [ 4 ] ], 5 ] ];
    expect(flatten(arr)).to.eql([ 1, 2, [ 3, [ 4 ] ], 5 ]);

    expect(flatten('abc')).to.eql([]);

    expect(flatten([ 1, 2, 3, 4 ])).to.eql([ 1, 2, 3, 4 ]);
  });
});
