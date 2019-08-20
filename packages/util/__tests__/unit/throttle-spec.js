const expect = require('chai').expect;
import { throttle } from '../../src';

describe('throttle', () => {
  it('default', (done) => {
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

  it('cancel', (done) => {
    let counter = 0;
    const incr = function() {
      counter++;
    };
    const throttledIncr = throttle(incr, 16);
    throttledIncr();
    throttledIncr();
    throttledIncr();
    expect(counter).to.equal(1);
    setTimeout(() => {
      throttledIncr();
      throttledIncr();
      throttledIncr();
      expect(counter).to.equal(2);
      throttledIncr.cancel();
    }, 20);
    setTimeout(() => {
      expect(counter).to.equal(2);
      done();
    }, 40);
  });

});
