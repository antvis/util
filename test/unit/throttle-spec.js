const expect = require('chai').expect;
const throttle = require('../../src').throttle;

describe('throttle', () => {
  it('default', done => {
    let counter = 0;
    const incr = function() {
      counter++;
    };
    const throttleIncr = throttle(incr, 32);
    throttleIncr();
    throttleIncr();
    throttleIncr();
    expect(counter).to.equal(1);
    setTimeout(() => {
      expect(counter).to.equal(2);
      done();
    }, 40);
  });

  it('cancel', done => {
    let counter = 0;
    const incr = function() {
      counter++;
    };
    const throttleIncr = throttle(incr, 16);
    throttleIncr();
    throttleIncr();
    throttleIncr();
    expect(counter).to.equal(1);
    setTimeout(() => {
      throttleIncr();
      throttleIncr();
      throttleIncr();
      expect(counter).to.equal(2);
      throttleIncr.cancel();
    }, 20);
    setTimeout(() => {
      expect(counter).to.equal(2);
      done();
    }, 40);
  });

});
