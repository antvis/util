import { isPathArray } from './is-path-array';
import type { PathArray, AbsoluteArray } from '../types';

/**
 * Iterates an array to check if it's a `PathArray`
 * with all absolute values.
 */
export function isAbsoluteArray(path: string | PathArray): path is AbsoluteArray {
  return (
    isPathArray(path) &&
    // @ts-ignore -- `isPathArray` also checks if it's `Array`
    path.every(([x]) => x === x.toUpperCase())
  );
}
