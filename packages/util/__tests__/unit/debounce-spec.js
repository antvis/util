const expect = require('chai').expect;
import { debounce } from '../../src';

describe('debounce', () => {
  it('default', (done) => {
    let counter = 0;
    const incr = function() {
      counter++;
    };
    const debouncedIncr = debounce(incr, 32);
    debouncedIncr();
    debouncedIncr();
    debouncedIncr();
    expect(counter).to.equal(0);
    setTimeout(() => {
      expect(counter).to.equal(1);
      done();
    }, 40);
  });

  it('immediate', (done) => {
    let counter = 0;
    const incr = function() {
      counter++;
    };
    const debouncedIncr = debounce(incr, 32, true);
    debouncedIncr();
    debouncedIncr();
    debouncedIncr();
    expect(counter).to.equal(1);
    setTimeout(() => {
      expect(counter).to.equal(1);
      done();
    }, 40);
  });
});
