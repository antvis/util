const expect = require('chai').expect;
import { map } from '../../src';

describe('map', () => {
  it('map array', () => {
    const a = [ 1, 2, 3 ];
    const b = map(a, (item) => { return ++item; });
    expect(a).to.eql([ 1, 2, 3 ]);
    expect(b).to.eql([ 2, 3, 4 ]);

    const c = map(null, (item) => { return ++item; });
    expect(c).to.equal(null);
  });
});
