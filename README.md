# util

> AntV 底层依赖的工具库，不建议在自己业务中使用。


[![Build Status](https://github.com/antvis/util/workflows/build/badge.svg)](https://github.com/antvis/util/actions)
[![Coverage Status](https://coveralls.io/repos/github/antvis/util/badge.svg?branch=master)](https://coveralls.io/github/antvis/util?branch=master)
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



## License

MIT@[AntV](https://github.com/antvis).
