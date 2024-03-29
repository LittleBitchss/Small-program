// secondary/pages/mine_setName/index.js
const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:'',
    avatarUrl: defaultAvatarUrl,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '设置头像和昵称',
    })
    app.post('/comm/getUserInfo', {
      token: wx.getStorageSync('userInfo').token
    }).then(res => {
      this.setData({
        avatarUrl: res.data.data.pic_path,
        nickName: res.data.data.name
      })
    })
  },
  inputs(e){
    this.setData({
      nickName:e.detail.value
    })
  },
  formsubmit(e){
    this.setData({
      nickName:e.detail.value.nickname
    })
    app.post('/comm/setUserInfo', {
      token: wx.getStorageSync('userInfo').token,
      name: this.data.nickName,
      pic_path: this.data.avatarUrl
    }).then(res => {
      wx.navigateBack({
        delta: 1
      })
      var pages = getCurrentPages();
      var beforePage = pages[pages.length - 2];
      beforePage.getUserInfo()
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
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