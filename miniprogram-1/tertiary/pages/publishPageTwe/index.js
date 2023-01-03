// secondary/pages/publishPageTwe/index.js
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
    domain: app.domain + '/img/chef/',
    domains: app.domain + '/img/chefs/',
    id: 0,
    edit: 0,
    title: '',
    jobName: '',
    jobDescribe: '',
    sufferArr: [],
    sufferArrs: [],
    sufferIndex: 0,
    sufferValue: {
      e_name: '请选择经验',
      e_id: 0
    },
    learnArr: [],
    learnArrs: [],
    learnIndex: 0,
    learnValue: {
      e_name: '请选择学历',
      e_id: 0
    },
    salaryArray: [
      ['面议', '1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000', '11000', '12000', '13000', '14000', '15000', '16000', '17000', '18000', '19000', '20000', '21000', '22000', '23000', '24000', '25000', '26000', '27000', '28000', '29000', '30000', '31000', '32000', '33000', '34000'],
      ['面议'],
      ['12薪', '13薪', '14薪', '15薪', '16薪', '17薪', '18薪', '19薪', '20薪', '21薪', '22薪', '23薪', '24薪']
    ],
    salaryArrays: [
      ['面议', '1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000', '11000', '12000', '13000', '14000', '15000', '16000', '17000', '18000', '19000', '20000', '21000', '22000', '23000', '24000', '25000', '26000', '27000', '28000', '29000', '30000', '31000', '32000', '33000', '34000'],
      ['面议', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000', '11000', '12000', '13000', '14000', '15000', '16000', '17000', '18000', '19000', '20000', '21000', '22000', '23000', '24000', '25000', '26000', '27000', '28000', '29000', '30000', '31000', '32000', '33000', '34000', '35000'],
      ['12薪', '13薪', '14薪', '15薪', '16薪', '17薪', '18薪', '19薪', '20薪', '21薪', '22薪', '23薪', '24薪']
    ],
    salaryIndex: [0, 0, 0],
    salaryMin: '',
    salaryMax: '',
    fewPay: '',
    show: false,
    // 关键词
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
    kinds: [{
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
    kindsValue: [],
    duty: [],
    dutys: [],
    dutyValue: [],
    welfare: [],
    welfares: [],
    welfareValue: [],
    custom: [],
    customs: [],
    customValue: [],
    txt: '选择关键词提供给求职者',
    num: '',

    show_ani: '',
    addressArr: [],
    showview: '1',
    provinces: '',
    city: '',
    area: '',
    workAddress: '',
    fullAddress: '',
    longitude: '',
    latitude: '',
    provincess: '',
    citys: '',
    areas: '',
    workAddresss: '',
    fullAddresss: '',
    longitudes: '',
    latitudes: '',
    workFullAddress: '请填写精确的工作地址',
    active2: ''
  },
  bindChange(e) {
    var item = e.currentTarget.dataset.item
    var index = e.detail.value
    if (item == 1) {
      this.setData({
        sufferValue: this.data.sufferArrs[index]
      })
      if (this.data.sufferValue.e_name != '请选择经验' && this.data.learnValue.e_name != '请选择学历' && this.data.salaryMin != '' && this.data.txt != '选择关键词提供给求职者' && this.data.workFullAddress != '请填写精确的工作地址') {
        this.setData({
          active2: 'actives'
        })
      } else {
        this.setData({
          active2: ''
        })
      }
    } else if (item == 2) {
      this.setData({
        learnValue: this.data.learnArrs[index]
      })
      if (this.data.sufferValue.e_name != '请选择经验' && this.data.learnValue.e_name != '请选择学历' && this.data.salaryMin != '' && this.data.txt != '选择关键词提供给求职者' && this.data.workFullAddress != '请填写精确的工作地址') {
        this.setData({
          active2: 'actives'
        })
      } else {
        this.setData({
          active2: ''
        })
      }
    } else if (item == 3) {
      this.setData({
        salaryMin: this.data.salaryArray[0][e.detail.value[0]],
        salaryMax: this.data.salaryArray[1][e.detail.value[1]],
        fewPay: this.data.salaryArray[2][e.detail.value[2]].slice(0, 2)
      })
      if (this.data.sufferValue.e_name != '请选择经验' && this.data.learnValue.e_name != '请选择学历' && this.data.salaryMin != '' && this.data.txt != '选择关键词提供给求职者' && this.data.workFullAddress != '请填写精确的工作地址') {
        this.setData({
          active2: 'actives'
        })
      } else {
        this.setData({
          active2: ''
        })
      }
    }
  },
  bindColumnChange(e) {
    var item = e.currentTarget.dataset.item
    var salaryIndex = JSON.parse(JSON.stringify(this.data.salaryIndex))
    var salaryArrays = JSON.parse(JSON.stringify(this.data.salaryArrays))
    if (item == 3) {
      if (e.detail.column == 0) {
        if (e.detail.value == 0) {
          salaryArrays[1].splice(1, salaryArrays[1].length)
          this.setData({
            salaryArray: salaryArrays
          })
        } else {
          salaryIndex[0] = e.detail.value
          salaryIndex[1] = 0
          salaryArrays[1].splice(0, e.detail.value)
          this.setData({
            salaryArray: salaryArrays,
            salaryIndex: salaryIndex
          })
        }
      }
    }
  },
  openMask(e) {
    var item = e.currentTarget.dataset.item
    var that = this
    this.setData({
      show: true,
      maskType: item
    })
    if (item == 1) {
      this.setData({
        kind: this.data.kinds,
        duty: this.data.dutys,
        welfare: this.data.welfares,
        custom: this.data.customs
      })
    } else if (item == 2) {
      if (this.data.provincess && this.data.longitudes) {
        this.setData({
          provinces: this.data.provincess,
          city: this.data.citys,
          area: this.data.areas,
          workAddress: this.data.workAddresss,
          fullAddress: this.data.fullAddresss,
          longitude: this.data.longitudes,
          latitude: this.data.latitudes,
        })
      } else {
        this.setData({
          workAddress: '正在获取地址...'
        })
        wx.getLocation({
          type: 'gcj02',
          success(res) {
            that.setData({
              latitude: res.latitude,
              longitude: res.longitude,
            })
            that.getAddress(res.longitude, res.latitude)
          }
        })
      }
    }
  },
  clickItem(e) {
    var item = e.currentTarget.dataset.item
    var index = e.currentTarget.dataset.index
    var duty = JSON.parse(JSON.stringify(this.data.duty))
    var kind = JSON.parse(JSON.stringify(this.data.kind))
    var welfare = JSON.parse(JSON.stringify(this.data.welfare))
    var custom = JSON.parse(JSON.stringify(this.data.custom))
    if (item == 1) {
      if (duty[index].active) {
        duty[index].active = ''
      } else {
        duty[index].active = 'active'
      }
    } else if (item == 2) {
      if (kind[index].active) {
        kind[index].active = ''
      } else {
        kind[index].active = 'active'
      }
    } else if (item == 3) {
      if (welfare[index].active) {
        welfare[index].active = ''
      } else {
        welfare[index].active = 'active'
      }
    } else if (item == 4) {
      if (custom[index].active) {
        custom[index].active = ''
      } else {
        custom[index].active = 'active'
      }
    }
    this.setData({
      kind: kind,
      duty: duty,
      welfare: welfare,
      custom: custom
    })
  },
  addCustom() {
    var that = this
    var custom = JSON.parse(JSON.stringify(this.data.custom))
    wx.showModal({
      title: '添加关键字',
      editable: true,
      placeholderText: '请输入',
      content: '',
      success(res) {
        if (res.confirm) {
          if (res.content.trim()) {
            custom.push({
              rc_id: custom.length,
              rc_name: res.content,
              active: "active"
            })
            that.setData({
              custom: custom
            })
          } else {
            wx.showToast({
              title: '请输入内容',
              icon: 'error',
              duration: 1000
            })
          }
        }
      }
    })
  },
  delCustom(e) {
    var index = e.currentTarget.dataset.index
    var custom = JSON.parse(JSON.stringify(this.data.custom))
    custom.splice(index, 1)
    this.setData({
      custom: custom
    })
  },
  empty() {
    var duty = JSON.parse(JSON.stringify(this.data.duty))
    var kind = JSON.parse(JSON.stringify(this.data.kind))
    var welfare = JSON.parse(JSON.stringify(this.data.welfare))
    var custom = JSON.parse(JSON.stringify(this.data.custom))
    duty.forEach(i => {
      i.active = ''
    })
    kind.forEach(i => {
      i.active = ''
    })
    welfare.forEach(i => {
      i.active = ''
    })
    custom.forEach(i => {
      i.active = ''
    })
    this.setData({
      kind: kind,
      duty: duty,
      welfare: welfare,
      custom: custom
    })
  },
  confirm(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      var dutyTxt = ''
      var kindTxt = ''
      var welfareTxt = ''
      var customTxt = ''
      var dutyNum = ''
      var kindNum = ''
      var welfareNum = ''
      this.data.duty.forEach(i => {
        if (i.active) {
          dutyTxt += i.rd_name + '/'
          dutyNum += i.rd_id + '/'
        }
      })
      this.data.kind.forEach(i => {
        if (i.active) {
          kindTxt += i.ke_name + '/'
          kindNum += i.ke_id + '/'
        }
      })
      this.data.welfare.forEach(i => {
        if (i.active) {
          welfareTxt += i.rf_name + '/'
          welfareNum += i.rf_id + '/'
        }
      })
      if (this.data.custom.length != 0) {
        this.data.custom.forEach(i => {
          if (i.active) {
            customTxt += i.rc_name + '/'
          }
        })
      }
      if (kindTxt) {
        kindTxt = kindTxt.slice(0, kindTxt.length - 1)
        kindNum = kindNum.slice(0, kindNum.length - 1)
      }
      if (dutyTxt) {
        dutyTxt = dutyTxt.slice(0, dutyTxt.length - 1)
        dutyNum = dutyNum.slice(0, dutyNum.length - 1)
      }
      if (welfareTxt) {
        welfareTxt = welfareTxt.slice(0, welfareTxt.length - 1)
        welfareNum = welfareNum.slice(0, welfareNum.length - 1)
      }
      if (customTxt) {
        customTxt = customTxt.slice(0, customTxt.length - 1)
      }
      var txt = kindTxt + ((kindTxt && dutyTxt) || (kindTxt && welfareTxt) || (kindTxt && customTxt) ? ',' : '') + dutyTxt + ((dutyTxt && welfareTxt) || (dutyTxt && customTxt) ? ',' : '') + welfareTxt + ((welfareTxt && customTxt) ? ',' : '') + customTxt
      var num = kindNum + ',' + dutyNum + ',' + welfareNum
      if (txt) {
        this.setData({
          txt: txt,
          num: num,
          show: false,
          dutys: this.data.duty,
          kinds: this.data.kind,
          welfares: this.data.welfare,
          customs: this.data.custom
        })
      } else {
        this.setData({
          txt: '选择关键词提供给求职者',
          num: '',
          show: false,
          dutys: this.data.duty,
          kinds: this.data.kind,
          welfares: this.data.welfare,
          customs: this.data.custom
        })
      }
      if (this.data.sufferValue.e_name != '请选择经验' && this.data.learnValue.e_name != '请选择学历' && this.data.salaryMin != '' && this.data.txt != '选择关键词提供给求职者' && this.data.workFullAddress != '请填写精确的工作地址') {
        this.setData({
          active2: 'actives'
        })
      } else {
        this.setData({
          active2: ''
        })
      }
    } else if (item == 2) {
      if (this.data.provinces && this.data.city && this.data.area && this.data.workAddress && this.data.fullAddress && this.data.longitude && this.data.latitude) {
        this.setData({
          provincess: this.data.provinces,
          citys: this.data.city,
          areas: this.data.area,
          workAddresss: this.data.workAddress,
          fullAddresss: this.data.fullAddress,
          longitudes: this.data.longitude,
          latitudes: this.data.latitude,
          workFullAddress: this.data.workAddress + this.data.fullAddress,
          show: false
        })
        if (this.data.sufferValue.e_name != '请选择经验' && this.data.learnValue.e_name != '请选择学历' && this.data.salaryMin != '' && this.data.txt != '选择关键词提供给求职者' && this.data.workFullAddress != '请填写精确的工作地址') {
          this.setData({
            active2: 'actives'
          })
        } else {
          this.setData({
            active2: ''
          })
        }
      }
    }
  },
  focus(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1 && e.detail.value) {
      this.setData({
        showview: '',
      })
    }
  },
  inputs(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      this.getsuggest(e.detail.value)
    } else if (item == 2) {
      this.setData({
        fullAddress: e.detail.value
      })
      if (this.data.provinces && this.data.city && this.data.area && this.data.workAddress && this.data.fullAddress && this.data.longitude && this.data.latitude) {
        this.setData({
          active2: 'active'
        })
      } else {
        this.setData({
          active2: ''
        })
      }
    }
  },
  getAddress(lng, lat) {
    qqMapSdk.reverseGeocoder({
      location: {
        latitude: lat,
        longitude: lng
      },
      success: (res) => {
        this.setData({
          provinces: res.result.ad_info.city_code.slice(0, 2),
          city: res.result.ad_info.city_code.slice(3, 7),
          area: res.result.ad_info.adcode,
          workAddress: res.result.formatted_addresses.recommend,
          longitude: res.result.location.lng,
          latitude: res.result.location.lat,
        }, (() => {
          setTimeout(() => {
            this.setData({
              show_ani: "",
            })
          }, 1000);
        }))
      },
      fail: (res) => {
        this.setData({
          workAddress: "获取位置信息失败"
        })
      }
    })
  },
  regionchange(e) {
    var that = this
    if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
      this.setData({
        workAddress: "正在获取地址...",
        show_ani: "show_ani",
        fullAddress: '',
        showview: '1'
      })
      that.map = wx.createMapContext("maps", that);
      that.map.getCenterLocation({
        type: 'gcj02',
        success: (res) => {
          this.getAddress(res.longitude, res.latitude);
        }
      })
    }
  },
  clickMap() {
    this.setData({
      showview: '1'
    })
  },
  //触发关键词输入提示事件
  getsuggest(value) {
    if (value.replace(/\s+/g, '') == "") {
      this.setData({
        showview: '1'
      })
    }
    var _this = this;
    //调用关键词提示接口
    qqMapSdk.getSuggestion({
      //获取输入框值并设置keyword参数
      keyword: value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
      region: wx.getStorageSync('userInfo').citys, //设置城市名，限制关键词所示的地域范围，非必填参数
      page_size: 8,
      success(res) { //搜索成功后的回调
        var sug = [];
        for (var i = 0; i < res.data.length; i++) {
          sug.push({ // 获取返回结果，放到sug数组中
            title: res.data[i].title,
            address: res.data[i].address,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng
          });
        }
        _this.setData({ //设置suggestion属性，将关键词搜索结果以列表形式展示
          showview: '',
          addressArr: sug
        });
      },
      fail: function (error) {
        _this.setData({
          showview: '1'
        })
      },
      complete: function (res) {

      }
    });
  },
  // 选择地址
  cilckItem(e) {
    var index = e.currentTarget.dataset.index
    this.data.addressArr[index]
    this.getAddress(this.data.addressArr[index].longitude, this.data.addressArr[index].latitude)
    this.setData({
      showview: '1',
      fullAddress: ''
    })
  },
  confirms() {
    var storage = wx.getStorageSync('userInfo')
    if (this.data.sufferValue.e_name != '请选择经验' && this.data.learnValue.e_name != '请选择学历' && this.data.salaryMin != '' && this.data.txt != '选择关键词提供给求职者' && this.data.workFullAddress != '请填写精确的工作地址') {
      var obj = {
        token: storage.token,
        rc_id: storage.rc_id,
        id: this.data.id,
        title: this.data.title,
        position_name: this.data.jobName,
        job_description: this.data.jobDescribe,
        experience: this.data.sufferValue.e_id,
        minimum_education: this.data.learnValue.e_id,
        minimum_waga: this.data.salaryMin,
        maximum_waga: this.data.salaryMax,
        few_salaries: this.data.fewPay,
        work_address: this.data.workAddresss,
        doorplate: this.data.fullAddresss,
        provinces: this.data.provincess,
        city: this.data.citys,
        area: this.data.areas,
        key_word: this.data.num,
        custom: JSON.stringify(this.data.customs),
        longitude: this.data.longitudes,
        latitude: this.data.latitudes
      }
      app.post('/Recruit/publish', obj).then((res) => {
        if (res.data.status == 1) {
          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 1000
          })
          if (!storage.publish) {
            storage.publish = 1
            wx.setStorageSync('userInfo', storage)
          }
          setTimeout(() => {
            if (this.data.edit) {
              wx.navigateBack({
                delta: 1
              })
              let pages = getCurrentPages()
              var recruitment = pages[pages.length - 2]
              if (recruitment.data.actives1) {
                recruitment.getJobList(1)
              } else if (recruitment.data.actives2) {
                recruitment.getJobList(0)
              }
            } else {
              wx.navigateBack({
                delta: 2
              })
              let pages = getCurrentPages()
              var recruitment = pages[pages.length - 3]
              recruitment.getMineInfo()
            }
          }, 1000)
        }
      })
    } else {
      wx.showToast({
        title: '请完善信息',
        icon: 'error',
        duration: 1000
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.edit) {
      this.setData({
        id: options.id,
        edit: options.edit
      })
      setTimeout(function () {
        wx.showLoading({
          title: '加载中',
        })
      }, 200)
    } else {
      this.setData({
        title: options.title,
        jobName: options.jobName,
        jobDescribe: options.jobDescribe,
        id: options.id
      })
    }
    wx.setNavigationBarTitle({
      title: this.data.edit ? '编辑社招' : '发布社招',
    })
    app.post('/comm/getExperience').then((res) => {
      if (res.data.status == 1) {
        var arr = []
        res.data.data.forEach(i => {
          arr.push(i.e_name)
        });
        this.setData({
          sufferArrs: res.data.data,
          sufferArr: arr
        })
      }
    }).then(() => {
      app.post('/comm/getEducation').then((res) => {
        if (res.data.status == 1) {
          var arr = []
          res.data.data.forEach(i => {
            arr.push(i.e_name)
          });
          this.setData({
            learnArrs: res.data.data,
            learnArr: arr
          })
        }
      }).then(() => {
        app.post('/comm/getRecruitDuty').then((res) => {
          if (res.data.status == 1) {
            res.data.data.forEach(i => {
              i.active = ''
            });
            this.setData({
              duty: res.data.data,
              dutys: res.data.data
            })
          }
        }).then(() => {
          app.post('/comm/getWelfare').then((res) => {
            if (res.data.status == 1) {
              res.data.data.forEach(i => {
                i.active = ''
              });
              this.setData({
                welfare: res.data.data,
                welfares: res.data.data
              })
            }
          }).then(() => {
            if (options.edit) {
              app.post('/Recruit/getPublishDetail', {
                token: wx.getStorageSync('userInfo').token,
                rpr_id: this.data.id
              }).then((res) => {
                if (res.data.status == 1) {
                  setTimeout(function () {
                    wx.hideLoading()
                  }, 500)
                  if (res.data.data.info.rpr_experience) {
                    var kinds = JSON.parse(JSON.stringify(this.data.kinds))
                    var dutys = JSON.parse(JSON.stringify(this.data.dutys))
                    var welfares = JSON.parse(JSON.stringify(this.data.welfares))
                    var kindTxt = ''
                    var dutyTxt = ''
                    var welfareTxt = ''
                    var customTxt = ''
                    var kindNum = ''
                    var dutyNum = ''
                    var welfareNum = ''
                    var rpr_custom = JSON.parse(res.data.data.info.rpr_custom)
                    kinds.forEach(i => {
                      res.data.data.catering.forEach(j => {
                        if (i.ke_id == j) {
                          i.active = 'active'
                          kindTxt += i.ke_name + '/'
                          kindNum += i.ke_id + '/'
                        }
                      })
                    })
                    dutys.forEach(i => {
                      res.data.data.duty.forEach(j => {
                        if (i.rd_id == j) {
                          i.active = 'active'
                          dutyTxt += i.rd_name + '/'
                          dutyNum += i.rd_id + '/'
                        }
                      })
                    })
                    welfares.forEach(i => {
                      res.data.data.welfare.forEach(j => {
                        if (i.rf_id == j) {
                          i.active = 'active'
                          welfareTxt += i.rf_name + '/'
                          welfareNum += i.rf_id + '/'
                        }
                      })
                    })
                    if (rpr_custom) {
                      if (rpr_custom.length != 0) {
                        rpr_custom.forEach(i => {
                          if (i.active) {
                            customTxt += i.rc_name + '/'
                          }
                        })
                      }
                    }
                    if (kindTxt) {
                      kindTxt = kindTxt.slice(0, kindTxt.length - 1)
                      kindNum = kindNum.slice(0, kindNum.length - 1)
                    }
                    if (dutyTxt) {
                      dutyTxt = dutyTxt.slice(0, dutyTxt.length - 1)
                      dutyNum = dutyNum.slice(0, dutyNum.length - 1)
                    }
                    if (welfareTxt) {
                      welfareTxt = welfareTxt.slice(0, welfareTxt.length - 1)
                      welfareNum = welfareNum.slice(0, welfareNum.length - 1)
                    }
                    if (customTxt) {
                      customTxt = customTxt.slice(0, customTxt.length - 1)
                    }
                    var txt = kindTxt + ((kindTxt && dutyTxt) || (kindTxt && welfareTxt) || (kindTxt && customTxt) ? ',' : '') + dutyTxt + ((dutyTxt && welfareTxt) || (dutyTxt && customTxt) ? ',' : '') + welfareTxt + ((welfareTxt && customTxt) ? ',' : '') + customTxt
                    var num = kindNum + ',' + dutyNum + ',' + welfareNum
                    this.setData({
                      title: res.data.data.info.rpr_title,
                      jobName: res.data.data.info.rpr_position_name,
                      jobDescribe: res.data.data.info.rpr_job_description,
                      sufferIndex: res.data.data.info.rpr_experience - 1,
                      sufferValue: this.data.sufferArrs[res.data.data.info.rpr_experience - 1],
                      learnIndex: res.data.data.info.rpr_minimum_education - 1,
                      learnValue: this.data.learnArrs[res.data.data.info.rpr_minimum_education - 1],
                      salaryArray: res.data.data.info.rpr_maximum_waga == '面议' ? this.data.salaryArray : this.data.salaryArrays,
                      salaryIndex: [
                        res.data.data.info.rpr_maximum_waga == '面议' ? this.data.salaryArray[0].indexOf(res.data.data.info.rpr_minimum_waga) : this.data.salaryArrays[0].indexOf(res.data.data.info.rpr_minimum_waga),
                        res.data.data.info.rpr_maximum_waga == '面议' ? this.data.salaryArray[1].indexOf(res.data.data.info.rpr_maximum_waga) : this.data.salaryArrays[1].indexOf(res.data.data.info.rpr_maximum_waga),
                        this.data.salaryArray[2].indexOf(res.data.data.info.rpr_few_salaries + '薪')
                      ],
                      salaryMin: res.data.data.info.rpr_minimum_waga,
                      salaryMax: res.data.data.info.rpr_maximum_waga,
                      fewPay: res.data.data.info.rpr_few_salaries,
                      kinds: kinds,
                      dutys: dutys,
                      welfares: welfares,
                      customs: rpr_custom,
                      txt: txt,
                      num: num,
                      provincess: res.data.data.info.rpr_provinces,
                      citys: res.data.data.info.rpr_city,
                      areas: res.data.data.info.rpr_area,
                      workAddresss: res.data.data.info.rpr_work_address,
                      fullAddresss: res.data.data.info.rpr_doorplate,
                      longitudes: res.data.data.info.rpr_longitude,
                      latitudes: res.data.data.info.rpr_latitude,
                      workFullAddress: res.data.data.info.rpr_work_address + res.data.data.info.rpr_doorplate,
                      active2: 'actives'
                    })
                  }else{
                    this.setData({
                      title: res.data.data.info.rpr_title,
                      jobName: res.data.data.info.rpr_position_name,
                      jobDescribe: res.data.data.info.rpr_job_description
                    })
                  }
                }
              })
            }
          })
        })
      })
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
    wx.removeStorageSync('custom')
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