import { scanSegment } from './scan-segment';
import { skipSpaces } from './skip-spaces';
import { clonePath } from '../process/clone-path';
import { PathParser } from './path-parser';
import { isPathArray } from '../util/is-path-array';
import type { PathArray } from '../types';

/**
 * Parses a path string value and returns an array
 * of segments we like to call `pathArray`.
 */
export function parsePathString(pathInput: PathArray | string): PathArray | string {
  if (isPathArray(pathInput)) {
    return clonePath(pathInput) as PathArray;
  }

  const path = new PathParser(pathInput);

  skipSpaces(path);

  while (path.index < path.max && !path.err.length) {
    scanSegment(path);
  }

  return path.err ? path.err : path.segments;
}
