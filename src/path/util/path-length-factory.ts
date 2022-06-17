import { normalizePath } from '../process/normalize-path';
import { segmentLineFactory } from './segment-line-factory';
import { segmentArcFactory } from './segment-arc-factory';
import { segmentCubicFactory } from './segment-cubic-factory';
import { segmentQuadFactory } from './segment-quad-factory';
import type { PathCommand, PathArray, LengthFactory } from '../types';

/**
 * Returns a {x,y} point at a given length
 * of a shape, the shape total length and
 * the shape minimum and maximum {x,y} coordinates.
 */
export function pathLengthFactory(pathInput: string | PathArray, distance?: number): LengthFactory {
  const path = normalizePath(pathInput);
  const distanceIsNumber = typeof distance === 'number';
  let isM: boolean;
  let data: number[] = [];
  let pathCommand: PathCommand;
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  let seg;
  let MIN = [];
  let MAX = [];
  let length = 0;
  let min = { x: 0, y: 0 };
  let max = min;
  let point = min;
  let POINT = min;
  let LENGTH = 0;

  for (let i = 0, ll = path.length; i < ll; i += 1) {
    seg = path[i];
    [pathCommand] = seg;
    isM = pathCommand === 'M';
    data = !isM ? [x, y, ...seg.slice(1)] : data;

    // this segment is always ZERO
    /* istanbul ignore else */
    if (isM) {
      // remember mx, my for Z
      [, mx, my] = seg;
      min = { x: mx, y: my };
      max = min;
      length = 0;

      if (distanceIsNumber && distance < 0.001) {
        POINT = min;
      }
    } else if (pathCommand === 'L') {
      // @ts-ignore
      ({ length, min, max, point } = segmentLineFactory(...data, (distance || 0) - LENGTH));
    } else if (pathCommand === 'A') {
      // @ts-ignore
      ({ length, min, max, point } = segmentArcFactory(...data, (distance || 0) - LENGTH));
    } else if (pathCommand === 'C') {
      // @ts-ignore
      ({ length, min, max, point } = segmentCubicFactory(...data, (distance || 0) - LENGTH));
    } else if (pathCommand === 'Q') {
      // @ts-ignore
      ({ length, min, max, point } = segmentQuadFactory(...data, (distance || 0) - LENGTH));
    } else if (pathCommand === 'Z') {
      data = [x, y, mx, my];
      // @ts-ignore
      ({ length, min, max, point } = segmentLineFactory(...data, (distance || 0) - LENGTH));
    }

    if (distanceIsNumber && LENGTH < distance && LENGTH + length >= distance) {
      POINT = point;
    }

    MAX = [...MAX, max];
    MIN = [...MIN, min];
    LENGTH += length;

    [x, y] = pathCommand !== 'Z' ? seg.slice(-2) : [mx, my];
  }

  // native `getPointAtLength` behavior when the given distance
  // is higher than total length
  if (distanceIsNumber && distance >= LENGTH) {
    POINT = { x, y };
  }

  return {
    length: LENGTH,
    point: POINT,
    min: {
      x: Math.min(...MIN.map((n) => n.x)),
      y: Math.min(...MIN.map((n) => n.y)),
    },
    max: {
      x: Math.max(...MAX.map((n) => n.x)),
      y: Math.max(...MAX.map((n) => n.y)),
    },
  };
}
