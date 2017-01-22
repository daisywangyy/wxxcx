//index.js
//获取应用实例
var app = getApp()

var page = {
    callPhone: function () {
        wx.makePhoneCall({
            phoneNumber: '400-677-3000'
        })
    },
    gotoHelpCenter:function(){
        wx.navigateTo({
            url:'/pages/connectUs/helpCenter/helpCenter'
        })
    },
    gotoCallback :function(){
        wx.navigateTo({
            url:'/pages/connectUs/callback/callback'
        })
    }
}

Page(page)
