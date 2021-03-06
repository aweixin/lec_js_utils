/**
 * 
 * @desc 获取浏览器类型和版本
 * @return {String} 
 */
function getExplore() {
    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
        (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
            (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
                (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
                    (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
                        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
                            (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) return ({ browser: 'IE', version: sys.ie })
    if (sys.edge) return ({ browser: 'EDGE', version: sys.edge })
    if (sys.firefox) return ({ browser: 'Firefox', version: sys.firefox })
    if (sys.chrome) return ({ browser: 'Chrome', version: sys.chrome })
    if (sys.opera) return ({ browser: 'Opera', version: sys.opera })
    if (sys.safari) return ({ browser: 'Safari', version: sys.safari })
    return { browser: 'not fund', version: 'not fund' }
}

module.exports = getExplore;