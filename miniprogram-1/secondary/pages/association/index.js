// secondary/pages/association/index.js
import * as echarts from '../../ec-canvas/echarts';
const app = getApp();

function initChart(chart, seriesData, legendData) {
  var option = {
    title: {
      text: '厨师数据统计',
      top: "2%",
      x: "center"
    },
    tooltip: {
      // tip提示
      trigger: 'item',
      formatter: '{a} \n{b} : {c} ({d}%)',
    },
    backgroundColor: "",
    legend: {
      show: true,
      bottom: "2%",
      width: "340", //图例宽度
      height: "auto",
      itemHeight: 10,
      itemWidth: 10,
      textStyle: {
        color: '#000',
        fontSize: 10,
        padding: [0, 0, 0, 0]
      },
      data: legendData || []
    },
    series: [{
      name: '乡宴次数',
      type: 'pie',
      center: ['50%', '46%'],
      radius: ['20%', '50%'],
      label: {
        normal: {
          fontSize: 14
        },
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        // 线条
        // show: false,
      },
      data: seriesData || [],
      itemStyle: {
        // 阴影
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    }]
  };
  chart.setOption(option);
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:'',
    locationArr:[],
    domain: app.domain + "/img/chef/",
    ec: {
      lazyLoad: true
    },
    province: [],
    provinceValue: "全部",
    province_code: 0,
    province_show: false,
    fontColor1: "",

    city: [],
    cityValue: "全部",
    city_code: 0,
    city_show: false,
    fontColor2: "",

    area: [],
    areaValue: "全部",
    area_code: 0,
    area_show: false,
    fontColor3: "",

    street: [],
    streetValue: "全部",
    street_code: 0,
    street_show: false,
    fontColor4: "",

    village: [],
    villageValue: "全部",
    village_code: 0,
    village_show: false,
    fontColor5: "",

    lists: [],
    initChartArr: [],
    initChartArrs: [],
    legend: ['老沙吴家', '小叔房', '外张村', '小江口', '东江嘴'],
    imShow: 1,
    page: 1,
    grade: [{
      code: 1,
      name: '初级（国家职业资格五级）'
    }, {
      code: '2',
      name: '中级（国家职业资格四级）'
    }, {
      code: 3,
      name: '高级（国家职业资格三级）'
    }, {
      code: 4,
      name: '技师（国家职业资格二级）'
    }, {
      code: 5,
      name: '高级技师（国家职业资格一级）'
    }],
  },
  unfold(e) {
    var index = e.currentTarget.dataset.index
    if (index == 1) {
      this.setData({
        province_show: !this.data.province_show,
        sex_show: false,
        city_show: false,
        area_show: false,
        street_show: false,
        village_show: false
      })
    } else if (index == 2) {
      this.setData({
        city_show: !this.data.city_show,
        sex_show: false,
        province_show: false,
        area_show: false,
        street_show: false,
        village_show: false
      })
    } else if (index == 3) {
      this.setData({
        area_show: !this.data.area_show,
        sex_show: false,
        province_show: false,
        city_show: false,
        street_show: false,
        village_show: false
      })
    } else if (index == 4) {
      this.setData({
        street_show: !this.data.street_show,
        sex_show: false,
        province_show: false,
        city_show: false,
        area_show: false,
        village_show: false
      })
    } else if (index == 5) {
      this.setData({
        village_show: !this.data.village_show,
        sex_show: false,
        province_show: false,
        city_show: false,
        area_show: false,
        street_show: false
      })
    }
  },
  choose(e) {
    wx.showLoading({
      title: '加载中'
    })
    var index = e.currentTarget.dataset.index
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      this.setData({
        provinceValue: this.data.province[index].name,
        province_code: this.data.province[index].code,
        province_show: false,
        cityValue: "全部",
        city: [],
        area: [],
        street: [],
        village: [],
        city_code: 0,
        area_code: 0,
        street_code: 0,
        village_code: 0,
        areaValue: "全部",
        streetValue: "全部",
        villageValue: "全部",
      })
      try {
        app.post('/region/getCity', {
          province_code: this.data.province_code
        }).then(res => {
          if (res.data.status == 1) {
            this.setData({
              city: res.data.data
            })
          } else {
            wx.showToast({
              title: "获取失败",
              icon: 'error',
              duration: 1000 //持续的时间
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
        areaValue: "全部",
        area: [],
        street: [],
        village: [],
        area_code: 0,
        street_code: 0,
        village_code: 0,
        streetValue: "全部",
        villageValue: "全部",
      })
      try {
        app.post('/region/getAreas', {
          city_code: this.data.city_code
        }).then(res => {
          if (res.data.status == 1) {
            this.setData({
              area: res.data.data,
            })
          } else {
            wx.showToast({
              title: "获取失败",
              icon: 'error',
              duration: 1000 //持续的时间
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
        street: [],
        village: [],
        street_code: 0,
        village_code: 0,
        streetValue: "全部",
        villageValue: "全部",
      })
      try {
        app.post('/region/getStreets', {
          area_code: this.data.area_code
        }).then(res => {
          if (res.data.status == 1) {
            this.setData({
              street: res.data.data,
            })
          } else {
            wx.showToast({
              title: "获取失败",
              icon: 'error',
              duration: 1000 //持续的时间
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
        villageValue: "全部",
        village: [],
        village_code: 0,
      })
      try {
        app.post('/region/getVillage', {
          street_code: this.data.street_code
        }).then(res => {
          if (res.data.status == 1) {
            this.setData({
              village: res.data.data
            })
          } else {
            wx.showToast({
              title: "获取失败",
              icon: 'error',
              duration: 1000 //持续的时间
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
      })
    }
    this.setData({
      page: 1,
      lists: [],
      initChartArr: [],
      initChartArrs: []
    })
    this.requestData(this.data.page, (res) => {
      if (res.lists.length == 0) {
        wx.hideLoading()
        this.updataView(res)
        wx.showToast({
          title: '没有了~',
          icon: 'error',
          duration: 1000 //持续的时间
        })
      } else {
        this.updataView(res)
        wx.showToast({
          title: '加载成功',
          icon: 'success',
          duration: 1000 //持续的时间
        })
      }
    })
  },
  close() {
    this.setData({
      province_show: false,
      city_show: false,
      area_show: false,
      street_show: false,
      village_show: false
    })
  },
  // 请求数据
  requestData(page, callback) {
    this.oneComponent = this.selectComponent('#mychart-dom-pie');
    var obj = {
      m_token: wx.getStorageSync('association').m_token,
      province: this.data.province_code,
      city: this.data.city_code,
      area: this.data.area_code,
      street: this.data.street_code,
      village: this.data.village_code,
      page: page
    }
    app.post('/manage/chefList', obj).then(res => {
      if (res.data.status == 1) {
        wx.hideLoading()
        var arr = []
        var arrs = []
        if (res.data.data.charts.name[0] && res.data.data.charts.name[0].length != 0) {
          res.data.data.charts.name.forEach((i, index) => {
            arr.push({
              name: i,
              value: res.data.data.charts.value[index]
            })
            arrs.push(i)
          })
        }
        var obj = {
          lists: res.data.data.rows,
          initChartArr: arr,
          initChartArrs: arrs
        }
        callback(obj)
      }
    })
  },
  updataView(res) {
    this.setData({
      lists: this.data.lists.concat(res.lists),
      initChartArr: this.data.initChartArr.concat(res.initChartArr),
      initChartArrs: this.data.initChartArrs.concat(res.initChartArrs)
    })
    this.init_chart(this.data.initChartArr, this.data.initChartArrs)
  },
  lower() {
    wx.showLoading({
      title: '加载中'
    })
    if (this.data.lists.length % 10 == 0) {
      this.setData({
        page: this.data.page + 1
      })
      this.requestData(this.data.page, (res) => {
        if (res.lists.length == 0) {
          wx.hideLoading()
          wx.showToast({
            title: '没有了~',
            icon: 'error',
            duration: 1000 //持续的时间
          })
        } else {
          this.updataView(res)
          wx.showToast({
            title: '加载成功',
            icon: 'success',
            duration: 1000 //持续的时间
          })
        }
      })
    }
  },
  init_chart: function (seriesData, legendData) { //初始化第一个图表
    this.oneComponent.init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      canvas.setChart(chart);
      initChart(chart, seriesData, legendData)
      this.chart = chart;
      return chart;
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: '加载中'
    })
    wx.setNavigationBarTitle({
      title: '厨师汇总',
    })
    var association = wx.getStorageSync('association').location
    if (association) {
      try {
        app.post('/region/getProvince', {
          province_code: 0
        }).then(res => {
          if (res.data.status == 1) {
            this.setData({
              province: res.data.data
            })
          }
        }).then(res => {
          app.post('/region/getCity', {
            province_code: association.province
          }).then(res => {
            if (res.data.status == 1) {
              this.setData({
                city: res.data.data
              })
            }
          }).then(res => {
            app.post('/region/getAreas', {
              city_code: association.city
            }).then(res => {
              if (res.data.status == 1) {
                this.setData({
                  area: res.data.data
                })
              }
            }).then(res => {
              app.post('/region/getStreets', {
                area_code: association.area
              }).then(res => {
                if (res.data.status == 1) {
                  this.setData({
                    street: res.data.data
                  })
                }
              }).then(res => {
                app.post('/region/getVillage', {
                  street_code: association.street
                }).then(res => {
                  if (res.data.status == 1) {
                    this.setData({
                      village: res.data.data
                    })
                  }
                }).then(res => {
                  var provinces = association.province == 0 ? "全部" : this.data.province.find(i => i.code == association.province)
                  var city = association.city == 0 ? "全部" : this.data.city.find(i => i.code == association.city)
                  var area = association.area == 0 ? "全部" : this.data.area.find(i => i.code == association.area)
                  var street = association.street == 0 ? "全部" : this.data.street.find(i => i.code == association.street)
                  var village = association.village == 0 ? "全部" : this.data.village.find(i => i.code == association.village)
                  var locationArr = [
                    association.province,
                    association.city,
                    association.area,
                    association.street,
                    association.village,
                  ]
                  var locationStrArr = [
                    provinces.name,
                    city.name,
                    area.name,
                    street.name,
                    village.name,
                  ]
                  var index = locationArr.indexOf(0)
                  if(index!=0){
                    var location = locationStrArr[index-1]
                  }
                  this.setData({
                    provinceValue: provinces.name == undefined ? "全部" : provinces.name,
                    cityValue: city.name == undefined ? "全部" : city.name,
                    areaValue: area.name == undefined ? "全部" : area.name,
                    streetValue: street.name == undefined ? "全部" : street.name,
                    villageValue: village.name == undefined ? "全部" : village.name,
                    province_code: provinces.code == undefined ? 0 : provinces.code,
                    city_code: city.code == undefined ? 0 : city.code,
                    area_code: area.code == undefined ? 0 : area.code,
                    street_code: street.code == undefined ? 0 : street.code,
                    village_code: village.code == undefined ? 0 : village.code,
                    location: location ? location : '',
                    locationArr:locationArr
                  })
                  this.requestData(this.data.page, (res) => {
                    if (res.lists.length == 0) {
                      wx.hideLoading()
                      wx.showToast({
                        title: '没有了~',
                        icon: 'error',
                        duration: 1000 //持续的时间
                      })
                    } else {
                      this.updataView(res)
                      wx.showToast({
                        title: '加载成功',
                        icon: 'success',
                        duration: 1000 //持续的时间
                      })
                    }
                  })
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
    }
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
    let pages = getCurrentPages(); // 当前页面
    let beforePage = pages[pages.length - 2]; //前一个页面
    beforePage.onShow();
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