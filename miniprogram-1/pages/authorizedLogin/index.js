// pages/authorizedLogin/index.js
const app = getApp()
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    domain: app.domain + "/img/index/",
  },
  onLoad: function () {
    // 查看是否授权
    wx.checkSession({
      success: function (res) {
        if (wx.getStorageSync('userInfo').token) {
          wx.switchTab({
            url: "/pages/index/index"
          })
        }
      },
      fail: function (res) {

      }
    })
    wx.setNavigationBarTitle({
      title: '授权登录',
    })
  },

  bindGetUserInfo: function (res) {
    var userInfo = {}
    wx.showModal({
      title: '提示',
      content: '确定是否授权',
      showCancel: '取消',
      confirmText: '确定',
      success: function (res) {
        wx.showLoading({
          title: '加载中',
        })
        if (res.confirm) {
          wx.login({
            success: res => {
              try {
                app.post('/wx/getWxLoginInfo', {
                  appid: "wx5484c680eaccf84e",
                  code: res.code
                }).then(res => {
                  if (res.statusCode == 200) {
                    userInfo.openid = res.data.openid
                    app.post('/login/appletLogin', {
                      au_openid: userInfo.openid,
                      au_nick_name: userInfo.nickName
                    }).then(res => {
                      if (res.data.status == 1) {
                        userInfo.token = res.data.data.token
                        userInfo.user_id = res.data.data.user_id
                        userInfo.role = res.data.data.role
                        userInfo.card = res.data.data.card
                        userInfo.publish = res.data.data.publish
                        userInfo.rc_id = res.data.data.rc_id
                        userInfo.isLogin = 1
                        wx.setStorageSync('userInfo', userInfo) //存储用户信息
                        wx.hideLoading()
                        wx.showToast({
                          title: "授权成功",
                          icon: 'success',
                          duration: 1000 //持续的时间
                        })
                        setTimeout(() => {
                          wx.switchTab({
                            url: "/pages/index/index"
                          })
                        }, 1000)
                      }
                    })
                  }
                })
              } catch {
                wx.showToast({
                  title: "网络不稳定~",
                  icon: 'error',
                  duration: 1000 //持续的时间
                })
              }
            },
            fail:res => {
            },
          });
        }
      }
    });

  }
})