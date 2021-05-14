/*
 * @author: lican02
 * @description: 只执行一次的函数
 */
function once(handler) {
  let btn = true
  const _this = this
  return function () {
    if (btn) {
      const args = arguments
      handler.call(_this, ...args)
      btn = false
    }

  }
}
module.exports = once




