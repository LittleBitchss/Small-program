// pages/index/jobRecruitment/index.js
var city = require('../../../utils/city');
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    citys: '',
    cityss: '',
    citycode: '',
    area: [],
    areas: [],
    areacode: [],
    areacodes: [],
    jobSearchSquare: {
      img: "../../../icon/jobSearchSquare-active.png",
      fontColor: "fontColor"
    },
    mine: {
      img: "../../../icon/mineJob.png",
      fontColor: ""
    },
    name: '',
    photo: '',
    mineRecruitment: [],
    index: 1,
    desiredPosition: [],
    p_id: 0,
    scroll: 0,
    leftTilterActive1: 'active',
    leftTilterActive2: '',
    leftTilterActive3: '',
    leftTilterNum: 1,
    show: false,
    maskType: 0,
    active1: 'active',
    active2: 'active',
    active3: 'active',
    actives1: 'active',
    actives2: '',
    actives3: '',
    educationBackground: [],
    salaryPackage: [],
    experienceRequirement: [],
    educationNum: [],
    salaryNum: [],
    experienceNum: [],
    filtersNum: 0,
    confirm: 0,
    educationBackgrounds: [],
    salaryPackages: [],
    experienceRequirements: [],
    educationNums: [],
    salaryNums: [],
    experienceNums: [],
    id: 0
  },
  tabToggle(e) {
    var index = e.currentTarget.dataset.index
    if (index == 1) {
      this.setData({
        jobSearchSquare: {
          img: "../../../icon/jobSearchSquare-active.png",
          fontColor: "fontColor"
        },
        mine: {
          img: "../../../icon/mineJob.png",
          fontColor: ""
        },
        index: 1
      })
      wx.setNavigationBarTitle({
        title: '求职-求职广场'
      })
    } else if (index == 2) {
      this.setData({
        jobSearchSquare: {
          img: "../../../icon/jobSearchSquare.png",
          fontColor: ""
        },
        mine: {
          img: "../../../icon/mineJob-active.png",
          fontColor: "fontColor"
        },
        index: 2
      })
      wx.setNavigationBarTitle({
        title: '求职-我的'
      })
      this.getMineInfo()
    }
  },
  topTilter(e) {
    var index = e.currentTarget.dataset.index
    var desiredPosition = JSON.parse(JSON.stringify(this.data.desiredPosition))
    desiredPosition.forEach(i => {
      i.active = ''
    })
    desiredPosition[index].active = 'active'
    this.setData({
      p_id: desiredPosition[index].p_id,
      desiredPosition: desiredPosition,
      scroll: index * 65 > 120 ? index * 65 - 120 : 0
    })
    var a = this.data.educationNum
    var b = this.data.salaryNum
    var c = this.data.experienceNum
    var d = this.data.p_id
    var e = this.data.leftTilterNum
    var f = this.data.areacodes
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
  },
  leftTilter(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      this.setData({
        leftTilterActive1: 'active',
        leftTilterActive2: '',
        leftTilterNum: 1,
      })
      var a = this.data.educationNum
      var b = this.data.salaryNum
      var c = this.data.experienceNum
      var d = this.data.p_id
      var e = this.data.leftTilterNum
      var f = this.data.areacodes
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
      console.log(e);
      console.log(f);
    } else if (item == 2) {
      this.setData({
        leftTilterActive1: '',
        leftTilterActive2: 'active',
        leftTilterNum: 2,
      })
      var a = this.data.educationNum
      var b = this.data.salaryNum
      var c = this.data.experienceNum
      var d = this.data.p_id
      var e = this.data.leftTilterNum
      var f = this.data.areacodes
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
      console.log(e);
      console.log(f);
    }
  },
  openMask(e) {
    var item = e.currentTarget.dataset.item
    this.setData({
      show: true,
      maskType: item,
      confirm: 0
    })
    if (item == 1) {
      this.setData({
        area: this.data.areas,
        areacode: this.data.areacodes,
      })
      var a = this.data.areacode.length && this.data.areacode[0].length != 4 ? ' · ' + this.data.areacode.length : ''
      wx.setNavigationBarTitle({
        title: this.data.cityss + a,
      })
    } else if (item == 2) {
      this.setTitle()
    }
  },
  setTitles(cityss,citycode) {
    setTimeout(() => {
      wx.setNavigationBarTitle({
        title: cityss,
      })
      this.setData({
        areacode: [citycode.slice(0,4)],
        areacodes: [citycode.slice(0,4)]
      })
      this.getAreas(this.data.citycode.toString())
    })
  },
  setTitle() {
    var t = '筛选 '
    var a = this.data.educationNum
    var b = this.data.salaryNum
    var c = this.data.experienceNum
    var d = a.concat(b).concat(c)
    this.setData({
      filtersNum: d.length
    })
    if (this.data.filtersNum) {
      t = t + '· ' + this.data.filtersNum
    }
    wx.setNavigationBarTitle({
      title: t
    })
  },
  eventhandle() {
    if (this.data.confirm) {
      this.setData({
        educationBackgrounds: this.data.educationBackground,
        salaryPackages: this.data.salaryPackage,
        experienceRequirements: this.data.experienceRequirement,
        educationNums: this.data.educationNum,
        salaryNums: this.data.salaryNum,
        experienceNums: this.data.experienceNum,
      })
    } else {
      this.setData({
        educationBackground: this.data.educationBackgrounds,
        salaryPackage: this.data.salaryPackages,
        experienceRequirement: this.data.experienceRequirements,
        educationNum: this.data.educationNums,
        salaryNum: this.data.salaryNums,
        experienceNum: this.data.experienceNums,
      })
      if (this.data.educationNum.length == 0) {
        this.setData({
          active1: 'active'
        })
      } else {
        this.setData({
          active1: ''
        })
      }
      if (this.data.salaryNum.length == 0) {
        this.setData({
          active2: 'active'
        })
      } else {
        this.setData({
          active2: ''
        })
      }
      if (this.data.experienceNum.length == 0) {
        this.setData({
          active3: 'active'
        })
      } else {
        this.setData({
          active3: ''
        })
      }
    }
    this.setTitle()
    wx.setNavigationBarTitle({
      title: '求职-求职广场',
    })
  },
  tilters(e) {
    var item = e.currentTarget.dataset.item
    var type = e.currentTarget.dataset.type
    var index = e.currentTarget.dataset.index
    var educationBackground = JSON.parse(JSON.stringify(this.data.educationBackground))
    var educationNum = JSON.parse(JSON.stringify(this.data.educationNum))
    var salaryPackage = JSON.parse(JSON.stringify(this.data.salaryPackage))
    var experienceRequirement = JSON.parse(JSON.stringify(this.data.experienceRequirement))
    var experienceNum = JSON.parse(JSON.stringify(this.data.experienceNum))
    if (item == 1) {
      if (type == 1) {
        educationBackground.forEach(i => {
          i.active = ''
        })
        this.setData({
          active1: 'active'
        })
        educationNum = []
      } else {
        this.setData({
          active1: ''
        })
        if (educationBackground[index].active == '') {
          educationBackground[index].active = 'active'
          educationNum.push(educationBackground[index].e_id)
        } else {
          educationBackground[index].active = ''
          educationNum.splice(educationNum.indexOf(educationBackground[index].e_id), 1)
        }
        var a = 0
        educationBackground.forEach(i => {
          if (i.active) {
            a++
          }
        })
        if (!a) {
          this.setData({
            active1: 'active'
          })
        }
      }
      this.setData({
        educationBackground: educationBackground,
        educationNum: educationNum
      })
      this.setTitle()
    } else if (item == 2) {
      if (type == 1) {
        this.setData({
          active2: 'active',
          salaryNum: []
        })
        salaryPackage.forEach(i => {
          i.active = ''
        })
      } else {
        this.setData({
          active2: '',
          salaryNum: [salaryPackage[index].s_id]
        })
        salaryPackage.forEach(i => {
          i.active = ''
        })
        salaryPackage[index].active = 'active'
      }
      this.setData({
        salaryPackage: salaryPackage
      })
      this.setTitle()
    } else if (item == 3) {
      if (type == 1) {
        experienceRequirement.forEach(i => {
          i.active = ''
        })
        this.setData({
          active3: 'active'
        })
        experienceNum = []
      } else {
        this.setData({
          active3: ''
        })
        if (experienceRequirement[index].active == '') {
          experienceRequirement[index].active = 'active'
          experienceNum.push(experienceRequirement[index].e_id)
        } else {
          experienceRequirement[index].active = ''
          experienceNum.splice(experienceNum.indexOf(experienceRequirement[index].e_id), 1)
        }
        var a = 0
        experienceRequirement.forEach(i => {
          if (i.active) {
            a++
          }
        })
        if (!a) {
          this.setData({
            active3: 'active'
          })
        }
      }
      this.setData({
        experienceRequirement: experienceRequirement,
        experienceNum: experienceNum
      })
      this.setTitle()
    }
  },
  confirm() {
    this.setData({
      show: false,
      confirm: 1
    })
    var a = this.data.educationNum
    var b = this.data.salaryNum
    var c = this.data.experienceNum
    var d = this.data.p_id
    var e = this.data.leftTilterNum
    var f = this.data.areacodes
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
  },
  empty() {
    var educationBackground = JSON.parse(JSON.stringify(this.data.educationBackground))
    var salaryPackage = JSON.parse(JSON.stringify(this.data.salaryPackage))
    var experienceRequirement = JSON.parse(JSON.stringify(this.data.experienceRequirement))
    educationBackground.forEach(i => {
      i.active = ''
    })
    salaryPackage.forEach(i => {
      i.active = ''
    })
    experienceRequirement.forEach(i => {
      i.active = ''
    })
    this.setData({
      active1: 'active',
      active2: 'active',
      active3: 'active',
      educationNum: [],
      salaryNum: [],
      experienceNum: [],
      educationBackground: educationBackground,
      salaryPackage: salaryPackage,
      experienceRequirement: experienceRequirement
    })
    this.setTitle()
  },
  // 我的
  getMineInfo() {
    app.post('/Job/myInfo', {
      token: wx.getStorageSync('userInfo').token
    }).then((res) => {
      if (res.data.status == 1) {
        this.setData({
          name: res.data.data.info.r_name,
          photo: res.data.data.info.r_head_portrait,
          mineRecruitment: res.data.data.list
        })
      }
    })
  },
  mineToggle(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      this.setData({
        actives1: 'active',
        actives2: '',
        actives3: ''
      })
    } else if (item == 2) {
      this.setData({
        actives1: '',
        actives2: 'active',
        actives3: ''
      })
    } else if (item == 3) {
      this.setData({
        actives1: '',
        actives2: '',
        actives3: 'active'
      })
    }
  },
  getPosition() {
    app.post('/comm/getPosition').then((res) => {
      if (res.data.status == 1) {
        res.data.data.forEach(i => {
          i.active = ''
        })
        var desiredPosition = res.data.data
        app.post('/Job/getExpectationsList', {
          token: wx.getStorageSync('userInfo').token
        }).then((res) => {
          if (res.data.status == 1) {
            var arr = [{
              p_id: 0,
              p_name: '推荐职位',
              active: 'active'
            }]
            res.data.data.forEach(i => {
              var a = desiredPosition.find(j => j.p_id == i.je_job_expectation)
              arr.push(a)
            })
            arr[0].active = 'active'
            this.setData({
              p_id: arr[0].p_id,
              desiredPosition: arr
            })
            var a = this.data.educationNum
            var b = this.data.salaryNum
            var c = this.data.experienceNum
            var d = this.data.p_id
            var e = this.data.leftTilterNum
            var f = this.data.areacodes
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
            console.log(e);
            console.log(f);
          }
        })
      } else {
        wx.showToast({
          title: '网络出错~',
          icon: 'error',
          duration: 2000
        })
      }
    })
  },
  getAreas(citycode) {
    app.post('/region/getAreas', {
      city_code: citycode.slice(0, 4)
    }).then((res) => {
      if (res.data.status == 1) {
        res.data.data.forEach(i => {
          i.num = 0
        })
        res.data.data.unshift({
          code: this.data.citycode,
          name: '全' + this.data.cityss,
          num: 1,
        })
        this.setData({
          area: res.data.data,
          areas: res.data.data
        })
      }
    })
  },
  clickAreas(e) {
    var area = JSON.parse(JSON.stringify(this.data.area))
    var areacode = JSON.parse(JSON.stringify(this.data.areacode))
    var index = e.currentTarget.dataset.index
    if (index) {
      area[0].num = 0
      if (area[index].num) {
        area[index].num = 0
      } else {
        area[index].num = 1
      }
      // if (areacode[0].length == 4) {
      //   areacode = []
      // } else if (areacode[0].length != 4 && areacode[0].length == 0) {
      //   areacode = [area[0].code.slice(0, 4)]
      //   area[0].num = 1
      // }
      
      var indes = areacode.indexOf(area[index].code.toString())
      console.log(indes);
      if (indes == -1) {
        if (areacode[0].length == 4) {
          areacode = []
        }
        if (areacode.length >= 9) {
          wx.showToast({
            title: '最多选择9个~',
            icon: 'success',
            duration: 1000
          })
          return
        }
        areacode.push(area[index].code + '')
      } else {
        areacode.splice(indes, 1)
        if(areacode.length==0){
          areacode.push(area[0].code.slice(0, 4))
          area[0].num = 1
          this.remove()
        }
      }
      console.log(areacode);
      this.setData({
        area: area,
        areacode: areacode
      })
      var a = this.data.areacode.length ? ' · ' + this.data.areacode.length : ''
      wx.setNavigationBarTitle({
        title: this.data.cityss + a,
      })
    } else {
      this.remove()
    }
  },
  remove() {
    var area = JSON.parse(JSON.stringify(this.data.area))
    area.forEach(i => {
      i.num = 0
    })
    area[0].num = 1
    this.setData({
      area: area,
      areacode: [area[0].code.slice(0, 4)]
    })
    console.log(this.data.areacode);
    this.setTitle()
  },
  ensure() {
    this.setData({
      show: false,
      areas: this.data.area,
      areacodes: this.data.areacode
    })
    var a = this.data.educationNum
    var b = this.data.salaryNum
    var c = this.data.experienceNum
    var d = this.data.p_id
    var e = this.data.leftTilterNum
    var f = this.data.areacodes
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
  },
  goRecruitment() {
    var storage = wx.getStorageSync('userInfo')
    wx.showModal({
      title: '是否切换到招聘模式',
      success(res) {
        if (res.confirm) {
          app.post('/Recruit/setRole', {
            token: storage.token
          }).then((res) => {
            if (res.data.status == 1) {
              wx.redirectTo({
                url: !wx.getStorageSync('userInfo').card ? "/secondary/pages/createTraCQ/index" : "/pages/index/recruitment/index",
              })
              wx.showToast({
                title: '切换成功',
                icon: 'success',
                duration: 1000
              })
              storage.role = 1
              wx.setStorageSync('userInfo', storage)
            } else {
              wx.showToast({
                title: '网络出错~',
                icon: 'error',
                duration: 1000
              })
            }
          })
        }
      }
    })
  },
  getData() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var userInfo = wx.getStorageSync('userInfo')
    this.setData({
      citys: userInfo.citys,
      cityss: userInfo.citys.slice(0, userInfo.citys.length - 1),
      citycode: userInfo.citycode,
      areacodes: [userInfo.citycode.slice(0, 4)]
    })
    this.getAreas(userInfo.citycode)
    wx.setNavigationBarTitle({
      title: '求职-求职广场',
    })
    this.getPosition()
    app.post('/comm/getEducation').then((res) => {
      if (res.data.status == 1) {
        res.data.data.forEach(i => {
          i.active = ''
        })
        this.setData({
          educationBackground: res.data.data,
          educationBackgrounds: res.data.data
        })
      }
    })
    app.post('/comm/getSalary').then((res) => {
      if (res.data.status == 1) {
        res.data.data.forEach(i => {
          i.active = ''
        })
        this.setData({
          salaryPackage: res.data.data,
          salaryPackages: res.data.data
        })
      }
    })
    app.post('/comm/getExperience').then((res) => {
      if (res.data.status == 1) {
        res.data.data.forEach(i => {
          i.active = ''
        })
        this.setData({
          experienceRequirement: res.data.data,
          experienceRequirements: res.data.data
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
    if (wx.getStorageSync('userInfo').role) {
      let pages = getCurrentPages()
      var index = pages[pages.length - 2]
      var components = JSON.parse(JSON.stringify(index.data.components))
      components[7].url = !wx.getStorageSync('userInfo').role ? "/pages/index/jobRecruitment/index" : !wx.getStorageSync('userInfo').card ? "/secondary/pages/createTraCQ/index" : "/pages/index/recruitment/index",
        index.setData({
          components: components
        })
    }
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