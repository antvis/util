const expect = require('chai').expect;
import { filter } from '../../src';

describe('filter', () => {
  it('filter', () => {
    expect(filter([ 1, 2, 3 ], (item) => item > 2)).to.eql([ 3 ]);
    expect(filter([ 1, 2, 3 ], (item) => item < 10)).to.eql([ 1, 2, 3 ]);
    expect(filter('abc', (item) => item > 2)).to.eql([]);
  });
});
