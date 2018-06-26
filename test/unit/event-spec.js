const expect = require('chai').expect;
const eventUtil = require('../../src/event');

describe.only('event', () => {
  const obj = {
    test() {}
  };

  it('wrapBehavior', () => {
    expect(eventUtil.wrapBehavior).to.be.a('Function');
    expect(eventUtil.wrapBehavior(obj, 'test')).to.be.a('Function');
    expect(() => {
      eventUtil.wrapBehavior(obj, 'test')();
    }).to.not.throw();
  });

  it('getWrapBehavior', () => {
    eventUtil.wrapBehavior(obj, 'test');
    expect(eventUtil.getWrapBehavior(obj, 'test')).to.be.a('Function');
    expect(() => {
      eventUtil.getWrapBehavior(obj, 'test')();
    }).to.not.throw();
  });
});
