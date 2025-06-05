<h1 align="center">
<b>@antv/util</b>
</h1>

<div align="center">

> AntV 底层依赖的工具库，不建议在自己业务中使用。[English](./README.md)

[![Build Status](https://github.com/antvis/util/workflows/build/badge.svg)](https://github.com/antvis/util/actions)
[![npm Version](https://img.shields.io/npm/v/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)
[![npm Download](https://img.shields.io/npm/dm/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)
[![npm License](https://img.shields.io/npm/l/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)

</div>

## 🚥 原则

- util 只有一个 npm 包，按照目录来组织不同类型的方法，避免 monorepo 互相依赖
- 内容和 AntV 强相关，避免做和 lodash 等相同的工具库
- 不使用的方法，及时删除，并保持新增方法可以按需引入
- 旧版本的不维护，如果 AntV 技术栈的旧版本需要迭代，请升级到 v3

## ✨ 特性

- **内部集成 lodash**：util 包含 lodash 库中常用的方法工具，在 Antv 库中避免使用 lodash等外部方法库
- **可视化**：特化工具可视化中使用的颜色、形状、路径、向量、矩阵等方向的功能

## 📦 安装

```bash
$ npm install @antv/util
```

## 🔨 上手

```ts
import { path2String, path2Array } from '@antv/util';

path2String([
  ['M', 10, 10],
  ['L', 100, 100],
  ['l', 10, 10],
  ['h', 20],
  ['v', 20],
]); 
// ----> 'M10 10L100 100l10 10h20v20'

path2Array('M10 10L100 100l10 10h20v20');
/**
 *  ------->
 * [
 *  ['M', 10, 10],
 *  ['L', 100, 100],
 *  ['l', 10, 10],
 *  ['h', 20],
 *  ['v', 20],
 * ]
 */
```

## 📎 API

![npm License](https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*UspcRpjY6KUAAAAAQZAAAAgAemJ7AQ/original)

- [color（颜色）](./docs/api/color.md) - 颜色格式转化、g 渐变转化 css 渐变等
- [dom（元素）](./docs/api/dom.md) - 基础和 css 添加
- [math（数学）](./docs/api/math.md) - 基础数学计算，包含判断点是否在两个点的线段上、判断点十分在多变形内等
- [matrix（矩阵）](./docs/api/matrix.md) - 向量及矩阵计算方法
- [path（图形）](./docs/api/path.md) - 图形绘画计算方法，包含转换、几何计算等
- [lodash（通用方法）](./docs/api/lodash.md) - util 内置 lodash 通用方法，并添加了更多针对 Antv 的方法工具。

## 📮 贡献

```bash
$ git clone git@github.com:antvis/util.git

$ cd util

$ npm i

$ npm t
```📁

写完代码之后，提交 PR 即可。

## License

MIT@[AntV](https://github.com/antvis).
