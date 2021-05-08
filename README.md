# lec_js_utils

一个 JS 工具库

## 使用方式

```shell
npm install lec_js_utils
```

```javascript
// es6
import { onHashChange } from "lec_js_utils";
onHashChange(() => console.log("onHashChange"));

// 浏览器

// 引入
<script src="lec_js_utils.min.js"></script>;
// 使用
utils.onHashChange(() => console.log("HashChange"));
```

