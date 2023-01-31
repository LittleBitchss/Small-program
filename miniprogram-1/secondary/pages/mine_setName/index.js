// secondary/pages/mine_setName/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    values:'',
    value:'',
    headPicture:'',
    sourceType: [
      'camera', 'album'
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '设置头像和昵称',
    })
    if(options.nickName){
      this.setData({
        values:options.nickName,
        value:options.nickName,
        headPicture:options.avatar
      })
    }
  },
  setName(){
    this.setData({
      show:true,
      values:this.data.value
    })
  },
  inputs(e){
    this.setData({
      value:e.detail.value
    })
  },
  complete(){
    this.setData({
      values:this.data.value,
      show:false
    })
  },
  saves(){
    app.post('/comm/setUserInfo', {
      token: wx.getStorageSync('userInfo').token,
      name:this.data.values,
      pic_path:this.data.headPicture
    }).then(res => {
      if(res.data.status == 1){
        wx.showToast({
          title: res.data.msg,
        })
      }
    })
    wx.navigateBack({
      delta: 1
    })
    var pages = getCurrentPages();
    var beforePage = pages[pages.length - 2];
    beforePage.getUserInfo()
  },
  // 上传图片
  upload() {
    const that = this
    //调用微信上传照片的方法
    wx.showActionSheet({
      itemList: ['拍照', '相册'],
      itemColor: "#f7982a",
      //成功时回调
      success(res) {
        if (!res.cancel) {
          //调用相册或者照相的方法，传参INDEX 
          that.chooseImage(res.tapIndex)
        }
      },
      //失败时回调
      fail(res) {
        console.log('调用失败');
      }
    })
  },
  //打开相册或者照相的方法
  chooseImage(tapIndex) {
    const that = this
    //调用微信方法 打开相册或者照相的功能
    wx.chooseMedia({
      count: 1,
      sizeType: ['compressed'],
      //根据下标选择data数据，以此判断是拍照还是相册
      sourceType: [that.data.sourceType[tapIndex]],
      success(res) {
        try {
          app.upload(res.tempFiles[0].tempFilePath, "userProfilePicture" + wx.getStorageSync('userInfo').user_id).then(res => {
            if (res.status == 1) {
              that.setData({
                headPicture: res.data.fullurl
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