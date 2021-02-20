const expect = require('chai').expect;
import { uniq } from '../../src';

describe('uniq', () => {
  it('uniq', () => {
    expect(uniq([ 1, 2, 3 ])).to.eql([ 1, 2, 3 ]);
    expect(uniq([ 1, 2, 1 ])).to.eql([ 1, 2 ]);

    expect(uniq([ 1, '1', 1 ])).to.eql([ 1, '1' ]);
  });

  it('uniq with cache', () => {
    const cache = new Map();
    cache.set(1, true);
    cache.set(2, true);

    expect(uniq([ 1, 2, 3 ], cache)).to.eql([ 3 ]);
  });
});
