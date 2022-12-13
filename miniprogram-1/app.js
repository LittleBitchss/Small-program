// app.js
let utils = require('./utils/utils')
let request = require('./request/request')
App({
  domain: "https://qunyan.canancn.com/assets/applet",
  ...utils,
  ...request,
  globalData: {
    StatusBar: "",
    userInfo: "",
    aData: {
      show: false
    },
  },
  onLaunch() {
    // 下载字体
    wx.loadFontFace({
      family: 'Bold',
      global: true, //是否全局生效
      source: 'url(' + this.domain + '/fonts/SourceHanSansCN-Bold.otf)',
      fail(res) {
        console.log(res);
      }
    })
    wx.loadFontFace({
      family: 'ExtraLight',
      global: true, //是否全局生效
      source: 'url(' + this.domain + '/fonts/SourceHanSansCN-ExtraLight.otf)',
      fail(res) {
        console.log(res);
      }
    })
    wx.loadFontFace({
      family: 'Light',
      global: true, //是否全局生效
      source: 'url(' + this.domain + '/fonts/SourceHanSansCN-Light.otf)',
      fail(res) {
        console.log(res);
      }
    })
    wx.loadFontFace({
      family: 'Medium',
      global: true, //是否全局生效
      source: 'url(' + this.domain + '/fonts/SourceHanSansCN-Medium.otf)',
      fail(res) {
        console.log(res);
      }
    })
    wx.loadFontFace({
      family: 'Normal',
      global: true, //是否全局生效
      source: 'url(' + this.domain + '/fonts/SourceHanSansCN-Normal.otf)',
      fail(res) {
        console.log(res);
      }
    })
    wx.loadFontFace({
      family: 'Regular',
      global: true, //是否全局生效
      source: 'url(' + this.domain + '/fonts/SourceHanSansCN-Regular.otf)',
      fail(res) {
        console.log(res);
      }
    })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
})
// phoneClick: function (event) {
//   wx.makePhoneCall({
//     phoneNumber: this.data.phone,
//     success() {},
//     fail() {}
//   })
// },