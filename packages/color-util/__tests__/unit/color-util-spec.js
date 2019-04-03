const expect = require('chai').expect;
import colorUtil from '../../src/';

describe('color util test', function() {
  it('color to rgb', () => {
    expect(colorUtil.toRGB('red')).equal('#ff0000');
    expect(colorUtil.toRGB('white')).equal('#ffffff');
    expect(colorUtil.toRGB('#ddd')).equal('#dddddd');
    expect(colorUtil.toRGB('#eeeeee')).equal('#eeeeee');
  });
  it('color to rgb with rgb(r,g,b)', () => {
    expect(colorUtil.toRGB('rgb(255,0, 0)')).equal('#ff0000');
    expect(colorUtil.toRGB('rgba(255,0, 0, 1)')).equal('#ff0000');
  });

  it('gradient white black', () => {
    const gradient = colorUtil.gradient([ 'white', 'black' ]);
    expect(gradient(0)).equal('#ffffff');
    expect(gradient(1)).equal('#000000');
    expect(gradient(0.5)).equal('#808080');
  });

  it('gradient red blue', () => {
    const gradient = colorUtil.gradient([ 'red', 'blue' ]);
    expect(gradient(0)).equal('#ff0000');
    expect(gradient(-0.1)).equal('#ff0000'); // negative number
    expect(gradient(1)).equal('#0000ff');
    expect(gradient(1.2)).equal('#0000ff'); // larger than 1
    expect(gradient(0.5)).equal('#800080');
  });
});
