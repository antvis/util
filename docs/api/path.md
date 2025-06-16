# 图形 `path` 相关方法

> 和 SVG Path 相关的一些方法，覆盖面很广。

- parser
  - [isSpace](#isspace) - 判断字符是否为空白字符。
  - [isPathCommand](#ispathcommand) - 判断字符是否为 SVG 路径命令。
  - [isDigitStart](#isdigitstart) - 判断字符是否为数字的起始字符（包括数字、正负号和小数点）。
  - [isDigit](#isdigit) - 判断字符是否为数字字符（0-9）。
  - [isArcCommand](#isarccommand) - 判断字符是否为 SVG 路径中的弧线命令（A/a）。
  - [finalizeSegment](#finalizesegment) - 完成 SVG 路径片段的解析，并将解析结果添加到路径段数组中。
  - [parsePathString](#parsepathstring) - 将 SVG 路径字符串解析为路径片段数组。
  - [scanFlag](#scanflag) - 扫描并验证 SVG 路径中弧线命令（A/a）的标志位参数。
  - [scanParam](#scanparam) - 扫描并验证 SVG 路径中的数值参数。
  - [scanSegment](#scansegment) - 扫描并解析 SVG 路径中的单个路径片段。
  - [skipSpaces](#skipspaces) - 跳过路径字符串中的空白字符。

- process
  - [arcToCubic](#arctocubic) - 将 SVG 路径中的弧线命令（A）转换为三次贝塞尔曲线命令（C）。
  - [clonePath](#clonepath) - 深度克隆路径数组，创建路径数据的完整副本。
  - [fixArc](#fixarc) - 修复和处理弧线命令转换后的路径数组。
  - [lineToCubic](#linetocubic) - 将直线转换为三次贝塞尔曲线。
  - [normalizePath](#normalizepath) - 将 SVG 路径标准化为统一格式的路径数组。
  - [normalizeSegment](#normalizesegment) - 标准化单个路径段，将特殊命令转换为基本命令（如 H/V -> L, T -> Q）。
  - [quadToCubic](#quadtocubic) - 将二次贝塞尔曲线转换为三次贝塞尔曲线。
  - [reverseCurve](#reversecurve) - 反转基于贝塞尔曲线的路径数组。
  - [roundPath](#roundpath) - 对路径数组中的数值进行精度舍入。
  - [segmentToCubic](#segmenttocubic) - 将各种路径段转换为三次贝塞尔曲线段。

- util
  - [distanceSquareRoot](#distancesquareroot) - 计算两点之间的欧几里得距离。
  - [equalizeSegments](#equalizesegments) - 平衡两个路径的段数，使它们具有相同数量的贝塞尔曲线段。
  - [getDrawDirection](#getdrawdirection) - 判断路径的绘制方向（顺时针或逆时针）。
  - [getPathArea](#getpatharea) - 计算路径的面积，支持复杂的贝塞尔曲线路径。
  - [getPathBBoxTotalLength](#getpathbboxtotallength) - 计算路径的边界框和总长度信息。
  - [getPathBBox](#getpathbbox) - 获取路径的边界框（Bounding Box）信息。
  - [getPointAtLength](#getpointatlength) - 获取路径上指定距离处的坐标点。
  - [getPropertiesAtLength](#getpropertiesatlength) - 获取路径上指定距离处的段属性信息。
  - [getPropertiesAtPoint](#getpropertiesatpoint) - 获取路径上距离指定点最近的位置及其属性信息。
  - [getRotatedCurve](#getrotatedcurve) - 获取最佳旋转匹配的曲线路径。
  - [getTotalLength](#gettotallength) - 计算路径的总长度。
  - [isAbsoluteArray](#isabsolutearray) - 判断路径数组是否全部由绝对坐标命令组成。
  - [isCurveArray](#iscurvearray) - 判断路径数组是否全部由三次贝塞尔曲线段（C）和移动命令（M）组成。
  - [isNormalizedArray](#isnormalizedarray) - 判断路径数组是否为标准化的绝对坐标路径（不包含简写命令）。
  - [isPathArray](#ispatharray) - 判断是否为有效的路径数组。
  - [isPointInStroke](#ispointinstroke) - 判断点是否在路径的描边上。
  - [midPoint](#midpoint) - 计算两点之间的中间点或按比例插值点。
  - [pathLengthFactory](#pathlengthfactory) - 路径长度计算工厂函数，用于计算路径的长度、指定距离的点位置和边界框。
  - [rotateVector](#rotatevector) - 旋转二维向量，根据给定角度计算向量的新坐标。
  - [segmentArcFactory](#segmentarcfactory) - 计算弧线段的长度、指定距离的点位置和边界框。
  - [segmentLineFactory](#segmentlinefactory) - 计算直线段的长度、指定距离的点位置和边界框。
  - [segmentCubicFactory](#segmentcubicfactory) - 计算三次贝塞尔曲线段的长度、指定距离的点位置和边界框。
  - [segmentQuadFactory](#segmentquadfactory) - 计算二次贝塞尔曲线段的长度、指定距离的点位置和边界框。

- convert
  - [path2Absolute](#path2absolute) - 将路径数组或路径字符串转换为绝对坐标路径数组。
  - [path2Array](#path2array) - 将 SVG 路径字符串转换为标准的路径数组格式。
  - [path2Curve](#path2curve) - 将 SVG 路径转换为三次贝塞尔曲线路径。
  - [path2String](#path2string) - 将路径数组转换为 SVG 路径字符串，支持数值精度控制。


## isSpace

判断字符是否为空白字符。

- 检测字符是否为空白字符
- 支持所有标准空白字符
- 支持特殊 Unicode 空白字符
- 包含换行符和行终止符
- 使用字符的 Unicode 编码进行判断

```ts
import { isSpace } from '@antv/util';

// 基本空白字符测试
console.log(isSpace(' '.charCodeAt(0)));   // true  (普通空格 0x20)
console.log(isSpace('\t'.charCodeAt(0)));  // true  (制表符 0x09)
console.log(isSpace('\n'.charCodeAt(0)));  // true  (换行符 0x0a)
console.log(isSpace('\r'.charCodeAt(0)));  // true  (回车符 0x0d)

// 特殊空白字符测试
console.log(isSpace(0xa0));    // true  (不间断空格 NBSP)
console.log(isSpace(0x2000));  // true  (en quad)
console.log(isSpace(0x3000));  // true  (表意文字空格)

// 非空白字符测试
console.log(isSpace('a'.charCodeAt(0)));  // false
console.log(isSpace('1'.charCodeAt(0)));  // false

// 实际应用示例
function trimString(str: string): string {
  let start = 0;
  let end = str.length;
  
  // 去除开头空白
  while (start < end && isSpace(str.charCodeAt(start))) {
    start++;
  }
  
  // 去除结尾空白
  while (end > start && isSpace(str.charCodeAt(end - 1))) {
    end--;
  }
  
  return str.slice(start, end);
}

// 使用示例
console.log(trimString('  hello  '));  // "hello"
console.log(trimString('\t\nhello\r\n'));  // "hello"
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| ch | 字符编码 | number | - | 要检查的字符的Unicode编码值 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 判断结果 | boolean | - | 是否为空白字符 |

- 支持的空白字符

| 类型 | Unicode | 说明 |
|---------|------|------|
| 普通空格 | 0x20 | 标准空格 |
| 制表符 | 0x09 | 水平制表符 |
| 换行符 | 0x0a | 换行 |
| 回车符 | 0x0d | 回车 |
| 行终止符 | 0x2028, 0x2029 | 行分隔符，段落分隔符 |
| 特殊空格 | 0x1680-0xfeff | 各种Unicode空白字符 |


## isPathCommand

判断字符是否为 SVG 路径命令。

```ts
import { isPathCommand } from '@antv/util';

// 基本命令测试
console.log(isPathCommand('M'.charCodeAt(0)));  // true  (移动到)
console.log(isPathCommand('m'.charCodeAt(0)));  // true  (相对移动到)
console.log(isPathCommand('L'.charCodeAt(0)));  // true  (画线到)
console.log(isPathCommand('z'.charCodeAt(0)));  // true  (闭合路径)

// 曲线命令测试
console.log(isPathCommand('C'.charCodeAt(0)));  // true  (三次贝塞尔曲线)
console.log(isPathCommand('Q'.charCodeAt(0)));  // true  (二次贝塞尔曲线)
console.log(isPathCommand('A'.charCodeAt(0)));  // true  (弧线)

// 非命令字符测试
console.log(isPathCommand('X'.charCodeAt(0)));  // false
console.log(isPathCommand('1'.charCodeAt(0)));  // false

// 实际应用示例
function parsePath(pathString: string) {
  const commands = [];
  let current = '';
  
  for (let i = 0; i < pathString.length; i++) {
    const code = pathString.charCodeAt(i);
    if (isPathCommand(code)) {
      if (current) {
        commands.push(current);
      }
      current = pathString[i];
    } else {
      current += pathString[i];
    }
  }
  if (current) {
    commands.push(current);
  }
  return commands;
}

// 使用示例
console.log(parsePath('M10 10L20 20'));  // ['M10 10', 'L20 20']
console.log(parsePath('m5,5 l10,10'));   // ['m5,5', 'l10,10']
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| code | 字符编码 | number | - | 要检查的字符的Unicode编码值 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 判断结果 | boolean | - | 是否为路径命令 |

- 支持的路径命令

| 命令 | 说明 | 大写 | 小写 |
|---------|------|------|------|
| M/m | 移动到 | 绝对坐标 | 相对坐标 |
| Z/z | 闭合路径 | 绝对坐标 | 相对坐标 |
| L/l | 画线到 | 绝对坐标 | 相对坐标 |
| H/h | 水平线到 | 绝对坐标 | 相对坐标 |
| V/v | 垂直线到 | 绝对坐标 | 相对坐标 |
| C/c | 三次贝塞尔曲线 | 绝对坐标 | 相对坐标 |
| S/s | 平滑三次贝塞尔曲线 | 绝对坐标 | 相对坐标 |
| Q/q | 二次贝塞尔曲线 | 绝对坐标 | 相对坐标 |
| T/t | 平滑二次贝塞尔曲线 | 绝对坐标 | 相对坐标 |
| A/a | 弧线 | 绝对坐标 | 相对坐标 |


## isDigitStart

判断字符是否为数字的起始字符（包括数字、正负号和小数点）。

```ts
import { isDigitStart } from '@antv/util';

// 数字测试
console.log(isDigitStart('0'.charCodeAt(0)));  // true
console.log(isDigitStart('9'.charCodeAt(0)));  // true
console.log(isDigitStart('5'.charCodeAt(0)));  // true

// 符号测试
console.log(isDigitStart('+'.charCodeAt(0)));  // true
console.log(isDigitStart('-'.charCodeAt(0)));  // true
console.log(isDigitStart('.'.charCodeAt(0)));  // true

// 非数字起始字符测试
console.log(isDigitStart('a'.charCodeAt(0)));  // false
console.log(isDigitStart(' '.charCodeAt(0)));  // false

// 实际应用示例
function parseNumber(str: string): { value: number, length: number } {
  if (!isDigitStart(str.charCodeAt(0))) {
    return { value: NaN, length: 0 };
  }
  
  let i = 1;
  while (i < str.length && /[\d.]/.test(str[i])) {
    i++;
  }
  
  return {
    value: parseFloat(str.slice(0, i)),
    length: i
  };
}

// 使用示例
console.log(parseNumber('123.45abc'));   // { value: 123.45, length: 6 }
console.log(parseNumber('-42px'));       // { value: -42, length: 3 }
console.log(parseNumber('+0.5em'));      // { value: 0.5, length: 4 }
console.log(parseNumber('.75%'));        // { value: 0.75, length: 3 }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| code | 字符编码 | number | - | 要检查的字符的Unicode编码值 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 判断结果 | boolean | - | 是否为数字起始字符 |

- 支持的字符

| 字符类型 | Unicode | 说明 |
|---------|------|------|
| 数字 | 48-57 | 0-9 |
| 正号 | 0x2b | + |
| 负号 | 0x2d | - |
| 小数点 | 0x2e | . |


## isDigit

判断字符是否为数字字符（0-9）。

```ts
import { isDigit } from '@antv/util';

// 数字测试
console.log(isDigit('0'.charCodeAt(0)));  // true
console.log(isDigit('9'.charCodeAt(0)));  // true
console.log(isDigit('5'.charCodeAt(0)));  // true

// 非数字测试
console.log(isDigit('.'.charCodeAt(0)));  // false
console.log(isDigit('-'.charCodeAt(0)));  // false
console.log(isDigit('a'.charCodeAt(0)));  // false

// 实际应用示例
function extractNumbers(str: string): string {
  return str
    .split('')
    .filter(char => isDigit(char.charCodeAt(0)))
    .join('');
}

// 使用示例
console.log(extractNumbers('abc123def456'));    // "123456"
console.log(extractNumbers('价格：99.99元'));    // "9999"
console.log(extractNumbers('电话：123-456-789')); // "123456789"

// 数字验证示例
function isNumericString(str: string): boolean {
  return str.split('').every(char => isDigit(char.charCodeAt(0)));
}

console.log(isNumericString('12345'));   // true
console.log(isNumericString('12.34'));   // false
console.log(isNumericString('12a34'));   // false
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| code | 字符编码 | number | - | 要检查的字符的Unicode编码值 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 判断结果 | boolean | - | 是否为数字字符 |

- 支持的字符范围

| 字符 | Unicode | 说明 |
|---------|------|------|
| 0-9 | 48-57 | 阿拉伯数字 |


## isArcCommand

判断字符是否为 SVG 路径中的弧线命令（A/a）。

```ts
import { isArcCommand } from '@antv/util';

// 基本测试
console.log(isArcCommand('A'.charCodeAt(0)));  // true
console.log(isArcCommand('a'.charCodeAt(0)));  // true

// 非弧线命令测试
console.log(isArcCommand('L'.charCodeAt(0)));  // false
console.log(isArcCommand('M'.charCodeAt(0)));  // false

// 实际应用示例
function parseArcSegment(pathData: string) {
  const segments = [];
  let current = '';
  
  for (let i = 0; i < pathData.length; i++) {
    const code = pathData.charCodeAt(i);
    if (isArcCommand(code)) {
      if (current) {
        segments.push(current);
      }
      current = pathData[i];
    } else {
      current += pathData[i];
    }
  }
  if (current) {
    segments.push(current);
  }
  return segments.filter(seg => isArcCommand(seg.charCodeAt(0)));
}

// 使用示例
const path = 'M10 10 A50 50 0 0 1 60 60 a30 30 0 0 1 30 30';
console.log(parseArcSegment(path));
// ['A50 50 0 0 1 60 60', 'a30 30 0 0 1 30 30']

// 弧线参数解析示例
function parseArcParams(arcCommand: string) {
  const params = arcCommand.slice(1).trim().split(/[\s,]+/);
  return {
    command: arcCommand[0],
    rx: parseFloat(params[0]),
    ry: parseFloat(params[1]),
    xAxisRotation: parseFloat(params[2]),
    largeArcFlag: parseInt(params[3]),
    sweepFlag: parseInt(params[4]),
    x: parseFloat(params[5]),
    y: parseFloat(params[6])
  };
}

// 解析弧线命令
const arc = 'A50 50 0 0 1 60 60';
console.log(parseArcParams(arc));
// {
//   command: 'A',
//   rx: 50,
//   ry: 50,
//   xAxisRotation: 0,
//   largeArcFlag: 0,
//   sweepFlag: 1,
//   x: 60,
//   y: 60
// }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| code | 字符编码 | number | - | 要检查的字符的Unicode编码值 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 判断结果 | boolean | - | 是否为弧线命令 |

- 弧线命令格式

| 命令 | 参数 | 说明 |
|---------|------|------|
| A/a | rx ry x-axis-rotation large-arc-flag sweep-flag x y | 绘制弧线 |


## finalizeSegment

完成 SVG 路径片段的解析，并将解析结果添加到路径段数组中。

- 处理路径命令和对应的参数
- 特殊处理 moveTo (M/m) 命令
- 根据命令类型提取正确数量的参数
- 支持命令的重复使用
- 将解析结果添加到路径段数组中

```ts
import { finalizeSegment } from '@antv/util';

// 路径解析器示例
const pathParser: PathParser = {
  pathValue: 'M10 10 L20 20',
  segmentStart: 0,
  data: [10, 10, 20, 20],
  segments: []
};

// 基本使用
finalizeSegment(pathParser);
console.log(pathParser.segments);
// [['M', 10, 10], ['L', 20, 20]]

// MoveTo命令的特殊处理
const moveParser: PathParser = {
  pathValue: 'M10 10 20 20 30 30',
  segmentStart: 0,
  data: [10, 10, 20, 20, 30, 30],
  segments: []
};

finalizeSegment(moveParser);
console.log(moveParser.segments);
// [['M', 10, 10], ['l', 20, 20], ['l', 30, 30]]

// 实际应用示例
function parsePath(pathString: string) {
  const parser: PathParser = {
    pathValue: pathString,
    segmentStart: 0,
    data: [],
    segments: []
  };
  
  // 模拟数据收集
  const numbers = pathString.match(/[-+]?[0-9]*\.?[0-9]+/g);
  if (numbers) {
    parser.data = numbers.map(Number);
  }
  
  finalizeSegment(parser);
  return parser.segments;
}

// 使用示例
console.log(parsePath('M10 10 L20 20 L30 30'));
// [['M', 10, 10], ['L', 20, 20], ['L', 30, 30]]

console.log(parsePath('M10 10 20 20 30 30'));
// [['M', 10, 10], ['l', 20, 20], ['l', 30, 30]]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径解析器对象 | PathParser | - | 包含路径解析状态的对象 |

- PathParser 接口

| 属性 | 说明 | 类型 | 中文说明 |
|---------|------|------|---------|
| pathValue | 路径字符串 | string | 原始路径字符串 |
| segmentStart | 片段起始位置 | number | 当前片段的起始索引 |
| data | 数值数组 | number[] | 收集的数值参数 |
| segments | 路径片段数组 | any[][] | 解析后的路径片段数组 |


## parsePathString

将 SVG 路径字符串解析为路径片段数组。

- 功能说明

- 解析 SVG 路径字符串为标准格式的数组
- 支持所有标准 SVG 路径命令
- 处理空格和分隔符
- 错误处理和验证
- 支持已经是数组格式的输入

```ts
import { parsePathString } from '@antv/util';

// 基本路径解析
console.log(parsePathString('M10 10L20 20'));
// [['M', 10, 10], ['L', 20, 20]]

// 复杂路径解析
console.log(parsePathString('M10,10 L20,20 H30 V40 Z'));
// [
//   ['M', 10, 10],
//   ['L', 20, 20],
//   ['H', 30],
//   ['V', 40],
//   ['Z']
// ]

// 曲线命令解析
console.log(parsePathString('M0,0 C10,10 20,10 30,0'));
// [
//   ['M', 0, 0],
//   ['C', 10, 10, 20, 10, 30, 0]
// ]

// 已经是数组格式的输入
const pathArray = [['M', 10, 10], ['L', 20, 20]];
console.log(parsePathString(pathArray));
// [['M', 10, 10], ['L', 20, 20]]

// 实际应用示例
function createPathObject(pathString: string) {
  const segments = parsePathString(pathString);
  return {
    moveTo: segments.filter(seg => seg[0] === 'M'),
    lineTo: segments.filter(seg => seg[0] === 'L'),
    closePath: segments.filter(seg => seg[0] === 'Z'),
    curves: segments.filter(seg => ['C', 'S', 'Q', 'T'].includes(seg[0]))
  };
}

// 使用示例
const path = 'M10,10 L20,20 C30,30 40,40 50,50 Z';
console.log(createPathObject(path));
// {
//   moveTo: [['M', 10, 10]],
//   lineTo: [['L', 20, 20]],
//   closePath: [['Z']],
//   curves: [['C', 30, 30, 40, 40, 50, 50]]
// }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathInput | 路径输入 | PathArray \| string | - | SVG路径字符串或路径数组 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 解析结果 | PathArray \| string | - | 路径片段数组或错误信息 |

- 支持的路径命令

| 命令 | 说明 | 参数格式 |
|---------|------|------|
| M/m | 移动到 | x, y |
| L/l | 画线到 | x, y |
| H/h | 水平线到 | x |
| V/v | 垂直线到 | y |
| C/c | 三次贝塞尔曲线 | x1, y1, x2, y2, x, y |
| S/s | 平滑三次贝塞尔曲线 | x2, y2, x, y |
| Q/q | 二次贝塞尔曲线 | x1, y1, x, y |
| T/t | 平滑二次贝塞尔曲线 | x, y |
| A/a | 弧线 | rx, ry, angle, large-arc, sweep, x, y |
| Z/z | 闭合路径 | 无参数 |


## scanFlag

扫描并验证 SVG 路径中弧线命令（A/a）的标志位参数。

- 功能说明

- 验证弧线命令的标志位参数（large-arc-flag 和 sweep-flag）
- 只接受 0 或 1 作为有效值
- 更新解析器的参数值和索引
- 提供详细的错误信息
- 用于 SVG 路径解析过程

```ts
import { scanFlag } from '@antv/util';

// 基本使用
const validPath: PathParser = {
  pathValue: 'A100 100 0 1 0 200 200',
  index: 11,  // 指向第一个标志位
  param: 0,
  err: ''
};

scanFlag(validPath);
console.log(validPath.param);  // 1
console.log(validPath.index);  // 12

// 错误处理示例
const invalidPath: PathParser = {
  pathValue: 'A100 100 0 2 0 200 200',
  index: 11,
  param: 0,
  err: ''
};

scanFlag(invalidPath);
console.log(invalidPath.err);  
// "[path-util]: invalid Arc flag "2", expecting 0 or 1 at index 11"

// 实际应用示例
function parseArcFlags(arcCommand: string) {
  const parser: PathParser = {
    pathValue: arcCommand,
    index: 0,
    param: 0,
    err: ''
  };
  
  // 跳过命令和前三个参数
  const params = arcCommand.split(/[\s,]+/);
  parser.index = arcCommand.indexOf(params[4]);
  
  // 解析large-arc-flag
  scanFlag(parser);
  const largeArcFlag = parser.param;
  
  // 跳到sweep-flag
  parser.index = arcCommand.indexOf(params[5]);
  
  // 解析sweep-flag
  scanFlag(parser);
  const sweepFlag = parser.param;
  
  return {
    largeArcFlag,
    sweepFlag,
    error: parser.err
  };
}

// 使用示例
console.log(parseArcFlags('A100 100 0 1 0 200 200'));
// { largeArcFlag: 1, sweepFlag: 0, error: '' }

console.log(parseArcFlags('A100 100 0 2 0 200 200'));
// { largeArcFlag: 0, sweepFlag: 0, error: '...' }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径解析器对象 | PathParser | - | 包含路径解析状态的对象 |

- PathParser 接口

| 属性 | 说明 | 类型 | 中文说明 |
|---------|------|------|---------|
| pathValue | 路径字符串 | string | 原始路径字符串 |
| index | 当前索引 | number | 当前解析位置 |
| param | 参数值 | number | 解析得到的参数值 |
| err | 错误信息 | string | 解析过程中的错误信息 |


## scanParam

扫描并验证 SVG 路径中的数值参数。

- 功能说明

- 验证路径字符串中的数值参数
- 支持整数和浮点数
- 支持科学计数法
- 处理正负号
- 提供详细的错误信息

```ts
import { scanParam } from '@antv/util';

// 基本数值解析
const path1: PathParser = {
  pathValue: 'M100.5 200',
  index: 1,
  param: 0,
  max: 10,
  err: ''
};

scanParam(path1);
console.log(path1.param);  // 100.5
console.log(path1.index);  // 5

// 科学计数法解析
const path2: PathParser = {
  pathValue: 'L1e2 50',
  index: 1,
  param: 0,
  max: 6,
  err: ''
};

scanParam(path2);
console.log(path2.param);  // 100

// 错误处理示例
const path3: PathParser = {
  pathValue: 'M.e1 200',
  index: 1,
  param: 0,
  max: 7,
  err: ''
};

scanParam(path3);
console.log(path3.err);  // 包含错误信息

// 实际应用示例
function parseNumberSequence(str: string) {
  const results = [];
  const parser: PathParser = {
    pathValue: str,
    index: 0,
    param: 0,
    max: str.length,
    err: ''
  };
  
  while (parser.index < parser.max && !parser.err) {
    scanParam(parser);
    if (!parser.err) {
      results.push(parser.param);
    }
    // 跳过分隔符
    parser.index++;
  }
  
  return {
    values: results,
    error: parser.err
  };
}

// 使用示例
console.log(parseNumberSequence('100.5 -200 1e2'));
// { values: [100.5, -200, 100], error: '' }

console.log(parseNumberSequence('100 200 abc'));
// { values: [100, 200], error: '...' }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径解析器对象 | PathParser | - | 包含路径解析状态的对象 |

- PathParser 接口

| 属性 | 说明 | 类型 | 中文说明 |
|---------|------|------|---------|
| pathValue | 路径字符串 | string | 原始路径字符串 |
| index | 当前索引 | number | 当前解析位置 |
| param | 参数值 | number | 解析得到的参数值 |
| max | 最大长度 | number | 字符串最大长度 |
| err | 错误信息 | string | 解析过程中的错误信息 |

- 支持的数值格式

1. 整数：`123`
2. 负数：`-123`
3. 浮点数：`123.456`
4. 科学计数法：`1e2`, `1.23e-4`


## scanSegment

扫描并解析 SVG 路径中的单个路径片段。

- 功能说明

- 解析路径命令和其参数
- 处理特殊的弧线命令参数
- 支持参数之间的逗号分隔
- 跳过空白字符
- 验证参数数量和格式

```ts
import { scanSegment } from '@antv/util';

// 基本路径片段解析
const path1: PathParser = {
  pathValue: 'M100 200',
  index: 0,
  max: 8,
  segmentStart: 0,
  data: [],
  segments: [],
  param: 0,
  err: ''
};

scanSegment(path1);
console.log(path1.segments);  // [['M', 100, 200]]

// 弧线命令解析
const path2: PathParser = {
  pathValue: 'A100,100 0 1,0 200,200',
  index: 0,
  max: 20,
  segmentStart: 0,
  data: [],
  segments: [],
  param: 0,
  err: ''
};

scanSegment(path2);
console.log(path2.segments);  
// [['A', 100, 100, 0, 1, 0, 200, 200]]

// 实际应用示例
function parseSVGPath(pathString: string) {
  const parser: PathParser = {
    pathValue: pathString,
    index: 0,
    max: pathString.length,
    segmentStart: 0,
    data: [],
    segments: [],
    param: 0,
    err: ''
  };
  
  while (parser.index < parser.max && !parser.err) {
    scanSegment(parser);
  }
  
  return {
    segments: parser.segments,
    error: parser.err
  };
}

// 使用示例
console.log(parseSVGPath('M10,10 L20,20 A30,30 0 1,0 40,40 Z'));
// {
//   segments: [
//     ['M', 10, 10],
//     ['L', 20, 20],
//     ['A', 30, 30, 0, 1, 0, 40, 40],
//     ['Z']
//   ],
//   error: ''
// }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径解析器对象 | PathParser | - | 包含路径解析状态的对象 |

- PathParser 接口

| 属性 | 说明 | 类型 | 中文说明 |
|---------|------|------|---------|
| pathValue | 路径字符串 | string | 原始路径字符串 |
| index | 当前索引 | number | 当前解析位置 |
| max | 最大长度 | number | 字符串最大长度 |
| segmentStart | 片段起始位置 | number | 当前片段的起始索引 |
| data | 数值数组 | number[] | 收集的数值参数 |
| segments | 路径片段数组 | any[][] | 解析后的路径片段数组 |
| param | 参数值 | number | 当前解析的参数值 |
| err | 错误信息 | string | 解析过程中的错误信息 |


## skipSpaces

跳过路径字符串中的空白字符。

- 功能说明

- 跳过所有类型的空白字符
- 更新解析器的当前位置
- 支持多种空白字符格式
- 用于路径解析过程中的空白处理
- 确保解析器指向有效字符

```ts
import { skipSpaces } from '@antv/util';

// 基本使用
const path1: PathParser = {
  pathValue: 'M   100   200',
  index: 1,
  max: 12
};

skipSpaces(path1);
console.log(path1.index);  // 4 (跳过空格后指向'1')

// 混合空白字符
const path2: PathParser = {
  pathValue: 'L\t\n\r100,200',
  index: 1,
  max: 11
};

skipSpaces(path2);
console.log(path2.index);  // 4 (跳过所有空白字符)

// 实际应用示例
function parsePathValues(pathString: string) {
  const parser: PathParser = {
    pathValue: pathString,
    index: 0,
    max: pathString.length
  };
  
  const values = [];
  let currentValue = '';
  
  while (parser.index < parser.max) {
    // 跳过开头的空白
    skipSpaces(parser);
    
    // 收集数字或字符
    while (parser.index < parser.max && 
           !isSpace(parser.pathValue.charCodeAt(parser.index))) {
      currentValue += parser.pathValue[parser.index];
      parser.index++;
    }
    
    if (currentValue) {
      values.push(currentValue);
      currentValue = '';
    }
  }
  
  return values;
}

// 使用示例
console.log(parsePathValues('M   100   200  L  300   400'));
// ['M', '100', '200', 'L', '300', '400']

// 格式化路径字符串
function formatPathString(pathString: string) {
  const parser: PathParser = {
    pathValue: pathString,
    index: 0,
    max: pathString.length
  };
  
  let formatted = '';
  let lastWasCommand = false;
  
  while (parser.index < parser.max) {
    skipSpaces(parser);
    
    if (parser.index < parser.max) {
      const char = parser.pathValue[parser.index];
      if (/[A-Za-z]/.test(char)) {
        if (formatted && !lastWasCommand) {
          formatted += ' ';
        }
        lastWasCommand = true;
      } else {
        if (formatted) {
          formatted += ' ';
        }
        lastWasCommand = false;
      }
      formatted += char;
      parser.index++;
    }
  }
  
  return formatted;
}

console.log(formatPathString('M   100   200    L   300   400'));
// "M 100 200 L 300 400"
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径解析器对象 | PathParser | - | 包含路径解析状态的对象 |

- PathParser 接口

| 属性 | 说明 | 类型 | 中文说明 |
|---------|------|------|---------|
| pathValue | 路径字符串 | string | 原始路径字符串 |
| index | 当前索引 | number | 当前解析位置 |
| max | 最大长度 | number | 字符串最大长度 |


## arcToCubic

将 SVG 路径中的弧线命令（A）转换为三次贝塞尔曲线命令（C）。

- 功能说明

- 将椭圆弧转换为一系列三次贝塞尔曲线
- 支持旋转角度
- 处理大弧和小弧标志
- 处理顺时针和逆时针方向
- 基于 SVG 规范的实现

```ts
import { arcToCubic } from '@antv/util';

// 基本弧线转换
const result1 = arcToCubic(
  0, 0,     // 起点 (x1, y1)
  100, 50,  // 半径 (rx, ry)
  0,        // 旋转角度
  0,        // 大弧标志
  1,        // 顺时针标志
  100, 0    // 终点 (x2, y2)
);
console.log(result1);  // 返回贝塞尔曲线控制点坐标

// 实际应用示例
function createArcPath(
  start: [number, number],
  radius: [number, number],
  end: [number, number],
  options = { angle: 0, largeArc: 0, sweep: 1 }
) {
  const points = arcToCubic(
    start[0], start[1],
    radius[0], radius[1],
    options.angle,
    options.largeArc,
    options.sweep,
    end[0], end[1],
    null
  );
  
  // 转换为SVG路径
  const path = [
    `M ${start[0]} ${start[1]}`,
    `C ${points.slice(0, 6).join(' ')}`,
  ];
  
  if (points.length > 6) {
    for (let i = 6; i < points.length; i += 6) {
      path.push(`C ${points.slice(i, i + 6).join(' ')}`);
    }
  }
  
  return path.join(' ');
}

// 使用示例
const arcPath = createArcPath(
  [0, 0],     // 起点
  [100, 50],  // 半径
  [100, 0],   // 终点
  { angle: 45, largeArc: 0, sweep: 1 }
);
console.log(arcPath);

// 动画插值示例
function interpolateArc(
  start: [number, number],
  end: [number, number],
  progress: number
) {
  const points = arcToCubic(
    start[0], start[1],
    50, 50,  // 固定半径
    0, 0, 1,
    end[0], end[1],
    null
  );
  
  // 计算当前点位置
  const t = progress;
  const p0 = points.slice(0, 2);
  const p1 = points.slice(2, 4);
  const p2 = points.slice(4, 6);
  const p3 = points.slice(6, 8);
  
  return bezierPoint(p0, p1, p2, p3, t);
}

// 贝塞尔曲线点计算
function bezierPoint(p0: number[], p1: number[], p2: number[], p3: number[], t: number) {
  const mt = 1 - t;
  return [
    mt * mt * mt * p0[0] + 3 * mt * mt * t * p1[0] + 3 * mt * t * t * p2[0] + t * t * t * p3[0],
    mt * mt * mt * p0[1] + 3 * mt * mt * t * p1[1] + 3 * mt * t * t * p2[1] + t * t * t * p3[1]
  ];
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| X1, Y1 | 起点坐标 | number | - | 弧线起点的x,y坐标 |
| RX, RY | 半径 | number | - | 椭圆的x,y半径 |
| angle | 旋转角度 | number | - | 椭圆的旋转角度（度） |
| LAF | 大弧标志 | number | - | 是否选择大弧（0或1） |
| SF | 顺时针标志 | number | - | 是否顺时针绘制（0或1） |
| X2, Y2 | 终点坐标 | number | - | 弧线终点的x,y坐标 |
| recursive | 递归参数 | number[] | - | 用于递归调用的参数数组 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| points | 控制点坐标 | number[] | - | 贝塞尔曲线的控制点坐标数组 |


## clonePath

深度克隆路径数组，创建路径数据的完整副本。

- 功能说明

- 创建路径数组的深度副本
- 处理嵌套数组结构
- 保持原始数据不变
- 支持单个路径段和完整路径数组
- 返回新的路径数组实例

```ts
import { clonePath } from '@antv/util';

// 基本路径克隆
const path1: PathArray = [
  ['M', 10, 10],
  ['L', 20, 20]
];
const clone1 = clonePath(path1);
console.log(clone1);  // [['M', 10, 10], ['L', 20, 20]]
console.log(clone1 !== path1);  // true
console.log(clone1[0] !== path1[0]);  // true

// 单个路径段克隆
const segment: PathSegment = ['C', 10, 20, 30, 40, 50, 60];
const clonedSegment = clonePath(segment);
console.log(clonedSegment);  // [['C', 10, 20, 30, 40, 50, 60]]

// 实际应用示例
function transformPath(path: PathArray, dx: number, dy: number) {
  const cloned = clonePath(path);
  return cloned.map(segment => {
    const [command, ...params] = segment;
    if (command === 'H') {
      return [command, params[0] + dx];
    }
    if (command === 'V') {
      return [command, params[0] + dy];
    }
    return [
      command,
      ...params.map((p, i) => p + (i % 2 ? dy : dx))
    ];
  });
}

// 使用示例
const originalPath: PathArray = [
  ['M', 0, 0],
  ['L', 50, 50],
  ['H', 100],
  ['V', 100]
];

const transformedPath = transformPath(originalPath, 10, 20);
console.log(transformedPath);
// [
//   ['M', 10, 20],
//   ['L', 60, 70],
//   ['H', 110],
//   ['V', 120]
// ]
console.log(originalPath);  // 原始路径保持不变

// 路径动画示例
function createPathAnimator(path: PathArray) {
  const pathCopy = clonePath(path);
  let currentPath = pathCopy;
  
  return {
    getPath: () => currentPath,
    transform: (dx: number, dy: number) => {
      currentPath = transformPath(currentPath, dx, dy);
    },
    reset: () => {
      currentPath = clonePath(pathCopy);
    }
  };
}

// 使用动画器
const animator = createPathAnimator([
  ['M', 0, 0],
  ['L', 100, 100]
]);

animator.transform(10, 10);
console.log(animator.getPath());
// [['M', 10, 10], ['L', 110, 110]]

animator.reset();
console.log(animator.getPath());
// [['M', 0, 0], ['L', 100, 100]]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径数据 | PathArray \| PathSegment | - | 要克隆的路径数组或路径段 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 克隆结果 | PathArray | - | 克隆后的新路径数组 |


## fixArc

修复和处理弧线命令转换后的路径数组。

- 功能说明

- 处理转换后的弧线命令
- 将长路径段分割成多个三次贝塞尔曲线
- 维护命令类型记录
- 确保路径数组格式正确
- 优化路径数据结构

```ts
import { fixArc } from '@antv/util';

// 基本使用
const pathArray: PathArray = [
  ['M', 0, 0],
  ['A', 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]  // 过长的弧线段
];
const commands = ['M', 'A'];

fixArc(pathArray, commands, 1);
console.log(pathArray);
// [
//   ['M', 0, 0],
//   ['C', 10, 20, 30, 40, 50, 60],
//   ['C', 70, 80, 90, 100]
// ]
console.log(commands);  // ['M', 'A', 'A']

// 实际应用示例
function processPath(path: PathArray) {
  const commands: string[] = path.map(segment => segment[0]);
  
  for (let i = 0; i < path.length; i++) {
    if (commands[i] === 'A') {
      fixArc(path, commands, i);
      // 由于fixArc可能改变数组长度，需要调整索引
      i--;
    }
  }
  
  return {
    path,
    commands
  };
}

// 使用示例
const originalPath: PathArray = [
  ['M', 0, 0],
  ['A', 50, 50, 0, 1, 1, 100, 100, 150, 150, 200, 200]
];

const result = processPath(originalPath);
console.log(result);
// {
//   path: [
//     ['M', 0, 0],
//     ['C', 50, 50, 0, 100, 100],
//     ['C', 150, 150, 200, 200]
//   ],
//   commands: ['M', 'A', 'A']
// }

// 路径优化示例
function optimizePath(path: PathArray) {
  const commands: string[] = [];
  const optimizedPath = path.slice();
  
  for (let i = 0; i < optimizedPath.length; i++) {
    commands[i] = optimizedPath[i][0];
    if (commands[i] === 'A') {
      fixArc(optimizedPath, commands, i);
    }
  }
  
  return optimizedPath;
}

// 使用优化函数
const complexPath: PathArray = [
  ['M', 0, 0],
  ['A', 100, 100, 0, 1, 1, 200, 200, 300, 300]
];

console.log(optimizePath(complexPath));
// [
//   ['M', 0, 0],
//   ['C', 100, 100, 200, 200],
//   ['C', 300, 300]
// ]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathArray | 路径数组 | PathArray | - | 要处理的路径数组 |
| allPathCommands | 命令数组 | string[] | - | 记录所有路径命令的数组 |
| i | 当前索引 | number | - | 当前处理的路径段索引 |


## lineToCubic

将直线转换为三次贝塞尔曲线。

- 功能说明

- 将直线段转换为等效的三次贝塞尔曲线
- 使用中点作为控制点
- 保持视觉效果不变
- 统一路径段表示方式
- 简化路径处理

```ts
import { lineToCubic } from '@antv/util';

// 基本使用
const result = lineToCubic(0, 0, 100, 100);
console.log(result);  // [50, 50, 100, 100, 100, 100]

// 水平线转换
const horizontal = lineToCubic(0, 0, 100, 0);
console.log(horizontal);  // [50, 0, 100, 0, 100, 0]

// 垂直线转换
const vertical = lineToCubic(0, 0, 0, 100);
console.log(vertical);  // [0, 50, 0, 100, 0, 100]

// 实际应用示例
function convertPathToCubic(path: [number, number][]) {
  const result = [];
  
  for (let i = 0; i < path.length - 1; i++) {
    const [x1, y1] = path[i];
    const [x2, y2] = path[i + 1];
    
    if (i === 0) {
      result.push(['M', x1, y1]);
    }
    
    const cubic = lineToCubic(x1, y1, x2, y2);
    result.push(['C', ...cubic]);
  }
  
  return result;
}

// 使用示例
const points = [
  [0, 0],
  [100, 100],
  [200, 0]
];

console.log(convertPathToCubic(points));
// [
//   ['M', 0, 0],
//   ['C', 50, 50, 100, 100, 100, 100],
//   ['C', 150, 50, 200, 0, 200, 0]
// ]

// 动画插值示例
function createLineAnimator(x1: number, y1: number, x2: number, y2: number) {
  const cubic = lineToCubic(x1, y1, x2, y2);
  
  return (t: number) => {
    // 三次贝塞尔曲线插值
    const mt = 1 - t;
    const mt2 = mt * mt;
    const mt3 = mt2 * mt;
    const t2 = t * t;
    const t3 = t2 * t;
    
    return {
      x: mt3 * x1 + 3 * mt2 * t * cubic[0] + 3 * mt * t2 * cubic[2] + t3 * cubic[4],
      y: mt3 * y1 + 3 * mt2 * t * cubic[1] + 3 * mt * t2 * cubic[3] + t3 * cubic[5]
    };
  };
}

// 使用动画器
const animator = createLineAnimator(0, 0, 100, 100);
console.log(animator(0));    // { x: 0, y: 0 }
console.log(animator(0.5));  // { x: 50, y: 50 }
console.log(animator(1));    // { x: 100, y: 100 }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| x1 | 起点x坐标 | number | - | 直线起点的x坐标 |
| y1 | 起点y坐标 | number | - | 直线起点的y坐标 |
| x2 | 终点x坐标 | number | - | 直线终点的x坐标 |
| y2 | 终点y坐标 | number | - | 直线终点的y坐标 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| points | 控制点坐标 | number[] | - | 贝塞尔曲线的控制点坐标数组 [cx1,cy1,cx2,cy2,x,y] |

- 注意事项

1. 返回6个数值（3个控制点）
2. 使用中点作为控制点
3. 保持直线的视觉效果
4. 便于统一处理
5. 支持任意方向的直线


## normalizePath

将 SVG 路径标准化为统一格式的路径数组。

- 功能说明

- 将路径转换为绝对坐标
- 标准化所有路径命令
- 转换特殊命令（如 H、V）为通用命令（L）
- 保持路径参数的连续性
- 维护控制点信息

```ts
import { normalizePath } from '@antv/util';

// 基本路径标准化
console.log(normalizePath('M0 0 H50'));
// [['M', 0, 0], ['L', 50, 0]]

// 相对命令标准化
console.log(normalizePath('M10 10 l20 20'));
// [['M', 10, 10], ['L', 30, 30]]

// 复杂路径标准化
const complexPath = 'M0,0 h50 v50 H0 V0 z';
console.log(normalizePath(complexPath));
// [
//   ['M', 0, 0],
//   ['L', 50, 0],
//   ['L', 50, 50],
//   ['L', 0, 50],
//   ['L', 0, 0],
//   ['Z']
// ]

// 实际应用示例
function createPathAnalyzer(pathString: string) {
  const normalized = normalizePath(pathString);
  
  return {
    // 获取所有点
    getPoints() {
      return normalized.map(segment => {
        const [cmd, ...params] = segment;
        return cmd === 'Z' ? null : [params[params.length - 2], params[params.length - 1]];
      }).filter(Boolean);
    },
    
    // 获取路径长度（简单估算）
    getLength() {
      let length = 0;
      let prevX, prevY;
      
      normalized.forEach(segment => {
        const [cmd, ...params] = segment;
        if (cmd === 'M') {
          [prevX, prevY] = params;
        } else if (cmd === 'L') {
          const [x, y] = params;
          length += Math.sqrt(
            Math.pow(x - prevX, 2) + Math.pow(y - prevY, 2)
          );
          [prevX, prevY] = [x, y];
        }
      });
      
      return length;
    },
    
    // 获取边界框
    getBBox() {
      const points = this.getPoints();
      const xs = points.map(p => p[0]);
      const ys = points.map(p => p[1]);
      
      return {
        x: Math.min(...xs),
        y: Math.min(...ys),
        width: Math.max(...xs) - Math.min(...xs),
        height: Math.max(...ys) - Math.min(...ys)
      };
    }
  };
}

// 使用示例
const analyzer = createPathAnalyzer('M0,0 h100 v100 h-100 z');
console.log(analyzer.getPoints());
// [[0,0], [100,0], [100,100], [0,100]]

console.log(analyzer.getLength());
// 400

console.log(analyzer.getBBox());
// { x: 0, y: 0, width: 100, height: 100 }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathInput | 路径输入 | string \| PathArray | - | SVG路径字符串或路径数组 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 标准化路径 | NormalArray | - | 标准化后的路径数组 |


## normalizeSegment

标准化单个路径段，将特殊命令转换为基本命令（如 H/V -> L, T -> Q）。

- 功能说明

- 将水平线段(H)转换为直线段(L)
- 将垂直线段(V)转换为直线段(L)
- 将平滑曲线(S)转换为贝塞尔曲线(C)
- 将平滑二次曲线(T)转换为二次贝塞尔曲线(Q)
- 维护控制点信息

```ts
import { normalizeSegment } from '@antv/util';

// 基本参数对象
const params = {
  x1: 0, y1: 0,  // 当前点
  x2: 0, y2: 0,  // 前一个控制点
  qx: null, qy: null  // 二次贝塞尔曲线控制点
};

// 水平线段转换
console.log(normalizeSegment(['H', 100], params));
// ['L', 100, 0]

// 垂直线段转换
console.log(normalizeSegment(['V', 100], params));
// ['L', 0, 100]

// 平滑曲线转换
params.x1 = 50;
params.y1 = 50;
params.x2 = 25;
params.y2 = 25;
console.log(normalizeSegment(['S', 75, 75, 100, 100], params));
// ['C', 75, 75, 75, 75, 100, 100]

// 实际应用示例
function normalizePath(segments: PathSegment[]) {
  const params = {
    x1: 0, y1: 0,
    x2: 0, y2: 0,
    qx: null, qy: null
  };
  
  return segments.map(segment => {
    const normalized = normalizeSegment(segment, params);
    
    // 更新当前点
    const [cmd, ...values] = normalized;
    if (values.length >= 2) {
      params.x1 = values[values.length - 2];
      params.y1 = values[values.length - 1];
    }
    
    return normalized;
  });
}

// 使用示例
const path = [
  ['M', 0, 0],
  ['H', 100],
  ['V', 100],
  ['S', 150, 150, 200, 200]
];

console.log(normalizePath(path));
// [
//   ['M', 0, 0],
//   ['L', 100, 0],
//   ['L', 100, 100],
//   ['C', 100, 100, 150, 150, 200, 200]
// ]

// 处理二次贝塞尔曲线
function normalizeQuadratic(segments: PathSegment[]) {
  const params = {
    x1: 0, y1: 0,
    x2: 0, y2: 0,
    qx: null, qy: null
  };
  
  return segments.map(segment => {
    if (segment[0] === 'Q') {
      params.qx = segment[1];
      params.qy = segment[2];
    }
    return normalizeSegment(segment, params);
  });
}

// 使用示例
const quadraticPath = [
  ['M', 0, 0],
  ['Q', 50, 50, 100, 0],
  ['T', 200, 0]
];

console.log(normalizeQuadratic(quadraticPath));
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| segment | 路径段 | PathSegment | - | 要标准化的路径段 |
| params | 参数对象 | object | - | 包含控制点信息的参数对象 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 标准化路径段 | NormalSegment | - | 标准化后的路径段 |

- 参数对象属性

| 属性 | 说明 | 类型 | 中文说明 |
|---------|------|------|---------|
| x1, y1 | 当前点坐标 | number | 当前绘制点的坐标 |
| x2, y2 | 前一控制点 | number | 前一个控制点的坐标 |
| qx, qy | 二次曲线控制点 | number | 二次贝塞尔曲线的控制点 |


## quadToCubic

将二次贝塞尔曲线转换为三次贝塞尔曲线。

- 功能说明

- 将二次贝塞尔曲线(Q)转换为三次贝塞尔曲线(C)
- 保持曲线的视觉效果不变
- 使用 1/3 和 2/3 比例计算控制点
- 统一曲线表示方式
- 返回完整的控制点坐标

```ts
import { quadToCubic } from '@antv/util';

// 基本使用
const result = quadToCubic(0, 0, 50, 50, 100, 0);
console.log(result);  
// [33.33, 33.33, 66.67, 33.33, 100, 0]

// 实际应用示例
function convertQuadraticPath(path: [number, number][]) {
  const result = [];
  
  for (let i = 0; i < path.length - 2; i += 2) {
    const [x1, y1] = path[i];      // 起点
    const [qx, qy] = path[i + 1];  // 控制点
    const [x2, y2] = path[i + 2];  // 终点
    
    if (i === 0) {
      result.push(['M', x1, y1]);
    }
    
    const cubic = quadToCubic(x1, y1, qx, qy, x2, y2);
    result.push(['C', ...cubic]);
  }
  
  return result;
}

// 使用示例
const quadraticPath = [
  [0, 0],    // 起点
  [50, 50],  // 控制点1
  [100, 0],  // 终点1/起点2
  [150, 50], // 控制点2
  [200, 0]   // 终点2
];

console.log(convertQuadraticPath(quadraticPath));
// [
//   ['M', 0, 0],
//   ['C', 33.33, 33.33, 66.67, 33.33, 100, 0],
//   ['C', 133.33, 33.33, 166.67, 33.33, 200, 0]
// ]

// 动画插值示例
function createCurveAnimator(x1: number, y1: number, qx: number, qy: number, x2: number, y2: number) {
  const cubic = quadToCubic(x1, y1, qx, qy, x2, y2);
  
  return (t: number) => {
    // 三次贝塞尔曲线插值
    const mt = 1 - t;
    const mt2 = mt * mt;
    const mt3 = mt2 * mt;
    const t2 = t * t;
    const t3 = t2 * t;
    
    return {
      x: mt3 * x1 + 
         3 * mt2 * t * cubic[0] + 
         3 * mt * t2 * cubic[2] + 
         t3 * x2,
      y: mt3 * y1 + 
         3 * mt2 * t * cubic[1] + 
         3 * mt * t2 * cubic[3] + 
         t3 * y2
    };
  };
}

// 使用动画器
const animator = createCurveAnimator(0, 0, 50, 50, 100, 0);
console.log(animator(0));    // { x: 0, y: 0 }
console.log(animator(0.5));  // { x: 50, y: 25 }
console.log(animator(1));    // { x: 100, y: 0 }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| x1 | 起点x坐标 | number | - | 曲线起点的x坐标 |
| y1 | 起点y坐标 | number | - | 曲线起点的y坐标 |
| qx | 控制点x坐标 | number | - | 二次贝塞尔曲线控制点的x坐标 |
| qy | 控制点y坐标 | number | - | 二次贝塞尔曲线控制点的y坐标 |
| x2 | 终点x坐标 | number | - | 曲线终点的x坐标 |
| y2 | 终点y坐标 | number | - | 曲线终点的y坐标 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| points | 控制点坐标 | number[] | - | 三次贝塞尔曲线的控制点坐标数组 [cpx1,cpy1,cpx2,cpy2,x,y] |

- 注意事项

1. 保持曲线形状不变
2. 使用固定比例计算
3. 返回6个坐标值
4. 适用于路径转换
5. 便于统一处理


## reverseCurve

反转基于贝塞尔曲线的路径数组。

- 功能说明

- 反转曲线路径的方向
- 保持曲线的形状不变
- 重新计算控制点位置
- 仅处理贝塞尔曲线路径
- 维护路径的连续性

```ts
import { reverseCurve } from '@antv/util';

// 基本使用
const curve: CurveArray = [
  ['M', 0, 0],
  ['C', 20, 20, 40, 20, 60, 0]
];

console.log(reverseCurve(curve));
// [
//   ['M', 60, 0],
//   ['C', 40, 20, 20, 20, 0, 0]
// ]

// 多段曲线反转
const multiCurve: CurveArray = [
  ['M', 0, 0],
  ['C', 20, 20, 40, 20, 60, 0],
  ['C', 80, -20, 100, -20, 120, 0]
];

console.log(reverseCurve(multiCurve));
// [
//   ['M', 120, 0],
//   ['C', 100, -20, 80, -20, 60, 0],
//   ['C', 40, 20, 20, 20, 0, 0]
// ]

// 实际应用示例
function createReversiblePath(points: [number, number][]) {
  // 创建曲线路径
  const createCurve = (points: [number, number][]): CurveArray => {
    const result: CurveArray = [['M', points[0][0], points[0][1]]];
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cp1 = [(prev[0] + curr[0]) / 2, prev[1]];
      const cp2 = [(prev[0] + curr[0]) / 2, curr[1]];
      result.push(['C', ...cp1, ...cp2, ...curr]);
    }
    
    return result;
  };
  
  const forward = createCurve(points);
  const backward = reverseCurve(forward);
  
  return {
    forward,
    backward,
    getPath: (reverse = false) => reverse ? backward : forward
  };
}

// 使用示例
const points: [number, number][] = [
  [0, 0],
  [50, 50],
  [100, 0]
];

const path = createReversiblePath(points);
console.log('Forward:', path.getPath());
console.log('Backward:', path.getPath(true));

// 动画路径示例
function createPathAnimator(curve: CurveArray) {
  return {
    forward: (t: number) => interpolatePath(curve, t),
    backward: (t: number) => interpolatePath(reverseCurve(curve), t)
  };
}

function interpolatePath(curve: CurveArray, t: number) {
  // 简单的线性插值示例
  if (t <= 0) return curve[0].slice(-2);
  if (t >= 1) return curve[curve.length - 1].slice(-2);
  
  const segmentIndex = Math.floor(t * (curve.length - 1));
  const segment = curve[segmentIndex + 1];
  const localT = (t * (curve.length - 1)) % 1;
  
  // 贝塞尔曲线插值计算
  return bezierPoint(segment.slice(1), localT);
}

// 使用动画器
const animator = createPathAnimator([
  ['M', 0, 0],
  ['C', 20, 20, 40, 20, 60, 0]
]);

console.log(animator.forward(0.5));   // 正向动画中点
console.log(animator.backward(0.5));  // 反向动画中点
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathArray | 曲线路径数组 | CurveArray | - | 要反转的贝塞尔曲线路径数组 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 反转后的路径 | CurveArray | - | 反转后的贝塞尔曲线路径数组 |

- 注意事项

1. 仅支持贝塞尔曲线路径
2. 保持曲线形状不变
3. 重新计算控制点
4. 维护路径连续性
5. 起点变为终点


## roundPath

对路径数组中的数值进行精度舍入。

- 功能说明

- 控制路径坐标的精度
- 支持自定义小数位数
- 可以关闭舍入功能
- 保持命令类型不变
- 创建新的路径数组

```ts
import { roundPath } from '@antv/util';

// 基本使用
const path: PathArray = [
  ['M', 10.123, 20.456],
  ['L', 30.789, 40.987]
];

console.log(roundPath(path, 2));
// [
//   ['M', 10.12, 20.46],
//   ['L', 30.79, 40.99]
// ]

// 关闭舍入
console.log(roundPath(path, 'off'));
// 返回原始值的副本

// 整数舍入
console.log(roundPath(path, 0));
// [
//   ['M', 10, 20],
//   ['L', 31, 41]
// ]

// 实际应用示例
function createPathOptimizer(precision: number | 'off' = 2) {
  return {
    optimize(path: PathArray) {
      return roundPath(path, precision);
    },
    
    // 计算路径长度（简单估算）
    getLength(path: PathArray) {
      const optimized = this.optimize(path);
      let length = 0;
      let prevX, prevY;
      
      optimized.forEach(segment => {
        const [cmd, ...params] = segment;
        if (cmd === 'M') {
          [prevX, prevY] = params;
        } else if (cmd === 'L') {
          const [x, y] = params;
          length += Math.sqrt(
            Math.pow(x - prevX, 2) + Math.pow(y - prevY, 2)
          );
          [prevX, prevY] = [x, y];
        }
      });
      
      return length;
    },
    
    // 创建SVG路径字符串
    toPathString(path: PathArray) {
      return this.optimize(path)
        .map(segment => segment.join(' '))
        .join(' ');
    }
  };
}

// 使用示例
const optimizer = createPathOptimizer(2);

const complexPath: PathArray = [
  ['M', 0.123, 0.456],
  ['L', 50.789, 50.987],
  ['L', 100.234, 0.567]
];

console.log(optimizer.optimize(complexPath));
// [
//   ['M', 0.12, 0.46],
//   ['L', 50.79, 50.99],
//   ['L', 100.23, 0.57]
// ]

console.log(optimizer.getLength(complexPath));
// 计算优化后的路径长度

console.log(optimizer.toPathString(complexPath));
// "M 0.12 0.46 L 50.79 50.99 L 100.23 0.57"

// 动态精度调整
function adjustPathPrecision(path: PathArray, viewportWidth: number) {
  // 根据视口宽度动态调整精度
  const precision = viewportWidth < 500 ? 1 : 
                   viewportWidth < 1000 ? 2 : 3;
                   
  return roundPath(path, precision);
}

// 使用示例
const responsivePath = adjustPathPrecision(complexPath, 800);
console.log(responsivePath);
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径数组 | PathArray | - | 要处理的路径数组 |
| round | 精度控制 | number \| 'off' | - | 小数位数或关闭舍入 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 处理后的路径 | PathArray | - | 精度调整后的路径数组 |

- 注意事项

1. 仅处理数值部分
2. 保持命令字符不变
3. 创建新的数组
4. 精度值必须为整数
5. 'off'表示不进行舍入


## segmentToCubic

将各种路径段转换为三次贝塞尔曲线段。

- 功能说明

- 将不同类型的路径段统一转换为三次贝塞尔曲线
- 支持弧线(A)、二次贝塞尔曲线(Q)、直线(L)和闭合路径(Z)的转换
- 保持移动命令(M)不变
- 维护控制点信息
- 处理特殊情况

```ts
import { segmentToCubic } from '@antv/util';

// 基本参数对象
const params = {
  x1: 0, y1: 0,  // 当前点
  x: 0, y: 0,    // 起始点
  qx: null, qy: null  // 二次贝塞尔曲线控制点
};

// 直线转换
console.log(segmentToCubic(['L', 100, 100], params));
// ['C', 50, 50, 100, 100, 100, 100]

// 二次贝塞尔曲线转换
console.log(segmentToCubic(['Q', 50, 50, 100, 0], params));
// ['C', 33.33, 33.33, 66.67, 33.33, 100, 0]

// 实际应用示例
function convertPathToCubic(pathSegments: PathSegment[]) {
  const params = {
    x1: 0, y1: 0,
    x: 0, y: 0,
    qx: null, qy: null
  };
  
  return pathSegments.map(segment => {
    const converted = segmentToCubic(segment, params);
    
    // 更新当前点
    const [cmd, ...values] = converted;
    if (values.length >= 2) {
      params.x1 = values[values.length - 2];
      params.y1 = values[values.length - 1];
    }
    if (cmd === 'M') {
      params.x = values[0];
      params.y = values[1];
    }
    
    return converted;
  });
}

// 使用示例
const path = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['Q', 150, 50, 200, 0],
  ['A', 50, 50, 0, 0, 1, 250, 50],
  ['Z']
];

console.log(convertPathToCubic(path));

// 动画插值示例
function createPathAnimator(segments: PathSegment[]) {
  const cubicPath = convertPathToCubic(segments);
  
  return (t: number) => {
    if (t <= 0) return cubicPath[0].slice(-2);
    if (t >= 1) return cubicPath[cubicPath.length - 1].slice(-2);
    
    const segmentIndex = Math.floor(t * (cubicPath.length - 1));
    const segment = cubicPath[segmentIndex];
    const localT = (t * (cubicPath.length - 1)) % 1;
    
    if (segment[0] === 'C') {
      return bezierInterpolate(
        [segment[1], segment[2]],
        [segment[3], segment[4]],
        [segment[5], segment[6]],
        localT
      );
    }
    
    return segment.slice(-2);
  };
}

// 贝塞尔曲线插值
function bezierInterpolate(p1: number[], p2: number[], p3: number[], t: number) {
  const mt = 1 - t;
  return [
    mt * mt * p1[0] + 2 * mt * t * p2[0] + t * t * p3[0],
    mt * mt * p1[1] + 2 * mt * t * p2[1] + t * t * p3[1]
  ];
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| segment | 路径段 | PathSegment | - | 要转换的路径段 |
| params | 参数对象 | ParserParams | - | 包含控制点信息的参数对象 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 转换结果 | CSegment \| MSegment | - | 转换后的三次贝塞尔曲线段或移动命令 |


## distanceSquareRoot

计算两点之间的欧几里得距离。

- 功能说明

- 计算二维平面上两点之间的直线距离
- 使用平方根公式计算
- 接受坐标点数组作为参数
- 返回非负数值
- 基于欧几里得距离公式

```ts
import { distanceSquareRoot } from '@antv/util';

// 基本使用
const point1: [number, number] = [0, 0];
const point2: [number, number] = [3, 4];
console.log(distanceSquareRoot(point1, point2));  // 5

// 水平距离
console.log(distanceSquareRoot([0, 0], [5, 0]));  // 5

// 垂直距离
console.log(distanceSquareRoot([0, 0], [0, 5]));  // 5

// 实际应用示例
function createDistanceCalculator() {
  return {
    // 计算点到点集合中最近的距离
    getNearestDistance(point: [number, number], points: [number, number][]) {
      return Math.min(...points.map(p => distanceSquareRoot(point, p)));
    },
    
    // 计算路径长度
    getPathLength(points: [number, number][]) {
      let length = 0;
      for (let i = 1; i < points.length; i++) {
        length += distanceSquareRoot(points[i-1], points[i]);
      }
      return length;
    },
    
    // 判断点是否在圆内
    isPointInCircle(
      point: [number, number], 
      center: [number, number], 
      radius: number
    ) {
      return distanceSquareRoot(point, center) <= radius;
    }
  };
}

// 使用示例
const calculator = createDistanceCalculator();

// 计算最近距离
const points = [
  [0, 0],
  [3, 4],
  [6, 8]
] as [number, number][];

const targetPoint: [number, number] = [2, 2];
console.log(calculator.getNearestDistance(targetPoint, points));

// 计算路径长度
console.log(calculator.getPathLength(points));

// 点在圆内判断
console.log(calculator.isPointInCircle([1, 1], [0, 0], 2));  // true

// 碰撞检测示例
function createCollisionDetector(radius: number) {
  const points: [number, number][] = [];
  
  return {
    addPoint(point: [number, number]) {
      if (!this.hasCollision(point)) {
        points.push(point);
        return true;
      }
      return false;
    },
    
    hasCollision(point: [number, number]) {
      return points.some(p => 
        distanceSquareRoot(point, p) < radius * 2
      );
    },
    
    getPoints() {
      return [...points];
    }
  };
}

// 使用碰撞检测器
const detector = createCollisionDetector(5);
console.log(detector.addPoint([0, 0]));     // true
console.log(detector.addPoint([4, 4]));     // true
console.log(detector.addPoint([1, 1]));     // false (太近)
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| a | 第一个点 | [number, number] | - | 第一个点的坐标 |
| b | 第二个点 | [number, number] | - | 第二个点的坐标 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| distance | 距离 | number | - | 两点之间的距离 |

- 注意事项

1. 返回非负数值
2. 使用欧几里得距离公式
3. 参数必须是二维坐标
4. 计算结果是精确值
5. 适用于平面坐标系


## equalizeSegments

平衡两个路径的段数，使它们具有相同数量的贝塞尔曲线段。

- 功能说明

- 调整两个路径使其具有相同数量的段
- 通过分割曲线段来实现平衡
- 保持路径的视觉效果
- 支持递归处理
- 考虑曲线长度进行优化分割

```ts
import { equalizeSegments } from '@antv/util';

// 基本使用
const path1: PathArray = [
  ['M', 0, 0],
  ['C', 50, 0, 100, 50, 100, 100]
];

const path2: PathArray = [
  ['M', 0, 0],
  ['C', 25, 25, 75, 75, 100, 100],
  ['C', 125, 125, 150, 150, 200, 200]
];

const [equalPath1, equalPath2] = equalizeSegments(path1, path2);
console.log(equalPath1.length === equalPath2.length);  // true

// 实际应用示例
function createPathMorpher(startPath: PathArray, endPath: PathArray) {
  const [equalizedStart, equalizedEnd] = equalizeSegments(startPath, endPath);
  
  return {
    // 获取某个时间点的插值路径
    getPath(t: number): PathArray {
      return equalizedStart.map((segment, i) => {
        if (segment[0] === 'M') {
          return [
            'M',
            interpolate(segment[1], equalizedEnd[i][1], t),
            interpolate(segment[2], equalizedEnd[i][2], t)
          ];
        } else if (segment[0] === 'C') {
          return [
            'C',
            interpolate(segment[1], equalizedEnd[i][1], t),
            interpolate(segment[2], equalizedEnd[i][2], t),
            interpolate(segment[3], equalizedEnd[i][3], t),
            interpolate(segment[4], equalizedEnd[i][4], t),
            interpolate(segment[5], equalizedEnd[i][5], t),
            interpolate(segment[6], equalizedEnd[i][6], t)
          ];
        }
        return segment;
      }) as PathArray;
    },
    
    // 获取动画帧
    getFrames(frames: number): PathArray[] {
      return Array.from({ length: frames }, (_, i) => 
        this.getPath(i / (frames - 1))
      );
    }
  };
}

// 线性插值函数
function interpolate(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

// 使用示例
const morpher = createPathMorpher(
  [['M', 0, 0], ['C', 50, 0, 100, 50, 100, 100]],
  [['M', 100, 0], ['C', 150, 0, 200, 50, 200, 100]]
);

// 获取中间状态
console.log(morpher.getPath(0.5));

// 获取动画帧
const frames = morpher.getFrames(5);
console.log(frames);

// 路径动画示例
function animatePath(element: SVGPathElement, startPath: PathArray, endPath: PathArray, duration: number) {
  const morpher = createPathMorpher(startPath, endPath);
  const startTime = performance.now();
  
  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const currentPath = morpher.getPath(progress);
    element.setAttribute('d', pathToString(currentPath));
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path1 | 第一个路径 | PathArray | - | 要平衡的第一个路径 |
| path2 | 第二个路径 | PathArray | - | 要平衡的第二个路径 |
| TL | 目标段数 | number | - | 可选的目标段数 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 平衡后的路径 | CurveArray[] | - | 包含两个平衡后路径的数组 |

- 注意事项

1. 保持路径视觉效果
2. 考虑曲线长度
3. 递归处理直到平衡
4. 仅处理贝塞尔曲线
5. 维护路径连续性


## getDrawDirection

判断路径的绘制方向（顺时针或逆时针）。

- 功能说明

- 通过计算路径面积判断绘制方向
- 正面积表示顺时针方向
- 负面积表示逆时针方向
- 适用于闭合路径
- 基于路径面积计算

```ts
import { getDrawDirection } from '@antv/util';

// 基本使用
const clockwise: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100],
  ['L', 0, 100],
  ['Z']
];
console.log(getDrawDirection(clockwise));  // true (顺时针)

const counterClockwise: PathArray = [
  ['M', 0, 0],
  ['L', 0, 100],
  ['L', 100, 100],
  ['L', 100, 0],
  ['Z']
];
console.log(getDrawDirection(counterClockwise));  // false (逆时针)

// 实际应用示例
function createPathAnalyzer() {
  return {
    // 判断绘制方向
    isClockwise(path: PathArray) {
      return getDrawDirection(path);
    },
    
    // 确保路径为顺时针方向
    ensureClockwise(path: PathArray): PathArray {
      return this.isClockwise(path) ? path : reversePath(path);
    },
    
    // 确保路径为逆时针方向
    ensureCounterClockwise(path: PathArray): PathArray {
      return this.isClockwise(path) ? reversePath(path) : path;
    },
    
    // 反转路径方向
    reversePath(path: PathArray): PathArray {
      const result = [path[0]];  // 保持起点
      for (let i = path.length - 1; i > 0; i--) {
        result.push(path[i]);
      }
      return result;
    }
  };
}

// 使用示例
const analyzer = createPathAnalyzer();

const path: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100],
  ['L', 0, 100],
  ['Z']
];

console.log(analyzer.isClockwise(path));  // true
console.log(analyzer.ensureCounterClockwise(path));  // 返回反转后的路径

// 复合路径处理示例
function processCompoundPath(paths: PathArray[]) {
  const analyzer = createPathAnalyzer();
  
  return paths.map((path, index) => 
    // 外层路径顺时针，内层路径逆时针
    index === 0 ? 
      analyzer.ensureClockwise(path) : 
      analyzer.ensureCounterClockwise(path)
  );
}

// 使用示例
const compound = [
  // 外层矩形
  [
    ['M', 0, 0],
    ['L', 100, 0],
    ['L', 100, 100],
    ['L', 0, 100],
    ['Z']
  ],
  // 内层矩形
  [
    ['M', 25, 25],
    ['L', 75, 25],
    ['L', 75, 75],
    ['L', 25, 75],
    ['Z']
  ]
];

console.log(processCompoundPath(compound));
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathArray | 路径数组 | PathArray | - | 要判断方向的路径数组 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 方向判断结果 | boolean | - | true表示顺时针，false表示逆时针 |

- 注意事项

1. 适用于闭合路径
2. 基于路径面积计算
3. 路径应该是完整的
4. 考虑路径的起始点
5. 支持复杂路径


## getPathArea

计算路径的面积，支持复杂的贝塞尔曲线路径。

- 功能说明

- 计算路径围成的面积
- 支持三次贝塞尔曲线
- 自动转换路径为曲线形式
- 考虑路径方向（正负面积）
- 基于数学公式精确计算

```ts
import { getPathArea } from '@antv/util';

// 基本矩形路径
const rectangle: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100],
  ['L', 0, 100],
  ['Z']
];
console.log(getPathArea(rectangle));  // 10000 (100 * 100)

// 曲线路径
const curve: PathArray = [
  ['M', 0, 0],
  ['C', 50, 0, 100, 50, 100, 100],
  ['C', 100, 150, 50, 200, 0, 200],
  ['Z']
];
console.log(getPathArea(curve));  // 返回曲线围成的面积

// 实际应用示例
function createShapeAnalyzer() {
  return {
    // 计算面积
    getArea(path: PathArray) {
      return Math.abs(getPathArea(path));
    },
    
    // 判断点是否在路径内
    isPointInPath(path: PathArray, point: [number, number]) {
      // 通过射线法判断点是否在路径内
      const testPath: PathArray = [
        ['M', point[0], point[1]],
        ['L', point[0] + 10000, point[1]]  // 水平射线
      ];
      
      // 计算交点数量
      const intersections = getPathIntersections(path, testPath);
      return intersections.length % 2 === 1;
    },
    
    // 计算路径的重心
    getCentroid(path: PathArray) {
      const area = getPathArea(path);
      let cx = 0;
      let cy = 0;
      
      // 遍历路径段计算重心
      let x = 0, y = 0;
      path2Curve(path).forEach(seg => {
        if (seg[0] === 'M') {
          [, x, y] = seg;
        } else {
          const [c1x, c1y, c2x, c2y, x2, y2] = seg.slice(1);
          // 计算每段的贡献
          const segArea = getCubicSegArea(x, y, c1x, c1y, c2x, c2y, x2, y2);
          cx += ((x + c1x + c2x + x2) / 4) * segArea;
          cy += ((y + c1y + c2y + y2) / 4) * segArea;
          [x, y] = [x2, y2];
        }
      });
      
      return {
        x: cx / area,
        y: cy / area
      };
    }
  };
}

// 使用示例
const analyzer = createShapeAnalyzer();

const shape: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100],
  ['L', 0, 100],
  ['Z']
];

console.log(analyzer.getArea(shape));  // 10000
console.log(analyzer.isPointInPath(shape, [50, 50]));  // true
console.log(analyzer.getCentroid(shape));  // { x: 50, y: 50 }
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径数组 | PathArray | - | 要计算面积的路径数组 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| area | 面积值 | number | - | 路径围成的面积（可能为负） |

- 注意事项

1. 路径应该是闭合的
2. 返回值可能为负（取决于路径方向）
3. 自动转换为贝塞尔曲线
4. 基于精确的数学公式
5. 支持复杂路径计算


## getPathBBoxTotalLength

计算路径的边界框和总长度信息。

- 功能说明

- 计算路径的边界框（BBox）
- 计算路径的总长度
- 计算中心点坐标
- 提供估算的深度值
- 处理空路径的情况

```ts
import { getPathBBoxTotalLength } from '@antv/util';

// 基本使用
const path: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100],
  ['L', 0, 100],
  ['Z']
];

console.log(getPathBBoxTotalLength(path));
// {
//   length: 400,        // 路径总长度
//   width: 100,        // 宽度
//   height: 100,       // 高度
//   x: 0,             // 左上角x坐标
//   y: 0,             // 左上角y坐标
//   x2: 100,          // 右下角x坐标
//   y2: 100,          // 右下角y坐标
//   cx: 50,           // 中心x坐标
//   cy: 50,           // 中心y坐标
//   cz: 150           // 估算深度
// }

// 实际应用示例
function createPathAnalyzer() {
  return {
    // 获取路径信息
    getPathInfo(path: PathArray) {
      const info = getPathBBoxTotalLength(path);
      return {
        ...info,
        // 计算额外信息
        aspectRatio: info.width / info.height,
        area: info.width * info.height,
        perimeter: info.length,
        diagonal: Math.sqrt(info.width ** 2 + info.height ** 2)
      };
    },
    
    // 创建居中变换
    createCenterTransform(path: PathArray, targetWidth: number, targetHeight: number) {
      const { width, height, cx, cy } = getPathBBoxTotalLength(path);
      
      const scale = Math.min(
        targetWidth / width,
        targetHeight / height
      );
      
      const tx = targetWidth / 2 - cx * scale;
      const ty = targetHeight / 2 - cy * scale;
      
      return {
        scale,
        translate: [tx, ty],
        transform: `translate(${tx},${ty}) scale(${scale})`
      };
    },
    
    // 检查碰撞
    checkCollision(path1: PathArray, path2: PathArray) {
      const box1 = getPathBBoxTotalLength(path1);
      const box2 = getPathBBoxTotalLength(path2);
      
      return !(
        box2.x > box1.x2 ||
        box2.x2 < box1.x ||
        box2.y > box1.y2 ||
        box2.y2 < box1.y
      );
    }
  };
}

// 使用示例
const analyzer = createPathAnalyzer();

// 获取路径信息
const pathInfo = analyzer.getPathInfo(path);
console.log(pathInfo);

// 创建居中变换
const transform = analyzer.createCenterTransform(path, 500, 500);
console.log(transform);

// 碰撞检测
const path2: PathArray = [
  ['M', 50, 50],
  ['L', 150, 50],
  ['L', 150, 150],
  ['L', 50, 150],
  ['Z']
];

console.log(analyzer.checkCollision(path, path2));  // true
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径数组 | PathArray | - | 要分析的路径数组 |
| options | 配置选项 | Partial<PathLengthFactoryOptions> | - | 可选的配置参数 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 路径信息 | PathBBoxTotalLength | - | 包含边界框和长度信息的对象 |

- 返回对象属性

| 属性 | 说明 | 类型 | 中文说明 |
|---------|------|------|---------|
| length | 路径长度 | number | 路径的总长度 |
| width | 宽度 | number | 边界框的宽度 |
| height | 高度 | number | 边界框的高度 |
| x | 左上角x | number | 边界框左上角x坐标 |
| y | 左上角y | number | 边界框左上角y坐标 |
| x2 | 右下角x | number | 边界框右下角x坐标 |
| y2 | 右下角y | number | 边界框右下角y坐标 |
| cx | 中心x | number | 边界框中心x坐标 |
| cy | 中心y | number | 边界框中心y坐标 |
| cz | 深度估计 | number | 估算的深度值 |


## getPathBBox

获取路径的边界框（Bounding Box）信息。

- 功能说明

- 计算路径的边界框
- 支持字符串或数组格式的路径
- 计算中心点坐标
- 提供估算的深度值
- 处理空路径的情况

```ts
import { getPathBBox } from '@antv/util';

// 基本使用
const path: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100],
  ['L', 0, 100],
  ['Z']
];

console.log(getPathBBox(path));
// {
//   width: 100,        // 宽度
//   height: 100,       // 高度
//   x: 0,             // 左上角x坐标
//   y: 0,             // 左上角y坐标
//   x2: 100,          // 右下角x坐标
//   y2: 100,          // 右下角y坐标
//   cx: 50,           // 中心x坐标
//   cy: 50,           // 中心y坐标
//   cz: 150           // 估算深度
// }

// 字符串路径
console.log(getPathBBox('M0,0 L100,0 L100,100 L0,100 Z'));

// 实际应用示例
function createShapeUtil() {
  return {
    // 计算缩放比例以适应目标大小
    calculateScale(path: PathArray, targetWidth: number, targetHeight: number) {
      const bbox = getPathBBox(path);
      return {
        scaleX: targetWidth / bbox.width,
        scaleY: targetHeight / bbox.height,
        uniform: Math.min(targetWidth / bbox.width, targetHeight / bbox.height)
      };
    },
    
    // 创建居中变换矩阵
    createCenterTransform(path: PathArray, containerWidth: number, containerHeight: number) {
      const bbox = getPathBBox(path);
      
      return {
        translateX: (containerWidth - bbox.width) / 2 - bbox.x,
        translateY: (containerHeight - bbox.height) / 2 - bbox.y,
        toString() {
          return `translate(${this.translateX},${this.translateY})`;
        }
      };
    },
    
    // 检查是否包含点
    containsPoint(path: PathArray, x: number, y: number) {
      const bbox = getPathBBox(path);
      return (
        x >= bbox.x &&
        x <= bbox.x2 &&
        y >= bbox.y &&
        y <= bbox.y2
      );
    }
  };
}

// 使用示例
const shapeUtil = createShapeUtil();

// 计算缩放
const scale = shapeUtil.calculateScale(path, 500, 300);
console.log(scale);

// 居中变换
const transform = shapeUtil.createCenterTransform(path, 800, 600);
console.log(transform.toString());

// 点击检测
console.log(shapeUtil.containsPoint(path, 50, 50));  // true

// SVG元素定位示例
function positionElement(element: SVGElement, path: PathArray, padding = 10) {
  const bbox = getPathBBox(path);
  
  element.style.position = 'absolute';
  element.style.left = `${bbox.x - padding}px`;
  element.style.top = `${bbox.y - padding}px`;
  element.style.width = `${bbox.width + padding * 2}px`;
  element.style.height = `${bbox.height + padding * 2}px`;
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径 | string \| PathArray | - | 要分析的路径 |
| options | 配置选项 | Partial<PathLengthFactoryOptions> | - | 可选的配置参数 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 边界框信息 | PathBBox | - | 包含边界框信息的对象 |

- 返回对象属性

| 属性 | 说明 | 类型 | 中文说明 |
|---------|------|------|---------|
| width | 宽度 | number | 边界框的宽度 |
| height | 高度 | number | 边界框的高度 |
| x | 左上角x | number | 边界框左上角x坐标 |
| y | 左上角y | number | 边界框左上角y坐标 |
| x2 | 右下角x | number | 边界框右下角x坐标 |
| y2 | 右下角y | number | 边界框右下角y坐标 |
| cx | 中心x | number | 边界框中心x坐标 |
| cy | 中心y | number | 边界框中心y坐标 |
| cz | 深度估计 | number | 估算的深度值 |


## getPointAtLength

获取路径上指定距离处的坐标点。

- 功能说明

- 计算路径上特定距离的点坐标
- 支持字符串或数组格式的路径
- 基于路径总长度的比例计算
- 支持自定义配置选项
- 精确定位路径上的点

```ts
import { getPointAtLength } from '@antv/util';

// 基本使用
const path: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100]
];

console.log(getPointAtLength(path, 50));  // [50, 0]
console.log(getPointAtLength(path, 150)); // [100, 50]

// 字符串路径
console.log(getPointAtLength('M0,0 L100,0 L100,100', 100));

// 实际应用示例
function createPathAnimator() {
  return {
    // 创建路径动画
    animate(path: PathArray, duration: number = 1000) {
      const startTime = performance.now();
      const totalLength = pathLengthFactory(path, undefined, { length: true }).length;
      
      return {
        // 获取当前动画帧的点
        getCurrentPoint(currentTime: number) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          return getPointAtLength(path, totalLength * progress);
        },
        
        // 创建动画函数
        start(callback: (point: [number, number]) => void) {
          const animate = (time: number) => {
            const point = this.getCurrentPoint(time);
            callback(point);
            
            if (time - startTime < duration) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      };
    },
    
    // 创建路径采样器
    createSampler(path: PathArray, samples: number = 100) {
      const totalLength = pathLengthFactory(path, undefined, { length: true }).length;
      const step = totalLength / (samples - 1);
      
      return Array.from({ length: samples }, (_, i) => 
        getPointAtLength(path, i * step)
      );
    },
    
    // 创建路径跟随器
    createFollower(path: PathArray) {
      const totalLength = pathLengthFactory(path, undefined, { length: true }).length;
      
      return {
        getPointAtDistance(distance: number) {
          return getPointAtLength(path, distance);
        },
        
        getPointAtPercent(percent: number) {
          return getPointAtLength(path, totalLength * Math.min(Math.max(percent, 0), 1));
        }
      };
    }
  };
}

// 使用示例
const animator = createPathAnimator();

// 路径动画
const path = [
  ['M', 0, 0],
  ['C', 50, 0, 100, 50, 100, 100]
];

animator.animate(path).start(point => {
  console.log('Current position:', point);
});

// 路径采样
const samples = animator.createSampler(path, 10);
console.log('Path samples:', samples);

// 路径跟随
const follower = animator.createFollower(path);
console.log(follower.getPointAtPercent(0.5));  // 路径中点
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathInput | 路径 | string \| PathArray | - | 要分析的路径 |
| distance | 距离 | number | - | 要获取点的距离 |
| options | 配置选项 | Partial<PathLengthFactoryOptions> | - | 可选的配置参数 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| point | 坐标点 | [number, number] | - | 指定距离处的坐标点 |


## getPropertiesAtLength

获取路径上指定距离处的段属性信息。

- 功能说明

- 获取指定距离处的路径段信息
- 计算到该段的累计长度
- 返回段的索引和属性
- 支持字符串或数组格式的路径
- 处理边界情况

```ts
import { getPropertiesAtLength } from '@antv/util';

// 基本使用
const path: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100],
  ['L', 0, 100]
];

console.log(getPropertiesAtLength(path, 150));
// {
//   segment: ['L', 100, 100],  // 当前段
//   index: 2,                  // 段索引
//   length: 100,               // 段长度
//   lengthAtSegment: 100,      // 到该段起点的累计长度
//   point: { x: 100, y: 100 }  // 段终点坐标
// }

// 实际应用示例
function createPathAnalyzer() {
  return {
    // 获取路径段信息
    getSegmentInfo(path: PathArray, distance: number) {
      const props = getPropertiesAtLength(path, distance);
      return {
        ...props,
        // 计算在当前段的进度
        segmentProgress: props.length ? 
          (distance - props.lengthAtSegment) / props.length : 0,
        // 计算总体进度
        totalProgress: distance / getTotalLength(path)
      };
    },
    
    // 创建路径动画控制器
    createAnimationController(path: PathArray) {
      const totalLength = getTotalLength(path);
      
      return {
        // 获取指定进度的位置信息
        getPositionAt(progress: number) {
          const distance = totalLength * Math.min(Math.max(progress, 0), 1);
          return this.getSegmentInfo(path, distance);
        },
        
        // 创建动画生成器
        *createAnimator(duration: number, fps = 60) {
          const frames = duration / 1000 * fps;
          const step = 1 / frames;
          
          for (let progress = 0; progress <= 1; progress += step) {
            yield this.getPositionAt(progress);
          }
        }
      };
    },
    
    // 路径分段器
    splitPath(path: PathArray, segments: number) {
      const totalLength = getTotalLength(path);
      const segmentLength = totalLength / segments;
      
      return Array.from({ length: segments + 1 }, (_, i) => 
        getPropertiesAtLength(path, i * segmentLength)
      );
    }
  };
}

// 使用示例
const analyzer = createPathAnalyzer();

// 获取特定位置信息
const segmentInfo = analyzer.getSegmentInfo(path, 150);
console.log(segmentInfo);

// 创建动画控制器
const controller = analyzer.createAnimationController(path);
const animator = controller.createAnimator(1000);

// 运行动画
function runAnimation() {
  const frame = animator.next();
  if (!frame.done) {
    console.log('Current position:', frame.value);
    requestAnimationFrame(runAnimation);
  }
}
runAnimation();

// 路径分段
const segments = analyzer.splitPath(path, 4);
console.log('Path segments:', segments);
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathInput | 路径 | string \| PathArray | - | 要分析的路径 |
| distance | 距离 | number | - | 指定的距离 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 段属性 | SegmentProperties | - | 包含段信息的对象 |

- 返回对象属性

| 属性 | 说明 | 类型 | 中文说明 |
|---------|------|------|---------|
| segment | 路径段 | PathSegment | 当前路径段 |
| index | 索引 | number | 段在路径中的索引 |
| length | 长度 | number | 当前段的长度 |
| lengthAtSegment | 累计长度 | number | 到该段的累计长度 |
| point | 坐标点 | {x: number, y: number} | 段终点坐标 |


## getPropertiesAtPoint

获取路径上距离指定点最近的位置及其属性信息。

- 功能说明

- 查找路径上最接近给定点的位置
- 计算点到路径的最短距离
- 返回最近点的段属性信息
- 使用二分查找优化精度
- 支持复杂路径结构

```ts
import { getPropertiesAtPoint } from '@antv/util';

// 基本使用
const path: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100]
];

const point = { x: 50, y: 50 };
console.log(getPropertiesAtPoint(path, point));
// {
//   closest: { x: 100, y: 50 },  // 最近点
//   distance: 50,                // 最短距离
//   segment: {                   // 段属性
//     segment: ['L', 100, 100],
//     index: 2,
//     length: 100,
//     lengthAtSegment: 100
//   }
// }

// 实际应用示例
function createPathInteractor() {
  return {
    // 创建路径跟随器
    createPathFollower(path: PathArray) {
      return {
        // 获取最近点信息
        getNearestPoint(point: Point) {
          return getPropertiesAtPoint(path, point);
        },
        
        // 检查点是否在路径附近
        isNearPath(point: Point, threshold = 5) {
          const { distance } = getPropertiesAtPoint(path, point);
          return distance <= threshold;
        },
        
        // 获取路径上的投影点
        getProjection(point: Point) {
          const { closest } = getPropertiesAtPoint(path, point);
          return closest;
        }
      };
    },
    
    // 创建磁吸效果
    createSnapEffect(path: PathArray, threshold = 10) {
      return (point: Point) => {
        const { closest, distance } = getPropertiesAtPoint(path, point);
        if (distance <= threshold) {
          return closest;
        }
        return point;
      };
    },
    
    // 创建路径距离监听器
    createDistanceMonitor(path: PathArray) {
      return {
        // 监听点到路径的距离变化
        watch(point: Point, callback: (info: PointProperties) => void) {
          let lastDistance = Infinity;
          
          return (newPoint: Point) => {
            const props = getPropertiesAtPoint(path, newPoint);
            if (props.distance !== lastDistance) {
              lastDistance = props.distance;
              callback(props);
            }
          };
        }
      };
    }
  };
}

// 使用示例
const interactor = createPathInteractor();

// 创建路径跟随器
const follower = interactor.createPathFollower(path);
console.log(follower.isNearPath({ x: 50, y: 10 }));  // true

// 创建磁吸效果
const snap = interactor.createSnapEffect(path);
console.log(snap({ x: 98, y: 48 }));  // { x: 100, y: 50 }

// 创建距离监听器
const monitor = interactor.createDistanceMonitor(path);
const unwatch = monitor.watch({ x: 0, y: 0 }, (info) => {
  console.log('Distance changed:', info.distance);
});
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathInput | 路径 | string \| PathArray | - | 要分析的路径 |
| point | 目标点 | Point | - | 要检测的点坐标 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 点属性 | PointProperties | - | 包含最近点信息的对象 |

- 返回对象属性

| 属性 | 说明 | 类型 | 中文说明 |
|---------|------|------|---------|
| closest | 最近点 | Point | 路径上最近的点 |
| distance | 距离 | number | 到路径的最短距离 |
| segment | 段属性 | SegmentProperties | 最近点所在段的属性 |


## getRotatedCurve

获取最佳旋转匹配的曲线路径。

- 功能说明

- 计算两个曲线之间的最佳旋转匹配
- 通过比较点之间的距离来评估匹配度
- 支持循环旋转比较
- 返回最佳匹配的旋转路径
- 优化路径变形效果

```ts
import { getRotatedCurve } from '@antv/util';

// 基本使用
const curve1: CurveArray = [
  ['M', 0, 0],
  ['C', 20, 20, 40, 20, 60, 0],
  ['C', 80, -20, 100, -20, 120, 0]
];

const curve2: CurveArray = [
  ['M', 120, 0],
  ['C', 100, -20, 80, -20, 60, 0],
  ['C', 40, 20, 20, 20, 0, 0]
];

console.log(getRotatedCurve(curve1, curve2));
// 返回最佳匹配的旋转路径

// 实际应用示例
function createShapeMorpher() {
  return {
    // 创建形状变形器
    createMorph(from: CurveArray, to: CurveArray) {
      const rotated = getRotatedCurve(from, to);
      
      return {
        // 获取中间状态
        getIntermediate(progress: number) {
          return rotated.map((segment, i) => {
            if (segment[0] === 'M') {
              return [
                'M',
                interpolate(segment[1], to[i][1], progress),
                interpolate(segment[2], to[i][2], progress)
              ];
            }
            return [
              'C',
              ...segment.slice(1).map((value, j) => 
                interpolate(value, to[i][j + 1], progress)
              )
            ];
          });
        },
        
        // 创建动画帧
        createFrames(frames: number) {
          return Array.from({ length: frames }, (_, i) => 
            this.getIntermediate(i / (frames - 1))
          );
        }
      };
    },
    
    // 创建形状匹配器
    createMatcher(shapes: CurveArray[]) {
      return {
        // 找到最佳匹配
        findBestMatch(target: CurveArray) {
          return shapes.map(shape => ({
            shape,
            rotated: getRotatedCurve(shape, target),
            distance: calculateDistance(shape, target)
          })).sort((a, b) => a.distance - b.distance)[0];
        }
      };
    }
  };
}

// 辅助函数：插值计算
function interpolate(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

// 辅助函数：计算两个形状间的距离
function calculateDistance(shape1: CurveArray, shape2: CurveArray) {
  return shape1.reduce((sum, segment, i) => {
    if (segment[0] === 'M') return sum;
    return sum + distanceSquareRoot(
      segment.slice(-2) as [number, number],
      shape2[i].slice(-2) as [number, number]
    );
  }, 0);
}

// 使用示例
const morpher = createShapeMorpher();

// 创建形状变形
const morphing = morpher.createMorph(curve1, curve2);
console.log(morphing.getIntermediate(0.5));  // 中间状态
console.log(morphing.createFrames(10));      // 动画帧

// 形状匹配
const matcher = morpher.createMatcher([curve1, curve2]);
const bestMatch = matcher.findBestMatch(curve1);
console.log(bestMatch);
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| a | 源曲线 | CurveArray | - | 源曲线路径 |
| b | 目标曲线 | CurveArray | - | 目标曲线路径 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 旋转后的曲线 | CurveArray | - | 最佳匹配的旋转曲线 |


## getTotalLength

计算路径的总长度。

- 功能说明

- 计算路径的总长度
- 支持字符串或数组格式的路径
- 提供配置选项
- 高效准确的长度计算
- 等同于 SVG 的 getTotalLength() 方法

```ts
import { getTotalLength } from '@antv/util';

// 基本使用
const path: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100]
];

console.log(getTotalLength(path));  // 200

// 字符串路径
console.log(getTotalLength('M0,0 L100,0 L100,100'));  // 200

// 实际应用示例
function createPathUtil() {
  return {
    // 计算路径进度
    calculateProgress(path: PathArray, distance: number) {
      const totalLength = getTotalLength(path);
      return Math.min(Math.max(distance / totalLength, 0), 1);
    },
    
    // 创建路径采样器
    createSampler(path: PathArray, samples: number = 100) {
      const totalLength = getTotalLength(path);
      const step = totalLength / (samples - 1);
      
      return {
        // 获取采样点
        getPoints() {
          return Array.from({ length: samples }, (_, i) => 
            getPointAtLength(path, i * step)
          );
        },
        
        // 获取均匀分布的长度
        getLengths() {
          return Array.from({ length: samples }, (_, i) => i * step);
        }
      };
    },
    
    // 创建路径动画控制器
    createAnimationController(path: PathArray) {
      const totalLength = getTotalLength(path);
      
      return {
        // 获取指定时间的位置
        getPositionAtTime(time: number, duration: number) {
          const progress = Math.min(time / duration, 1);
          return getPointAtLength(path, totalLength * progress);
        },
        
        // 创建动画生成器
        *createFrames(duration: number, fps = 60) {
          const frameCount = duration / 1000 * fps;
          const step = totalLength / frameCount;
          
          for (let distance = 0; distance <= totalLength; distance += step) {
            yield getPointAtLength(path, distance);
          }
        }
      };
    }
  };
}

// 使用示例
const pathUtil = createPathUtil();

// 计算进度
console.log(pathUtil.calculateProgress(path, 100));  // 0.5

// 路径采样
const sampler = pathUtil.createSampler(path, 5);
console.log(sampler.getPoints());
console.log(sampler.getLengths());

// 动画控制
const animator = pathUtil.createAnimationController(path);

// 创建动画
function animate(duration: number) {
  const startTime = performance.now();
  
  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const position = animator.getPositionAtTime(elapsed, duration);
    
    // 更新位置...
    console.log(position);
    
    if (elapsed < duration) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

animate(1000);  // 1秒动画
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathInput | 路径 | string \| PathArray | - | 要计算长度的路径 |
| options | 配置选项 | Partial<PathLengthFactoryOptions> | - | 可选的配置参数 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| length | 总长度 | number | - | 路径的总长度 |


## isAbsoluteArray

判断路径数组是否全部由绝对坐标命令组成。

- 功能说明

- 检查路径数组是否为绝对坐标
- 验证所有命令是否为大写
- 类型保护功能
- 支持路径数组格式
- 用于路径验证

```ts
import { isAbsoluteArray } from '@antv/util';

// 基本使用
const absolutePath: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100]
];
console.log(isAbsoluteArray(absolutePath));  // true

const relativePath: PathArray = [
  ['M', 0, 0],
  ['l', 100, 0],
  ['l', 0, 100]
];
console.log(isAbsoluteArray(relativePath));  // false

// 实际应用示例
function createPathValidator() {
  return {
    // 验证路径格式
    validatePath(path: PathArray) {
      return {
        isValid: isPathArray(path),
        isAbsolute: isAbsoluteArray(path),
        hasRelative: path.some(([cmd]) => cmd !== cmd.toUpperCase()),
        commands: path.map(([cmd]) => cmd)
      };
    },
    
    // 确保路径为绝对坐标
    ensureAbsolute(path: PathArray): AbsoluteArray {
      if (isAbsoluteArray(path)) {
        return path;
      }
      return convertToAbsolute(path);
    },
    
    // 创建路径检查器
    createPathChecker() {
      return {
        // 检查路径是否符合要求
        check(path: PathArray) {
          if (!isAbsoluteArray(path)) {
            throw new Error('Path must use absolute coordinates');
          }
          return true;
        },
        
        // 验证并修复路径
        validate(path: PathArray) {
          return this.check(path) ? path : this.ensureAbsolute(path);
        }
      };
    }
  };
}

// 使用示例
const validator = createPathValidator();

// 验证路径
const pathInfo = validator.validatePath(absolutePath);
console.log(pathInfo);
// {
//   isValid: true,
//   isAbsolute: true,
//   hasRelative: false,
//   commands: ['M', 'L', 'L']
// }

// 路径检查器
const checker = validator.createPathChecker();

try {
  checker.check(relativePath);
} catch (error) {
  console.log(error.message);  // "Path must use absolute coordinates"
}

// 辅助函数：转换为绝对坐标
function convertToAbsolute(path: PathArray): AbsoluteArray {
  let currentX = 0;
  let currentY = 0;
  
  return path.map(segment => {
    const [cmd, ...params] = segment;
    if (cmd === cmd.toLowerCase()) {
      // 转换相对坐标为绝对坐标
      const absolute = [cmd.toUpperCase()];
      for (let i = 0; i < params.length; i += 2) {
        currentX += params[i] || 0;
        currentY += params[i + 1] || 0;
        absolute.push(currentX, currentY);
      }
      return absolute;
    }
    // 更新当前位置
    if (params.length >= 2) {
      [currentX, currentY] = params.slice(-2);
    }
    return segment;
  }) as AbsoluteArray;
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径 | string \| PathArray | - | 要检查的路径 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 判断结果 | boolean | - | 是否为绝对坐标路径 |


## isCurveArray

判断路径数组是否全部由三次贝塞尔曲线段（C）和移动命令（M）组成。

- 功能说明

- 检查路径是否为标准化的曲线数组
- 验证所有段是否为 M 或 C 命令
- 提供类型保护功能
- 用于曲线路径验证
- 确保路径格式一致性

```ts
import { isCurveArray } from '@antv/util';

// 基本使用
const curvePath: PathArray = [
  ['M', 0, 0],
  ['C', 20, 20, 40, 20, 60, 0]
];
console.log(isCurveArray(curvePath));  // true

const mixedPath: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['Q', 150, 50, 200, 0]
];
console.log(isCurveArray(mixedPath));  // false

// 实际应用示例
function createCurveUtil() {
  return {
    // 验证曲线路径
    validateCurve(path: PathArray) {
      return {
        isCurve: isCurveArray(path),
        segments: path.map(([cmd]) => cmd),
        isValid: path.every(([cmd]) => 'MC'.includes(cmd))
      };
    },
    
    // 确保路径为曲线格式
    ensureCurve(path: PathArray) {
      if (isCurveArray(path)) {
        return path;
      }
      return convertToCurve(path);
    },
    
    // 创建曲线处理器
    createCurveProcessor() {
      return {
        // 处理路径
        process(path: PathArray) {
          const curves = this.ensureCurve(path);
          return {
            // 获取控制点
            getControlPoints() {
              return curves.reduce((points, segment) => {
                if (segment[0] === 'C') {
                  points.push(
                    [segment[1], segment[2]],
                    [segment[3], segment[4]]
                  );
                }
                return points;
              }, [] as [number, number][]);
            },
            
            // 简化曲线
            simplify(tolerance = 1) {
              return simplifyBezier(curves, tolerance);
            }
          };
        }
      };
    }
  };
}

// 使用示例
const curveUtil = createCurveUtil();

// 验证曲线
const curveInfo = curveUtil.validateCurve(curvePath);
console.log(curveInfo);
// {
//   isCurve: true,
//   segments: ['M', 'C'],
//   isValid: true
// }

// 曲线处理
const processor = curveUtil.createCurveProcessor();
const processed = processor.process(curvePath);
console.log(processed.getControlPoints());

// 辅助函数：转换为曲线
function convertToCurve(path: PathArray): PathArray {
  return path.map((segment, i) => {
    const [cmd, ...params] = segment;
    if (cmd === 'M') return segment;
    if (cmd === 'L') {
      const prev = path[i - 1];
      const [x1, y1] = prev.slice(-2);
      const [x2, y2] = params;
      // 将直线转换为曲线
      return [
        'C',
        x1 + (x2 - x1) / 3,
        y1 + (y2 - y1) / 3,
        x1 + 2 * (x2 - x1) / 3,
        y1 + 2 * (y2 - y1) / 3,
        x2,
        y2
      ];
    }
    // 其他命令的转换...
    return segment;
  });
}

// 简化贝塞尔曲线
function simplifyBezier(curves: PathArray, tolerance: number): PathArray {
  // 实现曲线简化算法...
  return curves;
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径 | string \| PathArray | - | 要检查的路径 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 判断结果 | boolean | - | 是否为曲线数组 |


## isNormalizedArray

判断路径数组是否为标准化的绝对坐标路径（不包含简写命令）。

- 功能说明

- 检查路径是否使用绝对坐标
- 验证是否只包含标准命令（A、C、L、M、Q、Z）
- 不允许使用简写命令（H、V、S、T）
- 提供类型保护功能
- 确保路径格式标准化

```ts
import { isNormalizedArray } from '@antv/util';

// 基本使用
const normalizedPath: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['C', 150, 0, 200, 50, 200, 100]
];
console.log(isNormalizedArray(normalizedPath));  // true

const shorthandPath: PathArray = [
  ['M', 0, 0],
  ['H', 100],  // 简写命令
  ['V', 100]   // 简写命令
];
console.log(isNormalizedArray(shorthandPath));  // false

// 实际应用示例
function createPathNormalizer() {
  return {
    // 验证路径格式
    validatePath(path: PathArray) {
      return {
        isNormalized: isNormalizedArray(path),
        hasShorthand: path.some(([cmd]) => 'HSTVT'.includes(cmd)),
        commands: path.map(([cmd]) => cmd),
        isAbsolute: path.every(([cmd]) => cmd === cmd.toUpperCase())
      };
    },
    
    // 标准化路径
    normalizePath(path: PathArray) {
      if (isNormalizedArray(path)) {
        return path;
      }
      return convertToNormalized(path);
    },
    
    // 创建路径处理器
    createPathProcessor() {
      return {
        // 处理并验证路径
        process(path: PathArray) {
          const normalized = this.normalizePath(path);
          
          return {
            path: normalized,
            // 获取所有点
            getPoints() {
              return normalized.map(segment => 
                segment.slice(-2) as [number, number]
              );
            },
            // 获取命令统计
            getCommandStats() {
              return normalized.reduce((stats, [cmd]) => {
                stats[cmd] = (stats[cmd] || 0) + 1;
                return stats;
              }, {} as Record<string, number>);
            }
          };
        }
      };
    }
  };
}

// 使用示例
const normalizer = createPathNormalizer();

// 验证路径
const pathInfo = normalizer.validatePath(normalizedPath);
console.log(pathInfo);
// {
//   isNormalized: true,
//   hasShorthand: false,
//   commands: ['M', 'L', 'C'],
//   isAbsolute: true
// }

// 路径处理
const processor = normalizer.createPathProcessor();
const processed = processor.process(shorthandPath);
console.log(processed.getCommandStats());

// 辅助函数：转换为标准化格式
function convertToNormalized(path: PathArray): PathArray {
  let currentX = 0;
  let currentY = 0;
  
  return path.map(segment => {
    const [cmd, ...params] = segment;
    switch (cmd) {
      case 'H':
        currentX = params[0];
        return ['L', currentX, currentY];
      case 'V':
        currentY = params[0];
        return ['L', currentX, currentY];
      case 'S':
        // 转换平滑曲线命令为完整的贝塞尔曲线
        // 实现转换逻辑...
        break;
      case 'T':
        // 转换平滑二次贝塞尔曲线为标准格式
        // 实现转换逻辑...
        break;
      default:
        if (params.length >= 2) {
          [currentX, currentY] = params.slice(-2);
        }
        return segment;
    }
  });
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径 | string \| PathArray | - | 要检查的路径 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 判断结果 | boolean | - | 是否为标准化路径 |

- 标准命令列表

| 命令 | 说明 | 参数格式 |
|---------|------|------|
| A | 弧线 | rx,ry,angle,large-arc,sweep,x,y |
| C | 三次贝塞尔曲线 | x1,y1,x2,y2,x,y |
| L | 直线 | x,y |
| M | 移动 | x,y |
| Q | 二次贝塞尔曲线 | x1,y1,x,y |
| Z | 闭合路径 | 无参数 |


## isPathArray

判断是否为有效的路径数组。

- 功能说明

- 验证数组是否为有效的路径数组
- 检查每个段的命令和参数数量
- 支持所有标准 SVG 路径命令
- 提供类型保护功能
- 验证路径格式的完整性

```ts
import { isPathArray } from '@antv/util';

// 基本使用
const validPath: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['C', 150, 0, 200, 50, 200, 100]
];
console.log(isPathArray(validPath));  // true

const invalidPath = [
  ['M', 0],      // 参数不足
  ['L', 100, 0],
  ['X', 200, 0]  // 无效命令
];
console.log(isPathArray(invalidPath));  // false

// 实际应用示例
function createPathValidator() {
  return {
    // 验证路径
    validatePath(path: any) {
      if (!isPathArray(path)) {
        return {
          isValid: false,
          errors: this.getValidationErrors(path)
        };
      }
      
      return {
        isValid: true,
        commands: path.map(([cmd]) => cmd)
      };
    },
    
    // 获取验证错误
    getValidationErrors(path: any[]) {
      const errors = [];
      
      if (!Array.isArray(path)) {
        errors.push('Input must be an array');
        return errors;
      }
      
      path.forEach((segment, index) => {
        if (!Array.isArray(segment)) {
          errors.push(`Segment ${index} must be an array`);
          return;
        }
        
        const [cmd] = segment;
        const lowerCmd = cmd.toLowerCase();
        
        if (!'achlmqstvz'.includes(lowerCmd)) {
          errors.push(`Invalid command "${cmd}" at segment ${index}`);
        }
        
        const expectedParams = paramsCount[lowerCmd];
        const actualParams = segment.length - 1;
        
        if (expectedParams !== actualParams) {
          errors.push(
            `Wrong number of parameters for "${cmd}" command at segment ${index}. ` +
            `Expected ${expectedParams}, got ${actualParams}`
          );
        }
      });
      
      return errors;
    },
    
    // 创建路径构建器
    createPathBuilder() {
      const segments: PathArray = [];
      
      return {
        moveTo(x: number, y: number) {
          segments.push(['M', x, y]);
          return this;
        },
        
        lineTo(x: number, y: number) {
          segments.push(['L', x, y]);
          return this;
        },
        
        curveTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number) {
          segments.push(['C', x1, y1, x2, y2, x, y]);
          return this;
        },
        
        close() {
          segments.push(['Z']);
          return this;
        },
        
        build() {
          if (!isPathArray(segments)) {
            throw new Error('Invalid path construction');
          }
          return segments;
        }
      };
    }
  };
}

// 使用示例
const validator = createPathValidator();

// 验证路径
console.log(validator.validatePath(validPath));
console.log(validator.validatePath(invalidPath));

// 使用路径构建器
const builder = validator.createPathBuilder();
const newPath = builder
  .moveTo(0, 0)
  .lineTo(100, 0)
  .curveTo(150, 0, 200, 50, 200, 100)
  .close()
  .build();

console.log(isPathArray(newPath));  // true
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径 | string \| PathArray | - | 要验证的路径 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 判断结果 | boolean | - | 是否为有效路径数组 |

- 支持的命令

| 命令 | 说明 | 参数数量 | 中文说明 |
|---------|------|------|---------|
| A/a | 弧线 | 7 | 绘制弧线 |
| C/c | 三次贝塞尔曲线 | 6 | 绘制三次贝塞尔曲线 |
| H/h | 水平线 | 1 | 绘制水平线 |
| L/l | 直线 | 2 | 绘制直线 |
| M/m | 移动 | 2 | 移动到点 |
| Q/q | 二次贝塞尔曲线 | 4 | 绘制二次贝塞尔曲线 |
| S/s | 平滑三次贝塞尔曲线 | 4 | 绘制平滑三次贝塞尔曲线 |
| T/t | 平滑二次贝塞尔曲线 | 2 | 绘制平滑二次贝塞尔曲线 |
| V/v | 垂直线 | 1 | 绘制垂直线 |
| Z/z | 闭合路径 | 0 | 闭合路径 |


## isPointInStroke

判断点是否在路径的描边上。

- 功能说明

- 检测点是否位于路径的描边上
- 支持字符串或数组格式的路径
- 使用距离阈值进行判断
- 高精度检测（默认阈值 0.001）
- 基于最近点距离计算

```ts
import { isPointInStroke } from '@antv/util';

// 基本使用
const path: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100]
];

console.log(isPointInStroke(path, { x: 50, y: 0 }));   // true
console.log(isPointInStroke(path, { x: 50, y: 1 }));   // false

// 实际应用示例
function createPathInteractor() {
  return {
    // 创建路径检测器
    createDetector(path: PathArray, tolerance = 0.001) {
      return {
        // 检测点是否在路径上
        isOnPath(point: Point) {
          return isPointInStroke(path, point);
        },
        
        // 获取路径上的点
        getPointsOnPath(points: Point[]) {
          return points.filter(point => 
            isPointInStroke(path, point)
          );
        },
        
        // 创建点击区域检测
        createClickDetector(threshold = 5) {
          return (event: MouseEvent) => {
            const point = {
              x: event.clientX,
              y: event.clientY
            };
            return this.isOnPath(point);
          };
        }
      };
    },
    
    // 创建路径编辑器
    createPathEditor(path: PathArray) {
      const detector = this.createDetector(path);
      let selectedPoint: Point | null = null;
      
      return {
        // 处理鼠标移动
        handleMouseMove(point: Point) {
          if (detector.isOnPath(point)) {
            // 高亮路径...
            return true;
          }
          return false;
        },
        
        // 处理点击
        handleClick(point: Point) {
          if (detector.isOnPath(point)) {
            selectedPoint = point;
            return true;
          }
          selectedPoint = null;
          return false;
        },
        
        // 获取选中点
        getSelectedPoint() {
          return selectedPoint;
        }
      };
    },
    
    // 创建路径分析器
    createPathAnalyzer(path: PathArray, sampleCount = 100) {
      return {
        // 获取路径上的采样点
        getSamplePoints() {
          const points: Point[] = [];
          const length = getTotalLength(path);
          const step = length / (sampleCount - 1);
          
          for (let i = 0; i <= length; i += step) {
            const point = getPointAtLength(path, i);
            points.push(point);
          }
          
          return points;
        },
        
        // 检查点序列是否在路径上
        checkPointSequence(points: Point[]) {
          return points.every(point => 
            isPointInStroke(path, point)
          );
        }
      };
    }
  };
}

// 使用示例
const interactor = createPathInteractor();

// 创建检测器
const detector = interactor.createDetector(path);
console.log(detector.isOnPath({ x: 50, y: 0 }));

// 创建编辑器
const editor = interactor.createPathEditor(path);
editor.handleMouseMove({ x: 50, y: 0 });

// 创建分析器
const analyzer = interactor.createPathAnalyzer(path);
const samplePoints = analyzer.getSamplePoints();
console.log(analyzer.checkPointSequence(samplePoints));
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathInput | 路径 | string \| PathArray | - | 要检测的路径 |
| point | 检测点 | Point | - | 要检测的点坐标 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 判断结果 | boolean | - | 点是否在路径描边上 |


## midPoint

计算两点之间的中间点或按比例插值点。

- 功能说明

- 计算两点之间的插值点
- 支持任意比例的插值
- 线性插值计算
- 返回插值点坐标
- 用于路径和动画计算

```ts
import { midPoint } from '@antv/util';

// 基本使用
const point1 = [0, 0];
const point2 = [100, 100];

console.log(midPoint(point1, point2, 0.5));   // [50, 50]    中点
console.log(midPoint(point1, point2, 0.25));  // [25, 25]    四分之一点
console.log(midPoint(point1, point2, 0.75));  // [75, 75]    四分之三点

// 实际应用示例
function createInterpolator() {
  return {
    // 创建点插值器
    createPointInterpolator(start: number[], end: number[]) {
      return {
        // 获取插值点
        getPoint(t: number) {
          return midPoint(start, end, Math.max(0, Math.min(1, t)));
        },
        
        // 获取多个插值点
        getPoints(count: number) {
          return Array.from({ length: count }, (_, i) => 
            this.getPoint(i / (count - 1))
          );
        }
      };
    },
    
    // 创建路径插值器
    createPathInterpolator(points: number[][]) {
      return {
        // 获取路径上的点
        getPointAtPercent(percent: number) {
          const t = Math.max(0, Math.min(1, percent));
          const totalSegments = points.length - 1;
          const segment = Math.floor(t * totalSegments);
          const segmentT = (t * totalSegments) % 1;
          
          return midPoint(
            points[segment],
            points[Math.min(segment + 1, points.length - 1)],
            segmentT
          );
        },
        
        // 采样路径点
        samplePoints(count: number) {
          return Array.from({ length: count }, (_, i) =>
            this.getPointAtPercent(i / (count - 1))
          );
        }
      };
    },
    
    // 创建动画生成器
    createAnimator(start: number[], end: number[], duration: number) {
      const startTime = performance.now();
      
      return {
        // 获取当前动画帧
        getCurrentPoint() {
          const elapsed = performance.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          return midPoint(start, end, progress);
        },
        
        // 启动动画
        animate(callback: (point: number[]) => void) {
          const update = () => {
            const point = this.getCurrentPoint();
            callback(point);
            
            if (performance.now() - startTime < duration) {
              requestAnimationFrame(update);
            }
          };
          
          requestAnimationFrame(update);
        }
      };
    }
  };
}

// 使用示例
const interpolator = createInterpolator();

// 点插值
const pointInterp = interpolator.createPointInterpolator([0, 0], [100, 100]);
console.log(pointInterp.getPoints(5));

// 路径插值
const pathPoints = [[0, 0], [50, 50], [100, 0], [150, 50]];
const pathInterp = interpolator.createPathInterpolator(pathPoints);
console.log(pathInterp.samplePoints(10));

// 动画示例
const animator = interpolator.createAnimator([0, 0], [100, 100], 1000);
animator.animate(point => {
  console.log('Current position:', point);
});
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| a | 起始点 | number[] | - | 起始点坐标 |
| b | 终点 | number[] | - | 终点坐标 |
| t | 插值比例 | number | - | 0-1之间的插值比例 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| point | 插值点 | number[] | - | 计算得到的插值点坐标 |


## pathLengthFactory

路径长度计算工厂函数，用于计算路径的长度、指定距离的点位置和边界框。

- 功能说明

- 计算路径总长度
- 获取指定距离处的点坐标
- 计算路径的边界框
- 支持所有标准路径命令
- 处理复杂路径计算

```ts
import { pathLengthFactory } from '@antv/util';

// 基本使用
const path: PathArray = [
  ['M', 0, 0],
  ['L', 100, 0],
  ['L', 100, 100]
];

console.log(pathLengthFactory(path));
// {
//   length: 200,                // 总长度
//   point: { x: 0, y: 0 },     // 起点
//   min: { x: 0, y: 0 },       // 最小坐标
//   max: { x: 100, y: 100 }    // 最大坐标
// }

// 获取特定距离的点
console.log(pathLengthFactory(path, 150));
// 返回距离起点150单位的点坐标

// 实际应用示例
function createPathAnalyzer() {
  return {
    // 创建路径分析器
    analyzePath(path: PathArray) {
      const info = pathLengthFactory(path);
      
      return {
        // 获取路径信息
        getInfo() {
          return info;
        },
        
        // 获取路径上的点
        getPointAt(distance: number) {
          return pathLengthFactory(path, distance).point;
        },
        
        // 获取路径采样点
        getSamplePoints(count: number) {
          const { length } = info;
          const step = length / (count - 1);
          
          return Array.from({ length: count }, (_, i) =>
            pathLengthFactory(path, i * step).point
          );
        },
        
        // 创建动画控制器
        createAnimationController(duration: number) {
          const { length } = info;
          
          return {
            // 获取当前位置
            getPosition(time: number) {
              const progress = Math.min(time / duration, 1);
              return pathLengthFactory(path, length * progress).point;
            },
            
            // 创建动画
            animate(callback: (point: { x: number, y: number }) => void) {
              const startTime = performance.now();
              
              const update = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const point = this.getPosition(elapsed);
                callback(point);
                
                if (elapsed < duration) {
                  requestAnimationFrame(update);
                }
              };
              
              requestAnimationFrame(update);
            }
          };
        }
      };
    },
    
    // 创建路径变换器
    createPathTransformer(path: PathArray) {
      const { min, max } = pathLengthFactory(path);
      
      return {
        // 缩放到指定大小
        scaleToSize(width: number, height: number) {
          const scaleX = width / (max.x - min.x);
          const scaleY = height / (max.y - min.y);
          
          return this.transformPath(path, {
            scale: Math.min(scaleX, scaleY),
            translate: [-min.x, -min.y]
          });
        }
      };
    }
  };
}

// 使用示例
const analyzer = createPathAnalyzer();
const pathAnalysis = analyzer.analyzePath(path);

// 获取路径信息
console.log(pathAnalysis.getInfo());

// 获取采样点
console.log(pathAnalysis.getSamplePoints(10));

// 创建动画
const animation = pathAnalysis.createAnimationController(1000);
animation.animate(point => {
  console.log('Current position:', point);
});
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathInput | 路径 | string \| PathArray | - | 要分析的路径 |
| distance | 距离 | number | - | 可选的指定距离 |
| options | 配置选项 | Partial<PathLengthFactoryOptions> | - | 可选的配置参数 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 计算结果 | LengthFactory | - | 包含长度和边界信息的对象 |

- 返回对象属性

| 属性 | 说明 | 类型 | 中文说明 |
|---------|------|------|---------|
| length | 总长度 | number | 路径的总长度 |
| point | 指定点 | {x: number, y: number} | 指定距离处的点 |
| min | 最小坐标 | {x: number, y: number} | 边界框最小坐标 |
| max | 最大坐标 | {x: number, y: number} | 边界框最大坐标 |


## rotateVector

旋转二维向量，根据给定角度计算向量的新坐标。

- 功能说明

- 将二维向量绕原点旋转
- 使用弧度表示旋转角度
- 基于旋转矩阵计算
- 返回新的坐标点
- 保持向量长度不变

```ts
import { rotateVector } from '@antv/util';

// 基本使用
console.log(rotateVector(1, 0, Math.PI / 2));  // { x: 0, y: 1 }  // 90度
console.log(rotateVector(1, 0, Math.PI));      // { x: -1, y: 0 } // 180度
console.log(rotateVector(0, 1, -Math.PI / 2)); // { x: 1, y: 0 }  // -90度

// 实际应用示例
function createVectorUtil() {
  return {
    // 创建向量旋转器
    createRotator(x: number, y: number) {
      return {
        // 旋转指定角度
        rotate(angle: number) {
          return rotateVector(x, y, angle);
        },
        
        // 获取多个角度的点
        getPoints(angles: number[]) {
          return angles.map(angle => this.rotate(angle));
        },
        
        // 创建均匀分布的点
        createEvenPoints(count: number) {
          const step = (Math.PI * 2) / count;
          return Array.from({ length: count }, (_, i) => 
            this.rotate(i * step)
          );
        }
      };
    },
    
    // 创建动画旋转器
    createAnimatedRotator(x: number, y: number) {
      return {
        // 创建旋转动画
        animate(duration: number, rounds = 1) {
          const startTime = performance.now();
          const totalAngle = Math.PI * 2 * rounds;
          
          return {
            // 获取当前位置
            getCurrentPosition(currentTime: number) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              return rotateVector(x, y, totalAngle * progress);
            },
            
            // 启动动画
            start(callback: (point: { x: number, y: number }) => void) {
              const update = (time: number) => {
                const position = this.getCurrentPosition(time);
                callback(position);
                
                if (time - startTime < duration) {
                  requestAnimationFrame(update);
                }
              };
              
              requestAnimationFrame(update);
            }
          };
        }
      };
    },
    
    // 创建形状生成器
    createShapeGenerator() {
      return {
        // 生成正多边形的点
        createRegularPolygon(radius: number, sides: number) {
          const rotator = this.createRotator(radius, 0);
          return rotator.createEvenPoints(sides);
        },
        
        // 生成星形的点
        createStar(outerRadius: number, innerRadius: number, points: number) {
          const angleStep = Math.PI / points;
          const allPoints = [];
          
          for (let i = 0; i < points * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = i * angleStep;
            allPoints.push(rotateVector(radius, 0, angle));
          }
          
          return allPoints;
        }
      };
    }
  };
}

// 使用示例
const vectorUtil = createVectorUtil();

// 基本旋转
const rotator = vectorUtil.createRotator(100, 0);
console.log(rotator.rotate(Math.PI / 4));  // 45度旋转

// 创建均匀分布的点
console.log(rotator.createEvenPoints(6));  // 六边形的顶点

// 动画旋转
const animator = vectorUtil.createAnimatedRotator(100, 0);
const animation = animator.animate(1000, 2);  // 1秒转2圈
animation.start(point => {
  console.log('Current position:', point);
});

// 生成形状
const shapeGenerator = vectorUtil.createShapeGenerator();
console.log(shapeGenerator.createRegularPolygon(100, 5));  // 正五边形
console.log(shapeGenerator.createStar(100, 50, 5));        // 五角星
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| x | x坐标 | number | - | 向量的x坐标 |
| y | y坐标 | number | - | 向量的y坐标 |
| rad | 旋转角度 | number | - | 旋转的弧度值 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 旋转结果 | {x: number, y: number} | - | 旋转后的坐标点 |


## segmentArcFactory

计算弧线段的长度、指定距离的点位置和边界框。

- 功能说明

- 计算弧线段的总长度
- 获取弧线上指定距离的点
- 计算弧线的边界框
- 支持椭圆弧参数
- 提供采样点精度控制

```ts
import { segmentArcFactory } from '@antv/util';

// 基本使用
const arcInfo = segmentArcFactory(
  0, 0,           // 起点
  100, 50,        // 半径
  45,             // 旋转角度
  0,              // 大弧标志
  1,              // 顺时针标志
  100, 100,       // 终点
  0,              // 距离
  { sampleSize: 30 }  // 配置选项
);

console.log(arcInfo);
// {
//   length: 数值,     // 弧线长度
//   point: {x, y},    // 指定距离的点
//   min: {x, y},      // 最小坐标
//   max: {x, y}       // 最大坐标
// }

// 实际应用示例
function createArcUtil() {
  return {
    // 创建弧线分析器
    createArcAnalyzer(
      start: [number, number],
      radii: [number, number],
      angle: number,
      flags: [number, number],
      end: [number, number]
    ) {
      return {
        // 获取弧线信息
        getInfo(options = {}) {
          return segmentArcFactory(
            ...start,
            ...radii,
            angle,
            ...flags,
            ...end,
            0,
            options
          );
        },
        
        // 获取采样点
        getSamplePoints(count: number) {
          const { length } = this.getInfo();
          const step = length / (count - 1);
          
          return Array.from({ length: count }, (_, i) => 
            segmentArcFactory(
              ...start,
              ...radii,
              angle,
              ...flags,
              ...end,
              i * step,
              { sampleSize: count }
            ).point
          );
        },
        
        // 创建动画控制器
        createAnimationController(duration: number) {
          const { length } = this.getInfo();
          
          return {
            // 获取当前位置
            getPosition(time: number) {
              const progress = Math.min(time / duration, 1);
              return segmentArcFactory(
                ...start,
                ...radii,
                angle,
                ...flags,
                ...end,
                length * progress,
                { sampleSize: 60 }
              ).point;
            },
            
            // 启动动画
            animate(callback: (point: { x: number, y: number }) => void) {
              const startTime = performance.now();
              
              const update = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const point = this.getPosition(elapsed);
                callback(point);
                
                if (elapsed < duration) {
                  requestAnimationFrame(update);
                }
              };
              
              requestAnimationFrame(update);
            }
          };
        }
      };
    }
  };
}

// 使用示例
const arcUtil = createArcUtil();

// 创建弧线分析器
const analyzer = arcUtil.createArcAnalyzer(
  [0, 0],     // 起点
  [100, 50],  // 半径
  45,         // 角度
  [0, 1],     // 标志
  [100, 100]  // 终点
);

// 获取弧线信息
console.log(analyzer.getInfo());

// 获取采样点
console.log(analyzer.getSamplePoints(10));

// 创建动画
const animation = analyzer.createAnimationController(1000);
animation.animate(point => {
  console.log('Current position:', point);
});
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| X1, Y1 | 起点坐标 | number | - | 弧线起点 |
| RX, RY | 半径 | number | - | 椭圆半径 |
| angle | 旋转角度 | number | - | 椭圆旋转角度 |
| LAF | 大弧标志 | number | - | 是否选择大弧 |
| SF | 方向标志 | number | - | 是否顺时针 |
| X2, Y2 | 终点坐标 | number | - | 弧线终点 |
| distance | 距离 | number | - | 指定距离 |
| options | 配置选项 | Partial<PathLengthFactoryOptions> | - | 配置参数 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 计算结果 | LengthFactory | - | 包含长度和边界信息的对象 |

- 配置选项

| 选项 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| bbox | 是否计算边界框 | boolean | true | 是否计算边界框 |
| length | 是否计算长度 | boolean | true | 是否计算长度 |
| sampleSize | 采样点数量 | number | 30 | 采样精度 |


## segmentCubicFactory

计算三次贝塞尔曲线段的长度、指定距离的点位置和边界框。

- 功能说明

- 计算贝塞尔曲线段的总长度
- 获取曲线上指定距离的点
- 计算曲线的边界框
- 支持采样点精度控制
- 基于贝塞尔曲线公式计算

```ts
import { segmentCubicFactory } from '@antv/util';

// 基本使用
const curveInfo = segmentCubicFactory(
  0, 0,           // 起点
  50, 0,          // 控制点1
  50, 100,        // 控制点2
  100, 100,       // 终点
  0,              // 距离
  { sampleSize: 10 }  // 配置选项
);

console.log(curveInfo);
// {
//   length: 数值,     // 曲线长度
//   point: {x, y},    // 指定距离的点
//   min: {x, y},      // 最小坐标
//   max: {x, y}       // 最大坐标
// }

// 实际应用示例
function createBezierUtil() {
  return {
    // 创建贝塞尔曲线分析器
    createCurveAnalyzer(
      start: [number, number],
      cp1: [number, number],
      cp2: [number, number],
      end: [number, number]
    ) {
      return {
        // 获取曲线信息
        getInfo(options = {}) {
          return segmentCubicFactory(
            ...start,
            ...cp1,
            ...cp2,
            ...end,
            0,
            options
          );
        },
        
        // 获取采样点
        getSamplePoints(count: number) {
          const { length } = this.getInfo();
          const step = length / (count - 1);
          
          return Array.from({ length: count }, (_, i) => 
            segmentCubicFactory(
              ...start,
              ...cp1,
              ...cp2,
              ...end,
              i * step,
              { sampleSize: count }
            ).point
          );
        },
        
        // 创建动画控制器
        createAnimationController(duration: number) {
          const { length } = this.getInfo();
          
          return {
            // 获取当前位置
            getPosition(time: number) {
              const progress = Math.min(time / duration, 1);
              return segmentCubicFactory(
                ...start,
                ...cp1,
                ...cp2,
                ...end,
                length * progress,
                { sampleSize: 30 }
              ).point;
            },
            
            // 创建动画
            animate(callback: (point: { x: number, y: number }) => void) {
              const startTime = performance.now();
              
              const update = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const point = this.getPosition(elapsed);
                callback(point);
                
                if (elapsed < duration) {
                  requestAnimationFrame(update);
                }
              };
              
              requestAnimationFrame(update);
            }
          };
        }
      };
    },
    
    // 创建路径生成器
    createPathGenerator() {
      return {
        // 生成平滑曲线路径
        createSmoothPath(points: [number, number][], tension = 0.5) {
          const result = [];
          
          for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[Math.max(0, i - 1)];
            const p1 = points[i];
            const p2 = points[i + 1];
            const p3 = points[Math.min(points.length - 1, i + 2)];
            
            const cp1 = [
              p1[0] + (p2[0] - p0[0]) * tension,
              p1[1] + (p2[1] - p0[1]) * tension
            ];
            
            const cp2 = [
              p2[0] - (p3[0] - p1[0]) * tension,
              p2[1] - (p3[1] - p1[1]) * tension
            ];
            
            result.push([p1, cp1, cp2, p2]);
          }
          
          return result;
        }
      };
    }
  };
}

// 使用示例
const bezierUtil = createBezierUtil();

// 创建曲线分析器
const analyzer = bezierUtil.createCurveAnalyzer(
  [0, 0],     // 起点
  [50, 0],    // 控制点1
  [50, 100],  // 控制点2
  [100, 100]  // 终点
);

// 获取曲线信息
console.log(analyzer.getInfo());

// 获取采样点
console.log(analyzer.getSamplePoints(10));

// 创建动画
const animation = analyzer.createAnimationController(1000);
animation.animate(point => {
  console.log('Current position:', point);
});
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| x1, y1 | 起点坐标 | number | - | 曲线起点 |
| c1x, c1y | 控制点1 | number | - | 第一控制点 |
| c2x, c2y | 控制点2 | number | - | 第二控制点 |
| x2, y2 | 终点坐标 | number | - | 曲线终点 |
| distance | 距离 | number | - | 指定距离 |
| options | 配置选项 | Partial<PathLengthFactoryOptions> | - | 配置参数 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 计算结果 | LengthFactory | - | 包含长度和边界信息的对象 |

- 配置选项

| 选项 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| bbox | 是否计算边界框 | boolean | true | 是否计算边界框 |
| length | 是否计算长度 | boolean | true | 是否计算长度 |
| sampleSize | 采样点数量 | number | 10 | 采样精度 |


## segmentLineFactory

计算直线段的长度、指定距离的点位置和边界框。

- 功能说明

- 计算直线段的总长度
- 获取线段上指定距离的点
- 计算线段的边界框
- 支持垂直线和水平线
- 处理闭合路径（Z命令）

```ts
import { segmentLineFactory } from '@antv/util';

// 基本使用
const lineInfo = segmentLineFactory(
  0, 0,    // 起点
  100, 100, // 终点
  50       // 距离
);

console.log(lineInfo);
// {
//   length: 141.42,  // 线段长度
//   point: { x: 50, y: 50 },  // 指定距离的点
//   min: { x: 0, y: 0 },      // 最小坐标
//   max: { x: 100, y: 100 }   // 最大坐标
// }

// 实际应用示例
function createLineUtil() {
  return {
    // 创建线段分析器
    createLineAnalyzer(start: [number, number], end: [number, number]) {
      return {
        // 获取线段信息
        getInfo(distance?: number) {
          return segmentLineFactory(
            ...start,
            ...end,
            distance || 0
          );
        },
        
        // 获取等分点
        getDivisionPoints(divisions: number) {
          const { length } = this.getInfo();
          const step = length / divisions;
          
          return Array.from({ length: divisions + 1 }, (_, i) =>
            segmentLineFactory(...start, ...end, i * step).point
          );
        },
        
        // 检查点是否在线段上
        isPointOnLine(point: [number, number], tolerance = 0.1) {
          const { length } = this.getInfo();
          const d1 = distanceSquareRoot(start, point);
          const d2 = distanceSquareRoot(point, end);
          
          return Math.abs(d1 + d2 - length) <= tolerance;
        }
      };
    },
    
    // 创建动画控制器
    createAnimationController(
      start: [number, number],
      end: [number, number],
      duration: number
    ) {
      const { length } = segmentLineFactory(...start, ...end, 0);
      
      return {
        // 获取当前位置
        getPosition(time: number) {
          const progress = Math.min(time / duration, 1);
          return segmentLineFactory(
            ...start,
            ...end,
            length * progress
          ).point;
        },
        
        // 创建动画
        animate(callback: (point: { x: number, y: number }) => void) {
          const startTime = performance.now();
          
          const update = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const point = this.getPosition(elapsed);
            callback(point);
            
            if (elapsed < duration) {
              requestAnimationFrame(update);
            }
          };
          
          requestAnimationFrame(update);
        }
      };
    },
    
    // 创建网格生成器
    createGridGenerator() {
      return {
        // 生成网格线
        generateGrid(width: number, height: number, cols: number, rows: number) {
          const lines = [];
          const dx = width / cols;
          const dy = height / rows;
          
          // 垂直线
          for (let i = 0; i <= cols; i++) {
            const x = i * dx;
            lines.push(segmentLineFactory(x, 0, x, height, 0));
          }
          
          // 水平线
          for (let i = 0; i <= rows; i++) {
            const y = i * dy;
            lines.push(segmentLineFactory(0, y, width, y, 0));
          }
          
          return lines;
        }
      };
    }
  };
}

// 使用示例
const lineUtil = createLineUtil();

// 创建线段分析器
const analyzer = lineUtil.createLineAnalyzer([0, 0], [100, 100]);
console.log(analyzer.getInfo());
console.log(analyzer.getDivisionPoints(4));
console.log(analyzer.isPointOnLine([50, 50]));

// 创建动画
const animation = lineUtil.createAnimationController(
  [0, 0],
  [100, 100],
  1000
);
animation.animate(point => {
  console.log('Current position:', point);
});

// 生成网格
const gridGenerator = lineUtil.createGridGenerator();
const grid = gridGenerator.generateGrid(200, 200, 4, 4);
console.log(grid);
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| x1, y1 | 起点坐标 | number | - | 线段起点 |
| x2, y2 | 终点坐标 | number | - | 线段终点 |
| distance | 距离 | number | - | 指定距离 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 计算结果 | LengthFactory | - | 包含长度和边界信息的对象 |


## segmentQuadFactory

计算二次贝塞尔曲线段的长度、指定距离的点位置和边界框。

- 功能说明

- 计算二次贝塞尔曲线的总长度
- 获取曲线上指定距离的点
- 计算曲线的边界框
- 支持采样点精度控制
- 基于二次贝塞尔曲线公式计算

```ts
import { segmentQuadFactory } from '@antv/util';

// 基本使用
const curveInfo = segmentQuadFactory(
  0, 0,     // 起点
  50, 50,   // 控制点
  100, 0,   // 终点
  0,        // 距离
  { sampleSize: 10 }  // 配置选项
);

console.log(curveInfo);
// {
//   length: 数值,     // 曲线长度
//   point: {x, y},    // 指定距离的点
//   min: {x, y},      // 最小坐标
//   max: {x, y}       // 最大坐标
// }

// 实际应用示例
function createQuadBezierUtil() {
  return {
    // 创建曲线分析器
    createAnalyzer(
      start: [number, number],
      control: [number, number],
      end: [number, number]
    ) {
      return {
        // 获取曲线信息
        getInfo(options = {}) {
          return segmentQuadFactory(
            ...start,
            ...control,
            ...end,
            0,
            options
          );
        },
        
        // 获取采样点
        getSamplePoints(count: number) {
          const { length } = this.getInfo();
          const step = length / (count - 1);
          
          return Array.from({ length: count }, (_, i) => 
            segmentQuadFactory(
              ...start,
              ...control,
              ...end,
              i * step,
              { sampleSize: count }
            ).point
          );
        },
        
        // 创建动画控制器
        createAnimationController(duration: number) {
          const { length } = this.getInfo();
          
          return {
            // 获取当前位置
            getPosition(time: number) {
              const progress = Math.min(time / duration, 1);
              return segmentQuadFactory(
                ...start,
                ...control,
                ...end,
                length * progress,
                { sampleSize: 30 }
              ).point;
            },
            
            // 创建动画
            animate(callback: (point: { x: number, y: number }) => void) {
              const startTime = performance.now();
              
              const update = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const point = this.getPosition(elapsed);
                callback(point);
                
                if (elapsed < duration) {
                  requestAnimationFrame(update);
                }
              };
              
              requestAnimationFrame(update);
            }
          };
        }
      };
    },
    
    // 创建路径生成器
    createPathGenerator() {
      return {
        // 生成平滑曲线
        createSmoothCurve(points: [number, number][], tension = 0.5) {
          const result = [];
          
          for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i];
            const p1 = points[i + 1];
            const cp = [
              p0[0] + (p1[0] - p0[0]) * tension,
              (p0[1] + p1[1]) / 2
            ];
            
            result.push([p0, cp, p1]);
          }
          
          return result;
        }
      };
    }
  };
}

// 使用示例
const bezierUtil = createQuadBezierUtil();

// 创建分析器
const analyzer = bezierUtil.createAnalyzer(
  [0, 0],     // 起点
  [50, 50],   // 控制点
  [100, 0]    // 终点
);

// 获取曲线信息
console.log(analyzer.getInfo());

// 获取采样点
console.log(analyzer.getSamplePoints(10));

// 创建动画
const animation = analyzer.createAnimationController(1000);
animation.animate(point => {
  console.log('Current position:', point);
});
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| x1, y1 | 起点坐标 | number | - | 曲线起点 |
| qx, qy | 控制点 | number | - | 控制点坐标 |
| x2, y2 | 终点坐标 | number | - | 曲线终点 |
| distance | 距离 | number | - | 指定距离 |
| options | 配置选项 | Partial<PathLengthFactoryOptions> | - | 配置参数 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 计算结果 | LengthFactory | - | 包含长度和边界信息的对象 |

- 配置选项

| 选项 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| bbox | 是否计算边界框 | boolean | true | 是否计算边界框 |
| length | 是否计算长度 | boolean | true | 是否计算长度 |
| sampleSize | 采样点数量 | number | 10 | 采样精度 |


## path2Absolute

将路径数组或路径字符串转换为绝对坐标路径数组。

- 功能说明

- 将相对路径命令转换为绝对路径命令
- 支持所有 SVG 路径命令（M, L, H, V, C, S, Q, T, A, Z）
- 保持路径的形状不变
- 跟踪当前绘制点的位置
- 处理闭合路径命令（Z）

```ts
import { path2Absolute } from '@antv/util';

// 基本路径转换
const relativePath = 'm10,20 l30,40';
console.log(path2Absolute(relativePath));
// [['M', 10, 20], ['L', 40, 60]]

// 复杂路径转换
const complexPath = 'M10 10 h 80 v 80 h -80 Z';
console.log(path2Absolute(complexPath));
// [
//   ['M', 10, 10],
//   ['H', 90],
//   ['V', 90],
//   ['H', 10],
//   ['Z']
// ]

// 曲线路径转换
const curvePath = 'm10,10 c10,20 30,40 50,60';
console.log(path2Absolute(curvePath));
// [
//   ['M', 10, 10],
//   ['C', 20, 30, 40, 50, 60, 70]
// ]

// 实际应用示例
function normalizePath(pathString: string) {
  const absolutePath = path2Absolute(pathString);
  return absolutePath.map(segment => {
    const [command, ...params] = segment;
    return `${command}${params.join(',')}`;
  }).join(' ');
}

// 使用示例
const path = 'm10,20 l30,40 h50 z';
console.log(normalizePath(path));
// "M10,20 L40,60 H90 Z"
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathInput | 路径输入 | string \| PathArray | - | SVG路径字符串或路径数组 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 绝对路径数组 | AbsoluteArray | - | 转换后的绝对坐标路径数组 |

- 支持的路径命令

| 命令 | 说明 | 相对命令 | 绝对命令 |
|---------|------|------|---------|
| M/m | 移动到 | m | M |
| L/l | 画线到 | l | L |
| H/h | 水平线到 | h | H |
| V/v | 垂直线到 | v | V |
| C/c | 三次贝塞尔曲线 | c | C |
| S/s | 平滑三次贝塞尔曲线 | s | S |
| Q/q | 二次贝塞尔曲线 | q | Q |
| T/t | 平滑二次贝塞尔曲线 | t | T |
| A/a | 弧线 | a | A |
| Z/z | 闭合路径 | z | Z |

- 注意事项

1. 输入可以是字符串或路径数组
2. 所有数值会被转换为数字类型
3. 保持原始路径的形状不变
4. 跟踪当前点位置以计算绝对坐标
5. 处理路径闭合时返回到起始点


## path2Array

将 SVG 路径字符串转换为标准的路径数组格式。

- 功能说明

- 将 SVG 路径字符串解析为数组格式
- 使用 parsePathString 进行解析
- 返回标准化的路径数组
- 便于路径数据的处理和操作
- 类型安全的转换

```ts
import { path2Array } from '@antv/util';

// 基本路径转换
console.log(path2Array('M10 10L20 20'));
// [['M', 10, 10], ['L', 20, 20]]

// 复杂路径转换
console.log(path2Array('M10,10 L20,20 H30 V40 Z'));
// [
//   ['M', 10, 10],
//   ['L', 20, 20],
//   ['H', 30],
//   ['V', 40],
//   ['Z']
// ]

// 曲线命令转换
console.log(path2Array('M0,0 C10,10 20,10 30,0'));
// [
//   ['M', 0, 0],
//   ['C', 10, 10, 20, 10, 30, 0]
// ]

// 实际应用示例
function analyzePath(pathString: string) {
  const segments = path2Array(pathString);
  
  return {
    startPoint: segments.find(seg => seg[0] === 'M')?.slice(1),
    lines: segments.filter(seg => seg[0] === 'L'),
    curves: segments.filter(seg => ['C', 'S', 'Q', 'T'].includes(seg[0])),
    closed: segments.some(seg => seg[0] === 'Z')
  };
}

// 使用示例
const pathAnalysis = analyzePath('M10,10 L20,20 C30,30 40,40 50,50 Z');
console.log(pathAnalysis);
// {
//   startPoint: [10, 10],
//   lines: [['L', 20, 20]],
//   curves: [['C', 30, 30, 40, 40, 50, 50]],
//   closed: true
// }

// 路径变换示例
function translatePath(pathString: string, dx: number, dy: number) {
  return path2Array(pathString).map(segment => {
    const [command, ...params] = segment;
    if (command === 'H') {
      return [command, params[0] + dx];
    }
    if (command === 'V') {
      return [command, params[0] + dy];
    }
    return [
      command,
      ...params.map((p, i) => p + (i % 2 ? dy : dx))
    ];
  });
}

// 平移路径
console.log(translatePath('M10,10 L20,20', 5, 10));
// [['M', 15, 20], ['L', 25, 30]]
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathInput | SVG路径字符串 | string | - | 需要转换的SVG路径字符串 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 路径数组 | PathArray | - | 转换后的标准路径数组 |

- 路径数组格式

```typescript
type PathArray = [string, ...number[]][];
```

每个数组元素的格式：
- 第一个元素是命令字符串
- 后续元素是该命令的参数值

- 注意事项

1. 输入必须是有效的SVG路径字符串
2. 返回类型安全的路径数组
3. 保持原始路径的完整性
4. 支持所有标准SVG路径命令
5. 便于后续处理和转换


## path2Curve

将 SVG 路径转换为三次贝塞尔曲线路径。

- 功能说明

- 将各种路径命令转换为三次贝塞尔曲线（C命令）
- 保持路径的形状不变
- 支持记录闭合路径（Z命令）的位置
- 处理弧线命令的特殊情况
- 维护曲线的连续性

```ts
import { path2Curve } from '@antv/util';

// 基本路径转换
console.log(path2Curve('M10 10L20 20'));
// [
//   ['M', 10, 10],
//   ['C', 10, 10, 20, 20, 20, 20]
// ]

// 复杂路径转换
const arcPath = 'M0,0 A50,50 0 0,1 50,50';
console.log(path2Curve(arcPath));
// [
//   ['M', 0, 0],
//   ['C', 27.614, 0, 50, 22.386, 50, 50]
// ]

// 带闭合路径的转换
const result = path2Curve('M0,0 L50,0 L50,50 Z', true);
if (Array.isArray(result)) {
  const [curves, zIndexes] = result;
  console.log(curves);
  // [
  //   ['M', 0, 0],
  //   ['C', 0, 0, 50, 0, 50, 0],
  //   ['C', 50, 0, 50, 50, 50, 50],
  //   ['Z']
  // ]
  console.log(zIndexes);  // [3]
}

// 实际应用示例
function createAnimatedPath(pathString: string) {
  const curves = path2Curve(pathString) as CurveArray;
  
  return {
    curves,
    getPointAt(t: number) {
      // 简单的点插值示例
      if (t <= 0) return curves[0].slice(-2);
      if (t >= 1) return curves[curves.length - 1].slice(-2);
      
      const segmentIndex = Math.floor(t * (curves.length - 1));
      const segment = curves[segmentIndex];
      const localT = (t * (curves.length - 1)) % 1;
      
      // 贝塞尔曲线插值计算
      return getBezierPoint(segment.slice(1), localT);
    }
  };
}

// 使用示例
const animator = createAnimatedPath('M0,0 L100,0 L100,100');
console.log(animator.getPointAt(0));    // [0, 0]
console.log(animator.getPointAt(0.5));  // [100, 0]
console.log(animator.getPointAt(1));    // [100, 100]

// 辅助函数：计算贝塞尔曲线上的点
function getBezierPoint(points: number[], t: number) {
  const [x1, y1, x2, y2, x3, y3, x4, y4] = points;
  const t1 = 1 - t;
  
  return [
    t1 * t1 * t1 * x1 + 3 * t1 * t1 * t * x2 + 3 * t1 * t * t * x3 + t * t * t * x4,
    t1 * t1 * t1 * y1 + 3 * t1 * t1 * t * y2 + 3 * t1 * t * t * y3 + t * t * t * y4
  ];
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| pathInput | 路径输入 | string \| PathArray | - | SVG路径字符串或路径数组 |
| needZCommandIndexes | 是否需要Z命令索引 | boolean | false | 是否返回闭合路径命令的位置 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 转换结果 | CurveArray \| [CurveArray, number[]] | - | 曲线数组或带Z命令索引的元组 |

- 注意事项

1. 所有路径段都转换为C命令
2. 保持路径的视觉效果不变
3. 维护曲线的连续性
4. 可选择保留Z命令位置
5. 支持弧线命令的转换


## path2String

将路径数组转换为 SVG 路径字符串，支持数值精度控制。

- 功能说明

- 将路径数组转换为 SVG 路径字符串
- 支持数值精度的四舍五入
- 生成标准的 SVG path 'd' 属性值
- 连接所有路径段
- 优化输出格式

```ts
import { path2String } from '@antv/util';

// 基本路径转换
const path1 = [
  ['M', 10, 10],
  ['L', 20, 20],
  ['Z']
];
console.log(path2String(path1));  // "M10 10L20 20Z"

// 带精度控制的转换
const path2 = [
  ['M', 10.123, 10.456],
  ['L', 20.789, 20.987]
];
console.log(path2String(path2, 2));  // "M10.12 10.46L20.79 20.99"

// 曲线路径转换
const path3 = [
  ['M', 0, 0],
  ['C', 10, 10, 20, 20, 30, 30]
];
console.log(path2String(path3));  // "M0 0C10 10 20 20 30 30"

// 实际应用示例
function createSVGPath(points: number[][], closed = false, precision = 2) {
  const pathArray = [
    ['M', points[0][0], points[0][1]],
    ...points.slice(1).map(point => ['L', point[0], point[1]])
  ];
  
  if (closed) {
    pathArray.push(['Z']);
  }
  
  return path2String(pathArray, precision);
}

// 使用示例
const points = [
  [10.123, 20.456],
  [30.789, 40.987],
  [50.432, 60.765]
];

console.log(createSVGPath(points));
// "M10.12 20.46L30.79 40.99L50.43 60.77"

console.log(createSVGPath(points, true));
// "M10.12 20.46L30.79 40.99L50.43 60.77Z"

// SVG元素创建示例
function createSVGElement(pathData: PathArray, precision = 2) {
  const svgNS = "http://www.w3.org/2000/svg";
  const path = document.createElementNS(svgNS, "path");
  path.setAttribute("d", path2String(pathData, precision));
  return path;
}

// 动态路径更新示例
function animatePath(pathElement: SVGPathElement, newPath: PathArray) {
  const currentPath = pathElement.getAttribute("d");
  pathElement.setAttribute("d", path2String(newPath));
}
```

- 参数说明

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| path | 路径数组 | PathArray | - | 要转换的路径数组 |
| round | 精度控制 | number \| 'off' | 'off' | 数值精度（小数位数）或关闭四舍五入 |

- 返回值

| 参数 | 说明 | 类型 | 默认值 | 中文说明 |
|---------|------|------|---------|----------|
| result | 路径字符串 | string | - | SVG路径字符串（d属性值） |

- 注意事项

1. 输入必须是有效的路径数组
2. 精度控制影响所有数值
3. 'off' 表示不进行四舍五入
4. 生成的字符串符合SVG标准
5. 命令和参数之间使用空格分隔


## 常量

```ts
// SVG 路径命令的参数数量常量对象
const paramsCount = {
  a: 7,
  c: 6,
  h: 1,
  l: 2,
  m: 2,
  r: 4,
  q: 4,
  s: 4,
  t: 2,
  v: 1,
  z: 0,
};

// 路径参数解析器的初始状态对象
const paramsParser = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  x: 0,
  y: 0,
  qx: null,
  qy: null,
}
```