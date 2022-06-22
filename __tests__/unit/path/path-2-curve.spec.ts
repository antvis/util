import { path2Curve, PathArray } from '../../../src';
import { getCirclePath } from './util';

describe('test path to curve', () => {
  it('should keep Z', () => {
    const [pathArray, zCommandIndexes] = path2Curve('M 10,10 L -10,0 L 10,-10 Z M 10,10 L -10,0 L 10,-10 Z', true);
    expect(pathArray).toEqual([
      ['M', 10, 10],
      ['C', 10, 10, -3.125, 3.4375, -10, 0],
      ['C', -7.76393202250021, -1.118033988749895, 3.75, -6.875, 10, -10],
      ['C', 10, 0, 10, 3.75, 10, 10],
      ['M', 10, 10],
      ['C', 10, 10, -3.125, 3.4375, -10, 0],
      ['C', -7.76393202250021, -1.118033988749895, 3.75, -6.875, 10, -10],
      ['C', 10, 0, 10, 3.75, 10, 10],
    ]);
    expect(zCommandIndexes).toEqual([3, 7]);
  });

  it('should convert invalid arc', () => {
    const pathArray = path2Curve([
      ['M', 0, 0],
      ['A', 0, 0, 0, 1, 0, 0, 0],
      ['A', 0, 0, 0, 1, 0, 0, 0],
    ]);
    expect(pathArray).toEqual([
      ['M', 0, 0],
      ['C', 0, 0, 0, 0, 0, 0],
      ['C', 0, 0, 0, 0, 0, 0],
    ]);
  });

  it('should parse Line correctly', () => {
    expect(
      path2Curve([
        ['M', 0, 0],
        ['L', 100, 100],
      ]),
    ).toEqual([
      ['M', 0, 0],
      ['C', 44.194173824159215, 44.194173824159215, 68.75, 68.75, 100, 100],
    ]);
  });

  it('should parse Circle correctly', () => {
    expect(path2Curve(getCirclePath(0, 0, 100, 100))).toEqual([
      ['M', -100, 100],
      [
        'C',
        -99.99999999999999,
        176.98003589195008,
        -16.66666666666667,
        225.09255832441892,
        49.999999999999986,
        186.60254037844388,
      ],
      ['C', 80.9401076758503, 168.73926088303568, 100, 135.72655899081636, 100, 100],
      ['C', 100, 23.01996410804992, 16.66666666666668, -25.092558324418903, -49.99999999999998, 13.397459621556123],
      ['C', -80.94010767585029, 31.2607391169643, -100, 64.27344100918364, -100, 100],
      ['C', -100, 100, -100, 100, -100, 100],
    ]);

    const [pathArray, zCommandIndexes] = path2Curve(getCirclePath(0, 0, 100, 100), true);
    expect(pathArray).toEqual([
      ['M', -100, 100],
      [
        'C',
        -99.99999999999999,
        176.98003589195008,
        -16.66666666666667,
        225.09255832441892,
        49.999999999999986,
        186.60254037844388,
      ],
      ['C', 80.9401076758503, 168.73926088303568, 100, 135.72655899081636, 100, 100],
      ['C', 100, 23.01996410804992, 16.66666666666668, -25.092558324418903, -49.99999999999998, 13.397459621556123],
      ['C', -80.94010767585029, 31.2607391169643, -100, 64.27344100918364, -100, 100],
      ['C', -100, 100, -100, 100, -100, 100],
    ]);

    expect(zCommandIndexes).toEqual([5]);
  });

  it('should keep cubic curve unchanged', () => {
    let pathArray = path2Curve([
      ['M', -100, 100],
      [
        'C',
        -99.99999999999999,
        176.98003589195008,
        -16.66666666666667,
        225.09255832441892,
        49.999999999999986,
        186.60254037844388,
      ],
      ['C', 80.9401076758503, 168.73926088303568, 100, 135.72655899081636, 100, 100],
      ['C', 100, 23.01996410804992, 16.66666666666668, -25.092558324418903, -49.99999999999998, 13.397459621556123],
      ['C', -80.94010767585029, 31.2607391169643, -100, 64.27344100918364, -100, 100],
      ['C', -100, 100, -100, 100, -100, 100],
    ]) as PathArray;
    expect(pathArray).toEqual([
      ['M', -100, 100],
      [
        'C',
        -99.99999999999999,
        176.98003589195008,
        -16.66666666666667,
        225.09255832441892,
        49.999999999999986,
        186.60254037844388,
      ],
      ['C', 80.9401076758503, 168.73926088303568, 100, 135.72655899081636, 100, 100],
      ['C', 100, 23.01996410804992, 16.66666666666668, -25.092558324418903, -49.99999999999998, 13.397459621556123],
      ['C', -80.94010767585029, 31.2607391169643, -100, 64.27344100918364, -100, 100],
      ['C', -100, 100, -100, 100, -100, 100],
    ]);

    let zCommandIndexes;
    [pathArray, zCommandIndexes] = path2Curve(
      [
        ['M', -100, 100],
        [
          'C',
          -99.99999999999999,
          176.98003589195008,
          -16.66666666666667,
          225.09255832441892,
          49.999999999999986,
          186.60254037844388,
        ],
        ['C', 80.9401076758503, 168.73926088303568, 100, 135.72655899081636, 100, 100],
        ['C', 100, 23.01996410804992, 16.66666666666668, -25.092558324418903, -49.99999999999998, 13.397459621556123],
        ['C', -80.94010767585029, 31.2607391169643, -100, 64.27344100918364, -100, 100],
        ['C', -100, 100, -100, 100, -100, 100],
      ],
      true,
    ) as [PathArray, number[]];
    expect(pathArray).toEqual([
      ['M', -100, 100],
      [
        'C',
        -99.99999999999999,
        176.98003589195008,
        -16.66666666666667,
        225.09255832441892,
        49.999999999999986,
        186.60254037844388,
      ],
      ['C', 80.9401076758503, 168.73926088303568, 100, 135.72655899081636, 100, 100],
      ['C', 100, 23.01996410804992, 16.66666666666668, -25.092558324418903, -49.99999999999998, 13.397459621556123],
      ['C', -80.94010767585029, 31.2607391169643, -100, 64.27344100918364, -100, 100],
      ['C', -100, 100, -100, 100, -100, 100],
    ]);
    expect(zCommandIndexes).toEqual([]);
  });

  it('should convert camera path', () => {
    expect(
      path2Curve(
        'M2 4a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-6a2 2 0 0 0 -2 -2h-1.172a2 2 0 0 1 -1.414 -0.586l-0.828 -0.828a2 2 0 0 0 -1.414 -0.586h-2.344a2 2 0 0 0 -1.414 0.586l-0.828 0.828a2 2 0 0 1 -1.414 0.586h-1.172zM10.5 8.5a2.5 2.5 0 0 0 -5 0a2.5 2.5 0 1 0 5 0zM2.5 6a0.5 0.5 0 0 1 0 -1a0.5 0.5 0 1 1 0 1zM11.5 8.5a3.5 3.5 0 1 1 -7 0a3.5 3.5 0 0 1 7 0z',
      ),
    ).toEqual([
      ['M', 2, 4],
      ['C', 0.8954305003384135, 4, -1.3527075021963556e-16, 4.8954305003384135, 0, 6],
      ['C', 0, 6, 0, 9.9375, 0, 12],
      ['C', 1.3527075021963556e-16, 13.104569499661586, 0.8954305003384133, 14, 2, 14],
      ['C', 8, 14, 10.25, 14, 14, 14],
      ['C', 15.104569499661586, 14, 16, 13.104569499661586, 16, 12],
      ['C', 16, 9, 16, 7.875, 16, 6],
      ['C', 16, 4.8954305003384135, 15.104569499661586, 4, 14, 4],
      ['C', 13.414, 4, 13.194249999999998, 4, 12.828, 4],
      ['C', 12.297611001580538, 3.999886244231009, 11.788985018308267, 3.7890983052869243, 11.414, 3.414],
      ['C', 11, 3, 10.84475, 2.8447500000000003, 10.586, 2.5860000000000003],
      ['C', 10.211014981691733, 2.2109016947130766, 9.702388998419462, 2.0001137557689916, 9.172, 2.0000000000000004],
      ['C', 8, 2.0000000000000004, 7.560500000000001, 2.0000000000000004, 6.828000000000001, 2.0000000000000004],
      [
        'C',
        6.29761100158054,
        2.000113755768992,
        5.788985018308269,
        2.210901694713076,
        5.4140000000000015,
        2.5860000000000003,
      ],
      ['C', 5.000000000000002, 3, 4.844750000000001, 3.1552499999999997, 4.586000000000001, 3.414],
      ['C', 4.211014981691734, 3.7890983052869243, 3.7023889984194627, 3.9998862442310084, 3.1720000000000015, 4],
      ['C', 2.5860000000000016, 4, 2.3662500000000017, 4, 2.0000000000000018, 4],
      ['C', 2.000000000000001, 4, 2.000000000000001, 4, 2, 4],
      ['M', 10.5, 8.5],
      ['C', 10.5, 6.575499102701247, 8.416666666666666, 5.372686041889527, 6.75, 6.334936490538903],
      ['C', 5.976497308103742, 6.781518477924107, 5.5, 7.606836025229591, 5.5, 8.5],
      ['C', 5.5, 10.424500897298753, 7.583333333333334, 11.627313958110474, 9.25, 10.665063509461097],
      ['C', 10.023502691896258, 10.218481522075892, 10.5, 9.39316397477041, 10.5, 8.5],
      ['C', 10.5, 8.5, 10.5, 8.5, 10.5, 8.5],
      ['M', 2.5, 6],
      ['C', 2.1150998205402494, 6, 1.8745372083779053, 5.583333333333333, 2.0669872981077804, 5.25],
      ['C', 2.156303695584821, 5.0952994616207485, 2.321367205045918, 5, 2.5, 5],
      ['C', 2.8849001794597506, 5, 3.1254627916220943, 5.416666666666667, 2.933012701892219, 5.75],
      ['C', 2.8436963044151784, 5.9047005383792515, 2.678632794954082, 6, 2.5, 6],
      ['C', 2.5, 6, 2.5, 6, 2.5, 6],
      ['M', 11.5, 8.5],
      ['C', 11.5, 11.194301256218253, 8.583333333333334, 12.878239541354663, 6.250000000000001, 11.531088913245537],
      ['C', 5.167096231345241, 10.90587413090625, 4.5, 9.750429564678573, 4.5, 8.5],
      ['C', 4.5, 5.805698743781747, 7.416666666666667, 4.121760458645338, 9.75, 5.468911086754464],
      ['C', 10.832903768654761, 6.094125869093751, 11.5, 7.249570435321427, 11.5, 8.5],
      ['C', 11.5, 8.5, 11.5, 8.5, 11.5, 8.5],
    ]);
  });
});
