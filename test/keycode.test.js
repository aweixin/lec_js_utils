describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`utils.getKeyName(13) should return "Enter"`, function () {
            assert(utils.getKeyName(13) === 'Enter')
        });
        const keycode = 10000
        it(`utils.getKeyName(${keycode}) should return ''`, function () {
            assert(utils.getKeyName(keycode) === '')
        });
    });

});