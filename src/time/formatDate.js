/**
 * @desc   格式化日期
 * @param  {Date | Number | String}
 * @return {String}
 */
var dayjs = require('dayjs')

function formatDate(param, format) {
  return dayjs(param).format(format)
}
module.exports = formatDate
