const expect = require('chai').expect;
import { minBy } from '../../src';

describe('minBy', () => {
  it('primitive object arrays', () => {
    expect(minBy([ { n: 1 }, { n: 2 } ], 'n')).to.be.equal({ n: 1 });
    expect(minBy([ { n: 1 }, { n: 2 } ], 'v')).to.be.equal(undefined);

    expect(minBy([ { n: 1 }, { n: 2 } ], (d) => d.n)).to.be.equal({ n: 1 });
    expect(minBy([ { n: 1 }, { n: 2 } ], (d) => d.v)).to.be.equal(undefined);
  });

  it('empty arrays', () => {
    expect(minBy([], 'v')).to.be.equal(undefined);
    expect(minBy([], (d) => d.v)).to.be.equal(undefined);
  });
});
