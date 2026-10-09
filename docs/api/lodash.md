# 通用类函数方法

> 类似于 lodash 的一些方法，考虑到当前 lodash 的方法灵活性高，但是包比较大的问题，所以按需做简单的实现。

- 基础类型相关
  - [isBoolean](#isboolean) - 判断布尔值
  - [isNumber](#isnumber) - 判断数字
  - [isString](#isstring) - 判断字符串
  - [isNil](#isnil) - 判断 null/undefined
  - [isNull](#isnull) - 判断 null
  - [isUndefined](#isundefined) - 判断 undefined
  - [isArray](#isarray) - 判断数组
  - [isArrayLike](#isarraylike) - 判断类数组
  - [isObject](#isobject) - 判断对象
  - [isObjectLike](#isobjectlike) - 判断类对象
  - [isPlainObject](#isplainobject) - 判断普通对象
  - [isPrototype](#isprototype) - 判断原型对象
  - [isArguments](#isarguments) - 判断 Arguments
  - [isDate](#isdate) - 判断日期
  - [isError](#iserror) - 判断错误
  - [isFunction](#isfunction) - 判断函数
  - [isRegExp](#isregexp) - 判断正则
  - [isElement](#iselement) - 判断 DOM 元素
  - [isType](#istype) - 判断具体类型
  - [getType](#gettype) - 获取值类型
- 数组 `array` 相关
  - [contains/includes](#containsincludes) - 检查数组是否包含指定值
  - [find](#find) - 查找满足条件的第一个元素
  - [findIndex](#findindex) - 查找满足条件元素的索引
  - [indexOf](#indexof) - 查找元素索引
  - [firstValue](#firstvalue) - 获取对象数组中指定属性的第一个非空值
  - [head](#head) - 获取数组或类数组对象的第一个元素
  - [last](#last) - 获取数组或类数组对象的最后一个元素
  - [startsWith](#startswith) - 检查数组是否以指定元素开头
  - [endsWith](#endswith) - 检查数组是否以指定元素结尾
  - [every](#every) - 检查所有元素是否满足条件
  - [some](#some) - 检查是否存在满足条件的元素
  - [flatten](#flatten) - 数组扁平化一层
  - [flattenDeep](#flattendeep) - 数组完全扁平化
  - [map](#map) - 映射数组元素
  - [toArray](#toarray) - 转换为数组
  - [filter](#filter) - 过滤数组元素
  - [pull](#pull) - 移除指定值
  - [pullAt](#pullat) - 按索引移除元素
  - [remove](#remove) - 按条件移除元素
  - [sortBy](#sortby) - 对对象数组排序
  - [group](#group) - 数组分组为数组列表
  - [groupBy](#groupby) - 数组分组为对象
  - [groupToMap](#grouptomap) - 数组分组为映射对象
  - [reduce](#reduce) - 数组归并操作
  - [difference](#difference) - 计算数组差集
  - [union](#union) - 合并数组并去重
  - [uniq](#uniq) - 数组去重
  - [valuesOfKey](#valuesofkey) - 提取指定键的唯一值列表
- 对象 `object` 相关
  - [get](#get) - 获取深层属性值
  - [set](#set) - 设置深层属性值
  - [has/hasKey](#hashaskey) - 检查属性存在
  - [hasValue](#hasvalue) - 检查值存在
  - [keys](#keys) - 获取所有键名
  - [values](#values) - 获取所有值
  - [mapValues](#mapvalues) - 映射对象值
  - [pick](#pick) - 选取指定属性
  - [omit](#omit) - 忽略指定属性
  - [mix/assiage](#mixassiage) - 混合对象属性
  - [deepMix](#deepmix) - 深度混合对象
  - [clone](#clone) - 深度克隆对象
  - [isMatch](#ismatch) - 检查对象是否匹配
  - [isEqual](#isequal) - 判断两个值是否相等
  - [isEqualWith](#isequalwith) - 自定义相等判断
  - [isEmpty](#isempty) - 判断值是否为空
- 数值 `number` 相关
  - [isDecimal](#isdecimal) - 判断小数
  - [isEven](#iseven) - 判断偶数
  - [isInteger](#isinteger) - 判断整数
  - [isNegative](#isnegative) - 判断负数
  - [isNumberEqual](#isnumberequal) - 判断数值相等
  - [isOdd](#isodd) - 判断奇数
  - [isPositive](#ispositive) - 判断正数
  - [isFinite](#isfinite) - 判断有限数
  - [clamp](#clamp) - 限制数值范围
  - [fixedBase](#fixedbase) - 格式化数值
  - [max](#max) - 计算最大值
  - [min](#min) - 计算最小值
  - [maxBy](#maxby) - 条件最大值
  - [minBy](#minby) - 条件最小值
  - [mod](#mod) - 模运算
  - [getRange](#getrange) - 计算数值范围
  - [numberToColor](#numbertocolor) - 数字转颜色
  - [parseRadius](#parseradius) - 解析圆角
  - [toDegree](#todegree) - 弧度转角度
  - [toRadian](#toradian) - 角度转弧度
- 字符串 `string` 相关
  - [lowerCase](#lowercase) - 转小写
  - [upperCase](#uppercase) - 转大写
  - [lowerFirst](#lowerfirst) - 首字母小写
  - [upperFirst](#upperfirst) - 首字母大写
  - [substitute](#substitute) - 模板替换
  - [toString](#tostring) - 转字符串
- 函数 `function` 相关
  - [debounce](#debounce) - 函数防抖
  - [throttle](#throttle) - 函数节流
  - [memoize](#memoize) - 函数结果缓存
  - [getWrapBehavior](#getwrapbehavior) - 获取包装函数
  - [wrapBehavior](#wrapbehavior) - 创建包装函数
- 其他工具函数
  - [augment](#augment) - 扩展原型
  - [each](#each) - 遍历集合
  - [extend](#extend) - 类继承
  - [requestAnimationFrame](#requestanimationframe) - 请求动画帧
  - [cancelAnimationFrame](#cancelanimationframe) - 取消动画帧
  - [size](#size) - 获取集合大小
  - [uniqueId](#uniqueid) - 生成唯一 ID

## contains/includes

检查数组或类数组对象中是否包含指定值。

<!-- [🔝](#方法列表) -->

- 示例

```ts
import { contains } from '@antv/util';

// 基本使用
const numbers = [1, 2, 3, 4, 5];
console.log(contains(numbers, 3));  // true
console.log(contains(numbers, 6));  // false

// 字符串数组
const fruits = ['apple', 'banana', 'orange'];
console.log(contains(fruits, 'banana'));  // true
console.log(contains(fruits, 'grape'));   // false

// 类数组对象
const arrayLike = { 
  0: 'a', 
  1: 'b', 
  2: 'c', 
  length: 3 
};
console.log(contains(arrayLike, 'b'));  // true

// 实际应用示例
interface User {
  id: number;
  role: string;
}

const users: User[] = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' }
];

// 检查权限
const hasRole = (roles: string[], userRole: string) => 
  contains(roles, userRole);

console.log(hasRole(['admin', 'editor'], 'admin'));  // true
console.log(hasRole(['user', 'guest'], 'admin'));    // false

// 检查 ID 是否存在
const isIdExists = (ids: number[], userId: number) =>
  contains(ids, userId);

console.log(isIdExists([1, 2, 3], 2));  // true
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | any[] | - | 要检查的数组 |
| value | 值 | any | - | 要查找的值 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 检查结果 | boolean | - | 是否包含该值 |

## difference

计算两个数组的差集，返回第一个数组中不在第二个数组中的元素。

- 示例

```ts
import { difference } from '@antv/util';

// 基本使用
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4];
console.log(difference(arr1, arr2));  // [1, 3]

// 字符串数组
const fruits1 = ['apple', 'banana', 'orange'];
const fruits2 = ['banana', 'grape'];
console.log(difference(fruits1, fruits2));  // ['apple', 'orange']

// 空数组处理
console.log(difference([1, 2, 3]));  // [1, 2, 3]
console.log(difference([], [1, 2]));  // []

// 实际应用示例
interface Item {
  id: number;
  name: string;
}

const oldItems: Item[] = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' }
];

const newItems: Item[] = [
  { id: 2, name: 'B' },
  { id: 3, name: 'C' },
  { id: 4, name: 'D' }
];

// 找出删除的项
const removedItems = difference(
  oldItems.map(item => item.id),
  newItems.map(item => item.id)
);
console.log(removedItems);  // [1]

// 找出新增的项
const addedItems = difference(
  newItems.map(item => item.id),
  oldItems.map(item => item.id)
);
console.log(addedItems);  // [4]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 源数组 | T[] | - | 要处理的数组 |
| values | 排除值 | T[] | [] | 要排除的值数组 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 差集结果 | T[] | - | 差集数组 |

## find

在数组中查找满足条件的第一个元素。

- 示例

```ts
import { find } from '@antv/util';

// 基本使用
const numbers = [1, 2, 3, 4, 5];
console.log(find(numbers, n => n > 3));  // 4

// 对象数组查找
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];

// 使用函数查找
console.log(find(users, user => user.id === 2));
// { id: 2, name: 'Jane' }

// 使用对象匹配
console.log(find(users, { id: 2 }));
// { id: 2, name: 'Jane' }

// 找不到时返回 null
console.log(find(users, { id: 3 }));  // null

// 实际应用示例
interface User {
  id: number;
  name: string;
  role: string;
}

const userList: User[] = [
  { id: 1, name: 'John', role: 'admin' },
  { id: 2, name: 'Jane', role: 'user' },
  { id: 3, name: 'Bob', role: 'user' }
];

// 查找管理员
const admin = find(userList, { role: 'admin' });
console.log(admin);  // { id: 1, name: 'John', role: 'admin' }

// 查找指定 ID 的用户
const findUserById = (id: number) => find(userList, { id });
console.log(findUserById(2));  // { id: 2, name: 'Jane', role: 'user' }

// 使用函数进行复杂查找
const findUserByNamePattern = (pattern: string) => 
  find(userList, user => user.name.toLowerCase().includes(pattern.toLowerCase()));

console.log(findUserByNamePattern('ja'));  // { id: 2, name: 'Jane', role: 'user' }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | T[] | - | 要搜索的数组 |
| predicate | 判断条件 | Function \| object | - | 查找条件 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 查找结果 | T \| null | - | 匹配的元素或 null |

## findIndex

查找数组中满足条件的第一个元素的索引。

- 示例

```ts
import { findIndex } from '@antv/util';

// 基本使用
const numbers = [1, 2, 3, 4, 5];
console.log(findIndex(numbers, n => n > 3));  // 3
console.log(findIndex(numbers, n => n > 5));  // -1

// 使用起始索引
console.log(findIndex(numbers, n => n > 3, 4));  // 4

// 带索引的查找
console.log(findIndex(numbers, (n, i) => i > 2 && n > 3));  // 3

// 实际应用示例
interface User {
  id: number;
  name: string;
  active: boolean;
}

const users: User[] = [
  { id: 1, name: 'John', active: false },
  { id: 2, name: 'Jane', active: true },
  { id: 3, name: 'Bob', active: true }
];

// 查找第一个激活用户
const activeUserIndex = findIndex(users, user => user.active);
console.log(activeUserIndex);  // 1

// 查找指定 ID 的用户
const findUserById = (id: number) => 
  findIndex(users, user => user.id === id);

console.log(findUserById(2));  // 1
console.log(findUserById(4));  // -1
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | T[] | - | 要搜索的数组 |
| predicate | 判断函数 | (item: T, idx?: number) => boolean | - | 条件函数 |
| fromIndex | 起始位置 | number | 0 | 开始搜索的位置 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| index | 索引值 | number | - | 找到的索引或-1 |

## firstValue

获取对象数组中指定属性的第一个非空值。

- 示例

```ts
import { firstValue } from '@antv/util';

// 基本使用
const data = [
  { name: null },
  { name: 'John' },
  { name: 'Jane' }
];
console.log(firstValue(data, 'name'));  // "John"

// 数组属性
const items = [
  { tags: [] },
  { tags: ['a', 'b'] },
  { tags: ['c'] }
];
console.log(firstValue(items, 'tags'));  // "a"

// 实际应用示例
interface DataItem {
  id?: number;
  value?: string | number;
  items?: string[];
}

const dataset: DataItem[] = [
  { id: 1 },
  { id: 2, value: 'test' },
  { id: 3, value: 123 },
  { id: 4, items: ['x', 'y'] }
];

// 获取第一个有效值
console.log(firstValue(dataset, 'value'));  // "test"
console.log(firstValue(dataset, 'items'));  // "x"

// 处理不存在的属性
console.log(firstValue(dataset, 'missing'));  // null
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| data | 对象数组 | object[] | - | 要搜索的数组 |
| name | 属性名 | string | - | 要获取的属性名 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| value | 属性值 | any | null | 找到的第一个值或 null |

## flatten

将数组扁平化一层。

- 示例

```ts
import { flatten } from '@antv/util';

// 基本使用
console.log(flatten([1, [2, 3], 4]));  // [1, 2, 3, 4]
console.log(flatten([1, [2, [3]], 4]));  // [1, 2, [3], 4]

// 处理空数组
console.log(flatten([]));  // []
console.log(flatten([[], []]));  // []

// 实际应用示例
// 处理嵌套数据
const nestedData = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(flatten(nestedData));  // [1, 2, 3, 4, 5, 6]

// 处理分组数据
const groups = [
  ['A', 'B'],
  ['C'],
  ['D', 'E']
];
console.log(flatten(groups));  // ['A', 'B', 'C', 'D', 'E']

// 处理对象数组
interface Item {
  id: number;
  name: string;
}

const items: Item[][] = [
  [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
  ],
  [
    { id: 3, name: 'C' }
  ]
];

console.log(flatten(items));
// [
//   { id: 1, name: 'A' },
//   { id: 2, name: 'B' },
//   { id: 3, name: 'C' }
// ]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | T[] | - | 要扁平化的数组 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 扁平化数组 | T[] | - | 降维后的数组 |

## flattenDeep

将数组完全扁平化，递归处理所有嵌套层级。

- 示例

```ts
import { flattenDeep } from '@antv/util';

// 基本使用
console.log(flattenDeep([1, [2, [3, [4]], 5]]));  // [1, 2, 3, 4, 5]

// 处理空数组
console.log(flattenDeep([]));  // []
console.log(flattenDeep([[], [[]]]));  // []

// 处理混合类型
const mixed = [1, [2, ['a', ['b']], { x: 1 }]];
console.log(flattenDeep(mixed));  
// [1, 2, 'a', 'b', { x: 1 }]

// 处理对象数组
interface Item {
  id: number;
  children?: Item[];
}

const nested: Item[] = [
  { 
    id: 1,
    children: [
      { id: 2 },
      { 
        id: 3,
        children: [{ id: 4 }]
      }
    ]
  }
];

const flattened = flattenDeep(nested);
console.log(flattened);
// [
//   { id: 1, children: [...] },
//   { id: 2 },
//   { id: 3, children: [...] },
//   { id: 4 }
// ]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | any[] | - | 要扁平化的数组 |
| result | 结果数组 | any[] | [] | 存放结果的数组 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 扁平化数组 | any[] | - | 完全扁平化后的数组 |

## getRange

获取数值数组的范围（最小值和最大值）。

- 示例

```ts
import { getRange } from '@antv/util';

// 基本使用
console.log(getRange([1, 2, 3, 4, 5]));  
// { min: 1, max: 5 }

// 处理 NaN
console.log(getRange([1, NaN, 3, 4, NaN]));  
// { min: 1, max: 4 }

// 处理空数组
console.log(getRange([]));  
// { min: 0, max: 0 }

// 处理嵌套数组
console.log(getRange([[1, 2], [3, 4], [5]]));  
// { min: 1, max: 5 }

// 实际应用
const data = [2.5, 3.8, 1.2, 4.9, 2.1];
const { min, max } = getRange(data);
console.log(`Range: ${min} - ${max}`);  
// "Range: 1.2 - 4.9"

// 处理数据集
const dataset = [
  [1.1, 2.2, 3.3],
  [2.5, 4.5],
  [0.5, 5.5]
];
console.log(getRange(dataset));  
// { min: 0.5, max: 5.5 }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| values | 数值数组 | number[] | - | 要计算范围的数组 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 范围对象 | RangeType | - | 包含最小值和最大值的对象 |

## pull

从数组中移除指定的值，会修改原数组。

- 示例

```ts
import { pull } from '@antv/util';

// 基本使用
const numbers = [1, 2, 3, 2, 4, 2, 5];
console.log(pull(numbers, 2));  // [1, 3, 4, 5]
console.log(numbers);  // [1, 3, 4, 5]

// 移除多个值
const letters = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(letters, 'a', 'c'));  // ['b', 'b']

// 处理对象数组
interface Item {
  id: number;
  value: string;
}

const items: Item[] = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 1, value: 'c' }
];

const target = { id: 1, value: 'a' };
console.log(pull(items, target));
// [
//   { id: 2, value: 'b' },
//   { id: 1, value: 'c' }
// ]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | T[] | - | 要修改的数组 |
| values | 要移除的值 | ...any[] | - | 要移除的值列表 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 修改后的数组 | T[] | - | 移除指定值后的数组 |

## pullAt

根据索引移除数组中的元素，会修改原数组。

- 示例

```ts
import { pullAt } from '@antv/util';

// 基本使用
const numbers = [1, 2, 3, 4, 5];
console.log(pullAt(numbers, [1, 3]));  // [1, 3, 5]
console.log(numbers);  // [1, 3, 5]

// 处理重复索引
const letters = ['a', 'b', 'c', 'd'];
console.log(pullAt(letters, [1, 1, 1]));  // ['a', 'c', 'd']

// 处理对象数组
interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 4, name: 'd' }
];

console.log(pullAt(items, [0, 2]));
// [
//   { id: 2, name: 'b' },
//   { id: 4, name: 'd' }
// ]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | T[] | - | 要修改的数组 |
| indexes | 索引数组 | number[] | - | 要移除的位置索引 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 修改后的数组 | T[] | - | 移除元素后的数组 |

## reduce

对数组或对象进行归并操作，类似 Array.reduce。

- 示例

```ts
import { reduce } from '@antv/util';

// 数组归并
const numbers = [1, 2, 3, 4];
const sum = reduce(numbers, (acc, curr) => acc + curr, 0);
console.log(sum);  // 10

// 对象归并
const obj = { a: 1, b: 2, c: 3 };
const result = reduce(obj, (acc, value, key) => {
  acc[key] = value * 2;
  return acc;
}, {});
console.log(result);  // { a: 2, b: 4, c: 6 }

// 复杂示例
interface Item {
  value: number;
  weight: number;
}

const items: Item[] = [
  { value: 10, weight: 2 },
  { value: 15, weight: 3 },
  { value: 20, weight: 4 }
];

// 计算加权平均
const weightedAvg = reduce(items, 
  (acc, item) => {
    acc.sum += item.value * item.weight;
    acc.weights += item.weight;
    return acc;
  }, 
  { sum: 0, weights: 0 }
);

console.log(weightedAvg.sum / weightedAvg.weights);  // 16
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组或对象 | G[] \| ObjectType<T> | - | 要归并的数组或对象 |
| fn | 归并函数 | (result: T, data: G, idx: string \| number) => T | - | 处理每个元素的函数 |
| init | 初始值 | T | - | 归并的初始值 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 归并结果 | T | - | 归并操作的结果 |

## remove

根据条件移除数组中的元素，返回被移除的元素，会修改原数组。

- 示例

```ts
import { remove } from '@antv/util';

// 基本使用
const numbers = [1, 2, 3, 4, 5];
const evens = remove(numbers, n => n % 2 === 0);
console.log(evens);    // [2, 4]
console.log(numbers);  // [1, 3, 5]

// 使用索引
const letters = ['a', 'b', 'c', 'd'];
const removed = remove(letters, (_, i) => i > 1);
console.log(removed);   // ['c', 'd']
console.log(letters);   // ['a', 'b']

// 对象数组
interface Item {
  id: number;
  active: boolean;
}

const items: Item[] = [
  { id: 1, active: false },
  { id: 2, active: true },
  { id: 3, active: true }
];

const inactive = remove(items, item => !item.active);
console.log(inactive);  // [{ id: 1, active: false }]
console.log(items);     // [{ id: 2, active: true }, { id: 3, active: true }]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | T[] | - | 要修改的数组 |
| predicate | 判断函数 | (value: T, idx: number, arr?: T[]) => boolean | - | 返回 true 表示移除该元素 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 移除的元素 | T[] | - | 被移除的元素数组 |

## sortBy

对对象数组进行排序，支持函数、字符串或字符串数组作为排序依据。

- 示例

```ts
import { sortBy } from '@antv/util';

// 使用字符串键排序
const users = [
  { name: 'Bob', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Carol', age: 35 }
];

console.log(sortBy(users, 'age'));
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 35 }
// ]

// 使用多个键排序
const items = [
  { type: 'A', value: 2 },
  { type: 'B', value: 1 },
  { type: 'A', value: 1 }
];

console.log(sortBy(items, ['type', 'value']));
// [
//   { type: 'A', value: 1 },
//   { type: 'A', value: 2 },
//   { type: 'B', value: 1 }
// ]

// 使用函数排序
const numbers = [
  { value: -3 },
  { value: 1 },
  { value: -2 }
];

console.log(sortBy(numbers, item => Math.abs(item.value)));
// [
//   { value: 1 },
//   { value: -2 },
//   { value: -3 }
// ]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 对象数组 | ObjectType<T>[] | - | 要排序的数组 |
| key | 排序依据 | Function \| string \| string[] | - | 排序的键或函数 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 排序后的数组 | ObjectType<T>[] | - | 排序后的数组（修改原数组） |

## union

合并多个数组并去除重复值。

- 示例

```ts
import { union } from '@antv/util';

// 基本使用
console.log(union([1, 2], [2, 3], [3, 4]));  // [1, 2, 3, 4]

// 处理重复值
console.log(union(
  [1, 1, 2], 
  [2, 2, 3], 
  [3, 3, 4]
));  // [1, 2, 3, 4]

// 混合类型
console.log(union(
  ['a', 1], 
  [1, 'b'], 
  ['b', 2]
));  // ['a', 1, 'b', 2]

// 对象数组
const arr1 = [{ id: 1 }, { id: 2 }];
const arr2 = [{ id: 2 }, { id: 3 }];
console.log(union(arr1, arr2));
// [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| sources | 源数组列表 | ...any[][] | - | 要合并的数组列表 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 合并结果 | any[] | - | 去重后的合并数组 |

## uniq

数组去重，返回新数组。

- 示例

```ts
import { uniq } from '@antv/util';

// 基本使用
console.log(uniq([1, 2, 2, 3, 3, 3]));  // [1, 2, 3]

// 混合类型
console.log(uniq([1, '1', true, 1, true]));  // [1, '1', true]

// 使用缓存
const cache = new Map();
console.log(uniq([1, 2, 2, 3], cache));  // [1, 2, 3]
console.log(uniq([2, 3, 3, 4], cache));  // [4]

// 对象数组
const objects = [
  { id: 1 },
  { id: 2 },
  { id: 1 }
];
console.log(uniq(objects));  
// [{ id: 1 }, { id: 2 }, { id: 1 }] // 注意：对象引用不同

// 空数组处理
console.log(uniq([]));  // []
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | any[] | - | 要去重的数组 |
| cache | 缓存对象 | Map | new Map() | 用于提升性能的缓存 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 去重数组 | any[] | - | 去重后的新数组 |

## valuesOfKey

从对象数组中提取指定键的唯一值列表。

- 示例

```ts
import { valuesOfKey } from '@antv/util';

// 基本使用
const data = [
  { color: 'red' },
  { color: 'blue' },
  { color: 'red' }
];
console.log(valuesOfKey(data, 'color'));  // ['red', 'blue']

// 处理数组值
const items = [
  { categories: ['A', 'B'] },
  { categories: ['B', 'C'] },
  { categories: ['A', 'C'] }
];
console.log(valuesOfKey(items, 'categories'));  // ['A', 'B', 'C']

// 混合类型属性
const mixed = [
  { type: 1 },
  { type: [2, 3] },
  { type: '4' }
];
console.log(valuesOfKey(mixed, 'type'));  // [1, 2, 3, '4']

// 处理空值
const withNulls = [
  { id: 1 },
  { id: null },
  { id: undefined },
  { id: 2 }
];
console.log(valuesOfKey(withNulls, 'id'));  // [1, 2]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| data | 对象数组 | any[] | - | 要处理的数组 |
| name | 键名 | string | - | 要提取的键名 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 值列表 | any[] | - | 去重后的值数组 |

## head

获取数组或类数组对象的第一个元素。

- 示例

```ts
import { head } from '@antv/util';

// 基本使用
console.log(head([1, 2, 3]));  // 1
console.log(head([]));         // undefined

// 字符串
console.log(head('abc'));  // 'a'
console.log(head(''));     // undefined

// 类数组对象
const arrayLike = { 
  0: 'a', 
  1: 'b', 
  length: 2 
};
console.log(head(arrayLike));  // 'a'

// 非数组类型
console.log(head(null));       // undefined
console.log(head(undefined));  // undefined
console.log(head(42));         // undefined
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| o | 输入值 | unknown | - | 要获取首个元素的数组或类数组对象 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 首个元素 | any | undefined | 第一个元素或 undefined |

## last

获取数组或类数组对象的最后一个元素。

- 示例

```ts
import { last } from '@antv/util';

// 基本使用
console.log(last([1, 2, 3]));  // 3
console.log(last([]));         // undefined

// 字符串
console.log(last('abc'));  // 'c'
console.log(last(''));     // undefined

// 类数组对象
const arrayLike = { 
  0: 'a', 
  1: 'b', 
  length: 2 
};
console.log(last(arrayLike));  // 'b'

// 非数组类型
console.log(last(null));       // undefined
console.log(last(undefined));  // undefined
console.log(last(42));         // undefined
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| o | 输入值 | unknown | - | 要获取最后元素的数组或类数组对象 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 最后元素 | any | undefined | 最后一个元素或 undefined |

## startsWith

检查数组或字符串是否以指定元素开头。

- 示例

```ts
import { startsWith } from '@antv/util';

// 数组使用
console.log(startsWith([1, 2, 3], 1));     // true
console.log(startsWith([1, 2, 3], 2));     // false
console.log(startsWith([], 1));            // false

// 字符串使用
console.log(startsWith('abc', 'a'));       // true
console.log(startsWith('abc', 'b'));       // false
console.log(startsWith('', 'a'));          // false

// 对象数组
const items = [
  { id: 1 },
  { id: 2 }
];
console.log(startsWith(items, items[0]));  // true

// 类型安全
console.log(startsWith(['a', 'b'], 1));    // false
console.log(startsWith([1, 2], '1'));      // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 输入值 | string \| T[] | - | 要检查的数组或字符串 |
| e | 目标元素 | string \| T | - | 要匹配的元素 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 检查结果 | boolean | - | 是否以指定元素开头 |

## endsWith

检查数组或字符串是否以指定元素结尾。

- 示例

```ts
import { endsWith } from '@antv/util';

// 数组使用
console.log(endsWith([1, 2, 3], 3));     // true
console.log(endsWith([1, 2, 3], 2));     // false
console.log(endsWith([], 1));            // false

// 字符串使用
console.log(endsWith('abc', 'c'));       // true
console.log(endsWith('abc', 'b'));       // false
console.log(endsWith('', 'a'));          // false

// 对象数组
const items = [
  { id: 1 },
  { id: 2 }
];
console.log(endsWith(items, items[1]));  // true

// 类型安全
console.log(endsWith(['a', 'b'], 1));    // false
console.log(endsWith([1, 2], '2'));      // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 输入值 | string \| T[] | - | 要检查的数组或字符串 |
| e | 目标元素 | string \| T | - | 要匹配的元素 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 检查结果 | boolean | - | 是否以指定元素结尾 |

## filter

根据条件函数过滤数组元素。

- 示例

```ts
import { filter } from '@antv/util';

// 基本使用
const numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, n => n % 2 === 0));  // [2, 4]

// 使用索引
const letters = ['a', 'b', 'c'];
console.log(filter(letters, (_, i) => i > 0));  // ['b', 'c']

// 对象数组
interface Item {
  id: number;
  active: boolean;
}

const items: Item[] = [
  { id: 1, active: false },
  { id: 2, active: true },
  { id: 3, active: true }
];

console.log(filter(items, item => item.active));
// [
//   { id: 2, active: true },
//   { id: 3, active: true }
// ]

// 类数组对象
const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};
console.log(filter(arrayLike as any, v => v > 'a'));  // ['b', 'c']
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | T[] | - | 要过滤的数组 |
| func | 过滤函数 | (v: T, idx: number) => boolean | - | 返回 true 表示保留该元素 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 过滤结果 | T[] | - | 过滤后的新数组 |

## every

检查数组中的所有元素是否都满足条件。

- 示例

```ts
import { every } from '@antv/util';

// 基本使用
const numbers = [2, 4, 6, 8];
console.log(every(numbers, n => n % 2 === 0));  // true
console.log(every(numbers, n => n > 5));        // false

// 使用索引
const letters = ['a', 'b', 'c'];
console.log(every(letters, (_, i) => i < 3));   // true

// 对象数组
interface Item {
  id: number;
  active: boolean;
}

const items: Item[] = [
  { id: 1, active: true },
  { id: 2, active: true },
  { id: 3, active: false }
];

console.log(every(items, item => item.active));  // false

// 空数组
console.log(every([], () => false));  // true
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | T[] | - | 要检查的数组 |
| func | 检查函数 | (v: T, idx?: number) => any | - | 返回真值表示元素满足条件 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 检查结果 | boolean | - | 是否所有元素都满足条件 |

## some

检查数组中是否存在满足条件的元素。

- 示例

```ts
import { some } from '@antv/util';

// 基本使用
const numbers = [1, 2, 3, 4];
console.log(some(numbers, n => n > 3));    // true
console.log(some(numbers, n => n > 5));    // false

// 使用索引
const letters = ['a', 'b', 'c'];
console.log(some(letters, (_, i) => i === 1));  // true

// 对象数组
interface Item {
  id: number;
  active: boolean;
}

const items: Item[] = [
  { id: 1, active: false },
  { id: 2, active: true },
  { id: 3, active: false }
];

console.log(some(items, item => item.active));  // true

// 空数组
console.log(some([], () => true));  // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| arr | 数组 | T[] | - | 要检查的数组 |
| func | 检查函数 | (v: T, idx?: number) => any | - | 返回真值表示元素满足条件 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 检查结果 | boolean | - | 是否存在满足条件的元素 |

## group

将数组按条件分组，返回分组后的数组列表。

- 示例

```ts
import { group } from '@antv/util';

// 使用函数分组
const numbers = [1, 2, 3, 4, 5];
console.log(group(numbers, n => n % 2 === 0 ? 'even' : 'odd'));
// [[1, 3, 5], [2, 4]]

// 使用属性名分组
const items = [
  { type: 'A', value: 1 },
  { type: 'B', value: 2 },
  { type: 'A', value: 3 }
];
console.log(group(items, 'type'));
// [
//   [{ type: 'A', value: 1 }, { type: 'A', value: 3 }],
//   [{ type: 'B', value: 2 }]
// ]

// 使用多个属性分组
const data = [
  { type: 'A', status: 1 },
  { type: 'A', status: 2 },
  { type: 'B', status: 1 }
];
console.log(group(data, ['type', 'status']));
// [
//   [{ type: 'A', status: 1 }],
//   [{ type: 'A', status: 2 }],
//   [{ type: 'B', status: 1 }]
// ]

// 无条件分组
console.log(group([1, 2, 3], null));  // [[1, 2, 3]]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| data | 数组 | T[] | - | 要分组的数组 |
| condition | 分组条件 | ((v: T) => string) \| string \| string[] | - | 分组条件 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 分组结果 | T[][] | - | 分组后的数组列表 |

## groupBy

按条件将数组分组，返回分组对象。

- 示例

```ts
import { groupBy } from '@antv/util';

// 使用函数分组
const numbers = [1, 2, 3, 4, 5];
console.log(groupBy(numbers, n => n % 2 === 0 ? 'even' : 'odd'));
// {
//   odd: [1, 3, 5],
//   even: [2, 4]
// }

// 使用属性名分组
const items = [
  { type: 'A', value: 1 },
  { type: 'B', value: 2 },
  { type: 'A', value: 3 }
];
console.log(groupBy(items, 'type'));
// {
//   A: [
//     { type: 'A', value: 1 },
//     { type: 'A', value: 3 }
//   ],
//   B: [
//     { type: 'B', value: 2 }
//   ]
// }

// 处理空值
console.log(groupBy([], n => n));  // {}
console.log(groupBy(numbers, null));  // {}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| data | 数组 | T[] | - | 要分组的数组 |
| condition | 分组条件 | ((item: T) => string) \| string | - | 分组条件函数或属性名 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 分组结果 | ObjectType<T> | - | 分组后的对象 |

## groupToMap

将数组按条件分组成映射对象，支持多字段组合分组。

- 示例

```ts
import { groupToMap } from '@antv/util';

// 使用函数分组
const numbers = [1, 2, 3, 4];
console.log(groupToMap(numbers, n => `group${n % 2}`));
// {
//   _group0: [2, 4],
//   _group1: [1, 3]
// }

// 使用单个属性分组
const items = [
  { type: 'A', value: 1 },
  { type: 'B', value: 2 },
  { type: 'A', value: 3 }
];
console.log(groupToMap(items, 'type'));
// {
//   _A: [
//     { type: 'A', value: 1 },
//     { type: 'A', value: 3 }
//   ],
//   _B: [
//     { type: 'B', value: 2 }
//   ]
// }

// 使用多个属性分组
const data = [
  { type: 'A', status: 1 },
  { type: 'A', status: 2 },
  { type: 'B', status: 1 }
];
console.log(groupToMap(data, ['type', 'status']));
// {
//   _A1: [{ type: 'A', status: 1 }],
//   _A2: [{ type: 'A', status: 2 }],
//   _B1: [{ type: 'B', status: 1 }]
// }

// 无条件分组
console.log(groupToMap([1, 2, 3], null));
// { 0: [1, 2, 3] }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| data | 数组 | any[] | - | 要分组的数组 |
| condition | 分组条件 | string[] \| string \| ((row: any) => string) | - | 分组条件 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 分组结果 | object | - | 分组后的映射对象 |

## getWrapBehavior

获取对象方法的事件包装函数。

- 示例

```ts
import { getWrapBehavior } from '@antv/util';

class Button {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  onClick(e: Event) {
    console.log(`${this.name} clicked`, e);
  }

  unbind(element: HTMLElement) {
    const handler = getWrapBehavior(this, 'onClick');
    element.removeEventListener('click', handler);
  }
}

// 基本使用
const button = new Button('test');
const handler = getWrapBehavior(button, 'onClick');
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| obj | 对象 | object | - |
| action | 方法名 | string | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| handler | 包装函数 | Function | - |

## wrapBehavior

创建对象方法的事件包装函数。

- 示例

```ts
import { wrapBehavior } from '@antv/util';

class Button {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  onClick(e: Event) {
    console.log(`${this.name} clicked`, e);
  }

  bind(element: HTMLElement) {
    const handler = wrapBehavior(this, 'onClick');
    element.addEventListener('click', handler);
  }
}

// 基本使用
const button = new Button('test');
const handler = wrapBehavior(button, 'onClick');

// 实际应用
class Component {
  private handlers: { [key: string]: Function } = {};

  constructor(public element: HTMLElement) {}

  on(eventName: string, handler: Function) {
    const wrappedHandler = wrapBehavior({
      handleEvent: handler
    }, 'handleEvent');
    
    this.handlers[eventName] = wrappedHandler;
    this.element.addEventListener(eventName, wrappedHandler);
  }
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| obj | 对象 | object | - |
| action | 方法名 | string | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| handler | 包装函数 | Function | - |

## numberToColor

将数字转换为十六进制颜色值，带缓存功能。

- 示例

```ts
import { numberToColor } from '@antv/util';

// 基本使用
console.log(numberToColor(0));          // "#000000"
console.log(numberToColor(255));        // "#0000ff"
console.log(numberToColor(16711680));   // "#ff0000"

// 缓存复用
const color1 = numberToColor(12345);
const color2 = numberToColor(12345);    // 使用缓存值
console.log(color1 === color2);         // true
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| num | 数字 | number | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| color | 颜色值 | string | - |

## parseRadius

解析圆角半径值，支持单个数值或数组形式。

- 示例

```ts
import { parseRadius } from '@antv/util';

// 单个数值
console.log(parseRadius(5));
// { r1: 5, r2: 5, r3: 5, r4: 5 }

// 数组 - 1个值
console.log(parseRadius([10]));
// { r1: 10, r2: 10, r3: 10, r4: 10 }

// 数组 - 2个值
console.log(parseRadius([5, 10]));
// { r1: 5, r2: 10, r3: 5, r4: 10 }

// 数组 - 3个值
console.log(parseRadius([5, 10, 15]));
// { r1: 5, r2: 10, r3: 15, r4: 10 }

// 数组 - 4个值
console.log(parseRadius([5, 10, 15, 20]));
// { r1: 5, r2: 10, r3: 15, r4: 20 }

// 实际应用
function drawRoundRect(x: number, y: number, width: number, height: number, radius: number | number[]) {
  const { r1, r2, r3, r4 } = parseRadius(radius);
  // 使用四个圆角绘制矩形...
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| radius | 圆角半径 | number \| number[] | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 四个角的半径 | RadiusType | - |

## clamp

将数值限制在指定范围内。

- 示例

```ts
import { clamp } from '@antv/util';

// 基本使用
console.log(clamp(5, 0, 10));    // 5
console.log(clamp(-5, 0, 10));   // 0
console.log(clamp(15, 0, 10));   // 10
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| a | 要限制的数值 | number | - |
| min | 最小值 | number | - |
| max | 最大值 | number | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 限制后的数值 | number | - |

## fixedBase

按指定精度格式化数值。

- 示例

```ts
import { fixedBase } from '@antv/util';

// 基本使用
console.log(fixedBase(3.1415926, 0));     // 3
console.log(fixedBase(3.1415926, '0.1')); // 3.1
console.log(fixedBase(3.1415926, '0.00')); // 3.14

// 处理长小数
console.log(fixedBase(1/3, '0.000')); // 0.333
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| v | 要格式化的数值 | number | - |
| base | 精度基准值 | number \| string | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 格式化后的数值 | number | - |

## isDecimal

判断是否为小数。

- 示例

```ts
import { isDecimal } from '@antv/util';

// 基本使用
console.log(isDecimal(3.14));  // true
console.log(isDecimal(3));     // false
console.log(isDecimal('3.14')); // false
console.log(isDecimal(null));   // false

// 特殊值
console.log(isDecimal(1.0));   // false
console.log(isDecimal(NaN));   // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| num | 要检查的值 | unknown | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为小数 | boolean | - |

## isEven

判断是否为偶数。

- 示例

```ts
import { isEven } from '@antv/util';

// 基本使用
console.log(isEven(2));     // true
console.log(isEven(3));     // false
console.log(isEven(0));     // true
console.log(isEven(-2));    // true
console.log(isEven(2.2));   // false
console.log(isEven(NaN));   // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| num | 要检查的数值 | number | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为偶数 | boolean | - |

## isInteger

判断是否为整数。

- 示例

```ts
import { isInteger } from '@antv/util';

// 基本使用
console.log(isInteger(1));     // true
console.log(isInteger(1.1));   // false
console.log(isInteger(0));     // true
console.log(isInteger(-1));    // true
console.log(isInteger(NaN));   // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的数值 | number | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为整数 | boolean | - |

## isNegative

判断是否为负数。

- 示例

```ts
import { isNegative } from '@antv/util';

// 基本使用
console.log(isNegative(-1));    // true
console.log(isNegative(0));     // false
console.log(isNegative(1));     // false
console.log(isNegative(-1.1));  // true
console.log(isNegative(NaN));   // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| num | 要检查的数值 | number | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为负数 | boolean | - |

## isNumberEqual

判断两个数是否相等（考虑精度）。

- 示例

```ts
import { isNumberEqual } from '@antv/util';

// 基本使用
console.log(isNumberEqual(0.1 + 0.2, 0.3));     // true
console.log(isNumberEqual(1, 1.000001, 0.001)); // true
console.log(isNumberEqual(1, 2));               // false

// 自定义精度
console.log(isNumberEqual(1, 1.1, 0.2));        // true
console.log(isNumberEqual(1, 1.1, 0.01));       // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| a | 第一个数 | number | - |
| b | 第二个数 | number | - |
| precision | 精度 | number | 0.00001 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否相等 | boolean | - |

## isOdd

判断是否为奇数。

- 示例

```ts
import { isOdd } from '@antv/util';

// 基本使用
console.log(isOdd(1));     // true
console.log(isOdd(2));     // false
console.log(isOdd(-1));    // true
console.log(isOdd(1.1));   // false
console.log(isOdd(NaN));   // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| num | 要检查的数值 | number | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为奇数 | boolean | - |

## isPositive

判断是否为正数。

- 示例

```ts
import { isPositive } from '@antv/util';

// 基本使用
console.log(isPositive(1));     // true
console.log(isPositive(0));     // false
console.log(isPositive(-1));    // false
console.log(isPositive(1.1));   // true
console.log(isPositive(NaN));   // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| num | 要检查的数值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为正数 | boolean | - |

## max

计算数组的最大值。

- 示例

```ts
import { max } from '@antv/util';

// 基本使用
console.log(max([1, 2, 3]));     // 3
console.log(max([-1, -2, -3]));  // -1
console.log(max([]));            // -Infinity
console.log(max([5]));           // 5
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| arr | 数值数组 | number[] | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 最大值 | number | - |

## maxBy

根据指定条件计算数组的最大值。

- 示例

```ts
import { maxBy } from '@antv/util';

// 使用函数
const objects = [{ n: 1 }, { n: 2 }];
console.log(maxBy(objects, o => o.n));  // { n: 2 }

// 使用属性名
console.log(maxBy(objects, 'n'));       // { n: 2 }

// 复杂对象
const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 30 },
  { name: 'C', value: 20 }
];
console.log(maxBy(data, 'value'));      // { name: 'B', value: 30 }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| arr | 数组 | T[] | - |
| fn | 迭代函数或属性名 | ((v: T) => number) \| string | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 最大值元素 | T \| undefined | - |

## min

计算数组的最小值。

- 示例

```ts
import { min } from '@antv/util';

// 基本使用
console.log(min([1, 2, 3]));     // 1
console.log(min([-1, -2, -3]));  // -3
console.log(min([]));            // undefined
console.log(min([5]));           // 5
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| arr | 数值数组 | number[] | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 最小值 | number \| undefined | - |

## minBy

根据指定条件计算数组的最小值。

- 示例

```ts
import { minBy } from '@antv/util';

// 使用函数
const objects = [{ n: 1 }, { n: 2 }];
console.log(minBy(objects, o => o.n));  // { n: 1 }

// 使用属性名
console.log(minBy(objects, 'n'));       // { n: 1 }

// 复杂对象
const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 30 },
  { name: 'C', value: 20 }
];
console.log(minBy(data, 'value'));      // { name: 'A', value: 10 }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| arr | 数组 | T[] | - |
| fn | 迭代函数或属性名 | ((v: T) => number) \| string | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 最小值元素 | T \| undefined | - |

## mod

计算正确的模运算结果（包括负数）。

- 示例

```ts
import { mod } from '@antv/util';

// 基本使用
console.log(mod(5, 3));    // 2
console.log(mod(-5, 3));   // 1
console.log(mod(5, -3));   // -1
console.log(mod(-5, -3));  // -2

// 常见应用
function getCircularIndex(index: number, length: number) {
  return mod(index, length);
}

console.log(getCircularIndex(7, 5));   // 2
console.log(getCircularIndex(-1, 5));  // 4
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| n | 被除数 | number | - |
| m | 除数 | number | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 模运算结果 | number | - |

## toDegree

将弧度转换为角度。

- 示例

```ts
import { toDegree } from '@antv/util';

// 基本使用
console.log(toDegree(Math.PI));      // 180
console.log(toDegree(Math.PI / 2));  // 90
console.log(toDegree(Math.PI / 4));  // 45
console.log(toDegree(0));            // 0

// 实际应用
const angle = Math.atan2(1, 1);
console.log(toDegree(angle));  // 45
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| radian | 弧度值 | number | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 角度值 | number | - |

## toRadian

将角度转换为弧度。

- 示例

```ts
import { toRadian } from '@antv/util';

// 基本使用
console.log(toRadian(180));  // 3.141592653589793
console.log(toRadian(90));   // 1.5707963267948966
console.log(toRadian(45));   // 0.7853981633974483
console.log(toRadian(0));    // 0

// 实际应用
function rotatePoint(x: number, y: number, angle: number) {
  const rad = toRadian(angle);
  return {
    x: x * Math.cos(rad) - y * Math.sin(rad),
    y: x * Math.sin(rad) + y * Math.cos(rad)
  };
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| degree | 角度值 | number | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 弧度值 | number | - |

## each

遍历数组或对象的每个元素。

- 示例

```ts
import { each } from '@antv/util';

// 遍历数组
const arr = [1, 2, 3];
each(arr, (item, index) => {
  console.log(item, index);
});
// 1 0
// 2 1
// 3 2

// 遍历对象
const obj = { a: 1, b: 2, c: 3 };
each(obj, (value, key) => {
  console.log(key, value);
});
// a 1
// b 2
// c 3

// 提前终止遍历
each(arr, (item) => {
  if (item === 2) return false;
  console.log(item);
});
// 1
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| elements | 要遍历的数组或对象 | any[] \| object | - |
| func | 遍历函数 | (v: any, k: any) => any | - |

## has/hasKey

检查对象是否具有指定属性。

- 示例

```ts
import { has } from '@antv/util';

const obj = { a: 1, b: 2 };

console.log(has(obj, 'a'));     // true
console.log(has(obj, 'c'));     // false
console.log(has(obj, 'toString')); // false (只检查自有属性)
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| obj | 要检查的对象 | object | - |
| key | 属性名 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否具有该属性 | boolean | - |

## hasValue

检查对象是否包含指定值。

- 示例

```ts
import { hasValue } from '@antv/util';

const obj = { a: 1, b: 2, c: 3 };

console.log(hasValue(obj, 1));  // true
console.log(hasValue(obj, 4));  // false

// 复杂对象
const data = {
  user: { name: 'John' },
  age: 30
};
console.log(hasValue(data, 30));  // true
console.log(hasValue(data, { name: 'John' }));  // true
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| obj | 要检查的对象 | object | - |
| value | 要查找的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否包含该值 | boolean | - |

## keys

获取对象的所有自有可枚举属性的键名。

- 示例

```ts
import { keys } from '@antv/util';

// 基本使用
const obj = { a: 1, b: 2, c: 3 };
console.log(keys(obj));  // ['a', 'b', 'c']

// 函数对象
function Foo() {}
Foo.prototype.bar = 1;
console.log(keys(Foo));  // []

// 数组
console.log(keys(['a', 'b', 'c']));  // ['0', '1', '2']

// 空对象
console.log(keys({}));  // []
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| obj | 要获取键名的对象 | object | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 键名数组 | string[] | - |

## isMatch

检查对象是否匹配指定的属性值。

- 示例

```ts
import { isMatch } from '@antv/util';

// 基本使用
const object = { a: 1, b: 2, c: 3 };

console.log(isMatch(object, { a: 1 }));          // true
console.log(isMatch(object, { a: 1, b: 2 }));    // true
console.log(isMatch(object, { a: 1, d: 4 }));    // false

// 空对象
console.log(isMatch({}, {}));                    // true
console.log(isMatch(null, {}));                  // true
console.log(isMatch(undefined, { a: 1 }));       // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| obj | 要检查的对象 | any | - |
| attrs | 要匹配的属性对象 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否匹配 | boolean | - |

## values

获取对象的所有值。

- 示例

```ts
import { values } from '@antv/util';

// 基本使用
const obj = { a: 1, b: 2, c: 3 };
console.log(values(obj));  // [1, 2, 3]

// 函数对象
function Foo() {}
Foo.a = 1;
console.log(values(Foo));  // [1]

// 数组
console.log(values(['a', 'b', 'c']));  // ['a', 'b', 'c']

// 空对象
console.log(values({}));  // []
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| obj | 要获取值的对象 | object | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 值数组 | any[] | - |

## lowerCase

转换字符串为小写。

- 示例

```ts
import { lowerCase } from '@antv/util';

console.log(lowerCase('Hello'));     // "hello"
console.log(lowerCase('WORLD'));     // "world"
console.log(lowerCase('Hello123'));  // "hello123"
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| str | 要转换的字符串 | string | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 转换后的字符串 | string | - |

## lowerFirst

将字符串的第一个字符转换为小写。

- 示例

```ts
import { lowerFirst } from '@antv/util';

console.log(lowerFirst('Hello'));    // "hello"
console.log(lowerFirst('WORLD'));    // "wORLD"
console.log(lowerFirst('ABC'));      // "aBC"
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要转换的字符串 | string | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 转换后的字符串 | string | - |

## substitute

字符串模板替换。

- 示例

```ts
import { substitute } from '@antv/util';

// 基本使用
const template = 'Hello {name}!';
console.log(substitute(template, { name: 'World' }));  
// "Hello World!"

// 多个替换
const complex = '{greeting} {user}!';
console.log(substitute(complex, {
  greeting: 'Hi',
  user: 'John'
}));
// "Hi John!"

// 转义
console.log(substitute('\\{escaped} {normal}', { normal: 'value' }));
// "{escaped} value"
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| str | 模板字符串 | string | - |
| o | 替换值对象 | ObjectType<T> | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 替换后的字符串 | string | - |

## upperCase

转换字符串为大写。

- 示例

```ts
import { upperCase } from '@antv/util';

console.log(upperCase('hello'));     // "HELLO"
console.log(upperCase('World'));     // "WORLD"
console.log(upperCase('hello123'));  // "HELLO123"
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| str | 要转换的字符串 | string | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 转换后的字符串 | string | - |

## upperFirst

将字符串的第一个字符转换为大写。

- 示例

```ts
import { upperFirst } from '@antv/util';

console.log(upperFirst('hello'));    // "Hello"
console.log(upperFirst('world'));    // "World"
console.log(upperFirst('abc'));      // "Abc"
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要转换的字符串 | string | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 转换后的字符串 | string | - |

## getType

获取值的类型字符串。

- 示例

```ts
import { getType } from '@antv/util';

console.log(getType([]));           // "Array"
console.log(getType({}));           // "Object"
console.log(getType(''));           // "String"
console.log(getType(1));            // "Number"
console.log(getType(true));         // "Boolean"
console.log(getType(null));         // "Null"
console.log(getType(undefined));    // "Undefined"
console.log(getType(new Date()));   // "Date"
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 类型字符串 | string | - |

## isArguments

判断值是否为 Arguments 对象。

- 示例

```ts
import { isArguments } from '@antv/util';

function test() {
  console.log(isArguments(arguments));  // true
}
test();

console.log(isArguments([]));           // false
console.log(isArguments({}));           // false
console.log(isArguments(null));         // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为 Arguments 对象 | boolean | - |

## isArray

判断值是否为数组。

- 示例

```ts
import { isArray } from '@antv/util';

console.log(isArray([1, 2, 3]));     // true
console.log(isArray([]));            // true
console.log(isArray(new Array(3)));  // true
console.log(isArray('abc'));         // false
console.log(isArray({ length: 3 })); // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | unknown | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为数组 | boolean | - |

## isArrayLike

判断值是否为类数组对象。

- 示例

```ts
import { isArrayLike } from '@antv/util';

console.log(isArrayLike([1, 2, 3]));  // true
console.log(isArrayLike('abc'));       // true
console.log(isArrayLike({ length: 3 })); // true
console.log(isArrayLike(null));       // false
console.log(isArrayLike(undefined));  // false
console.log(isArrayLike(() => {}));   // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为类数组对象 | boolean | - |

## isBoolean

判断值是否为布尔值。

- 示例

```ts
import { isBoolean } from '@antv/util';

console.log(isBoolean(true));      // true
console.log(isBoolean(false));     // true
console.log(isBoolean(0));         // false
console.log(isBoolean('true'));    // false
console.log(isBoolean(new Boolean(true))); // true
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为布尔值 | boolean | - |

## isDate

判断值是否为日期对象。

- 示例

```ts
import { isDate } from '@antv/util';

console.log(isDate(new Date()));     // true
console.log(isDate(Date.now()));     // false
console.log(isDate('2023-01-01'));   // false
console.log(isDate({}));             // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | unknown | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为日期对象 | boolean | - |

## isError

判断值是否为错误对象。

- 示例

```ts
import { isError } from '@antv/util';

console.log(isError(new Error()));       // true
console.log(isError(new TypeError()));   // true
console.log(isError('error'));           // false
console.log(isError({ message: 'Error' })); // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为错误对象 | boolean | - |

## isFunction

判断值是否为函数。

- 示例

```ts
import { isFunction } from '@antv/util';

console.log(isFunction(() => {}));     // true
console.log(isFunction(function(){})); // true
console.log(isFunction(class {}));     // true
console.log(isFunction({}));           // false
console.log(isFunction(null));         // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | unknown | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为函数 | boolean | - |

## isFinite

判断值是否为有限数。

- 示例

```ts
import { isFinite } from '@antv/util';

console.log(isFinite(123));       // true
console.log(isFinite(-1.23));     // true
console.log(isFinite(Infinity));  // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN));       // false
console.log(isFinite('123'));     // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | number | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为有限数 | boolean | - |

## isNil

判断值是否为 null 或 undefined。

- 示例

```ts
import { isNil } from '@antv/util';

console.log(isNil(null));      // true
console.log(isNil(undefined)); // true
console.log(isNil(0));         // false
console.log(isNil(''));        // false
console.log(isNil(false));     // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | unknown | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为 null 或 undefined | boolean | - |

## isNull

判断值是否为 null。

- 示例

```ts
import { isNull } from '@antv/util';

console.log(isNull(null));      // true
console.log(isNull(undefined)); // false
console.log(isNull(0));         // false
console.log(isNull(''));        // false
console.log(isNull({}));        // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | unknown | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为 null | boolean | - |

## isNumber

判断值是否为数字。

- 示例

```ts
import { isNumber } from '@antv/util';

console.log(isNumber(1));         // true
console.log(isNumber(1.5));       // true
console.log(isNumber(NaN));       // true
console.log(isNumber(Infinity));  // true
console.log(isNumber('1'));       // false
console.log(isNumber(true));      // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | unknown | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为数字 | boolean | - |

## isObject

判断值是否为对象（包括函数和数组）。

- 示例

```ts
import { isObject } from '@antv/util';

console.log(isObject({}));              // true
console.log(isObject([1, 2, 3]));       // true
console.log(isObject(() => {}));        // true
console.log(isObject(new Date()));      // true
console.log(isObject(null));            // false
console.log(isObject(undefined));       // false
console.log(isObject('string'));        // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为对象 | boolean | - |

## isObjectLike

判断值是否为类对象（对象但不包括函数）。

- 示例

```ts
import { isObjectLike } from '@antv/util';

console.log(isObjectLike({}));              // true
console.log(isObjectLike([1, 2, 3]));       // true
console.log(isObjectLike(new Date()));      // true
console.log(isObjectLike(() => {}));        // false
console.log(isObjectLike(null));            // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为类对象 | boolean | - |

## isPlainObject

判断值是否为普通对象（由 `{}` 或 `new Object` 创建）。

- 示例

```ts
import { isPlainObject } from '@antv/util';

console.log(isPlainObject({}));                    // true
console.log(isPlainObject({ x: 0, y: 0 }));       // true
console.log(isPlainObject(Object.create(null)));   // true
console.log(isPlainObject([1, 2, 3]));            // false
console.log(isPlainObject(new Date()));           // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为普通对象 | boolean | - |

## isPrototype

判断值是否为原型对象。

- 示例

```ts
import { isPrototype } from '@antv/util';

function Foo() {}
console.log(isPrototype(Foo.prototype));          // true
console.log(isPrototype(Object.prototype));       // true
console.log(isPrototype({}));                     // false
console.log(isPrototype(Object.create(null)));    // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为原型对象 | boolean | - |

## isRegExp

判断值是否为正则表达式。

- 示例

```ts
import { isRegExp } from '@antv/util';

console.log(isRegExp(/abc/));           // true
console.log(isRegExp(new RegExp('abc'))); // true
console.log(isRegExp('/abc/'));         // false
console.log(isRegExp({}));              // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| str | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为正则表达式 | boolean | - |

## isString

判断值是否为字符串。

- 示例

```ts
import { isString } from '@antv/util';

console.log(isString('abc'));     // true
console.log(isString(''));        // true
console.log(isString(123));       // false
console.log(isString({}));        // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | unknown | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为字符串 | boolean | - |

## isType

判断值的具体类型。

- 示例

```ts
import { isType } from '@antv/util';

console.log(isType([], 'Array'));         // true
console.log(isType({}, 'Object'));        // true
console.log(isType('abc', 'String'));     // true
console.log(isType(123, 'Number'));       // true
console.log(isType(true, 'Boolean'));     // true
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |
| type | 类型字符串 | string | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为指定类型 | boolean | - |

## isUndefined

判断值是否为 undefined。

- 示例

```ts
import { isUndefined } from '@antv/util';

console.log(isUndefined(undefined));  // true
console.log(isUndefined(void 0));     // true
console.log(isUndefined(null));       // false
console.log(isUndefined(''));         // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为 undefined | boolean | - |

## isElement

判断值是否为 DOM 元素或文档对象。

- 示例

```ts
import { isElement } from '@antv/util';

console.log(isElement(document.body));          // true
console.log(isElement(document));               // true
console.log(isElement(document.createElement('div'))); // true
console.log(isElement('<div>'));                // false
console.log(isElement({}));                     // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | unknown | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为 DOM 元素 | boolean | - |

## requestAnimationFrame

跨浏览器的 requestAnimationFrame 实现，用于执行动画。

- 示例

```ts
import { requestAnimationFrame } from '@antv/util';

// 基本使用
requestAnimationFrame(() => {
  console.log('Animation frame');
});

// 动画循环
function animate() {
  // 更新动画
  requestAnimationFrame(animate);
}
animate();

// 实际应用示例
function smoothScroll(element: HTMLElement, target: number, duration: number) {
  const start = element.scrollTop;
  const distance = target - start;
  const startTime = performance.now();

  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    element.scrollTop = start + distance * progress;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| fn | 动画回调函数 | FrameRequestCallback | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| handler | 动画句柄 | number | - |

## cancelAnimationFrame

取消之前请求的动画帧。

- 示例

```ts
import { requestAnimationFrame, cancelAnimationFrame } from '@antv/util';

// 基本使用
const handler = requestAnimationFrame(() => {
  console.log('Cancelled');
});
cancelAnimationFrame(handler);

// 实际应用示例
class Animation {
  private frameId: number;

  start() {
    const animate = () => {
      // 执行动画
      this.frameId = requestAnimationFrame(animate);
    };
    this.frameId = requestAnimationFrame(animate);
  }

  stop() {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| handler | 要取消的动画句柄 | number | - |

- 返回值

无返回值

## augment

扩展类的原型，支持混入多个对象或类的属性和方法。

- 示例

```ts
import { augment } from '@antv/util';

// 基本使用
class Base {}
const mixin = { sayHi() { console.log('Hi'); } };
augment(Base, mixin);

const obj = new Base();
obj.sayHi();  // "Hi"

// 混入类
class Mixin {
  greet() { console.log('Hello'); }
}
augment(Base, Mixin);
obj.greet();  // "Hello"
```

## clone

深度克隆对象或数组。

- 示例

```ts
import { clone } from '@antv/util';

// 基本使用
const obj = { a: 1, b: { c: 2 } };
const copy = clone(obj);
console.log(copy);  // { a b: { c: 2 } }
console.log(copy !== obj);  // true
console.log(copy.b !== obj.b);  // true

// 克隆数组
const arr = [1, [2, 3], { a: 4 }];
const copyArr = clone(arr);
console.log(copyArr);  // [1, [2, 3], { a: 4 }]
```

## debounce

创建一个防抖函数，延迟调用。

- 示例

```ts
import { debounce } from '@antv/util';

// 基本使用
const handler = debounce(() => {
  console.log('Resized');
}, 200);

window.addEventListener('resize', handler);

// 立即执行
const immediate = debounce(() => {
  console.log('Clicked');
}, 200, true);

button.addEventListener('click', immediate);
```

## memoize

缓存函数的计算结果。

- 示例

```ts
import { memoize } from '@antv/util';

// 基本使用
const fibonacci = memoize((n: number): number => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10));  // 快速计算，使用缓存

// 自定义缓存键
const getUser = memoize(
  (id: number, type: string) => fetchUser(id, type),
  (id, type) => `${id}-${type}`
);

// 设置缓存大小
const cached = memoize(heavyComputation, undefined, 1000);
```

- 参数说明

| 方法 | 参数 | 类型 | 说明 |
|---------|------|------|---------|
| augment | args | any[] | 目标类和要混入的对象/类 |
| clone | obj | any | 要克隆的对象或数组 |
| debounce | func | Function | 要防抖的函数 |
| debounce | wait | number | 延迟时间（ms） |
| debounce | immediate | boolean | 是否立即执行 |
| memoize | fn | Function | 要缓存的函数 |
| memoize | resolver | Function | 缓存键生成函数 |
| memoize | maxSize | number | 缓存大小限制 |

- 返回值

| 方法 | 返回类型 | 说明 |
|---------|------|------|
| augment | void | 无返回值 |
| clone | any | 克隆后的对象/数组 |
| debounce | Function | 防抖后的函数 |
| memoize | Function | 带缓存的函数 |

## deepMix

深度混合多个对象。

- 示例

```ts
import { deepMix } from '@antv/util';

// 基本使用
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
console.log(deepMix({}, obj1, obj2));
// { a: 1, b: { c: 2, d: 3 }, e: 4 }

// 数组处理
const result = deepMix({}, {
  arr: [1, 2],
  obj: { a: 1 }
}, {
  arr: [3],
  obj: { b: 2 }
});
console.log(result);
// { arr: [3], obj: { a: 1, b: 2 } }
```

## each

遍历数组或对象的每个元素。

- 示例

```ts
import { each } from '@antv/util';

// 遍历数组
const arr = [1, 2, 3];
each(arr, (item, index) => {
  console.log(item, index);
});

// 遍历对象
const obj = { a: 1, b: 2 };
each(obj, (value, key) => {
  console.log(key, value);
});

// 提前终止
each(arr, (item) => {
  if (item === 2) return false;
  console.log(item);
});
```

## extend

实现类继承。

- 示例

```ts
import { extend } from '@antv/util';

// 基本继承
class Parent {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const Child = extend(function(name) {
  Child.superclass.constructor.call(this, name);
}, Parent);

// 带方法继承
extend(Child, Parent, {
  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}, {
  staticMethod() {}
});
```

## indexOf

查找元素在数组中的索引。

- 示例

```ts
import { indexOf } from '@antv/util';

// 基本使用
const arr = [1, 2, 3, 2];
console.log(indexOf(arr, 2));    // 1
console.log(indexOf(arr, 4));    // -1

// 对象数组
const items = [{ id: 1 }, { id: 2 }];
const target = items[0];
console.log(indexOf(items, target));  // 0
```

- 参数说明

| 方法 | 参数 | 类型 | 说明 |
|---------|------|------|---------|
| deepMix | rst, ...args | any, ...any[] | 目标对象和源对象列表 |
| each | elements, func | any[] \| object, Function | 要遍历的集合和回调函数 |
| extend | subclass, superclass, overrides?, staticOverrides? | Function, Function, object?, object? | 子类、父类和扩展方法 |
| indexOf | arr, obj | T[], T | 要搜索的数组和目标元素 |

- 返回值

| 方法 | 返回类型 | 说明 |
|---------|------|------|
| deepMix | any | 混合后的对象 |
| each | void | 无返回值 |
| extend | Function | 扩展后的子类 |
| indexOf | number | 元素索引或-1 |

## isEmpty

判断值是否为空。

- 示例

```ts
import { isEmpty } from '@antv/util';

console.log(isEmpty(null));         // true
console.log(isEmpty(undefined));    // true
console.log(isEmpty([]));           // true
console.log(isEmpty({}));           // true
console.log(isEmpty(new Map()));    // true
console.log(isEmpty([1, 2]));       // false
console.log(isEmpty({ a: 1 }));     // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要检查的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 是否为空 | boolean | - |

## isEqual

深度比较两个值是否相等。

- 示例

```ts
import { isEqual } from '@antv/util';

// 基本类型
console.log(isEqual(1, 1));           // true
console.log(isEqual('a', 'a'));       // true

// 数组
console.log(isEqual([1, 2], [1, 2])); // true
console.log(isEqual([1, 2], [2, 1])); // false

// 对象
console.log(isEqual(
  { a: 1, b: 2 },
  { a: 1, b: 2 }
));  // true
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要比较的值 | any | - |
| other | 另一个值 | any | - |

## isEqualWith

使用自定义函数比较两个值。

- 示例

```ts
import { isEqualWith } from '@antv/util';

const customizer = (v1, v2) => {
  if (v1.type === v2.type) return true;
  return false;
};

console.log(isEqualWith(
  { type: 'a', value: 1 },
  { type: 'a', value: 2 },
  customizer
));  // true
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要比较的值 | T | - |
| other | 另一个值 | T | - |
| fn | 比较函数 | (v1: T, v2: T) => boolean | - |

## map

映射数组的每个元素。

- 示例

```ts
import { map } from '@antv/util';

// 基本使用
const numbers = [1, 2, 3];
console.log(map(numbers, x => x * 2));  // [2, 4, 6]

// 使用索引
console.log(map(numbers, (x, i) => x + i));  // [1, 3, 5]

// 对象数组
const items = [{ value: 1 }, { value: 2 }];
console.log(map(items, item => item.value));  // [1, 2]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| arr | 要映射的数组 | T[] | - |
| func | 映射函数 | (v: T, idx: number) => G | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 映射后的数组 | G[] | - |

## mapValues

映射对象的所有值。

- 示例

```ts
import { mapValues } from '@antv/util';

// 基本使用
const obj = { a: 1, b: 2 };
console.log(mapValues(obj, x => x * 2));
// { a: 2, b: 4 }

// 使用键名
console.log(mapValues(obj, (value, key) => `${key}:${value}`));
// { a: 'a:1', b: 'b:2' }

// 默认映射
console.log(mapValues(obj));
// { a: 1, b: 2 }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| object | 源对象 | { [key: string]: T } | - |
| func | 映射函数 | (value: T, key: string) => any | identity |

## mix/assiage

混合多个对象的属性。

- 示例

```ts
import { mix } from '@antv/util';

// 基本使用
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

console.log(mix({}, obj1, obj2, obj3));
// { a: 1, b: 2, c: 3 }

// 忽略 undefined
console.log(mix({}, { a: 1, b: undefined }));
// { a: 1 }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| dist | 目标对象 | Base & A & B & C | - |
| src1 | 源对象 1 | A | - |
| src2 | 源对象 2 | B | - |
| src3 | 源对象 3 | C | - |

## get

安全获取对象深层属性值。

- 示例

```ts
import { get } from '@antv/util';

const obj = {
  a: {
    b: {
      c: 1
    }
  }
};

// 使用点号路径
console.log(get(obj, 'a.b.c'));     // 1
console.log(get(obj, 'a.b.d', 0));  // 0

// 使用数组路径
console.log(get(obj, ['a', 'b', 'c']));  // 1
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| obj | 源对象 | any | - |
| key | 属性路径 | string \| any[] | - |
| defaultValue | 默认值 | any | - |

## set

设置对象深层属性值。

- 示例

```ts
import { set } from '@antv/util';

const obj = {};

// 使用点号路径
set(obj, 'a.b.c', 1);
console.log(obj);  // { a: { b: { c: 1 } } }

// 使用数组路径
set(obj, ['x', 0, 'y'], 2);
console.log(obj);  // { a: { b: { c: 1 } }, x: [{ y: 2 }] }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| obj | 目标对象 | any | - |
| path | 属性路径 | string \| any[] | - |
| value | 要设置的值 | any | - |

## pick

创建一个从源对象中选取指定属性的对象。

- 示例

```ts
import { pick } from '@antv/util';

const object = { a: 1, b: '2', c: 3 };

console.log(pick(object, ['a', 'c']));
// { a: 1, c: 3 }

// 处理不存在的键
console.log(pick(object, ['a', 'd']));
// { a: 1 }

// 处理无效输入
console.log(pick(null, ['a']));
// {}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| object | 源对象 | ObjectType<T> | - |
| keys | 要选取的属性数组 | string[] | - |

## omit

创建一个忽略指定属性的对象。

- 示例

```ts
import { omit } from '@antv/util';

const object = { a: 1, b: '2', c: 3 };

console.log(omit(object, ['b']));
// { a: 1, c: 3 }

// 忽略多个属性
console.log(omit(object, ['a', 'c']));
// { b: '2' }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| obj | 源对象 | ObjectType<T> | - |
| keys | 要忽略的属性数组 | string[] | - |

## throttle

创建一个节流函数。

- 示例

```ts
import { throttle } from '@antv/util';

// 基本使用
const handler = throttle(() => {
  console.log('Throttled');
}, 200);

window.addEventListener('resize', handler);

// 自定义选项
const scroll = throttle(() => {
  console.log('Scrolled');
}, 300, { 
  leading: false,  // 禁用第一次立即执行
  trailing: true   // 启用最后一次延迟执行
});

// 取消节流
handler.cancel();
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| func | 要节流的函数 | Function | - |
| wait | 等待时间（ms） | number | - |
| options | 配置选项 | OptionsType | {} |

## toArray

将类数组对象转换为数组。

- 示例

```ts
import { toArray } from '@antv/util';

// 类数组对象
function example() {
  console.log(toArray(arguments));
}
example(1, 2, 3);  // [1, 2, 3]

// 字符串
console.log(toArray('abc'));  // ['a', 'b', 'c']

// 无效输入
console.log(toArray(null));   // []
console.log(toArray(123));    // []
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要转换的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 转换后的数组 | any[] | - |

## toString

将值转换为字符串，处理 null 和 undefined。

- 示例

```ts
import { toString } from '@antv/util';

console.log(toString(123));       // "123"
console.log(toString('abc'));     // "abc"
console.log(toString(null));      // ""
console.log(toString(undefined)); // ""
console.log(toString({}));        // "[object Object]"
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| value | 要转换的值 | any | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 转换后的字符串 | string | - |

## uniqueId

生成带前缀的唯一 ID。

- 示例

```ts
import { uniqueId } from '@antv/util';

console.log(uniqueId());        // "g1"
console.log(uniqueId());        // "g2"
console.log(uniqueId('user_')); // "user_1"
console.log(uniqueId('user_')); // "user_2"

// 不同前缀独立计数
console.log(uniqueId('a_'));    // "a_1"
console.log(uniqueId('b_'));    // "b_1"
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| prefix | ID 前缀 | string | 'g' |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 唯一 ID | string | - |

## size

获取数组、类数组或对象的大小。

- 示例

```ts
import { size } from '@antv/util';

// 数组
console.log(size([1, 2, 3]));     // 3

// 字符串
console.log(size('abc'));         // 3

// 对象
console.log(size({ a: 1, b: 2 })); // 2

// 类数组对象
console.log(size({ length: 3 }));  // 3

// 空值
console.log(size(null));          // 0
console.log(size(undefined));     // 0
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| o | 要计算大小的集合 | unknown | - |

- 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| result | 集合的大小 | number | - |
