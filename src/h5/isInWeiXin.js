/*
 * @author: lican02
 * @description:判断是否在微信中
 */
function isInWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();// 不加window部分Android机会显示不了提示图，即判断不了是否是微信
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}
module.exports = isInWeiXin