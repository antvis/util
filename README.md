<h1 align="center">
<b>@antv/util</b>
</h1>

<div align="center">

> The underlying utility library for AntV, not recommended for business use. [中文](./README.zh-CN.md)

[![Build Status](https://github.com/antvis/util/workflows/build/badge.svg)](https://github.com/antvis/util/actions)
[![npm Version](https://img.shields.io/npm/v/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)
[![npm Download](https://img.shields.io/npm/dm/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)
[![npm License](https://img.shields.io/npm/l/@antv/util.svg)](https://www.npmjs.com/package/@antv/util)

</div>

## 🚥 Principles

- Single npm package organized by directories for different types of methods, avoiding monorepo interdependencies
- Content strongly related to AntV, avoiding duplication with utility libraries like lodash
- Unused methods are removed promptly, ensuring new methods can be imported on demand
- Old versions are not maintained; please upgrade to v3 if older versions of AntV tech stack need iteration

## ✨ Features

- **Lodash Integration**: Includes commonly used methods from lodash library, avoiding external method libraries in AntV
- **Visualization**: Specialized tools for visualization features including colors, shapes, paths, vectors, matrices, etc.

## 📦 Installation

```bash
$ npm install @antv/util
```

## 🔨 Getting Started

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

- [color](./docs/api/color.en.md) - Color format conversion, gradient conversion from g to css, etc.
- [dom](./docs/api/dom.en.md) - Basic and CSS additions
- [math](./docs/api/math.en.md) - Basic mathematical calculations, including point-on-line-segment detection, point-in-polygon detection, etc.
- [matrix](./docs/api/matrix.en.md) - Vector and matrix calculation methods
- [path](./docs/api/path.en.md) - Shape drawing calculation methods, including transformations, geometric calculations, etc.
- [lodash](./docs/api/lodash.en.md) - Built-in lodash common methods with additional AntV-specific utility tools

## 📮 Contributing

```bash
$ git clone git@github.com:antvis/util.git

$ cd util

$ npm i

$ npm t
```

After writing code, submit a PR.

## License

MIT@[AntV](https://github.com/antvis).