// secondary/pages/talentInfo/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{},
    education:[],
    position:[],
    r_id:''
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      r_id:options.rrr_id
    })
    app.post('/comm/getEducation').then(res =>{
      if(res.data.status == 1){
        this.setData({
          education:res.data.data
        })
      }
    })
    app.post('/comm/getPosition').then(res =>{
      if(res.data.status == 1){
        console.log(res.data.data);
        this.setData({
          position:res.data.data
        })
      }
    })
    
    
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    
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