/*
 * @author: lican02
 * @description:是否含有特殊字符
 */
function isSpecialCode(value) {
  let reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]")
  return reg.test(value)
}
module.exports = isSpecialCode