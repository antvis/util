const expect = require('chai').expect;
import * as checkType from '../../src';

describe('type util', () => {
  it('getType', () => {
    expect(checkType.getType([])).to.equal('Array');
    expect(checkType.getType({})).to.equal('Object');
    expect(checkType.getType(new Set())).to.equal('Set');
    expect(checkType.getType(new Map())).to.equal('Map');
    expect(checkType.getType(null)).to.equal('Null');
  });

  it('isArray', () => {
    expect(checkType.isArray([])).to.be.true;
    expect(checkType.isArray({})).to.be.false;
    function a() {
      expect(checkType.isArray(arguments)).to.be.false;
    }
    a();
  });

  it('isArrayLike', () => {
    expect(checkType.isArrayLike([ {} ])).to.be.true;
    expect(checkType.isArrayLike({})).to.be.false;
    function a() {
      expect(checkType.isArrayLike(arguments)).to.be.true;
    }
    a();
  });

  it('isBoolean', () => {
    expect(checkType.isBoolean(true)).to.be.true;
    expect(checkType.isBoolean('true')).to.be.false;
    expect(checkType.isBoolean(null)).to.be.false;
  });

  it('isFunction', () => {
    expect(checkType.isFunction(Function)).to.be.true;
    expect(checkType.isFunction(function() {})).to.be.true;
    expect(checkType.isFunction({})).to.be.false;
  });

  it('isFinite', () => {
    expect(checkType.isFinite(3)).to.be.true;
    expect(checkType.isFinite(Number.MIN_VALUE)).to.be.true;
    expect(checkType.isFinite('3')).to.be.false;
    expect(checkType.isFinite(true)).to.be.false;
    expect(checkType.isFinite({})).to.be.false;
    expect(checkType.isFinite([ 1, 2, 3 ])).to.be.false;
    expect(checkType.isFinite(Infinity)).to.be.false;
  });

  it('isNil', () => {
    expect(checkType.isNil(undefined)).to.be.true;
    expect(checkType.isNil(null)).to.be.true;
    expect(checkType.isNil(NaN)).to.be.false;
    expect(checkType.isNil(1)).to.be.false;
  });

  it('isNull', () => {
    expect(checkType.isNull(null)).to.be.true;
    expect(checkType.isNull()).to.be.false;
  });

  it('isNumer', () => {
    expect(checkType.isNumber(12)).to.be.true;
    expect(checkType.isNumber('12')).to.be.false;
    expect(checkType.isNumber(NaN)).to.be.true;
  });

  const a = function() {};

  it('isObject', () => {
    expect(checkType.isObject(Object)).to.be.true;
    expect(checkType.isObject({})).to.be.true;
    expect(checkType.isObject(new a())).to.be.true;
    expect(checkType.isObject(null)).to.be.false;
    expect(checkType.isObject(1)).to.be.false;
  });

  it('isObjectLike', () => {
    expect(checkType.isObjectLike({})).to.be.true;
    expect(checkType.isObjectLike([ 1, 2, 3 ])).to.be.true;
    expect(checkType.isObjectLike(a)).to.be.false;
    expect(checkType.isObjectLike(null)).to.be.false;
  });

  it('isPlaineObject', () => {
    expect(checkType.isPlainObject(new a())).to.be.false;
    expect(checkType.isPlainObject([ 1, 2 ])).to.be.false;
    expect(checkType.isPlainObject({})).to.be.true;
    expect(checkType.isPlainObject(null)).to.be.false;
    expect(checkType.isPlainObject(Object.create(null))).to.be.true;
  });

  it('isPrototype', () => {
    expect(checkType.isPrototype()).to.be.false;
    expect(checkType.isPrototype(new a())).to.be.false;
    expect(checkType.isPrototype(Object.prototype)).to.be.true;
  });

  it('isUndefined', () => {
    expect(checkType.isUndefined()).to.be.true;
    expect(checkType.isUndefined(undefined)).to.be.true;
    expect(checkType.isUndefined(null)).to.be.false;
    expect(checkType.isUndefined(false)).to.be.false;
  });
});
