//app.js
App({
  //启动页面的时候调用
  onLaunch: function() {
    console.log("APP onLaunch");
  },
  //小时页面的时候调用
  onShow:function(){
    console.log("APP onShow");
  },
  //隐藏页面的时候调用
  onHide:function(){
    console.log("APP onHide");
  },
  //全局变冷了
  globalData:{
    hasLogin:false
  }
})