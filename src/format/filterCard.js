/*
 * @author: lican02
 * @description:身份证中间生日日期做掩码
 */


function filterCard(value) {
  const val = String(value)
  const boolean = val !== 'undefined' && val !== 'null'
  return boolean ? val.substr(0, 10) + '****' + val.substr(14) : ''
}

module.exports = filterCard

