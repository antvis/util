# 数学 `math` 相关函数

> 一些数学计算相关函数，目前主要是图形拾取和碰撞相关。

- [isPointInPolygon](#ispointinpolygon) - 判断点是否在多边形内部（射线法）
- [isPolygonsIntersect](#ispolygonsintersect) - 判断两个多边形是否相交

## isPointInPolygon

判断点是否在多边形内部（射线法）。

- 使用射线法判断点是否在多边形内部
- 支持判断点是否在多边形边上
- 处理特殊情况（如点数少于3个的情况）
- 使用容差处理浮点数精度问题

```ts
import { isPointInPolygon } from '@antv/util';

// 定义一个矩形多边形
const rectangle = [
  [0, 0],   // 左上
  [100, 0], // 右上
  [100, 100], // 右下
  [0, 100]  // 左下
];

// 判断点是否在多边形内
console.log(isPointInPolygon(rectangle, 50, 50));    // true (在内部)
console.log(isPointInPolygon(rectangle, 0, 0));      // true (在顶点上)
console.log(isPointInPolygon(rectangle, 50, 0));     // true (在边上)
console.log(isPointInPolygon(rectangle, 150, 150));  // false (在外部)

// 定义一个三角形
const triangle = [
  [0, 0],
  [100, 0],
  [50, 100]
];

// 测试三角形的点
console.log(isPointInPolygon(triangle, 50, 50));     // true
console.log(isPointInPolygon(triangle, 0, 50));      // false

// 特殊情况测试
const invalidPolygon = [[0, 0], [100, 100]];  // 少于3个点
console.log(isPointInPolygon(invalidPolygon, 50, 50));  // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| points | 多边形顶点数组 | number[][] | - | 多边形的顶点坐标数组 |
| x | 检测点的x坐标 | number | - | 待检测点的x坐标 |
| y | 检测点的y坐标 | number | - | 待检测点的y坐标 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 判断结果 | boolean | - | 点是否在多边形内部或边上 |

- 注意事项

1. 多边形顶点数量必须大于等于3个
2. 支持凸多边形和凹多边形
3. 边界点被认为是在多边形内部
4. 使用容差处理浮点数精度问题
5. 多边形顶点按顺序排列（顺时针或逆时针）


## isPolygonsIntersect

判断两个多边形是否相交。

- 判断两个多边形是否存在交集
- 使用包围盒快速判断是否可能相交
- 检查点是否在另一个多边形内部
- 检查线段是否相交
- 支持凸多边形和凹多边形

```ts
import { isPolygonsIntersect } from '@antv/util';

// 定义两个矩形
const rectangle1 = [
  [0, 0],
  [100, 0],
  [100, 100],
  [0, 100]
];

const rectangle2 = [
  [50, 50],
  [150, 50],
  [150, 150],
  [50, 150]
];

// 相交的情况
console.log(isPolygonsIntersect(rectangle1, rectangle2));  // true

// 不相交的情况
const rectangle3 = [
  [200, 200],
  [300, 200],
  [300, 300],
  [200, 300]
];
console.log(isPolygonsIntersect(rectangle1, rectangle3));  // false

// 一个多边形包含另一个的情况
const smallRect = [
  [25, 25],
  [75, 25],
  [75, 75],
  [25, 75]
];
console.log(isPolygonsIntersect(rectangle1, smallRect));  // true

// 特殊情况测试
const invalidPolygon = [[0, 0]];  // 单点
console.log(isPolygonsIntersect(rectangle1, invalidPolygon));  // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| points1 | 第一个多边形的顶点数组 | number[][] | - |
| points2 | 第二个多边形的顶点数组 | number[][] | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 两个多边形是否相交 | boolean | - |

- 注意事项

1. 多边形顶点数量必须大于等于2个
2. 支持凸多边形和凹多边形
3. 包围盒检测可以提高性能
4. 一个多边形完全包含另一个多边形也被视为相交
5. 边界接触也被视为相交
