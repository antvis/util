const expect = require('chai').expect;
const isEqual = require('../../src').isEqual;
const isEqualWith = require('../../src').isEqualWith;

describe('isEqual', () => {
  it('primitive arrays', () => {
    expect(isEqual()).to.be.true;
    expect(isEqual([ 1, 2 ], [ 1, 2 ])).to.be.true;
    expect(isEqual([ 1, 2 ], [ 1, 3 ])).to.be.false;
    expect(isEqual([ 1, 2 ], [ 1, 2, 3 ])).to.be.false;
    expect(isEqual([ '1', '2' ], [ '1', '2' ])).to.be.true;
    expect(isEqual([ '1', '12' ], [ '1' ])).to.be.false;
    expect(isEqual([ 1, 2 ], [ 1, 2, 3 ])).to.be.false;
    expect(isEqual([ 'ab', 'cd' ], [ 'ed', 'as' ])).to.be.false;
  });
  it('object arrays', () => {
    expect(isEqual([{ a: 1 }], [{ a: 1 }])).to.be.true;
    expect(isEqual([{ a: 111 }, { a: 222 }], [{ a: 111 }, { a: 222 }])).to.be.true;
    expect(isEqual([{ a: 11, b: 22 }, { a: 11, c: 22 }])).to.be.false;
  });
  it('empty arrays', () => {
    expect(isEqual([], [])).to.be.true;
    expect(isEqual([ null ], [ null ])).to.be.true;
    expect(isEqual([ undefined ], [ NaN ])).to.be.false;
  });
  it('compare objects', () => {
    expect(isEqual({}, {})).to.be.true;
    expect(isEqual({ a: 111 }, { a: 111 })).to.be.true;
    expect(isEqual({ a: 1, b: 2 }, { a: 1 })).to.be.false;
    expect(isEqual({ a: [ 1, 2 ] }, { a: [ 1, 2 ] })).to.be.true;
    expect(isEqual({ a: [ '1', '2' ] }, { a: [ '1' ] })).to.be.false;
  });
});

describe('isEqualWidth', () => {
  it('isEqualWith with and without fn', () => {
    function isGreeting(value) {
      return /^h(?:i|ello)$/.test(value);
    }
    function fn(objValue, othValue) {
      if (isGreeting(objValue) && isGreeting(othValue)) {
        return true;
      }
    }
    expect(isEqualWith('hello', 'hi', fn)).to.be.true;
    expect(isEqualWith('hello', 'hi')).to.be.false;
  });
});

