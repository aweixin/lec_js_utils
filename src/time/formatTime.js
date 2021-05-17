/**
 * @desc   格式化时间
 * @param  {Date} 需要格式化的时间  ms
 * @return {String}
 */
function formatTime(date) {
    var day = parseInt(date / (1000 * 60 * 60 * 24));

    var leaveDay = date % (1000 * 60 * 60 * 24);

    var hour = parseInt(leaveDay / (1000 * 60 * 60));

    var leaveHour = leaveDay % (1000 * 60 * 60);
    var min = parseInt(leaveHour / (1000 * 60));

    var leaveMin = leaveHour % (1000 * 60);
    var seconds = leaveMin / 1000;



    return {
        day,
        hour,
        min,
        seconds,
    };
}

module.exports = formatTime