// secondary/pages/auditorium/index.js
const app = getApp()
var utils = require('../../../utils/utils')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a_id: 0,
    a_cover_photo: '',
    a_name: '',
    a_address: '',
    a_introduce: '',
    a_contacts: '',
    a_phone: '',
    a_scroll_picture: [],
    auditorium: '',
    office: [],
    show: false,
    shows: false,
    index: 0,
    // defaultDate: '',
    selected: [],
    selectDays: [],
    lockday:'',
    // type: 'single',
    hall: '',
    date: '',
  },
  openMask() {
    wx.setNavigationBarTitle({
      title: '大厅预订',
    })
    var office = JSON.parse(JSON.stringify(this.data.office))
    if (this.data.auditorium) {

    } else {
      office.forEach(i => {
        i.selectDays = []
        i.ao_flag = false
      })
    }
    this.setData({
      show: true,
      office: office
    })
  },
  onDisplay(e) {
    var index = e.currentTarget.dataset.index
    var office = JSON.parse(JSON.stringify(this.data.office))
    var calendar = this.selectComponent("#calendar");
    office.forEach(i => {
      i.ao_border = ''
    })
    office[index].ao_border = true
    this.setData({
      office: office,
      shows: true,
      index: index
    })
    if (office[index].ao_flag) {
      calendar.setData({
        selectDays: office[index].selectDays
      })
      this.setData({
        selected: office[index].selectDays,
        selectDays: office[index].selectDays,
      })
    } else {
      calendar.clear()
    }
    app.post('/auditorium/getAppointment', {
      ao_id: office[index].ao_id
    }).then(res => {
      if (res.data.status == 1) {
        var str = ''
        res.data.data.forEach(i => {
          str += i.date
        })
        this.setData({
          lockday: str
        })
      } else {
        wx.showToast({
          title: '网络不稳定~',
          icon: 'error',
          duration: 1000 //持续的时间
        })
      }
    })
  },
  getdate(e) {
    this.setData({
      selectDays: e.detail.selectDays
    })
  },
  cmfclick() {
    var entryInfo = wx.getStorageSync('entryInfo')
    this.data.selectDays = this.data.selectDays.sort()
    if (this.data.selectDays[0] == entryInfo.m_start_date && this.data.selectDays[this.data.selectDays.length - 1] == entryInfo.m_end_date) {
      var office = JSON.parse(JSON.stringify(this.data.office))
      office[this.data.index].ao_flag = true
      office[this.data.index].ao_border = ''
      office[this.data.index].selectDays = this.data.selectDays
      this.setData({
        office: office,
        shows: false,
        selected: [],
        selectDays: []
      })
    } else if (this.data.selectDays.length == 0) {
      wx.showToast({
        title: '请选择日期',
        icon: 'error',
        duration: 1000 //持续的时间
      })
    } else {
      wx.showToast({
        title: '日期不匹配',
        icon: 'error',
        duration: 1000 //持续的时间
      })
    }
  },
  onClose() {
    var office = JSON.parse(JSON.stringify(this.data.office))
    office.forEach(i => {
      i.ao_border = ''
    })
    this.setData({
      shows: false,
      office: office
    });
  },
  // formatDate(date) {
  //   date = new Date(date);
  //   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  // },
  // onConfirm(event) {
  //   var entryInfo = wx.getStorageSync('entryInfo')
  //   if (entryInfo.m_start_date == entryInfo.m_end_date) {
  //     this.setData({
  //       date: this.formatDate(event.detail),
  //     });
  //     if (this.data.date != entryInfo.m_start_date) {
  //       this.setData({
  //         date: '',
  //       })
  //       Toast.fail('日期选择不正确');
  //     } else {
  //       this.setData({
  //         show: false,
  //       })
  //     }
  //   } else {
  //     const [start, end] = event.detail;
  //     this.setData({
  //       show: false,
  //       date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
  //     });
  //   }
  // },
  reservationSave() {
    var obj = {
      a_id: this.data.a_id,
      m_ids: 2,
      a_days: [],
      office: []
    }
    var hall = ''
    this.data.office.forEach(i => {
      if (i.ao_flag) {
        obj.office.push({
          ao_id: i.ao_id,
          ao_name: i.ao_name
        })
        hall += i.ao_name + '、'
      }
      if (i.selectDays.length != 0) {
        obj.a_days = i.selectDays
      }
    })
    if (hall.indexOf('、') != -1) {
      hall = hall.slice(0, hall.length - 1)
    }
    this.setData({
      auditorium: obj,
      hall: hall,
      date: obj.a_days,
      show: false
    })
  },
  reservationSubmit() {
    var setAddr = wx.getStorageSync('setAddr')
    if (setAddr.length != 0) {
      setAddr.push(this.data.auditorium)
    } else {
      setAddr = [this.data.auditorium]
    }
    wx.setStorageSync('setAddr', setAddr)
    var pages = getCurrentPages();
    var beforePage = pages[pages.length - 2];
    var setAddr = beforePage.selectComponent("#setAddr");
    setAddr.getAuditoriumSelect()
    wx.navigateBack({
      delta: 1,
    })
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
    var entryInfo = wx.getStorageSync('entryInfo')
    //修改
    app.post('/comm/getAuditorium', {
      a_id: this.data.a_id
    }).then(res => {
      if (res.data.status == 1) {
        res.data.data.a_scroll_picture = res.data.data.a_scroll_picture.split(',')
        res.data.data.office.forEach(i => {
          i.ao_border = ''
          i.ao_flag = false
        })
        this.setData({
          a_cover_photo: res.data.data.a_cover_photo,
          a_name: res.data.data.a_name,
          a_address: res.data.data.a_address,
          a_introduce: res.data.data.a_introduce,
          a_contacts: res.data.data.a_contacts,
          a_phone: res.data.data.a_phone,
          a_scroll_picture: res.data.data.a_scroll_picture,
          office: res.data.data.office
        })
      } else {
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