/*
 * @author: lican02
 * @description:
 */

describe('H5:', function () {
  describe('#getSize()', function () {
    before(function () {
      window.innerWidth = 375
    })
    it(`getSize 设置根元素 font-size`, function () {
      let docEl = document.documentElement
      utils.getSize(40)
      assert(docEl.style.fontSize === 20 + "px")
    });
  });


  describe('#isInWeiXin()', function () {
    it(`isWeiXin 判断当前环境是否在微信浏览器环境`, function () {
      assert(utils.isInWeiXin() === false)
    });
  });


  describe('#isInAlipay()', function () {
    it(`isInAlipay 判断当前环境是否在支付宝环境`, function () {
      assert(utils.isInAlipay() === false)
    });
  });
});