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
    office: [],
    show: false,
    shows: false,
    // defaultDate: '',
    selected:[],
    selectDays:[],
    // date: '',
    // type: 'single',
    

    isShow: 1,
    isShows: 1
  },
  openMask() {
    this.setData({
      show: true
    })
    wx.setNavigationBarTitle({
      title: '大厅预订',
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
      shows: true
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
  getdate(e) {
    this.setData({
      selectDays: e.detail.selectDays
    })
  },
  cmfclick() {
    var entryInfo = wx.getStorageSync('entryInfo')
    // var aa = utils.getTimeLastWeeks(entryInfo.m_start_date, entryInfo.m_holding_days - 1)
    this.data.selectDays = this.data.selectDays.sort()
    if (this.data.selectDays[0] == entryInfo.m_start_date && this.data.selectDays[this.data.selectDays.length - 1] == entryInfo.m_end_date) {
      var hallDetails = JSON.parse(JSON.stringify(this.data.hallDetails))
      hallDetails.office[this.data.ao_id].flag = true
      hallDetails.office[this.data.ao_id].selectDays = this.data.selectDays
      this.setData({
        hallDetails: hallDetails,
        isShows: 1,
        selectDays: this.data.selectDays
      })
    } else if (this.data.selectDays.length == 0) {
      var hallDetails = JSON.parse(JSON.stringify(this.data.hallDetails))
      hallDetails.office[this.data.ao_id].flag = false
      hallDetails.office[this.data.ao_id].selectDays = []
      this.setData({
        hallDetails: hallDetails,
        isShows: 1,
        selectDays: []
      })
    } else {
      wx.showToast({
        title: '天数日期不匹配',
        icon: 'error',
        duration: 1000 //持续的时间
      })
    }
  },
  onClose() {
    this.setData({
      shows: false
    });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  },
  onConfirm(event) {
    var entryInfo = wx.getStorageSync('entryInfo')
    if (entryInfo.m_start_date == entryInfo.m_end_date) {
      this.setData({
        date: this.formatDate(event.detail),
      });
      if (this.data.date != entryInfo.m_start_date) {
        this.setData({
          date: '',
        })
        Toast.fail('日期选择不正确');
      } else {
        this.setData({
          show: false,
        })
      }
    } else {
      const [start, end] = event.detail;
      this.setData({
        show: false,
        date: `${this.formatDate(start)} - ${this.formatDate(end)}`,
      });
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
    var entryInfo = wx.getStorageSync('entryInfo')
    let start_date = new Date(entryInfo.m_start_date).getTime()
    let end_date = new Date(entryInfo.m_end_date).getTime()
    var selected = []
    console.log(utils.formatDate(new Date(end_date)));
    if(end_date==start_date){
      selected[0]=entryInfo.m_start_date
    }else if(start_date+86400000==end_date){
      selected[0]=entryInfo.m_start_date
      selected[1]=entryInfo.end_date
    }else if(start_date+(86400000*2)==end_date){
      selected[0]=entryInfo.m_start_date
      selected[1]=utils.formatDate(start_date+86400000)
      selected[2]=entryInfo.end_date
    }else if(start_date+(86400000*3)==end_date){
      selected[0]=entryInfo.m_start_date
      selected[1]=utils.formatDate(start_date+86400000)
      selected[2]=utils.formatDate(start_date+(86400000*2))
      selected[3]=entryInfo.end_date
    }
    this.setData({
      
    })
    console.log(entryInfo.m_end_date);
    console.log();
    if(entryInfo.m_end_date==entryInfo.m_start_date)
    if((new Date(entryInfo.m_end_date).getTime()-new Date(entryInfo.m_start_date).getTime())/86400000>1){

    }
    
    // new Date(entryInfo.m_end_date).getTime()
    app.post('/comm/getAuditorium', {
      a_id: this.data.a_id
    }).then(res => {
      if (res.data.status == 1) {
        console.log(res.data.data);
        res.data.data.a_scroll_picture = res.data.data.a_scroll_picture.split(',')
        res.data.data.office.forEach(i => {
          i.ao_border = ''
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