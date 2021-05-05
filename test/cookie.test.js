describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            utils.setCookie('test', 'getTestValue')
        })
        it(`utils.getCookie('test', 'getTestValue') should return true`, function () {
            assert(utils.getCookie('test') === 'getTestValue')
        })
        it(`utils.getCookie('empty', '') should return true`, function () {
            assert(utils.getCookie('empty') === '')
        })
        after(function () {
            utils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            utils.setCookie('test', 'removeTestValue')
        })
        it(`utils.removeCookie('test') should return false`, function () {
            utils.removeCookie('test')
            assert.notEqual(utils.getCookie('test') === 'removeTestValue', true)
        })
    })

    describe('#setCookie()', function () {
        it(`utils.getCookie('test', 'setCookie') should return true`, function () {
            utils.setCookie('test', 'setCookie')
            assert(utils.getCookie('test') === 'setCookie')
        })
        after(function () {
            utils.removeCookie('test')
        })
    })
})