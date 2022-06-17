import type { CurveArray } from '../types';
import { getPathArea } from './get-path-area';

export function getDrawDirection(pathArray: CurveArray) {
  return getPathArea(pathArray) >= 0;
}
