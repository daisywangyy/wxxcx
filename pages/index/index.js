//index.js
var app = getApp()

var page = {
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
  }
}

Page(page)
