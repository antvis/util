const expect = require('chai').expect;
import { startsWith } from '../../src';

describe('startsWith', () => {
  it('startsWith arr', () => {
    expect(startsWith([ 1, 2, 3 ], 1)).to.equal(true);
    expect(startsWith([ 1, 2, 3 ], 2)).to.equal(false);
  });

  it('startsWith string', () => {
    expect(startsWith('abc', 'a')).to.equal(true);
    expect(startsWith('abc', 'b')).to.equal(false);
  });

  it('startsWith other', () => {
    expect(startsWith(null, 'a')).to.equal(false);
    expect(startsWith({}, 'b')).to.equal(false);
  });
});
