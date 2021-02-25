const expect = require('chai').expect;
import { getRange } from '../../src';

describe('getRange', () => {
  it('getRange', () => {
    expect(getRange([ 1, 2, 3 ])).to.deep.equals({
      min: 1,
      max: 3,
    });
  });

  it('getRange string', () => {
    expect(getRange([ '1', '2', '3' ])).to.deep.equals({
      min: 1,
      max: 3,
    });
  });
});
