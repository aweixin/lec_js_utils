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

### addClass

#### 给元素添加 className

```typescript
function addClass(ele: HTMLElement, className: string): void;
```

```javascript
addClass(document.getElementById("app"), "className");
```

### hasClass

#### 元素如果有 className,则返回 true,否则返回 false

```typescript
function hasClass(ele: HTMLElement, className: string): boolean;
```

```javascript
hasClass(document.getElementById("app"), "className"); // true
```

### removeClass

#### 给元素移除 className

```typescript
function removeClass(ele: HTMLElement, className: string): boolean;
```

```javascript
removeClass(document.getElementById("app"), "className"); // true
```

### getCookie

#### 获取 cookie 中的某个字段

```typescript
function getCookie(name: string): string;
```

```javascript
getCookie("id");
```

### getExplore

#### 获取浏览器的版本，浏览器类型

```typescript
enum BrowserType {
  IE = "IE",
  EDGE = "EDGE",
  Firefox = "Firefox",
  Chrome = "Chrome",
  Opera = "Opera",
  Safari = "Safari",
  NOT_FUND = "not fund",
}
interface getExploreData {
  browser: BrowserType;
  version: string;
}
function getExplore(): getExploreData;
```

```javascript
getExplore(); // {browser: "Chrome"version: "90.0.4430.93"}
```

### getExplore

#### 获取当前系统，ios, android, macos, windows 等

```typescript
enum OsType {
  ios = "ios",
  android = "android",
  windowsPhone = "windowsPhone",
  MacOSX = "MacOSX",
  windows = "windows",
  linux = "linux",
}
function getOS(): OsType;
```

```javascript
getOS(); // MacOSX
```
