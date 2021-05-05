/*
 * @author: lican02
 * @description:给数字中间每 3 位加逗号
 */
function commaify(n) {
  n = (n || n === 0) ? n : '';
  let re = /\d{1,3}(?=(\d{3})+$)/g;
  let n1 = n.toString().replace(/^(\d+)((\.\d+)?)$/, function (s, s1, s2) {
    return s1.replace(re, '$&,') + s2;
  });
  return n1;
}
module.exports = commaify






