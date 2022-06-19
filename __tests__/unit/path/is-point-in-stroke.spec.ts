import { isPointInStroke, PathArray } from '../../../src';
import { parsePathString } from '../../../src/path/parser/parse-path-string';

describe('is point in stroke', () => {
  it('should check is point in stroke correctly', () => {
    const segments = parsePathString('M10 90C30 90 25 10 50 10s20 80 40 80s15 -80 40 -80s20 80 40 80') as PathArray;
    expect(isPointInStroke(segments, { x: 10, y: 90 })).toBeTruthy();
    // expect(isPointInStroke(segments, { x: 28.94438057441916, y: 46.29922469345143 })).toBeTruthy();
    expect(isPointInStroke(segments, { x: 10, y: 10 })).toBeFalsy();
    expect(isPointInStroke(segments, { x: 45.355339, y: 45.355339 })).toBeFalsy();
    expect(isPointInStroke(segments, { x: 50, y: 10 })).toBeFalsy();
  });
});
