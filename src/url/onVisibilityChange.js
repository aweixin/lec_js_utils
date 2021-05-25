/*
 * @author: lican02
 * @description:当前页面激活时的监听事件
 */
function onVisibilityChange(visibilityCallback, hiddenCallback) {
  // 页面激活时，获取数据
  const hiddenProperty = 'hidden' in document ?
    'hidden' :
    'webkitHidden' in document ?
      'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null
  var visibilityChangeEvent = hiddenProperty && hiddenProperty.replace(/hidden/i, 'visibilitychange')
  var onVisibilityChange = () => {
    if (!document[hiddenProperty]) {
      visibilityCallback()
    } else {
      hiddenCallback()
    }
  }
  document.addEventListener(visibilityChangeEvent, onVisibilityChange)
}

module.exports = onVisibilityChange