
declare namespace utils {
  /**
   * 
   * @desc 判断两个数组是否相等
   * @param {Array} arr1 
   * @param {Array} arr2 
   * @return {Boolean}
   */
  export function arrayEqual(arr1: Array<any>, arr2: Array<any>): boolean
  
  /**
   * 
   * @desc   为元素添加class
   * @param  {HTMLElement} ele 
   * @param  {String} cls 
   */
  export function addClass(ele: HTMLElement, cls: string): void
  export function utf8_to_b64 (str: string): string
  export function b64_to_utf8 (str: string): string
  /**
   * 
   * @desc 判断元素是否有某个class
   * @param {HTMLElement} ele 
   * @param {String} cls 
   * @return {Boolean}
   */
  export function hasClass(ele: HTMLElement, cls: string): boolean
 
  /**
   * 
   * @desc 为元素移除class
   * @param {HTMLElement} ele 
   * @param {String} cls 
   */
  export function removeClass(ele: HTMLElement, cls: string): boolean
  
  /**
   * 
   * @desc 根据name读取cookie
   * @param  {String} name 
   * @return {String}
   */
  export function getCookie(name: string): string


  /**
   * 
   * @desc 获取浏览器类型和版本
   * @return {String} 
   */
   enum BrowserType {
    IE="IE",
    EDGE="EDGE",
    Firefox="Firefox",
    Chrome="Chrome",
    Opera="Opera",
    Safari="Safari",
    NOT_FUND="not fund"
   }
  interface getExploreData {
    browser: BrowserType;
    version: string;
  }
  export function getExplore(): getExploreData
 
  /**
   * 
   * @desc 获取操作系统类型
   * @return {String} 
   */
   enum OsType {
    ios = "ios",
    android = "android",
    windowsPhone = "windowsPhone",
    MacOSX = "MacOSX",
    windows = "windows",
    linux = "linux"
  }
  export function getOS(): OsType
  export function jsonp(url: string, timeout: number): Promise
  /**
   * 
   * @desc 获取滚动条距顶部的距离
   */
  export function getScrollTop(): void

  export function copyMsg(el: HTMLElement, callback: Function): void
  /**
   * 
   * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
   * @param {HTMLElement} ele 
   * @returns { {left: number, top: number} }
   */
  export function offset(ele: HTMLElement): { left: number, top: number }
  
  /**
   * 
   * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
   * @param {Number} to 
   * @param {Number} duration 
   */
  export function scrollTo(to: number, duration: number): void

  /**
   * 
   * @desc 设置滚动条距顶部的距离
   * @param {Number} value
   */
  export function setScrollTop(value: number): void

  /**
   * 
   * @desc H5软键盘缩回、弹起回调
   * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
   * @param {Function} downCb 当软键盘弹起后，缩回的回调
   * @param {Function} upCb 当软键盘弹起的回调
   */
  export function windowResize(downCb: () => void, upCb: () => void): void


  export function debounce(handler: Function, delay: number): Function
  
  export function throttle(handler: Function, delay: number): Function

  // H5 中设置根元素 font-size
  export function getSize(base: number): void
  // 当前环境是否在微信浏览器环境
  export function isInWeiXin(): boolean

  export function once(handler: Function): Function
  /**
   * @desc 深拷贝，支持常见类型
   * @param {Any} values
   * @return {Any}
   */
  export function deepClone(values: any): any
  export function getTypeof(object: any): string
  /**
   * 
   * @desc   判断`obj`是否为空
   * @param  {Object} obj
   * @return {Boolean}
   */
  export function isEmptyObject(obj: object): boolean

  /**
   * 
   * @desc 随机生成颜色
   * @return {String} 
   */
  export function randomColor(): string

  /**
   * 
   * @desc 生成指定范围[min, max]的随机数
   * @param  {Number} min 
   * @param  {Number} max 
   * @return {Number} 
   */
  export function randomNum(min: number, max: number): number

  /**
   * 
   * @desc 判断是否为16进制颜色，rgb 或 rgba
   * @param  {String}  str
   * @return {Boolean} 
   */
  export function isColor(str: string): boolean
 
  /**
   * 
   * @desc   判断是否为邮箱地址
   * @param  {String}  str
   * @return {Boolean} 
   */
  export function isEmail(str: string): boolean
 
  /**
   * 
   * @desc  判断是否为身份证号
   * @param  {String|Number} str 
   * @return {Boolean}
   */
  export function isIdCard(str: string | number): boolean
 
  /**
   * 
   * @desc   判断是否为手机号
   * @param  {String|Number} str 
   * @return {Boolean} 
   */
  export function isPhoneNum(str: string | number): boolean
 
  export function isInt(str: string | number): boolean
  export function isSpecialCode(str: string | number): boolean
  /**
   * 
   * @desc   判断是否为URL地址
   * @param  {String} str 
   * @return {Boolean}
   */
  export function isUrl(str: string): boolean

  /**
   * 
   * @desc   现金额转大写
   * @param  {Number} n 
   * @return {String}
   */
  export function digitUppercase(n: number): string

  /**
   * 
   * @desc 判断浏览器是否支持webP格式图片
   * @return {Boolean} 
   */
  export function isSupportWebP(): boolean

  export function session(key: string, value?: any) : any



  /**
   * 
   * @desc 是否为闰年
   * @param {Number} year
   * @returns {Boolean}
   */
  export function isLeapYear(year: number): boolean

  /**
   * @desc   判断是否为同一天
   * @param  {Date} date1 
   * @param  {Date} date2 可选／默认值：当天
   * @return {Boolean}
   */
  export function isSameDay(date1: Date, date2: Date): boolean

  /**
  * @desc 获取指定日期月份的总天数
  * @param {Date} time
  * @return {Number}
  */
  export function monthDays(date: Date): number
  type dateType = {
    day: number,
    hour: number,
    min: number,
    seconds: number
  }
export function formatTime (timer: number): dateType
  /**
   * 
   * @desc   url参数转对象
   * @param  {String} url  default: window.location.href
   * @return {Object} 
   */
  export function parseQueryString(url?: URL): object
  
  /**
   * 
   * @desc   对象序列化
   * @param  {Object} obj 
   * @return {String}
   */
  export function stringifyQueryString(obj: object): string

/**
   * 
   * @desc   获取 url 上的参数
   * @param  {String} string 
   * @param  {String} search 
   * @return {String} 
   */
  export function getRequest(param: string, search?: string): string

  /**
   * 
   * @desc   手机号中间 4 位做掩码
   * @param  {String} string 
   * @return {String} void
   */
   export function filterPhone(param: string | number): string
/**
   * 
   * @desc   给数字中间每 3 位加逗号
   */
 export function commaify(param: string | number): string
    /**
   * 
   * @desc    身份证号中间 4 位做掩码
   * @param  {String | Number} 
   */
  export function filterCard(param: string | number): string

   /**
   * 
   * @desc    监听 onHashchange 事件 
   * @param  {Function} 
   */
    export function onHashChange(callback: Function): void

  /**
   * 
   * @desc    监听 onPopstate 事件 
   * @param  {Function} 
   */
   export function onPopState(callback: Function): void

   /**
   * 
   * @desc    监听 onPushState 事件 
   * @param  {Function} 
   */
    export function onPushState(callback: Function): void

     /**
   * 
   * @desc    监听 onReplaceState 事件 
   * @param  {Function} 
   */
      export function onReplaceState(callback: Function): void

      type locationType = {
        lng: string, lat: string
      }
/**
 * @description:利用百度地图进行定位 
 */
export function locateByBaidu (ak: string): locationType
/**
 * @description:利用5navigator.location 进行丁文 
 */ 
 export function locationByNavigator (timeout: string | number): locationType


}

declare module "utils" {
  export = utils
}
