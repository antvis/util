import { segmentLineFactory } from '../util/segment-line-factory';
import { midPoint } from '../util/mid-point';

export function lineToCubic(x1: number, y1: number, x2: number, y2: number) {
  const t = 0.5;
  const p0 = [x1, y1];
  const p1 = [x2, y2];
  const p2 = midPoint(p0, p1, t);
  const p3 = midPoint(p1, p2, t);
  const p4 = midPoint(p2, p3, t);
  const p5 = midPoint(p3, p4, t);
  const p6 = midPoint(p4, p5, t);

  // const seg1 = [...p0, ...p2, ...p4, ...p6, t];
  // @ts-ignore
  const cp1 = segmentLineFactory(p0[0], p0[1], p2[0], p2[1], p4[0]).point;
  // const seg2 = [...p6, ...p5, ...p3, ...p1, 0];
  // @ts-ignore
  const cp2 = segmentLineFactory(p6[0], p6[1], p5[0], p5[1], p3[0]).point;

  return [cp1.x, cp1.y, cp2.x, cp2.y, x2, y2];
}
