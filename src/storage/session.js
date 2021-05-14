/*
 * @author: lican02
 * @description:SessionStore 的存取
 */
function session(key, val) {
  if (val) {
    window.sessionStorage.setItem(key, JSON.stringify(val))
    return val
  } else {
    if (val === '') {
      window.sessionStorage.removeItem(key)
    } else {
      if (window.sessionStorage[key]) {
        return JSON.parse(window.sessionStorage.getItem(key))
      } else {
        return ''
      }
    }
  }
}

module.exports = session
