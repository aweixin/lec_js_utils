/*
 * @author: lican02
 * @description:base64 编码解码
 */


function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}


module.exports = b64_to_utf8
