describe('Dom API:', function () {
    describe('#getScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20;
        before(function () {
            $body.style.height = '10000px'
            utils.setScrollTop(length)
        })
        it(`utils.getScrollTop() should return true`, function () {
            assert(utils.getScrollTop() === length)
        })
        after(function () {
            utils.setScrollTop(0)
            $body.style.height = bodyHeight
        })
    });

    describe('#setScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20;
        before(function () {
            $body.style.height = '10000px'
            utils.setScrollTop(length)
        })
        it(`utils.getScrollTop() should return true`, function () {
            utils.setScrollTop(length)
            assert(utils.getScrollTop() === length)
        })
        after(function () {
            utils.setScrollTop(0)
            $body.style.height = bodyHeight
        })
    });

    describe('#offset()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            div.style.position = 'absolute'
            div.style.top = '200px'
            div.style.left = '300px'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`utils.offset() should return true`, function () {
            let offset = utils.offset($ele)
            assert(offset.left === 300 && offset.top === 200)
        })
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#scrollTo()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20,
            y = 100,
            duration = 300;
        before(function () {
            $body.style.height = '10000px'
        })
        it(`utils.scrollTo() should return true`, function (done) {
            utils.scrollTo(y, duration)
            setTimeout(function () {
                assert(utils.getScrollTop() === y)
                done()
            }, duration + 200)
        })
        after(function () {
            utils.setScrollTop(0)
            $body.style.height = bodyHeight
        })
    });


    describe('#windowResize()', function () {
        let innerHeight = window.innerHeight
        it(`utils.windowResize(downCb) should return true`, function (done) {
            utils.windowResize(function () {
                // ??????????????????
                assert(window.innerHeight == innerHeight)
                done()
            }, function () { })
            // ??????resize??????????????????????????????
            window.dispatchEvent(new Event('resize'));
        })
    });

    describe('#windowResize()', function () {
        let innerHeight = window.innerHeight
        it(`utils.windowResize(upCb) should return true`, function (done) {
            utils.windowResize(function () { }, function () {
                // ??????????????????
                assert(window.innerHeight === innerHeight - 200)
                done()
            })
            // ??????innerHeight????????????????????????
            window.innerHeight = innerHeight - 200
            // ??????resize??????
            window.dispatchEvent(new Event('resize'));
        })
        after(function () {
            window.innerHeight = innerHeight
        })
    });



});