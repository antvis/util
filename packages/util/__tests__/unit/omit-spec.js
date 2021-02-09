const expect = require('chai').expect;
import { omit, size } from '../../src';

describe('omit', () => {
  it('omit object', () => {
    const object = { a: 1, b: '2', c: 3, d: 2 };
    const result = omit(object, ['a', 'c']);
    expect(typeof result).to.equal('object');
    expect(result.a).to.be.undefined;
    expect(result.b).to.equal('2');
    expect(result.c).to.be.undefined;
    expect(result.d).to.equal(2);
  });

  it('omit empty object', () => {
    const result = omit({}, ['a', 'c']);
    expect(typeof result).to.equal('object');
    expect(size(result)).to.equal(0);
  });
});
