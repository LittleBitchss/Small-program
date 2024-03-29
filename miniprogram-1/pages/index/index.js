// index.js
const app = getApp()
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min');
const qqMapSdk = new QQMapWX({
  key: 'ABNBZ-GKPLS-FOAOJ-6HOP3-GAWZO-NNFDH'
});
var startY, endY, startX, endX;
var moveFlag = true; // 判断执行滑动事件
var moveFlagX = true; // 判断执行滑动事件
Page({
  data: {
    domain: app.domain + "/img/index/",
    // 自定义顶部导航栏模块数据
    navHeight: '',
    searchMarginTop: 0, // 搜索框上边距
    searchHeight: 0, // 搜索框高度
    searchHeights: 0,
    region: [],
    area_code: "",
    swiperArr:[app.domain + "/img/index/swiper1.png",app.domain + "/img/index/swiper1.png",app.domain + "/img/index/swiper1.png"],
    // Map模块数据
    // title: "正在获取地址...",
    // address: "",
    // distance: 0,
    // showview: false,
    // latitude: "",
    // longitude: "",
    // currentLatitude: "",
    // currentLongitude: "",
    // show_ani: "",
    // addressArr: [],
    // upload: {},
    // value: "",
    // 滑块数据
    // anima: "",
    animas: "",
    active1: "active",
    active2: "",
    gm_token: "",
    m_token: "",
    components: [{
        img: "../../icon/index-components1.png",
        url: "/pages/index/familyDinnerApplication/index",
        type: "navigate",
        text: "家宴预订"
      },
      {
        img: "../../icon/index-components2.png",
        url: "/pages/index/chefGoHome/index",
        type: "navigate",
        text: "厨师到家"
      },
      {
        img: "../../icon/index-components3.png",
        url: "/pages/index/banquetWedding/index",
        type: "navigate",
        text: "宴会婚庆"
      },
      {
        img: "../../icon/index-components4.png",
        url: 0,
        type: "navigate",
        text: "景区民宿"
      },
      {
        img: "../../icon/index-components5.png",
        url: 0,
        type: "navigate",
        text: "餐饮食堂"
      },
      {
        img: app.domain + "/img/index/index-components6.png",
        type: "navigate",
        appid: 'wx0ab3540bc984be96',
        text: "预制菜",
        url: "/pages/index/index",
      },
      {
        img: "../../icon/index-components7.png",
        url: 0,
        type: "navigate",
        text: "智慧农业"
      },
      {
        img: "../../icon/index-components8.png",
        url: !wx.getStorageSync('userInfo').role ? "/pages/index/jobRecruitment/index" : !wx.getStorageSync('userInfo').card ? "/secondary/pages/createTraCQ/index" : "/pages/index/recruitment/index",
        type: "navigate",
        text: "求职招聘"
      }
    ],
    components2: [{
        img: "../../icon/index-components9.png",
        url: 0,
        type: "navigate",
        text: "培训报名"
      },
      {
        img: app.domain + "/img/index/index-components10.png",
        url: "/pages/index/foodSafetySupervision/index?id=2",
        type: "navigate",
        text: "餐厨协会"
      },
      {
        img: app.domain + "/img/index/index-components11.png",
        type: "navigate",
        url: 0,
        text: "中华保险"
      },
      {
        img: "../../icon/index-components12.png",
        type: "navigate",
        url: "/pages/index/foodSafetySupervision/index?id=1",
        text: "食安监管"
      }
    ]
  },
  getAddress(lng, lat) {
    var that = this
    //根据经纬度====>转换腾底图----》获取地址信息
    qqMapSdk.reverseGeocoder({
      location: {
        latitude: lat,
        longitude: lng
      },
      success: (res) => {
        var userInfo = wx.getStorageSync('userInfo')
        userInfo.province = res.result.ad_info.province
        userInfo.provincecode = res.result.ad_info.city_code.slice(3,5)+'0000'
        userInfo.citys = res.result.ad_info.city
        userInfo.citycode = res.result.ad_info.city_code.slice(3, 9)
        userInfo.district = res.result.ad_info.district
        userInfo.adcode = res.result.ad_info.adcode
        wx.setStorageSync('userInfo', userInfo)
        // var lat1 = that.data.currentLatitude,
        //   lng1 = that.data.currentLongitude,
        //   lat2 = res.result.address_reference.landmark_l2.location.lat,
        //   lng2 = res.result.address_reference.landmark_l2.location.lng
        // var distance = that.getMapDistance(lat1, lng1, lat2, lng2)
        this.setData({
          title: res.result.formatted_addresses.recommend,
          address: res.result.address,
          // distance: Math.floor(distance * 1000),
          region: [res.result.ad_info.province, res.result.ad_info.city, res.result.ad_info.district],
          area_code: res.result.ad_info.adcode
        }, (() => {
          setTimeout(() => {
            this.setData({
              show_ani: "",
              // anima:"upToMiddle"
            })
          }, 1000);
        }))
      },
      fail: (res) => {
        this.setData({
          address: "获取位置信息失败"
        })
      }
    })
  },
  getNowLocation() {
    var that = this
    var storage = wx.getStorageSync('userInfo')
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          currentLatitude: res.latitude,
          currentLongitude: res.longitude
        })
        that.getAddress(res.longitude, res.latitude);
        storage.longitude = res.longitude
        storage.latitude = res.latitude
        wx.setStorageSync('userInfo', storage)
      }
    })
  },
  regionchange(e) {
    var that = this
    // 地图发生变化的时候，获取中间点，也就是cover-image指定的位置
    if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
      this.setData({
        address: "正在获取地址..."
      })
      that.map = wx.createMapContext("maps", that);
      that.map.getCenterLocation({
        // type: 'gcj02',
        success: (res) => {
          this.setData({
            show_ani: "show",
            latitude: res.latitude,
            longitude: res.longitude,
            showview: false,
            value: ""
          })
          this.getAddress(res.longitude, res.latitude);
        }
      })
    }
  },
  bindRegionChange: function (e) {
    var that = this
    this.setData({
      region: e.detail.value,
      area_code: e.detail.code[2]
    })
    qqMapSdk.geocoder({
      //获取表单传入地址
      address: e.detail.value[0] + e.detail.value[1] + e.detail.value[2], //地址
      success: function (res) { //成功后的回调
        that.setData({
          latitude: res.result.location.lat,
          longitude: res.result.location.lng,
        })
      }
    })
  },
  aaa(e) {
    var appId = e.currentTarget.dataset.appid
    var url = e.currentTarget.dataset.url
    if (appId) {
      wx.navigateToMiniProgram({
        appId: appId, //appid
        path: '/pages/index/index', //path
        extraData: { //参数
          foo: 'bar'
        },
        envVersion: 'trial', //开发版develop 开发版 trial   体验版 release 正式版 
        success(res) {
          console.log('成功')
          // 打开成功
        }
      })
    }
    if(!url){
      wx.showToast({
        title: '暂未开放',
      })
    }
  },
  //进行经纬度转换为距离的计算
  /*Rad(d) {
    return d * Math.PI / 180.0;
  },*/
  /*getMapDistance(lat1, lng1, lat2, lng2) {
    var radLat1 = this.Rad(lat1);
    var radLat2 = this.Rad(lat2);
    var a = radLat1 - radLat2;
    var b = this.Rad(lng1) - this.Rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000;
    return s;
  },*/
  // 触摸开始事件
  touchStart: function (e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      startY = e.touches[0].pageY; // 获取触摸时的原点
      moveFlag = true;
    } else if (item == 2) {
      startX = e.touches[0].pageX; // 获取触摸时的原点
      moveFlagX = true;
    }
  },
  // 触摸移动事件
  touchMove: function (e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      endY = e.touches[0].pageY; // 获取触摸时的原点
      if (moveFlag) {
        if (endY - startY > 50) {
          moveFlag = false;
          if (this.data.anima == "middleToDown") {
            this.setData({
              anima: "downToMiddle"
            })
          }
        }
        // 上
        if (startY - endY > 50) {
          moveFlag = false;
          if (this.data.anima == "") {
            this.setData({
              anima: "middleToDown"
            })
          } else if (this.data.anima == "downToMiddle") {
            this.setData({
              anima: "middleToDown"
            })
          }
        }
      }
    } else if (item == 2) {
      endX = e.touches[0].pageX; // 获取触摸时的原点
      if (moveFlagX) {
        if (endX - startX > 50) {
          moveFlagX = false;
          if (this.data.animas == "toRight") {
            this.setData({
              animas: "toLeft",
              active1: "active",
              active2: ""
            })
          }
        }
        // 向左
        if (startX - endX > 50) {
          moveFlagX = false;
          if (this.data.animas == "" || this.data.animas == "toLeft") {
            this.setData({
              animas: "toRight",
              active1: "",
              active2: "active"
            })
          }
        }
      }
    }
  },
  // 触摸结束事件
  touchEnd: function (e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      moveFlag = true; // 回复滑动事件
    } else if (item == 2) {
      moveFlagX = true; // 回复滑动事件
    }
  },
  getSetting: function () {
    let that = this;
    wx.getSetting({
      success: (res) => {
        // 查看位置权限的状态 如果是首次授权(undefined)或者之前拒绝授权(false)            
        //!res.authSetting['scope.userLocation']
        if (res.authSetting['scope.userLocation'] == false) {
          //之前拒绝授权(false)
          that.openConfirm()
        } else {
          //如果是首次授权则弹出授权窗口进行授权，如果之前进行了授权，则获取地理位置信息
          // that.getLocation()
        }
      }
    })
  },
  openConfirm: function () {
    let that = this;
    wx.showModal({
      content: '检测到您没打开定位权限，是否去设置打开？',
      confirmText: "确认",
      cancelText: "取消",
      success: function (res) {
        //点击“确认”时打开设置页面
        if (res.confirm) {
          wx.openSetting({
            success: (res) => {
              that.getLocation()
            }
          })
        }
      }
    });
  },
  getLocation: function () {
    let that = this;
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success: function (res) {},
      fail: function (res) {
        console.log("---未授权---");
        wx.openSetting({})
      },
      complete: function (res) {},
    })
  },
  goUserOrder() {
    wx.navigateTo({
      url: '/pages/mine/userOrder/index?index=1'
    })
  },
  onLoad() {
    var that = this
    if(wx.getStorageSync('userInfo').isLogin!=1){
      wx.redirectTo({
        url: "/pages/authorizedLogin/index"
      })
      wx.removeStorageSync('userInfo')
      return
    }
    that.getNowLocation()
    that.getSetting()
    try {
      app.post('/index/getMatsuiType').then(res => {
        if (res.data.status == 1) {
          wx.setStorageSync('types', res.data.data)
        }
      })
      app.post('/comm/getCuisine').then(res => {
        if (res.data.status == 1) {
          wx.setStorageSync('cuisine', res.data.data)
        }
      })
    } catch {
      wx.showToast({
        title: '网络不稳定~',
        icon: 'error',
        duration: 1000 //持续的时间
      })
    }
  },
  onShow: function () {
    var systeminfo = wx.getSystemInfoSync()
    this.setData({
      movehight: systeminfo.windowHeight,
      movehight2: systeminfo.windowHeight - 100
    })
    const {
      top,
      width,
      height,
      right
    } = wx.getMenuButtonBoundingClientRect()
    wx.getSystemInfo({
      success: (res) => {
        const {
          statusBarHeight
        } = res
        const margin = top - statusBarHeight
        this.setData({
          navHeight: (height + statusBarHeight + (margin * 2)),
          searchHeights: res.windowHeight - (height + statusBarHeight + (margin * 2)),
          searchMarginTop: statusBarHeight + margin, // 状态栏 + 胶囊按钮边距
          searchHeight: height, // 与胶囊按钮同高
          searchWidth: right - width - 20 // 胶囊按钮右边坐标 - 胶囊按钮宽度 = 按钮左边可使用宽度
        })
      }
    })
    var components2 = JSON.parse(JSON.stringify(this.data.components2))
    if (wx.getStorageSync('admin').m_token) {
      components2[3].url = "/secondary/pages/admin/index"
    } else if (wx.getStorageSync('gridman').gm_token) {
      components2[3].url = "/secondary/pages/gridman/index"
    }
    if (wx.getStorageSync('association').m_token) {
      components2[1].url = "/secondary/pages/association/index"
    }
    this.setData({
      components2: components2
    })
  },
})