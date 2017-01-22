//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    array: [{
      name: '张三',
      phone: '13916190489',
    }, {
      name: '张三',
      phone: '13916190489',
    }, {
      name: '张三',
      phone: '13916190489',
    }, {
      name: '张三',
      phone: '13916190489',
    }, {
      name: '张三',
      phone: '13916190489',
    }, {
      name: '张三',
      phone: '13916190489',
    }, {
      name: '张三',
      phone: '13916190489',
    }, {
      name: '张三',
      phone: '13916190489',
    }]
  },
  gotoDetailInfo: function (item) {
    wx.navigateTo({
      url: '/pages/member/second/secondMember?name=' + item.target.dataset.name
    })
  }
})