const expect = require('chai').expect;
import * as PathUtil from '../../src';

describe('test path to absolute', () => {
  it('m, l, h, v', () => {
    const str = [ [ 'M', 10, 10 ], [ 'L', 100, 100 ], [ 'l', 10, 10 ], [ 'h', 20 ], [ 'v', 20 ] ];
    const arr = PathUtil.path2Absolute(str);
    expect(arr).eqls([ [ 'M', 10, 10 ], [ 'L', 100, 100 ], [ 'L', 110, 110 ], [ 'H', 130 ], [ 'V', 130 ] ]);
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

});
