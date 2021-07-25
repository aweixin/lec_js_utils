// var throttle = require('./throttle');

// /**
//  * @desc 函数防抖
//  * 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，
//  * 要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。
//  * @example 适用场景：如在线编辑的自动存储防抖。
//  * @param  {Number}   delay         0或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
//  * @param  {Boolean}  atBegin       可选，默认为false。
//  *                                  如果`atBegin`为false或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。
//                                     如果`atBegin`为true，回调函数则在第一次调用return的防抖函数时直接执行
//  * @param  {Function} callback      延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
//  *                                  执行去抖动功能时，，调用`callback`。
//  *
//  * @return {Function} 新的防抖函数。
//  */
// function debounce(delay, atBegin, callback) {
//     return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
// };
// module.exports = debounce;

/**
 * @description: 函数防抖 - 高频触发的事件，如：按钮点击多次，只执行最后一次, 这个高频触发的频率不可控，所以需要在一个
 确定的时间段内，执行一次，也就是咱们自己开发者给他规定了一个评率。但是请求，promise 在何时能够进行下一次请求，我们是可以很清楚的知道什么时候可以进行下一次请求，所以这种不属于防抖的范畴。
 * @param {*} handler 处理函数
 * @param {*} delay 时间段，表示多长时间后执行这一次函数
 * @param immediate 是否立即执行 , true 表示立即执行
 * @return {*} 新的函数
 */

function debounce(handler, delay, immediate) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      handler.apply(this, args);
    }
    timer = setTimeout(() => {
      handler.apply(this, args);
    }, delay || 500);
  };
}
module.exports = debounce;
