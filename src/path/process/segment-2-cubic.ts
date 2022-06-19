import type { PathSegment, ParserParams, CSegment, MSegment } from '../types';
import { arcToCubic } from './arc-2-cubic';
import { quadToCubic } from './quad-2-cubic';
import { lineToCubic } from './line-2-cubic';

export function segmentToCubic(segment: PathSegment, params: ParserParams): CSegment | MSegment {
  const [pathCommand] = segment;
  const values = segment.slice(1).map(Number);
  const [x, y] = values;
  let args: any[];
  const { x1: px1, y1: py1, x: px, y: py } = params;

  if (!'TQ'.includes(pathCommand)) {
    params.qx = null;
    params.qy = null;
  }

  switch (pathCommand) {
    case 'M':
      params.x = x;
      params.y = y;
      return segment;
    case 'A':
      args = [px1, py1, ...values];
      // @ts-ignore
      return ['C', ...arcToCubic(...args)] as CubicSegment;
    case 'Q':
      params.qx = x;
      params.qy = y;
      args = [px1, py1, ...values];
      // @ts-ignore
      return ['C', ...quadToCubic(...args)] as CubicSegment;
    case 'L':
      return ['C', ...lineToCubic(px1, py1, x, y)] as CSegment;
    case 'Z':
      // prevent NaN from divide 0
      if (px1 === px && py1 === py) {
        return ['C', px1, py1, px, py, px, py];
      }

      return ['C', ...lineToCubic(px1, py1, px, py)] as CSegment;
    default:
  }
  return segment as CSegment;
}
