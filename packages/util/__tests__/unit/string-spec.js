const expect = require('chai').expect;
import * as strUtil from '../../src';

describe('string utils', () => {
  it('lc & lowercase', () => {
    // expect(strUtil.lc('aBc')).to.equal('abc');
    // expect(strUtil.lc('abc')).to.equal('abc');
    expect(strUtil.lowerCase([ 'Abc', 'DEf' ])).to.equal('abc,def');
  });

  it('lowerFirst', () => {
    expect(strUtil.lowerFirst('ABC')).to.equal('aBC');
    expect(strUtil.lowerFirst('abc')).to.equal('abc');
  });

  it('uc & upperCase', () => {
    // expect(strUtil.uc('aBc')).to.equal('ABC');
    // expect(strUtil.uc('ABC')).to.equal('ABC');
    expect(strUtil.upperCase([ 'Abc', 'dEF' ])).to.equal('ABC,DEF');
  });

  it('upperFirst', () => {
    expect(strUtil.upperFirst('abc')).to.equal('Abc');
    expect(strUtil.upperFirst('AbC')).to.equal('AbC');
  });

  it('substitute', () => {
    expect(strUtil.substitute('hello {value}', { value: 'world' })).to.equal('hello world');
  });
});
