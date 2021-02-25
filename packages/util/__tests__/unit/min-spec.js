const expect = require('chai').expect;
import { min } from '../../src';

describe('min', () => {
  it('primitive arrays', () => {
    expect(min([1, 2])).to.be.equal(1);
  });

  it('empty arrays', () => {
    expect(min([])).to.be.equal(undefined);
  });

  it('min string', () => {
    expect(min(['1', '2'])).to.be.equal(1);
  });

  it('large arrays', () => {
    const data = new Array(1250010).fill(1).map((d, idx) => idx);
    expect(min(data)).to.be.equal(0);
    expect(() => Math.min(...data)).to.be.throw('Maximum call stack size exceeded');
  });
});
