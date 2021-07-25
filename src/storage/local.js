/*
 * @Author: 李灿
 * @Date: 2021-07-19 10:43:26
 * @LastEditTime: 2021-07-19 10:44:04
 * @Description:localStorage 存取方法
 * @FilePath: /bunny/src/storage/local.js
 */

function local(key, val) {
  if (val) {
    window.localStorage.setItem(key, JSON.stringify(val));
    return val;
  } else {
    if (val === "") {
      window.localStorage.removeItem(key);
    } else {
      if (window.localStorage[key]) {
        return JSON.parse(window.localStorage.getItem(key));
      } else {
        return "";
      }
    }
  }
}

module.exports = local;
