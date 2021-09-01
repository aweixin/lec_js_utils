/*
 * @Author: 李灿
 * @Date: 2021-09-01 10:48:26
 * @LastEditTime: 2021-09-01 11:02:54
 * @Description:是否是只包含数字的字符串
 * @FilePath: /bunny/src/regexp/isNumber.js
 */
function isNumber(value) {
  return /^[0-9]{1,}$/.test(value.toString());
}
console.log(isNumber("a19056323241"));
module.exports = isNumber;
