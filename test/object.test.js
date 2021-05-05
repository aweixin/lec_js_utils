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
})