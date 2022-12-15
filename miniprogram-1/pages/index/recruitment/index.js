// pages/index/recruitment/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recruitmentSquare: {
      img: "../../../icon/jobSearchSquare-active.png",
      fontColor: "fontColor"
    },
    mine: {
      img: "../../../icon/mineJob.png",
      fontColor: ""
    },
    index: 1,
    desiredPosition: [],
    p_id: 0,
    scroll: 0,
    leftTilterActive1: 'active',
    leftTilterActive2: '',
    leftTilterActive3: '',
    leftTilterNum: 1,
    citys: [],
    show: false,
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
    active1: 'active',
    active2: 'active',
    active3: 'active',
    // 我的
    actives1: 'active',
    actives2: '',
    actives3: '',
    photo: '',
    name: '',
    onTheJobList: [],

    duty: [],
    suffer: [],
    welfare: [],
    custom: [],
  },
  tabToggle(e) {
    var index = e.currentTarget.dataset.index
    if (index == 1) {
      this.setData({
        recruitmentSquare: {
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
        title: '招聘-招聘广场'
      })
    } else if (index == 2) {
      this.setData({
        recruitmentSquare: {
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
        title: '招聘-我的'
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
      scroll: index * 65 > 136 ? index * 65 - 136 : 0
    })
    // var a = this.data.educationNum
    // var b = this.data.salaryNum
    // var c = this.data.experienceNum
    // var d = this.data.p_id
    // var e = this.data.leftTilterNum
    // var f = this.data.streetCodes
    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);
    // console.log(e);
    // console.log(f);
  },
  leftTilter(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      this.setData({
        leftTilterActive1: 'active',
        leftTilterActive2: '',
        leftTilterActive3: '',
        leftTilterNum: 1,
      })
      // var a = this.data.educationNum
      // var b = this.data.salaryNum
      // var c = this.data.experienceNum
      // var d = this.data.p_id
      // var e = this.data.leftTilterNum
      // var f = this.data.streetCodes
      // console.log(a);
      // console.log(b);
      // console.log(c);
      // console.log(d);
      // console.log(e);
      // console.log(f);
    } else if (item == 2) {
      this.setData({
        leftTilterActive1: '',
        leftTilterActive2: 'active',
        leftTilterActive3: '',
        leftTilterNum: 2,
      })
      // var a = this.data.educationNum
      // var b = this.data.salaryNum
      // var c = this.data.experienceNum
      // var d = this.data.p_id
      // var e = this.data.streetCodes
      // var f = this.data.streetCodes
      // console.log(a);
      // console.log(b);
      // console.log(c);
      // console.log(d);
      // console.log(e);
      // console.log(f);
    } else if (item == 3) {
      this.setData({
        leftTilterActive1: '',
        leftTilterActive2: '',
        leftTilterActive3: 'active',
        leftTilterNum: 3,
      })
      // var a = this.data.educationNum
      // var b = this.data.salaryNum
      // var c = this.data.experienceNum
      // var d = this.data.p_id
      // var e = this.data.leftTilterNum
      // var f = this.data.streetCodes
      // console.log(a);
      // console.log(b);
      // console.log(c);
      // console.log(d);
      // console.log(e);
      // console.log(f);
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
      this.setTitle()
    }
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
  mineToggle(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      this.setData({
        actives1: 'active',
        actives2: '',
        actives3: ''
      })
      this.getJobList(1)
    } else if (item == 2) {
      this.setData({
        actives1: '',
        actives2: 'active',
        actives3: ''
      })
      this.getJobList(0)
    } else if (item == 3) {
      this.setData({
        actives1: '',
        actives2: '',
        actives3: 'active'
      })
      this.getJobList(2)
    }
  },
  goJobRecruitment() {
    var storage = wx.getStorageSync('userInfo')
    wx.showModal({
      title: '是否切换到求职模式',
      success(res) {
        if (res.confirm) {
          app.post('/Job/setRole', {
            token: storage.token
          }).then((res) => {
            if (res.data.status == 1) {
              wx.redirectTo({
                url: '/pages/index/jobRecruitment/index'
              })
              wx.showToast({
                title: '切换成功',
                icon: 'success',
                duration: 1000
              })
              storage.role = 0
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
  getCustom(list){
    if(list.length==0){
      this.setData ({
        onTheJobList: []
      })
      return
    }
    list.forEach(i => {
      app.post('/comm/getCustom', {
        rpr_id: i.rpr_id
      }).then((res) => {
        if (res.data.status == 1) {
          var arr = []
          var a = i.key_word.split(',')
          if (a[0]) {
            try{
              a[0].split('').forEach(j => {
                if (j != '/') {
                  var b = this.data.duty.find(k => j == k.rd_id).rd_name
                  arr.push(b)
                  throw new Error('停止')
                }
              })
            }catch(e){}
          }
          if (a[1]) {
            try{
            a[1].split('').forEach(j => {
              if (j != '/') {
                var b = this.data.suffer.find(k => j == k.re_id).re_name
                arr.push(b)
                throw new Error('停止')
              }
            })
          }catch(e){}
          }
          if (a[2]) {
            try{
            a[2].split('').forEach(j => {
              if (j != '/') {
                var b = this.data.welfare.find(k => j == k.rf_id).rf_name
                arr.push(b)
                throw new Error('停止')
              }
            })
          }catch(e){}
          }
          if (a[3]) {
            try{
            if (a[3].indexOf('/') == -1) {
              a[3] = [a[3]]
            } else {
              a[3] = a[3].split('/')
            }
            a[3].forEach(j => {
              var b = res.data.data.find(k => j == k.rc_id).rc_name
              arr.push(b)
              throw new Error('停止')
            })
          }catch(e){}
          }
          i.key_word = arr
          this.setData({
            onTheJobList: list
          })
        }
      })
    })
  },
  getMineInfo() {
    app.post('/Recruit/getMyInfo', {
      token: wx.getStorageSync('userInfo').token
    }).then((res) => {
      if (res.data.status == 1) {
        var rex = res.data.data
        this.getCustom(rex.list)
        this.setData({
          photo: rex.card.head_portrait,
          name: rex.card.name
        })
      }
    })
  },
  getJobList(item){
    app.post('/Recruit/getPublish',{
      token:wx.getStorageSync('userInfo').token,
      rc_id:wx.getStorageSync('userInfo').rc_id,
      status:item
    }).then((res)=>{
      if(res.data.status==1){
        console.log(res.data.data);
        this.getCustom(res.data.data)
      }
    })
  },
  shelves(e){
    var index = e.currentTarget.dataset.index
    var that = this
    wx.showModal({
      title: '提示',
      content: '是否已完成招聘',
      success (res) {
        if (res.confirm) {
          app.post('/Recruit/lowerShelf',{
            token:wx.getStorageSync('userInfo').token,
            id:that.data.onTheJobList[index].rpr_id
          }).then(res=>{
            if(res.data.status==1){
              wx.showToast({
                title: '下架成功',
                icon: 'success',
                duration: 1000
              })
              that.getMineInfo()
            }
          })
        }
      }
    })
  },
  remove(e){
    var that= this
    var index = e.currentTarget.dataset.index
    wx.showModal({
      title: '提示',
      content: '是否确定删除',
      success (res) {
        if (res.confirm) {
          app.post('/Recruit/delRecruit',{
            token:wx.getStorageSync('userInfo').token,
            id:that.data.onTheJobList[index].rpr_id
          }).then(res=>{
            if(res.data.status==1){
              wx.showToast({
                title: '删除成功',
                icon: 'success',
                duration: 1000
              })
              if (that.data.actives2) {
                that.getJobList(0)
              } else if (that.data.actives3) {
                that.getJobList(2)
              }
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '招聘-我的',
    })
    this.setData({
      citys: [wx.getStorageSync('userInfo').citys.slice(0, wx.getStorageSync('userInfo').citys.length - 1), wx.getStorageSync('userInfo').citycode]
    })
    if (wx.getStorageInfoSync('userInfo').publish==0) {
      wx.showModal({
        title: '暂未发布社招',
        content: '前去发布？',
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/secondary/pages/publishPage/index',
            })
          }
        }
      })
    }
    app.post('/comm/getPosition').then((res) => {
      if (res.data.status == 1) {
        res.data.data.forEach(i => {
          i.active = ''
        })
        this.setData({
          desiredPosition: res.data.data
        })
      } else {
        wx.showToast({
          title: '网络出错~',
          icon: 'error',
          duration: 2000
        })
      }
    })
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
    app.post('/comm/getRecruitDuty').then((res) => {
      if (res.data.status == 1) {
        this.setData({
          duty: res.data.data
        })
      }
    })
    app.post('/comm/getWorkExperience').then((res) => {
      if (res.data.status == 1) {
        this.setData({
          suffer: res.data.data
        })
      }
    })
    app.post('/comm/getWelfare').then((res) => {
      if (res.data.status == 1) {
        this.setData({
          welfare: res.data.data
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
    if (!wx.getStorageSync('userInfo').role) {
      let pages = getCurrentPages()
      var index = pages[pages.length - 2]
      var components = JSON.parse(JSON.stringify(index.data.components))
      components[7].url = '/pages/index/jobRecruitment/index'
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