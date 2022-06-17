import type { PathArray } from '../types';
import { pathLengthFactory } from './path-length-factory';

/**
 * Returns the shape total length, or the equivalent to `shape.getTotalLength()`.
 *
 * The `normalizePath` version is lighter, faster, more efficient and more accurate
 * with paths that are not `curveArray`.
 */
export function getTotalLength(pathInput: string | PathArray) {
  return pathLengthFactory(pathInput).length;
}
