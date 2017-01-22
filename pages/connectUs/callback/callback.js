// /pages/connectUs/callback/callback.js
var app = getApp()

Page({
  data: {
    callbackInfo: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  inputCallback: function (e) {
    var value = e.detail.value
    this.setData({
      callbackInfo: value
    })
  },
  submitEvent: function () {
    var data = {
      'callbackInfo': this.data.callbackInfo,
    }
    app.doRequest("http://www.yangfuhai.com/api", data, function (data) {
      wx.showToast({
        title: '提交成功'
      })

      wx.navigateBack({
        delta: 1
      })
      return
    })
  }
})