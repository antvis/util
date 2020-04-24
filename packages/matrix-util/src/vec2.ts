export * from 'gl-matrix/vec2';
import { angle } from 'gl-matrix/vec2';

/**
 * 向量 v1 到 向量 v2 夹角的方向
 * @param  {Array} v1 向量
 * @param  {Array} v2 向量
 * @return {Boolean} >= 0 顺时针 < 0 逆时针
 */
export function direction(v1: number[], v2: number[]): number {
  return v1[0] * v2[1] - v2[0] * v1[1];
}

/**
 *
 * @param v1
 * @param v2
 * @param direct
 */
export function angleTo(v1: number[], v2: number[], direct: boolean): number {
  const ang = angle(v1, v2);
  const angleLargeThanPI = direction(v1, v2) >= 0;
  if (direct) {
    if (angleLargeThanPI) {
      return Math.PI * 2 - ang;
    }
    return ang;
  }

  if (angleLargeThanPI) {
    return ang;
  }
  return Math.PI * 2 - ang;
}

/**
 *
 * @param out
 * @param v
 * @param flag
 */
export function vertical(out: number[], v: number[], flag: boolean): number[] {
  if (flag) {
    out[0] = v[1];
    out[1] = -1 * v[0];
  } else {
    out[0] = -1 * v[1];
    out[1] = v[0];
  }

  return out;
}
