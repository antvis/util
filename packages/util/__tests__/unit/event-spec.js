const expect = require('chai').expect;
import { wrapBehavior, getWrapBehavior } from '../../src';

describe('event', () => {
  const obj = {
    test() {},
  };

  it('wrapBehavior', () => {
    expect(wrapBehavior).to.be.a('Function');
    expect(wrapBehavior(obj, 'test')).to.be.a('Function');
    expect(() => {
      wrapBehavior(obj, 'test')();
    }).to.not.throw();
  });

  it('getWrapBehavior', () => {
    wrapBehavior(obj, 'test');
    expect(getWrapBehavior(obj, 'test')).to.be.a('Function');
    expect(() => {
      getWrapBehavior(obj, 'test')();
    }).to.not.throw();
  });
});
