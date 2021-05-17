describe('Time API:', function () {
    // describe('#formatPassTime()', function () {
    //     it(`utils.formatPassTime(new Date().getTime() - 30000) === '"刚刚"' should return true`, function () {
    //         let time = new Date().getTime() - 30000
    //         assert(utils.formatPassTime(time) === "刚刚")
    //     });

    //     it(`utils.formatPassTime(new Date().getTime() - 70000) === '"1分钟前"' should return true`, function () {
    //         let time = new Date().getTime() - 70000
    //         assert(utils.formatPassTime(time) === "1分钟前")
    //     });

    //     it(`utils.formatPassTime(new Date().getTime() - 70000 * 60) === '"1小时前"' should return true`, function () {
    //         let time = new Date().getTime() - 70000 * 60
    //         assert(utils.formatPassTime(time) === "1小时前")
    //     });

    //     it(`utils.formatPassTime(new Date().getTime() - 70000 * 60 * 24) === '"1天前"' should return true`, function () {
    //         let time = new Date().getTime() - 70000 * 60 * 24
    //         assert(utils.formatPassTime(time) === "1天前")
    //     });

    //     it(`utils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30) === '"1个月前"' should return true`, function () {
    //         let time = new Date().getTime() - 70000 * 60 * 24 * 30
    //         assert(utils.formatPassTime(time) === "1个月前")
    //     });

    //     it(`utils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30 * 12) === '"1年前"' should return true`, function () {
    //         let time = new Date().getTime() - 70000 * 60 * 24 * 30 * 12
    //         assert(utils.formatPassTime(time) === "1年前")
    //     });
    // });

    // describe('#formatRemainTime()', function () {
    //     it(`utils.formatRemainTime(new Date().getTime() + oneSecond + oneMinute + oneHour + oneDay) === '"1天1小时1分钟1秒"' should return true`, function () {
    //         let time = new Date().getTime(),
    //             oneSecond = 1000,
    //             oneMinute = oneSecond * 60,
    //             oneHour = oneMinute * 60,
    //             oneDay = oneHour * 24;
    //         time = time + oneSecond + oneMinute + oneHour + oneDay
    //         assert(utils.formatRemainTime(time) === "1天 1小时 1分钟 1秒")
    //     });
    // });

    describe('#formatTime()', function () {
        it(`utils.formatTime(172800000 + 36000000 + 120000 + 30000) 计算代入的毫秒级总共所少天，小时，..`, function () {
            assert(utils.formatTime(208950000).day === 2 && utils.formatTime(208950000).seconds === 30)
        });
    });
    describe('#formatDate()', function () {

        it(`utils.formatDate 格式化参数，输出时间格式`, function () {
            const year = new Date().getFullYear()
            const month = new Date().getMonth() + 1 >= 10 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)
            const day = new Date().getDate() >= 10 ? new Date().getDate() : '0' + new Date().getDate()
            assert(utils.formatDate(new Date(), "YYYY-MM-DD") === `${year}-${month}-${day}`)
        });

        it(`utils.formatDate 格式化参数，输出时间格式`, function () {
            assert(utils.formatDate(1621243936598, "YYYY-MM-DD") === "2021-05-17")
        });

        it(`utils.formatDate 格式化参数，输出时间格式`, function () {
            assert(utils.formatDate("2021/5/17", "YYYY-MM-DD") === "2021-05-17")
        });
    });


    describe('#isLeapYear()', function () {
        it(`utils.isLeapYear(2008) should return true`, function () {
            assert(utils.isLeapYear(2008))
        });
        it(`utils.isLeapYear(2012) should return true`, function () {
            assert(utils.isLeapYear(2012))
        });
        it(`utils.isLeapYear(2016) should return true`, function () {
            assert(utils.isLeapYear(2016))
        });
        it(`utils.isLeapYear(2020) should return true`, function () {
            assert(utils.isLeapYear(2020))
        });
        it(`utils.isLeapYear(2024) should return true`, function () {
            assert(utils.isLeapYear(2024))
        });
        it(`utils.isLeapYear(2017) should return false`, function () {
            assert.notEqual(utils.isLeapYear(2017), true)
        });
        it(`utils.isLeapYear(2018) should return false`, function () {
            assert.notEqual(utils.isLeapYear(2018), true)
        });
        it(`utils.isLeapYear(2019) should return false`, function () {
            assert.notEqual(utils.isLeapYear(2019), true)
        });
    });

    describe('#isSameDay()', function () {
        it(`utils.isSameDay(new Date()) should return true`, function () {
            assert(utils.isSameDay(new Date()) === true)
        });
        it(`utils.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) should return false`, function () {
            assert(utils.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) === false)
        });
    });

    // describe('#timeLeft()', function () {
    //     it(`utils.timeLeft('2018-10-24 10:24:00', '2018-10-24 10:24:00') should return true`, function () {
    //         let startTime = new Date('2018-10-24 10:24:00')
    //         let endTime = new Date('2018-10-24 10:24:00')
    //         assert.deepEqual(utils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 0 })
    //     });
    //     it(`utils.timeLeft('2018-10-25 10:24:00', '2018-10-24 10:24:00') should return true`, function () {
    //         let startTime = new Date('2018-10-25 10:24:00')
    //         let endTime = new Date('2018-10-24 10:24:00')
    //         assert.deepEqual(utils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 0 })
    //     });
    //     it(`utils.timeLeft('2018-10-1 10:24:00', '2018-10-24 10:24:00') should return true`, function () {
    //         let startTime = new Date('2018-10-1 10:24:00')
    //         let endTime = new Date('2018-10-24 10:24:00')
    //         assert.deepEqual(utils.timeLeft(startTime, endTime), { d: 23, h: 0, m: 0, s: 0 })
    //     });
    //     it(`utils.timeLeft('2018-10-1 10:24:00', '2018-10-24 10:24:00') should return true`, function () {
    //         let startTime = new Date('2018-10-24 6:24:00')
    //         let endTime = new Date('2018-10-24 10:24:00')
    //         assert.deepEqual(utils.timeLeft(startTime, endTime), { d: 0, h: 4, m: 0, s: 0 })
    //     });
    //     // it(`utils.timeLeft('2018-10-1 10:21:00', '2018-10-24 10:24:00') should return true`, function () {
    //     //     let startTime = new Date('2018-10-24 10:21:00')
    //     //     let endTime = new Date('2018-10-24 10:24:00')
    //     //     assert.deepEqual(utils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 3, s: 0 })
    //     // });
    //     it(`utils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function () {
    //         let startTime = new Date('2018-10-24 10:23:30')
    //         let endTime = new Date('2018-10-24 10:24:00')
    //         assert.deepEqual(utils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
    //     });
    //     it(`utils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function () {
    //         let startTime = '2018-10-24 10:23:30'
    //         let endTime = new Date('2018-10-24 10:24:00')
    //         assert.deepEqual(utils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
    //     });
    //     it(`utils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function () {
    //         let startTime = new Date('2018-10-24 10:23:30')
    //         let endTime = '2018-10-24 10:24:00'
    //         assert.deepEqual(utils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
    //     });
    //     it(`utils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function () {
    //         let startTime = '2018-10-24 10:23:30'
    //         let endTime = '2018-10-24 10:24:00'
    //         assert.deepEqual(utils.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
    //     });
    // });

    describe('#monthDays()', function () {
        it(`utils.monthDays(new Date('2019/10/08')) should return 31`, function () {
            assert(utils.monthDays(new Date('2019/10/08')) === 31)
        });
        it(`utils.monthDays(new Date('2019/02/08')) should return 28`, function () {
            assert(utils.monthDays(new Date('2019/02/08')) === 28)
        });
        it(`utils.monthDays(new Date('2020/02/08')) should return 29`, function () {
            assert(utils.monthDays(new Date('2020/02/08')) === 29)
        });
        it(`utils.monthDays(new Date('2020/4/1')) should return 30`, function () {
            assert(utils.monthDays(new Date('2020/4/1')) === 30)
        });
    })
})