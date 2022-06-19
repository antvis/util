import type { PathArray, PathSegment } from '../types';

export function clonePath(path: PathArray | PathSegment): PathArray {
  return path.map((x) => (Array.isArray(x) ? [...x] : x)) as PathArray;
}
