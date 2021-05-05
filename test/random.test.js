describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(utils.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(utils.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= utils.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = utils.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });

        // 测试 0.1 ~ 1.2 之间只能取得 1，不能为 0
        it(`1 === utils.randomNum(0.1, 1.2) should return true`, function () {
            let num = utils.randomNum(0.1, 1.2)
            assert(num === 1)
        });
    });
})