/*
 * @author: lican02
 * @description:获取对象的类型
 */
function getTypeof(param) {
  const dictionary = {
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Function]': 'function',
    '[object RegExp]': 'regExp',
    '[object Null]': 'null',
    '[object Undefined]': 'undefined',
    '[object Boolean]': 'boolean',
    '[object Symbool]': 'symbool',
    '[object String]': 'string',
    '[object Number]': 'number',
    '[object Map]': 'map',
    '[object WeakMap]': 'weakMap',
    '[object Set]': 'set',
    '[object WeakSet]': 'weakSet'
  }
  return dictionary[Object.prototype.toString.call(param)] || 'unknow'
}

module.exports = getTypeof
