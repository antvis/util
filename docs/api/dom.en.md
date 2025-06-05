# dom（元素）

**[返回◀️](../../README.zh-CN.md)**

## 📒 工具方法

### 方法列表

- [createDOM](#createdom) - 从 HTML 字符串创建 DOM 元素。
- [modifyCSS](#modifycss) - 修改 DOM 元素的 CSS 样式。

### createDOM

从 HTML 字符串创建 DOM 元素。

#### 示例

```ts
import { createDOM } from '@antv/util';

// 创建简单元素
const div = createDOM('<div>Hello World</div>');
console.log(div.tagName);  // "DIV"
console.log(div.innerHTML);  // "Hello World"

// 创建带属性的元素
const button = createDOM('<button class="btn" id="myBtn">Click Me</button>');
console.log(button.className);  // "btn"
console.log(button.id);  // "myBtn"

// 创建带嵌套结构的元素
const complex = createDOM(`
  <div class="container">
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
`);
console.log(complex.children.length);  // 2

// 创建带样式的元素
const styledDiv = createDOM(`
  <div style="color: red; padding: 10px;">
    Styled Content
  </div>
`);
console.log(styledDiv.style.color);  // "red"

// 实际应用示例
function createTooltip(content: string) {
  return createDOM(`
    <div class="tooltip">
      <div class="tooltip-content">${content}</div>
      <div class="tooltip-arrow"></div>
    </div>
  `);
}
```

#### 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| str | HTML字符串 | string | - |

#### 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| element | DOM元素 | HTMLElement | - |

<hr>

### modifyCSS

修改 DOM 元素的 CSS 样式。

#### 示例

```ts
import { modifyCSS } from '@antv/util';

// 基本样式修改
const div = document.createElement('div');
modifyCSS(div, {
  width: '100px',
  height: '100px',
  backgroundColor: 'red'
});

// 使用数值（自动添加单位）
modifyCSS(div, {
  padding: 10,        // "10px"
  margin: '20',       // "20px"
  fontSize: 16        // "16px"
});

// 多个样式组合
modifyCSS(div, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
});

// 链式调用
const element = modifyCSS(div, {
  display: 'flex',
  justifyContent: 'center'
}).querySelector('.child');

// 实际应用示例
function createTooltip(content: string) {
  const tooltip = document.createElement('div');
  return modifyCSS(tooltip, {
    position: 'absolute',
    padding: '8px',
    backgroundColor: 'rgba(0,0,0,0.75)',
    color: 'white',
    borderRadius: '4px',
    fontSize: '12px',
    pointerEvents: 'none'
  });
}

// 条件样式修改
function updateElementStyle(element: HTMLElement, isActive: boolean) {
  modifyCSS(element, {
    backgroundColor: isActive ? '#007bff' : '#6c757d',
    color: isActive ? 'white' : '#333',
    cursor: isActive ? 'pointer' : 'default'
  });
}
```

#### 参数说明

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| dom | DOM元素 | HTMLElement \| null \| undefined | - |
| css | CSS样式对象 | { [key: string]: any } | - |

#### 返回值

| 参数 | 说明 | 类型 | 默认值 |
|---------|------|------|---------|
| element | DOM元素 | HTMLElement | - |
