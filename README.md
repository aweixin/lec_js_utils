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

### getOS

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

### getScrollTop

#### 获取窗口滚轴距离顶部的距离

```typescript
function getScrollTop(): void;
```

```javascript
getScrollTop();
```

### offset

#### 获取元素参数的 offsetTop 与 offsetLeft

```typescript
function offset(element: HTMLElement): { left: number; top: number };
```

```javascript
offset(document.getElementById("app"));
```

### scrollTo

#### 将当前 window 的滚轴，在某短时间内（ms），纵向滚动到某个位置

```typescript
function scrollTo(to: number, duration: number): void;
```

### setScrollTop

#### 设置滚动条距顶部的距离

```typescript
function setScrollTop(value: number): void;
```

```javascript
offset(document.getElementById("app"));
```

### setScrollTop

#### 设置滚动条距顶部的距离

```typescript
function setScrollTop(value: number): void;
```

### windowResize

#### H5 软键盘缩回、弹起回调

- downCallback: 键盘收起时候的回调
- upCallback: 键盘弹出时候的回调

```typescript
function windowResize(downCallback: Function, upCallback: Function): void;
```

```javascript
windowResize(
  () => console.log("down"),
  () => console.log("up")
);
```

### commaify

#### 给数字中间每 3 位加逗号

```typescript
function commaify(param: string | number): string;
```

```javascript
commaify(1000000); // 10,000,000
```

### filterCard

#### 身份证中间生日日期做掩码

```typescript
function filterCard(param: string | number): string;
```

```javascript
utils.filterCard("410987100018420987") === "4109871000****0987"; // true
```

### filterPhone

#### 电话号码中间四位做掩码

```typescript
function filterPhone(param: string | number): string;
```

```javascript
utils.filterPhone("10801229300") === "108****9300"; // true
```

### debounce

#### 防抖函数-高频触发的事件，如：按钮点击多次，只执行最后一次

- handler: 处理函数
- delay: 时间段，表示 多长时间后执行这一次函数

```typescript
function debounce(handler: Function, delay: number): Function;
```

```javascript
const b = debounce(() => {
  console.log("debounce");
}, 1000);

window.onresize = function () {
  b();
};
```

### throttle

#### 节流，事件在一段时间内按一定频率执行，多用于 resize,input 框输入

- handler: 处理函数
- delay: 执行频率 次/ms

```typescript
function throttle(handler: Function, delay: number): Function;
```

```javascript
let num = 0;
const a = throttle(() => {
  num++;
  console.log("throttle", num);
}, 1000);
```
