// secondary/pages/createTraCQ/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    sourceType: [
      'camera', 'album'
    ],
    active1: '',
    active2: '',
    actives1: '',
    actives2: '',
    actives3: '',
    rc_id: 0,
    avatar: '',
    name: '',
    names: '请进行身份验证',
    IDCard: '',
    IDCardPlaceholder: "请填写您的身份证号码",
    IDCardPlaceholderClass: "",
    IDCardIs: '',
    IDCardThe: '',
    companyName: '',
    companyNames: '请填写您当前就职的公司',
    companyNameNum: 0,
    license: '',
    licensePlaceholder: "请填写您所属公司的营业执照编号",
    licensePlaceholderClass: "",
    licenseNum: 0,
    licensePhoto: '',
    dutuies: '',
    maskType: 0,
    card: 0
  },
  openpage(e) {
    var item = e.currentTarget.dataset.item
    this.setData({
      show: true,
      maskType: item
    })
    if (item == 1) {
      if (this.data.names == '请进行身份验证') {
        this.setData({
          name: '',
          IDCard: '',
          IDCardIs: '',
          IDCardThe: '',
          actives1: ''
        })
      } else {
        this.setData({
          actives1: 'actives'
        })
      }
    } else if (item == 2) {
      if (this.data.companyNames == '请填写您当前就职的公司') {
        this.setData({
          companyName: '',
          companyNameNum: 0,
          license: '',
          licenseNum: 0,
          licensePhoto: '',
          actives2: ''
        })
      } else {
        this.setData({
          actives2: 'actives'
        })
      }
    }
  },
  // 上传图片
  upload(e) {
    var item = e.currentTarget.dataset.item
    const that = this
    //调用微信上传照片的方法
    wx.showActionSheet({
      itemList: ['拍照', '相册'],
      itemColor: "#f7982a",
      //成功时回调
      success(res) {
        if (!res.cancel) {
          //调用相册或者照相的方法，传参INDEX 
          that.chooseImage(res.tapIndex, item)
        }
      },
      //失败时回调
      fail(res) {
        console.log('调用失败');
      }
    })
  },
  //打开相册或者照相的方法
  chooseImage(tapIndex, item) {
    const that = this
    //调用微信方法 打开相册或者照相的功能
    wx.chooseMedia({
      count: 1,
      sizeType: ['compressed'],
      //根据下标选择data数据，以此判断是拍照还是相册
      sourceType: [that.data.sourceType[tapIndex]],
      success(res) {
        try {
          app.upload(res.tempFiles[0].tempFilePath, "recruitment" + wx.getStorageSync('userInfo').user_id).then(res => {
            if (res.status == 1) {
              if (item == 1) {
                that.setData({
                  avatar: res.data.fullurl
                })
                if (that.data.avatar != '' && that.data.names != '请进行身份验证' && that.data.companyNames != '请填写您当前就职的公司' && that.data.dutuies != '') {
                  that.setData({
                    actives3: 'actives'
                  })
                } else {
                  that.setData({
                    actives3: ''
                  })
                }
              } else if (item == 2) {
                that.setData({
                  IDCardIs: res.data.fullurl
                })
                if (that.data.name != '' && that.data.IDCard != '' && that.data.IDCardIs != '' && that.data.IDCardThe != '') {
                  that.setData({
                    actives1: 'actives'
                  })
                }
              } else if (item == 3) {
                that.setData({
                  IDCardThe: res.data.fullurl
                })
                if (that.data.name != '' && that.data.IDCard != '' && that.data.IDCardIs != '' && that.data.IDCardThe != '') {
                  that.setData({
                    actives1: 'actives'
                  })
                }
              } else if (item == 4) {
                that.setData({
                  licensePhoto: res.data.fullurl
                })
                if (that.data.companyName != '' && that.data.license != '' && that.data.licensePhoto != '') {
                  that.setData({
                    actives2: 'actives'
                  })
                }
              }
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
  inputs(e) {
    var item = e.currentTarget.dataset.item
    var val = e.detail.value
    var cur = e.detail.cursor
    if (item == 1) {
      this.setData({
        name: val
      })
      if (this.data.name != '' && this.data.IDCard != '' && this.data.IDCardIs != '' && this.data.IDCardThe != '') {
        this.setData({
          actives1: 'actives'
        })
      } else {
        this.setData({
          actives1: ''
        })
      }
    } else if (item == 2) {
      this.setData({
        IDCard: val
      })
      if (this.data.name != '' && this.data.IDCard != '' && this.data.IDCardIs != '' && this.data.IDCardThe != '') {
        this.setData({
          actives1: 'actives'
        })
      } else {
        this.setData({
          actives1: ''
        })
      }
    } else if (item == 3) {
      this.setData({
        companyName: val,
        companyNameNum: cur
      })
      if (this.data.companyName != '' && this.data.license != '' && this.data.licensePhoto != '') {
        this.setData({
          actives2: 'actives'
        })
      } else {
        this.setData({
          actives2: ''
        })
      }
    } else if (item == 4) {
      this.setData({
        license: val,
        licenseNum: cur
      })
      if (this.data.companyName != '' && this.data.license != '' && this.data.licensePhoto != '') {
        this.setData({
          actives2: 'actives'
        })
      } else {
        this.setData({
          actives2: ''
        })
      }
    } else if (item == 5) {
      this.setData({
        dutuies: val
      })
      if (this.data.avatar != '' && this.data.names != '请进行身份验证' && this.data.companyNames != '请填写您当前就职的公司' && this.data.dutuies != '') {
        this.setData({
          actives3: 'actives'
        })
      } else {
        this.setData({
          actives3: ''
        })
      }
    }
  },
  blur(e) {
    var item = e.currentTarget.dataset.item
    var licenseReg = /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/;
    var IDReg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    if (item == 2) {
      if (this.data.IDCard.replace(/\s+/g, '') != "") {
        if (IDReg.test(this.data.IDCard)) {} else {
          this.setData({
            IDCardPlaceholder: "格式不正确",
            IDCardPlaceholderClass: "placeholderClassErr",
            IDCard: ""
          })
        }
      } else {
        this.setData({
          IDCard: "",
        })
      }
    } else if (item == 4) {
      if (this.data.license.replace(/\s+/g, ' ') != "") {
        if (licenseReg.test(this.data.license)) {} else {
          this.setData({
            licensePlaceholder: "格式不正确",
            licensePlaceholderClass: "placeholderClassErr",
            license: "",
            licenseNum: 0
          })
        }
      } else {
        this.setData({
          license: "",
          licenseNum: 0
        })
      }
    }
  },
  complete(e) {
    var item = e.currentTarget.dataset.item
    if (item == 1) {
      if (this.data.name != '' && this.data.IDCard != '' && this.data.IDCardIs != '' && this.data.IDCardThe != '') {
        this.setData({
          names: this.data.name,
          show: false
        })
        if (this.data.avatar != '' && this.data.names != '请进行身份验证' && this.data.companyNames != '请填写您当前就职的公司' && this.data.dutuies != '') {
          this.setData({
            actives3: 'actives'
          })
        } else {
          this.setData({
            actives3: ''
          })
        }
      }
    } else if (item == 2) {
      if (this.data.companyName != '' && this.data.license != '' && this.data.licensePhoto != '') {
        this.setData({
          companyNames: this.data.companyName,
          show: false
        })
        if (this.data.avatar != '' && this.data.names != '请进行身份验证' && this.data.companyNames != '请填写您当前就职的公司' && this.data.dutuies != '') {
          this.setData({
            actives3: 'actives'
          })
        } else {
          this.setData({
            actives3: ''
          })
        }
      }
    } else if (item == 3) {
      if (this.data.avatar != '' && this.data.names != '请进行身份验证' && this.data.companyNames != '请填写您当前就职的公司' && this.data.dutuies != '') {
        var obj = {
          token: wx.getStorageSync('userInfo').token,
          rc_id: this.data.rc_id,
          head_portrait: this.data.avatar,
          name: this.data.name,
          idcard: this.data.IDCard,
          idcard_path: this.data.IDCardIs,
          idcard_other_path: this.data.IDCardThe,
          company: this.data.companyName,
          business_license: this.data.license,
          business_license_path: this.data.licensePhoto,
          post: this.data.dutuies,
        }
        var storage = wx.getStorageSync('userInfo')
        app.post('/Recruit/setRecruitCard', obj).then((res) => {
          if (res.data.status == 1) {
            console.log(res);
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 1000
            })
            let pages = getCurrentPages()
            var index = pages[pages.length - 2]
            if (index.data.components) {
              var components = JSON.parse(JSON.stringify(index.data.components))
              components[7].url = "/pages/index/recruitment/index"
              index.setData({
                components: components
              })
            } else {
              index.getMineInfo()
            }
            if (!storage.card) {
              storage.card = 1
              setTimeout(() => {
                wx.redirectTo({
                  url: '/pages/index/recruitment/index'
                })
              }, 1000)
            } else {
              setTimeout(() => {
                wx.navigateBack({
                  delta: 1
                })
              }, 1000)
            }
            storage.rc_id = res.data.data.rc_id
            wx.setStorageSync('userInfo', storage)
          }
        })
      }
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
  /**
   * 生命周期函数--监听页面加载
   */
  // 91330327MA298MDQ8F
  onLoad(options) {
    setTimeout(()=>{
      wx.showLoading({
        title: '加载中',
      })
    },200)
    wx.setNavigationBarTitle({
      title: '编辑名片',
    })
    this.setData({
      card: wx.getStorageSync('userInfo').card
    })
    app.post('/Recruit/getRecruitCard', {
      token: wx.getStorageSync('userInfo').token
    }).then((res) => {
      if (res.data.status == 1) {
        setTimeout(()=>{
          wx.hideLoading()
        },500)
        this.setData({
          rc_id: res.data.data.rc_id,
          avatar: res.data.data.head_portrait,
          name: res.data.data.name,
          names: res.data.data.name,
          IDCard: res.data.data.idcard,
          IDCardIs: res.data.data.idcard_path,
          IDCardThe: res.data.data.idcard_other_path,
          companyName: res.data.data.company,
          companyNames: res.data.data.company,
          companyNameNum: res.data.data.company.length,
          license: res.data.data.business_license,
          licenseNum: res.data.data.business_license.length,
          licensePhoto: res.data.data.business_license_path,
          dutuies: res.data.data.post,
          actives3: 'actives',
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