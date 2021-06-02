/*
 * @author: lican02
 * @description:判断当前是否有网络
 */

function isNetAvailable(code) {
  return new Promise((resolve, reject) => {
    if (navigator) {
      if (!navigator.onLine) {
        reject({ code })
      } else {
        resolve()
      }
    } else {
      console.info("当前环境不支持navigator")
      resolve()
    }
  })
}

module.exports = isNetAvailable





