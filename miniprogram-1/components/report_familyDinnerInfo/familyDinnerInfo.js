// components/familyDinnerInfo/familyDinnerInfo.js
const app = getApp()
const utils = require("../../utils/utils")
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    domain: app.domain + "/img/chef/",
    value1: "",
    value2: "",
    // value3: "",
    // value4: "",
    value5: "",

    fontColor1: "",
    fontColor2: "",
    fontColor3: "",
    show1: false,
    val1: "请选择乡宴类型",
    val2: "请选择开始日期",
    val3: "请选择结束日期",
    list1: [],
  },

  methods: {
    // 获取焦点
    inputs(e) {
      var index = e.currentTarget.dataset.index
      var valur = e.detail.value
      if (index == 1) {
        this.setData({
          value1: valur
        })
      } else if (index == 2) {
        this.setData({
          value2: valur
        })
      } else if (index == 4) {
        this.setData({
          value4: valur
        })
      }
      // else if (index == 3) {
      //   this.setData({
      //     value3: valur
      //   })
      // }  else if (index == 5) {
      // this.setData({
      //   value5: valur
      // })
      // }
    },
    blur(e) {
      var index = e.currentTarget.dataset.index
      if (index == 1) {
        if (this.data.value1.trim() != "") {
          if (this.data.value1.indexOf(" ") != -1) {
            wx.showToast({
              title: '请输入合法姓名',
              icon: 'error',
              duration: 1000 //持续的时间
            })
            this.setData({
              value1: ""
            })
          }
        } else {
          this.setData({
            value1: ""
          })
        }
      } else if (index == 2) {
        var regExp = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
        if (this.data.value2.trim() != "") {
          if (this.data.value2.indexOf(" ") != -1 || !regExp.test(this.data.value2)) {
            wx.showToast({
              title: '请输入合法电话',
              icon: 'error',
              duration: 1000 //持续的时间
            })
            this.setData({
              value2: ""
            })
          }
        } else {
          this.setData({
            value2: ""
          })
        }
      } else if (index == 4) {
        if (this.data.value4.trim() != "") {
          if (this.data.value4.indexOf(" ") != -1 || Number(this.data.value4).toString() == "NaN") {
            wx.showToast({
              title: '请输入合法数字',
              icon: 'error',
              duration: 1000 //持续的时间
            })
            this.setData({
              value4: ""
            })
          }
        } else {
          this.setData({
            value4: ""
          })
        }
      }
      // else if (index == 3) {
      //   if (this.data.value3.trim() != "") {
      //     if (this.data.value3.indexOf(" ") != -1 || Number(this.data.value3).toString() == "NaN") {
      //       wx.showToast({
      //         title: '请输入合法数字',
      //         icon: 'error',
      //         duration: 1000 //持续的时间
      //       })
      //       this.setData({
      //         value3: ""
      //       })
      //     }
      //   } else {
      //     this.setData({
      //       value3: ""
      //     })
      //   }
      // } 
      // }else if (index == 5) {
      // if (this.data.value5.trim() != "") {
      //   if (this.data.value5.indexOf(" ") != -1 || Number(this.data.value5).toString() == "NaN") {
      //     wx.showToast({
      //       title: '请输入数字类型',
      //       icon: 'error',
      //       duration: 1000 //持续的时间
      //     })
      //     this.setData({
      //       value5: ""
      //     })
      //   }
      // } else {
      //   this.setData({
      //     value5: ""
      //   })
      // }
    },
    open() {
      this.setData({
        show1: !this.data.show1,
      })
    },
    close(e) {
      var index = e.currentTarget.dataset.index
      this.setData({
        val1: this.data.list1[index],
        show1: false,
        fontColor1: "fontColor"
      })
    },
    closes() {
      if (this.data.val1 != "请选择乡宴类型") {
        this.setData({
          show1: false
        })
      } else {
        this.setData({
          show1: false,
          fontColor1: ""
        })
      }
    },
    findObj(Arr, j) {
      var a = {}
      Arr.forEach((i) => {
        if (i.code == j) {
          a = i
        }
      })
      return a
    },
    bindDateChange(e) {
      var item = e.currentTarget.dataset.item
      if (item == 1) {
        var aa = this.getDate(e.detail.value)
        if (aa > 2) {
          this.setData({
            val2: e.detail.value,
            fontColor2: "fontColor"
          })
          if (this.data.val3 != '请选择结束日期') {
            var bb = this.getDate(this.data.val3)
            if (aa > bb) {
              this.setData({
                val3: "请选择结束日期",
                fontColor3: ""
              })
            }
          }
        } else {
          wx.showToast({
            title: '需提前三天报备',
            icon: 'error',
            duration: 1000 //持续的时间
          })
        }
      } else if (item == 2) {
        var aa = this.getDate(e.detail.value)
        if (this.data.val2 != '请选择开始日期') {
          var bb = this.getDate(this.data.val2)
          if (aa < bb) {
            wx.showToast({
              title: '请选择正确日期',
              icon: 'error',
              duration: 1000 //持续的时间
            })
          } else if(aa-bb>6){
            wx.showToast({
              title: '请选择七天以内',
              icon: 'error',
              duration: 1000 //持续的时间
            })
          }else {
            this.setData({
              val3: e.detail.value,
              fontColor3: "fontColor"
            })
          }
        } else {
          wx.showToast({
            title: '先选择开始日期',
            icon: 'error',
            duration: 1000 //持续的时间
          })
        }
      }
    },
    nextStep1() {
      var data = {
        m_id: 0,
        m_contacts: this.data.value1,
        m_phone: this.data.value2,
        m_type: this.data.list1.indexOf(this.data.val1) + 1,
        m_start_date: this.data.val2,
        m_end_date: this.data.val3,
        // m_banquet_number: this.data.value3,
        m_tables: this.data.value4,
        // m_holding_days: this.data.value5,
      }
      if (data.m_name != "" && data.m_phone != "" && data.m_type != "请选择乡宴类型" && data.m_start_date != "请选择举办时间" && data.m_end_date != "请选择结束时间" && data.m_tables != "") {
        wx.setStorageSync('entryInfo', data)
        var setAddr = wx.getStorageSync('setAddr')
        if(setAddr && setAddr.m_ids==2 && (setAddr.a_days[0]!=data.m_start_date||setAddr.a_days[setAddr.a_days.length-1]!=data.m_end_date)){
          wx.removeStorageSync('setAddr')
        }
        this.triggerEvent("nextStep1", {
          go: 2
        })
      } else {
        wx.showToast({
          title: '请完善信息',
          icon: 'error',
          duration: 1000 //持续的时间
        })
      }
    },
    getDate(days) {
      var date = utils.formatDate(new Date());
      var start_num = new Date(date.replace(/-/g, "/"))
      var end_num = new Date(days.replace(/-/g, "/"))
      let day = parseInt((end_num.getTime() - start_num.getTime()) / (1000 * 60 * 60 * 24))
      return day
    },
  },
  lifetimes: {
    attached() {
      var entryInfo = wx.getStorageSync('entryInfo')
      var list = []
      wx.getStorageSync('types').forEach(i => {
        list.push(i.mt_name)
      })
      this.setData({
        list1: list
      })
      if (entryInfo) {
        this.setData({
          value1: entryInfo.m_contacts,
          value2: entryInfo.m_phone,
          fontColor1: "fontColor",
          fontColor2: "fontColor",
          fontColor3: "fontColor",
          // value3: entryInfo.m_banquet_number,
          val1: this.data.list1[entryInfo.m_type],
          val2: entryInfo.m_start_date,
          val3: entryInfo.m_end_date,
          value4: entryInfo.m_tables,
          // value5: entryInfo.m_holding_days
        })
      }
    }
  }
})