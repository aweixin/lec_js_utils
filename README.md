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

### locateByBaidu

#### 利用百度地图获取当前定位，返回当前定位的经纬度

```typescript
type locationType = {
  lng: string;
  lat: string;
};
export function locateByBaidu(ak: string): locationType;
```

```javascript
locateByBaidu(your ak)
```

### locationByNavigator

#### H5 navigator 定位方式,返回经纬度

- timeout 超时时间

```typescript
type locationType = {
  lng: string;
  lat: string;
};
export function locationByNavigator(timeout: string | number): locationType;
```

```javascript
locationByNavigator(5000);
```

### jsonp

#### jsonp 方式实现 get 跨域，可用于获取地图等接口数据

```typescript
function jsonp(url: string, timeout: number): Promise;
```

```javascript
jsonp(
  "api.map.baidu.com/location/ip?ak=${your.ak}&coor=bd09ll&output=jsonp"
).then((res) => res);
```

### utf8_to_b64

#### 将代入参数使用 base64 编码并且返回

```typescript
function utf8_to_b64(str: string): string;
```

```javascript
console.log(utf8_to_b64("移植")); // 56e75qSN"
```

### b64_to_utf8

#### 将使用同样规则编码的字符串使用逆规则解码

```typescript
function b64_to_utf8(str: string): string;
```

```javascript
console.log(b64_to_utf8("56e75qSN")); // 移植
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

### isInWeiXin

#### 判断是否在微信环境

```typescript
function isInWeiXin(): boolean;
```

```javascript
utils.isInWeiXin(); // chrom 返回 false
```

### getScrollTop

#### 获取窗口滚轴距离顶部的距离

```typescript
function getScrollTop(): void;
```

```javascript
getScrollTop();
```

### copyMsg

#### 将浏览器中输入框的内容写入剪切板--仅支持 input 和 textArea

```typescript
function copyMsg(el: HTMLElement, callback: Function): void;
```

```html
<input id="app" value="123" />
```

```javascript
var app = document.getElementById("app");
copyMsg(app, () => console.log("success")); // 授权剪切板权限之后即可粘贴内容
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
setScrollTop(100);
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

### once

#### 只执行一次的函数

- handler: 处理函数

```typescript
function once(handler: Function): Function;
```

```javascript
let a = once(() => console.log("aa"));
setInterval(() => {
  a();
}, 1);
```

### getSize

#### 设置 H5 根元素的 font-size

- 用于 rem 布局
- 设计稿宽度 750 物理像素
- dpr = 2(iphone6/7/8 下开发视图)

```typescript
function getSize(base: number): void;
```

```javascript
utils.getSize(40); // iphone6 下 根元素 font-size 为20 px
```

### deepClone

#### 深拷贝对象

```typescript
function deepClone(values: any): any;
```

```javascript
const obj = { a: 1 };
const o = utils.deepClone(obj);

o.a = 2;
```

### isEmptyObject

#### 判断一个对象是否没有一个属性

```typescript
function deepClone(values: any): any;
```

```javascript
const obj = { a: 1 };
const o = utils.deepClone(obj);

o.a = 2;
```

### getTypeof

#### 准确的判断对象的类型

```typescript
function getTypeof(object: any): string;
```

```javascript
utils.getTypeof(new Map([])); // map
```

### isInt

#### 判断是不是一个正整数

```typescript
function isInt(str: string | number): boolean;
```

```javascript
utils.isInt(0); // false
```

### isSpecialCode

#### 判断含不含有特殊字符

```typescript
function isSpecialCode(str: string | number): boolean;
```

```javascript
utils.isSpecialCode("埃美柯.-"); // true
```

### session

#### window.localStoreage 方法封装

- 没有第二个参数时为存储
- 有第二个参数时为读取，没获取到则返回空字符串''

```typescript
function session(key: string, value?: any): any;
```

```javascript
session("name", "小红"); // true
```

### monthDays

#### 获取代入的时间对象的参数，当前月总共多少天

- 参数为一个时间对象

```typescript
function monthDays(date: Date): number;
```

```javascript
monthDays(new Date("2020/2/11")); // 29
```
