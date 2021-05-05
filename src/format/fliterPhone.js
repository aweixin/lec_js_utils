/*
 * @author: lican02
 * @description:电话号码中间四位做掩码
 */
function fliterPhone(value) {
  const val = String(value)
  const boolean = val !== 'undefined' && val !== 'null'
  return boolean ? val.substr(0, 3) + '****' + val.substr(7) : ''
}

module.exports = fliterPhone




















