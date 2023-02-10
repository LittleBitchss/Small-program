// fourth/pages/chef_safety/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    domain: app.domain + "/img/chefs/",
    active1: "active",
    active2: "",
    isShow: 1,
    show: false,
    isAssure: "",

    imgArr: [1, 2, 3],
    isShows: false,
    disabled1: true,
    anima: "",
    countdown: "(还须阅览5秒)",
    btnColor: "",
    isCheck1: 0,
    isCheck2: 0,
    flag: 0
  },
  coverDetails() {
    this.setData({
      show: true
    })
    wx.setNavigationBarTitle({
      title: '保障详情',
    })
  },
  eventhandle() {
    wx.setNavigationBarTitle({
      title: '厨师到家安全组合险',
    })
  },
  close() {
    this.setData({
      show: false
    })
  },
  // 协议
  openNotice(e) {
    var item = e.currentTarget.dataset.item
    var i = 5
    var timing;
    if (item == 1) {
      this.setData({
        isShows: true,
        anima: "down",
        isCheck1: 1,
      })
    } else if (item == 2) {
      this.setData({
        isShows: true,
        anima: "down",
        isCheck2: 1,
      })
    }
    timing = setInterval(() => {
      i--
      this.setData({
        countdown: "(还须阅览" + i + "秒)",
      })
      if (i < 1) {
        this.setData({
          countdown: "",
          disabled1: false,
          btnColor: "bttns"
        })
        clearInterval(timing)
      }
    }, 1000)
  },
  closeNotice() {
    if (this.data.isCheck1 == 1) {
      this.setData({
        anima: "up",
        disabled1: true,
        isCheck1: 2,
      })
    } else if (this.data.isCheck2 == 1) {
      this.setData({
        anima: "up",
        disabled1: true,
        isCheck2: 2,
      })
    }
    setTimeout(() => {
      this.setData({
        countdown: "(还须阅览180秒)",
        isShows: false,
        btnColor: ""
      })
    }, 600)
  },
  // 投保
  insure() {
    let pages = getCurrentPages();
    let prePage = pages[pages.length - 2];
    prePage.setData({
      active1: "",
      active2: "active",
      bdColor1: "",
      bdColor2: "bdColor",
      m_insurance: 1,
      m_insurance_count: 10,
      checked1: false,
      checked2: true,
    })
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '厨师到家安全组合险',
    })
    // this.setData({
    //   m_id: options.m_id,
    //   mi_id: options.mi_id,
    //   m_phone: options.m_phone,
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    if (this.data.flag) {
      let pages = getCurrentPages(); // 当前页面
      let beforePage = pages[pages.length - 4]; //前一个页面
      let myComponent = beforePage.selectComponent('#myComponent')
      myComponent.aaa();
    }

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})