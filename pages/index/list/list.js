/***
 * 模块化导入module.exports
 */
var base64 = require("../images/base64.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   * 一般setData方法多用于点击后改变页面信息或者刷新后与后台交互获取最新的信息
注意：
直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致
单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
   */
  onLoad: function (options) {
    this.setData({
      icon: base64.icon20
    })
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