describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual utils.deepClone(null) should return true`, function () {
            let person = null
            assert.deepEqual(person, utils.deepClone(person))
        });

        it(`person deepEqual utils.deepClone('SlaneYang') should return true`, function () {
            let person = 'SlaneYang'
            assert.deepEqual(person, utils.deepClone(person))
        });

        it(`person deepEqual utils.deepClone(new Date()) should return true`, function () {
            let date = new Date()
            assert.deepEqual(date, utils.deepClone(date))
        });

        it(`person deepEqual utils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, utils.deepClone(person))
        });

        it(`person === utils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, utils.deepClone(person), true)
        });
    });

    describe('#isEmptyObject()', function () {
        it(`utils.isEmptyObject({}) should return true`, function () {
            assert(utils.deepClone({}))
        });

        it(`utils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(utils.isEmptyObject({
                one: 1
            }), true)
        });

        it(`utils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(utils.isEmptyObject([]), true)
        });
    });


    describe('#getTypeof()', function () {
        it(`utils.getTypeof([]) should return "array"`, function () {
            assert.equal(utils.getTypeof([]), "array")
        });

        it(`utils.getTypeof(new Map([])) should return "array"`, function () {
            assert.equal(utils.getTypeof(new Map([])), "map")
        });
    });


    describe('#qsParam()', function () {
        it(`qsParam: 序列化对象参数`, function () {
            assert.equal(utils.qsParam({
                a: 1,
                b: 2,
                c: 3
            }), "?a=1&b=2&c=3")
        });

        it(`qsParam: 序列化对象参数`, function () {
            assert.equal(utils.qsParam({
                a: 0,
                b: 2,
                c: 3
            }), "?a=0&b=2&c=3")
        });
        it(`qsParam: 序列化对象参数`, function () {
            assert.equal(utils.qsParam({
                a: false,
                b: "a",
                c: 3
            }), "?a=false&b=a&c=3")
        });
    });
})