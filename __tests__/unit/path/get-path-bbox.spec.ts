import { getPathBBox, getPathBBoxTotalLength, PathArray } from '../../../src/path';
import { parsePathString } from '../../../src/path/parser/parse-path-string';
import { getCirclePath } from './util';

describe('get path bbox', () => {
  it('should calc empty path correctly', () => {
    const bbox = getPathBBox('');
    expect(bbox).toEqual({ cx: 0, cy: 0, cz: 0, height: 0, width: 0, x: 0, x2: 0, y: 0, y2: 0 });
  });

  it('should calc rect path correctly', () => {
    const str: PathArray = [['M', 0, 0], ['L', 100, 0], ['L', 100, 100], ['L', 0, 100], ['Z']];
    const bbox = getPathBBox(str);

    expect(bbox).toEqual({ cx: 50, cy: 50, cz: 150, height: 100, width: 100, x: 0, x2: 100, y: 0, y2: 100 });
  });

  it('should calc circle path correctly', () => {
    const str: PathArray = getCirclePath(0, 0, 100, 100);
    const bbox = getPathBBox(str);

    expect(bbox).toEqual({ cx: 0, cy: 100, cz: 300, height: 200, width: 200, x: -100, x2: 100, y: 0, y2: 200 });
  });

  it('should calc rounded rect path correctly', () => {
    const segments = parsePathString('M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z') as PathArray;
    const bbox = getPathBBox(segments);
    expect(bbox).toEqual({ cx: 8, cy: 8, cz: 24, height: 16, width: 16, x: 0, x2: 16, y: 0, y2: 16 });

    const { length, ...rest } = getPathBBoxTotalLength(segments);
    expect(rest).toEqual({ cx: 8, cy: 8, cz: 24, height: 16, width: 16, x: 0, x2: 16, y: 0, y2: 16 });
  });

  it('should calc circle path with fewer segements correctly', () => {
    const str: PathArray = getCirclePath(0, 0, 100, 100);
    const bbox = getPathBBox(str, { sampleSize: 8 });

    expect(bbox).toEqual({ cx: 0, cy: 100, cz: 300, height: 200, width: 200, x: -100, x2: 100, y: 0, y2: 200 });
  });
});
