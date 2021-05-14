/*
 * @author: lican02
 * @description:百度 ip 定位,最终获取到经纬度
 */

var jsonp = require('../jsonp/jsonp')
/**
 * @description: 
 * @param {*} ak 自己在百度地图平台申请的报读 AK
 */
function locateByBaidu(ak) {
  const url = `//api.map.baidu.com/location/ip?ak=${ak}&coor=bd09ll&output=jsonp`
  return jsonp(url).then(pos_1 => {
    const _data = pos_1.content.point
    return {
      lng: _data.x,
      lat: _data.y
    }
  }).catch(err => console.log(err));


}

module.exports = locateByBaidu





