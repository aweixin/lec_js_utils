/*
 * @author: lican02
 * @description:
 */
function onPopState(callback) {
  window.addEventListener("popstate", function (event) {
    callback(event)
  });
}
module.exports = onPopState



