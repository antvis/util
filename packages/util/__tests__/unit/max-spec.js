const expect = require('chai').expect;
import { max } from '../../src';

describe('max', () => {
  it('primitive arrays', () => {
    expect(max([1, 2])).to.be.equal(2);
  });

  it('empty arrays', () => {
    expect(max([])).to.be.equal(undefined);
  });

  it('max string', () => {
    expect(max(['1', '2'])).to.be.equal(2);
  });

  it('large arrays', () => {
    const data = new Array(1250010).fill(1).map((d, idx) => idx);
    expect(max(data)).to.be.equal(1250009);

    expect(() => Math.max(...data)).to.be.throw('Maximum call stack size exceeded');
  });
});
