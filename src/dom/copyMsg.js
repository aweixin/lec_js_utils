/*
 * @author: lican02
 * @description:浏览器复制内容 - 仅支持 input 和 textArea
 */
function copyMsg(el, fn) {
  const tag = el.tagName.toLowerCase();
  if (!(tag === "input" || tag === "textarea")) {
    console.log("仅支持 input 或者 textArea");
    return;
  }
  el.focus();
  navigator.clipboard.writeText(el.value);
  typeof fn === "function" && fn();
}
module.exports = copyMsg