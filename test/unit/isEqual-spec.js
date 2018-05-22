const expect = require('chai').expect;
const isEqual = require('../../src/isEqual');

describe('compare arrays', () => {
  it('原始类型数组', () => {
    expect(isEqual()).to.be.true;
    expect(isEqual([ 1, 2 ], [ 1, 2 ])).to.be.true;
    expect(isEqual([ 1, 2 ], [ 1, 3 ])).to.be.false;
    expect(isEqual([ 1, 2 ], [ 1, 2, 3 ])).to.be.false;
    expect(isEqual([ '1', '2' ], [ '1', '2' ])).to.be.true;
    expect(isEqual([ '1', '12' ], [ '1' ])).to.be.false;
    expect(isEqual([ 1, 2 ], [ 1, 2, 3 ])).to.be.false;
  });
  it('对象数组', () => {
    expect(isEqual([{ a: 1 }], [{ a: 1 }])).to.be.true;
    expect(isEqual([{ a: 111 }, { a: 222 }], [{ a: 111 }, { a: 222 }])).to.be.true;
    expect(isEqual([{ a: 11, b: 22 }, { a: 11, c: 22 }])).to.be.false;
  });
  it('空数组', () => {
    expect(isEqual([], [])).to.be.true;
    expect(isEqual([ null ], [ null ])).to.be.true;
    expect(isEqual([ undefined ], [ NaN ])).to.be.false;
  });
});

describe('compare objects', () => {
  expect(isEqual({}, {})).to.be.true;
  expect(isEqual({ a: 111 }, { a: 111 })).to.be.true;
  expect(isEqual({ a: 1, b: 2 }, { a: 1 })).to.be.false;
  expect(isEqual({ a: [ 1, 2 ] }, { a: [ 1, 2 ] })).to.be.true;
  expect(isEqual({ a: [ '1', '2' ] }, { a: [ '1' ] })).to.be.false;
});
