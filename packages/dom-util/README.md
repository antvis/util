# util

> 为 `antv` 开发的轻量级工具方法库。


## 安装下载

> tnpm i --save @antv/util

```js
// 所有的 api 是都这么引入，名字不同而已
import { each, get } from '@antv/util';

each(arr, (item, idx) => {
  
});

const x = get(obj, 'a.b', '');
```


## API 文档

> 目前使用到的、且推荐使用的 API 文档，不在文档内的不建议使用。

后续方法添加到文档需要经过审核：

1. ts 类型定义是否完善
2. 单测是否覆盖
3. 文档实例是否覆盖全部能力


> 推荐使用的 API 文档如下：

 - array
    - [contains](#contains)
    - [difference](#)
    - [map](#)
    - [find](#)
    - [filter](#)
    - [flatten](#)
    - [reduce](#)
    - [remove](#)
    - [sortBy](#)
    - [union](#)
    - [uniq](#)
    - [toArray](#)
    - [groupBy](#)
    - [group](#)
    - [startsWith](#)
    - [endsWith](#)
    - [every](#)
    - [some](#)
 - dom
    - [addEventListener](#)
    - [create-dom](#)
    - ...
 - event
    - [getWrapBehavior](#)
    - [wrapBehavior](#)
 - object
    - [clone](#)
    - [forIn](#)
    - [mapValues](#)
    - [mapKeys](#)
    - [get](#)
    - [set](#)
    - [groupBy](#)
    - [isEqual](#)
    - [pick](#)
 - string
    - [lowerCase](#)
    - [upperCase](#)
    - [toString](#)
    - [uniqueId](#)
 - type
    - [getType](#)
    - [isArray](#)
    - [isBoolean](#)
    - [isDate](#)
    - [isFunction](#)
    - [isFinite](#)
    - [isNil](#)
    - [isNull](#)
    - [isNumber](#)
    - [isObject](#)
    - [isRegExp](#)
    - [isString](#)
    - [isUndefined](#)
    - [isEmpty](#)
 - function
    - [debounce](#)
    - [throttle](#)
    - [noop](#)
    - [identity](#)
    - [memoize](#)


## 实例

> TODO 完善上述各个方法的使用实例。


 - contains
 
```js
import { contains } from '@antv/util';

const has = contains([1, 2, 3], 1);
```

 - startsWith
 
```js
import { startsWith } from '@antv/util';

startsWith([1, 2, 3], 1);
// true

startsWith('abc', 'b');
// false
```

 - endsWith
 
```js
import { endsWith } from '@antv/util';

endsWith([1, 2, 3], 1);
// false

endsWith('abc', 'c');
// true
```


 - groupBy

```js
import { groupBy } from '@antv/util';

groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// 根据元素键值来分组
groupBy([ { user: 'lily' }, { user: 'lucy' } ], 'user');
```


 - group
 
```js
import { groupBy } from '@antv/util';

group([6.1, 4.2, 6.3], Math.floor);
// => [ [4.2], [6.1, 6.3] ]

group([ { user: 'lily' }, { user: 'lucy' } ], 'user');
// [ [{ user: 'lily' }], [{ user: 'lucy' }] ]
```


 - memoize

> 缓存方法的执行结构，一般用于耗时的计算方法。

```js
import { memoize } from '@antv/util';

function max(...args) {
  return Math.max(...args);
}

// 第二个参数，是将变量变成 key，如果没有，则直接取第一个参数作为 key
const mmax = memoize(max, (...args) => args.join('-'));

mmax(1, 2, 3, 4, 5);
```

 - isFinite

> 判断是否是有限数

```js
import { isFinite } from '@antv/util';

isFinite(3);
// => true

isFinite('3');
// => false
```

 - set

> 按照 path 给 obj 赋值。方法是 mutable 的。

```js
import { set } from '@antv/util';

set({ a: { b: { c: 1 } } }, 'a.b', 100);
// return the original object.
```
