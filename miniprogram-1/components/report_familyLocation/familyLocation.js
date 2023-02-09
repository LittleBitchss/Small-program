// components/familyLocation/familyLocation.js
const utils = require("../../utils/utils")
const app = getApp()
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min');
const qqMapSdk = new QQMapWX({
  key: 'ABNBZ-GKPLS-FOAOJ-6HOP3-GAWZO-NNFDH'
});
// 引入插件安装器
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    img: app.domain + "/img/chef/ups.png",
    domain: app.domain + "/img/chef/",
    Family: app.domain + "/img/report/Family-active.png",
    hall: app.domain + "/img/report/hall.png",
    fontColor11: "",
    fontColor22: "fontColor",
    show: 1,
    province: [],
    provinceValue: "请选择所属省",
    province_code: "",
    province_show: false,
    bdColor11: "",
    fontColor1: "",

    city: [],
    cityValue: "请选择所属市",
    city_code: "",
    city_show: false,
    bdColor22: "",
    fontColor2: "",

    area: [],
    areaValue: "请选择所属区",
    area_code: "",
    area_show: false,
    bdColor33: "",
    fontColor3: "",

    street: [],
    streetValue: "请选择所属街道",
    street_code: "",
    street_show: false,
    bdColor44: "",
    fontColor4: "",

    village: [],
    villageValue: "请选择所属村庄",
    village_code: "",
    village_show: false,
    bdColor55: "",
    fontColor5: "",
    value1: "",
    value6: "",
    bdColor6: "",
    isFamily: 1,
    region: ["请选择", "区域"],
    regionCode: [],
    list:[],
    lists: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    taggle(e) {
      var item = e.currentTarget.dataset.item
      if (item == 1) {
        this.setData({
          Family: app.domain + "/img/report/Family-active.png",
          hall: app.domain + "/img/report/hall.png",
          fontColor11: "",
          fontColor22: "fontColor",
          show: 1,
          isFamily: 1
        })
      } else if (item == 2) {
        this.setData({
          Family: app.domain + "/img/report/Family.png",
          hall: app.domain + "/img/report/hall-active.png",
          fontColor11: "fontColor",
          fontColor22: "",
          show: 2,
          isFamily: 2
        })
      }
    },
    open(e) {
      var item = e.currentTarget.dataset.item
      if (item == 1) {
        this.setData({
          province_show: !this.data.province_show,
          city_show: false,
          area_show: false,
          street_code: false,
          village_show: false,
        })
      } else if (item == 2) {
        this.setData({
          city_show: !this.data.city_show,
          province_show: false,
          area_show: false,
          street_code: false,
          village_show: false,
        })
      } else if (item == 3) {
        this.setData({
          area_show: !this.data.area_show,
          province_show: false,
          city_show: false,
          street_show: false,
          village_show: false
        })
      } else if (item == 4) {
        this.setData({
          street_show: !this.data.street_show,
          province_show: false,
          city_show: false,
          area_show: false,
          village_show: false
        })
      } else if (item == 5) {
        this.setData({
          village_show: !this.data.village_show,
          province_show: false,
          city_show: false,
          area_show: false,
          street_show: false
        })
      }
    },
    close(e) {
      var item = e.currentTarget.dataset.item
      var index = e.currentTarget.dataset.index
      if (item == 1) {
        this.setData({
          provinceValue: this.data.province[index].name,
          province_code: this.data.province[index].code,
          province_show: false,
          fontColor1: "fontColor",
          city: [],
          area: [],
          street: [],
          village: [],
          city_code: "",
          area_code: "",
          street_code: "",
          village_code: "",
          cityValue: "请选择所属市",
          areaValue: "请选择所属区",
          streetValue: "请选择所属街道",
          villageValue: "请选择所属村庄",
          fontColor2: "",
          fontColor3: "",
          fontColor4: "",
          fontColor5: ""
        })
        try {
          app.post('/region/getCity', {
            province_code: this.data.province_code
          }).then(res => {
            if (res.data.status == 1) {
              wx.setStorageSync('city', res.data.data)
              this.setData({
                city: res.data.data
              })
            }
          })
        } catch {
          wx.showToast({
            title: '网络不稳定~',
            icon: 'error',
            duration: 1000 //持续的时间
          })
        }
      } else if (item == 2) {
        this.setData({
          cityValue: this.data.city[index].name,
          city_code: this.data.city[index].code,
          city_show: false,
          fontColor2: "fontColor",
          area: [],
          street: [],
          village: [],
          area_code: "",
          street_code: "",
          village_code: "",
          areaValue: "请选择所属区",
          streetValue: "请选择所属街道",
          villageValue: "请选择所属村庄",
          fontColor3: "",
          fontColor4: "",
          fontColor5: ""
        })
        try {
          app.post('/region/getAreas', {
            city_code: this.data.city_code
          }).then(res => {
            if (res.data.status == 1) {
              wx.setStorageSync('area', res.data.data)
              this.setData({
                area: res.data.data,
              })
            }
          })
        } catch {
          wx.showToast({
            title: '网络不稳定~',
            icon: 'error',
            duration: 1000 //持续的时间
          })
        }
      } else if (item == 3) {
        this.setData({
          areaValue: this.data.area[index].name,
          area_code: this.data.area[index].code,
          area_show: false,
          fontColor3: "fontColor",
          street: [],
          village: [],
          street_code: "",
          village_code: "",
          streetValue: "请选择所属街道",
          villageValue: "请选择所属村庄",
          fontColor4: "",
          fontColor5: ""
        })
        try {
          app.post('/region/getStreets', {
            area_code: this.data.area_code
          }).then(res => {
            if (res.data.status == 1) {
              wx.setStorageSync('street', res.data.data)
              this.setData({
                street: res.data.data,
              })
            }
          })
        } catch {
          wx.showToast({
            title: '网络不稳定~',
            icon: 'error',
            duration: 1000 //持续的时间
          })
        }
      } else if (item == 4) {
        this.setData({
          streetValue: this.data.street[index].name,
          street_code: this.data.street[index].code,
          street_show: false,
          fontColor4: "fontColor",
          villageValue: "请选择所属村庄",
          village: [],
          village_code: "",
          fontColor5: ""
        })
        try {
          app.post('/region/getVillage', {
            street_code: this.data.street_code
          }).then(res => {
            if (res.data.status == 1) {
              wx.setStorageSync('village', res.data.data)
              this.setData({
                village: res.data.data
              })
            }
          })
        } catch {
          wx.showToast({
            title: '网络不稳定~',
            icon: 'error',
            duration: 1000 //持续的时间
          })
        }
      } else if (item == 5) {
        this.setData({
          villageValue: this.data.village[index].name,
          village_code: this.data.village[index].code,
          village_show: false,
          fontColor5: "fontColor"
        })
      }
    },
    closes() {
      if (this.data.provinceValue != "请选择所属省") {
        this.setData({
          province_show: false
        })
      } else {
        this.setData({
          province_show: false,
          fontColor1: "",
        })
      }
      if (this.data.cityValue != "请选择所属市") {
        this.setData({
          city_show: false
        })
      } else {
        this.setData({
          city_show: false,
          fontColor2: "",
        })
      }
      if (this.data.areaValue != "请选择所属区") {
        this.setData({
          area_show: false
        })
      } else {
        this.setData({
          area_show: false,
          fontColor3: "",
        })
      }
      if (this.data.streetValue != "请选择所属街道") {
        this.setData({
          street_show: false
        })
      } else {
        this.setData({
          street_show: false,
          fontColor4: "",
        })
      }
      if (this.data.villageValue != "请选择所属村庄") {
        this.setData({
          village_show: false
        })
      } else {
        this.setData({
          village_show: false,
          fontColor5: "",
        })
      }
    },
    focus(e) {
      var index = e.currentTarget.dataset.index
      if (index == 6) {
        this.setData({
          bdColor6: "bdColor"
        })
      }
    },
    inputs(e) {
      var index = e.currentTarget.dataset.index
      var valur = e.detail.value
      if (index == 6) {
        this.setData({
          value6: valur
        })
      } else if (index == 1) {
        this.setData({
          value1: valur
        })
      }
    },
    blur(e) {
      var index = e.currentTarget.dataset.index
      if (index == 6) {
        if (this.data.value6.indexOf(" ") != -1 || !this.data.value6) {
          this.setData({
            bdColor6: "",
            value6: ""
          })
        } else {
          this.setData({
            bdColor6: ""
          })
        }
      }
    },
    nextStep2() {
      var family = {
        m_ids: this.data.isFamily,
        m_province: this.data.province_code,
        m_city: this.data.city_code,
        m_area: this.data.area_code,
        m_street: this.data.street_code,
        m_village: this.data.village_code,
        m_address: this.data.value6,
        m_auditorium_id: 0,
        m_ao_id: 0,
      }
      var addres = this.data.provinceValue + this.data.areaValue + this.data.areaValue + this.data.streetValue + this.data.value6
      if (this.data.isFamily == 1) {
        var that = this
        qqMapSdk.geocoder({
          //获取表单传入地址
          address: addres, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
          success: function (res) { //成功后的回调
            var latitude = res.result.location.lat;
            var longitude = res.result.location.lng;
            family.m_longitude = longitude
            family.m_latitude = latitude
            if (family.m_province != "" && family.m_city != "" && family.m_area != "" && family.m_street != "" && family.m_village != "" && family.m_address != "") {
              wx.setStorageSync('setAddr', family)
              that.triggerEvent("nextStep2", {
                go: 3
              })
              wx.showToast({
                title: '已选择自家举办',
                icon: 'success',
                duration: 1000 //持续的时间
              })
            } else {
              wx.showToast({
                title: '请完善自家信息',
                icon: 'error',
                duration: 1000 //持续的时间
              })
            }
          },
          fail: function (res) {
            wx.showToast({
              title: '地址错误',
              icon: 'error',
              duration: 1000 //持续的时间
            })
          }
        })
      } else if (this.data.isFamily == 2) {
        var setAddr = wx.getStorageSync('setAddr')
        if (setAddr) {
          this.triggerEvent("nextStep2", {
            go: 3
          })
          wx.showToast({
            title: '已选择大礼堂',
            icon: 'success',
            duration: 1000 //持续的时间
          })
        } else {
          wx.showToast({
            title: '请预定礼堂',
            icon: 'error',
            duration: 1000 //持续的时间
          })
        }
      }
    },
    previous2() {
      this.triggerEvent("previous2", {
        go: 1
      })
    },
    bindRegionChange: function (e) {
      this.setData({
        region: e.detail.value,
        regionCode: e.detail.code,
      })
      this.getAuditoriumList()
    },
    getAuditoriumList(filter,page) {
      var setAddr = wx.getStorageSync('setAddr')
      // var selArr = []
      // var sel_id = ''
      // if (setAddr) {
      //   setAddr.forEach(i=>{
      //     sel_id+=i.a_id+','
      //     selArr.push(i.a_id)
      //   })
      //   sel_id=sel_id?sel_id.slice(0,sel_id.length-1):''
      // }
      var a = {
        province: this.data.regionCode[0].slice(0, 2),
        city: this.data.regionCode[1].slice(0, 4),
        area: this.data.regionCode[2],
        street: this.data.regionCode[3] || 0,
        village: this.data.regionCode[4] || 0,
      }
      if(filter){
        a.filter = filter 
      }
      if(page){
        a.page = page 
      }
      if(setAddr && setAddr.m_ids==2){
        a.sel_id = setAddr.a_id
      }
      app.post('/comm/getAuditoriumList', a).then(res => {
        if (res.data.status == 1) {
          res.data.data.rows.forEach(i=>{
            // selArr.forEach(j=>{
              if(i.a_id==setAddr.a_id){
                i.a_mark=true
              }
            // })
          })
          console.log(res.data.data.rows);
          this.setData({
            lists: res.data.data.rows
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
    search() {
      if (this.data.regionCode.length != 0) {
        this.getAuditoriumList(this.data.value1)
      }
    },
    findObj(Arr, j) {
      var a = {}
      Arr.forEach((i) => {
        if (i.code == j) {
          a = i
        }
      })
      return a
    },
  },
  lifetimes: {
    attached() {
      var setAddr = wx.getStorageSync('setAddr')
      if (setAddr && setAddr.m_ids == 1) {
        this.setData({
          fontColor1: "fontColor",
          fontColor2: "fontColor",
          fontColor3: "fontColor",
          fontColor4: "fontColor",
          fontColor5: "fontColor",
          province_code: setAddr.m_province,
          city_code: setAddr.m_city,
          area_code: setAddr.m_area,
          street_code: setAddr.m_street,
          village_code: setAddr.m_village,
          province: wx.getStorageSync('province'),
          city: wx.getStorageSync('city'),
          area: wx.getStorageSync('area'),
          street: wx.getStorageSync('street'),
          village: wx.getStorageSync('village'),
          provinceValue: this.findObj(wx.getStorageSync('province'), setAddr.m_province).name,
          cityValue: this.findObj(wx.getStorageSync('city'), setAddr.m_city).name,
          areaValue: this.findObj(wx.getStorageSync('area'), setAddr.m_area).name,
          streetValue: this.findObj(wx.getStorageSync('street'), setAddr.m_street).name,
          villageValue: this.findObj(wx.getStorageSync('village'), setAddr.m_village).name,
          value6: setAddr.m_address
        })
      } else if (setAddr && setAddr.m_ids == 2) {
        // if (setAddr[0].office.length != 0) {
          this.setData({
            Family: app.domain + "/img/report/Family.png",
            hall: app.domain + "/img/report/hall-active.png",
            fontColor11: "fontColor",
            fontColor22: "",
            show: 2,
            isFamily: 2,
          })
        // }
        
      }
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
        })
      } catch {
        wx.showToast({
          title: '网络不稳定~',
          icon: 'error',
          duration: 1000 //持续的时间
        })
      }
      var userInfo = wx.getStorageSync('userInfo')
      this.setData({
        region: [userInfo.province, userInfo.citys, userInfo.district],
        regionCode: [userInfo.provincecode, userInfo.citycode, userInfo.adcode],
      })
      this.getAuditoriumList()
    }
  }
})