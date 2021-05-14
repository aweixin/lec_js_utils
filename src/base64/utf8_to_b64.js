/*
 * @author: lican02
 * @description:utf-8 转码 base64
 */
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

module.exports = utf8_to_b64