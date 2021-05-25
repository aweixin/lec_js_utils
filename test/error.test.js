/*
 * @author: lican02
 * @description:
 */
describe('Error API:', function () {
  describe('#onError() JSError', function () {
    before(function () {
    })
    it(`utils.onError() `, function () {
      const callback = e => {
        assert(!!e)
      }
      try {
        console.log(a)
      } catch (error) {
        utils.onError(callback)
      }

    })
  });


  describe('#onError() Promise', function () {
    before(function () {
      Promise.reject("1")
    })
    it(`utils.onError()`, function () {
      const callback = e => {
        assert(!!e)
      }
      utils.onError(callback)
    })
  });
});