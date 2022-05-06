import { path2Segments } from '../../../src';

describe('test path to segements', () => {
  it('M L', () => {
    const segs = path2Segments('M 10 10 L 100 100');
    expect(segs.length).toEqual(2);
    expect(segs[1].currentPoint).toEqual([ 100, 100 ]);
  });

  it('get segments', () => {
    const p1 = [ [ 'M', 1, 1 ], [ 'L', 2, 2 ] ];
    const p2 = [ [ 'M', 1, 1 ], [ 'Q', 2, 2, 3, 3 ] ];
    // const p3 = [['M', 1, 1], ['L', 2, 2], ['C', 3, 3, 4, 4, 5, 5]];
    const p4 = [ [ 'M', 1, 1 ], [ 'L', 2, 2 ], [ 'A', 3, 3, 0, 1, 1, 8, 8 ], [ 'Z' ], [ 'M', 20, 20 ], [ 'L', 30, 30 ] ];
    const seg1 = path2Segments(p1);
    expect(seg1.length).toEqual(p1.length);
    expect(seg1[0].command).toEqual('M');
    expect(seg1[1].command).toEqual('L');
    expect(seg1[0].currentPoint).toEqual([ 1, 1 ]);
    expect(seg1[1].prePoint).toEqual([ 1, 1 ]);
    expect(seg1[1].currentPoint).toEqual([ 2, 2 ]);
    const seg2 = path2Segments(p2);
    expect(seg2[1].prePoint).toEqual([ 1, 1 ]);
    expect(seg2[1].currentPoint).toEqual([ 3, 3 ]);
    const seg4 = path2Segments(p4);
    expect(seg4.length).toEqual(p4.length);
    expect(seg4[3].command).toEqual('Z');
    expect(seg4[3].prePoint).toEqual([ 8, 8 ]);
    expect(seg4[3].currentPoint).toEqual([ 1, 1 ]);
  });

  it('endTangent should be correct', () => {
    const p = [ [ 'M', 150, 50 ], [ 'A', 509.99999999999983, 509.99999999999983, 0, 0, 1, 350, 250 ] ];
    const segments = path2Segments(p);
    expect(segments[0].startTangent).toEqual(null);
    expect(segments[0].endTangent).toEqual(null);
    expect(segments[1].startTangent).toEqual([ -0.44660548951873125, -0.24625904055812953 ]);
    expect(segments[1].endTangent).toEqual([ 245.97232286640832, 63.51742221861292 ]);
  });

  it('should calc startTangent of a horizontal line instead of [0,0]', () => {
    const p = 'M 100,100 C 100,100, 100, 100, 200, 200';
    const segments = path2Segments(p);
    expect(segments[0].startTangent).toEqual(null);
    expect(segments[0].endTangent).toEqual(null);
    expect(segments[1].startTangent).toEqual([0, 0]);
    expect(segments[1].endTangent).toEqual([100, 100]);
  });
});
