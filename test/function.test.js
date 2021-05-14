describe('Function API:', function () {
    describe('#debounce()', function () {
        const debounce = utils.debounce
        it(`utils.debounce(function(){num++}, 200)一段时间后应该输出1`, function (done) {
            let num = 0
            let interval = null
            let debounced = debounce(function () {
                num++
            }, 20)
            interval = setInterval(function () {
                debounced()
            }, 2)
            setTimeout(() => {
                clearInterval(interval)
            }, 200)

            setTimeout(function () {
                assert(num === 1)
                done()
            }, 500)

        })

    });

    describe('#throttle()', function () {
        const throttle = utils.throttle
        it(`utils.throttle(function(){return true}, 200) 每隔一段时间之后会自动按评率执行`, function (done) {
            let num = 0
            let interval = null
            let throttled = throttle(function () {
                num++
            }, 20)
            interval = setInterval(function () {
                throttled()
            }, 2)
            setTimeout(() => {
                console.log("num_______1", num)
                assert(num === Math.floor(65 / 20))
                done()
                clearInterval(interval)
            }, 65)

        })
    });

    describe('#once()', function () {
        const once = utils.once
        it(`utils.once 返回一个function，这个函数 只执行一次`, function (done) {
            let num = 0
            let interval = null
            let onceFunc = once(() => num++)
            interval = setInterval(function () {
                onceFunc()
            }, 2)
            setTimeout(() => {
                assert(num === 1)
                done()
                clearInterval(interval)
            }, 65)

        })
    });


});