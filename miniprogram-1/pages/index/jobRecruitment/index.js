// pages/index/jobRecruitment/index.js
var city = require('../../../utils/city');
const app = getApp()
var QQMapWX = require('../../../utils/js/qqmap-wx-jssdk.min');
const qqMapSdk = new QQMapWX({
  key: 'ABNBZ-GKPLS-FOAOJ-6HOP3-GAWZO-NNFDH'
});
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
    leftTilterNum: 0,
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
    id: 0,
    jobList: []
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
    this.getData(this.data.p_id, this.data.areacodes.join(','), this.data.leftTilterNum, this.data.educationNum.join(','), this.data.salaryNum.join(','), this.data.experienceNum.join(','))
  },
  leftTilter(e) {
    var item = e.currentTarget.dataset.item
    if (item == 0) {
      this.setData({
        leftTilterActive1: 'active',
        leftTilterActive2: '',
        leftTilterNum: 0,
      })
      this.getData(this.data.p_id, this.data.areacodes.join(','), this.data.leftTilterNum, this.data.educationNum.join(','), this.data.salaryNum.join(','), this.data.experienceNum.join(','))
    } else if (item == 1) {
      this.setData({
        leftTilterActive1: '',
        leftTilterActive2: 'active',
        leftTilterNum: 1,
      })
      this.getData(this.data.p_id, this.data.areacodes.join(','), this.data.leftTilterNum, this.data.educationNum.join(','), this.data.salaryNum.join(','), this.data.experienceNum.join(','))
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
  setTitles(cityss, citycode) {
    setTimeout(() => {
      wx.showLoading({
        title: '加载中',
      })
      wx.setNavigationBarTitle({
        title: cityss,
      })
      this.setData({
        areacode: [(citycode + '').slice(0, 4)],
        areacodes: [(citycode + '').slice(0, 4)]
      })
      this.getAreas(this.data.citycode.toString())
    },200)
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
    this.getData(this.data.p_id, this.data.areacodes.join(','), this.data.leftTilterNum, this.data.educationNum.join(','), this.data.salaryNum.join(','), this.data.experienceNum.join(','))
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
          photo: res.data.data.info.r_head_portrait
        })
        setTimeout(() => {
          res.data.data.list.forEach(i => {
            qqMapSdk.reverseGeocoder({
              location: {
                longitude: i.rpr_longitude,
                latitude: i.rpr_latitude
              },
              success(res) {
                i.area = res.result.address_component.district
                i.street = res.result.address_component.street
              }
            })
            i.catering = i.catering == 1 ? '中餐' : i.catering == 2 ? '西餐' : i.catering == 2 ? '糕点/甜品' : ''
            i.duty = i.duty ? wx.getStorageSync('recruitDuty').find(j => j.rd_id == i.duty).rd_name : ''
            i.welfare = i.welfare ? wx.getStorageSync('welfare').find(j => j.rf_id == i.welfare).rf_name : ''
            i.rpr_experience = i.rpr_experience ? wx.getStorageSync('experience').find(j => j.e_id == i.rpr_experience).e_name : ''
            i.rpr_minimum_education = i.rpr_minimum_education ? wx.getStorageSync('education').find(j => j.e_id == i.rpr_minimum_education).e_name : ''
            var custom = i.custom?JSON.parse(i.custom):''
            i.custom = custom?custom[0].rc_name:''
          })
        })
        setTimeout(() => {
          wx.hideLoading()
          this.setData({
            mineRecruitment: res.data.data.list
          })
        }, 500)
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
    wx.showLoading({
      title: '加载中',
    })
    app.post('/comm/getPosition').then((res) => {
      if (res.data.status == 1) {
        res.data.data.forEach(i => {
          i.active = ''
        })
        var desiredPosition = res.data.data
        wx.setStorageSync('position', desiredPosition)
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
            this.getData(this.data.p_id, this.data.areacodes.join(','), this.data.leftTilterNum)
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
        setTimeout(()=>{
          wx.hideLoading()
        },500)
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
      var indes = areacode.indexOf(area[index].code.toString())
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
        if (areacode.length == 0) {
          areacode.push((area[0].code + '').slice(0, 4))
          area[0].num = 1
          this.remove()
        }
      }
      this.setData({
        area: area,
        areacode: areacode
      })
      var a = this.data.areacode.length && this.data.areacode[0].length != 4 ? ' · ' + this.data.areacode.length : ''
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
      areacode: [(area[0].code + '').slice(0, 4)]
    })
    var a = this.data.areacode.length && this.data.areacode[0].length != 4 ? ' · ' + this.data.areacode.length : ''
    wx.setNavigationBarTitle({
      title: this.data.cityss + a,
    })
  },
  ensure() {
    this.setData({
      show: false,
      areas: this.data.area,
      areacodes: this.data.areacode
    })
    this.getData(this.data.p_id, this.data.areacodes.join(','), this.data.leftTilterNum, this.data.educationNum.join(','), this.data.salaryNum.join(','), this.data.experienceNum.join(','))
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
  getData(duty, location, filter, education, salary, experience) {
    wx.showLoading({
      title: '加载中',
    })
    var obj = {
      token: wx.getStorageSync('userInfo').token,
      duty: duty,
      location: location,
      filter: filter
    }
    if (filter) {
      obj.longitude = wx.getStorageSync('userInfo').longitude
      obj.latitude = wx.getStorageSync('userInfo').latitude
    }
    if (education) {
      obj.education_id = education
    }
    if (salary) {
      obj.salary_id = salary
    }
    if (experience) {
      obj.experience_id = experience
    }
    app.post('/Job/recommendPosition', obj).then((res) => {
      if (res.data.status == 1) {
        if (res.data.data.list.length == 0) {
          wx.hideLoading()
          wx.showToast({
            title: '暂无数据',
            icon: 'error',
            duration: 1000
          })
          this.setData({
            jobList: res.data.data.list
          })
        } else {
          setTimeout(() => {
            res.data.data.list.forEach(i => {
              qqMapSdk.reverseGeocoder({
                location: {
                  longitude: i.rpr_longitude,
                  latitude: i.rpr_latitude
                },
                success(res) {
                  i.area = res.result.address_component.district
                  i.street = res.result.address_component.street
                }
              })
              i.catering = i.catering == 1 ? '中餐' : i.catering == 2 ? '西餐' : i.catering == 2 ? '糕点/甜品' : ''
              i.duty = i.duty ? wx.getStorageSync('recruitDuty').find(j => j.rd_id == i.duty).rd_name : ''
              i.welfare = i.welfare ? wx.getStorageSync('welfare').find(j => j.rf_id == i.welfare).rf_name : ''
              i.rpr_experience = i.rpr_experience ? wx.getStorageSync('experience').find(j => j.e_id == i.rpr_experience).e_name : ''
              i.rpr_minimum_education = i.rpr_minimum_education ? wx.getStorageSync('education').find(j => j.e_id == i.rpr_minimum_education).e_name : ''
              var custom = i.custom?JSON.parse(i.custom):''
              i.custom = custom?custom[0].rc_name:''
            })
          })
          setTimeout(() => {
            this.setData({
              jobList: res.data.data.list
            })
            wx.hideLoading()
          }, 500)
        }
      } else {
        wx.hideLoading()
        wx.navigateTo({
          url: '/pages/error/error'
        })
      }
    })
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
        wx.setStorageSync('education', res.data.data)
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
        wx.setStorageSync('salary', res.data.data)
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
        wx.setStorageSync('experience', res.data.data)
      }
    })
    app.post('/comm/getJobStatus').then((res) => {
      if (res.data.status == 1) {
        res.data.data.forEach(i => {
          i.active = ''
        })
        wx.setStorageSync('jobStatus', res.data.data)
      }
    })
    app.post('/comm/getRecruitDuty').then((res) => {
      if (res.data.status == 1) {
        wx.setStorageSync('recruitDuty', res.data.data)
      }
    })
    app.post('/comm/getWelfare').then((res) => {
      if (res.data.status == 1) {
        wx.setStorageSync('welfare', res.data.data)
      }
    })
    app.post('/comm/getCompanyNumber').then((res) => {
      if (res.data.status == 1) {
        wx.setStorageSync('companySize', res.data.data)
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