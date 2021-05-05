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

const onReplaceState = callback => {
  window.history.replaceState = _historyWrap("replaceState");
  window.addEventListener("replaceState", function (event) {
    callback(event)
  });
}
module.exports = onReplaceState

