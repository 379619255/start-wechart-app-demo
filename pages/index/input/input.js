// pages/index/imput/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //是否显示顶部提示
    showTopTips: false,
    //单选
    radioItems: [{
        name: 'cell standard',
        value: '0'
      },
      {
        name: 'cell standard',
        value: '1',
        checked: true
      }
    ],
    //复选
    checkboxItems: [{
        name: 'standard is dealt for u.',
        value: '0',
        checked: true
      },
      {
        name: 'standard is dealicient for u.',
        value: '1'
      }
    ],

    date: "2019-02-26",
    time: "12:01",

    //国家区号 数组
    countryCodes: ["+86", "+80", "+84", "+87"],
    //国家区号默认选择
    countryCodesIndex: 0,

    countries: ["中国", "美国", "英国"],
    countryIndex: 0,

    //账号
    accounts: ["微信号", "QQ", "Email"],
    accountIndex: 0,
  },

  shouTopTips: function() {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function() {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },

  radioChange: function(e) {
    //e.detail.value取到相应的值
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    //获取到data里面初始化的单选框
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  //复选框的改变方法
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems,
      values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      checkboxItems: checkboxItems
    });
  },
  //绑定数据的变化
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },

  //时间的改变
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },

  bindCountryCodeChange: function(e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  bindCountryChange: function(e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);

    this.setData({
      countryIndex: e.detail.value
    })
  },
  bindAccountChange: function(e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);

    this.setData({
      accountIndex: e.detail.value
    })
  },
  bindAgreeChange: function(e) {
    console.log('bindAgreeChange', e.detail.value);
    console.log('bindAgreeChange', e.detail.value.length);
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  buttonClick: function () {
    console.log('button点击');
  },
  buttonClick2 :function(e){
    console.log('点击传值',e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})