/*
 * @author: lican02
 * @description: 序列化对象参数
 */
function qsParam(object) {
  let _s = ""
  Object.keys(object).forEach(item => {
    const _string = (object[item] || object[item] === 0 || object[item] === false)
    if (_string) {
      _s = `${_s}${!_s ? '?' : '&'}${item}=${object[item]}`
    }
  })

  return _s
}

module.exports = qsParam





