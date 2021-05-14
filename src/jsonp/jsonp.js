/*
 * @author: lican02
 * @description: jsonp 方式实现跨域请求。此时不是在页面上执行的脚本，而是通过 url 去访问了
 * 对于页面级别的脚本跨域，需要后台去配置跨域请求头
 * 跨域：浏览器执行javascript脚本时，会检查这个脚本属于哪个页面，如果不是同源页面，就不会被执行。
 */
function jsonp(url, timeout) {
  return new Promise((resolve, reject) => {
    var script;
    if (timeout === void 0) {
      timeout = 5000;
    }
    var name = 'GETJSONP' + Math.random().toFixed(5).replace('.', '');
    window[name] = function (res) {
      script.onerror = null;
      document.querySelector('body').removeChild(script);
      delete window[name];
      if (res.code === -2) {
        reject(res)
      }
      resolve(res);
    };
    script = document.createElement('script');
    script.type = 'text/javascript';
    document.querySelector('body').appendChild(script);
    script.src = url + '&callback=' + name;
    script.onerror = function () {
      window[name]({ code: -2, data: null });
    };
    if (timeout !== null) {
      setTimeout(() => {
        if (window[name]) {
          window[name]({ code: -1, data: null });
          window[name] = function () {
            delete window[name];
          };
        }
      }, timeout);
    }
  })
}


module.exports = jsonp


