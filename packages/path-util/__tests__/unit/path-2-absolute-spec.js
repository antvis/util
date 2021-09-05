const expect = require('chai').expect;
import * as PathUtil from '../../src';

describe('test path to absolute', () => {
  it('m, l, h, v', () => {
    const str = [ [ 'M', 10, 10 ], [ 'L', 100, 100 ], [ 'l', 10, 10 ], [ 'h', 20 ], [ 'v', 20 ] ];
    const arr = PathUtil.path2Absolute(str);
    expect(arr).eqls([ [ 'M', 10, 10 ], [ 'L', 100, 100 ], [ 'L', 110, 110 ], [ 'L', 130, 110 ], [ 'L', 130, 130 ] ]);
    // 如果已经是 absolute 不再转换
    expect(PathUtil.path2Absolute(arr)).equal(arr);
  });

  it('c, q', () => {
    const str = 'M 10 10 q 20 20 30 30 c 35 35 45 43 50 50 z';
    const arr = PathUtil.path2Absolute(str);
    expect(arr).eqls([
      [ 'M', 10, 10 ],
      [ 'Q', 30, 30, 40, 40 ],
      [ 'C', 75, 75, 85, 83, 90, 90 ],
      [ 'Z' ]
    ]);
  });

  it('a', () => {
    const str = 'M 10, 10 a 20, 20, 0, 0, 0, 30, 30 A 30 30 0 0 1 50 50';
    const arr = PathUtil.path2Absolute(str);
    expect(arr).eqls([
      [ 'M', 10, 10 ],
      [ 'A', 20, 20, 0, 0, 0, 40, 40 ],
      [ 'A', 30, 30, 0, 0, 1, 50, 50 ]
    ]);
  });

  it('s', () => {
    const str1 = 'M10 80 Q 52.5 10, 95 80 T 180 80';
    const str2 = 'M10 80 Q 52.5 10, 95 80 Q 137.5 150 180 80';
    expect(PathUtil.path2Absolute(str1)).eqls(PathUtil.path2Absolute(str2));
  });

  it('t', () => {
    const str1 = 'M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80';
    const str2 = 'M10 80 C 40 10, 65 10, 95 80  C 125 150, 150 150, 180 80';
    expect(PathUtil.path2Absolute(str1)).eqls(PathUtil.path2Absolute(str2));
  });

  it('m', () => {
    const str = [ [ 'M', 10, 10 ], [ 'm', 10, 10 ], [ 'L', 100, 100 ], [ 'l', 10, 10 ], [ 'h', 20 ], [ 'v', 20 ] ];
    const arr = PathUtil.path2Absolute(str);
    expect(arr).eqls([ [ 'M', 10, 10 ], [ 'M', 20, 20 ], [ 'L', 100, 100 ], [ 'L', 110, 110 ], [ 'L', 130, 110 ], [ 'L', 130, 130 ] ]);
  });

});
