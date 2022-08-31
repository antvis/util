import { getPointAtLength, PathArray } from '../../../src';
import { parsePathString } from '../../../src/path/parser/parse-path-string';

describe('get point at length', () => {
  it('should get point in rounded rect correctly', () => {
    const segments = parsePathString('M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z') as PathArray;
    const pt = getPointAtLength(segments, 25);
    expect(pt).toEqual({ x: 8.723272341772404, y: 16 });
  });

  it('should get point in arc correctly', () => {
    const segments = parsePathString('M2 0A2 2 0 00 2 0') as PathArray;
    let pt = getPointAtLength(segments, 0);
    expect(pt).toEqual({ x: 2, y: 0 });

    pt = getPointAtLength(segments, 1000);
    expect(pt).toEqual({ x: 2, y: 0 });
  });

  it('should get point in quad bezier correctly', () => {
    const segments = parsePathString('M168 250 Q113 250 58 250') as PathArray;

    let pt = getPointAtLength(segments, 0);
    expect(pt).toEqual({ x: 168, y: 250 });

    pt = getPointAtLength(segments, 55);
    expect(pt).toEqual({ x: 113, y: 250 });

    pt = getPointAtLength(segments, 110);
    expect(pt).toEqual({ x: 58, y: 250 });
  });
});
