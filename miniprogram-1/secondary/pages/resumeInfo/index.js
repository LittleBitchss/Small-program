// secondary/pages/resumeInfo/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: '',
    lists: [],
    education: [],
    show: false,
    info: {},
    position: [],
    id: '',
    rrr_id: '',
    sign:'',
    year: '',
    month: ''
  },
  getList() {
    var title = ''
    var obj = {
      token: wx.getStorageSync('userInfo').token,
      id: this.data.id,
    }
    if (this.data.item == 1) {
      title = '已收简历'
    } else if (this.data.item == 2) {
      obj.status = 0
      title = '未阅简历'
    } else if (this.data.item == 3) {
      obj.status = 1
      title = '已阅简历'
    } else if (this.data.item == 4) {
      obj.sign = 1
      title = '标记简历'
    }
    wx.setNavigationBarTitle({
      title: title,
    })
    app.post('/Recruit/resumeList', obj).then((res) => {
      if (res.data.status == 1) {
        console.log(res);
        res.data.data.forEach(i => {
          i.r_age = this.data.month > i.r_born.slice(5, 7) ? this.data.year - i.r_born.slice(0, 4) + 1 : this.data.year - i.r_born.slice(0, 4)
        })
        this.setData({
          lists: res.data.data
        })
      }
    })
  },
  openMask(e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      show: true,
      rrr_id: this.data.lists[index].rrr_id,
      sign: this.data.lists[index].sign,
    })
    wx.setNavigationBarTitle({
      title: '人才信息',
    })
    app.post('/Recruit/showResume', {
      token: wx.getStorageSync('userInfo').token,
      r_id: this.data.lists[index].rrr_id
    }).then(res => {
      if (res.data.status == 1) {
        res.data.data.r_age = this.data.month > res.data.data.r_born.slice(5, 7) ? this.data.year - res.data.data.r_born.slice(0, 4) + 1 : this.data.year - res.data.data.r_born.slice(0, 4)
        res.data.data.r_working_time = this.data.year - res.data.data.r_working_time.slice(0, 4)
        this.setData({
          info: res.data.data
        })
        app.post('/Recruit/setRead', {
          token: wx.getStorageSync('userInfo').token,
          id: this.data.lists[index].rrr_id,
          read_status: 1
        }).then(res => {
          if (res.data.status == 1) {
            this.getList()
            let pages = getCurrentPages()
            var recruitment = pages[pages.length - 2]
            if (recruitment.data.actives1) {
              recruitment.getJobList(1)
            } else if (recruitment.data.actives2) {
              recruitment.getJobList(0)
            } else if (recruitment.data.actives3) {
              recruitment.getJobList(2)
            }
          }
        })
      }
    })
  },
  callPhone() {
    wx.makePhoneCall({
      phoneNumber: this.data.info.r_mobile,
      fail: () => {}
    })
  },
  markResume() {
    var obj = {
      token: wx.getStorageSync('userInfo').token,
      id: this.data.rrr_id,
      sign: 1
    }
    if(this.data.sign){
      obj.sign=0
    }else{
      obj.sign=1
    }
    app.post('/Recruit/setSign', obj).then(res => {
      if (res.data.status == 1) {
        if(obj.sign){
          wx.showToast({
            title: '标记成功',
            icon: 'success',
            duration: 1000
          })
        }else{
          wx.showToast({
            title: '取消标记成功',
            icon: 'success',
            duration: 1000
          })
        }
        this.getList()
        let pages = getCurrentPages()
        var recruitment = pages[pages.length - 2]
        if (recruitment.data.actives1) {
          recruitment.getJobList(1)
        } else if (recruitment.data.actives2) {
          recruitment.getJobList(0)
        } else if (recruitment.data.actives3) {
          recruitment.getJobList(2)
        }
        this.setData({
          show:false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    this.setData({
      id: options.id,
      year: year,
      month: month,
      item: options.item
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
    this.getList()
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