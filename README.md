# lec_js_utils

一个 JS 工具库

## 使用方式

```shell
npm install lec_js_utils
```

```javascript
// es6模块系统
import { onHashChange } from "lec_js_utils";
onHashChange(() => console.log("onHashChange"));

// 浏览器

// 引入
<script src="lec_js_utils.min.js"></script>;
// 使用
utils.onHashChange(() => console.log("HashChange"));
```

## utils

### arrayEqual

#### 参与比较的两个数组，如果每个元素都相等，返回 true,否则返回 false

```typescript
function arrayEqual(arr1: Array<any>, arr2: Array<any>): boolean;
```

```javascript
console.log(arrayEqual([1, 2], [1, 2])); // true
```
