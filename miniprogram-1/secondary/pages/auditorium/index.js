// secondary/pages/auditorium/index.js
const app = getApp()
var utils = require('../../../utils/utils')
import Dialog from '@vant/weapp/dialog/dialog';
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
    offices: [],
    office: [],
    show: false,
    shows: false,
    index: 0,
    // defaultDate: '',
    selected: [],
    selectDays: [],
    lockday: '',
    // type: 'single',
    hall: '',
    date: '',
  },
  openMask() {
    wx.setNavigationBarTitle({
      title: '大厅预订',
    })
    this.setData({
      show: true,
      office: this.data.offices
    })
  },
  onDisplay(e) {
    var index = e.currentTarget.dataset.index
    var office = JSON.parse(JSON.stringify(this.data.office))
    office.forEach(i => {
      i.ao_border = ''
    })
    office[index].ao_border = true
    this.setData({
      office: office,
      shows: true,
      index: index
    })
    var setAddr = wx.getStorageSync('setAddr')
    var calendar = this.selectComponent("#calendar");
    if(setAddr){
      // var auditorium = setAddr.find(i => i.a_id == this.data.a_id)
      if (office[index].ao_flag) {
        calendar.setData({
          selectDays: setAddr.a_days
        })
        this.setData({
          selected: setAddr.a_days,
          selectDays: setAddr.a_days
        })
      } else {
        calendar.clear()
      }
    }else{
      var days = wx.getStorageSync('days')
      if (office[index].ao_flag) {
        calendar.setData({
          selectDays: days
        })
        this.setData({
          selected: days,
          selectDays: days
        })
      } else {
        calendar.clear()
      }
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
    var selectDays = JSON.parse(JSON.stringify(this.data.selectDays))
    selectDays = selectDays.sort()
    if (selectDays[0] == entryInfo.m_start_date && selectDays[selectDays.length - 1] == entryInfo.m_end_date) {
      var office = JSON.parse(JSON.stringify(this.data.office))
      office[this.data.index].ao_flag = true
      office[this.data.index].ao_border = ''
      office[this.data.index].selectDays = selectDays
      wx.setStorageSync('days', selectDays)
      this.setData({
        office: office,
        shows: false,
        selected: [],
        selectDays: []
      })
    } else if (selectDays.length == 0) {
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
  onDel(){
    var office = JSON.parse(JSON.stringify(this.data.office))
    office[this.data.index].ao_flag = false
    office[this.data.index].ao_border = ''
    office[this.data.index].selectDays = []
    this.setData({
      office:office,
      shows:false
    })
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
    var setAddr = wx.getStorageSync('setAddr')
    if(setAddr&&this.data.a_id!=setAddr.a_id){
      wx.showToast({
        title: '已预订大礼堂',
        icon: 'error',
        duration: 1000 //持续的时间
      })
    }else{
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
        if (i.selectDays&&i.selectDays.length != 0) {
          obj.a_days = i.selectDays
        }
      })
      if (hall.indexOf('、') != -1) {
        hall = hall.slice(0, hall.length - 1)
      }
      this.setData({
        auditorium: obj,
        offices: this.data.office,
        hall: hall?hall:'请选择大厅',
        date: obj.a_days.length?obj.a_days:'',
        show: false
      })
      if(this.data.auditorium.office.length){
        // if (setAddr&&setAddr.length != 0) {
        //   var index = setAddr.findIndex(i => i.a_id == this.data.auditorium.a_id)
        //   if (index != -1) {
        //     setAddr[index] = this.data.auditorium
        //   } else {
        //     setAddr.push(this.data.auditorium)
        //   }
        // } else {
        //   setAddr = [this.data.auditorium]
        // }
        wx.setStorageSync('setAddr', this.data.auditorium)
        wx.showToast({
          title: '预订成功',
          icon: 'success',
          duration: 1000 //持续的时间
        })
      }else{
        // if(setAddr.length=1){
          wx.removeStorageSync('setAddr')
        // }else{
        //   var index = setAddr.findIndex(i => i.a_id == this.data.auditorium.a_id)
        //   setAddr.splice(index,1)
        // }
      }
      var pages = getCurrentPages();
      var beforePage = pages[pages.length - 2];
      var setAddr = beforePage.selectComponent("#setAddr");
      setAddr.getAuditoriumList()
    }
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
          office: res.data.data.office,
          offices: res.data.data.office
        })
        var setAddr = wx.getStorageSync('setAddr')
        var offices = JSON.parse(JSON.stringify(this.data.offices))
        // if (setAddr && setAddr.length != 0) {
          // var auditorium = setAddr.find(i => i.a_id == options.a_id)
          if (setAddr.a_id==options.a_id) {
            var hall = ''
            setAddr.office.forEach(i => {
              hall += i.ao_name + '、'
              offices.forEach(j => {
                if (i.ao_id == j.ao_id) {
                  j.ao_flag = true
                  j.selectDays = setAddr.a_days
                }
              })
            })
            if (hall.indexOf('、') != -1) {
              hall = hall.slice(0, hall.length - 1)
            }
            this.setData({
              auditorium: setAddr,
              offices: offices,
              date: setAddr.a_days,
              hall: hall
            })
          }
        // }
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
    wx.removeStorageSync('days')
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