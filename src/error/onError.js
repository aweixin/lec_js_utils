/*
 * @author: lican02
 * @description:
 */
function onError(callback) {
  // 监听 window 的普通报错
  window.onerror = event => {
    callback(event)
  }

  // 监听 Promise 错误
  window.onunhandledrejection = event => {
    callback(event)

  }
}
module.exports = onError