// components/chefRegister_gang/gang.js
const app = getApp()
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
    chef: {
      name: '俞古古',
      avatar: '../../icon/4-002.png',
      color: '',
      prentice: [{
          name: '俞古古',
          avatar: '../../icon/4-002.png',
          color: '',
          prentice: [{
            name: '俞古古',
            avatar: '../../icon/4-002.png',
            color: '',
            prentice: [{
                name: '俞古古',
                avatar: '../../icon/4-002.png',
                color: '',
              },
              {
                name: '俞古古',
                avatar: '../../icon/4-002.png',
                color: '',
              }
            ]
          }]
        },
        {
          name: '俞古古',
          avatar: '../../icon/4-002.png',
          color: '',
          prentice: [{
            name: '俞古古',
            avatar: '../../icon/4-002.png',
            color: '',
          }]
        }
      ]
    },
    treeList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    treeClick(e) {
      console.log(e)
      const t = this.selectAllComponents('#treeSelect');
      t.forEach(item => {
        item.click(e);
      })
      const {
        id,
        value
      } = e.detail;
      console.log(e.detail)
    },
    getData(){
      app.post('/chefoperation/getClan', {
        token: wx.getStorageSync('userInfo').chef_token
      }).then(res => {
        if (res.data.status == 1) {
          this.setData({
            treeList:[res.data.data]
          })
          wx.hideLoading()
        }
      })
    }
  },
  lifetimes: {
    attached: function () {
      wx.showLoading({
        title: '加载中',
      })
      this.setData({
        treeList:[]
      })
      this.getData()

    }
  }
})