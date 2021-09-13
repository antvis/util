const expect = require('chai').expect;
import { measureTextWidth } from '../../src';

const FONT_STYLE = { fontSize: 10, fontFamily: 'serif' };

describe('measureTextWidth', () => {
  it('eng', () => {
    expect(measureTextWidth('test text', FONT_STYLE)).to.be.closeTo(32, 2);
    expect(measureTextWidth('test text test text', FONT_STYLE)).to.be.closeTo(67, 2);
  });

  it('han', () => {
    expect(measureTextWidth('汉字', FONT_STYLE)).to.be.equal(20);
    expect(measureTextWidth('汉字测试文本', FONT_STYLE)).to.be.equal(60);
  });
});
