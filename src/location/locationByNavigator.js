/*
 * @author: lican02
 * @description:H5 navigator 定位方式,返回经纬度
 */
/**
 * @param {*} timeout 超时时间
 * @return {*}
 */
function locationByNavigator(timeout) {
  return new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      if (location.protocol !== 'https:') {
        reject({ status: "error", data: { message: "http 环境下不可使用geolocation定位" } })
      } else {
        // navigator定位
        navigator.geolocation.getCurrentPosition(res => {
          resolve({
            status: "success",
            data: {
              message: "navigator.geolocation定位成功",
              position: {
                lng: res.coords.longitude,
                lat: res.coords.latitude
              }
            }
          })
        }, err => {
          reject({ status: "error", data: { message: "navigator.geolocation定位方式失败", err } })
        }, {
          enableHighAccuracy: true,
          timeout: timeout,
          maximumAge: 0
        })
      }
    } else {
      reject({ status: "error", data: { message: "前环境下navigator.geolocation不存在，无法实现定位" } })
    }
  })
}
module.exports = locationByNavigator