/*
 * @author: lican02
 * @description:获取路径上的参数
 */
function getRequest(param, search) {
  var url = search || location.search;
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      // unescape() 函数可对通过 escape() 编码的字符串进行解码。
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest[param] || "";
}
module.exports = getRequest



