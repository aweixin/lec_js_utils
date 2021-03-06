describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`utils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${utils.getExplore().browser}`)
            assert(utils.getExplore().browser === "Chrome")
        });
    });

    describe('#getOS()', function () {
        it(`utils.getOS() should return "windows"`, function () {
            console.log(`OS:${utils.getOS()}`)
            assert(utils.getOS() === 'windows' || utils.getOS() === 'MacOSX' || utils.getOS() === 'linux')
        });
    });
});