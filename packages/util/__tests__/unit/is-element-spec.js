const expect = require('chai').expect;
import { isElement } from '../../src';

describe('isElement', () => {
  it('is Element', () => {
    const div = document.createElement('div');
    expect(isElement(div)).to.be.true;
  });

  it('string is not Element', () => {
    expect(isElement('div')).to.be.false;
  });
  it('number is not Element', () => {
    expect(isElement(1)).to.be.false;
  });
  it('boolean true is not Element', () => {
    expect(isElement(true)).to.be.false;
  });
  it('boolean false is not Element', () => {
    expect(isElement(false)).to.be.false;
  });
  it('null is not Element', () => {
    expect(isElement(null)).to.be.false;
  });
  it('plain object is not Element', () => {
    expect(isElement({ a: 1 })).to.be.false;
  });
});
