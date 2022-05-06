import { isPointInPolygon } from './point-in-polygon';
import { getLineIntersect } from './get-line-intersect';

function parseToLines(points) {
  const lines = [];
  const count = points.length;
  for (let i = 0; i < count - 1; i++) {
    const point = points[i];
    const next = points[i + 1];
    lines.push({
      from: {
        x: point[0],
        y: point[1],
      },
      to: {
        x: next[0],
        y: next[1],
      },
    });
  }
  if (lines.length > 1) {
    const first = points[0];
    const last = points[count - 1];
    lines.push({
      from: {
        x: last[0],
        y: last[1],
      },
      to: {
        x: first[0],
        y: first[1],
      },
    });
  }
  return lines;
}

function lineIntersectPolygon(lines, line) {
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (getLineIntersect(l.from, l.to, line.from, line.to)) {
      return true;
    }
  }
  return false;
}

type BBox = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
};

function getBBox(points): BBox {
  const xArr = points.map((p) => p[0]);
  const yArr = points.map((p) => p[1]);
  return {
    minX: Math.min.apply(null, xArr),
    maxX: Math.max.apply(null, xArr),
    minY: Math.min.apply(null, yArr),
    maxY: Math.max.apply(null, yArr),
  };
}

function intersectBBox(box1: BBox, box2: BBox) {
  return !(box2.minX > box1.maxX || box2.maxX < box1.minX || box2.minY > box1.maxY || box2.maxY < box1.minY);
}

export function isPolygonsIntersect(points1, points2) {
  // 空数组，或者一个点返回 false
  if (points1.length < 2 || points2.length < 2) {
    return false;
  }

  const bbox1 = getBBox(points1);
  const bbox2 = getBBox(points2);
  // 判定包围盒是否相交，比判定点是否在多边形内要快的多，可以筛选掉大多数情况
  if (!intersectBBox(bbox1, bbox2)) {
    return false;
  }

  // 判定点是否在多边形内部，一旦有一个点在另一个多边形内，则返回
  let hasOneIn = points2.some((point) => isPointInPolygon(points1, point[0], point[1]));
  if (hasOneIn) return true;

  // 两个多边形都需要判定
  hasOneIn = points1.some((point) => isPointInPolygon(points2, point[0], point[1]));
  if (hasOneIn) return true;

  const lines1 = parseToLines(points1);
  const lines2 = parseToLines(points2);

  return lines2.some((line) => lineIntersectPolygon(lines1, line));
}
