const expect = require('chai').expect;
import { maxBy } from '../../src';

describe('maxBy', () => {
  it('primitive object arrays', () => {
    expect(maxBy([ { n: 1 }, { n: 2 } ], 'n')).to.be.equal(2);
    expect(maxBy([ { n: 1 }, { n: 2 } ], 'v')).to.be.equal(-Infinity);

    expect(maxBy([ { n: 1 }, { n: 2 } ], (d) => d.n)).to.be.equal(2);
    expect(maxBy([ { n: 1 }, { n: 2 } ], (d) => d.v)).to.be.equal(-Infinity);
  });

  it('empty arrays', () => {
    expect(maxBy([], 'v')).to.be.equal(undefined);
    expect(maxBy([], (d) => d.v)).to.be.equal(undefined);
  });
});
