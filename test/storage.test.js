/*
 * @author: lican02
 * @description:
 */
describe('storage API:', function () {
  describe('#session()', function () {
    const session = utils.session
    before(function () {
      session("name", "周敏")
    })
    it(`session方法设置 SessionStore 的存取`, function () {
      assert(session("name") === "周敏")
    });
  });
});