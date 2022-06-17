import { isNormalizedArray } from '../util/is-normalized-array';
import { paramsParser } from '../parser/params-parser';
import { path2Absolute } from '../convert/path-2-absolute';
import { clonePath } from './clone-path';
import { normalizeSegment } from './normalize-segment';
import type { PathArray, NormalArray } from '../types';

/**
 * @example
 * const path = 'M0 0 H50';
 * const normalizedPath = SVGPathCommander.normalizePath(path);
 * // result => [['M', 0, 0], ['L', 50, 0]]
 */
export function normalizePath(pathInput: string | PathArray): NormalArray {
  if (isNormalizedArray(pathInput)) {
    return clonePath(pathInput) as NormalArray;
  }

  const path = path2Absolute(pathInput);
  const params = { ...paramsParser };
  const allPathCommands = [];
  const ii = path.length;
  let pathCommand = '';

  for (let i = 0; i < ii; i += 1) {
    [pathCommand] = path[i];

    // Save current path command
    allPathCommands[i] = pathCommand;
    path[i] = normalizeSegment(path[i], params);

    const segment = path[i];
    const seglen = segment.length;

    params.x1 = +segment[seglen - 2];
    params.y1 = +segment[seglen - 1];
    params.x2 = +segment[seglen - 4] || params.x1;
    params.y2 = +segment[seglen - 3] || params.y1;
  }

  return path as NormalArray;
}
