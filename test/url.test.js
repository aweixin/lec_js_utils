
describe('Url API:', function () {
    describe('#parseQueryString()', function () {
        it(`utils.parseQueryString('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10') deepEqual '{
            wd: '百度',
            rsv_spt: '10'
        }' should return true`, function () {
            let url = 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'
            assert.deepEqual(utils.parseQueryString(url), {
                wd: '百度',
                rsv_spt: '10'
            })
        });
        it(`utils.parseQueryString('www.baidu.com?a=123&b=%26') deepEqual '{
            a: '123',
            b: '&'
        }' should return true`, function () {
            let url = 'www.baidu.com?a=123&b=%26'
            assert.deepEqual(utils.parseQueryString(url), {
                a: '123',
                b: '&'
            })
        });
        it(`utils.parseQueryString('') deepEqual '{}' should return true`, function () {
            let url = ''
            assert.deepEqual(utils.parseQueryString(url), {})
        });
    });

    describe('#stringifyQueryString()', function () {
        it(`utils.stringifyQueryString({
            wd: '百度',
            rsv_spt: '10'
        }) === 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'  should return true`, function () {
            let param = {
                wd: '百度',
                rsv_spt: '10'
            }
            assert(utils.stringifyQueryString(param) === 'wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')
        });
    });

    describe('#getRequest()', function () {
        it(`utils.getRequest(
            "name",
            "?id=10&name=lee"
        ) === "lee"  should return true`, function () {
            assert(utils.getRequest("name", "?id=10&name=lee") === 'lee')
        });
    });


    describe('#windowURLTurnToOthers()', function () {
        let location = window.location
        it(`utils.windowURLTurnToOthers(callback) should listen the handler`, function () {
            utils.onHashChange(() => console.log("onHashChange triggered"))
            utils.onPopState(() => console.log("onPopState triggered"))
            utils.onPushState(() => console.log("onPushState triggered"))
            utils.onReplaceState(() => console.log("onReplaceState triggered"))

            // 触发resize事件
            window.dispatchEvent(new Event('onHashchange'));
            // window.location = "www.baidu.com"
        })
        after(function () {
        })
    });
})