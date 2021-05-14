/**
 * @description: 是否是正整数
 * @param {*} value
 * @return {*}
 */
function isInt (value) {
  return /^[1-9]\d*$/.test(value)
}
module.exports = isInt