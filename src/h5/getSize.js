/*
 * @author: lican02
 * @description:H5 REM 布局设置根元素font-size  设计稿为750物理像素 dpr = 2 
 */
function getWdith() {
  let myWidth = 0
  if (typeof (window.innerWidth) === 'number') {
    // Non-IE
    myWidth = window.innerWidth
  } else if (document.documentElement && (document.documentElement.clientWidth)) {
    // IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth
  } else if (document.body && (document.body.clientWidth)) {
    // IE 4 compatible
    myWidth = document.body.clientWidth
  }
  return parseInt(myWidth)
};
function getSize(base) { // 获取屏幕的宽度
  let docEl = document.documentElement
  let screenWidth = getWdith()
  docEl.style.fontSize = screenWidth / (750 / base) + 'px'
}
module.exports = getSize
