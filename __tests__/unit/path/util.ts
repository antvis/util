import type { PathArray } from '../../../src';

export function getCirclePath(cx: number, cy: number, rx: number, ry: number): PathArray {
  return [
    // ['M', cx, cy - ry],
    // ['A', rx, ry, 0, 1, 1, cx, cy + ry],
    // ['A', rx, ry, 0, 1, 1, cx, cy - ry],
    ['M', cx - rx, ry],
    ['A', rx, ry, 0, 1, 0, cx + rx, ry],
    ['A', rx, ry, 0, 1, 0, cx - rx, ry],
    ['Z'],
  ];
}
