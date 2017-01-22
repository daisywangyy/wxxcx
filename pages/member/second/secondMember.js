// pages/member/second/secondMember.js
Page({
  data: {
    names: [{
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
    }],
    yeji:[{
      title: '[少年游]西湖3日游',
      acount: '1000',
      time: '2011-11-12',
      time2: '2011-12-20',
      day: '3',
      peopleNumber: '5',
    }, {
      title: '[少年游]西湖3日游',
      acount: '10001',
      time: '2011-11-12',
      time2: '2011-12-20',
      day: '2',
      peopleNumber: '8',
    }, {
      title: '[少年游]西湖3日游',
      acount: '10001',
      time: '2011-11-12',
      time2: '2011-12-20',
      day: '2',
      peopleNumber: '8',
    }, {
      title: '[少年游]西湖3日游',
      acount: '10001',
      time: '2011-11-12',
      time2: '2011-12-20',
      day: '2',
      peopleNumber: '8',
    }, {
      title: '[少年游]西湖3日游',
      acount: '10001',
      time: '2011-11-12',
      time2: '2011-12-20',
      day: '2',
      peopleNumber: '8',
    }, {
      title: '[少年游]西湖3日游',
      acount: '10001',
      time: '2011-11-12',
      time2: '2011-12-20',
      day: '2',
      peopleNumber: '8',
    }, {
      title: '[少年游]西湖3日游',
      acount: '10001',
      time: '2011-11-12',
      time2: '2011-12-20',
      day: '2',
      peopleNumber: '8',
    }, {
      title: '[少年游]西湖3日游',
      acount: '10001',
      time: '2011-11-12',
      time2: '2011-12-20',
      day: '2',
      peopleNumber: '8',
    }]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
      title: options.name
    })
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
  }
})