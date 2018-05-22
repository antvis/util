const expect = require('chai').expect;
const mathUtil = require('../../src/math');

describe('math util', () => {
  it('clamp', () => {
    const min = 5;
    const max = 15;
    expect(mathUtil.clamp(1, min, max)).to.equal(5);
    expect(mathUtil.clamp(10, min, max)).to.equal(10);
    expect(mathUtil.clamp(20, min, max)).to.equal(15);
  });

  it('isDecimal', () => {
    expect(mathUtil.isDecimal(12.5)).to.be.true;
    expect(mathUtil.isDecimal(0)).to.be.false;
    expect(mathUtil.isDecimal(5)).to.be.false;
  });

  it('isEven', () => {
    expect(mathUtil.isEven(0)).to.be.true;
    expect(mathUtil.isEven(1)).to.be.false;
    expect(mathUtil.isEven(-1)).to.be.false;
  });

  it('isFinite', () => {
    expect(mathUtil.isFinite(1)).to.be.true;
    expect(mathUtil.isFinite(NaN)).to.be.false;
  });

  it('isNaN', () => {
    expect(mathUtil.isNaN(0)).to.be.false;
    expect(mathUtil.isNaN(NaN)).to.be.true;
  });

  it('isNegative', () => {
    expect(mathUtil.isNegative(0)).to.be.false;
    expect(mathUtil.isNegative(11)).to.be.false;
    expect(mathUtil.isNegative(1.1)).to.be.false;
    expect(mathUtil.isNegative(-1)).to.be.true;
    expect(mathUtil.isNegative(-2.1)).to.be.true;
  });

  it('isNumberEqual', () => {
    expect(mathUtil.isNumberEqual(0, 0)).to.be.true;
    expect(mathUtil.isNumberEqual(0, 0.000005)).to.be.true;
    expect(mathUtil.isNumberEqual(0, 1)).to.be.false;
    expect(mathUtil.isNumberEqual(0, NaN)).to.be.false;
    expect(mathUtil.isNumberEqual(0, undefined)).to.be.false;
  });

  it('isOdd', () => {
    expect(mathUtil.isOdd(0)).to.be.false;
    expect(mathUtil.isOdd(1)).to.be.true;
    expect(mathUtil.isOdd(-1)).to.be.true;
  });

  it('isPositive', () => {
    expect(mathUtil.isPositive(0)).to.be.false;
    expect(mathUtil.isPositive(1)).to.be.true;
    expect(mathUtil.isPositive(-1)).to.be.false;
    expect(mathUtil.isPositive(NaN)).to.be.false;
  });

  it('mod', () => {
    expect(mathUtil.mod(5, 2)).to.equal(1);
    expect(mathUtil.mod(-5, 2)).to.equal(1);
    expect(mathUtil.mod(5, -2)).to.equal(-1);
  });

  it('toFloat', () => {
    expect(mathUtil.toFloat('123.45')).to.equal(123.45);
    expect(mathUtil.toFloat('0')).to.equal(0);
    expect(isNaN(mathUtil.toFloat('NaN'))).to.be.true;
  });

  it('toDegree', () => {
    expect(mathUtil.toDegree(1)).to.equal(180 / Math.PI * 1);
  });

  it('toInt', () => {
    expect(mathUtil.toInt('123.45')).to.equal(123);
    expect(mathUtil.toInt('-3.4')).to.equal(-3);
    expect(isNaN(mathUtil.toInt('NaN'))).to.be.true;
  });

  it('toRadian', () => {
    expect(mathUtil.toRadian(45)).to.equal(Math.PI / 180 * 45);
  });
});
