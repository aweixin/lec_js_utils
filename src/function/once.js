/*
 * @author: lican02
 * @description: 只执行一次的函数
 */
function once(handler) {
  let btn = true;
  return function () {
    if (btn) {
      const args = arguments;
      handler.call(this, ...args);
      btn = false;
    }
  };
}
module.exports = once;
