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

## Path

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

## License

MIT@[AntV](https://github.com/antvis).
