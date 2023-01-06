// secondary/pages/JobPostings/index.js
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
    domains: app.domain + '/img/chefs/',
    info:{},
    companySize:[]
  },
  goMap(){
    wx.openLocation({
      latitude: Number(this.data.info.rpr_latitude),
      longitude: Number(this.data.info.rpr_longitude),
    })
  },
  deliver(){
    app.post('/Job/sendResume',{
      token:wx.getStorageSync('userInfo').token,
      rpr_id:this.data.info.rpr_id
    }).then((res)=>{
      console.log(res);
      if(res.data.status == 1){
        wx.showToast({
          title: res.data.msg,
          icon: 'success',
          duration: 1000
        })
        wx.navigateBack({
          delta: 1
        })
      }else{

      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '招聘信息',
    })
    this.setData({
      companySize: wx.getStorageSync('companySize')
    })
    setTimeout(()=>{
      wx.showLoading({
        title: '加载中',
      })
    },200)
    app.post('/Job/getRecruitDetail',{
      token:wx.getStorageSync('userInfo').token,
      rpr_id:options.rpr_id
    }).then((res)=>{
      console.log(res);
      var rex = res
      if(res.data.status==1){
        setTimeout(()=>{
          qqMapSdk.reverseGeocoder({
            location: {
              longitude: res.data.data.rpr_longitude,
              latitude: res.data.data.rpr_latitude
            },
            success(res) {
              rex.data.data.cityArea = res.result.address_component.city+res.result.address_component.district
            }
          })
          res.data.data.rpr_experience = res.data.data.rpr_experience ? wx.getStorageSync('experience').find(j => j.e_id == res.data.data.rpr_experience).e_name : ''
          res.data.data.rpr_minimum_education = res.data.data.rpr_minimum_education ? wx.getStorageSync('education').find(j => j.e_id == res.data.data.rpr_minimum_education).e_name : ''
          res.data.data.companySize = this.data.companySize.find(i=>i.rcn_id==res.data.data.number).rcn_name
          var caterings = []
          var dutys = []
          var welfares = []
          var customs = []
          if(res.data.data.catering){
            var catering = res.data.data.catering.split(',')
            catering.forEach(i=>{
              if(i==1){
                caterings.push('中餐')
              }else if(i==2){
                caterings.push('西餐')
              }else if(i==3){
                caterings.push('糕点/甜品')
              }
            })
          }
          if(res.data.data.duty){
            var duty = res.data.data.duty.split(',')
            var recruitDuty = wx.getStorageSync('recruitDuty')
            duty.forEach(i=>{
              var a = recruitDuty.find(j=>j.rd_id == i).rd_name
              if(a){
                dutys.push(a)
              }
            })
          }
          if(res.data.data.welfare){
            var welfare = res.data.data.welfare.split(',')
            var welfarex = wx.getStorageSync('welfare')
            welfare.forEach(i=>{
              var a = welfarex.find(j=>j.rf_id == i).rf_name
              if(a){
                welfares.push(a)
              }
            })
          }
          if(res.data.data.custom){
            var custom = JSON.parse(res.data.data.custom)
            custom.forEach(i=>{
              customs.push(i.rc_name) 
            })
          }
          var dutyBenefit = caterings.concat(dutys).concat(welfares).concat(customs)
          res.data.data.dutyBenefit = dutyBenefit
        })
        setTimeout(()=>{
          this.setData({
            info:res.data.data
          })
          wx.hideLoading()
        },500)
      }else{
        setTimeout(()=>{
          wx.hideLoading()
        },500)
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