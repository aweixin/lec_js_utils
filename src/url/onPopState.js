/*
 * @author: lican02
 * @description:
 */
function onPopState(callback) {
  window.addEventListener("popstate", function (event) {
    callback(event)
    return true
  });
}
module.exports = onPopState



