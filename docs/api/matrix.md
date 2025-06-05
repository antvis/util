# matrix（矩阵）

**[返回◀️](../../README.zh-CN.md)**

## 📒 工具方法

### 方法列表

- [angleTo](#angleto) - 计算两个二维向量之间的夹角
- [direction](#direction) - 计算两个向量之间夹角的方向（顺时针或逆时针）
- [transform](#transform) - 根据变换操作序列对矩阵进行变换
- [vertical](#vertical) - 计算二维向量的垂直向量。

<hr>

### angleTo

计算两个二维向量之间的夹角。

#### 功能说明

- 计算两个二维向量之间的夹角
- 支持顺时针和逆时针方向的角度计算
- 使用 gl-matrix 库进行向量计算
- 返回弧度值（0 到 2π）

#### 示例

```ts
import { angleTo } from '@antv/util';

// 基本向量夹角
const v1: [number, number] = [1, 0];
const v2: [number, number] = [0, 1];
console.log(angleTo(v1, v2));          // π/2 (90度)
console.log(angleTo(v1, v2, true));    // 3π/2 (270度)

// 相同方向的向量
const v3: [number, number] = [1, 0];
const v4: [number, number] = [2, 0];
console.log(angleTo(v3, v4));          // 0

// 相反方向的向量
const v5: [number, number] = [1, 0];
const v6: [number, number] = [-1, 0];
console.log(angleTo(v5, v6));          // π (180度)

// 实际应用示例
function rotateVector(vector: [number, number], angle: number): [number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [
    vector[0] * cos - vector[1] * sin,
    vector[0] * sin + vector[1] * cos
  ];
}

// 计算旋转后的向量夹角
const original: [number, number] = [1, 0];
const rotated = rotateVector(original, Math.PI / 4);  // 旋转45度
console.log(angleTo(original, rotated)); // π/4 (45度)
```

#### 参数说明

| 参数 | 说明 | 类型 | 默认值 | 详细说明 |
|---------|------|------|---------|----------|
| v1 | 第一个向量 | [number, number] | - | 起始向量 |
| v2 | 第二个向量 | [number, number] | - | 目标向量 |
| direct | 是否按逆时针方向计算 | boolean | false | 是否逆时针计算角度 |

#### 返回值

| 参数 | 说明 | 类型 | 默认值 | 详细说明 |
|---------|------|------|---------|----------|
| angle | 夹角弧度值 | number | - | 两个向量之间的夹角（0到2π） |

#### 注意事项

1. 返回值是弧度制（0到2π）
2. 默认顺时针方向计算角度
3. direct参数可以改变角度的计算方向
4. 使用了gl-matrix库的vec2.angle计算基础角度
5. 零向量可能导致计算结果不准确

<hr>

### direction

计算两个向量之间夹角的方向（顺时针或逆时针）。

#### 功能说明

- 判断从向量v1到向量v2的旋转方向
- 使用向量叉积的方法计算方向
- 返回值大于等于0表示顺时针方向
- 返回值小于0表示逆时针方向

#### 示例

```ts
import { direction } from '@antv/util';

// 基本方向判断
const v1 = [1, 0];
const v2 = [0, 1];
console.log(direction(v1, v2));  // -1 (逆时针)

const v3 = [0, -1];
console.log(direction(v1, v3));  // 1 (顺时针)

// 共线向量
const v4 = [2, 0];
console.log(direction(v1, v4));  // 0 (共线)

// 实际应用示例
function getRotationDirection(startAngle: number, endAngle: number): string {
  const start = [Math.cos(startAngle), Math.sin(startAngle)];
  const end = [Math.cos(endAngle), Math.sin(endAngle)];
  
  return direction(start, end) >= 0 ? '顺时针' : '逆时针';
}

// 测试不同角度的旋转方向
console.log(getRotationDirection(0, Math.PI / 2));        // '逆时针'
console.log(getRotationDirection(0, -Math.PI / 2));       // '顺时针'

// 在动画中使用
function animateRotation(element: HTMLElement, targetAngle: number) {
  const currentVector = [1, 0];
  const targetVector = [
    Math.cos(targetAngle),
    Math.sin(targetAngle)
  ];
  
  const isClockwise = direction(currentVector, targetVector) >= 0;
  // 根据方向选择最短路径旋转
  element.style.transition = 'transform 1s';
  element.style.transform = `rotate(${isClockwise ? '' : '-'}${targetAngle}rad)`;
}
```

#### 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| v1 | 第一个向量 | number[] | - | 起始向量 |
| v2 | 第二个向量 | number[] | - | 目标向量 |

#### 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 方向判断值 | number | - | >=0表示顺时针，<0表示逆时针 |

#### 注意事项

1. 向量应该是二维的
2. 返回值的正负表示旋转方向
3. 返回值为0表示向量共线
4. 计算基于向量叉积
5. 坐标系采用数学标准坐标系（y轴向上为正）

<hr>

### transform

根据变换操作序列对矩阵进行变换。

#### 功能说明

- 支持平移(translate)、缩放(scale)、旋转(rotate)和矩阵乘法(multiply)操作
- 使用 gl-matrix 库进行矩阵运算
- 按顺序执行变换操作
- 支持初始矩阵输入
- 所有变换都是左乘方式进行

#### 示例

```ts
import { transform } from '@antv/util';

// 基本变换示例
const matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];  // 单位矩阵

// 平移变换
const translated = transform(matrix, [
  ['t', 100, 200]  // 向右平移100，向下平移200
]);

// 缩放变换
const scaled = transform(matrix, [
  ['s', 2, 3]  // x方向放大2倍，y方向放大3倍
]);

// 旋转变换
const rotated = transform(matrix, [
  ['r', Math.PI / 4]  // 旋转45度
]);

// 组合变换
const combined = transform(matrix, [
  ['t', 100, 100],  // 先平移
  ['r', Math.PI / 2],  // 再旋转90度
  ['s', 2, 2]  // 最后放大2倍
]);

// 实际应用示例
function createTransformMatrix(x: number, y: number, rotation: number, scale: number) {
  return transform(null, [
    ['t', x, y],
    ['r', rotation],
    ['s', scale, scale]
  ]);
}

// 创建一个元素的变换矩阵
const elementTransform = createTransformMatrix(100, 100, Math.PI / 4, 2);
console.log(elementTransform);

// 应用到DOM元素
function applyMatrixToElement(element: HTMLElement, matrix: number[]) {
  const cssMatrix = `matrix(${matrix[0]}, ${matrix[1]}, ${matrix[3]}, ${matrix[4]}, ${matrix[2]}, ${matrix[5]})`;
  element.style.transform = cssMatrix;
}
```

#### 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| m | 初始矩阵 | number[] | [1,0,0,0,1,0,0,0,1] | 初始变换矩阵 |
| actions | 变换操作数组 | any[][] | - | 变换操作序列 |

#### 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| matrix | 变换后的矩阵 | number[] | - | 经过变换后的矩阵 |

#### 变换操作类型

| 操作符 | 说明 | 参数格式 | 示例 |
|---------|------|------|---------|
| t | 平移 | ['t', x, y] | ['t', 100, 200] |
| s | 缩放 | ['s', sx, sy] | ['s', 2, 3] |
| r | 旋转 | ['r', angle] | ['r', Math.PI/4] |
| m | 矩阵乘法 | ['m', matrix] | ['m', [1,0,0,0,1,0,0,0,1]] |

#### 注意事项

1. 变换操作按数组顺序依次执行
2. 所有变换都是左乘方式
3. 旋转角度使用弧度制
4. 矩阵使用3x3的形式存储
5. 如果不提供初始矩阵，默认使用单位矩阵

<hr>

### vertical

计算二维向量的垂直向量。

#### 功能说明

- 计算给定二维向量的垂直向量
- 支持顺时针和逆时针方向的垂直向量计算
- 可以将结果存储在指定的数组中
- 返回垂直向量的引用

#### 示例

```ts
import { vertical } from '@antv/util';

// 基本使用
const v = [1, 0];  // 原始向量
const out = [0, 0];  // 用于存储结果的数组

// 逆时针垂直向量
vertical(out, v, true);   
console.log(out);  // [0, -1]

// 顺时针垂直向量
vertical(out, v, false);  
console.log(out);  // [0, 1]

// 对任意向量求垂直向量
const v2 = [3, 4];
const perpendicular = [0, 0];
vertical(perpendicular, v2, true);
console.log(perpendicular);  // [4, -3]

// 实际应用示例
function createPerpendicularLine(point: number[], direction: number[], length: number) {
  const perpendicular = [0, 0];
  vertical(perpendicular, direction, true);
  
  // 标准化垂直向量
  const magnitude = Math.sqrt(perpendicular[0]**2 + perpendicular[1]**2);
  perpendicular[0] = (perpendicular[0] / magnitude) * length;
  perpendicular[1] = (perpendicular[1] / magnitude) * length;
  
  return {
    start: [
      point[0] - perpendicular[0]/2,
      point[1] - perpendicular[1]/2
    ],
    end: [
      point[0] + perpendicular[0]/2,
      point[1] + perpendicular[1]/2
    ]
  };
}

// 使用示例
const point = [100, 100];
const direction = [1, 0];
const perpendicularLine = createPerpendicularLine(point, direction, 50);
console.log(perpendicularLine);
```

#### 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| out | 结果向量 | number[] | - | 用于存储结果的数组 |
| v | 原始向量 | number[] | - | 需要计算垂直向量的原始向量 |
| flag | 方向标志 | boolean | - | true表示逆时针，false表示顺时针 |

#### 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 垂直向量 | number[] | - | 计算得到的垂直向量（与out相同） |

#### 注意事项

1. 输入向量必须是二维的
2. out数组会被修改
3. 返回的是out数组的引用
4. flag为true时逆时针旋转90度
5. flag为false时顺时针旋转90度
