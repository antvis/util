import { arcToCubic } from './arc-2-cubic';
import { quadToCubic } from './quad-2-cubic';
import { lineToCubic } from './line-2-cubic';
import type { PathCommand, ProcessParams } from '../types';

export function segmentToCubic(segment: PathCommand, params: ProcessParams) {
  if ('TQ'.indexOf(segment[0]) < 0) {
    params.qx = null;
    params.qy = null;
  }

  const [s1, s2] = segment.slice(1);

  switch (segment[0]) {
    case 'M':
      params.x = s1 as number;
      params.y = s2 as number;
      return segment;
    case 'A':
      // @ts-ignore
      return ['C'].concat(arcToCubic.apply(0, [params.x1, params.y1].concat(segment.slice(1))));
    case 'Q':
      params.qx = s1 as number;
      params.qy = s2 as number;
      // @ts-ignore
      return ['C'].concat(quadToCubic.apply(0, [params.x1, params.y1].concat(segment.slice(1))));
    case 'L':
      return ['C'].concat(lineToCubic(params.x1, params.y1, segment[1], segment[2]));
    case 'Z':
      return ['C'].concat(lineToCubic(params.x1, params.y1, params.x, params.y));
    default:
  }
  return segment;
}