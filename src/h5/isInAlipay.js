/*
 * @author: lican02
 * @description: 判断当前环境是不是在支付宝内
 */
function isInAlipay() {
  var ua = window.navigator.userAgent.toLowerCase();// 不加window部分Android机会显示不了提示图，即判断不了是否是微信
  if (navigator.userAgent.indexOf("AlipayClient") > -1) {
    return true;
  } else {
    return false;
  }
}
module.exports = isInAlipay



