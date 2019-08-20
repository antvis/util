const expect = require('chai').expect;
import { requestAnimationFrame, clearAnimationFrame } from '../../src';

describe('animateFrame', () => {
  it('requestAnimationFrame', (done) => {
    let called = false;
    requestAnimationFrame(() => {
      called = true;
    });
    setTimeout(() => {
      expect(called).equal(true);
      done();
    }, 20);
  });

  it('clearAnimationFrame', (done) => {
    let called = false;
    const handler = requestAnimationFrame(() => {
      called = true;
    });
    clearAnimationFrame(handler);
    setTimeout(() => {
      expect(called).equal(false);
      done();
    }, 20);
  });
});
