// secondary/pages/publishPage/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    value2: '',
    value2Num: '',
    value3: '',
    areaWords: 0,
    array: [],
    arrays: [],
    value3s: '',
    active1: '',
    active2: '',
    active3: '',
    id: 0,
    show: false
  },
  inputs(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      this.setData({
        value1: e.detail.value
      })
      if (this.data.value1 && this.data.value2 && this.data.value3s) {
        this.setData({
          active1: 'active',
        })
      } else {
        this.setData({
          active1: '',
        })
      }
    } else if (item == 2) {
      this.setData({
        value3: e.detail.value,
        areaWords: e.detail.cursor
      })
      if (this.data.value3) {
        this.setData({
          active3: 'active'
        })
      } else {
        this.setData({
          active3: ''
        })
      }
    }
  },
  bindPickerChange(e) {
    this.setData({
      value2: this.data.arrays[e.detail.value].p_name,
      value2Num: this.data.arrays[e.detail.value].p_id,
      active2: 'actives'
    })
    if (this.data.value1 && this.data.value2 && this.data.value3s) {
      this.setData({
        active1: 'active',
      })
    } else {
      this.setData({
        active1: '',
      })
    }
  },
  next() {
    if (this.data.value1 != '' && this.data.value3s != '') {
      app.post('/Recruit/publish', {
        token: wx.getStorageSync('userInfo').token,
        rc_id: wx.getStorageSync('userInfo').rc_id,
        id: this.data.id,
        title: this.data.value1,
        position_name: this.data.value2Num,
        job_description: this.data.value3s
      }).then((res) => {
        if (res.data.status == 1) {
          this.setData({
            id: res.data.data
          })
          wx.navigateTo({
            url: '/tertiary/pages/publishPageTwe/index?title=' + this.data.value1 + '&jobName=' + this.data.value2Num + '&jobDescribe=' + this.data.value3s + '&id=' + this.data.id
          })
        }
      })
    }
  },
  openMask() {
    this.setData({
      show: true,
      value3: this.data.value3s
    })
  },
  save() {
    if (this.data.value3) {
      this.setData({
        value3s: this.data.value3,
        show: false
      })
      if (this.data.value3s) {
        this.setData({
          active3: 'actives',
        })
      }
      if (this.data.value1 && this.data.value2 && this.data.value3s) {
        this.setData({
          active1: 'active',
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '发布社招',
    })
    var arr = []
    wx.getStorageSync('position').forEach(i => {
      arr.push(i.p_name)
    })
    this.setData({
      array: arr,
      arrays: wx.getStorageSync('position')
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