var app = getApp()

Page({
    data: {
        input_id_cards: '',
        input_phone: '',
        input_code: '',
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
    },
    onReady: function () {
        // 生命周期函数--监听页面初次渲染完成
    },
    onShow: function () {
        // 生命周期函数--监听页面显示
    },
    onHide: function () {
        // 生命周期函数--监听页面隐藏
    },
    onUnload: function () {
        // 生命周期函数--监听页面卸载
    },
    onPullDownRefresh: function () {
        // 页面相关事件处理函数--监听用户下拉动作
    },
    onReachBottom: function () {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: 'title', // 分享标题
            desc: 'desc', // 分享描述
            path: 'path' // 分享路径
        }
    },

    inputIdCards: function (e) {
        var value = e.detail.value
        this.setData({
            input_id_cards: value
        })
    },

    inputPhone: function (e) {
        var value = e.detail.value
        this.setData({
            input_phone: value
        })
    },

    inputCode: function (e) {
        var value = e.detail.value
        this.setData({
            input_code: value
        })
    },

    getCodeEvent: function (e) {
        if (this.data.input_id_cards.length == 0) {
            wx.showModal({
                content: '请输入身份证号'
            })
            return
        }
        if (this.data.input_id_cards.length < 18) {
            wx.showModal({
                content: '请输入正确的身份证号'
            })
            return
        }
        if (this.data.input_phone.length == 0) {
            wx.showModal({
                content: '请输入手机号'
            })
            return
        }
        if (this.data.input_phone.length < 11) {
            wx.showModal({
                content: '请输入正确的手机号'
            })
            return
        }

        var data = {
            'idcard': this.data.input_id_cards,
            'mobile': this.data.input_phone,
        }
        app.doRequest("http://www.yangfuhai.com/api", data, function (data) {
            wx.showToast({
                title: '获取验证码成功！'
            })
            return
        })
    },

    loginEvent: function (e) {
        if (this.data.input_id_cards.length == 0) {
            wx.showModal({
                content: '请输入身份证号'
            })
            return
        }
        if (this.data.input_id_cards.length < 18) {
            wx.showModal({
                content: '请输入正确的身份证号'
            })
            return
        }
        if (this.data.input_phone.length == 0) {
            wx.showModal({
                content: '请输入手机号'
            })
            return
        }
        if (this.data.input_phone.length < 11) {
            wx.showModal({
                content: '请输入正确的手机号'
            })
            return
        }
        if (this.data.input_code.length == 0) {
            wx.showModal({
                content: '请输入手机号'
            })
            return
        }
        if (this.data.input_code.length < 6) {
            wx.showModal({
                content: '请输入正确的验证码'
            })
            return
        }
        
        var data = {
            'idcard': this.data.input_id_cards,
            'mobile': this.data.input_phone,
            'code': this.data.input_code,
        }

        app.doRequest("http://www.yangfuhai.com/api", data, function (data) {
            wx.showToast({
                title: '登录成功！'
            })
            wx.switchTab({
                url: '/pages/index/index'
            })
            return
        })
    }
})