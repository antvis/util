const expect = require('chai').expect;
import { uniq } from '../../src';

describe('uniq', () => {
  it('uniq', () => {
    expect(uniq([ 1, 2, 3 ])).to.eql([ 1, 2, 3 ]);
    expect(uniq([ 1, 2, 1 ])).to.eql([ 1, 2 ]);

    expect(uniq([ 1, '1', 1 ])).to.eql([ 1, '1' ]);
  });
});
