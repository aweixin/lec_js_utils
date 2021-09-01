describe("Regexp API:", function () {
  describe("#isColor()", function () {
    it('utils.isColor("#acf") should return true ', function () {
      assert(utils.isColor("#acf"));
    });
    it('utils.isColor("#aaccff") should return true ', function () {
      assert(utils.isColor("#aaccff"));
    });
    it('utils.isColor("acf") should return false ', function () {
      assert(!utils.isColor("acf"));
    });
    it('utils.isColor("aaccff") should return false ', function () {
      assert(!utils.isColor("aaccff"));
    });
    it('utils.isColor("rgb(0,0,0,1)") should return false ', function () {
      assert(!utils.isColor("rgb(0,0,0,1)"));
    });
    it('utils.isColor("rgb(0,0,0,)") should return false ', function () {
      assert(!utils.isColor("rgb(0,0,0,)"));
    });
    it('utils.isColor("rgb(255,255,256)") should return false ', function () {
      assert(!utils.isColor("rgb(255,255,256)"));
    });
    it('utils.isColor("rgb(255,256,255)") should return false ', function () {
      assert(!utils.isColor("rgb(255,256,255)"));
    });
    it('utils.isColor("rgb(256,255,255)") should return false ', function () {
      assert(!utils.isColor("rgb(256,255,255)"));
    });
    it('utils.isColor("rgb(1,1,-1)") should return false ', function () {
      assert(!utils.isColor("rgb(1,1,-1)"));
    });
    it('utils.isColor("rgb(1,-1,1)") should return false ', function () {
      assert(!utils.isColor("rgb(1,-1,1)"));
    });
    it('utils.isColor("rgb(-1,1,1)") should return false ', function () {
      assert(!utils.isColor("rgb(-1,1,1)"));
    });
    it('utils.isColor("rgb(1,1,1.1)") should return false ', function () {
      assert(!utils.isColor("rgb(1,1,1.1)"));
    });
    it('utils.isColor("rgb(1,1.1,1)") should return false ', function () {
      assert(!utils.isColor("rgb(1,1.1,1)"));
    });
    it('utils.isColor("rgb(1.1,1,1)") should return false ', function () {
      assert(!utils.isColor("rgb(1.1,1,1)"));
    });
    it('utils.isColor("rgb(0,0,0)") should return true ', function () {
      assert(utils.isColor("rgb(0,0,0)"));
    });
    it('utils.isColor("rgb(255,255,255)") should return true ', function () {
      assert(utils.isColor("rgb(255,255,255)"));
    });
    it('utils.isColor("rgba(-1,0,0,1)") should return false ', function () {
      assert(!utils.isColor("rgba(-1,0,0,1)"));
    });
    it('utils.isColor("rgba(0,-1,0,1)") should return false ', function () {
      assert(!utils.isColor("rgba(0,-1,0,1)"));
    });
    it('utils.isColor("rgba(0,0,-1,1)") should return false ', function () {
      assert(!utils.isColor("rgba(0,0,-1,1)"));
    });
    it('utils.isColor("rgba(0,0,0,-1)") should return false ', function () {
      assert(!utils.isColor("rgba(0,0,0,-1)"));
    });
    it('utils.isColor("rgba(256,0,0,1)") should return false ', function () {
      assert(!utils.isColor("rgba(256,0,0,1)"));
    });
    it('utils.isColor("rgba(0,256,0,1)") should return false ', function () {
      assert(!utils.isColor("rgba(0,256,0,1)"));
    });
    it('utils.isColor("rgba(0,0,256,1)") should return false ', function () {
      assert(!utils.isColor("rgba(0,0,256,1)"));
    });
    it('utils.isColor("rgba(-1,0,0,1)") should return false ', function () {
      assert(!utils.isColor("rgba(-1,0,0,1)"));
    });
    it('utils.isColor("rgba(0,-1,0,1)") should return false ', function () {
      assert(!utils.isColor("rgba(0,-1,0,1)"));
    });
    it('utils.isColor("rgba(0,0,-1,1)") should return false ', function () {
      assert(!utils.isColor("rgba(0,0,-1,1)"));
    });
    it('utils.isColor("rgba(1.1,0,0,1)") should return false ', function () {
      assert(!utils.isColor("rgba(1.1,0,0,1)"));
    });
    it('utils.isColor("rgba(0,1.1,0,1)") should return false ', function () {
      assert(!utils.isColor("rgba(0,1.1,0,1)"));
    });
    it('utils.isColor("rgba(0,0,1.1,1)") should return false ', function () {
      assert(!utils.isColor("rgba(0,0,1.1,1)"));
    });
    it('utils.isColor("rgba(0,0,0,256)") should return false ', function () {
      assert(!utils.isColor("rgba(0,0,0,256)"));
    });
    it('utils.isColor("rgba(0,0,0,1.1)") should return false ', function () {
      assert(!utils.isColor("rgba(0,0,0,1.1)"));
    });
    it('utils.isColor("rgba(0,0,0,0.222)") should return false ', function () {
      assert(utils.isColor("rgba(0,0,0,0.222)"));
    });
    it('utils.isColor("rgba(0,0,0,)") should return false ', function () {
      assert(!utils.isColor("rgba(0,0,0,)"));
    });
    it('utils.isColor("rgba(0,0,0)") should return false ', function () {
      assert(!utils.isColor("rgba(0,0,0)"));
    });
    it('utils.isColor("rgba(0,0,0,0.2)") should return false ', function () {
      assert(utils.isColor("rgba(0,0,0,0.2)"));
    });
    it('utils.isColor("rgba(24,0,0,.2)") should return false ', function () {
      assert(utils.isColor("rgba(24,0,0,0.2)"));
    });
  });

  describe("#isEmail()", function () {
    it('utils.isEmail("leiquanlive.com") should return false ', function () {
      assert.notEqual(utils.isEmail("leiquanlive.com"), true);
    });
    it('utils.isEmail("leiquan@live.com") should return true ', function () {
      assert(utils.isEmail("leiquan@live.com"));
    });
  });

  describe("#isIdCard()", function () {
    it('utils.isIdCard("622224188203234033") should return true ', function () {
      assert(utils.isIdCard("622224188203234033"));
    });
    it('utils.isIdCard("zas224188203234033") should return false', function () {
      assert(!utils.isIdCard("leiquan@live.com"));
    });
  });

  describe("#isPhoneNum()", function () {
    it('utils.isPhoneNum("18882324234") should return true ', function () {
      assert(utils.isPhoneNum("18882324234"));
    });
    it('utils.isPhoneNum("8618882324234") should return true ', function () {
      assert(utils.isPhoneNum("8618882324234"));
    });
    it('utils.isPhoneNum("5534553") should return false', function () {
      assert(!utils.isPhoneNum("5534553"));
    });
    it('utils.isPhoneNum("19056323241") should return true', function () {
      assert(utils.isPhoneNum("19056323241"));
    });
  });
  describe("#isNumber()", function () {
    it('utils.isNumber("18882324234") should return true ', function () {
      assert(utils.isNumber("18882324234"));
    });
    it('utils.isNumber("8618882324234") should return true ', function () {
      assert(utils.isNumber("8618882324234"));
    });
    it('utils.isNumber("5534a553") should return false', function () {
      assert(!utils.isNumber("5534a553"));
    });
    it('utils.isNumber("a19056323241") should return false', function () {
      assert(!utils.isNumber("a19056323241"));
    });
  });

  describe("#isUrl()", function () {
    it('utils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
      assert(utils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"));
    });
    it('utils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
      assert(utils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"));
    });
    it('utils.isUrl("www.baidu.com") should return true', function () {
      assert(utils.isUrl("www.baidu.com"));
    });
    it('utils.isUrl("baidu.com") should return true', function () {
      assert(utils.isUrl("baidu.com"));
    });
    it('utils.isUrl("http://baiducom") should return false', function () {
      assert(!utils.isUrl("http://baiducom"));
    });
  });

  describe("#isInt() 判断是不是一个正整数", function () {
    it('utils.isInt("18") 应该返回 true ', function () {
      assert(utils.isInt("18"));
    });
    it("utils.isInt(18) 应该返回 true ", function () {
      assert(utils.isInt(18));
    });
    it("utils.isInt(0) 应该返回 false ", function () {
      assert(!utils.isInt(0));
    });
    it('utils.isInt("-1") 应该返回 false ', function () {
      assert(!utils.isInt("-1"));
    });
    it("utils.isInt(-1) 应该返回 false ", function () {
      assert(!utils.isInt(-1));
    });
    it("utils.isInt(18.1) 应该返回 false ", function () {
      assert(!utils.isInt(18.1));
    });
  });

  describe("#isSpecialCode() 判断是否含有特殊字符", function () {
    it('utils.isSpecialCode("埃美柯") 应该返回 false ', function () {
      assert(!utils.isSpecialCode("埃美柯"));
    });

    it('utils.isSpecialCode("埃美柯.-") 应该返回 true ', function () {
      assert(utils.isSpecialCode("埃美柯.-"));
    });
  });
});
