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
* rgb2arr
* gradient
* toRGB

