// components/user_orderAddre/user_orderAddre.js
const utils = require("../../utils/utils")
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    auditorium: Object,
    basics: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    domain: app.domain + "/img/chef/",
    show: 1,
    province: [],
    provinceValue: "",
    city: [],
    cityValue: "",
    area: [],
    areaValue: "",
    street: [],
    streetValue: "",
    village: [],
    villageValue: "",
    value1: "",
    cover: "",
    a_name: "",
    address: "",
    introduce: '',
    contacts: '',
    phone: '',
    swipers: [],
    hall: '',
    date: '',
    m_auditorium_id: "",
    m_ao_id: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getDatess(days, dayss) {
      var daysInMillis = 86400000
      dayss = dayss * daysInMillis
      var start_num = new Date(days.replace(/-/g, "/"))
      var dat = start_num.getTime() + dayss
      var day = utils.formatDate(new Date(dat))
      return day
    },
    findObj(Arr, j) {
      var a = {}
      Arr.forEach((i) => {
        if (i.code == j) {
          a = i
        }
      })
      return a
    }
  },
  lifetimes: {
    attached() {
      wx.showLoading({
        title: '加载中',
      })
      if (this.data.auditorium.office == undefined) {
        try {
          app.post('/region/getProvince', {
            province_code: 0
          }).then(res => {
            if (res.data.status == 1) {
              wx.setStorageSync('province', res.data.data)
              this.setData({
                province: res.data.data
              })
            }
          }).then(res => {
            app.post('/region/getCity', {
              province_code: this.data.basics.m_province
            }).then(res => {
              if (res.data.status == 1) {
                wx.setStorageSync('city', res.data.data)
                this.setData({
                  city: res.data.data
                })
              }
            }).then(res => {
              app.post('/region/getAreas', {
                city_code: this.data.basics.m_city
              }).then(res => {
                if (res.data.status == 1) {
                  wx.setStorageSync('area', res.data.data)
                  this.setData({
                    area: res.data.data
                  })
                }
              }).then(res => {
                app.post('/region/getStreets', {
                  area_code: this.data.basics.m_area
                }).then(res => {
                  if (res.data.status == 1) {
                    wx.setStorageSync('street', res.data.data)
                    this.setData({
                      street: res.data.data
                    })
                  }
                }).then(res => {
                  app.post('/region/getVillage', {
                    street_code: this.data.basics.m_street
                  }).then(res => {
                    if (res.data.status == 1) {
                      wx.setStorageSync('village', res.data.data)
                      this.setData({
                        village: res.data.data
                      })
                    }
                  }).then(res => {
                    this.setData({
                      fontColor1: "fontColor",
                      fontColor2: "fontColor",
                      fontColor3: "fontColor",
                      fontColor4: "fontColor",
                      fontColor5: "fontColor",
                      provinceValue: this.findObj(wx.getStorageSync('province'), this.data.basics.m_province).name,
                      cityValue: this.findObj(wx.getStorageSync('city'), this.data.basics.m_city).name,
                      areaValue: this.findObj(wx.getStorageSync('area'), this.data.basics.m_area).name,
                      streetValue: this.findObj(wx.getStorageSync('street'), this.data.basics.m_street).name,
                      villageValue: this.findObj(wx.getStorageSync('village'), this.data.basics.m_village).name,
                      value1: this.data.basics.m_address
                    })
                    wx.hideLoading()
                  })
                })
              })
            })
          })
        } catch {
          wx.showToast({
            title: '网络不稳定~',
            icon: 'error',
            duration: 1000 //持续的时间
          })
        }
      } else {
        var hall = ""
        this.data.auditorium.office.forEach(i => {
          hall += i.ao_name + '、'
        })
        if (hall.indexOf('、') != -1) {
          hall = hall.slice(0, hall.length - 1)
        }
        this.setData({
          show: 2,
          cover: this.data.auditorium.a_cover_photo,
          a_name: this.data.auditorium.a_name,
          address: this.data.auditorium.a_address,
          introduce: this.data.auditorium.a_introduce,
          contacts: this.data.auditorium.a_contacts,
          phone: this.data.auditorium.a_phone,
          swipers: this.data.auditorium.a_scroll_picture.split(","),
          hall: hall,
          date: [this.data.auditorium.m_start_date, this.data.auditorium.m_end_date],
        })
        wx.hideLoading()
      }
    }
  }
})