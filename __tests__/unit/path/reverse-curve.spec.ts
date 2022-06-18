import { CurveArray, reverseCurve } from '../../../src';

describe('reverse curve', () => {
  it('should reverse curve correctly', () => {
    const pathArray: CurveArray = [
      ['M', 170, 90],
      ['C', 150, 90, 155, 10, 130, 10],
      ['C', 105, 10, 110, 90, 90, 90],
      ['C', 70, 90, 75, 10, 50, 10],
      ['C', 25, 10, 30, 90, 10, 90],
    ];

    const reversed = reverseCurve(pathArray);
    expect(reversed).toEqual([
      ['M', 10, 90],
      ['C', 30, 90, 25, 10, 50, 10],
      ['C', 75, 10, 70, 90, 90, 90],
      ['C', 110, 90, 105, 10, 130, 10],
      ['C', 155, 10, 150, 90, 170, 90],
    ]);
  });
});
