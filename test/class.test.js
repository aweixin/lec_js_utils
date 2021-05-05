describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`utils.addClass($ele, 'test') should return true`, function () {
            utils.addClass($ele, 'test')
            assert(utils.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            utils.addClass($ele, 'test')
        })
        it(`utils.hasClass($ele, 'test') should return true`, function () {
            assert(utils.hasClass($ele, 'test'))
        });
        it(`utils.hasClass($ele, 'test') should return false`, function () {
            assert(!utils.hasClass($ele, 'test2'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            utils.addClass($ele, 'test')
        })
        it(`utils.removeClass($ele, 'test') should return false`, function () {
            utils.removeClass($ele, 'test')
            assert.notEqual(utils.hasClass($ele, 'test'), true)
        });
        it(`utils.removeClass($ele, 'test') should return false`, function () {
            utils.removeClass($ele, 'test')
            assert.notEqual(utils.hasClass($ele, 'test'), true)
            utils.addClass($ele, 'newTest')
            assert(utils.hasClass($ele, 'newTest'))
            utils.removeClass($ele, 'newTest')
            assert.notEqual(utils.hasClass($ele, 'newTest'), true)
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});