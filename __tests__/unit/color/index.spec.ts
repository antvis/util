import { gradient, toCSSGradient, toRGB } from '../../../src';

describe('color', function () {
  let mockGetComputedStyle;
  beforeAll(() => {
    const colorMap = {
      red: 'rgb(255, 0, 0)',
      white: 'rgb(255, 255, 255)',
      black: 'rgb(0, 0, 0)',
      blue: 'rgb(0, 0, 255)',
      '#ddd': 'rgb(221, 221, 221)',
      '#eeeeee': 'rgb(238, 238, 238)',
    };

    // implement document defaultView getComputedStyle getPropertyValue in jsdom
    mockGetComputedStyle = jest.spyOn(document.defaultView!, 'getComputedStyle').mockImplementation(
      (el) =>
        ({
          getPropertyValue: () => {
            const color = (el as HTMLElement).style.color;
            return colorMap[color] || color;
          },
        }) as any,
    );
  });

  afterAll(() => {
    mockGetComputedStyle?.mockRestore();
  });

  it('toRGB', () => {
    expect(toRGB('red')).toBe('#ff0000');
    expect(toRGB('white')).toBe('#ffffff');
    expect(toRGB('#ddd')).toBe('#dddddd');
    expect(toRGB('#eeeeee')).toBe('#eeeeee');

    expect(toRGB('rgb(255,0, 0)')).toBe('#ff0000');
    expect(toRGB('rgba(255,0, 0, 1)')).toBe('#ff0000');
  });

  it('gradient', () => {
    let gf = gradient(['white', 'black']);
    expect(gf(0)).toBe('#ffffff');
    expect(gf(1)).toBe('#000000');
    expect(gf(0.5)).toBe('#808080');

    gf = gradient(['red', 'blue']);
    expect(gf(0)).toBe('#ff0000');
    expect(gf(-0.1)).toBe('#ff0000'); // negative number
    expect(gf(1)).toBe('#0000ff');
    expect(gf(1.2)).toBe('#0000ff'); // larger than 1
    expect(gf(0.5)).toBe('#800080');
  });

  it('toCSSGradient', () => {
    const linearGradient = toCSSGradient('l(90) 0:#ffffff 0.5:#7ec2f3 1:#1890ff');
    expect(linearGradient).toBe('linear-gradient(180deg, #ffffff 0%, #7ec2f3 50%, #1890ff 100%)');

    const radialGradient = toCSSGradient('r(0.5, 0.5, 0.1) 0:#ffffff 0.3:#7ec2f3 1:#1890ff');
    expect(radialGradient).toBe('radial-gradient(#ffffff 0%, #7ec2f3 30%, #1890ff 100%)');

    expect(toCSSGradient('#1890ff')).toBe('#1890ff');
  });
});
