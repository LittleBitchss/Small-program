// pages/index/recruitment/index.js
var QQMapWX = require('../../../utils/qqmap-wx-jssdk.min');
var request = require('../../../request/request');
const qqMapSdk = new QQMapWX({
  key: 'ABNBZ-GKPLS-FOAOJ-6HOP3-GAWZO-NNFDH'
});
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
    desiredPositionx: [],
    desiredPositions: [],
    year: '',
    month: '',
    list: [],
    p_id: 0,
    scroll: 0,
    leftTilterActive1: 'active',
    leftTilterActive2: '',
    leftTilterNum: 1,
    citys: [],
    show: false,
    educationBackground: [],
    salaryPackage: [],
    experienceRequirement: [],
    jobStatus: [],
    educationNum: [],
    salaryNum: [],
    experienceNum: [],
    jobStatusNum: [],
    filtersNum: 0,
    confirm: 0,
    educationBackgrounds: [],
    salaryPackages: [],
    experienceRequirements: [],
    jobStatuss: [],
    educationNums: [],
    salaryNums: [],
    experienceNums: [],
    jobStatusNums: [],
    id: 0,
    active1: 'active',
    active2: 'active',
    active3: 'active',
    active4: 'active',
    // 我的
    actives1: 'active',
    actives2: '',
    actives3: '',
    photo: '',
    name: '',
    onTheJobList: [],
    kind: [{
      ke_id: 1,
      active: '',
      ke_name: '中餐'
    }, {
      ke_id: 2,
      active: '',
      ke_name: '西餐'
    }, {
      ke_id: 3,
      active: '',
      ke_name: '糕点/甜品'
    }],
    duty: [],
    welfare: [],
    custom: [],
    url: '',
    dutys: 0,
    filter: 0,
    location: 0,
    city: '',
    education: 0,
    salary: 0,
    experience: 0,
    job_status: 0,
    dutyx: ''
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
      dutys: desiredPosition[index].p_id,
      desiredPosition: desiredPosition,
      scroll: index * 65 > 136 ? index * 65 - 136 : 0
    })
    this.getData(this.data.dutys, this.data.location, 0, desiredPosition[index].p_id)
  },
  leftTilter(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      this.setData({
        leftTilterActive1: 'active',
        leftTilterActive2: '',
        leftTilterActive3: '',
        leftTilterNum: 1,
        filter: 0
      })
      this.getData(this.data.dutys, this.data.location, 0)
    } else if (item == 2) {
      this.setData({
        leftTilterActive1: '',
        leftTilterActive2: 'active',
        leftTilterActive3: '',
        leftTilterNum: 2,
        filter: 1
      })
      this.getData(this.data.dutys, this.data.location, 0)
    }
  },
  openMask(e) {
    var item = e.currentTarget.dataset.item
    this.setData({
      show: true,
      maskType: item,
      confirm: 0,
      educationNum: this.data.educationNums,
      salaryNum: this.data.salaryNums,
      experienceNum: this.data.experienceNums,
      jobStatusNum: this.data.jobStatusNums,
      educationBackground: this.data.educationBackgrounds,
      salaryPackage: this.data.salaryPackages,
      experienceRequirement: this.data.experienceRequirements,
      jobStatus: this.data.jobStatuss
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
    var d = this.data.jobStatusNum
    var e = a.concat(b).concat(c).concat(d)
    this.setData({
      filtersNum: e.length
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
    var jobStatus = JSON.parse(JSON.stringify(this.data.jobStatus))
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
    } else if (item == 4) {
      if (type == 1) {
        this.setData({
          active4: 'active',
          jobStatusNum: []
        })
        jobStatus.forEach(i => {
          i.active = ''
        })
      } else {
        this.setData({
          active4: '',
          jobStatusNum: [jobStatus[index].js_id]
        })
        jobStatus.forEach(i => {
          i.active = ''
        })
        jobStatus[index].active = 'active'
      }
      this.setData({
        jobStatus: jobStatus
      })
      this.setTitle()
    }
  },
  confirm() {
    this.setData({
      show: false,
      confirm: 1,
      educationNums: this.data.educationNum,
      salaryNums: this.data.salaryNum,
      experienceNums: this.data.experienceNum,
      jobStatusNums: this.data.jobStatusNum,
      educationBackgrounds: this.data.educationBackground,
      salaryPackages: this.data.salaryPackage,
      experienceRequirements: this.data.experienceRequirement,
      jobStatuss: this.data.jobStatus
    })
    this.getData(this.data.dutys, this.data.location, 0)
  },
  empty() {
    var educationBackground = JSON.parse(JSON.stringify(this.data.educationBackground))
    var salaryPackage = JSON.parse(JSON.stringify(this.data.salaryPackage))
    var experienceRequirement = JSON.parse(JSON.stringify(this.data.experienceRequirement))
    var jobStatus = JSON.parse(JSON.stringify(this.data.jobStatus))
    educationBackground.forEach(i => {
      i.active = ''
    })
    salaryPackage.forEach(i => {
      i.active = ''
    })
    experienceRequirement.forEach(i => {
      i.active = ''
    })
    jobStatus.forEach(i => {
      i.active = ''
    })
    this.setData({
      active1: 'active',
      active2: 'active',
      active3: 'active',
      active4: 'active',
      educationNum: [],
      salaryNum: [],
      experienceNum: [],
      jobStatusNum: [],
      educationBackground: educationBackground,
      salaryPackage: salaryPackage,
      experienceRequirement: experienceRequirement,
      jobStatus: jobStatus
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
  getCustom(list) {
    setTimeout(() => {
      wx.hideLoading()
    }, 200)
    if (list.length == 0) {
      this.setData({
        onTheJobList: []
      })
      return
    }
    list.forEach(i => {
      var rpr_custom = JSON.parse(i.rpr_custom)
      var arr = []
      var a = i.key_word.split(',')
      if (i.rpr_experience) {
        arr.push(this.data.experienceRequirement[i.rpr_experience - 1].e_name)
      }
      if (i.rpr_minimum_education) {
        arr.push(this.data.educationBackground[i.rpr_minimum_education - 1].e_name)
      }
      if (a[0]) {
        try {
          a[0].split('').forEach(j => {
            if (j != '/') {
              var b = this.data.kind.find(k => j == k.ke_id).ke_name
              arr.push(b)
              throw new Error('停止')
            }
          })
        } catch (e) {}
      }
      if (a[1]) {
        try {
          a[1].split('').forEach(j => {
            if (j != '/') {
              var b = this.data.duty.find(k => j == k.rd_id).rd_name
              arr.push(b)
              throw new Error('停止')
            }
          })
        } catch (e) {}
      }
      if (a[2]) {
        try {
          a[2].split('').forEach(j => {
            if (j != '/') {
              var b = this.data.welfare.find(k => j == k.rf_id).rf_name
              arr.push(b)
              throw new Error('停止')
            }
          })
        } catch (e) {}
      }
      if (rpr_custom.length != 0) {
        arr.push(rpr_custom[0].rc_name)
      }
      i.key_word = arr
      this.setData({
        onTheJobList: list,
        url: i.rpr_status == 2 ? '' : '/secondary/pages/resumeInfo/index'
      })
    })
  },
  getMineInfo() {
    wx.showLoading({
      title: '加载中',
    })
    app.post('/Recruit/getMyInfo', {
      token: wx.getStorageSync('userInfo').token
    }).then((res) => {
      if (res.data.status == 1) {
        var rex = res.data.data
        this.getCustom(rex.list)
        this.setData({
          photo: rex.card.head_portrait,
          name: rex.card.name,
          actives1: 'active',
          actives2: '',
          actives3: ''
        })
      }
    })
  },
  getJobList(item) {
    wx.showLoading({
      title: '加载中',
    })
    app.post('/Recruit/getPublish', {
      token: wx.getStorageSync('userInfo').token,
      rc_id: wx.getStorageSync('userInfo').rc_id,
      status: item
    }).then((res) => {
      if (res.data.status == 1) {
        this.getCustom(res.data.data)
      }
    })
  },
  shelves(e) {
    var index = e.currentTarget.dataset.index
    var that = this
    wx.showModal({
      title: '提示',
      content: '是否已完成招聘',
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '加载中',
          })
          setTimeout(() => {
            app.post('/Recruit/lowerShelf', {
              token: wx.getStorageSync('userInfo').token,
              id: that.data.onTheJobList[index].rpr_id
            }).then(res => {
              if (res.data.status == 1) {
                wx.hideLoading()
                that.getMineInfo()
              }
            })
          }, 500)
        }
      }
    })
  },
  remove(e) {
    var that = this
    var index = e.currentTarget.dataset.index
    wx.showModal({
      title: '提示',
      content: '是否确定删除',
      success(res) {
        if (res.confirm) {
          app.post('/Recruit/delRecruit', {
            token: wx.getStorageSync('userInfo').token,
            id: that.data.onTheJobList[index].rpr_id
          }).then(res => {
            if (res.data.status == 1) {
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
  getData(dutys, location, first, post) {
    wx.showLoading({
      title: '加载中',
    })
    var obj = {
      token: wx.getStorageSync('userInfo').token,
      rc_id: wx.getStorageSync('userInfo').rc_id,
      location: location.slice(0, 4),
      filter: this.data.filter
    }
    if (dutys) {
      obj.duty = dutys
    }
    if (this.data.educationNums.length != 0) {
      if (this.data.educationNums.length < 2) {
        obj.education_id = this.data.educationNums.join('')
      } else {
        obj.education_id = this.data.educationNums.join(',')
      }
    }
    if (this.data.salaryNums.length != 0) {
      obj.salary_id = this.data.salaryNums.join('')
    }
    if (this.data.experienceNums.length != 0) {
      if (this.data.experienceNums.length < 2) {
        obj.experience_id = this.data.experienceNums.join('')
      } else {
        obj.experience_id = this.data.experienceNums.join(',')
      }
    }
    if (this.data.jobStatusNums.length != 0) {
      obj.job_status = this.data.jobStatusNums.join('')
    }
    var that = this
    if (this.data.city) {
      qqMapSdk.geocoder({
        address: this.data.city,
        success: function (res) {
          obj.longitude = res.result.location.lng
          obj.latitude = res.result.location.lat
          that.aaa(obj, first, post)
        }
      })
    } else {
      obj.longitude = wx.getStorageSync('userInfo').longitude
      obj.latitude = wx.getStorageSync('userInfo').latitude
      this.aaa(obj, first, post)
    }
  },
  aaa(obj, first, post) {
    app.post('/Recruit/recommendPosition', obj).then((res) => {
      if (res.data.status == 1) {
        var rex = res.data.data
        if (rex.list.length == 0) {
          var that = this
          setTimeout(function () {
            wx.hideLoading()
            wx.showToast({
              title: '暂无数据',
              icon: 'error',
              duration: 1000
            })
            if (first) {
              var arr = [{
                p_id: 0,
                p_name: '推荐厨师',
                active: 'active'
              }]
              if (typeof rex.duty == 'string') {
                rex.duty = rex.duty.split()
              }
              if (rex.duty.length != 0) {
                rex.duty.forEach(i => {
                  var item = that.data.desiredPositions.find(j => j.p_id == i)
                  item.active = ''
                  arr.push(item)
                })
              }
              that.setData({
                desiredPosition: arr,
                dutyx: rex.duty
              })
            }
            that.setData({
              list: rex.list
            })
          }, 500)
        } else {
          wx.hideLoading()
          var duty = rex.duty.indexOf(',') == -1 ? rex.duty.split() : rex.duty.split(',')
          rex.list.forEach(i => {
            i.r_age = this.data.month > i.r_born.slice(5, 7) ? this.data.year - i.r_born.slice(0, 4) + 1 : this.data.year - i.r_born.slice(0, 4)
            i.r_experience = this.data.month > i.r_working_time.slice(5, 7) ? this.data.year - i.r_working_time.slice(0, 4) + 1 : this.data.year - i.r_working_time.slice(0, 4)
            if (post) {
              i.job_expectation = wx.getStorageSync('position')[i.job_expectation.find(k => k == post) - 1].p_name
            } else {
              if (duty.length != 0) {
                var job_expectation = []
                duty.forEach(j => {
                  var item = i.job_expectation.find(k => k == j)
                  if (item) {
                    var items = this.data.desiredPositionx.find(k => k.p_id == item).p_name
                    job_expectation.push(items)
                  }
                })
                job_expectation = job_expectation.join(',')
                i.job_expectation = job_expectation
              }
            }
          })
          if (first) {
            var arr = [{
              p_id: 0,
              p_name: '推荐厨师',
              active: 'active'
            }]
            if (duty.length != 0) {
              duty.forEach(i => {
                var item = this.data.desiredPositions.find(j => j.p_id == i)
                item.active = ''
                arr.push(item)
              })
            }
            this.setData({
              desiredPosition: arr,
              dutyx: rex.duty
            })
          }
          this.setData({
            list: rex.list
          })
        }
      } else {
        wx.hideLoading()
        wx.showToast({
          title: '网络错误',
          icon: 'error',
          duration: 1000
        })
      }
    })
  },
  toGetgetData(location, city) {
    setTimeout(() => {
      this.setData({
        location: location,
        city: city
      })
      this.getData(this.data.dutys, this.data.location, 0)
    })
  },
  shareCanvas(index) {
    let recruitment = this.data.onTheJobList[index]
    let that = this;
    var date = new Date()
    var month = date.getMonth() + 1
    var day = date.getDate()
    const query = wx.createSelectorQuery();
    query
      .select("#myCanvas")
      .fields({
        node: true,
        size: true
      })
      .exec(async (res) => {
        const width = res[0].width;
        const height = res[0].height;
        const canvas = res[0].node;
        const context = canvas.getContext("2d");
        // 比例
        console.log(wx.getSystemInfoSync());
        const ratio = wx.getSystemInfoSync()?.windowWidth / 750;
        const dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        context.scale(dpr, dpr);
        that.setData({
          canvas,
        });
        // 绘制背景
        context.beginPath();
        await that.loadImg(
          "https://qunyan.canancn.com/assets/applet/img/poster/bgImg.png",
          canvas,
          context,
          0,
          0,
          Math.round(that.data.posterWidth*that.data.rpx),
          Math.round(that.data.posterHeight*that.data.rpx)
        );
        context.save();
        // 绘制圆
        context.beginPath();
        context.arc(
          70 * that.data.rpx,
          336 * that.data.rpx,
          30 * that.data.rpx,
          0,
          (Math.PI / 180) * 360
        );
        context.fill();
        context.clip();
        // 绘制头像
        context.beginPath();
        const avatar = recruitment.rc_head_portrait;
        await that.loadImg(
          avatar,
          canvas,
          context,
          40 * that.data.rpx,
          306 * that.data.rpx,
          60 * that.data.rpx,
          60 * that.data.rpx
        );
        context.restore();
        // 绘制文字
        context.beginPath();
        let company = recruitment.rc_company;
        context.fillStyle = '#999'
        context.font = `normal 300 ${15*that.data.rpx}px sans-serif`;
        context.fillText(company, 120 * that.data.rpx, 354 * that.data.rpx);

        context.beginPath();
        let post = recruitment.rc_post;
        context.fillStyle = '#555'
        context.font = `normal 500 ${16*that.data.rpx}px sans-serif`;
        context.fillText(post, 198 * that.data.rpx, 329 * that.data.rpx);

        context.beginPath();
        let name = recruitment.rc_sex == '女' ? recruitment.rc_name.slice(0, 1) + '女士' : recruitment.rc_name.slice(0, 1) + '先生';
        context.fillStyle = '#000'
        context.font = `normal bold ${20*that.data.rpx}px sans-serif`;
        context.fillText(name, 120 * that.data.rpx, 328 * that.data.rpx);

        context.beginPath();
        let ddd = month < 10 ? '0' + month : month;
        context.fillStyle = '#fff'
        context.font = `normal bold ${38*that.data.rpx}px sans-serif`;
        context.fillText(ddd, 30 * that.data.rpx, 46 * that.data.rpx);

        context.beginPath();
        context.font = `normal bold ${16*that.data.rpx}px sans-serif`;
        context.fillText('/', 30 * that.data.rpx, 76 * that.data.rpx);

        context.beginPath();
        let eee = day < 10 ? '0' + day : day;
        context.fillStyle = '#fff'
        context.font = `normal bold ${28*that.data.rpx}px sans-serif`;
        context.fillText(eee, 46 * that.data.rpx, 80 * that.data.rpx);

        context.beginPath();
        let title = recruitment.rpr_title;
        context.fillStyle = '#000'
        context.font = `normal bold ${18*that.data.rpx}px sans-serif`;
        context.fillText(title, 40 * that.data.rpx, 397 * that.data.rpx);

        context.beginPath();
        let waga = recruitment.rpr_minimum_waga + '-' + recruitment.rpr_maximum_waga;
        context.fillStyle = '#fc6500'
        context.font = `normal bold ${18*that.data.rpx}px sans-serif`;
        context.fillText(waga, 40 * that.data.rpx, 426 * that.data.rpx);

        // 绘制圆
        context.fillStyle = '#000'
        context.beginPath();
        context.arc(
          274 * that.data.rpx,
          430 * that.data.rpx,
          46 * that.data.rpx,
          0,
          (Math.PI / 180) * 360
        );
        context.fill();
        context.clip();
        // 绘制小程序码
        context.beginPath();
        const smallProgramCodes = recruitment.rc_head_portrait;
        await that.loadImg(
          smallProgramCodes,
          canvas,
          context,
          228 * that.data.rpx,
          384 * that.data.rpx,
          92 * that.data.rpx,
          92 * that.data.rpx
        );
        this.shares()
      });
  },
  save() {
    return new Promise((resolve, reject) => {
      console.log(this.data.canvas);
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: Math.round(this.data.posterWidth*this.data.rpx),
        height: Math.round(this.data.posterHeight*this.data.rpx),
        destWidth: Math.round(this.data.posterWidth*this.data.rpx)*3,
        destHeight: Math.round(this.data.posterHeight*this.data.rpx)*3,
        fileType: 'jpg',
        quality: '0.5',
        canvas: this.data.canvas,
        success: (res) => {
          console.log(res.tempFilePath);
          return resolve(res.tempFilePath);
        },
        fail(error) {
          return reject(error);
        },
      });
    });
  },
  loadImg(src, canvas, context, x, y, width, height) {
    return new Promise((resolve, reject) => {
      try {
        const img = canvas.createImage();
        // setTimeout(() => {
        img.src = src;
        img.onload = function () {
          context.drawImage(img, x, y, width, height);
          resolve(canvas.toDataURL("image/png"));
        };
        // })
      } catch (error) {
        reject(error);
      }
    });
  },
  share(e) {
    wx.showLoading({
      title: '加载中',
    })
    var index = e.currentTarget.dataset.index
    this.shareCanvas(index)
  },
  async shares() {
    const res = await this.save();
    console.log(res);
    request.upload(res, 'recruitmentposter' + wx.getStorageSync('userInfo').rc_id).then((res) => {
      wx.downloadFile({
        url: res.data.fullurl,
        success: (res) => {
          wx.hideLoading()
          wx.showShareImageMenu({
            path: res.tempFilePath,
            success: (res) => {
              wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 1000
              })
            },
            fail: (res) => {
              // console.log(res);
            },
          })
        }
      })

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '招聘-招聘广场',
    })
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    this.setData({
      citys: {
        name: wx.getStorageSync('userInfo').citys.slice(0, wx.getStorageSync('userInfo').citys.length - 1),
        code: wx.getStorageSync('userInfo').citycode
      },
      location: wx.getStorageSync('userInfo').citycode,
      year: year,
      month: month
    })
    var storage = wx.getStorageSync('userInfo')
    if (storage.publish == 0) {
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
        this.setData({
          desiredPositions: res.data.data,
          desiredPosition: res.data.data,
          desiredPositionx: res.data.data
        })
        wx.setStorageSync('position', res.data.data)
      } else {
        wx.showToast({
          title: '网络出错~',
          icon: 'error',
          duration: 2000
        })
      }
    })
    app.post('/comm/getSalary').then((res) => {
      if (res.data.status == 1) {
        this.setData({
          salaryPackage: res.data.data,
          salaryPackages: res.data.data
        })
        wx.setStorageSync('salary', res.data.data)
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
        wx.setStorageSync('education', res.data.data)
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
        this.setData({
          jobStatus: res.data.data,
          jobStatuss: res.data.data
        })
        wx.setStorageSync('jobStatus', res.data.data)
      }
    })
    app.post('/comm/getRecruitDuty').then((res) => {
      if (res.data.status == 1) {
        this.setData({
          duty: res.data.data
        })
        wx.setStorageSync('recruitDuty', res.data.data)
      }
    })
    app.post('/comm/getWelfare').then((res) => {
      if (res.data.status == 1) {
        this.setData({
          welfare: res.data.data
        })
        wx.setStorageSync('welfare', res.data.data)
      }
    })
    app.post('/comm/getCompanyNumber').then((res) => {
      if (res.data.status == 1) {
        wx.setStorageSync('companySize', res.data.data)
      }
    })
    this.getData(0, storage.citycode, 1)
    const that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          model: res.model,
          rpx: res.windowWidth / 375,
          posterWidth: res.screenWidth,
          posterHeight: res.screenWidth * 1.5,
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
  onShow() {},

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