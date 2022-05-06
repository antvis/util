import { catmullRom2Bezier } from '../../../src';

describe('catmullRom2Bezier', () => {
  it('test one node', () => {
    const data = [[10, 10]];
    expect(catmullRom2Bezier(data.flat())).toEqual([]);
  });

  it('test nodes', () => {
    const data = [
      [10, 10],
      [20, 20],
      [30, 10],
      [40, 20],
      [50, 10],
      [60, 20],
      [70, 10],
    ];
    expect(catmullRom2Bezier(data.flat())).toEqual([
      ['C', 10, 10, 16, 20, 20, 20],
      ['C', 24, 20, 26, 10, 30, 10],
      ['C', 34, 10, 36, 20, 40, 20],
      ['C', 44, 20, 46, 10, 50, 10],
      ['C', 54, 10, 56, 20, 60, 20],
      ['C', 64, 20, 70, 10, 70, 10],
    ]);
  });

  // 锐角
  it('test sharp angle', () => {
    const data0 = [
      [0, 0],
      [10, 100],
      [20, -100],
    ];
    const data1 = [
      [0, 0],
      [10, -100],
      [20, 100],
    ];
    const data2 = [
      [0, 0],
      [10, 100],
      [20, 130],
      [30, 0],
    ];
    const data3 = [
      [0, 0],
      [10, -100],
      [20, -130],
      [30, 0],
    ];

    expect(catmullRom2Bezier(data0.flat())).toEqual([
      ['C', 0, 0, 7.326703933876807, 100, 10, 100],
      ['C', 15.326703933876807, 100, 20, -100, 20, -100],
    ]);

    expect(catmullRom2Bezier(data1.flat())).toEqual([
      ['C', 0, 0, 7.326703933876807, -100, 10, -100],
      ['C', 15.326703933876807, -100, 20, 100, 20, 100],
    ]);

    expect(catmullRom2Bezier(data2.flat())).toEqual([
      ['C', 0, 0, 3.9147689814629816, 60.445998379509376, 10, 100],
      ['C', 11.91476898146298, 112.44599837950938, 18.43844718719117, 130, 20, 130],
      ['C', 26.43844718719117, 130, 30, 0, 30, 0],
    ]);

    expect(catmullRom2Bezier(data3.flat())).toEqual([
      ['C', 0, 0, 3.9147689814629816, -60.445998379509376, 10, -100],
      ['C', 11.91476898146298, -112.44599837950938, 18.43844718719117, -130, 20, -130],
      ['C', 26.43844718719117, -130, 30, 0, 30, 0],
    ]);
  });

  // 钝角
  it('test obtuse angle', () => {
    const data0 = [
      [0, 0],
      [10, 5],
      [20, 0],
      [30, -5],
      [40, 0],
    ];
    const data1 = [
      [0, 0],
      [10, 5],
      [20, 5],
      [30, 0],
      [40, 0],
      [50, -5],
      [60, -5],
      [70, 0],
    ];

    expect(catmullRom2Bezier(data0.flat())).toEqual([
      ['C', 0, 0, 6, 5, 10, 5],
      ['C', 14, 5, 16, 2, 20, 0],
      ['C', 24, -2, 26, -5, 30, -5],
      ['C', 34, -5, 40, 0, 40, 0],
    ]);

    expect(catmullRom2Bezier(data1.flat())).toEqual([
      ['C', 0, 0, 5.777087639996635, 5, 10, 5],
      ['C', 13.777087639996635, 5, 16.222912360003367, 5, 20, 5],
      ['C', 24.222912360003363, 5, 25.777087639996633, 0, 30, 0],
      ['C', 33.77708763999664, 0, 36.22291236000336, 0, 40, 0],
      ['C', 44.22291236000336, 0, 45.77708763999664, -5, 50, -5],
      ['C', 53.77708763999664, -5, 56.22291236000336, -5, 60, -5],
      ['C', 64.22291236000336, -5, 70, 0, 70, 0],
    ]);
  });

  // 环路
  it('test loop', () => {
    const data = [
      [0, 0],
      [100, 0],
      [100, 100],
      [0, 100],
      [0, 0],
    ];
    expect(catmullRom2Bezier(data.flat())).toEqual([
      ['C', 0, 0, 100, 0, 100, 0],
      ['C', 100, 0, 100, 100, 100, 100],
      ['C', 100, 100, 0, 100, 0, 100],
      ['C', 0, 100, 0, 0, 0, 0],
    ]);
  });

  // 交叉
  it('test cross', () => {
    const data = [
      [0, 0],
      [100, 100],
      [100, 0],
      [0, 100],
    ];
    expect(catmullRom2Bezier(data.flat())).toEqual([
      ['C', 0, 0, 100, 100, 100, 100],
      ['C', 100, 100, 100, 0, 100, 0],
      ['C', 100, 0, 0, 100, 0, 100],
    ]);
  });

  // 环路交叉
  it('test loop cross', () => {
    const data = [
      [-10, -20],
      [10, 20],
      [30, -20],
      [50, 20],
      [-10, -20],
    ];
    expect(catmullRom2Bezier(data.flat())).toEqual([
      ['C', -10, -20, 2, 20, 10, 20],
      ['C', 18, 20, 22, -20, 30, -20],
      ['C', 38, -20, 50, 20, 50, 20],
      ['C', 50, 20, -10, -20, -10, -20],
    ]);
  });

  // 无溢出
  it('test no overflow', () => {
    function random(min, max) {
      const range = max - min;
      const rand = Math.random();
      return min + Math.floor(rand * range);
    }
    const data = Array.from({ length: 900 }, (v, idx) => [idx * 10, random(0, 1000)]);
    catmullRom2Bezier(data.flat()).forEach(([, , , , , , y]) => {
      expect(y).toBeLessThanOrEqual(1000);
      expect(y).toBeGreaterThanOrEqual(0);
    });

    // TODO 严格意义上，需要计算曲线拐点
    // 可参考：https://stackoverflow.com/questions/35901079/calculating-the-inflection-point-of-a-cubic-bezier-curve
  });

  // 自定义控制点
  it('test constraint', () => {
    // TODO
  });
});
