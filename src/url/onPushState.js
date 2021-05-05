/*
 * @author: lican02
 * @description:
 */
const _historyWrap = function (type) {
  const orig = history[type];
  const e = new Event(type);
  return function () {
    const rv = orig.apply(this, arguments);
    e.arguments = arguments;
    window.dispatchEvent(e);
    return rv;
  };
};

function onPushState(callback) {
  window.history.pushState = _historyWrap("pushState");
  window.addEventListener("pushState", function (event) {
    callback(event)
  });
}
module.exports = onPushState



