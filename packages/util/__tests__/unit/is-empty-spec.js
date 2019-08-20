const expect = require('chai').expect;
import { isEmpty } from '../../src';

describe('isEmpty', () => {
  it('null', () => {
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty()).to.be.true;
    expect(isEmpty(NaN)).to.be.true;
    expect(isEmpty(undefined)).to.be.true;
  });

  it('empty object', () => {
    expect(isEmpty({})).to.be.true;
    expect(isEmpty([])).to.be.true;
    expect(isEmpty(new Set())).to.be.true;
    expect(isEmpty(new Map())).to.be.true;
    expect(isEmpty(true)).to.be.true;
    expect(isEmpty(1)).to.be.true;
  });

  it('not empty object', () => {
    expect(isEmpty([ 1, 2, 3 ])).to.be.false;
    expect(isEmpty('abc')).to.be.false;
    expect(isEmpty({ a: 1 })).to.be.false;
  });
});
