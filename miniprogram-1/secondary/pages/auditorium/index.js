// secondary/pages/auditorium/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a_id:0,
    info:{},
    show:false,
    isShow:1,
    isShows:1
  },
  openMask(){
    this.setData({
      show:true
    })
    wx.setNavigationBarTitle({
      title: '大厅预订',
    })
  },
  uncheck(e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      ao_id: index,
      isOpen: 'true',
      isShows: 2
    })
    // try {
    //   app.post('/auditorium/getAppointment', {
    //     ao_id: this.data.hallDetails.office[index].ao_id
    //   }).then(res => {
    //     if (res.data.status == 1) {
    //       var str = ''
    //       res.data.data.forEach(i => {
    //         str += i.date
    //       })
    //       this.setData({
    //         lockday: str
    //       })
    //     }
    //   })
    // } catch {
    //   wx.showToast({
    //     title: '网络不稳定~',
    //     icon: 'error',
    //     duration: 1000 //持续的时间
    //   })
    // }
    // if (this.data.hallDetails.office[index].selectDays != undefined && this.data.hallDetails.office[index].selectDays.length != 0) {
    //   this.setData({
    //     selectDays: this.data.hallDetails.office[index].selectDays,
    //     selected: this.data.hallDetails.office[index].selectDays
    //   })
    // } else {
    //   this.setData({
    //     selectedDays: [],
    //     selected: []
    //   })
    // }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '礼堂详情',
    })
    this.setData({
      a_id: options.a_id
    })
    app.post('/comm/getAuditorium', {
      a_id:this.data.a_id
    }).then(res => {
      console.log(res);
      if (res.data.status == 1) {
        console.log(res.data.data);
        res.data.data.a_scroll_picture=res.data.data.a_scroll_picture.split(',')
        res.data.data.office.forEach(i=>{
          i.ao_border = ''
        })
        this.setData({
          info: res.data.data
        })
      }else{
        wx.showToast({
          title: '网络不稳定~',
          icon: 'error',
          duration: 1000 //持续的时间
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