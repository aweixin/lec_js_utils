/*
 * @author: lican02
 * @description:
 */
function onHashChange(callback) {
  window.addEventListener("hashchange", function (event) {
    callback(event)
    return true
  });
}
module.exports = onHashChange



