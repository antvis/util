const expect = require('chai').expect;
import * as PathUtil from '../../src';

function getCirclePath(cx, cy, rx, ry) {
  return [
    // ['M', cx, cy - ry],
    // ['A', rx, ry, 0, 1, 1, cx, cy + ry],
    // ['A', rx, ry, 0, 1, 1, cx, cy - ry],
    ['M', cx - rx, ry],
    ['A', rx, ry, 0, 1, 0, cx + rx, ry],
    ['A', rx, ry, 0, 1, 0, cx - rx, ry],
    ['Z'],
  ];
}

describe('test path to curve', () => {
  it('should parse Line correctly', () => {
    expect(PathUtil.path2Curve([
      [ 'M', 0, 0 ],
      [ 'L', 100, 100],
    ])).eqls([
      [ 'M', 0, 0 ],
      [ 'C', 50.390625, 50.390625, 65.625, 65.625, 100, 100],
    ]);
  });

  it('should parse Circle correctly', () => {
    expect(PathUtil.path2Curve(getCirclePath(0, 0, 100, 100))).eqls([
      [ 'M', -100, 100 ],
      [ 'C', -99.99999999999999, 176.98003589195008, -16.66666666666667, 225.09255832441892, 49.999999999999986, 186.60254037844388],
      [ 'C', 80.9401076758503, 168.73926088303568, 100, 135.72655899081636, 100, 100],
      [ 'C', 100, 23.01996410804992, 16.66666666666668, -25.092558324418903, -49.99999999999998, 13.397459621556123],
      [ 'C', -80.94010767585029, 31.2607391169643, -100, 64.27344100918364, -100, 100],
      [ 'C', -100, 100, -100, 100, -100, 100],
    ]);
  });
});
