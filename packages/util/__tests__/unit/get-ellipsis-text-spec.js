const expect = require('chai').expect;
import { getEllipsisText } from '../../src';

const FONT_STYLE = { fontSize: 10, fontFamily: 'serif' };


describe('getEllipsisText', () => {
  it('eng', () => {
    const eng = 'test text test text';
    expect(getEllipsisText(eng, 20, FONT_STYLE)).to.be.equal('tes...');
    expect(getEllipsisText(eng, 40, FONT_STYLE)).to.be.equal('test text...');
    expect(getEllipsisText(eng, 60, FONT_STYLE)).to.be.equal('test text test t...');
    expect(getEllipsisText(eng, 120, FONT_STYLE)).to.be.equal('test text test text');
  });

  it('han', () => {
    const han = '汉字测试文本';
    expect(getEllipsisText(han, 20, FONT_STYLE)).to.be.equal('汉...');
    expect(getEllipsisText(han, 40, FONT_STYLE)).to.be.equal('汉字测...');
    expect(getEllipsisText(han, 60, FONT_STYLE)).to.be.equal('汉字测试文本');
    expect(getEllipsisText(han, 120, FONT_STYLE)).to.be.equal('汉字测试文本');

    expect(getEllipsisText(han, 19, FONT_STYLE)).to.be.equal('汉...');
    expect(getEllipsisText(han, 39, FONT_STYLE)).to.be.equal('汉字测...');
    expect(getEllipsisText(han, 59, FONT_STYLE)).to.be.equal('汉字测试文...');
    expect(getEllipsisText(han, 120, FONT_STYLE)).to.be.equal('汉字测试文本');
  });
});
