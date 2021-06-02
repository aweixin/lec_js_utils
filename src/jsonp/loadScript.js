/*
 * @author: lican02
 * @description:
 */
function loadScript(url) {
  var timeout = 60000;
  var target =
    document.getElementsByTagName("script")[0] || document.head;
  var timer, script;
  // 超时自动取消
  if (timeout) {
    timer = setTimeout(function () {
      cleanup();
      console.log("loadScript--Timeout:" + url);
    }, timeout);
  }
  // 清理函数
  function cleanup() {
    if (script.parentNode) script.parentNode.removeChild(script);
    if (timer) clearTimeout(timer);
  }
  // 创建js文件
  script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  target.parentNode.insertBefore(script, target);

  // IE的script 元素支持onreadystatechange事件，不支持onload事件
  // FF的script 元素不支持onreadystatechange事件，只支持onload事件
  script.onload = script.onreadystatechange = function () {
    if (
      !script.readyState ||
      script.readyState === "loaded" ||
      script.readyState === "complete"
    ) {
      if (timer) clearTimeout(timer);
    }
  };
}

module.exports = loadScript