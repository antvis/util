const expect = require('chai').expect;
import { endsWith } from '../../src';

describe('endsWith', () => {
  it('endsWith arr', () => {
    expect(endsWith([ 1, 2, 3 ], 3)).to.equal(true);
    expect(endsWith([ 1, 2, 3 ], 2)).to.equal(false);
  });

  it('endsWith string', () => {
    expect(endsWith('abc', 'c')).to.equal(true);
    expect(endsWith('abc', 'b')).to.equal(false);
  });

  it('endsWith other', () => {
    expect(endsWith(null, 'a')).to.equal(false);
    expect(endsWith({}, 'b')).to.equal(false);
  });
});
