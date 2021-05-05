describe('Format API:', function () {

  describe('#fliterPhone()', function () {
    it(`utils.fliterPhone(
      '19801229300'
  ) === "198****9300"  should return true`, function () {
      assert(utils.fliterPhone("19801229300") === '198****9300')
    });
  });


  describe('#fliterCard()', function () {
    it(`utils.fliterCard(
        '410987199318220987'
    ) === "4109871993****0987"  should return true`, function () {
      assert(utils.fliterCard("410987199318420987") === '4109871993****0987')
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