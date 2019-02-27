Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['美国', '中国', '巴西', '日本'],
    index: 0,
    date: '2019-03-01',
    time: '12:00'
  },
  bindPickerChange:function(){
    console.log('picker发送选择改变，携带值为', e.detail.value),
    this.setData({
      index:e.detail.index
    })
  },
  bindDateChange:function(e){
    console.log('picker发送时间', e.detail.value),
    this.setData({
      date:e.detail.value
    })
  },
  bindTimeChange:function(e){
    console.log('picker发送时间', e.detail.value),
    this.setData({
      time:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})