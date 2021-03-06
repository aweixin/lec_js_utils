describe('Format API:', function () {

  describe('#filterPhone()', function () {
    it(`utils.filterPhone(
      '10801229300'
  ) === "108****9300"  should return true`, function () {
      assert(utils.filterPhone("10801229300") === '108****9300')
    });
  });


  describe('#filterCard()', function () {
    it(`utils.filterCard(
        '410987100018420987'
    ) === "4109871000****0987"  should return true`, function () {
      assert(utils.filterCard("410987100018420987") === '4109871000****0987')
    });
  });

  describe('#commaify()', function () {
    it(`utils.commaify(
        '1000000000'
    ) === "1,000,000,000"  should return true`, function () {
      assert(utils.commaify("1000000000") === '1,000,000,000')
    });
  });
});