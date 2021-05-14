
describe('Base64:', function () {
  describe('#Base64()', function () {
    it(`base64 编码与解码`, function () {
      assert(utils.utf8_to_b64("移植") === "56e75qSN")
      assert(utils.b64_to_utf8("56e75qSN") === "移植")
      assert(utils.b64_to_utf8(utils.utf8_to_b64("移植")) === "移植")
    });
  });
});