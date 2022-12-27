// secondary/pages/talentInfo/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: '',
    month: '',
    info: {},
    education: [],
    position: [],
    r_id: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '简历信息',
    })
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    this.setData({
      r_id: options.r_id,
      year: year,
      month: month
    })
    app.post('/comm/getEducation').then(res => {
      if (res.data.status == 1) {
        this.setData({
          education: res.data.data
        })
      }
    })
    app.post('/comm/getPosition').then(res => {
      if (res.data.status == 1) {
        this.setData({
          position: res.data.data
        })
      }
    })
    app.post('/Recruit/showResume', {
      token: wx.getStorageSync('userInfo').token,
      r_id: this.data.r_id
    }).then(res => {
      if (res.data.status == 1) {
        res.data.data.r_age = this.data.month > res.data.data.r_born.slice(5, 7) ? this.data.year - res.data.data.r_born.slice(0, 4) + 1 : this.data.year - res.data.data.r_born.slice(0, 4)
        res.data.data.r_work = this.data.month > res.data.data.r_working_time.slice(5, 7) ? this.data.year - res.data.data.r_working_time.slice(0, 4) + 1 : this.data.year - res.data.data.r_working_time.slice(0, 4)
        this.setData({
          info: res.data.data
        })
      }
    })
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