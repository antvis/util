# util

> AntV 底层依赖的工具库，不建议在自己业务中使用。

[![Build Status](https://github.com/antvis/util/workflows/build/badge.svg)](https://github.com/antvis/util/actions)
[![npm Version](https://img.shields.io/npm/v/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)
[![npm Download](https://img.shields.io/npm/dm/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)
[![npm License](https://img.shields.io/npm/l/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)

## Usage

```ts
import { gradient } from '@antv/util';
```

## 原则

- util 只有一个 npm 包，按照目录来组织不同类型的方法，避免 monorepo 互相依赖
- 内容和 AntV 强相关，避免做和 lodash 等相同的工具库
- 不使用的方法，及时删除，并保持新增方法可以按需引入
- 旧版本的不维护，如果 AntV 技术栈的旧版本需要迭代，请升级到 v3

## API

提供以下 Path 工具方法，包含转换、几何计算等。

### path2String

将 PathArray 转换成字符串形式，不会对原始定义中的命令进行修改：

```js
const str: PathArray = [
  ['M', 10, 10],
  ['L', 100, 100],
  ['l', 10, 10],
  ['h', 20],
  ['v', 20],
];
expect(path2String(str)).toEqual('M10 10L100 100l10 10h20v20');
```

### path2Absolute

将定义中的相对命令转换成绝对命令，例如：

- l -> L
- h -> H
- v -> V

完整方法签名如下：

```js
path2Absolute(pathInput: string | PathArray): AbsoluteArray;
```

```js
const str: PathArray = [
  ['M', 10, 10],
  ['L', 100, 100],
  ['l', 10, 10],
  ['h', 20],
  ['v', 20],
];
const arr = path2Absolute(str);
expect(arr).toEqual([
  ['M', 10, 10],
  ['L', 100, 100],
  ['L', 110, 110],
  ['H', 130],
  ['V', 130],
]);
```

### path2Curve

将部分命令转曲，例如 L / A 转成 C 命令，借助 cubic bezier 易于分割的特性用于实现形变动画。
该方法内部会调用 [path2Absolute](#path2Absolute)，因此最终返回的 PathArray 中仅包含 M 和 C 命令。

完整方法签名如下：

```js
path2Curve(pathInput: string | PathArray): CurveArray;
```

```js
expect(
  path2Curve([
    ['M', 0, 0],
    ['L', 100, 100],
  ]),
).toEqual([
  ['M', 0, 0],
  ['C', 44.194173824159215, 44.194173824159215, 68.75, 68.75, 100, 100],
]);
```

### clonePath

复制路径：

```js
const cloned = clonePath(pathInput);
```

### reverseCurve

```js
const pathArray: CurveArray = [
  ['M', 170, 90],
  ['C', 150, 90, 155, 10, 130, 10],
  ['C', 105, 10, 110, 90, 90, 90],
  ['C', 70, 90, 75, 10, 50, 10],
  ['C', 25, 10, 30, 90, 10, 90],
];

const reversed = reverseCurve(pathArray);
```

### getPathBBox

获取几何定义下的包围盒，形如：

```js
export interface PathBBox {
  width: number;
  height: number;
  x: number;
  y: number;
  x2: number;
  y2: number;
  cx: number;
  cy: number;
  cz: number;
}
```

```js
const bbox = getPathBBox([['M', 0, 0], ['L', 100, 0], ['L', 100, 100], ['L', 0, 100], ['Z']]);

expect(bbox).toEqual({ cx: 50, cy: 50, cz: 150, height: 100, width: 100, x: 0, x2: 100, y: 0, y2: 100 });
```

### getTotalLength

获取路径总长度。

```js
const length = getTotalLength([['M', 0, 0], ['L', 100, 0], ['L', 100, 100], ['L', 0, 100], ['Z']]);

expect(length).toEqual(400);
```

### getPointAtLength

获取路径上从起点出发，到指定距离的点。

```js
const point = getPointAtLength([['M', 0, 0], ['L', 100, 0], ['L', 100, 100], ['L', 0, 100], ['Z']], 0);
expect(point).toEqual({ x: 0, y: 0 });
```

### getPathArea

计算路径包围的面积。内部实现中首先通过 [path2Curve](#path2Curve) 转曲，再计算 cubic curve 面积，[详见](https://stackoverflow.com/a/15845996)。

方法签名如下：

```js
function getPathArea(path: PathArray): number;
```

### isPointInStroke

判断一个点是否在路径上，仅通过几何定义计算，不考虑其他样式属性例如线宽、lineJoin、miter 等。

方法签名如下：

```js
isPointInStroke(pathInput: string | PathArray, point: Point): boolean;
```

```js
const result = isPointInStroke(segments, { x: 10, y: 10 });
```

### distanceSquareRoot

计算两点之间的距离。

方法签名如下：

```js
distanceSquareRoot(a: [number, number], b: [number, number]): number;
```

### equalizeSegments

将两条路径处理成段数相同，用于形变动画前的分割操作。

```js
const [formattedPath1, formattedPath2] = equalizeSegments(path1, path2);
```

### isPointInPolygon

判断一个点是否在多边形内。多边形形如：

```js
const polygon = [
  [0, 0],
  [0, 100],
  [30, 100],
  [30, 0],
];

// [0, 0] 在多边形的边上
isPointInPolygon(polygon, 0, 0); // true
```

### isPolygonsIntersect

判断两个多边形是否相交：

```js
isPolygonsIntersect(polygon1, polygon2);
```

## License

MIT@[AntV](https://github.com/antvis).
