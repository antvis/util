const expect = require('chai').expect;
import { path2Segments } from '../../src';

describe('test path to segements', () => {
  it('M L', () => {
    const segs = path2Segments('M 10 10 L 100 100');
    expect(segs.length).eql(2);
    expect(segs[1].currentPoint).eqls([ 100, 100 ]);
  });

  it('get segments', () => {
    const p1 = [ [ 'M', 1, 1 ], [ 'L', 2, 2 ] ];
    const p2 = [ [ 'M', 1, 1 ], [ 'Q', 2, 2, 3, 3 ] ];
    // const p3 = [['M', 1, 1], ['L', 2, 2], ['C', 3, 3, 4, 4, 5, 5]];
    const p4 = [ [ 'M', 1, 1 ], [ 'L', 2, 2 ], [ 'A', 3, 3, 0, 1, 1, 8, 8 ], [ 'Z' ], [ 'M', 20, 20 ], [ 'L', 30, 30 ] ];
    const seg1 = path2Segments(p1);
    expect(seg1.length).eqls(p1.length);
    expect(seg1[0].command).eqls('M');
    expect(seg1[1].command).eqls('L');
    expect(seg1[0].currentPoint).eqls([ 1, 1 ]);
    expect(seg1[1].prePoint).eqls([ 1, 1 ]);
    expect(seg1[1].currentPoint).eqls([ 2, 2 ]);
    const seg2 = path2Segments(p2);
    expect(seg2[1].prePoint).eqls([ 1, 1 ]);
    expect(seg2[1].currentPoint).eqls([ 3, 3 ]);
    const seg4 = path2Segments(p4);
    expect(seg4.length).eqls(p4.length);
    expect(seg4[3].command).eqls('Z');
    expect(seg4[3].prePoint).eqls([ 8, 8 ]);
    expect(seg4[3].currentPoint).eqls([ 1, 1 ]);
  });
});
